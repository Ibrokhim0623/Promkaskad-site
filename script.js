const modal = document.querySelector(".modal");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const page = document.querySelector(".page");
const button1  = document.querySelectorAll(".click");
const button2 = document.querySelectorAll(".click1");
const button3 = document.querySelectorAll(".click2");


for (let i = 0; i < button1.length; i++) {
    button1[i].addEventListener("click", function(){
        for(let j = 0; j < button1.length; j++){
            button1[j].classList.remove("active");
        }
        this.classList.add("active");
    })
}

for (let i = 0; i < button2.length; i++) {
    button2[i].addEventListener("click", function(){
        for(let j = 0; j < button2.length; j++){
            button2[j].classList.remove("active");
        }
        this.classList.add("active");
    })
}

for (let i = 0; i < button3.length; i++) {
    button3[i].addEventListener("click", function(){
        for(let j = 0; j < button3.length; j++){
            button3[j].classList.remove("active");
        }
        this.classList.add("active");
    })
}

btn1.addEventListener("click", () => {
    modal.style.left = 0;
    page.style.display = "none";
});

btn2.addEventListener("click", () => {
    modal.style.left = 0;
    page.style.display = "none";
});


const arrow = document.querySelector(".arrow");

window.addEventListener("scroll", () => {
    arrow.classList.toggle("arrowUp", scrollY > 100);
});


