let text = document.querySelector("textarea");
let update=document.querySelector(".update");
let remain=document.querySelector(".remain");
text.addEventListener("keyup", function (event) {
    updatec();
  
});
updatec();
function updatec(){
    update.innerText=text.value.length;
    remain.innerText=text.getAttribute("maxlength") - text.value.length;
    console.log(text.value.length);
}
