//alert("caixa troll");caixinha de alerta pop up, elements.style = 'background-color:red;'
//1-acessar a janela(browser)
//2-Pegar HTML todo
//3-pegar o botao
//4- Saber que esta sendo clicado no botão

//5-Acessar a Janela
//6-Pegar HTML todo
//7-Pegar o elements
//8-Mover o elements para direita

const btnRight = document.querySelector(".button-arrow.-right");
const btnLeft = document.querySelector(".button-arrow.-left");
const elements = window.document.querySelector(".elements");
let pixels = 100;

btnRight.addEventListener("click", function(){
    pixels = pixels + 100;
    elements.style = `transform: translateX(${pixels}px)`;

});

btnLeft.addEventListener('click', function(){
    pixels = pixels - 100;
    elements.style = `transform: translateX(${pixels}px)`;

});


//segundo carrosel
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}


//terceiro carrosel
$('input').on('change', function() {
    $('body').toggleClass('blue');
  });
  