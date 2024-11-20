
//1
// var numero = 12;
//
// if (numero % 3 === 0) {
//     console.log("El " + numero + " es múltiplo de 3");
// } else if (numero % 7 === 0) {
//     console.log("El " + numero + " es múltiplo de 7");
// } else {
//     console.log("El " + numero + " no es múltiplo de 3 ni de 7");
// }

//2
    let x = 40
    let y = 50

    function rang(x,y){
    //faig una ternaria y un dels resultats de la ternaria es una altra ternaria que revisa el valor de y
        x >= 10 && x <= 50 ? y >= 10 && y <= 50
                ? console.log("Els numeros " + x + " " +  y + " Estan en el rang")
                : console.log("nomes el numero  " + x + " Esta en el rang")
                : y >= 10 && y <= 50
                    ? console.log("Nomes el numero  " + y + " Esta en el rang")
                    : console.log( "Cap dels numeros esta en el rang")
    }

    rang(x,y)

//3

    // function avaluacio (notaFinal){
    //     if (notaFinal >= 0 && notaFinal < 4.99) {
    //         console.log("Estas suspes");
    //     } else if (notaFinal >= 5 && notaFinal < 5.99) {
    //         console.log("Suficient");
    //     } else if (notaFinal >= 6 && notaFinal < 6.99) {
    //         console.log("Be");
    //     } else if (notaFinal >= 7 && notaFinal < 8.99) {
    //         console.log("Notable");
    //     } else if (notaFinal >= 9 && notaFinal <= 10) {
    //         console.log("Excelent");
    //     } else {
    //         console.log("Nota no válida");
    //     }
    // }
    // let nota = 5.5
    // avaluacio(nota)

//4
// let numero = 12
// let bobo  = 0
//
// if (numero % 3 === 0) {
//     bobo = 1
// } else if (numero % 7 === 0) {
//     bobo = 2
// } else if (numero % 3 && numero % 7 === 0) {
//     bobo = 3
// } else{
//     console.log("El " + numero + " no es múltiplo de 3 ni de 7")}
//
// switch (bobo){
//     case 1:
//         console.log("El " + numero + " es multiple de 3")
//         break
//     case 2:
//         console.log("El " + numero + " es mutiple de 7")
//         break
//     case 3:
//         console.log("El " + numero + " es mutiple de 3 i de 7")
//         break
//     default:
//         console.log("El " + numero + " no es múltiple de 3 ni de 7")
//         break
// }


//5

//     let x = 15;
//     let suma = 0;
//     let n = 0;
//
//     for (let i = 1; suma + i <= x; i++) {
//         suma += i;
//         n = i;
//     }
//
//     console.log("El maxim numero es : " + n);
//
//6


let text = "1eok1i90jei19e2ºjfe2jq13nfu21eº2bhiefi12jo239i0fjog23u90ifrjih2u9ieiwjio"

function sumarStrings (text){
    let suma = 0
    for (let i = 0; i < text.length; i++) {
        let caracter = text[i]
        if (!isNaN(caracter) && caracter !== ' '){
            suma += parseInt(caracter)
        }
    }
    return suma
}

console.log(sumarStrings(text))

//7

    // enter1 = 49
    // enter2 = 50
    // enter3 = 30
    //
    // function ordenarMajorMenor(a,b,c){
    //     if (a > b && a > c){
    //         if (b > c){
    //             return console.log(a + " "+ b + " " + c)
    //         }else {
    //            return console.log(a + " " +  c + " "+ b)
    //         }
    //     }else if (b > a && b > c){
    //         if (a > c){
    //             return console.log(b + " " + a + " " + c )
    //         }else {
    //             return console.log(b + " " + c + " " + a)
    //         }
    //     }else if (c > a && c > b){
    //         if (a > b) {
    //             return console.log(c + " "+ a + " " + b)
    //         }else {
    //             return console.log(c + " " + b + " " + a)
    //         }
    //     }else {
    //         return console.log("El valor no es valid")
    //     }
    // }
    // console.log(ordenarMajorMenor(enter1,enter2,enter3))


//8

    // var numero = 6
    //
    // function parSenar ( numero ) {
    //     for (let i = 0; i <= numero; i++) {
    //         if (i % 2 == 0) {
    //             console.log("El numero " + i + " Es parell")
    //         } else {
    //             console.log("EL numero " + i + " Es senar")
    //         }
    //     }
    // }
    //
    // parSenar(numero)

//9


    // function patro () {
    //
    //     for (let i = 0; i < 5; i++){
    //         if (i == 0){
    //             console.log("*")
    //         }else if( i == 1) {
    //             console.log("* " + " *")
    //         }else if ( i == 2) {
    //             console.log("* " + " * " + " * ")
    //         }else if ( i == 3) {
    //             console.log("* " + " * " + " * " + " *")
    //         }else {
    //             console.log("* " + " * " + " * " + " * " + " *" )
    //         }
    //     }
    // }
    // patro ()

//10


function sumarMultiples () {
    let numero = 0
    let suma = 0;
    do {
        numero ++
        if (numero % 3 === 0 || numero % 5 === 0) {
            suma += numero;
        }

    } while (numero <= 1000)
    return suma
}

console.log(sumarMultiples())

//11

function patróAsterics(linias) {
    for (let i = 1; i <= linias; i++) {
        if (i % 2 !== 0){
        console.log("* ".repeat(i).trim());
    }}
}


patróAsterics(5);


//12


let enter = 123456


function intercambiarPosicio (numero){

    //creo 2 variables una que seran els numeros que asigmare pasat a un string  i l'altre el resultat
    let numeroAString = numero.toString()
    let resultat = '';

    for (let i = 0; i < numeroAString.length; i++) {
        //el if per a mirar si son parells o senars i fer l'intercamib de posicio
        if (i + 1 < numeroAString.length){
            resultat += numeroAString[i + 1] + numeroAString[i]
            i++
        }else {
            resultat += numeroAString[i]
        }
    }
    return resultat
}
console.log(intercambiarPosicio(enter))