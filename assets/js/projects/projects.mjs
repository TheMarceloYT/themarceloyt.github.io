/**
 * Creado por TheMarceloYT (https://github.com/TheMarceloYT)
 */

// utilities de la app
import { Utils } from "../../../app/utilities/utilities.mjs";

// database de la app
import { DataBase } from "../../../app/database/database.mjs";

// config de la app
import { Config } from "../../../app/config/app.mjs";

export class ProjectsJS {
	// variables
	static projectsElementName = "projects";

	/**
	 * Define el HTML para la sección de PROYECTOS
	 */
	static initProyectosSection() {
		// existe el elemento?
		const proyectosEl = Utils.doDocumentQuery(this.projectsElementName);
		if (!proyectosEl) {
			console.log(`[ProjectsJS] No existe el elemento "${this.projectsElementName}"`);
			return;
		}

		// existe, defino el html de la sección
		const proyectos = DataBase.proyectosSection;
		let html = "";
		Object.values(proyectos).forEach((p) => {
			// obtengo todos los iconos de herramientas usadas
			let herrameintasUsadas = "";
			p.herramientas.forEach((h) => {
				herrameintasUsadas += `
          <div class="icon-container">
            <div class="d-none" ${Config.nameDataLang}="lang${h.toUpperCase()}" ${
					Config.nameDataTooltip
				}="${h}">...</div>
            <img loading="lazy" class="icon" src="${p.sourceHerramientas}${h}_logo.webp" alt="${h} logo" ${
					Config.nameTooltipTarget
				}="${h}">
          </div>
        `;
			});

			// obtengo el link al código fuente (si es público)
			let htmlSourceCode = "";
			if (p.privacy === "public")
				htmlSourceCode += `
          <a class="btn btn-red p-2 mu-auto align-self-center"
            href="${p.sourceCodeLink}"
            target="_blank">
            <div class="d-flex align-items-center">
              <span ${Config.nameDataLang}="langProjectCode">...</span>
              <img loading="lazy" class="icons ml-2" src="/assets/icons/github_icon.webp" alt="Github logo" />
            </div>
          </a>
        `;
			// proyecto privado
			else if (p.privacy === "private") {
				htmlSourceCode += `
					<h4 class="mu-auto p-2 align-self-center bg-red rounded" 
						${Config.nameDataLang}="langProjectPrivacy">
						...
					</h4>
				`;
			}
			// proyecto web (dejar link a la web)
			else
				htmlSourceCode += `
					<a class="btn btn-red p-2 mu-auto align-self-center"
						href="${p.sourceCodeLink}"
						target="_blank">
						<div class="d-flex align-items-center">
							<span ${Config.nameDataLang}="langProjectWeb">...</span>
							<img loading="lazy" class="icons ml-2" src="/assets/icons/globalweb_icon.webp" alt="Web logo" />
						</div>
					</a>
				`;

			// creo el HTML
			const projectState = DataBase.proyectosState[p.state];
			const proyectosHTML = `
        <div class="card">
          <div class="card-left">
            <div class="d-flex">
              <h3 class="card-title">${p.title}</h3>
              <div class="align-self-center ml-2 ${projectState.clases}" ${Config.nameDataLang}="${projectState.dataLang}">...</div>
            </div>
            <p ${Config.nameDataLang}="${p.dataLangDesc}">...</p>
            ${htmlSourceCode}
          </div>
          <div class="card-right">
            <img loading="lazy" class="card-img" src="${p.sourceIMG}" alt="${p.altIMG}">
            <p ${Config.nameDataLang}="langHerrUsadas">...</p>
            <div class="card-actions row">
              ${herrameintasUsadas}
            </div>
          </div>
        </div>
      `;

			// añado al html que será insertado
			html += proyectosHTML;
		});

		// inserto el HTML
		proyectosEl.innerHTML = html;
	}

	/**
	 * Iniciliza todo el JS para la vista PROJECTS
	 */
	static init() {
		this.initProyectosSection();
	}
}
