function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send() //para enviar, e nesse caso quer pegar alguma coisa
    return request.responseText
}

function criaLinha(usuario) {
    linha = document.createElement("tr");
    tdId = document.createElement("td");
    tdNome = document.createElement("td");
    tdComentario = document.createElement("td")

    tdId.innerHTML = usuario.id
    tdNome.innerHTML = usuario.nome
    tdComentario.innerHTML = usuario.comentario

    linha.appendChild(tdId);
    linha.appendChild(tdNome);
    linha.appendChild(tdComentario);

    return linha;
}

function main() {
    let usuarios = JSON.parse(this.fazGet("https://api-roca.herokuapp.com/products")) //vem como uma string, ai preciso transformar em JSON, por isso o JSON.parse
    let tabela = document.getElementById("tabela")

    usuarios.forEach(element => {
        let linha = criaLinha(element)
        tabela.appendChild(linha)
    });
}

this.main()

function cadastraUsuario() {
    event.preventDefault() //para evitar que a página carregue ao fazer o onSubmit
    let url = "https://api-roca.herokuapp.com/products"

    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let comentario = document.getElementById("comentario").value
    // console.log('nome', nome)
    // console.log('email', email)
    //console.log('comentario', comentario)

    body = {
        "nome": nome,
        "email": email,
        "comentario": comentario
    }

    this.postar(url, body)
}

function postar(url, body) {
    console.log('body ',body)

    let request = new XMLHttpRequest()
    request.open("POST", url, true) //no post sempre colocar true
    request.setRequestHeader("Content-type", "application/json") //estou dizendo que estou mandando pra ele 
    //content-type usa para descrever o tipo de conteudo enviado, no caso json
    request.send(JSON.stringify(body)) //para chamar o objeto em json
    request.onload = function() {
        console.log(this.responseText)
    }
    return request.responseText
}
