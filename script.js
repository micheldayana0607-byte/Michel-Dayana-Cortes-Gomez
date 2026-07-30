/*==============================
CURSOR PERSONALIZADO
==============================*/

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});


/*==============================
EFECTO MAQUINA DE ESCRIBIR
==============================*/

const typing = document.getElementById("typing");

if(typing){

const words=[

"Diseñadora Multimedia",

"Frontend Developer",

"UI Designer",

"Creative Designer",

"Amante del Diseño"

];

let word=0;
let letter=0;
let deleting=false;

function write(){

let current=words[word];

typing.textContent=current.substring(0,letter);

if(!deleting){

letter++;

if(letter>current.length){

deleting=true;

setTimeout(write,1200);

return;

}

}else{

letter--;

if(letter<0){

deleting=false;

word++;

if(word>=words.length){

word=0;

}

}

}

setTimeout(write,deleting?60:120);

}

write();

}


/*==============================
MENU HAMBURGUESA
==============================*/

const menu=document.querySelector(".menu");
const nav=document.querySelector(".nav");

if(menu){

menu.addEventListener("click",()=>{

nav.classList.toggle("active");

});

}


/*==============================
APARICION AL HACER SCROLL
==============================*/

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll("section").forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(60px)";

section.style.transition=".8s";

observer.observe(section);

});


/*==============================
ESTRELLAS
==============================*/

for(let i=0;i<70;i++){

const star=document.createElement("span");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*5+"s";

document.body.appendChild(star);

}


/*==============================
PETALOS
==============================*/

setInterval(()=>{

const petal=document.createElement("div");

petal.innerHTML="🌸";

petal.className="petal";

petal.style.left=Math.random()*100+"vw";

petal.style.fontSize=(20+Math.random()*20)+"px";

petal.style.animationDuration=(6+Math.random()*5)+"s";

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},12000);

},700);


/*==============================
BOTON VOLVER ARRIBA
==============================*/

const topButton=document.createElement("button");

topButton.innerHTML="↑";

topButton.className="top-btn";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.classList.add("show");

}else{

topButton.classList.remove("show");

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

