const caixa = document.querySelector(".caixa");
const botao = document.querySelector(".btn");
const esconder = document.querySelector(".esconder");

botao.addEventListener("click", function() {
    caixa.style.background = "red";
});

caixa.addEventListener("mouseover", function() {
    caixa.style.width = "250px";
    caixa.style.height = "250px";
    caixa.style.border = "5px solid black";
});

caixa.addEventListener("mouseout", function() {
    caixa.style.width = "200px";
    caixa.style.height = "200px";
    caixa.style.border = "none";
});

caixa.addEventListener("click", function() {
    if (caixa.style.background === "green") {
        caixa.style.background = "blue";
    } else {
        caixa.style.background = "green";
    }

    caixa.textContent = "Clicou!";
});

esconder.addEventListener("click", function() {
    if (caixa.style.display === "none") {
        caixa.style.display = "flex";
    } else {
        caixa.style.display = "none";
    }
});