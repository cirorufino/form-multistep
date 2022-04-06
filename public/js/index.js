const slidePage = document.querySelector(".slidePage");
const firstNextBtn = document.querySelector(".nextBtn");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector('.next-1');
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector('.next-2');
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector('.submit');
const progressText = document.querySelectorAll('.step p');
const progressCheck = document.querySelectorAll('.step .check');
const bullet = document.querySelectorAll('.step .bullet');
const form = document.querySelector('#form');
const data = document.querySelector('#data');
            
let max = 4; 
let current = 1;

function progressBarRise(e){
    e.preventDefault();
    bullet[current -1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current += 1;
};

function progressBarDec(e){
    e.preventDefault();
    bullet[current -2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    current -= 1;
};

function confirmData(){
    data.innerHTML = `
    <p>First Name: ${form.firstName.value}</p>
    <p>Last Name: ${form.lastName.value}</p>
    <p>Age: ${form.age.value}</p>
    <p>Gender: ${form.gender.value}</p>
    <p>e-Mail: ${form.email.value}</p>`
};

firstNextBtn.addEventListener("click", function (e) {
    progressBarRise(e);
    slidePage.style.marginLeft = "-25%";
    
});
nextBtnSec.addEventListener("click", function (e) {
    progressBarRise(e);
    slidePage.style.marginLeft = "-50%";
    
});
nextBtnThird.addEventListener("click", function (e) {
    progressBarRise(e);
    slidePage.style.marginLeft = "-75%";
    confirmData();
});

submitBtn.addEventListener("click", async function (e) {
    progressBarRise(e);
    const result = await fetch('/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName: form.firstName.value,
            lastName: form.lastName.value,
            age: form.age.value,
            gender: form.gender.value,
            email: form.email.value,
            password: form.password.value
        })
    }).then((res) => res.json());

    if(result.status === 'ok'){
        alert('utente aggiunto al db');
    }
    if(result.status === 'error'){
        console.log(result.status.error);
        alert('errore');
    }
});

prevBtnSec.addEventListener("click", function (e) {
    progressBarDec(e);
    slidePage.style.marginLeft = "0%";
});
prevBtnThird.addEventListener("click", function (e) {
    progressBarDec(e);
    slidePage.style.marginLeft = "-25%";
});
prevBtnFourth.addEventListener("click", function (e) {
    progressBarDec(e);
    slidePage.style.marginLeft = "-50%";
});