/**
 * Base de datos de la app
 * Creado por TheMarceloYT (https://github.com/TheMarceloYT)
 */

/* idiomas para index [INICIO] */
import { esIndex } from "./index/esIndex.mjs";
import { enIndex } from "./index/enIndex.mjs";
/* idiomas para index [FIN] */

/* idiomas para about [INICIO] */
import { esAbout } from "./about/esAbout.mjs";
import { enAbout } from "./about/enAbout.mjs";
/* idiomas para about [FIN] */

/* idiomas para projects [INICIO] */
import { esProjects } from "./projects/esProjects.mjs";
import { enProjects } from "./projects/enProjects.mjs";
/* idiomas para projects [FIN] */

/* idiomas para contact [INICIO] */
import { esContact } from "./contact/esContact.mjs";
import { enContact } from "./contact/enContact.mjs";
/* idiomas para contact [FIN] */

/* idiomas para not found [INICIO] */
import { esNotFound } from "./notfound/esNotFound.mjs";
import { enNotFound } from "./notfound/enNotFound.mjs";
/* idiomas para not found [FIN] */

// herramientas
import { Herramientas } from "./herramientas/herramientas.mjs";

// certificados
import { Certificados } from "./certificados/certificados.mjs";

// estado de proyectos
import { ProjectsState } from "./projectsstate/projectsState.mjs";

// enumeración de proyectos
import { ProjectsEnum } from "./projectsenum/projectsEnum.mjs";

/* idiomas para form contact [INICIO] */
import { esFormContact } from "./formcontact/esFormContact.mjs";
import { enFormContact } from "./formcontact/enFormContact.mjs";
/* idiomas para form contact [FIN] */

// opciones de contacto
import { OpcContact } from "./opccontact/opcContact.mjs";

// banderas para los idiomas
import { LangFlags } from "./langflags/langFlags.mjs";

// banderas para los temas
import { ThemeFlags } from "./themeflags/themeFlags.mjs";

export class DataBase {
	/* TRADUCCIÓN DE TODOS LOS TEXTOS DE LA APP [INICIO] */
	static translationTextos = {
		es: {
			/* INDEX [INICIO] */
			...esIndex.esIndexContent,
			/* INDEX [FIN] */

			/* ABOUT [INICIO] */
			...esAbout.esAboutContent,
			/* ABOUT [FIN] */

			/* PROJECTS [INICIO] */
			...esProjects.esProjectsContent,
			/* PROJECTS [FIN] */

			/* CONTACT [INICIO] */
			...esContact.esContactContent,
			/* CONTACT [FIN] */

			/* NOT FOUND [INICIO] */
			...esNotFound.esNotFoundContent,
			/* NOT FOUND [FIN] */
		},
		en: {
			/* INDEX [INICIO] */
			...enIndex.enIndexContent,
			/* INDEX [FIN] */

			/* ABOUT [INICIO] */
			...enAbout.enAboutContent,
			/* ABOUT [FIN] */

			/* PROJECTS [INICIO] */
			...enProjects.enProjectsContent,
			/* PROJECTS [FIN] */

			/* CONTACT [INICIO] */
			...enContact.enContactContent,
			/* CONTACT [FIN] */

			/* NOT FOUND [INICIO] */
			...enNotFound.enNotFoundContent,
			/* NOT FOUND [FIN] */
		},
	};
	/* TRADUCCIÓN DE TODOS LOS TEXTOS DE LA APP [FIN] */

	/* HERRAMIENTAS [INICIO] */
	static herramientasSection = { ...Herramientas.herramientasContent };
	/* HERRAMIENTAS [FIN] */

	/* CERTIFICADOS [INICIO] */
	static certificadosSection = { ...Certificados.certificadosContent };
	/* CERTIFICADOS [FIN] */

	/* ESTADO PROYECTOS [INICIO] */
	static proyectosState = { ...ProjectsState.projectsStateContent };
	/* ESTADO PROYECTOS [FIN] */

	/* PROYECTOS [INICIO] */
	static proyectosSection = { ...ProjectsEnum.projectsEnumContent };
	/* PROYECTOS [FIN] */

	/* FORM DE CONTACTO [INICIO] */
	static formContacto = {
		es: { ...esFormContact.esFormContactContent },
		en: { ...enFormContact.enFormContactContent },
	};
	/* FORM DE CONTACTO [FIN] */

	/* OPCIONES DE CONTACTO [INICIO] */
	static opcContacto = { ...OpcContact.opcContactContent };
	/* OPCIONES DE CONTACTO [FIN] */

	/* BANDERAS DE LANG [INICIO] */
	static langFlags = { ...LangFlags.langFlagsContent };
	/* BANDERAS DE LANG [FIN] */

	/* ICONOS DE TEMAS [INICIO] */
	static themeFlags = { ...ThemeFlags.themeFlagsContent };
	/* ICONOS DE TEMAS [FIN] */
}
