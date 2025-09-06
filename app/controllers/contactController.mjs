/**
 * Creado por TheMarceloYT (https://github.com/TheMarceloYT)
 */

// controller maestro
import { Controller } from "./controller.mjs";

// JS de la vista about
import { ContactJS } from "../../assets/js/contact/contact.mjs";

// librería JS propia
import { MYTstrap } from "../../assets/js/MYTstrap.mjs";

export class ContactController extends Controller {
  // variables
  static viewName = "contact";

  // inicializamos el constructor padre
  constructor() {
    // acitvamos las utilidades del controller padre
    super();
  }

  /**
   * Asigna la vista index del contact al container main de la app
   */
  async index() {
    await this.utils
      .doViewAjax(`${ContactController.viewName}.html`)
      .then((response) => {
        // comprobamos la respuesta
        if (response.ok) return response.text();
        console.log(
          `[ContactController] No existe la vista "${ContactController.viewName.toUpperCase()}"`
        );
      })
      // Ok, defino el html del main
      .then((html) => {
        this.config.mainContainer.innerHTML = html;

        // inicializamos todo el JS de la vista CONTACT
        ContactJS.init();

        // re-inicializamos el sistema de tooltips
        MYTstrap.initTooltips();
      })
      // Error
      .catch((error) => {
        console.log(
          `[ContactController] Error en obtener la vista "${ContactController.viewName.toUpperCase()}": ${error}`
        );
      });
  }
}
