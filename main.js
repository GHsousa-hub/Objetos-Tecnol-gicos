const objetos = [
    {
        nome: "Notebook",
        tipo: "Computador"
    },
    {
        nome: "Smartphone",
        tipo: "Celular"
    },
    {
        nome: "Teclado Mecânico",
        tipo: "Periférico"
    },
    {
        nome: "Smartwatch",
        tipo: "Vestível"
    },
    {
        nome: "Fone Bluetooth",
        tipo: "Áudio"
    }
]

const formulario = document.getElementById("formObjeto")
const campoNome = document.getElementById("nome")
const campoTipo = document.getElementById("tipo")
const corpoTabela = document.getElementById("corpoTabela")

function exibir() {
    corpoTabela.innerHTML = "";

    for (let posicao = 0; posicao < objetos.length; posicao++) {

        const objeto = objetos[posicao]

        corpoTabela.innerHTML += `
            <tr>
                <td>#${String(posicao + 1).padStart(2, "0")}</td>
                <td>${objeto.nome}</td>
                <td>${objeto.tipo}</td>
            </tr>
        `
    }
}

exibir();

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const objeto = {
        nome: campoNome.value,
        tipo: campoTipo.value
    }

    objetos.push(objeto)

    exibir()

    formulario.reset()
    campoNome.focus()
})