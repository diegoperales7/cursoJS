// Ejercicios

//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

function contarCaracteres(palabra=""){
    typeof(palabra)==="string"?console.log(palabra.length):console.warn("lo que ingreso no es una cadena de texto");    
}

contarCaracteres('perro');


//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".


let textoCortado=(text="",num=undefined)=>typeof(text)==="string"?text.slice(0,num):"no es una cadena";


console.log(textoCortado("abcde"));
//textoCortado('dieguito',4);


//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

let textoSeparado=(txt="",separador=undefined)=>
    typeof(txt)==="string"
        ?console.log(txt.split(separador))
            :console.warn("no es una cadena");

textoSeparado("hola que tal"," ");


//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

let repetir=(texto="",cantidad=undefined)=>{
    let cont=0;
    if(!texto)return console.warn("no ingresaste un texto");

    if(cantidad===undefined) return console.warn("no ingresaste una cantidad");

    if(cantidad===0) return console.error("La cantidad no puede ser cero");

    if(Math.sign(cantidad)===-1) return console.warn("cantidad no puede ser negativa");
    
    while(cont<cantidad){
        console.log(texto);
        cont++;
    } 
    

}

repetir("aaa",3);

//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

let invertirCadena=(cadena="")=>
    
    (!cadena)
    ?console.warn("no existe la cadena")
    :(typeof(cadena)==="number")
        ?console.warn("no puede ser un numero")
        :console.log("5."+cadena.split('').reverse().join(''));



invertirCadena('hola que haces');


//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

let contarPalabrasRepetidas=(texto="",palabra=undefined)=>{
    let arr=texto.split(' ');
    let cont=0;
    if(!texto) return console.warn("no ingresaste un texto");

    if(palabra===undefined) return console.warn("no ingresaste una palabra");

    for (const item of arr) {
        if(item==palabra)cont++;    
    }
    return console.log(cont);
}

contarPalabrasRepetidas('hola com estas amigo hola Hola','hola');

//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

let verificarPalindromo=(palabra="")=>{
    if(!palabra) return console.warn("no existe palabra");
    palabra=palabra.toLowerCase().replaceAll(' ', '');;
    let invertido=palabra.split("").reverse().join("");
    (palabra==invertido)?console.log(true):console.log(false);
}

verificarPalindromo('Dabale arroz a la zorra el abad');
verificarPalindromo('Salas');
verificarPalindromo('Anita lava latina');

//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

let eliminarPatron=(palabra='', patron=undefined)=>

    (!palabra)
    ?console.warn("no existe palabra")
    :(patron===undefined)?console.warn("el patron no esta definido"):console.log(palabra.replace(new RegExp(patron,"ig"),""));



eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");

//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const aleatrorio=(min,max)=>{
    if(!min) return console.warn("no ingreso numero minimo");
    if(!max) return console.warn("no ingreso numero maximo");
    let numero=Math.floor(Math.random()*((max+1)-min)+min);
    return console.log(numero);
}

aleatrorio(501,600);
//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const capicua=(num=0)=>{
    if(!num) return console.log("no ingreso un numero");
    if(typeof(num)!=='number') return console.log("ingree un valor de tipo number");
    num=num.toString();
    let inverse=num.split("").reverse().join("");
    (num==inverse)?console.log(true):console.log(false);
}

capicua(20.02);
//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const factoriale=(numero=undefined)=>{

    if(numero<=0) return console.warn("el numero no puede ser negativo o cero");
    if(numero==1) return console.log(1);

    if(typeof(numero)  !== 'number') return console.warn("debe ingresar un numero");
    
    let res=1;
    for (let cont = 1; cont <= numero; cont++)res=res*cont;
    
    return console.log(res);
}

factoriale(5);


