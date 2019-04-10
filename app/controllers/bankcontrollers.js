const server = require('./../index');
const mongoose = require('./../config/config');
const model = require('./../models/models')

server.post('/file', (req,res) => {
const xlsx = require('xlsx');
const workbook = xlsx.readFile('trans.xlsx');
const sheet_name_list = workbook.SheetNames;
const files = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    files.forEach((file) => {
        let trans = new model(file);
        trans.save().then((item)=> {
            console.log('Saved item', item);
        }, (err) => {
            console.log(err)
        })
    }) 
    res.send('Item saved to the db');
});


server.post('/query', (req,res)=>{
   model.search({
      "bool" : {
        "must": {
          "match": {
            "_id": "5cace920cc30a9600c327640"
                }
            }
    }}, (err, data) => {
       if(err){
           console.log(err);
       }
       res.send(data);
   })
})

//i owuld query the mongodb to give me the fields with credit then get the value for each of those fields then sum it up
server.post('/credit', (req,res)=>{
   model.find({CREDIT: { $exists:true }}).then((creditfields) =>{ 
            let sum = 0;
            creditfields.forEach((creditvalue)=>{
                    sum += creditvalue.CREDIT
                })
                res.send({"Credit":sum});

   }).then(model.find({DEBIT: { $exists:true }}).then((debitfields) =>{ 
        let sum = 0;
        debitfields.forEach((debitvalue)=>{
                sum += debitvalue.DEBIT
            })
            res.send({"Result":sum});
        }))
   .catch((error)=>{
       console.log('Error', error);
   });

   
 })




