const {readFile , writeFile} = require("fs")

readFile('./containers/app.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log(result);
    }

    writeFile('./containers/async-text.txt','this is the async way of creating a flie',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        console.log(result);
    })


})