//12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const esPrimo=(numero=undefined)=>{
    if(!numero) return console.warn("ingrese un numero");

    if(typeof numero !== 'number') return console.warn("debe ingresar un numero");

    if(Math.sign(numero)==-1) return console.warn("el numero no puede ser negativo");

    if(numero===0) return console.warn("el numero no puede ser 0");

    if(numero===1) return console.warn("el numero no puede ser 1");
    let primo=true;

    for (let i = 2; i < numero; i++) {
        if(numero%i===0){
            primo=false;
            break;
        } 
    }

    return (primo)?console.log("es primo"):console.log("no es primo");

}

esPrimo(97);

//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const determinarParOImpar=(numero=undefined)=>{
    if(!numero) return console.warn("ingree un numero");

    if(typeof numero !== 'number') return console.warn("debe ingresar un numero");

    (numero%2==0)?console.log("es par"):console.log("es impar");
}

determinarParOImpar(100);


//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const conversionGrados=(numero=undefined,unidad='')=>{

    if(numero===undefined) return console.error("ingrese un numero");
    if(!unidad) return console.error("ingrese un grado C/F")
    if(unidad.length!==1 || !/C|F/.test(unidad)) return console.warn("valor de unidad no reconocido");


    if(unidad=='C'){
        let res=(numero*1.8)+32;
        return console.log(`${numero} ${unidad} es igual a ${res.toFixed(2)} F`);
    }
    if(unidad=='F'){
        let res=(numero-32)*0.5556;
        return console.log(`${numero} ${unidad} es igual a ${res.toFixed(2)} C`);
    }

}

conversionGrados(100,'C');
conversionGrados(100,'F');

//15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

console.warn("Ejercicio 15");

const convertirBases=(numero=undefined,base=undefined)=>{
    if(numero===undefined) return console.error("no ingreso un numero");
    if(base===undefined) return console.error("no ingreso una base");
    if(base!==2 && base!==10) return console.warn("solo puede usar base 2 o 10");
    if(typeof base !== 'number') return console.warn("solo puede ingresar numeros");
    if(typeof numero !== 'number') return console.warn("solo puede ingresar numeros");
    if(base===10){
        return console.log("El numero decimal: "+numero+" en binario es: "+numero.toString(2));
    }else if(base===2){
        return console.log(`El numero binario: ${numero} en decimal es: ${parseInt(numero,2)}`);
    }
}

convertirBases(100,2);
convertirBases(4,10);

//16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const calcularMonto=(monto=undefined,descuento=0)=>{

    if(monto===undefined) return console.error("no ingreso monto");
    if(monto===0) return console.error("el monto no puede ser 0");
    if(Math.sign(monto)===-1) return console.error("el monto no puede ser negativo");
    if(Math.sign(descuento)===-1) return console.error("el descuento no puede ser negativo");
    if(descuento===0) return console.error(monto);
    if(typeof monto!=='number') return console.warn("el monto debe ser un numero");
    if(typeof descuento!=='number') return console.warn("el descuento debe ser un numero");
    
    return console.log(monto-(monto*(descuento/100)));

}

calcularMonto(1000,20);
//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const calcularAnios=(date = undefined)=>{

    if(date===undefined) return console.error("no ingreso una fecha")

    if(!date) return console.error("no ingreso una fecha");

    if(!date instanceof Date) return console.warn("No ingreso una fecha valida");
    
    let fecha= new Date();

    let diff=fecha.getTime()-date.getTime();

    let aniosEnMs=1000*60*60*24*365,

    aniosHumanos=Math.floor(diff/aniosEnMs);

    return (Math.sign(aniosHumanos)===-1)
    ?console.log(`Faltan ${Math.abs(aniosHumanos)} años para el ${date.getFullYear()}`)
    :(Math.sign(aniosHumanos)===1)
    ?console.log(`Han pasado ${aniosHumanos}, Desde ${date.getFullYear()}`)
    :console.log(`Estamos en el año actual ${date.getFullYear()}`);
    
}

calcularAnios(new Date(2022,4,19));


//18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
console.warn("ejercicio 18");

