import { BACKOFFICE_ORDER_SALES_TYPE } from "../actions/backofficeOrderSaleActions";
import { ITEM_SALE } from "../../resources/js/constants/constSale";

export const salesData = {
    sales : ITEM_SALE.orderSale,
    dashboardSales: ITEM_SALE.orderSale,
}

const sortByDate = (nonSortedSales) =>{
    const sortedSales =[];
    let sortedOrder = [];
    nonSortedSales.map((sale)=>
        sortedOrder.push(
            {order : sale.created_at.split('/')[0]+sale.created_at.split('/')[1]+sale.created_at.split('/')[2], id: sale.id}
        )
    )
    sortedOrder.sort(function(a, b) {
        return a.order - b.order;
    });

    sortedOrder.map(sortedId=>
        sortedSales.push(
            ...nonSortedSales.filter(sale => sale.id == sortedId.id)
        )
    )

    return sortedSales
}

export function orderSalesReducer (state, action){
    switch(action.type){
        case BACKOFFICE_ORDER_SALES_TYPE.SET_SALE_STATUS :{
            let editableSale = state.sales.find(sale=>sale.id == action.saleId);
            let allSales = state.sales.filter(sale=>sale.id != action.saleId);
            editableSale.status = action.newStatus;

            allSales.push(editableSale)

            let allSalesSorted =sortByDate(allSales);
            return {...state, sales: allSalesSorted}
        }

        case BACKOFFICE_ORDER_SALES_TYPE.FILTER_DASHBOARD :{
            const dateMin = action.min.split('-');
            const dateYyyy = dateMin[0];
            const dateMm = dateMin[1];
            const dateDd = dateMin[2];
            const compartaiveMin = parseInt(dateYyyy+dateMm+dateDd);

            const dateMax = action.max.split('-');
            const dateYyyyMax = dateMax[0];
            const dateMmMax = dateMax[1];
            const dateDdMax = dateMax[2];
            const compartaiveMax = parseInt(dateYyyyMax+dateMmMax+dateDdMax);


            let filteredByName;

            let FilteredBydate =  state.sales.filter(sale =>
                    parseInt(sale.created_at.split('/')[0]+sale.created_at.split('/')[1]+sale.created_at.split('/')[2]) >= compartaiveMin && 
                    parseInt(sale.created_at.split('/')[0]+sale.created_at.split('/')[1]+sale.created_at.split('/')[2]) <= compartaiveMax
            );


            if(action.stringSearch != ""){
                filteredByName = FilteredBydate.filter(
                    function(sale){
                        const id = toString(sale.id)
                        const name_item = sale.resumen.name_item;
                        const description = sale.description
                        const name_client = sale.dataClient.name_client;
                        const email_client = sale.dataClient.email_client;
                        const phone_client = sale.dataClient.phone_client;
                        const search = (id+" "+name_item + " "  + description + " " + name_client + " " + email_client + " " + phone_client).toUpperCase()
                        const stringsearched = action.stringSearch.toUpperCase()
                        return search.indexOf(stringsearched) > -1
                    })

            }else {
                filteredByName = FilteredBydate
            }
            
            return {...state, dashboardSales : filteredByName};
        }
        default:{
            return state;
        }
    }

}