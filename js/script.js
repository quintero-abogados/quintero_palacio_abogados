let menuBtn = document.getElementById('menuBtn');
let sideNav = document.getElementById('sideNav');
let menu = document.getElementById('menu');
let logo = document.getElementById('logo');
let counters = document.querySelectorAll('.counter');
let scrollStarted = false;

sideNav.style.right = '-250px';

menuBtn.onclick = function(){
  if(sideNav.style.right === '-250px'){
    sideNav.style.right = '0';
    menu.src = 'img/close.png';
  } else {
    sideNav.style.right = '-250px'
    menu.src = 'img/menu.png'
  }
}


// Initialize and add the map
function initMap() {
  // Your location
  const loc = { lat: 51.511981, lng: -0.132004 };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}

// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});

// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}



function countUp() {
  counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
      // Get count target
      const target = +counter.getAttribute('data-target');
      // Get current counter value
      const c = +counter.innerText;

      // Create an increment
      const increment = target / 100;

      // If counter is less than target, add increment
      if (c < target) {
        // Round up and set counter value
        counter.innerText = `${Math.ceil(c + increment)}`;

        setTimeout(updateCounter, 75);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}

function emailSend(){

  var userName = document.getElementById('name').value;
  var phone = document.getElementById('phone').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;


  var messageBody = "Nombre: " + userName +
  "<br/> Telefono: " + phone +
  "<br/> Correo: " + email +
  "<br/> Mensaje: "+ message;
  Email.send({
    
    Host : "smtp.elasticemail.com",
    Username : "quinteropalacioabogados@gmail.com",
    Password : "2B6454A1779D39E7E420651E69B32C126046",
    To : 'quinteropalacioabogados@gmail.com',
    From : "quinteropalacioabogados@gmail.com",
    Subject : "Quintero Palacio Abogados website",
    Body : messageBody
  }).then(
  message => {
    if(message=='OK'){
      swal("Gracias!", "Tu mensaje ha sido enviado y será respondido lo más pronto posible", "success");
    }
    else{
      swal("Error", "Asegura de no copiar y llenar todo el formulario", "error");
    }
  }
  );
}

function reset() {
  counters.forEach((counter) => (counter.innerHTML = '0'));
}