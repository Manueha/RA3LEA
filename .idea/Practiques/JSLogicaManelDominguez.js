
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
//     let x = 9
//     let y = 50
//
//     function rang(x,y){
//         x || y >=10 && x || y <= 50 ? console.log("Un numero esta en el rang") : console.log("Cap numero esta en el rang")
//     }
//
//     rang(x,y)

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

    let x = 15;
    let suma = 0;
    let n = 0;

    for (let i = 1; suma + i <= x; i++) {
        suma += i;
        n = i;
    }

    console.log("El maxim numero es : " + n);

//6


    // let hola1 = "bon dia 20"
    // let  hola2 = "mal dia 20"
    //
    // function sumarStrings(string1, string2){
    //     //utilitzo match per a fer la expressio regular que em retorna el numero dins de un array que transformo a integer utilitzant el parse
    //     let numholaa = parseInt(string1.match(/\d+/))
    //     let numholab = parseInt(string2.match(/\d+/))
    //     return numholaa + numholab
    // }
    // console.log(sumarStrings(hola1,hola2))


//7

    enter1 = 49
    enter2 = 50
    enter3 = 30

    function ordenarMajorMenor(a,b,c){
        if (a > b && a > c){
            if (b > c){
                return console.log(a + " "+ b + " " + c)
            }else {
               return console.log(a + " " +  c + " "+ b)
            }
        }else if (b > a && b > c){
            if (a > c){
                return console.log(b + " " + a + " " + c )
            }else {
                return console.log(b + " " + c + " " + a)
            }
        }else if (c > a && c > b){
            if (a > b) {
                return console.log(c + " "+ a + " " + b)
            }else {
                return console.log(c + " " + b + " " + a)
            }
        }else {
            return console.log("El valor no es valid")
        }
    }
    console.log(ordenarMajorMenor(enter1,enter2,enter3))