const {Pool} =require("pg")



const dp =new Pool ({


    user:"postgres",
    password:"0000",
    host:"localhost",
    port:"5432",
    database:"task_managment"
});
// to delete table
// const TaskTable =`DROP TABLE task;`;


const TaskTable =`CREATE TABLE Task (

Taskid serial PRIMARY KEY,
title  VARCHAR ( 500 ) UNIQUE  NOT NULL,
description  VARCHAR ( 500 ) UNIQUE  NOT NULL,
deleted  INT  NOT NULL);`;




dp.query(TaskTable).then ((res)=>
{console.log("user table  has been created" + res);
}).catch((err)=>{console.log("There was an error "+err )})



// dp.connect()
//   .then(() => {
//     console.log("Connected to the database");
//     return dp.end();
//   })
//   .catch((err) => {
//     console.error("Connection error:", err.message);
//     console.error("Error details:", err);
//   });
