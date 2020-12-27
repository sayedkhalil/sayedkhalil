let blo=JSON.parse(localStorage.getItem("blo"))
let blog=JSON.parse(localStorage.getItem("blog"))

document.querySelector(".titleblog").innerHTML= blo.title
  document.querySelector(".datblog").innerHTML=blo.dat
  document.querySelector(".containerblog").innerHTML=blo.bloger
  blo.keywords.forEach((e)=>{
    document.querySelector(".keywords").innerHTML+=` <li class="list-inline-item m-1 border-info p-1 pointer rounde text-dark border">${e}</li>`
  })
 blog.forEach((b)=>{
  document.querySelector(".blogs").innerHTML+=`<h6 class="art text-center text-dark p-1 m-2 border border-info w-100 pointer">${b}</h6>`
 })