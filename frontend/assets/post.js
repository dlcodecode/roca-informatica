function cadastraUsuario() {
    event.preventDefault() //para evitar que a página carregue ao fazer o onSubmit
    let url = "http://localhost:3001/products"

    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let comentario = document.getElementById("comentario").value
    console.log('nome', nome)
    console.log('email', email)
    console.log('comentario', comentario)

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
