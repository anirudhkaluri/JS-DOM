function load(){
    const booklist=document.querySelector("#book-list");
    console.log("node type of #book-list is",booklist.nodeType);
    console.log("node name of #book-list is",booklist.nodeName);
    console.log("does #book-list element have child nodes?",booklist.hasChildNodes()); //it returns either true or false
    
    var clonedBookList=booklist.cloneNode(true); //true because we want to go deeply within node to give nested content
    console.log("the cloned booklist with true argument is",clonedBookList);
    clonedBookList=booklist.cloneNode(false);
    console.log("the cloned booklist with false argument is",clonedBookList);



}