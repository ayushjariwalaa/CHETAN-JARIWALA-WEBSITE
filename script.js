const counters=document.querySelectorAll('.stat');

counters.forEach(counter=>{

const update=()=>{

const target=+counter.getAttribute('data-target');
const count=+counter.innerText;

const speed=200;
const inc=target/speed;

if(count<target){

counter.innerText=Math.ceil(count+inc);
setTimeout(update,10);

}else{

counter.innerText=target + "+";

}

};

update();

});
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
nav.classList.toggle("active");
});