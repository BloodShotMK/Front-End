// Seleccionar el botón y el menú
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

// Evento para mostrar/ocultar el menú en móviles
menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Seleccionar los paneles
let paneles = document.querySelectorAll('.panel');


for(let i = 0; i < paneles.length; i++){
    paneles[i].addEventListener('click', function(){
        if(paneles[i].classList.contains('abierto')){
            paneles[i].classList.add('expanding');
            //alert('Cerrando panel' +i)

            setTimeout(() => {
                paneles[i].classList.remove('expanding');
                paneles[i].classList.remove('abierto');
            }, 150);

        } else {
            paneles[i].classList.add('shrinking'); // Primero encoge

            setTimeout(() => {
                paneles[i].classList.remove('shrinking'); // Quita "shrinking"
                paneles[i].classList.add('abierto'); // Luego abre
               // alert('Abriendo panel ' + i);
            }, 150); // Pequeño retraso antes de abrir
        }
    });

    paneles[i].addEventListener('mouseover', function(){
        paneles[i].classList.add('dorado');
    });

    paneles[i].addEventListener('mouseout', function(){
        paneles[i].classList.remove('dorado');
    });
}