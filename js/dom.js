

document.cookie = "promo_shown=1; Max-Age=2600000; SameSite=None; Secure"

// console.log(window);
// console.log(document);


// // hacer hablar a la computadora
// let texto="Hola soy diego perales";
// const hablar=(texto)=>speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

// hablar(texto);
/*

console.log("******Elementos del Documento*******");

console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.charset);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);

setTimeout(()=>{

    console.log(document.getSelection().toString());
},3000);

document.write("<h2>Hola prueba de write desde js</h2>");

*/
/*
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));

console.log(document.getElementById("menu"));
console.log(document.querySelector("#menu"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach((el)=>console.log(el));
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelector("#menu li"));
console.log(document.querySelectorAll("#menu li"));  
*/

/*console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang="es";
console.log(document.documentElement.lang);

document.documentElement.setAttribute("lang","es-MX");
console.log(document.documentElement.lang);

const $linkDOM=document.querySelector(".link-dom");

$linkDOM.setAttribute("target","blank");
$linkDOM.setAttribute("rel","noopener");
$linkDOM.setAttribute("href","https://youtube.com");
console.log($linkDOM.hasAttribute("rel"))
console.log($linkDOM.hasAttribute("rel"))
$linkDOM.removeAttribute("rel");

//data attributes
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description","Modelo de objeto del documento");
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Suscribete y comparte";
console.log($linkDOM.dataset.description);
console.log($linkDOM.hasAttribute("data-id"));
console.log($linkDOM.removeAttribute("data-id"));
console.log($linkDOM.hasAttribute("data-id"));
*/

/*console.log("first");

const $linkDOM=document.querySelector(".link-dom");

console.log($linkDOM.style.backgroundColor);

console.log(window.getComputedStyle($linkDOM));
console.log(window.getComputedStyle($linkDOM).getPropertyValue("background-color"));

$linkDOM.style.setProperty("text-decoration","none");
$linkDOM.style.setProperty("display","block");
$linkDOM.style.width="50%";
$linkDOM.style.textAlign="center";
$linkDOM.style.marginLeft="auto";
$linkDOM.style.marginRight="auto";
$linkDOM.style.padding="1rem";
$linkDOM.style.borderRadius=".5rem";

console.log($linkDOM.style);

//css variables custom propities

const $html=document.documentElement,$body=document.body;

let varDarkColor=getComputedStyle($html).getPropertyValue("--dark-color");
let varYellowColor=getComputedStyle($html).getPropertyValue("--yellow-color");


console.log(varDarkColor,varYellowColor);

$body.style.backgroundColor=varDarkColor;
$body.style.color=varYellowColor;

$html.style.setProperty("--dark-color","pink");

varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-color",varDarkColor);*/

/*const $card=document.querySelector(".card");

console.log($card);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.replace("rotate-45","rotate-135"); // remplaza los parametros de las clases css 
$card.classList.add("opacity-80","sepia");
$card.classList.remove("opacity-80","sepia");
$card.classList.toggle("opacity-80","sepia");*/

/*const $texto=document.getElementById("que-es");

let concepto = `
    <p>
    El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
API para documentos HTML y XML.
    </p>
    <p>
    Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
        <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
`;*/

//$texto.innerText=concepto;//ya no se usa tampooco reconoce html
/*$texto.textContent=concepto;//este se usa mas pero no reconoce html
$texto.innerHTML=concepto;

$texto.outerHTML=concepto;*/

/*const $cards=document.querySelector(".cards");

console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.firstChild);
console.log($cards.lastChild);
console.log($cards.lastElementChild);
console.log($cards.previousSibling);
console.log($cards.previousElementSibling);
console.log($cards.nextSibling);
console.log($cards.nextElementSibling);
console.log($cards.closest("div"));
console.log($cards.children[3].closest("section"));*/

    /// Fragmentos y elementos cap 68 


