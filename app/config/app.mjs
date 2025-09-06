/**
 * Configuraciones globales para la app
 * Creado por TheMarceloYT (https://github.com/TheMarceloYT)
 */

export class Config {
  // versión de la app
  static appVersion = "1.0.0";

  // el lenguaje global de la app
  static lenguajeGlobal = "es";

  // lenguajes soportados en la app
  static lenguajesSoportados = ["es", "en"];

  // nombre para la data de traducción
  static nameDataLang = "data-lang";

  // nombre para la data del idioma seleccionado
  static nameDataLangSelected = "data-lang-selected";

  // nombre para la data lang del HTML predeterminado
  static nameDataLangHTML = "lang";

  // nombre para la data de la view seleccionada
  static nameDataView = "data-view";

  // nombre para la data de los tooltip
  static nameDataTooltip = "data-tooltip";

  // nombre para los tooltip target
  static nameTooltipTarget = "tooltip-target";

  // nombre para data btn close de modals
  static nameDataModalClose = "data-modal-close";

  // nombre para data btn open de modals
  static nameDataModalOpen = "data-modal-open";

  // nombre para la data theme
  static nameDataTheme = "data-theme";

  // nombre para la data theme del HTML predeterminado
  static nameDataThemeHTML = "data-bs-theme";

  // lista de vistas soportadas
  static supportedViews = ["about", "projects", "contact"];

  // observers de la app
  static observers = [];

  // el link hacia las vistas de la app (pensado para ser utilizado dentro de app/)
  static viewsURL = "/app/views/";

  // correo de negocios
  static businessMail = "themarceloitinegocios@gmail.com";

  // container maestro de la app
  static mainContainer = document.querySelector("main");

  // container del loader de la app
  static loader = document.querySelector("loader");

  // textos random para el loader de la app
  static loaderText = {
    es: [
      "TheMarceloYT estuvo aquí...",
      "¿Scorpion o Sub-Zero?...",
      "¡Toasty!...",
      "Descomprimiendo el reino...",
    ],
    en: [
      "TheMarceloYT was here...",
      "¿Scorpion or Sub-Zero?...",
      "¡Toasty!...",
      "Unpacking the realm...",
    ],
  };

  // nombre designado en storage para el tema del usuario
  static nameTema = "temaUsuario";

  // nombre designado en storage para el idioma del usuario
  static nameIdioma = "langUsuario";
}
