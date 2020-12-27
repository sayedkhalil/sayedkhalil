// --------------------------------------------------------------------data

 getdata()

 async function getdata  () {
 await  fetch("https://cv-sayed-default-rtdb.firebaseio.com/.json")
  .then((response) => response.json())
  .then((data) =>localStorage.setItem("data",JSON.stringify(data)));
}
let data=JSON.parse(localStorage.getItem("data"))


//------------------------------------------------------------------- slide
let section = document.querySelectorAll(".section")
let btn = document.querySelectorAll(".bbtn")
btn[0].classList.add("active")
btn.forEach((ell)=>{
    ell.addEventListener("click",()=>{
        section.forEach(e => {e.classList.remove("slide")
        document.querySelector(`.${ell.id}`).classList.add("slide")   
     })
         btn.forEach(el => el.classList.remove("active"))
         ell.classList.add("active")
    })
})

$(function(){
  $(".bm").click(function () {
    $(this).css("color", "#41aea9");
    $(".bm").not($(this)).css("color", "rgb(29, 28, 28)");
    $("html,body").animate(
      {
        scrollTop:
          $("." + $(this).data("scroll")).offset().top -
          $(".header").outerHeight() +
          1,
      },
      1500
    );
  });
  $(window).scroll(function () {
    
    $(".section").each(function () {
      if (
        $(window).scrollTop() >
        $(this).offset().top - $(".header").outerHeight()
      ) {
        let a = $(this).attr("id");
        $(".bm").css("color", "rgb(29, 28, 28)");
        $(`.bm[data-scroll=${a}]`).css("color", "#41aea9");
        }
    });
  });
})
//------------------------------------------------------------------- avtar
let contact = document.querySelector(".contactbtn")
let job =["Web Designer","Graphic Designer","Social Media Manager","Content Creator"]
let titlejob=document.querySelectorAll(".job")
let i = 0;
let v=0;
typeWriter()
function typeWriter() {
    
    if (i < job[v].length) {
     titlejob[0].innerHTML += job[v].charAt(i);
     titlejob[1].innerHTML += job[v].charAt(i);
      i++;
      setTimeout(typeWriter, 40);
    }else{
        txt=job[v]
        setTimeout(() => {
        if(v < job.length-1){
            v++
            i=0
            titlejob[0].innerHTML="" 
            titlejob[1].innerHTML=""
        typeWriter()
        }else{
          titlejob[0].innerHTML="" 
          titlejob[1].innerHTML=""     
            i=0
            v=0
            typeWriter()
        }
       }, 4000);
    }
  }
   contact.addEventListener("click",()=>{
     if(screen.width>980){
     section.forEach(e => e.classList.remove("slide"))
    document.querySelector(".contact").classList.add("slide")}
   })
  $(function(){
    $(".contactbtn").click(function () {
      if(screen.width<980){
            $("html,body").animate(
        {
          scrollTop:
            $(".contact").offset().top -
            $(".header").outerHeight() +
            1,
        },
        2500
      );}
    });
  })
 
//   --------------------------------------------------------------------cv--------------------
$(function(){
  $(".cv").scroll(function (){
    if($(".cv").scrollTop() >
   $(".skills").offset().top ){
     var a=`${90}%`
     var b=`${95}%`
     var c=`${80}%`
     var d=`${90}%`
     var e=`${80}%`
     $(".ps").css("width",a)
     $(".ps").text(a)
     $(".ai").css("width",b)
     $(".ai").text(b)
     $(".wp").css("width",c)
     $(".wp").text(c)
     $(".ht").css("width",d)
     $(".ht").text(d)
     $(".js").css("width",e)
     $(".js").text(e)
     $("#ar").css("stroke-dashoffset",0)
     $("#en").css("stroke-dashoffset",180)
   }
 })
 $(window).scroll(function (){
  if($(window).scrollTop() >
 $(".skills").offset().top-300 ){
   var a=`${90}%`
   var b=`${95}%`
   var c=`${80}%`
   var d=`${90}%`
   var e=`${80}%`
   $(".ps").css("width",a)
   $(".ps").text(a)
   $(".ai").css("width",b)
   $(".ai").text(b)
   $(".wp").css("width",c)
   $(".wp").text(c)
   $(".ht").css("width",d)
   $(".ht").text(d)
   $(".js").css("width",e)
   $(".js").text(e)
   $("#ar").css("stroke-dashoffset",0)
   $("#en").css("stroke-dashoffset",180)
 }
})

})
// ------------------------------------------------------------------------work
let workcontainer=document.querySelector(".contairwoek")
let channel =document.querySelector(".channel")
let ima =document.querySelector(".im")
let slideimage =document.querySelector(".slideimage")
let work =data.work
let scale ="scale"
let up ="up"
let lft ="lef"
work.shift();

