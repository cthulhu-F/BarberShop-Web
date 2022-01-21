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
    }
  ],

  activeTurn: [
    {
      status: "ACTIVE",
      date: "30/01/2022",
      time: "08:00",
    },
    {
      status: "ACTIVE",
      date: "20/02/2022",
      time: "09:00",
    },
    {
      status: "ACTIVE",
      date: "15/01/2022",
      time: "10:00",
    }
  ]


}