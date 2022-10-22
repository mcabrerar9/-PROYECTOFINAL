

  function formula1() {
    var CantidadT=parseInt(document.getElementById('Cant').value);
    var quetzales=parseInt(document.getElementById('QUETZALES').value);
    var dolares=parseInt(document.getElementById('DOLARES').value);

    document.getElementById('QUETZALES').value=(quetzales+CantidadTotal);
    
}
 
function formula2() {
    var CantidadT=parseInt(document.getElementById('Cant').value);
    var quetzales=parseInt(document.getElementById('QUETZALES').value);
    var dolares=parseInt(document.getElementById('DOLARES').value);

    document.getElementById('DOLARES').value=(dolares+(CantidadTotal/8));
    
}

function formula3() {
    var CantidadT=parseInt(document.getElementById('Cant').value);
    var quetzales=parseInt(document.getElementById('QUETZALES').value);

    document.getElementById('QUETZALES').value=(quetzales-CantidadTotal);

    alert ("TRANSACCION  REALIZADA");
    
}

function formula4() {
    var CantidadT=parseInt(document.getElementById('Cant').value);
   
    var dolares=parseInt(document.getElementById('DOLARES').value);

    document.getElementById('DOLARES').value=(dolares-(CantidadTotal/8));

    alert ("TRANSACCION  REALIZADA");    
}
