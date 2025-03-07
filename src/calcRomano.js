export function calcRomano(numero) {
    let romano = "";
    if (numero == 1){
        return "I";
    }
    else if (numero == 4){
        return "IV";
    }
    else if (numero == 5){
        return "V";
    }
    else if (numero == 9){
        return "IX";
    }
    // while (numero == 0 && numero < 4){
    //     romano = romano + "I";
    // }
    // return romano;
    
};


