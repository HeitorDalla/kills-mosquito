const select = document.querySelector("#opcoes");
const btnInciar = document.querySelector("#iniciarJogo");

let tempoIniciado = false;
let tempoRestante = null;

btnInciar.addEventListener("click", (event) => {
    event.preventDefault();

    const dificuldade = select.value
    console.log(dificuldade)

    if (!dificuldade) {
        alert("Escolha uma das opções!");
        return;
    }

    switch (dificuldade) {
        case 'Fácil':
            tempoRestante = 100;
            break;
        case 'Intermediário':
            tempoRestante = 80
            break;
        case 'Avançado':
            tempoRestante = 60
            break;
    }

    window.location.href = 'app.html'
})