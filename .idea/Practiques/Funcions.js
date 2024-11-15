//
// 1
//     nom = "Manel"
//     cognom = "Dominguez"
//
//     function mostrarNomCognom( n, c) {
//         console.log (n + " " + c)
//     }
//
//     mostrarNomCognom(nom,cognom)
//
// 2
//     valor = 10
//     function  tipoParametre(param) {
//         console.log(typeof param)
//     }
//     tipoParametre(valor)
//
// 3
//     const dada = new Date()
//     function data(data) {
//         console.log(data)
//     }
// data(dada)
//
// 4
//
// function valorRaro (){
//     var valor = 10
//     console.log(valor)
//
// }
// console.log(valor)
//
// 5
//
// text = "ola"
// contador = 0
// function  mostrarVocals(string) {
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u") {
//             contador++
//         }
//     }
//     console.log("La paraula " + string + " te  " + contador + " vocals ")
//
// }
// mostrarVocals(text)
//
// 6

//
    function suma(a,b, c= 10){
        return a+b+c
    }
    valor1 = 4
    valor2 = 5


console.log(suma(valor1,valor2))

// 7
//
// function siete (){
//    data(dada)
//    return suma(valor1,valor2,valor3)
// }
// console.log(siete())
//
// 8
//
// enter1 = 10
// enter2 = 20
//
// function vuit ( un, dos){
//     if (un || dos === 30){
//         return true
//     }else if (un + dos === 30) {
//         return true
//     }else {
//         return false
//     }
// }
//
// console.log(vuit(enter1,enter2))
//
//
// 9
//     enter1 = 10oder
//     enter2 = 20
//     var retornaTrue = ( un, dos) =>{
//         if (un || dos === 30){
//             return true
//         }else if (un + dos === 30) {
//             return true
//         }else {
//             return false
//         }
//     }
//
//     console.log(retornaTrue(enter1,enter2))
//
//
// 10
//
// valor1 = 10
// valor2 = 10
//
// var iguals = (v1,v2) => {
//     if (v1 === v2 && typeof v1 === typeof v2){
//         return true
//     }else {
//         return false
//     }
// }
//
// console.log(iguals(valor1,valor2))
//
// 11
//
// arrel = 110
//
// var ferArrel =  (v1)=>{
//     var resultatArrel = Math.sqrt(v1)
//     return resultatArrel.toFixed(2)
// }
// console.log(ferArrel(arrel))
//
// 12
//
// text = "HOLAQUETAL"
//
// var pasarMinuscules = (txt) => {
//     return txt.toLowerCase()
// }
// console.log(pasarMinuscules(text))
//
// 13
//
// valor1 = null
// valor2 = 20
//
// var valorNoNull = (v1,v2) => {
//     if (v1 !== null){
//         return v1
//     }else if (v2 !== null){
//         return v2
//     }else {
//         return false
//     }
// }
//
// console.log(valorNoNull(valor1,valor2))
//
// 14
    const frase = "Hola com estàs";
    const paraula = "com";

    function posicio(frase, paraula) {
        const indexParaula = frase.indexOf(paraula);
        return frase.length - indexParaula;
    }

    function dividir(frase, paraula) {
        const posicioParaula = posicio(frase, paraula);
        return frase.slice(frase.length - posicioParaula) ;
    }


    console.log(posicio(frase, paraula));
    console.log(dividir(frase, paraula));
//
// 15
//
//  valorx = 1
//  var quince = (x) => x + x +x
// console.log(quince(valorx))
