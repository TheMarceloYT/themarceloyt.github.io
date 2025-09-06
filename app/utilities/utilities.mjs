/**
 * Utilities de la app
 * Creado por TheMarceloYT (https://github.com/TheMarceloYT)
 */

// Config de la app
import { Config } from "../config/app.mjs";

// sistema de lenguaje
import { Lang } from "./lang.mjs";

export class Utils {
  /**
   * Hacer fetch hacia vistas en views
   * @param {String} vistaURL - URL hacia la vista
   */
  static async doViewAjax(vistaURL) {
    return await fetch(`${Config.viewsURL + vistaURL}`);
  }

  /**
   * Hacer un fetch
   * @param {String} url - URL para hacer el fetch
   */
  static async doFetch(url) {
    return await fetch(`${url}`);
  }

  /**
   * Obtiene un elemento HTML por su ID
   * @param {String} elementID - ID del elemento HTML
   */
  static getElementPorID = (elementID) =>
    document.getElementById(`${elementID}`);

  /**
   * Hace un Query Selector (singular)
   * @param {String} query - Query a ejecutar
   */
  static doDocumentQuery = (query) => document.querySelector(`${query}`);

  /**
   * Hace un Query Selector (plural)
   * @param {String} query - Query a ejecutar
   */
  static doDocumentQueryAll = (query) => document.querySelectorAll(`${query}`);

  /**
   * Obtiene objetos del Local Storage
   * @param {String} nombreItem - Nombre del item en el storage
   */
  static getStorageItem = (nombreItem) => localStorage.getItem(nombreItem);

  /**
   * Define objetos en Local Storage
   * @param {String} nombreItem - Nombre del item para el storage
   * @param {String} item - Item a almacenar
   */
  static setStorageItem = (nombreItem, item) =>
    localStorage.setItem(nombreItem, item);

  /**
   * Define el texto random del loader maestro de la app
   */
  static setRandomMasterLoaderText() {
    // idioma actual de la app
    const idiomaActual = Lang.getLenguajeActualApp();

    // defino los mensajes por idioma elegidos
    const mensajes = Config.loaderText[idiomaActual];

    // definir el texto random del loader
    const loaderText = mensajes[Math.floor(Math.random() * mensajes.length)];

    // defino el texto del loader (HTMLelement)
    const loaderTextHTML = document.querySelector("loader #loader-text");

    // defino el texto del loader final
    loaderTextHTML.textContent = loaderText;
  }

  /**
   * Ocultar/Mostrar el loader maestro de la app
   * @param {String} method - Método para manejar el loader (show/hide)
   */
  static handleMasterLoader(method) {
    // mostrar el loader
    if (method === "show") {
      // remuevo el hide técnico (aplicado por rendimiento)
      Config.loader.classList.remove("tech-hidden");

      // hago que el navegador refresque el loader para que haga animación fade
      void Config.loader.offsetWidth;

      // muestro el loader
      Config.loader.classList.remove("hidden");

      // pongo texto random al master loader
      this.setRandomMasterLoaderText();
    }
    // esconder el loader
    else {
      Config.loader.classList.add("hidden");

      // escondo el loader técnicamente (para rendimiento)
      setTimeout(() => Config.loader.classList.add("tech-hidden"), 300);
    }
  }

  /**
   * Ejecuta funciones poniendo el master loader automáticamente
   * @param {String} tipo - Tipo de función a ejecutar
   * @param {Function} callback - Función a ejecutar
   */
  static async exeFunctions(tipo, callback) {
    // ejecuto callback + pantalla de carga
    this.handleMasterLoader("show");
    await callback();

    // si es una vista ejecutandose, refresco lang
    if (tipo === "view") Lang.updateLenguajeApp();

    // escondo el master loader
    this.handleMasterLoader("hide");
  }

  /**
   * Añade/Quita clases a un elemento HTML
   * @param {String} tipo - Tipo de procedimiento a hacer (add/remove)
   * @param {String} htmlKey - Elemento html a buscar (querySelector)
   * @param {String[]} clases - Clases a añadir/remover
   */
  static handleClasesHTML(tipo, htmlKey, clases) {
    const htmlManejar = document.querySelector(`${htmlKey}`);

    // no existe el elemento HTML?
    if (!htmlManejar) {
      console.log(`[Utils] Elemento HTML NO encontrado: "${htmlKey}"`);
      return;
    }

    // existe, procedimientos a hacer (add/remove)
    if (tipo === "add") htmlManejar.classList.add(...clases);
    // quitar clase/s
    else htmlManejar.classList.remove(...clases);
  }

  /**
   * Añade/Quita clases de elementos HTML
   * @param {String} tipo - Tipo de procedimiento a hacer (add/remove)
   * @param {String} htmlKey - Elemento html a buscar (querySelector)
   * @param {String[]} clases - Clases a añadir/remover
   * @param {String} query - Query para los elementos
   */
  static handleClasesMuchosHTML(tipo, htmlKey, clases, query) {
    const htmlManejar = document.querySelector(`${htmlKey}`);

    // no existe el elemento HTML?
    if (!htmlManejar) {
      console.log(`[Utils] Elemento HTML NO encontrado: "${htmlKey}"`);
      return;
    }

    // existe, procedimientos a hacer (add/remove)
    if (tipo === "add") {
      htmlManejar.querySelectorAll(`${query}`).forEach((html) => {
        html.classList.add(...clases);
      });
    }
    // quitar clase/s
    else
      htmlManejar.querySelectorAll(`${query}`).forEach((html) => {
        html.classList.remove(...clases);
      });
  }

  /**
   * Observa cambios de texto en un elemento.
   * @param {String} query - Query para buscar el elemento
   * @param {Function} callback - Función a ejecutar cuando cambie el texto
   */
  static watchTextChange(query, callback) {
    // existe el elemento?
    const element = this.doDocumentQuery(query);
    if (!element) {
      console.log(
        `[Utils] Elemento HTML NO encontrado para observar: "${query}"`
      );
      return;
    }

    // existe, evitamos crear observers duplicados sobre el mismo elemento
    if (element.observer) return;

    // creamos el observer
    const observer = new MutationObserver(() => callback());
    observer.observe(element, {
      childList: true,
      characterData: true,
      subtree: true,
    });

    // guardo referencia en el elemento y en Config
    element.observer = observer;
    Config.observers.push(observer);
  }

  /**
   * Desconecta todos los observers guardados en Config
   */
  static disconnectAllObservers() {
    Config.observers.forEach((obs) => obs.disconnect());
    Config.observers.length = 0;
  }
}
