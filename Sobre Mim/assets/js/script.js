let nome = window.document.querySelector("#nome")
let email = window.document.querySelector("#email")
let assunto = window.document.querySelector("#assunto")
let nomeOk =false
let emailOk =false
let assuntoOk =false
let mapa = document.querySelector("#mapa")


nome.style.width = "100%"
email.style.width = "100%"


function validaNome(){
let txtNome = document.querySelector("#txtNome")  
    if(nome.value.length <3){
      txtNome.innerHTML = "Nome invalido!"
      txtNome.style.color = "red"
    }else{
        txtNome.innerHTML = "Nome valido!"
        txtNome.style.color = "green"
        nomeOk=true
    }
}

function validaEmail(){
 let   txtEmail = document.querySelector("#txtEmail")
 if(email.value.indexOf("@") ==-1 || email.value.indexOf(".com") ==-1){
 txtEmail.innerHTML="E-mail invalido"
 txtEmail.style.color="red"
 }else{
     txtEmail.innerHTML="E-mail valido"
     txtEmail.style.color="green"
     emailOk=true
 }
}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")
    if(assunto.value.length >100){
    txtAssunto.innerHTML ="Limite de caracteres esgotado!"
    txtAssunto.style.color="red"
    txtAssunto.style.display = "block"
}else{
    txtAssunto.innerHTML="Dentro do limite de caracteres permitido!"
    txtAssunto.style.display = "none"
    assuntoOk=true
}
}

function enviar(){
    if(nomeOk==true && emailOk ==true&& assuntoOk==true)
    alert("Formulário enviado com sucessoo!!")
else
alert("Preencha o formulário corretamente!!!")
}

function mapaZoom(){

    mapa.style.width="800px"
    mapa.style.heigth="600px"

}

function mapaNormal(){

    mapa.style.width="400px"
    mapa.style.heigth="250px"

}