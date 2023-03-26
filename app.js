const carrousel = document.querySelector("#carrousel");
var elementos = document.querySelectorAll("#img");
var elementoslast = elementos[elementos.length -1];

const btnIzq = document.querySelector("#izq");
const btnDer = document.querySelector("#der");

carrousel.insertAdjacentElement('afterbegin', elementoslast);

function Next(){
    let elementospri = document.querySelectorAll("#img")[0];
    carrousel.style.marginleft = "-200%";
    setTimeout(function(){
        carrousel.insertAdjacentElement('beforeend', elementospri);
        carrousel.style.marginleft = "-100%";
    });
}

function Prev(){
    var elementos = document.querySelectorAll("#img");
    var elementoslast = elementos[elementos.length -1];
    carrousel.style.marginleft = "0";
    setTimeout(function(){
        carrousel.insertAdjacentElement('afterbegin', elementoslast);
        carrousel.style.marginleft = "-100%";
    });
}

btnDer.addEventListener('click', function(){
    Next();
})

btnIzq.addEventListener('click', function(){
    Prev();
})