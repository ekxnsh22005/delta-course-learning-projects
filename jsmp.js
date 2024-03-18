let btn = document.querySelector("button");
let  ul = document.querySelector("ul");
let  inp = document.querySelector("input");
btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;
    ul.appendChild(item);

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);
    console.log(inp.value,"is clicked");
    inp.value = ""
})

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let item = event.target.parentElement;
        item.remove();
        console.log("delete");
    }
})

//let delBtns = document.querySelectorAll(".delete");
//for (delBtn of delBtns){
  //  delBtn.addEventListener("click", function(){
    //    console.log("Element deleted");
      //  let par = this.parentElement;
        //par.remove();
        
    //})
//}