document.querySelector("button#btn-calc").addEventListener("click", start)
function start(){
    const name = document.querySelector("input#name").value
    const height = document.querySelector("input#height").value
    const kg = document.querySelector("input#kg").value
    verifyData(name, height, kg)
}
function verifyData(name, height, kg){
    if(name.length == 0 || height == 0 || kg == 0){
        alert("Erro! Por favor insira seus dados")
    }
    else{
        startCalc(name, height, kg)
    }
}
function startCalc(name, height, kg){
    let imc = kg / (height * height)
    let msg = ""
    if(imc < 18.5){
        msg = "Magreza"
    }
    else if(imc > 18.5 && imc < 24.9){
        msg = "normal"
    }
    else if(imc > 24.9 && imc < 29.9){
        msg = "Sobrepeso GRAU I"
    }
    else if(imc > 29.9 && imc < 39.9){
        msg = "Obesidade GRAU II"
    }
    else{
        msg = "Obesidade grave GRAU III"
    }
    showRes(name, imc, msg)
}
function showRes(name, imc, msg){
    let divRes = document.querySelector("div#res")
    document.querySelector("p.text-res").innerHTML = `${name}, seu IMC é <strong>${imc.toFixed(1)}</strong>`
    document.querySelector("p.msg").innerHTML = `<strong>${msg}</strong>`
}