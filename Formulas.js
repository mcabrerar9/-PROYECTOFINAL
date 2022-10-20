

  function formula1() {
    var CantidadT=parseInt(document.getElementById('Cant').value);
    var quetzales=parseInt(document.getElementById('CuentaQ').value);
    var dolares=parseInt(document.getElementById('CuentaD').value);

    document.getElementById('CuentaQ').value=(quetzales+CantidadT);
    
}
 
function formula2() {
    var CantidadT=parseInt(document.getElementById('Cant').value);
    var quetzales=parseInt(document.getElementById('CuentaQ').value);
    var dolares=parseInt(document.getElementById('CuentaD').value);

    document.getElementById('CuentaD').value=(dolares+(CantidadT/8));
    
}

//retiro
function formula3() {
    var CantidadT=parseInt(document.getElementById('Cant').value);
    var quetzales=parseInt(document.getElementById('CuentaQ').value);

    document.getElementById('CuentaQ').value=(quetzales-CantidadT);

    alert ("TRANSACCION  REALIZADA");
    
}
function Mostrar1 (){
    document.getElementById('imgq').style.display = 'block';
}
function Ocultar1 (){
    document.getElementById('imgq').style.display = 'none';
}

//El retiro es en quetzales, a pesar de ser una cuenta de dolares
function formula4() {
    var CantidadT=parseInt(document.getElementById('Cant').value);
   
    var dolares=parseInt(document.getElementById('CuentaD').value);

    document.getElementById('CuentaD').value=(dolares-(CantidadT/8));

    alert ("TRANSACCION  REALIZADA");    
}
//funcion para mostrar la imagen
function Mostrar2 (){
    document.getElementById('imgd').style.display = 'block';
}
function Ocultar2 (){
    document.getElementById('imgd').style.display = 'none';
}