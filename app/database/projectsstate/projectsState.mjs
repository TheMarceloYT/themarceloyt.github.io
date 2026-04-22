/**
 * Base de datos de estado de proyectos
 * Creado por TheMarceloYT (https://github.com/TheMarceloYT)
 */

export class ProjectsState {
	static projectsStateContent = {
		done: {
			clases: "tag tag-green",
			dataLang: "langDone",
		},
		reinventing: {
			clases: "tag tag-cyan-dark",
			dataLang: "langReinventing",
		},
		developing: {
			clases: "tag tag-orange",
			dataLang: "langDeveloping",
		},
		pending: {
			clases: "tag tag-red",
			dataLang: "langPending",
		},
	};
}
