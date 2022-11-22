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

let i=0;

let main = document.querySelector("main");
let container=document.createElement("div");
 container.classList.add("container");
 main.append(container)

let slider = document.createElement("div");
 slider.classList.add("slider");
 container.append(slider);

let item = document.createElement("div");
 item.classList.add("item");
 slider.append(item);

let img = document.createElement("img");
 img.classList.add("img-size");
 img.src = arrayimg[i].image;
 item.append(img);

let title = document.createElement("div");
 title.classList.add("title");
 title.innerHTML = arrayimg[i].title;
 item.append(title);

let desc = document.createElement("div");
 desc.classList.add("desc");
 desc.innerHTML = arrayimg[i].desc;
 item.append(desc);

let thumbnails = document.createElement("div");
 thumbnails.classList.add("thumb");
 item.append(thumbnails);

let img1 = document.createElement("img");
 img1.classList.add("img2");
 img1.style.opacity="0.5";
 thumbnails.append(img1);
  img1.src=arrayimg[0].image;

let img2 = document.createElement("img");
 img2.classList.add("img2");
 thumbnails.append(img2);
 img2.src=arrayimg[1].image;

let img3 = document.createElement("img");
 img3.classList.add("img2");
 thumbnails.append(img3);
 img3.src=arrayimg[2].image;

let img4 = document.createElement("img");
 img4.classList.add("img2");
 thumbnails.append(img4);
 img4.src=arrayimg[3].image;

let img5 = document.createElement("img");
 img5.classList.add("img2");
 thumbnails.append(img5);
 img5.src=arrayimg[4].image;

let prev = document.createElement("div");
 prev.classList.add("next");
 prev.classList.add("fa-solid");
 prev.classList.add("fa-angle-up");
 thumbnails.append(prev);

let next = document.createElement("div");
 next.classList.add("prev");
 next.classList.add("fa-solid");
 next.classList.add("fa-angle-down");
 thumbnails.append(next);
let button=document.getElementById("btn")
let click;
let time;
button.addEventListener("click",
function(){
     click=setInterval(autoplay, 3000);
  
}
);

let button2=document.getElementById("btn2")
button2.addEventListener("click",
function(){
   clearInterval(click);
   time=setInterval(autoplay2, 3000);
}
);

let button3=document.getElementById("btn3")
button3.addEventListener("click",
function(){
  clearInterval(click);
  clearInterval(time);
}
);


next.addEventListener("click",
 function(){
  i++;
 
  if(i > arrayimg.length- 1){
    i=0;
    img1.style.opacity="0.5";
    img5.style.opacity="1";
  }
  else if(i === arrayimg.length- 4){
    img2.style.opacity="0.5";
    img1.style.opacity="1";
  }
  else if(i === arrayimg.length- 3){
    img3.style.opacity="0.5";
    img1.style.opacity="1";
    img2.style.opacity="1";
  }
  else if(i === arrayimg.length- 2){
    img4.style.opacity="0.5";
    img3.style.opacity="1";
    img1.style.opacity="1";
    img2.style.opacity="1";  
  }
  else if(i === arrayimg.length- 1){
    img5.style.opacity="0.5";
    img4.style.opacity="1";
    img3.style.opacity="1";
    img1.style.opacity="1";
    img2.style.opacity="1";
  }

  img.src = arrayimg[i].image;
  title.innerHTML = arrayimg[i].title;
  desc.innerHTML = arrayimg[i].desc;
 }
 
 );

prev.addEventListener("click",
 function(){
  i--;
  if(i < 0){
    i=arrayimg.length - 1;
    img1.style.opacity="1";
    img2.style.opacity="1";
    img3.style.opacity="1";
    img4.style.opacity="1";
    img5.style.opacity="0.5";
  }
  else if(i === arrayimg.length- 1){
    img5.style.opacity="0.5";
    img4.style.opacity="1";
    img3.style.opacity="1";
    img1.style.opacity="1";
    img2.style.opacity="1";
  }
  else if(i === arrayimg.length- 2){
    img4.style.opacity="0.5";
    img3.style.opacity="1";
    img1.style.opacity="1";
    img2.style.opacity="1";
    img5.style.opacity="1";
  }
  else if(i === arrayimg.length- 3){
    img4.style.opacity="1";
    img3.style.opacity="0.5";
    img1.style.opacity="1";
    img2.style.opacity="1";
  }
  else if(i === arrayimg.length- 4){
    img5.style.opacity="1";
    img4.style.opacity="1";
    img3.style.opacity="1";
    img1.style.opacity="1";
    img2.style.opacity="0.5";
  }
  else if(i === arrayimg.length- 5){
    img5.style.opacity="1";
    img4.style.opacity="1";
    img3.style.opacity="1";
    img1.style.opacity="0.5";
    img2.style.opacity="1";
  }

  img.src = arrayimg[i].image;
  title.innerHTML = arrayimg[i].title;
  desc.innerHTML = arrayimg[i].desc;
 }
 
 );

 function autoplay(){
  if (i === arrayimg.length) {
    i = 0;
  }
  document.querySelector(".img-size").src = arrayimg[i].image;
  document.querySelector(".title").innerHTML = arrayimg[i].title;
  document.querySelector(".desc").innerHTML = arrayimg[i].desc;
    i++;
}

function autoplay2(){
  clearInterval(click);
  
   if (i === arrayimg.length) {
     i = 0;
   }
   document.querySelector(".img-size").src = arrayimg[i].image;
   document.querySelector(".title").innerHTML = arrayimg[i].title;
   document.querySelector(".desc").innerHTML = arrayimg[i].desc;
    i++;
}






