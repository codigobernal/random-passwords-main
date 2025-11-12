const btnGenerar = document.getElementById("generarPassword");
const btnCopiar = document.getElementById("copiarPassword");
const tituloPassword = document.getElementById("tituloPassword");
const parrafoPassword = document.getElementById("parrafoPassword");
const btnImprimir = document.getElementById("imprimirPassword");
const inputResultado = document.getElementById("passwordGenerada");
const formulario = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");
const toastElement = document.getElementById("toastBootstrap");
const toastBootstrap = new bootstrap.Toast(toastElement);

function generarPassword() {
  let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let numeros = "0123456789";
  let simbolos = "!@#$%^&*()-_=+[]{};:'\",.<>/?|`~";

  const caracteres = letras + numeros + simbolos;

  // Previniendo el envío del formulario
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    let passwordSegura = "";
    const longitudPassword = 25;

    for (let i = 0; i < longitudPassword; i++) {
      const valoresAleatorios = Math.floor(Math.random() * caracteres.length);
      passwordSegura += caracteres[valoresAleatorios];
    }

    // console.log(passwordSegura);

    // Colocando el resultado en el input
    inputResultado.value = passwordSegura;

    btnImprimir.classList.remove("d-none");
    btnImprimir.classList.add("d-block");
  });
}

function copiarPassword() {
  btnCopiar.addEventListener("click", () => {
    navigator.clipboard.writeText(inputResultado.value).then(() => {
      // Muestra el toast
      toastBootstrap.show();
    });
  });
}

function imprimirPassword() {
  btnImprimir.addEventListener("click", () => {
    tituloPassword.innerText = "Contraseña generada exitosamente";
    parrafoPassword.innerText =
      "¡Tu contraseña ha sido generada exitosamente! Asegúrate de guardarla en un lugar seguro.";
    parrafoPassword.classList.remove("fs-5");
    btnGenerar.classList.add("d-none");
    mensaje.classList.remove("d-none");
    btnCopiar.classList.add("d-none");
    btnImprimir.classList.add("d-none");

    window.print();

    setTimeout(() => {
      tituloPassword.innerText = "Generador de contraseñas aleatorias";
      parrafoPassword.innerText = "Crea contraseñas seguras para proteger tus cuentas de Internet.";
      parrafoPassword.classList.add("fs-5");
      btnGenerar.classList.remove("d-none");
      btnCopiar.classList.remove("d-none");
      mensaje.classList.add("d-none");
    }, 100);
  });
}

// Invocando las funciones
generarPassword();
copiarPassword();
imprimirPassword();
