let arrayimg = [

  {
    "image" : "img/01.webp",
    "title" : "Marvel's Spiderman Miles Morale",
    "desc" : "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man."
  },

  {
     "image" : "img/02.webp",
     "title" : "Ratchet & Clank: Rift Apart",
     "desc" : "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality."
   },

   {
     "image" : "img/03.webp",
     "title" : "Fortnite",
     "desc" : "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos."
   },

   {
     "image" : "img/04.webp",
     "title" : "Stray",
     "desc" : "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city"
   },

   {
     "image" : "img/05.webp",
     "title" : "Marvel's Avengers",
     "desc" : "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay."
   }
]
let slider=document.querySelector(".slider");
arrayimg.forEach((element) =>{
  let item=document.createElement("div");
  item.classList.add("item");
  slider.append(item);
  let img = document.createElement("img");
  img.classList.add("img-size");
  img.src = element.image;
  item.append(img);

  let title = document.createElement("div");
  title.classList.add("title");
  title.innerHTML = element.title;
  item.append(title);

  let desc = document.createElement("div");
  desc.classList.add("desc");
  desc.innerHTML = element.desc;
  item.append(desc);
}
);

const divArray=document.getElementsByClassName("item")
console.log(divArray)
divArray[0].classList.add("active");
let activeItem=0;

let prev = document.createElement("div");
 prev.classList.add("next");
 prev.classList.add("fa-solid");
 prev.classList.add("fa-angle-up");
 slider.append(prev)

let next = document.createElement("div");
 next.classList.add("prev");
 next.classList.add("fa-solid");
 next.classList.add("fa-angle-down");
 slider.append(next)


prev.addEventListener("click",
 function(){
  if(activeItem < divArray.length - 1){
    divArray[activeItem].classList.remove("active");
    activeItem ++;
    divArray[activeItem].classList.add("active");
  }
  else{
    divArray[activeItem].classList.remove("active");
    activeItem= 0;
    divArray[activeItem].classList.add("active");
  }
 
 }
 );

next.addEventListener("click",
 function(){
  if(activeItem > 0){
    divArray[activeItem].classList.remove("active");
    activeItem--;
    divArray[activeItem].classList.add("active");
  }
  else{
    divArray[activeItem].classList.remove("active");
    activeItem=4;
    divArray[activeItem].classList.add("active");
  }
 }
 
 );








