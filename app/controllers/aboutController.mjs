/**
 * Creado por TheMarceloYT (https://github.com/TheMarceloYT)
 */

// controller maestro
import { Controller } from "./controller.mjs";

// JS de la vista about
import { AboutJS } from "../../assets/js/about/about.mjs";

// librería JS propia
import { MYTstrap } from "../../assets/js/MYTstrap.mjs";

export class AboutController extends Controller {
	// variables
	static viewName = "about";

	// inicializamos el constructor padre
	constructor() {
		// acitvamos las utilidades del controller padre
		super();
	}

	/**
	 * Asigna la vista index del about al container main de la app
	 */
	async index() {
		await this.utils
			.doViewAjax(`${AboutController.viewName}.html`)
			.then((response) => {
				// comprobamos la respuesta
				if (response.ok) return response.text();
				console.log(`[AboutController] No existe la vista "${AboutController.viewName.toUpperCase()}"`);
			})
			// Ok, defino el html del main
			.then((html) => {
				this.config.mainContainer.innerHTML = html;

				// inicializamos todo el JS de la vista ABOUT
				AboutJS.init();

				// re-inicializamos el sistema de flip imgs
				MYTstrap.initPFPflip();

				// re-inicializamos el sistema de tooltips
				MYTstrap.initTooltips();
			})
			// Error
			.catch((error) => {
				console.log(
					`[AboutController] Error en obtener la vista "${AboutController.viewName.toUpperCase()}": ${error}`
				);
			});
	}
}
