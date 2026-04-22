/**
 * Base de datos de las banderas del theme
 * Creado por TheMarceloYT (https://github.com/TheMarceloYT)
 */

// config de la app
import { Config } from "../../config/app.mjs";

export class ThemeFlags {
	static themeFlagsContent = {
		auto: `${Config.themeIconURL}auto_theme_icon.webp`,
		light: `${Config.themeIconURL}light_theme_icon.webp`,
		dark: `${Config.themeIconURL}dark_theme_icon.webp`,
	};
}
