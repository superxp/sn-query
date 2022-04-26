// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const db =require('./db')
const log = require('electron-log');
document.getElementById('checkData').addEventListener('click', async () => {
    log.info('点击事件发生');
    let result   = await  db.existSn(document.getElementById('sn').value);
    log.info('sn查詢結果'+ result);
    if(result && result.length>0){
        document.getElementById('tips').innerHTML='数据存在';
        document.getElementById('tips').style.backgroundColor="white";
    }else{
        document.getElementById('tips').style.backgroundColor="red";
        document.getElementById('tips').innerHTML='数据不存在';
    }
    
    //数据存在，调用playwright 提交SQL流程（登录，查询，提交）
   



  })