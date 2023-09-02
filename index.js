const password = "1234";
var saldo = 540; //Tuve que hacerla variable para poder agregarle saldo en la parte de "ingresar"...
const nomCliente = "Luis";


//Variables: -------------------------------------------------------
var cont = document.getElementById("contentAll");

var err = document.getElementById("message");

var bt1 = document.getElementById("bt1");
var bt2 = document.getElementById("bt2");
var bt3 = document.getElementById("bt3");
var bt4 = document.getElementById("bt4");
var bt5 = document.getElementById("bt5");
var bt6 = document.getElementById("bt6");

var allUsu = document.getElementById("usua");
var usu = document.getElementById("usuario");
var allPas = document.getElementById("passa");
var pas = document.getElementById("password");
var allSLo = document.getElementById("subLogin");

var op1 = document.getElementById("op1");
var op2 = document.getElementById("op2");
var op3 = document.getElementById("op3");
var option = -1;

var sal = document.getElementById("sald");

var allIng = document.getElementById("ingr");
var ing = document.getElementById("ingresar");
var ingb = document.getElementById("ingress");

var allRet = document.getElementById("retr");
var ret = document.getElementById("retirar");
var retb = document.getElementById("retss");

var vol = document.getElementById("volv1");

var intentos = 3;

//Funciones:----------------------------------


function if1(){
    
    if(intentos >0){
        if(usu.value == nomCliente ){
        
            if(pas.value == password ){
                return true;
            }
            else{
                intentos --;
                err.innerHTML = "*Error: Contraseña incorrecta! intentos restantes: "+ intentos;
                pas.value = "";
                pas.focus();
            }
        }
        else{
            err.innerHTML = "*Error: Usuario Invalido "
            usu.focus();
            pas.value = "";
        }
    }

    return false;
}

function if2(tt){
    if(tt<=saldo){
        saldo -= tt;
        return true;
    }
    else{
        err.innerHTML = "*Error: No puedes retirar más de lo que tienes!";
    }
    return false;
}

function opcionE(intr){
    if(intr != -1){
        closePagina2();
        option = intr;
        switch (intr) {
            case 1:
                showSaldo();
                break;
            case 2:
                showIngresar();
                break;
            case 3:
                showRetirar();
                break;
        
            default:
                break;
        }
    }
}







//resto del codigo-------------------------------


function showPagina1(){
    allUsu.style.visibility = "visible";
    bt1.addEventListener("click", function(){
        usu.focus();
    });
    allPas.style.visibility = "visible";
    bt2.addEventListener("click", function(){
        pas.focus();
    });

    allSLo.style.visibility = "visible";
    allSLo.addEventListener("click", function(){closePagina1(); });
    bt6.addEventListener("click", function(){allSLo.click();});

    
}
function closePagina1(){
    if(if1()){
    allUsu.style.visibility = "collapse";
    allPas.style.visibility = "collapse";
    allSLo.style.visibility = "collapse";

    bt1.replaceWith(bt1.cloneNode(true));
    bt2.replaceWith(bt2.cloneNode(true));
    bt6.replaceWith(bt6.cloneNode(true));
    
    showPagina2();
    reenlazar();
    }
}
function reenlazar(){
    bt1 = document.getElementById("bt1");
    bt2 = document.getElementById("bt2");
    bt3 = document.getElementById("bt3");
    bt4 = document.getElementById("bt4");
    bt5 = document.getElementById("bt5");
    bt6 = document.getElementById("bt6"); 
}

function showPagina2(){
    reenlazar();
    op1.style.visibility = "visible";
    bt4.addEventListener("click", function(){
        opcionE(1);
    });
    op2.style.visibility = "visible";
    bt5.addEventListener("click", function(){
        opcionE(2);
    });
    op3.style.visibility = "visible";
    bt6.addEventListener("click", function(){
        opcionE(3);
    });

}
function closePagina2(){
    op1.style.visibility = "collapse";
    op2.style.visibility = "collapse";
    op3.style.visibility = "collapse";

    bt4.replaceWith(bt4.cloneNode(true));
    bt5.replaceWith(bt5.cloneNode(true));
    bt6.replaceWith(bt6.cloneNode(true));

    reenlazar()
}

function showSaldo(){
    reenlazar();
    sal.style.visibility="visible";
    sal.innerHTML="Saldo: $"+saldo;

    vol.style.visibility="visible";
    reenlazar();
    bt6.addEventListener("click", closeSaldo);
}
function closeSaldo(){
    sal.style.visibility = "collapse";
    vol.style.visibility = "collapse";
    bt6.replaceWith(bt6.cloneNode(true));
    reenlazar();
    showPagina2();
}

function showIngresar(){
    reenlazar();
    allIng.style.visibility="visible";
    bt1.addEventListener("click", function(){
        ing.focus();
    });

    vol.style.visibility = "visible";
    bt6.addEventListener("click", closeIngresar);
    ingb.style.visibility = "visible";
    bt5.addEventListener("click", function(){
        saldo += parseInt(ing.value);
        closeIngresar();
    });
}
function closeIngresar(){
    allIng.style.visibility="collapse";
    vol.style.visibility="collapse";
    ingb.style.visibility="collapse";
    ing.value = 0;
    bt1.replaceWith(bt1.cloneNode(true));
    bt5.replaceWith(bt5.cloneNode(true));
    bt6.replaceWith(bt6.cloneNode(true));

    reenlazar();
    showPagina2();
}

function showRetirar(){
    reenlazar();
    allRet.style.visibility="visible";
    bt1.addEventListener("click", function(){
        ret.focus();
    });

    vol.style.visibility = "visible";
    bt6.addEventListener("click", closeRetirar);
    retb.style.visibility = "visible";
    bt5.addEventListener("click", function(){
        if(if2(parseInt(ret.value))){
        
        closeRetirar();
        }
    });
}
function closeRetirar(){
    if(true){
    allRet.style.visibility="collapse";
    vol.style.visibility="collapse";
    retb.style.visibility="collapse";
    ret.value = 0;
    bt1.replaceWith(bt1.cloneNode(true));
    bt5.replaceWith(bt5.cloneNode(true));
    bt6.replaceWith(bt6.cloneNode(true));
    
    err.innerHTML="";

    reenlazar();
    showPagina2();
    }
}
//showPagina1();