const express =require("express");
const bodyParser=require("body-parser");
const app= express();
let item=" "
let items=[];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    
    let today=new Date();

    let currentDay=today.getDay();
       let day="";
       let options ={
           weekday:"long",
           day:"numeric",
           month:"long",
       };

        day=today.toLocaleDateString("en-IN",options);

       /*switch(currentDay){
           case 0:
               day="Sunday";
               break;
            case 1:
               day="Monday";
               break;
            case 2:
               day="Tuesday";
               break;
            case 3:
               day="Wednesday";
               break;
            case 4:
               day="Thursday";
               break;
            case 5:
               day="Friday";
               break;
            case 6:
               day="Saturday";
               break;
            default:
                console.log("Error:current day is equal to:"+currentDay);


       }
    /*if (currentDay===1|| currentDay===0)
    {   day="Weekend"
    }else{
        day="Weekday";
        
      
    }*/
    res.render("list",{kindOfDay:day,newListItems:items});
});
app.post("/",function(req,res){
 item=req.body.newItem;
 items.push(item);
    
    res.redirect("/");
});
    
app.listen(3000,function(){
    console.log("Server started on port 3000 ");
});