const contarVocalesConsonantes=(cadena="")=>{

    if(!cadena) return console.warn("no puede ingresar una cadena vacia");

    if(typeof cadena !== 'string') return console.warn("no es una cadena de texto valida");

    let mensaje = cadena.toLowerCase();
    let vocales=0,
    consonantes=0;

    for (let letra of mensaje) {

        if(/[aeiouáéíóúü]/.test(letra)) vocales++;
        
        if(/[bcdfghjklmnñpqrstvwxyz]/.test(letra))consonantes++;
        
    }

    //console.log(`palabra: ${mensaje}, vocales: ${vocales}, consonantes: ${consonantes}`);

    return console.log({cadena,vocales,consonantes});
    
}

contarVocalesConsonantes("holA Mundo");


//19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

const validarNombre=(nombre="")=>{
    //let regExp=/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
    let expReg=/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g;
    if(!nombre) return console.warn("no ingreso un nombre");

    if(typeof nombre !== 'string') return console.warn("su cadena no es de tipo string");

    //(!regExp.test(nombre))?console.log("nombre no valido"):console.log("nombre valido");
    (expReg.test(nombre))?console.log("nombre valido"):console.log("nombre no valido");

}

validarNombre("Diego Perales");

//20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

const validarCorreo=(correo="")=>{
    let regExp=/^[\w]+@{1}[\w]+\.[a-z]{2,3}$/;

    let expReg=/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i;

    if(!correo) return console.warn("no ingreso un correo");

    if(typeof correo !== 'string') return console.warn("su correo no es de tipo string");

    //(!regExp.test(correo))?console.log("correo no valido"):console.log("correo valido");
    (expReg.test(correo))?console.log("correo valido"):console.log("correo no valido");

}

validarCorreo("diegoerpea@asdsa.com");

//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

console.warn("ejercicio 21");

const arrayElevado=(cadena=undefined)=>{
    if (cadena===undefined) return console.log("no ingreso la cadena");
    if(!(cadena instanceof Array)) return console.log("la cadena no es un array");
    if(cadena.length==0) return console.warn("a cadena no puede estar vacia");

    for (const numero of cadena) {
        if(typeof numero !=='number') return console.error(`El valor "${numero}" ingresado, No es un numero`);
    }
    //let cadena2=[];
    let cadena2=cadena.map(el=>Math.pow(el,2));
    // for(let i=0;i<cadena.length;i++) {
    //     cadena2[i]=Math.pow(cadena[i],2);
    // }
    // 
    
    console.log(cadena2);
}

arrayElevado([3,4,5]);

//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const mayorMenor=(array=undefined)=>{

    let array2=[];
    if(array===undefined) return console.warn("no ingreso ningun array");
    if(!(array instanceof Array)) return console.warn("la cadena no es un array");
    if(array.length==0) return console.warn("la cadena no puede estar vacia");

    for (const numero of array) {
        if(typeof numero !=='number') return console.error(`El valor "${numero}" ingresado, No es un numero`);
    }
    array2[0]=Math.max(...array);
    array2[1]=Math.min(...array);
    console.log(array2);

}
mayorMenor([1,4,5,99,-60]);
//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const paresImpares=(array=undefined)=>{
    if(array===undefined) return console.warn("no ingreso ningun array");
    if(!(array instanceof Array)) return console.warn("la cadena no es un array");
    if(array.length==0) return console.warn("la cadena no puede estar vacia");

    for (const numero of array) {
        if(typeof numero !=='number') return console.error(`El valor "${numero}" ingresado, No es un numero`);
    }

    // let pares=[],
    //     impares=[];
    // let obj={pares,impares};

    // let cont=0,cont2=0;

    // for (const i in array) {
    //     if(array[i]%2==0){
    //         pares[cont]=array[i];
    //         cont++
    //     }else{
    //         impares[cont2]=array[i];
    //         cont2++;

    //     }
    // }

    // console.log(obj);

    return console.log({
        pares:array.filter(num=>num%2==0),
        impares:array.filter(num=>num%2==1)
    })


}

paresImpares([1,2,3,4,5,6,7,8,9,0]);


//24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

