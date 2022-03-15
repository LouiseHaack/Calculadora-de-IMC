document.querySelector("#calcular").onclick=calcularIMC;

let n=0;
function calcularIMC(){
    let nome=document.querySelector("#nome").value;
    let altura=document.querySelector("#altura").value;
    altura=altura.replace(",",".")
    altura=parseFloat(altura)
    let peso=document.querySelector("#peso").value;
    peso=peso.replace(",",".")
    peso=parseFloat(peso)
    let IMC= peso/(altura*altura)
    IMC=IMC.toFixed(2)
    n=n+1

    let resultado

    if (IMC<18.5) {
        resultado=document.createTextNode("Abaixo do peso")
    }else if(IMC>18.5 && IMC<24.9){
        resultado=document.createTextNode("Normal")
    }else if(IMC>25.0 && IMC<29.9){
        resultado=document.createTextNode("Sobrepeso")
    }else if(IMC > 30 && IMC < 34.9){
        resultado=document.createTextNode("Obesidade Grau I")
    }else if(IMC > 35.0 && IMC < 39.9){
        resultado=document.createTextNode("Obesidade Savera Grau II")
    }else if(IMC = 40 && IMC > 40.0){
        resultado=document.createTextNode("Obesidade Mórbida Grau III")
    }

    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    let td5 = document.createElement("td")
    let td6= document.createElement("td")
    let table = document.querySelector("table")

    td1.append(n)
    td2.append(nome)
    td3.append(altura)
    td4.append(peso)
    td5.append(IMC)
    td6.append(resultado)
    
    tr.append(td1)
    tr.append(td2)
    tr.append(td3)
    tr.append(td4)
    tr.append(td5)
    tr.append(td6)

    table.append(tr)
}

document.querySelector("#limpar").onclick=clearForm;

function clearForm(){
    document.getElementById("nome").value="";
    document.getElementById("altura").value="";
    document.getElementById("peso").value="";
}
