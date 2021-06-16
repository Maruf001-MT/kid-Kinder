
//Ripple button
  const btn=document.querySelector(".btn");
     btn.onmousemove=function(e){
       const x=e.pageX-btn.offsetLeft;
       const y=e.pageY-btn.offsetTop;
       
       btn.style.setProperty('--x',x+'px');
       btn.style.setProperty('--y',y+'px');
     }
     
     
   //sticky navbar
   window.addEventListener("scroll",function(){
   var header=document.querySelector(".navbar");
  header.classList.toggle("sticky",window.scrollY>40)
   })
   
  
   
   //menubar toggle and navigation
   
   const navigation=document.querySelector('.navigation');
  document.getElementById('toggle').onclick=function(){
   this.classList.toggle('active');
    navigation.classList.toggle('active');
   }
function menuItem(){
  document.querySelector(".navigation").classList.remove("active");
  document.querySelector("#toggle").classList.remove("active");
}

