const phone=document.querySelector("#phone");
const tv=document.querySelector("#tv");
const tablet=document.querySelector("#tablet");
const laptop=document.querySelector("#laptop");
phone.addEventListener("mouseover",function(){
    phone.style.display="none";
    tv.style.display="block";
})
tv.addEventListener("mouseout",function(){
    tv.style.display="none";
    tablet.style.display="block";
})
tablet.addEventListener("mouseover",function(){
    tablet.style.display="none";
    laptop.style.display="block";
})
laptop.addEventListener("mouseout",function(){
    laptop.style.display="none";
    phone.style.display="block";
})