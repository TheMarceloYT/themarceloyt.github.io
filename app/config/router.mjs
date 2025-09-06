/**
 * Router de la app, aquí se define todo el sistema de rutas
 * Creado por TheMarceloYT (https://github.com/TheMarceloYT)
 */

// import del controller about
import { AboutController } from "../controllers/aboutController.mjs";

// import del controller contact
import { ContactController } from "../controllers/contactController.mjs";

// import del controller projects
import { ProjectsController } from "../controllers/projectsController.mjs";

// utils de la app
import { Utils } from "../utilities/utilities.mjs";

// config de la app
import { Config } from "./app.mjs";

export class Router {
  // variables
  static aboutControllerObj = new AboutController();
  static projectsControllerObj = new ProjectsController();
  static contactController = new ContactController();
  static viewsMenuID = "menu-views";
  static pathNotFoundPage = "/404.html";

  /**
   * Comprueba si la ruta recibida es soportada por la app
   */
  static checkSupportedRoute = (route) => Config.supportedViews.includes(route);

  /**
   * Marcar activa la vista seleccionada en el HTML
   * @param {String} viewSelected - Vista seleccionada actualmente
   */
  static markActiveView(viewSelected) {
    const viewsMenu = Utils.getElementPorID(this.viewsMenuID);

    // no existe el menú?
    if (!viewsMenu) {
      console.log(`[Router] Views menu NO existe`);
      return;
    }

    // existe, quitamos todos los botones activos
    Utils.handleClasesMuchosHTML(
      "remove",
      `#${this.viewsMenuID}`,
      ["active"],
      ".nav-link"
    );

    // dejamos activo el btn del views menu seleccionado
    const btnSelected = viewsMenu.querySelector(
      `[${Config.nameDataView}="${viewSelected}"]`
    );
    if (btnSelected) btnSelected.classList.add("active");
    // no existe el botón
    else console.log(`[Router] Botón view para "${viewSelected}" NO existe`);
  }

  /**
   * Retorna la vista de la URL (sliced, remueve el # de la URL)
   */
  static getSlicedURL = () => location.hash.slice(1);

  /**
   * Pone la vista 404 NOT FOUND a la app
   */
  static setNotFoundPage = () => (window.location.href = this.pathNotFoundPage);

  /**
   * Manejador de rutas
   * @param {String} route - Ruta a manejar
   */
  static async routesHandler(route) {
    /* RUTAS [INICIO] */
    if (route === "about") {
      await Utils.exeFunctions("view", () => this.aboutControllerObj.index());
      this.markActiveView(route);
      return;
    }
    if (route === "projects") {
      await Utils.exeFunctions("view", () =>
        this.projectsControllerObj.index()
      );
      this.markActiveView(route);
      return;
    }
    if (route === "contact") {
      await Utils.exeFunctions("view", () => this.contactController.index());
      this.markActiveView(route);
      return;
    }
    // no existe la vista
    this.setNotFoundPage();
    /* RUTAS [FIN] */
  }

  /**
   * Muestra la vista index de la app
   */
  static async index() {
    // URL con vista preferencial?
    const route = this.getSlicedURL();
    const rutaSoportada = this.checkSupportedRoute(route);
    if (route && rutaSoportada) {
      this.routesHandler(route);
      return;
    }
    // URL sin preferencia
    if (this.aboutControllerObj) {
      await this.aboutControllerObj.index();

      // marco la view activa
      this.markActiveView("about");
      return;
    }
    // no existe el controller definido, suelta la pág. 404
    this.setNotFoundPage();
  }

  /**
   * Iniciador del sistema de rutas
   */
  static initUrlListener() {
    // Escucha la carga inicial/refresco para limpiar la URL
    window.addEventListener("DOMContentLoaded", () => {
      // hay ruta preferencial?
      const route = this.getSlicedURL();
      const rutaSoportada = this.checkSupportedRoute(route);
      if (route && rutaSoportada) this.routesHandler(route);
      // no hay ruta preferencial
      else history.replaceState(null, "", location.pathname + location.search);
    });

    // hacemos un listener para los clicks en <a>
    window.addEventListener("hashchange", () => {
      // obtenemos la URL sliced y manejamos la ruta
      const route = this.getSlicedURL();
      this.routesHandler(route);
    });
  }
}
