/**
 * Creado por TheMarceloYT (https://github.com/TheMarceloYT)
 */

// utilities de la app
import { Utils } from "../../../app/utilities/utilities.mjs";

// database de la app
import { DataBase } from "../../../app/database/database.mjs";

// config de la app
import { Config } from "../../../app/config/app.mjs";

// librería JS propia
import { MYTstrap } from "../MYTstrap.mjs";

// sistema de lenguajes de la app
import { Lang } from "../../../app/utilities/lang.mjs";

export class AboutJS {
	// variables
	static certificadosElementName = "certificados";
	static infoWebElementName = "info-web";
	static herramientasElementName = "herramientas";
	static aboutBtnModalOpenName = `${Config.nameDataModalOpen}-about`;

	/**
	 * Define el HTML para la sección de HERRAMIENTAS
	 */
	static initHerramientasSection() {
		// existe el elemento?
		const herramientasEl = Utils.doDocumentQuery(this.herramientasElementName);
		if (!herramientasEl) {
			console.log(`[AboutJS] No existe el elemento "${this.herramientasElementName}"`);
			return;
		}

		// existe, defino el html de la sección
		const herramientas = DataBase.herramientasSection;
		let html = "";
		Object.values(herramientas).forEach((h) => {
			const herramientaHTML = `
        <div class="d-none" ${Config.nameDataLang}="${h.dataLang}" ${Config.nameDataTooltip}="${h.dataTooltip}">...</div>
          <img
            class="herramientas-img col"
            src="${h.sourceIMG}"
            alt="${h.altIMG}"
            ${Config.nameTooltipTarget}="${h.tooltipTarget}"
          />
      	`;

			// añado al html que será insertado
			html += herramientaHTML;
		});

		// inserto el HTML
		herramientasEl.innerHTML = html;
	}

	/**
	 * Inicializa el listener para abrir modal para certificados
	 * @param {Object} certificado - Objeto con la información del certificado
	 */
	static initModalOpenListener(certificado) {
		// existe el elemento?
		const certificadoEl = Utils.getElementPorID(certificado.id);
		if (!certificadoEl) {
			console.log(`[AboutJS] No existe el elemento con ID "${certificado.id}"`);
			return;
		}

		// obtengo el btn para abrir del modal con la info del cert
		const btnOpenModalCert = certificadoEl.querySelector(`[${this.aboutBtnModalOpenName}]`);

		// defino el HTML del modal
		const modalTitle = `
      <h2 ${Config.nameDataLang}="${certificado.dataLangTitle}">...</h2>
    `;
		const modalBody = `
      <div class="usm-cert-img-modal-container pu-3 mx-auto">
        <img
          class="usm-cert-img-modal zoomable"
          src="${certificado.sourceIMG}"
          alt="${certificado.altIMG}"
        />
      </div>
    `;
		const modalFooter = `<div></div>`;

		// defino el listener para el btn certificado
		btnOpenModalCert.addEventListener("click", () => {
			MYTstrap.showModal(modalTitle, modalBody, modalFooter);

			// actualizo lang individual del modal
			const modal = Utils.doDocumentQuery(`#${Config.modalID}`);
			Lang.updateElementLang(modal.id);

			// activo la img zoomable
			MYTstrap.initZoomInImgs();
		});
	}

	/**
	 * Define el HTML para la sección de CERTIFICADOS
	 */
	static initCertificadosSection() {
		// existe el elemento?
		const certificadosEl = Utils.doDocumentQuery(this.certificadosElementName);
		if (!certificadosEl) {
			console.log(`[AboutJS] No existe el elemento "${this.certificadosElementName}"`);
			return;
		}

		// existe, defino html de la sección
		const certificados = DataBase.certificadosSection;
		let html = "";
		Object.values(certificados).forEach((c) => {
			const certificadoHTML = `
        <div class="d-none" ${Config.nameDataLang}="${c.dataLangIcon}" ${Config.nameDataTooltip}="${c.dataToolTip}">...</div>
        <div id="${c.id}" class="row my-2">

          <div class="col-auto col-lg-6">
            <div class="d-flex">
              <h3 class="align-self-center" ${Config.nameDataLang}="${c.dataLangTitle}">...</h3>
              <img
								loading="lazy"
                class="herramientas-img icon ml-2"
                src="${c.sourceICON}"
                alt="${c.altICON}"
                ${Config.nameTooltipTarget}="${c.tooltipTarget}"
              />
            </div>
            <p ${Config.nameDataLang}="${c.dataLangDesc}">...</p>
          </div>
          
          <div class="col col-lg-6 d-flex justify-content-center align-items-center">
            <button class="btn-img" ${this.aboutBtnModalOpenName}>
              <div class="certificados-img-container">
                <img
									loading="lazy"
                  class="certificados-img"
                  src="${c.sourceIMG}"
                  alt="${c.altIMG}"
                />
              </div>
            </button>
          </div>

        </div>
      `;

			// añado al html que será insertado
			html += certificadoHTML;
		});

		// inserto el HTML
		certificadosEl.innerHTML = html;

		// inicio los listener de los btn abrir modal con info
		Object.values(certificados).forEach((c) => {
			this.initModalOpenListener(c);
		});
	}

	/**
	 * Iniciliza todo el JS para la vista ABOUT
	 */
	static init() {
		this.initHerramientasSection();
		this.initCertificadosSection();
	}
}
