let addBtn=document.querySelectorAll(".add-btn");
addBtn.forEach(function(btn){
   btn.addEventListener("click",()=>{
    btn.innerHTML="ADDED!";
    btn.style.paddingTop="26px";
    btn.style.color="#1A120B";
   });

})