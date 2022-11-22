let main=document.querySelector("main");
let container=document.createElement("div");
container.classList.add("container");
main.append(container)
let slider=document.createElement("div");
slider.classList.add("slider");
container.append(slider);
let item=document.createElement("div");
item.classList.add("item");
slider.append(item);
let img=document.createElement("img");
img.classList.add("img-size");
item.append(img);
 let thumbnails=document.createElement("div");
 thumbnails.classList.add("thumb");
 item.append(thumbnails);
let img1=document.createElement("img");
 img1.classList.add("img2");
 img1.style.opacity="0.5";
 thumbnails.append(img1);
  img1.src="img/01.webp";
  let img2=document.createElement("img");
 img2.classList.add("img2");
 thumbnails.append(img2);
  img2.src="img/02.webp";
 let img3=document.createElement("img");
 img3.classList.add("img2");
 thumbnails.append(img3);
 img3.src="img/03.webp";
 let img4=document.createElement("img");
 img4.classList.add("img2");
 thumbnails.append(img4);
 img4.src="img/04.webp";
 let img5=document.createElement("img");
 img5.classList.add("img2");
 thumbnails.append(img5);
 img5.src="img/05.webp";
let next=document.createElement("div");
 next.classList.add("next");
 next.classList.add("fa-solid");
 next.classList.add("fa-angle-down");
 thumbnails.append(next);
 let prev=document.createElement("div");
 prev.classList.add("prev");
 prev.classList.add("fa-solid");
 prev.classList.add("fa-angle-up");
 thumbnails.append(prev);
 let arrayimg=["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"]
 i=0;
 img.src=arrayimg[i];
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
  img.src=arrayimg[i];
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
  img.src=arrayimg[i];
 }
 
 );






