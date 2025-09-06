/**
 * El kernel de la aplicación, aquí es donde se define el comportamiento
 * de la aplicación por completo, ya sea, agregando clases globales,
 * configuración, enrutador, etc.
 * Creado por TheMarceloYT (https://github.com/TheMarceloYT)
 */

/* IMPORTS [INICIO] */

// sistema de tema de la app y lo inicio
import { Theme } from "../assets/js/theme.mjs";
Theme.initTheme();

// utilidades de la app
import { Utils } from "./utilities/utilities.mjs";

// rutas de la app
import { Router } from "./config/router.mjs";

// sistema de lenguajes de la app
import { Lang } from "./utilities/lang.mjs";

// librería JS propia
import { MYTstrap } from "../assets/js/MYTstrap.mjs";

/* IMPORTS [FIN] */

// DOM loader
document.addEventListener("DOMContentLoaded", function () {
  // pongo texto random al master loader
  Utils.setRandomMasterLoaderText();

  // inicio toda la app
  init();
});

// inicializador de métodos para la app
async function init() {
  // quitamos todo observer generado antes
  Utils.disconnectAllObservers();

  // iniciamos el sistema de rutas
  Router.initUrlListener();

  // iniciamos la vista inicial
  await Router.index();

  // iniciamos el sistema de lenguaje
  Lang.initSistemaLenguaje();

  // iniciamos MYTstrap
  MYTstrap.init();

  // oculto la pantalla de carga de la app
  Utils.handleMasterLoader("hide");
}
