

function factorial(a){
    if(a == 1){
        return 1;
    }
    if(a>1){
        return a * factorial(a-1);
    }

}

console.log(factorial(6));

function multiplicacion(a, b){
    if(b == 1){
        return a;
    }
    if(b>1){
        return a + multiplicacion(a, b-1);
    }
}

console.log(multiplicacion(4,3))