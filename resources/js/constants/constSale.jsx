export const ITEM_SALE = {
    orderSale: [{
      id: 1,
      resumen: [{
       name_item: "producto 1",
       cant_item: "2",
       total_item: "$150",
       price_item: "$75"
      },
      {
        name_item: "producto 2",
        cant_item: "1",
        total_item: "$200",
        price_item: "$200"
       },
       {
        name_item: "producto 4",
        cant_item: "5",
        total_item: "$100",
        price_item: "$20"
       }],
      dataClient: {
      name_client: "client 1",
      email_client: "client1@gmail.com",
      phone_client: "123564357",
      },
      total: "$450", //Suma total del total del precio de producto
      created_at: "2022/01/13",
      updated_at: "2022/01/13",
      status: "ACTIVE"
    },
    {
      id: 2,
      resumen: [{
        name_item: "producto 3",
        cant_item: "2",
        total_item: "$400",
        price_item: "$200"
      }],
      dataClient: {
      name_client: "client 2",
      email_client: "client2@gmail.com",
      phone_client: "899077863",
      },
      total: "$400", //Suma total del total del precio de producto
      created_at: "2022/01/02",
      updated_at: "2022/01/02",
      status: "NONACTIVE"
      },
      {
        id: 3,
        resumen: [{
         name_item: "producto 1",
         cant_item: "4",
         total_item: "$300",
         price_item: "$75"
        },
        {
          name_item: "producto 3",
          cant_item: "1",
          total_item: "$200",
          price_item: "200"
         }],
        dataClient: {
        name_client: "client 3",
        email_client: " client3@gmail.com",
        phone_client: "097763432",
        },
        total: "$500", //Suma total del total del precio de producto
        created_at: "2021/12/31",
        updated_at: "2021/12/25",
        status: "CONFIRMED"
      }]
  }