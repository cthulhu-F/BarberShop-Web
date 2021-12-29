export const ITEM_TURNS = {

  configTurns : [
    {
      id: 1,
      name: "Silla 1",
      update_at: "14/12/2021",
      status: "ACTIVE",
      configDay_id: 1,
    },
    {
      id: 2,
      name: "Silla 2",
      update_at: "14/12/2021",
      status: "NONACTIVE",
      configDay_id: 2,
    },
    {
      id: 3,
      name: "Silla 3",
      update_at: "14/12/2021",
      status: "ACTIVE",
      configDay_id: 3,
    },
    {
      id: 4,
      name: "Silla 4",
      update_at: "14/12/2021",
      status: "ACTIVE",
      configDay_id: 4,
    }
  ],
  configDay : [
   {
     id: 1,
     days:{
      mo: "NONACTIVE",
      tu: "12:00/13:00/4",
      we: "10:40/11:40/1",
      th: "10:05/12:00/3",
      fr: "10:00/12:00/5",
      sa: "10:00/12:00/5",
      su: "10:00/12:00/5",
     },
     update_at: "14/12/21",
     status: "ACTIVE",
   },

   {
    id: 2,
    days:{
      mo: "10:00/12:00/5",
      tu: "10:00/12:00/5",
      we: "10:00/12:00/5",
      th: "10:00/12:00/5",
      fr: "10:00/12:00/5",
      sa: "10:00/12:00/5",
      su: "10:00/12:00/5",
     },
    update_at: "14/12/21",
    status: "NONACTIVE",
  },
  {
    id: 3,
    days:{
      mo: "10:00/12:00/5",
      tu: "10:00/12:00/5",
      we: "10:00/12:00/5",
      th: "10:00/12:00/5",
      fr: "10:00/12:00/5",
      sa: "10:00/12:00/5",
      su: "10:00/12:00/5",
     },
    update_at: "14/12/21",
    status: "ACTIVE",
  },
  {
    id: 4,
    days:{
      mo: "10:00/12:00/5",
      tu: "10:00/12:00/5",
      we: "10:00/12:00/5",
      th: "10:00/12:00/5",
      fr: "10:00/12:00/5",
      sa: "10:00/12:00/5",
      su: "10:00/12:00/5",
     },
    update_at: "14/12/21",
    status: "ACTIVE",
  }
  ],

  orderTurns : [
    {
      id: 1,
      name: "Silla 1",
      name_client: "Franco",
      email_client: "jose@gmail.com", 
      phone_client: "+54 3547 506790", 
      date: "14/01/2022",
      time: "08:00",
      turn_duration: "00:15",
      update_at: "14/12/2021", 
      status: "ACTIVE"
    },
    {
      id: 2,
      name: "Silla 1",
      name_client: "Axel",
      email_client: "maria@gmail.com", 
      phone_client: "+54 9 362 459-4434", 
      date: "18/01/2022",
      time: "09:00",
      turn_duration: "00:30",
      update_at: "14/12/2021", 
      status: "ACTIVE"
    },
    {
      id: 3,
      name: "Silla 4",
      name_client: "Florencia",
      email_client: "florencia@gmail.com", 
      phone_client: "0909097867", 
      date: "14/01/2022",
      time: "10:00",
      turn_duration: "01:15",
      update_at: "14/12/2021", 
      status: "NONACTIVE"
    },
    {
      id: 4,
      name: "Silla 3",
      name_client: "martiin",
      email_client: "martiin@gmail.com", 
      phone_client: "45237658", 
      date: "29/12/2021",
      time: "11:00",
      turn_duration: "01:00",
      update_at: "14/12/2021", 
      status: "NONACTIVE"
    },
    {
      id: 5,
      name: "Silla 3",
      name_client: "santiago",
      email_client: "santiago@gmail.com", 
      phone_client: "123543092486'", 
      date: "29/12/2021",
      time: "12:00",
      turn_duration: "00:45",
      update_at: "24/12/2021", 
      status: "CONFIRMED"
    },
    {
      id: 6,
      name: "Silla 2",
      name_client: "ruperto",
      email_client: "ruperto@gmail.com", 
      phone_client: "123578999'", 
      date: "29/12/2021",
      time: "12:00",
      turn_duration: "00:15",
      update_at: "24/12/2021", 
      status: "ACTIVE"
    }
  ]


}