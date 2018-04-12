let acertos_contador = 0;
let erros_contador = 0;
var respostas = new Array();

function btn(){
    window.location.replace("pergunta-02.html");
   
     if (document.getElementById("btn-sim").value === "sim") {    
        respostas[0]="certo";
           acertos_contador++;
       }else{
        document.getElementById("btn-nao").value === "nao";
        respostas[0]="errado";
            erros_contador++;}

        sessionStorage.setItem("acertos_contador",JSON.stringify(acertos_contador));
        sessionStorage.setItem("erros_contador",JSON.stringify(erros_contador));
        sessionStorage.setItem("respostas",JSON.stringify(respostas));
        
}

function btn1(){
    window.location.replace("pergunta-03.html");
    if (document.getElementById("btn-sim").value === "sim") {    
        respostas[1]="certo";
           acertos_contador++;
       }else{
        document.getElementById("btn-nao").value === "nao";
        respostas[1]="errado";
            erros_contador++;}

        sessionStorage.setItem("acertos_contador",JSON.stringify(acertos_contador));
        sessionStorage.setItem("erros_contador",JSON.stringify(erros_contador));
        sessionStorage.setItem("respostas",JSON.stringify(respostas));
}

function btn2(){
    window.location.replace("pergunta-04.html");
    if (document.getElementById("btn-sim").value === "sim") {    
        respostas[2]="certo";
           acertos_contador++;
       }else{
        document.getElementById("btn-nao").value === "nao";
        respostas[2]="errado";
            erros_contador++;}

        sessionStorage.setItem("acertos_contador",JSON.stringify(acertos_contador));
        sessionStorage.setItem("erros_contador",JSON.stringify(erros_contador));
        sessionStorage.setItem("respostas",JSON.stringify(respostas));
	
}

function btn3(){
    window.location.replace("pergunta-05.html");
    if (document.getElementById("btn-sim").value === "sim") {    
        respostas[2]="certo";
           acertos_contador++;
           console.log(acertos_contado);
       }else{
        document.getElementById("btn-nao").value === "nao";
        respostas[2]="errado";
            erros_contador++;}
        
        sessionStorage.setItem("acertos_contador",JSON.stringify(acertos_contador));
        sessionStorage.setItem("erros_contador",JSON.stringify(erros_contador));
        sessionStorage.setItem("respostas",JSON.stringify(respostas));
	
}

function btn4(){
    window.location.replace("pergunta-06.html");
    if (document.getElementById("btn-sim").value === "sim") {    
        respostas[3]="errado";
            erros_contador++;
       }else{
        document.getElementById("btn-nao").value === "nao";
            respostas[3]="certo";
            acertos_contador++;}

        sessionStorage.setItem("acertos_contador",JSON.stringify(acertos_contador));
        sessionStorage.setItem("erros_contador",JSON.stringify(erros_contador));
        sessionStorage.setItem("respostas",JSON.stringify(respostas));
}

function btn5(){
    window.location.replace("pergunta-07.html");
    if (document.getElementById("btn-sim").value === "sim") {    
        respostas[4]="errado";
            erros_contador++;
       }else{
        document.getElementById("btn-nao").value === "nao";
        respostas[4]="certo";
            acertos_contador++;}

            sessionStorage.setItem("acertos_contador",JSON.stringify(acertos_contador));
            sessionStorage.setItem("erros_contador",JSON.stringify(erros_contador));
            sessionStorage.setItem("respostas",JSON.stringify(respostas));
            
	
}

function btn6(){
    window.location.replace("pergunta-08.html");
    if (document.getElementById("btn-sim").value === "sim") {    
        respostas[5]="certo";
           acertos_contador++;
       }else{
        document.getElementById("btn-nao").value === "nao";
        respostas[5]="errado";
            erros_contador++;}

        sessionStorage.setItem("acertos_contador",JSON.stringify(acertos_contador));
        sessionStorage.setItem("erros_contador",JSON.stringify(erros_contador));
        sessionStorage.setItem("respostas",JSON.stringify(respostas));
}

function btn7(){
    window.location.replace("pergunta-09.html");
    if (document.getElementById("btn-sim").value === "sim") {    
        respostas[6]="certo";
           acertos_contador++;
       }else{
        document.getElementById("btn-nao").value === "nao";
        respostas[6]="errado";
            erros_contador++;}

        sessionStorage.setItem("acertos_contador",JSON.stringify(acertos_contador));
        sessionStorage.setItem("erros_contador",JSON.stringify(erros_contador));
        sessionStorage.setItem("respostas",JSON.stringify(respostas));
	
}

function btn8(){
    window.location.replace("pergunta-10.html");
    if (document.getElementById("btn-sim").value === "sim") {    
        respostas[7]="errado";
           acertos_contador++;
       }else{
        document.getElementById("btn-nao").value === "nao";
        respostas[7]="certo";
            erros_contador++;}

        sessionStorage.setItem("acertos_contador",JSON.stringify(acertos_contador));
        sessionStorage.setItem("erros_contador",JSON.stringify(erros_contador));
        sessionStorage.setItem("respostas",JSON.stringify(respostas));
}


function btn9(){
    window.location.replace("resultado.html");
    if (document.getElementById("btn-sim").value === "sim") {    
        respostas[8]="certo";
           acertos_contador++;
       }else{
        document.getElementById("btn-nao").value === "nao";
        respostas[8]="errado";
            erros_contador++;}

        sessionStorage.setItem("acertos_contador",JSON.stringify(acertos_contador));
        sessionStorage.setItem("erros_contador",JSON.stringify(erros_contador));
        sessionStorage.setItem("respostas",JSON.stringify(respostas));
}

function iniciar(){
    window.location.replace("index.html");

    
	
}

//window.onload = function(){
     document.getElementById("resultado").innerHTML = sessionStorage.getItem("acertos_contador");
}





            

        
