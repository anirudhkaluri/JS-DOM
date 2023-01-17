function load(){
    var books=document.querySelectorAll('#book-list li .name');
    Array.from(books).forEach(element=>{
        console.log(element.textContent);//we get the text content
    });
    Array.from(books).forEach(element=>{
        element.textContent+="(book title)"; //we changed the text content
    });
    Array.from(books).forEach(element=>{
        console.log(element.textContent);//logging the text content again
    });
    //NOW LETS UPDATE THE HTML
    //book-list is the id of div
    //lets see whats inside it
    var booklist=document.querySelector('#book-list');
    console.log(booklist.innerHTML); //see what is in the booklist
    //now lets change it
    booklist.innerHTML="<span>books more books</span>";
    //lets append to this now
    var html_appen="<span>these are the tags appended</span>"; 
    booklist.innherHTML+=html_appen; //dont know why its not workingssssss
    console.log(booklist.innerHTML);


}