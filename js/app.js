let botonVerMas = document.getElementById("btnVerMas");
// agregar un manejador de eventos
botonVerMas.addEventListener("click", verMas);
// si tengo que enviar argumentos
// botonVerMas.addEventListener('click', ()=>{ verMas(param1,param2)});

function cambiarTitulo() {
  console.log("Desde cambiar Titulo");
  // traer el h1 del html
  let titulo = document.querySelector("h1");
  // let titulo = document.querySelector('.container');
  // let titulo = document.querySelector('#nombreId');
  //  let titulo = document.getElementsByTagName('h1'); //devuelve un htmlCollection
  //  let titulo = document.getElementById('tituloPrincipal'); //devuelve un objeto
  //  let titulo = document.getElementsByClassName('container'); //devuelve un htmlCollection
  console.log(titulo.className);
  titulo.className = "text-primary";
  titulo.innerHTML = "Nuevo titulo desde <b>JS</b>";
  // titulo.innerText = 'Nuevo titulo desde JS';
}

function verMas() {
  console.log("Desde la funcion ver mas");
  //traemos el section padre
  let seccionPadre = document.querySelector("#contenedorPadre");

  if (botonVerMas.innerHTML === "Ver mas") {
    //crear el nuevo elemento
    let parrafo = document.createElement("p");
    console.log(parrafo);
    parrafo.innerHTML = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, ipsa
quam aut odit maxime, eligendi dolor nesciunt pariatur nisi beatae
dolore, culpa iste? Quod minus, tenetur incidunt ducimus molestias
neque vitae maiores ratione ea perferendis facere nulla, itaque
deserunt, totam quas officia. Voluptate cupiditate eveniet, est
numquam beatae neque, veritatis debitis ea iusto magni, sapiente totam
architecto assumenda. Quasi tempore tenetur, dolor beatae voluptatibus
maiores. Unde et, quod minus quam eos debitis sapiente consequatur
laudantium explicabo in facilis vitae veniam neque nesciunt animi
reprehenderit qui, recusandae quisquam nam tenetur? Iure, ad! Maxime
adipisci neque incidunt omnis, rerum corrupti sequi eveniet aspernatur
in velit minima, minus quidem iusto ex autem tempora laudantium?`;
    parrafo.className = "lead";
    //insertar el nodo hijo
    // seccionPadre.appendChild(parrafo);//agrega el nodo al final
    // seccionPadre.prepend(parrafo);
    seccionPadre.insertBefore(parrafo, botonVerMas);

    botonVerMas.innerHTML = "Ocultar";
    botonVerMas.className = "btn btn-danger";
  }else{
    console.log(seccionPadre.children);
    seccionPadre.removeChild(seccionPadre.children[3])
    botonVerMas.innerHTML = "Ver mas";
    botonVerMas.className = "btn btn-primary";
  }
}
