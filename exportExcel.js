//json-->xlsx
var fs = require('fs')
var json2xls = require('json2xls');

//read json file
fs.readFile('output.json','utf8',(err,data)=>{
    if (err) throw err;
    var json = JSON.parse(data);
    var jsonArray = [];
    json.forEach(function(item){
      var temp = {  
        "No" : item.No,
        "key" : item.key,
        "en_US" : item.en_US,
        "ch_CN" : item.ch_CN,
        "ja_JP" : item.ja_JP,
        "ko_KR" : item.ko_KR,
      }
      jsonArray.push(temp);
    });
    
    var xls = json2xls(jsonArray);
    //Write xlsx
    fs.writeFileSync('output.xlsx', xls, 'binary');
  })