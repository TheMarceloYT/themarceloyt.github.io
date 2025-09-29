/**
 * Designador del tema para la app
 * Creado por TheMarceloYT (https://github.com/TheMarceloYT)
 */

// configuraciones de la app
import { Config } from "../../app/config/app.mjs";

// utilidades de la app
import { Utils } from "../../app/utilities/utilities.mjs";

export class Theme {
	// defino puntero al document
	static html = document.documentElement;
	static dropdownTemaId = "dropdown-theme";

	/**
	 * Da el tema guardado del usuario en Local Storage
	 */
	static temaGuardado = () => Utils.getStorageItem(Config.nameTema);

	/**
	 * Marcar activo el tema seleccionado en el HTML
	 * @param {String} themeSelected - Tema seleccionado actualmente
	 */
	static markActiveTheme(themeSelected) {
		const dropdownTheme = Utils.getElementPorID(this.dropdownTemaId);

		// no existe el dropdown?
		if (!dropdownTheme) {
			console.log(`[Theme] Dropdown tema NO existe`);
			return;
		}

		// existe, quitamos todos los botones activos
		Utils.handleClasesMuchosHTML("remove", `#${this.dropdownTemaId}`, ["active"], `[${Config.nameDataTheme}]`);

		// dejamos activo el btn del tema seleccionado
		const btnSelected = dropdownTheme.querySelector(`[${Config.nameDataTheme}="${themeSelected}"]`);
		if (btnSelected) btnSelected.classList.add("active");
		// no existe el botón
		else console.log(`[Theme] Botón tema para "${themeSelected}" NO existe`);
	}

	/**
	 * Da el tema preferido por el usuario
	 */
	static getTemaPreferido() {
		// ya hay un tema preferido?
		const temaGuardadoActual = this.temaGuardado();
		const valoresEspeciales = ["undefined", "auto", "none"];
		if (temaGuardadoActual && !valoresEspeciales.includes(temaGuardadoActual)) return temaGuardadoActual;

		// tema en "auto", obtenemos el tema preferido por el dispositivo del usuario
		return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
	}

	/**
	 * Define el tema del usuario en data-bs-theme
	 * @param {String} tema - Tema preferido del usuario
	 */
	static setTema(tema) {
		this.html.setAttribute(Config.nameDataThemeHTML, tema);

		// marcamos el botón del tema seleccionado
		this.markActiveTheme(tema);
	}

	/**
	 * Inicia el sistema de tema de la app
	 */
	static initTheme() {
		// defino el tema para la app
		this.setTema(this.getTemaPreferido());

		// defino el listener del cambio en el tema del dispositivo del usuario
		window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (e) {
			const nuevotema = e.matches ? "dark" : "light";
			Theme.setTema(nuevotema);
		});

		// defino el listener para el toggle del tema manual
		document.getElementById(Theme.dropdownTemaId).addEventListener("click", function (e) {
			const btnTema = e.target.closest(`[${Config.nameDataTheme}]`);

			// si existe el botón, cambio al tema elegido
			if (btnTema) {
				const nuevoTema = btnTema.getAttribute(Config.nameDataTheme);

				// almaceno el tema elegido en el storage y cambio el tema
				Utils.setStorageItem(Config.nameTema, nuevoTema);
				Theme.setTema(Theme.getTemaPreferido());
			}
			// no existe el botón
			else console.log(`[Theme] Botón tema NO existe`);
		});
	}
}
