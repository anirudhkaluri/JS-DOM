


 var del_btns=document.querySelectorAll("#book-list .delete");
Array.from(del_btns).forEach(element=>{
    //we add the event listener for each delete button
    element.addEventListener("click",e=>{
        //when we press the delete buttion the  <li></li> must be deleted
        //so first get the li
        const li=e.target.parentElement;
        //e.target will give the element on which it is clicked
        //e.target.parentElement will return the list element <li></li>
        //now go to li's parent and remove li
        //i.e. parent.removeChild
        li.parentNode.removeChild(li); 
        //li.parentNode will give the parent of li
    });
});

const link=document.querySelector("#book-list .linktype");
console.log("hi");
console.log("the link object is:",link);

link.addEventListener('click',e=>{
    e.preventDefault(); //will prevent default action which in this case is navigating to another website 
    link.textContent="we prevented from opening";
});

