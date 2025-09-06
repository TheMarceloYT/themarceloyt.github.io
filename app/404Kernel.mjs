/**
 * El kernel de la vista 404 not found, aquí es donde se define el comportamiento
 * de la por completo, ya sea, agregando clases globales,
 * configuración, enrutador, etc.
 * Creado por TheMarceloYT (https://github.com/TheMarceloYT)
 */

// sistema de tema de la app y lo inicio
import { Theme } from "../assets/js/theme.mjs";
Theme.setTema(Theme.getTemaPreferido());

// sistema de lenguajes de la app
import { Lang } from "./utilities/lang.mjs";

// DOM loader
document.addEventListener("DOMContentLoaded", function () {
  // inicio toda la app
  init();
});

// inicializador de métodos para la vista
function init() {
  // aplico el idioma a la vista
  Lang.applyIdioma(Lang.detectIdioma());
}
