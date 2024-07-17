// Capturamos la navbar
let navbarModule = document.querySelector('#navbar-module');

// Definimos os paths inicial
const initialPath = (location.pathname == "/" || "/index.html") ? ".." : ".";
const bienvenidosPath = (location.pathname == "/" || "/index.html") ? "../index.html#bienvenidos" : "#bienvenidos";

// Rellenamos el HTML para ser reutilizado
navbarModule.innerHTML = `
    <!-- Brand -->
          <a class="navbar-brand" href="${initialPath}/index.html">🏕 La Quinta de Pedrito</a>
    <!-- Toggler/collapsibe Button -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span class="navbar-toggler-icon">
                <i class="fa-solid fa-bars"></i>
              </span>
            </button>
    <!-- Navbar links -->
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href=${bienvenidosPath}>Bienvenidos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="${initialPath}/modules/preguntasFrecuentes.html">Preguntas frecuentes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="${initialPath}/modules/formulario.html">Contactos</a>
            </li>
          </ul>
        </div>`;
