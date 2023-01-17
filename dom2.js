function load(){
    const stevejobs=document.querySelector('#book-list li:nth-child(2) .name');
//division id is book-list. In that choose li element. We use pseudo class :nth-child(2) to select 2nd list element
//in that list element choose any child tag with .name as class name
//book-list<space>li:nth-child(2)<space>.name are descendent selectors type
    console.log(stevejobs);


    var allbooks=document.querySelector('#book-list li .name');
    //querySelector will return only one 
    console.log(allbooks); //this will return the first book
   //what if we want all of them? we use querySelectorAll
   allbooks=document.querySelectorAll('#book-list li .name');
   console.log(allbooks); //this returns a NodeList
   //a NodeList Collection of document nodes
   //there is no need to convert into an array to iterate
   //however if we use getElementByClassName we need to convert it into an array since it is an html collection
   allbooks.forEach(element=>{
    console.log(element);
   });
   //we can convert it into an array if we want like in dom1.js
   if(Array.isArray(allbooks)==false){
    console.log('is allbooks an array?',Array.isArray(allbooks));
    Array.from(allbooks).forEach(element=>{
        console.log(element);
    });
   }

}
