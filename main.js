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

let i = 0;

let main = document.querySelector("main");
let container = document.createElement("div");
 container.classList.add("container");
 main.append(container);

let slider = document.createElement("div");
slider.classList.add("slider");
container.append(slider);

let item = document.createElement("div");
item.classList.add("item");
slider.append(item);

let img = document.createElement("img");
 img.classList.add("img-size");
 item.append(img)
 img.src = arrayimg[i].image;

let title = document.createElement("div");
 title.classList.add("title");
 title.innerHTML = arrayimg[i].title;
 item.append(title);

let desc = document.createElement("div");
 desc.classList.add("desc");
 desc.innerHTML = arrayimg[i].desc;
 item.append(desc);

let next = document.createElement("div");
 next.classList.add("next");
 next.classList.add("fa-solid");
 next.classList.add("fa-angle-up");
 slider.append(next);
 
let prev = document.createElement("div");
 prev.classList.add("prev");
 prev.classList.add("fa-solid");
 prev.classList.add("fa-angle-down");
 slider.append(prev);

next.addEventListener("click",
  function(){
     i++;
   if (i > arrayimg.length - 1) {
    i = 0;
    }
    img.src = arrayimg[i].image;
    title.innerHTML = arrayimg[i].title;
    desc.innerHTML = arrayimg[i].desc;
   

   }
 );


prev.addEventListener("click",
 function(){
   i--;
    if (i < 0) {
   i = arrayimg.length - 1;
   }
   img.src = arrayimg[i].image;
   title.innerHTML = arrayimg[i].title;
   desc.innerHTML = arrayimg[i].desc;
   }

);



