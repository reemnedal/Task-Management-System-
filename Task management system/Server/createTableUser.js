const {Pool} =require("pg")



const dp =new Pool ({


    user:"postgres",
    password:"0000",
    host:"localhost",
    port:"5432",
    database:"task_managment"
});



const usersTable =`CREATE TABLE users (

userid serial PRIMARY KEY,
username VARCHAR ( 50 ) UNIQUE  NOT NULL,
email VARCHAR ( 50 ) UNIQUE NOT NULL);`;




dp.query(usersTable).then ((res)=>
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
