/**
 * Base de datos de las banderas del lang
 * Creado por TheMarceloYT (https://github.com/TheMarceloYT)
 */

// config de la app
import { Config } from "../../config/app.mjs";

export class LangFlags {
	static langFlagsContent = {
		es: `${Config.langIconURL}spain_flag_icon.webp`,
		en: `${Config.langIconURL}usa_flag_icon.webp`,
	};
}
