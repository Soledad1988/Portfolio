document.addEventListener('DOMContentLoaded', function() {
    // Función para abrir modal correspondiente
    function openModal(modalId) {
      var modal = document.getElementById(modalId);
      modal.style.display = "block";
    }
  
    // Función para cerrar el modal
    function closeModal(modalId) {
      var modal = document.getElementById(modalId);
      modal.style.display = "none";
    }
  
    // Asignar eventos a los botones
    document.getElementById("btnModal1").onclick = function() {
      openModal("myModal1");
    }

    document.getElementById("btnModal2").onclick = function() {
      openModal("myModal2");
    }

    document.getElementById("btnModal3").onclick = function() {
      openModal("myModal3");
    }
    document.getElementById("btnModal4").onclick = function() {
      openModal("myModal4");
    }
    document.getElementById("btnModal5").onclick = function() {
      openModal("myModal5");
    }

    document.getElementById("btnModal6").onclick = function() {
      openModal("myModal6");
    }

    document.getElementById("btnModal7").onclick = function() {
      openModal("myModal7");
    }

    document.getElementById("btnModal8").onclick = function() {
      openModal("myModal8");
    }

    document.getElementById("btnModal9").onclick = function() {
      openModal("myModal9");
    }

     document.getElementById("btnModal10").onclick = function() {
      openModal("myModal10");
    }
  
  
  
    // Asignar eventos a los botones de cierre
    var closeButtons = document.getElementsByClassName("close");
    for (var i = 0; i < closeButtons.length; i++) {
      closeButtons[i].onclick = function() {
        var modalId = this.getAttribute("data-modal");
        if (modalId) {
          closeModal(modalId);
        }
      }
    }
  });

  //Formulario
  const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } 
  return valido;
}


//enviar formulario
const $form = document.querySelector('form')

async function handleSubmit(event){
  event.preventDefault()
  const form = new FormData(this)
  const response = await fetch('https://formspree.io/f/mqkvrqjj',{
    method:'POST',
    body:form,
    headers:{
      Accept:'application/json'
    }
  })

  if(response.ok){
    this.reset()
    alert('Mensaje enviado')
  }else{
    alert('Error en el envio')
  }

}

form.addEventListener("submit", handleSubmit, (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});

  