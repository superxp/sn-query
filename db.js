const mysql   = require('mysql');
const log = require('electron-log');
const connection = mysql.createConnection({
  host     : '10.20.1.215',
  user     : 'aiot_iot_demo',
  password : '6brfC5_dsAuXqjMm',
  database : 'aiot_iot_demo'
});

log.info('准备连接MYSQL');
connection.connect();
 log.info('连接MYSQL成功！');

 
function db(){

}

db.prototype.existSn =function(sn) {



    return new Promise( (resolve,reject)=>{ connection.query('SELECT * FROM iot_device_info where sn = "'+sn+'"',  (error, results, fields) => {
      if (error)
        reject(error);
       resolve(results);
    })
  })
} 

db.prototype.closeConnection = function(){
  connection.end((err)=>{
    if(err) return log.info(err);
   log.info('[Mysql connection end]');
  });
}


module.exports = new db();