/*const $figure=document.createElement("figure"),
    $img=document.createElement("img"),
    $figcaption=document.createElement("figcaption"),
    $figcaptionText=document.createTextNode("Animals2"),
    $cards=document.querySelector(".cards"),
    $figure2=document.createElement("figure");

    
    $img.setAttribute("src","https://img.freepik.com/vector-gratis/coleccion-figuras-geometricas-distorsion_23-2148089933.jpg?auto=format&h=200")
    $img.setAttribute("alt","TIgresito");
    $figure.classList.add("card");
    $figcaption.appendChild($figcaptionText);
    $figure.appendChild($img);
    $figure.appendChild($figcaption);
    $cards.appendChild($figure);

    $figure2.innerHTML=`
     <img src="https://placeimg.com/200/200/tech" alt="Tech">
    <figcaption>Pruebita</figcaption>`;

    $figure2.classList.add("card");
    $cards.appendChild($figure2);

    const estaciones=["primavera","verano","otoño","invierno"],
     $ul=document.createElement("ul");

     document.write("<h3>Estaciones del año</h3>");
     document.body.appendChild($ul);
    estaciones.forEach(el=>{
        const $li=document.createElement("li");
        $li.textContent=el;
        $ul.appendChild($li);
    });

    const $numeros=[1,2,3,4,5],
    $ul2=document.createElement("ul");

    document.write("<h3>Numeros: </h3>");
    document.body.appendChild($ul2);
    $ul2.innerHTML="";
    $numeros.forEach(el=>$ul2.innerHTML+=`<li>${el}</li>`);

    const $meses=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","diciembre"],
    $ul3=document.createElement("ul"),
    $fragment=document.createDocumentFragment();

    $meses.forEach(el=>{
        const $li=document.createElement("li");
        $li.textContent=el;
        $fragment.appendChild($li);
    });

    document.write("<h3>Meses:</h3>");
    $ul3.appendChild($fragment);
    document.body.appendChild($ul3);*/


 //// Templates

    /*const $cards=document.querySelector(".cards"),
    $template=document.getElementById("template-card").content,
    $fragment=document.createDocumentFragment(),
    cardContent=[
        {
            title:"Tecnologia",
            img:"https://placeimg.com/200/200/tech"
        },
        {
            title:"Animales",
            img:"https://placeimg.com/200/200/animals"
        },
        {
            title:"Arquitectura",
            img:"https://placeimg.com/200/200/people"
        },
        {
            title:"Gente",
            img:"https://placeimg.com/200/200/tech"
        },
        {
            title:"Naturaleza",
            img:"https://placeimg.com/200/200/tech"
        } 

    ];
    cardContent.forEach(el=>{
        $template.querySelector("img").setAttribute("src",el.img);
        $template.querySelector("img").setAttribute("alt",el.title);
        $template.querySelector("figcaption").textContent=el.title;
        let $clone=document.importNode($template,true);
        $fragment.appendChild($clone);
    });

    $cards.appendChild($fragment);*/

// OLD STYLE

/*const $cards=document.querySelector(".cards"),
$newCard=document.createElement("figure"),
$cloneCards=$cards.cloneNode(true);

$newCard.innerHTML=`<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaption>ANy</figcaption>`;

$newCard.classList.add("card");

//$cards.replaceChild($newCard,$cards.children[2]);
//$cards.insertBefore($newCard,$cards.firstElementChild);
//$cards.removeChild($cards.lastElementChild);
document.body.appendChild($cloneCards);*/

/* 
.insertAdjacent...
    .insertAdjacentElement(position,el)
    .insertAdjacentHTML(position,html)
    .insertAdjacentText(position,text)

posiciones:
    beforebegin (hermano anterior)
    afterbegin (primer hijo)
    beforeend (ultimo hijo)
    afterend  (hermano siguiente)
*/
/*const $cards=document.querySelector(".cards"),
$newCard=document.createElement("figure");


let $contentCard=`<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaption></figcaption>`;

$newCard.classList.add("card");
$newCard.insertAdjacentHTML("beforeend",$contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin","Any");
//$cards.insertAdjacentElement("afterbegin",$newCard);

//$cards.prepend($newCard);
//$cards.append($newCard);
//$cards.before($newCard);
$cards.after($newCard);*/
//