console.warn("ejercicio 24");

const ordenarNumeros=(arr=undefined)=>{

    if(arr==undefined) return console.warn("no ingreso ningun arreglo");
    if(!(arr instanceof Array)) console.warn("solo puede ingresar arreglos");
    if(arr.length==0) return console.warn("la cadena no puede estar vacia");

    for (const numero of arr) {
        if(typeof numero !=='number') return console.error(`El valor "${numero}" ingresado, No es un numero`);
    }
   
    //let desc=arr.sort(function(a,b){return b-a});

    return console.log({
        asc: arr.map(el=>el).sort(),
        desc: arr.map(el=>el).sort().reverse()
    });


}

ordenarNumeros([7,5,7,8,6]);

//25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const borrarDuplicados=(arr=undefined)=>{

    if(arr==undefined) return console.warn("no ingreso ningun arreglo");
    if(!(arr instanceof Array)) return console.warn("solo puede ingresar arreglos");
    if(arr.length==0) return console.warn("la cadena no puede estar vacia");
    if(arr.length==1) return console.warn("la cadena no puede tener menos de dos elementos");
    let res=[];

    /*for (const i of arr) {
        //console.log(i);
        if(!(res.includes(i))){
            res.push(i);
        }    
    }
    console.log(res);*/

    // return console.log({
    //     arr: arr.filter((value,index,self)=>self.indexOf(value)===index)
    // });
    return console.log({
        arr:[... new Set(arr)]
    });

}

borrarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);


//26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const calcularPromedio=(arr=undefined)=>{
    if(arr===undefined) return console.warn("no ingreso un array");
    if(!(arr instanceof Array)) return console.warn("solo puede ingresar valores tipo array");
    if(arr.length===0) return console.warn("no puede ingresar un array vacio");
    let res=0;
    // for (const i of arr) {
    //     res=res+i;
    // }
    // let prom=res/arr.length;
    // return console.log(`el promedio es: ${prom}`)

    return console.log({
        arr: arr.reduce((total,num,index,arr)=>{
            total+=num;
            if(index === arr.length-1){
                return `el promedio de ${arr.join(' + ')} es ${total/arr.length}`;
            }else{
                return total;
            }
        })
    });
}

calcularPromedio([9,8,7,6,5,4,3,2,1,0]);

//7) Programa una clase llamada Pelicula.

/*La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.*/

console.warn("ejericio 27");

class Pelicula{
    
    constructor({imdb,titulo, director, anioEstreno,pais, genero , calificacion}){
        
        //let regExp=/^(\d{4})$/;
        
        //let regExp2=/^([0-9][0-9][a-z][a-z][a-z][a-z][a-z][a-z][a-z]){9}$/;
        //let regExp3=/^(10|\d([.,]\d{1,2})?)$/;
      
        this.imdb=imdb;
        this.titulo=titulo;
        this.director=director;
        this.anioEstreno=anioEstreno;
        this.pais=pais;
        this.genero=genero;
        this.calificacion=calificacion;

        this.validarImbd(imdb);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarAnioEstreno(anioEstreno);
        this.validarPais(pais);
        this.validarGeneros(genero);
        this.validarCalificacion(calificacion);
    }

    static get listaGeneros(){
        return ["Action","Adult","Adventure", "Animation","Biography","Comedy","Crime", "Documentary","Drama","Family","Fantasy", "Film Noir","Game-Show","History","Horror", "Musical","Music","Mystery","News", "Reality-TV","Romance","Sci-Fi","Short","Sport","Talk-Show","Thriller","War","Western"];    
    }

    static generosAceptados(){
        return console.info(`Los generos aceptados son: ${Pelicula.listaGeneros.join(", ")}`);
    }
    
    validarCadena(propiedad, valor){
       if(!valor) return console.warn(`${propiedad} "${valor}" ingresado no es una cadena de texto`) ;
       if(typeof valor !=="string") return console.error(`${propiedad} "${valor}" ingresado no es una cadena de texto`);
       return true;
    }

