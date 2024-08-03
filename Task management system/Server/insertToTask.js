const {Pool} =require("pg")



const dp =new Pool ({


    user:"postgres",
    password:"0000",
    host:"localhost",
    port:"5432",
    database:"task_managment"
});



const TaskTable =`INSERT INTO Task (title,description,deleted) VALUES ( 'TASKONE ', 'YOU MUST READ 10 BOOKS' ,0 )`;




dp.query(TaskTable).then ((res)=>
{console.log("DATA  has been INSERTED TO TASK " + res);
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