/*function holaMundo(){
    alert("holaa");
    console.log(event); 
}

function saludar(name="Desconocido"){
    alert(`Hola ${name}`);
}

const $eventoSemantico=document.getElementById("evento-semantico");

$eventoSemantico.onclick=holaMundo;
$eventoSemantico.onclick=function(e){
    alert("222");
    console.log(e);
}

const $eventoMultiple=document.getElementById("evento-multiple");

$eventoMultiple.addEventListener("click",holaMundo);
$eventoMultiple.addEventListener("click",(e)=>{
    alert("33333");
    console.log(e.type);
    console.log(e.target);
});

$eventoMultiple.addEventListener("click",()=>{
    saludar();
    saludar("DIego");

});

const $eventoRemover=document.getElementById("evento-remover");

const removerDobleCLick=(e)=>{
    alert(`Removiendo el evento de tipo ${e.type}`);
    console.log(e);
    $eventoRemover.removeEventListener("dblclick",removerDobleCLick);
    $eventoRemover.disabled=true;
}

$eventoRemover.addEventListener("dblclick",removerDobleCLick);*/

/*function flujoEventos(e){
    console.log(`holanda te saluda ${this.className}, el click lo origino ${e.target.className}`);
    //e.stopPropagation();
}*/

//const $divEventos=document.querySelectorAll(".eventos-flujo div");
//console.log($divEventos);
//const $linkEventos=document.querySelector(".eventos-flujo a");

/*$divEventos.forEach(div=>{
    //fase de burbuja
    div.addEventListener("click",flujoEventos);
    //div.addEventListener("click",flujoEventos,false);
    //fase de captura
    //div.addEventListener("click",flujoEventos,true);
    // div.addEventListener("click",flujoEventos,{
    //     capture:false,
    //     once:true
    // })
});*/

/*$linkEventos.addEventListener("click",e=>{
    alert("hola soy diego");
    //e.preventDefault();
});*/

/*document.addEventListener("click",(e)=>{
    console.log(`click en`, e.target);
    if(e.target.matches(".eventos-flujo div")){
        flujoEventos(e);
    }

    if(e.target.matches(".eventos-flujo a")){
        alert("hola soy diego");
        e.preventDefault(); 
    }
})*/



/*window.addEventListener("resize",e=>{
    console.clear();
    console.log("evento resize");
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(window.outerWidth);
    console.log(window.outerHeight);
    console.log(e);
});

window.addEventListener("scroll",e=>{
    console.clear();
    console.log("evento scroll");
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
});

window.addEventListener("load",e=>{
    //console.clear();
    console.log("evento load");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
});

document.addEventListener("DOMContentLoaded",e=>{
    //console.clear();
    console.log("evento DOMCOntentLoaded");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
});*/

//window.alert("Confimarcion");
//window.confirm("Confimarcion");
//window.prompt("Confimarcion");
/*const $btnAbrir=document.getElementById("abrir-ventana"), $btnCerrar=document.getElementById("cerrar-ventana"), $btnImprimir=document.getElementById("imprimir-ventana");
let ventana;
$btnAbrir.addEventListener("click",e=>{
    ventana=open("https:www.google.com");
});
$btnCerrar.addEventListener("click",e=>{
    ventana.close();
});
$btnImprimir.addEventListener("click",e=>{
    print();
});*/

// console.log("****Objewto URL (location)*****")
// console.log(location);
// console.log(location.origin);
// console.log(location.protocol);
// console.log(location.host);
// console.log(location.hostname);
// console.log(location.port);
// console.log(location.href);
// console.log(location.hash);
// console.log(location.search);
// console.log(location.pathname);
// //location.reload();

// console.log("****Objewto URL (history)*****")
//  console.log(history);
//  console.log(history.length);
//  history.back(3);
//  history.forward(3);
//  history.go(2);

console.log("***objeto navegador***");
console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent);