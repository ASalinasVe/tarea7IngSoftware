export function calcRomano(numero) {

    //500, 400, 100, 90, 50,
    //"D", "CD", "C", "XC", "L", 

    let valores = [ 500, 400, 100, 90, 50,40, 10, 9, 5, 4, 1]
    let romanos = ["D","CD", "C", "XC", "L","XL", "X", "IX", "V", "IV", "I"];
;
    // if (numero == 1){
    //     return "I";
    // }
    // else if (numero == 4){
    //     return "IV";
    // }
    // else if (numero == 5){
    //     return "V";
    // }
    // else if (numero == 9){
    //     return "IX";
    // }
    // else if (numero == 10){
    //     return "X";
    // }
    
    let resultado = "";

    for (let i = 0; i < valores.length; i++) {

        while(numero >= valores[i]){
            resultado += romanos[i];
            numero -= valores[i];
        }
    }  
    return resultado;    
};


