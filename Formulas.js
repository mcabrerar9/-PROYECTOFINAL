

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

function formula3() {
    var CantidadT=parseInt(document.getElementById('Cant').value);
    var quetzales=parseInt(document.getElementById('CuentaQ').value);

    document.getElementById('CuentaQ').value=(quetzales-CantidadT);

    alert ("TRANSACCION  REALIZADA");
    
}

function formula4() {
    var CantidadT=parseInt(document.getElementById('Cant').value);
   
    var dolares=parseInt(document.getElementById('CuentaD').value);

    document.getElementById('CuentaD').value=(dolares-(CantidadT/8));

    alert ("TRANSACCION  REALIZADA");    
}
