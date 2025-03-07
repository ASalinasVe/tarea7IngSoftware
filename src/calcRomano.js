export function calcRomano(numero) { 

    let valores = [ 500, 400, 100, 90, 50,40, 10, 9, 5, 4, 1]
    let romanos = ["D","CD", "C", "XC", "L","XL", "X", "IX", "V", "IV", "I"];

    
    let resultado = "";

    for (let i = 0; i < valores.length; i++) {

        while(numero >= valores[i]){
            resultado += romanos[i];
            numero -= valores[i];
        }
    }  

    return resultado;    
    
};


