function load(){
    var booklist=document.querySelector("#book-list");
    console.log("The parent node is:",booklist.parentNode);
    console.log("The parent node is:",booklist.parentElement); //DOES EXACTLY THE SAME THING 
    console.log("All the child nodes",booklist.childNodes); 
    //node.childNodes will return a NodeList of nodes
    //this list will also have line breaks in it
    //[text, h2, text, a#linktype, text, ul, text] is returned by booklist.childNodes;
    //the "text" in this list is line break. because after div tag there is nextline. after h2, there is nextline.
    //after a tag, there is another line and so on etc..
    //in the console.log  expand this node 
    //the data will be "\n"
    //we dont want those text nodes
    console.log("All the child nodes without linebreaks",booklist.children);//this wont give you linebreaks as nodes

    console.log("booklist next sibling is:",booklist.nextSibling);
    //this will give out text
    //why? because the next node is a linebreak. there is a line break between <div></div> and <form></form>
    //what if we dont want that linebreak? what if i want next sibling element?
    console.log("booklist next sibling is:",booklist.nextElementSibling);
    //this will give <form>

    //what if I want previous sibling?
    console.log("booklist previous sibling is:",booklist.previousSibling);
    //again this will give text
    //but the previous sibling is <header> . what if i want the previous sibling element and skip the text node?
    console.log("booklist previous sibling is:",booklist.previousElementSibling);

    booklist.previousElementSibling.querySelector("p").innerHTML+='<br> I was added';
    //booklist is a referene to div 
    //its previous element sibling is <header> tag
    //when you append the queryselector to that reference it searches in that scope
    //we selected the p tag in it
    //then we used the textContent to modify the text inside the p tag
} 