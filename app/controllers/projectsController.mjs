/**
 * Creado por TheMarceloYT (https://github.com/TheMarceloYT)
 */

// controller maestro
import { Controller } from "./controller.mjs";

// JS de la vista projects
import { ProjectsJS } from "../../assets/js/projects/projects.mjs";

// librería JS propia
import { MYTstrap } from "../../assets/js/MYTstrap.mjs";

export class ProjectsController extends Controller {
	// variables
	static viewName = "projects";

	// inicializamos el constructor padre
	constructor() {
		// acitvamos las utilidades del controller padre
		super();
	}

	/**
	 * Asigna la vista index del project al container main de la app
	 */
	async index() {
		await this.utils
			.doViewAjax(`${ProjectsController.viewName}.html`)
			.then((response) => {
				// comprobamos la respuesta
				if (response.ok) return response.text();
				console.log(`[ProjectsController] No existe la vista "${ProjectsController.viewName.toLocaleUpperCase()}"`);
			})
			// Ok, defino el html del main
			.then((html) => {
				this.config.mainContainer.innerHTML = html;

				// inicializamos todo el JS de la vista PROJECTS
				ProjectsJS.init();

				// re-inicializamos el sistema de tooltips
				MYTstrap.initTooltips();
			})
			// Error
			.catch((error) => {
				console.log(
					`[ProjectsController] Error en obtener la vista "${ProjectsController.viewName.toLocaleUpperCase()}": ${error}`
				);
			});
	}
}
