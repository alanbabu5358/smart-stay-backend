const db = require("../config/db");

const User = {

 getAllUsers: () => {

 return new Promise((resolve,reject)=>{

 db.query(
 "SELECT id,name,email,role FROM users",

 (err,result)=>{

 if(err) reject(err);
 else resolve(result);

 });

 });

 },

 createUser:(name,email,password)=>{

 return new Promise((resolve,reject)=>{

 const sql=
 "INSERT INTO users(name,email,password) VALUES (?,?,?)";

 db.query(sql,
 [name,email,password],

 (err,result)=>{

 if(err) reject(err);
 else resolve(result.insertId);

 });

 });

 }

};

module.exports=User;