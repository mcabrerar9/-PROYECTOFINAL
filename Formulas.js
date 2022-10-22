function formula1() {
    var CantidadTotal=parseInt(document.getElementById('Cant').value);
    var quetzales=parseInt(document.getElementById('QUETZALES').value);

    document.getElementById('QUETZALES').value=(quetzales-CantidadTotal);

    alert ("TRANSACCION  REALIZADA");
    
}

function formula2() {
    var CantidadTotal=parseInt(document.getElementById('Cant').value);
   
    var dolares=parseInt(document.getElementById('DOLARES').value);

    document.getElementById('DOLARES').value=(dolares-CantidadTotal);

    alert ("TRANSACCION  REALIZADA");    
}
