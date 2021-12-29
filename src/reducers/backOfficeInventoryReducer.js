import { BACKOFFICE_INVENTORY_TYPES } from '../actions/backOficeInventoryActions';
import { ITEM_PRODUCTS } from '../../resources/js/constants/ConstItem';
import "../../resources/css/sweetAlert.css"
import swal from 'sweetalert2';
import { BACKOFFICE_TURN_TYPES } from '../actions/backofficeTurnActions';
import { create } from 'lodash';


var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
var todayString =  dd +'/'+mm +'/' +yyyy

const sortById = (nonSorted) =>{
    const sortedElements =[];
    let sortedOrder = [];
    nonSorted.map((chair)=>
        sortedOrder.push(
            {order : chair.id}
        )
    )
    sortedOrder.sort(function(a, b) {
        return a.order - b.order;
    });

    sortedOrder.map(sortedId=>
        sortedElements.push(
            ...nonSorted.filter(turn => turn.id == sortedId.order)
        )
    )
    return sortedElements
}

const createNewVirtual= (allProducts)=>{
    let allIds= [];
    allProducts.map(product=>{
        allIds.push(product.id)
    });
    let newId = Math.max(...allIds) + 1;
    let newProductSqueleton =
        {
        id: newId,
        name: "Nuevo Producto",
        sku: "",
        img: "./img_product.jpg",
        description: "Descripcion del producto",
        quantity: 1,
        price: "",
        stock: 10,
        inmutableStock:10,
        categories_id: 1,
        created_at: todayString,
        updated_at: todayString,
        status: "NONACTIVE"
      }
    return newProductSqueleton;
}

export const ProductsData ={
    allProducts : sortById(ITEM_PRODUCTS.products),
    filteredBysearch : sortById(ITEM_PRODUCTS.products),
    allCategories : sortById(ITEM_PRODUCTS.categories),
    newProductSqueleton :createNewVirtual(ITEM_PRODUCTS.products),
}

export function backofficeInventoryReducer(state, action){
    switch(action.type){

        case BACKOFFICE_INVENTORY_TYPES.CHANGE_PRODUCT_VALUE :{
            let editableProduct = state.allProducts.find(product => product.id == action.productId) ? state.allProducts.find(product => product.id == action.productId) : state.newProductSqueleton
            let returnAllProducts = state.allProducts.filter(product => product.id != action.productId);
            editableProduct[action.editableField] =action.payload 
            returnAllProducts.push(editableProduct);
            let updateEsqueleton = state.allProducts.find(product => product.id == action.productId) ? state.newProductSqueleton : createNewVirtual(returnAllProducts);
            return {...state, allProducts: sortById(returnAllProducts), newProductSqueleton: updateEsqueleton, filteredBysearch:sortById(returnAllProducts)}
        }


        case BACKOFFICE_INVENTORY_TYPES.FILTERED : {

            let filteredProducts = state.allProducts.filter(
                function(product){
                    const id = toString(product.id)
                    const name = product.name
                    const sku = toString(product.sku)
                    const description = product.description
                    const price = toString(product.price)
                    const created_at = toString(product.created_at)
                    const updated_at = toString(product.updated_at)
                    const search = (id+" "+name + " " +sku + " " + description + " " + price + " " + created_at + " " + updated_at).toUpperCase()
                    const stringsearched = action.payload.toUpperCase()
                    return search.indexOf(stringsearched) > -1
                })

            if (action.category > 0){
                filteredProducts = filteredProducts.filter(product => product.categories_id==action.category)
            }
            return {...state,filteredBysearch: sortById(filteredProducts)}
        }



        default :{
            return state;
        }
    }
}