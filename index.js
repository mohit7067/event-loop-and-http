const express = require("express");


 const app =express();


 app.get("/home", function (req,res){

   
     
    res.send("Hello");

 });
  
 var books_data=[
   {
      "author": "Chinua Achebe",
      "country": "Nigeria",
      "imageLink": "images/things-fall-apart.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
      "pages": 209,
      "title": "Things Fall Apart",
      "year": 1958
    },
    {
      "author": "Hans Christian Andersen",
      "country": "Denmark",
      "imageLink": "images/fairy-tales.jpg",
      "language": "Danish",
      "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
      "pages": 784,
      "title": "Fairy tales",
      "year": 1836
    },
    {
      "author": "Dante Alighieri",
      "country": "Italy",
      "imageLink": "images/the-divine-comedy.jpg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
      "pages": 928,
      "title": "The Divine Comedy",
      "year": 1315
    },
    {
      "author": "Jane Austen",
      "country": "United Kingdom",
      "imageLink": "images/pride-and-prejudice.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Pride_and_Prejudice\n",
      "pages": 226,
      "title": "Pride and Prejudice",
      "year": 1813
    },
 ]

 
  
 app.get("/books",function(req,res){

       res.send(books_data);
    
 })


app.listen(3000,()=>{
    
     console.log("Listening on port 3000");
});