document.querySelector(".all").addEventListener("click",()=>{
  workcontainer.innerHTML=""
  uiwork(work,scale)
})
document.querySelector(".image").addEventListener("click",()=>{
  workcontainer.innerHTML=""
  let image = work.filter((im)=>im.class=="image")
  uiwork(image,up)
})
document.querySelector(".print").addEventListener("click",()=>{
  workcontainer.innerHTML=""
  let print = work.filter((im)=>im.class=="print")
  uiwork(print,lft)
})
document.querySelector(".video").addEventListener("click",()=>{
  workcontainer.innerHTML=""
  let video = work.filter((im)=>im.class=="video")
  uiwork(video,scale)
})
uiwork(work,scale)
function uiwork(xx,yy){
xx.forEach((el)=>{
  workcontainer.innerHTML+=` <div class="itemwork col-12  ${yy} col-sm-12 col-md-12 col-lg-5 px-0 bg-light hadow-sm rounded border w-100 position-relative mt-3"  onclick="passed(${el.id})" style=" background-image: url(${el.images[1]});">
    <div class="opa w-100 h-100 position-relative">
    <h5 class=" text-center w-100 py-2 position-absolute">${el.title}</h5>
  </div>
</div>`
})
}
let itemwork= document.querySelector(".itemwork") 
itemwork.style.height=`itemwork.style.width`
function passed(id){
  slideimage.innerHTML=""
  let im = work.find(el=> el.id == id)
  channel.style.display="block"
  ima.setAttribute("src", `${im.images[1]}`)
  document.querySelector(".titleitem").innerHTML=im.title
  document.querySelector(".datem").innerHTML=im.date
  document.querySelector(".tools").innerHTML=im.prog
  let ims = im.images
  ims.shift()
  ims.forEach((i)=>{
    slideimage.innerHTML +=`<img src="${i}" class=" border border-light img-thumbnail"  onclick="passe(this)" alt="">`
  })
document.querySelector(".clos").addEventListener("click",()=>channel.style.display="none")
}  
function passe(u){
ima.src = u.src
}
// ----------------------------------blogger-------------------------------------------------------------
let blog =data.blog
uiplog(blog)
function uiplog(ele) {
  document.querySelector(".blogcontainer").innerHTML=""
ele.forEach((el)=>{
  document.querySelector(".blogcontainer").innerHTML+=`<div class="border pointer itemblog col-12 col-sm-12 col-md-12 col-lg-5 px-0 bg-light hadow-sm rounded" onclick="passeplog(${el.id})" >
  <img class="w-100 rounded" height="60%" src="${el.image}" alt="">
  <div class="art position-relative p-2">
   <p class="bg-info p-1 rounded pos text-light">${el.dat}</p>
   <h5 class="my-2 pt-2">${el.title}</h5>
   <p class="mb-2">${el.sumary}.</p>
  </div>
</div>`
})
}

function passeplog(id){
    let blo = blog.find(el=> el.id == id)
    localStorage.setItem("blo",JSON.stringify(blo))
    localStorage.setItem("blog",JSON.stringify(blog.map((e)=> e.title)))
  
  window.location= "blog.html"
  
} 
// ----------------------------------contact--------------------------------------------------------------
let fname=document.querySelector("#fullname")
let form =document.querySelector("form")
let email=document.querySelector("#email")
let texteria=document.querySelector("#textarea1")
let Config = {
  apiKey: "AIzaSyDSnITg94wA0QE-qiH2omqndiThkeeQE2g",
  authDomain: "contact-fbab7.firebaseapp.com",
  databaseURL: "https://contact-fbab7-default-rtdb.firebaseio.com",
  projectId: "contact-fbab7",
  storageBucket: "contact-fbab7.appspot.com",
  messagingSenderId: "897105336267",
  appId: "1:897105336267:web:b484d2fb7f1b11f306484e",
  measurementId: "G-Z85KT985MZ"
};
firebase.initializeApp(Config);
function firebasePush(input,textarea,name) {


  //prevents from braking
  if (!firebase.apps.length) {
      firebase.initializeApp(config);
  }

  //push itself
  var mailsRef = firebase.database().ref('emails').push().set(
      {
          mail: input.value,
          message:textarea.value,
          name: name.value
      }
  );

}

//push on form submit
if (form) {
  form.addEventListener('submit', function (evt) {
      evt.preventDefault();
    
      firebasePush(email,texteria,fname)
     email.value=""
     texteria.value=""
     fname.value=""
      

    
     
  })
}