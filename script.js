function insert(x){
    //window.alert('teste')
    document.getElementById('resultado').innerHTML += x
}
function clean(){
    document.getElementById('resultado').innerHTML = ''
}
function back(){
    var resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}
function calcular (){
    var resultado = document.getElementById('resultado').innerHTML
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    }else{
        window.alert('Digite algum valor')
    }
}