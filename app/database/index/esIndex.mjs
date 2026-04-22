/**
 * Base de datos de index en Español
 * Creado por TheMarceloYT (https://github.com/TheMarceloYT)
 */

// config de la app
import { Config } from "../../config/app.mjs";

export class esIndex {
	static esIndexContent = {
		langHome: "Inicio",
		langProjects: "Proyectos",
		langContact: "Contacto",
		langBtnEs: "Español",
		langBtnEn: "Inglés",
		// themeAuto: "Automático",
		langThemeLight: "Claro",
		langThemeDark: "Oscuro",
		langOffcanvasFooterText: "Todos los derechos reservados por",
		langFooterTextReserved: "Todos los derechos reservados por",
		langFooterTextAdvice: `Versión de la app: ${Config.appVersion}`,
	};
}
