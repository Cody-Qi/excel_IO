//xlsx-->json
var fs = require('fs')
var xlsx = require('node-xlsx')
//Get sheets from "needToRead.xlsx"
var sheets = xlsx.parse('needToRead.xlsx');
var row = [];
// range sheets
sheets.forEach(function(sheet){
    //Get log of all sheets' names
    // Get sheet whose name is "Content"
    if(sheet['name']=='Content'){
        //range rows of the sheet
        console.log(sheet['data'].length)
        for(var rowId in sheet['data']){
            //Get rows after the first row(cause it's the title row)
            //Do not need blank keys' value
            if(rowId > 0 && (sheet['data'][rowId].length > 1)){
                //Get columns of each row according to the content
                var rowidJson = 
                {
                    "No":sheet['data'][rowId][0],
                    "key":sheet['data'][rowId][1],
                    "en_US":sheet['data'][rowId][2],
                    "ch_CN":sheet['data'][rowId][3],
                    'ja_JP':sheet['data'][rowId][4],
                    'ko_KR':sheet['data'][rowId][5]
                };
                row.push(rowidJson);
            }
        }
    }
    
});
//format json data
var data = JSON.stringify(row,null,2);
console.log(data)
// write json file
fs.writeFile('output.json', data, (err) => {
    if (err) throw err;
    console.log('Json File is created!');
  });