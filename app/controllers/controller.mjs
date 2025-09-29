/**
 * Controller maestro, aquí se definen los métodos globales
 * para los demás controllers y su comportamientos
 * Creado por TheMarceloYT (https://github.com/TheMarceloYT)
 */

/* IMPORTS [INICIO] */

// configuraciones de la app
import { Config } from "../config/app.mjs";

// utilidades de la app
import { Utils } from "../utilities/utilities.mjs";

/* IMPORTS [FIN] */

export class Controller {
	// constructor
	constructor() {
		// definimos las clases a utilizar
		this.utils = Utils;
		this.config = Config;
	}
}
