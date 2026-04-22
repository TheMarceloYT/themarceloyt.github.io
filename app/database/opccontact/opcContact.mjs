/**
 * Base de datos de opciones de contacto
 * Creado por TheMarceloYT (https://github.com/TheMarceloYT)
 */

// config de la app
import { Config } from "../../config/app.mjs";

export class OpcContact {
	static opcContactContent = {
		correo: {
			id: "contactCorreo",
			sourceIMG: "/assets/icons/gmail_icon.webp",
			altIMG: "Correo imagen",
			href: `mailto:${Config.businessMail}`,
			dataLang: "langContactCorreo",
			dataToolTip: "contactCorreo",
			tooltipTarget: "contactCorreo",
		},
		github: {
			id: "contactGithub",
			sourceIMG: "/assets/icons/github_icon.webp",
			altIMG: "Github imagen",
			href: "https://github.com/TheMarceloYT",
			dataLang: "langContactGithub",
			dataToolTip: "contactGithub",
			tooltipTarget: "contactGithub",
		},
		linkedin: {
			id: "contactLinkedin",
			sourceIMG: "/assets/icons/linkedin_icon.webp",
			altIMG: "Linkedin imagen",
			href: "https://www.linkedin.com/in/marceloescobarv",
			dataLang: "langContactLinkedin",
			dataToolTip: "contactLinkedin",
			tooltipTarget: "contactLinkedin",
		},
	};
}
