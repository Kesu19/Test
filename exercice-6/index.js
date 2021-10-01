let numeroTel = prompt('Veuillez entrer un numero de telephone valide');

if(checkPhoneNumber(numeroTel)){
    document.getElementById('TextRep').firstChild.data ="Le numero correspond bien a 06, 07 ou a un 01";
}
else{
    document.getElementById('TextRep').firstChild.data ="Le numero ne correspond pas a 06, 07 ou a un 01";
}

function checkPhoneNumber(PortableTest) {
    var regex = new RegExp(/^(06|07|01)[0-9]{8}/gi);
    if (regex. test (PortableTest)) 
    {
        return true; 
    }
    else{
        return false;
    }
}