    validarLongitudCadena(propiedad, valor, longitud){
        if(valor.length>longitud) return console.error(`${propiedad} "${valor}" excedde el numero de caractere permitidos ${longitud}`);

        return true;
    }

    validarNumero(propiedad, valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`) ;
        if(typeof valor !=="number") return console.error(`${propiedad} "${valor}" ingresado no es un numero`);
        return true;
     }

     validarArreglo(propiedad,valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`) ;
        if(!(valor instanceof Array)) return console.warn(`${propiedad} "${valor}" no es un arreglo`) ;
        if(valor.length===0) return console.warn(`${propiedad} "${valor}" no tiene datos`) ;

        for (const cadena of valor) {
            if(typeof cadena !=="string") return console.error(`El valor "${cadena}" ingresado no es una cadena de texto`);
        }

        return true;
     }

    validarImbd(imdb){
        if(this.validarCadena("IMDB",imdb)){
            if(!(/^([a-z]){2}([0-9]){7}$/.test(imdb))){
                return console.error("el imdb no esta en el formato indicado");
            }
        }
    }

    validarAnioEstreno(anioEstreno){
        if(this.validarNumero("Año Estreno",anioEstreno)){
            if(!(/^([0-9]){4}$/.test(anioEstreno))){
                return console.error("el Año de estreno no esta en el formato indicado");
            }
        }
    }

    validarTitulo(titulo){
        if(this.validarCadena("Titulo",titulo)){
            this.validarLongitudCadena("Titulo",titulo,100);
        }
    }

    validarDirector(director){
        if(this.validarCadena("Director",director)){
            this.validarLongitudCadena("director",director,50);
        }
    }

    validarPais(pais){
        this.validarArreglo("Pais", pais);
    }

    validarGeneros(generos){
        if(this.validarArreglo("Genero", generos)){
            for (let gen of generos) {
               //console.log(genero, Pelicula.listaGeneros.includes(genero));
                
               if(!Pelicula.listaGeneros.includes(gen)){
                   console.error(`Generos incorrectos "${generos.join(", ")}"`);
                   Pelicula.generosAceptados();
               }
            }
        }
    }

    validarCalificacion(calificacion){
        if(this.validarNumero("Calificacion", calificacion)){
            return (calificacion<0 || calificacion>10)?console.error("la calificacion debe estar entre 0 y 10"):this.calificacion=calificacion.toFixed(1);
        }
    }

    fichaTecnica(){
        console.log(`Ficha tecnica:\nIMDB: "${this.imdb}"\nTitulo: "${this.titulo}"\nDirector: "${this.director}"\nAño: "${this.anioEstreno}"\nPais: "${this.pais.join("-")}\nGeneros: "${this.genero.join(", ")}"\nCalificacion: "${this.calificacion}"`)
    }
   
}

//Pelicula.generosAceptados();
const titanic=new Pelicula({
    imdb:"tt1234567",
    titulo:"titanic",
    director:"James Rodriguez",
    anioEstreno:2015,
    pais:["Inglaterra","España"],
    genero:["Comedy","Sport"],
    calificacion:6.5
});

const misPelis=[
    {
        imdb:"tt1234567",
        titulo:"titanic",
        director:"James Rodriguez",
        anioEstreno:2015,
        pais:["Inglaterra","España"],
        genero:["Comedy","Sport"],
        calificacion:6.5
    },
    {
        imdb:"ab1234567",
        titulo:"KingsMan",
        director:"Jhony Florentino",
        anioEstreno:2001,
        pais:["Bolivia"],
        genero:["Action","Crime"],
        calificacion:8
    },
    {
        imdb:"cd4234567",
        titulo:"Irreversible",
        director:"Cristian Meyer",
        anioEstreno:1969,
        pais:["EEUU","Canada","Englad"],
        genero:["Romance"],
        calificacion:4.528
    }

];


//titanic.fichaTecnica();

misPelis.forEach(el=>new Pelicula(el).fichaTecnica());

