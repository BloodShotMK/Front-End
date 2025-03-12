// Seleccionar el botón y el menú
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

// Evento para mostrar/ocultar el menú en móviles
menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

let paneles = document.querySelectorAll('.panel');

for(let i = 0; i < paneles.length; i++){
    //algo aquí

    paneles[i].addEventListener('click', function(){
        alert('click en panel ' +i);
    }); 
}   

    paneles[i].addEventListener('mouseover', function(){
            paneles[i].classList.add('dorado');
    });

    paneles[i].addEventListener('mouseout', function(){
        paneles[i].classList.remove('dorado');
});