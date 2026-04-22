/**
 * designador del idioma para la app
 * Creado por TheMarceloYT (https://github.com/TheMarceloYT)
 */

// configuraciones de la app
import { Config } from "../config/app.mjs";

// utilities de la app
import { Utils } from "./utilities.mjs";

// base de datos de la app
import { DataBase } from "../database/database.mjs";

export class Lang {
	// variables
	static dropdownIdiomaId = "dropdown-idioma";
	static dropdownIdiomaImgID = "dropdown-lang-img";

	/**
	 * Comprueba si el lang recibido es soportado por la app
	 * @param {String} idioma - Idioma a comprobar
	 */
	static checkLenguajeApp = (idioma) => Config.lenguajesSoportados.includes(idioma);

	/**
	 * Marcar activo el idioma seleccionado en el HTML
	 * @param {String} langSelected - Idioma seleccionado actualmente
	 */
	static markActiveLang(langSelected) {
		const dropdownIdioma = Utils.getElementPorID(this.dropdownIdiomaId);
		const dropdownIdiomaImg = Utils.getElementPorID(this.dropdownIdiomaImgID);

		// no existe el dropdown?
		if (!dropdownIdioma) {
			console.log(`[Lang] Dropdown idioma NO existe`);
			return;
		}

		// no existe el dropdown img?
		if (!dropdownIdiomaImg) {
			console.log(`[Lang] La imagen del dropdown idioma NO existe`);
			return;
		}

		// existe, quitamos todos los botones activos
		Utils.handleClasesMuchosHTML("remove", `#${this.dropdownIdiomaId}`, ["active"], `[${Config.nameDataLangSelected}]`);

		// dejamos activo el btn del idioma seleccionado
		const btnSelected = dropdownIdioma.querySelector(`[${Config.nameDataLangSelected}="${langSelected}"]`);
		if (btnSelected) btnSelected.classList.add("active");
		// no existe el botón
		else console.log(`[Lang] Botón idioma para "${langSelected}" NO existe`);

		// cambiamos el icono del dropdown lang al seleccionado
		dropdownIdiomaImg.src = DataBase.langFlags[langSelected];
	}

	/**
	 * Obtener el idioma actual de la app
	 */
	static getLenguajeActualApp() {
		// obtengo el idioma actual de la app
		const idiomaActual =
			Utils.getStorageItem(Config.nameIdioma) ||
			document.documentElement.getAttribute(Config.nameDataLangHTML) ||
			Config.lenguajeGlobal;

		// comprobamos si el idioma es soportado por la app
		if (this.checkLenguajeApp(idiomaActual)) return idiomaActual;
		return Config.lenguajeGlobal;
	}

	/**
	 * Actualiza la página con el idioma que el user seleccione o tiene
	 */
	static updateLenguajeApp() {
		// defino el nombre para los data lang y hago la query
		const nombreDataLang = Config.nameDataLang;
		Utils.doDocumentQueryAll(`[${nombreDataLang}]`).forEach((element) => {
			// definimos la clave para buscar la traducción dentro del objeto
			const clave = element.getAttribute(nombreDataLang);

			// definimos el texto del elemento
			element.innerHTML = DataBase.translationTextos[this.getLenguajeActualApp()]?.[clave];
		});
	}

	/**
	 * Actualiza el lenguaje de elementos individuales
	 * @param {String} elementID - ID del elemento a actualizar
	 */
	static updateElementLang(elementID) {
		// existe el elemento?
		const elemento = Utils.doDocumentQuery(`#${elementID}`);
		if (!elemento) {
			console.log(`[Lang] No existe el elemento con ID "${elementID}"`);
			return;
		}

		// defino el nombre para los data lang y hago la query
		const nombreDataLang = Config.nameDataLang;
		elemento.querySelectorAll(`[${nombreDataLang}]`).forEach((el) => {
			// definimos la clave para buscar la traducción dentro del objeto
			const clave = el.getAttribute(nombreDataLang);

			// definimos el texto del elemento
			el.innerHTML = DataBase.translationTextos[this.getLenguajeActualApp()]?.[clave];
		});
	}

	/**
	 * Aplica el idioma al atributo lang y refresca el idioma de la app
	 * @param {String} idioma - Idioma del usuario a definir
	 */
	static applyIdioma(idioma) {
		document.documentElement.setAttribute(Config.nameDataLangHTML, idioma);

		// dejo activo el btn del lenguaje seleccionado
		this.markActiveLang(idioma);

		// aplico idioma en toda la app
		this.updateLenguajeApp();
	}

	/**
	 * Guarda el idioma elegido por el usuario en storage y lo aplica al HTML
	 * @param {String} idioma - Idioma del usuario a guardar
	 */
	static saveIdioma(idioma) {
		if (this.checkLenguajeApp(idioma)) {
			Utils.setStorageItem(Config.nameIdioma, idioma);
			this.applyIdioma(idioma);
		}
		// idioma no soportado, mensaje de aviso
		else console.log(`[Lang] Idioma no soportado "${idioma}"`);
	}

	/**
	 * Retorna el idioma detectado del usuario para la app
	 */
	static detectIdioma() {
		// verifico si ya hay un idioma en el storage
		const idiomaGuardado = Utils.getStorageItem(Config.nameIdioma);
		if (idiomaGuardado && this.checkLenguajeApp(idiomaGuardado)) return idiomaGuardado;

		// no hay, detecto y compruebo idioma del navegador ("es-CL"-> "es")
		const idiomaNav = navigator.language?.split("-")[0];
		if (idiomaNav && this.checkLenguajeApp(idiomaNav)) return idiomaNav;

		// no detectó nada, retorno el idioma por defecto de la app
		return Config.lenguajeGlobal;
	}

	/**
	 * Listener para el toggle de idioma
	 */
	static listenerLangToggle() {
		document.getElementById(Lang.dropdownIdiomaId).addEventListener("click", function (e) {
			const btnIdioma = e.target.closest(`[${Config.nameDataLangSelected}]`);

			// si existe el botón, cambio el lang de la app
			if (btnIdioma) {
				// compruebo si es el mismo idioma ya seleccionado
				const idiomaActual = Lang.getLenguajeActualApp();
				const idiomaSelected = btnIdioma.getAttribute(Config.nameDataLangSelected);
				if (idiomaActual === idiomaSelected) return;

				// no es el mismo idioma seleccionado, muestro loader + guardo el nuevo idioma seleccionado
				Utils.handleMasterLoader("show");
				const nuevoIdioma = btnIdioma.getAttribute(Config.nameDataLangSelected);

				// guardo y aplico el nuevo idioma
				Lang.saveIdioma(nuevoIdioma);
				Lang.applyIdioma(Lang.detectIdioma());

				// escondo el dropdown
				const dropdownIdioma = btnIdioma.closest("dropdown");
				dropdownIdioma.classList.remove("open");

				// escondo loader
				Utils.handleMasterLoader("hide");
			}
			// No existe el lang toggler
			else console.log(`[Lang] Botón lang toggler NO existe`);
		});
	}

	/**
	 * Inicia el sistema de lenguaje del usuario
	 */
	static initSistemaLenguaje() {
		// aplico el sistema de lenguaje + activo el listener del dropdown idiomas
		this.applyIdioma(this.detectIdioma());
		this.listenerLangToggle();
	}
}
