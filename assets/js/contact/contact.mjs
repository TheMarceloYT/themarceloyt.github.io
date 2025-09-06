/**
 * Creado por TheMarceloYT (https://github.com/TheMarceloYT)
 */

// utilities de la app
import { Utils } from "../../../app/utilities/utilities.mjs";

// config de la app
import { Config } from "../../../app/config/app.mjs";

// database de la app
import { DataBase } from "../../../app/database/database.mjs";

// sistema de lenguajes de la app
import { Lang } from "../../../app/utilities/lang.mjs";

// librería JS propia
import { MYTstrap } from "../MYTstrap.mjs";

export class ContactJS {
  // variables
  static moreOpcionesElementName = "more-opciones-contact";
  static contactFormID = "contact-form";
  static contactFormContainerClass = "contact-form-container";
  static dataLangContactSwitchName = "langContactSwitch";

  /**
   * Define el listener de cambio de lang para cambiar el form contact
   */
  static listenerChangeFormContact() {
    const callback = () => {
      // existe el form?
      const formEl = Utils.getElementPorID(this.contactFormID);
      if (!formEl) {
        console.log(
          `[ContactJS] No existe el elemento con ID "${this.contactFormID}"`
        );
        return;
      }

      // existe, definimos su src de acuerdo al lang
      formEl.src = DataBase.formContacto[Lang.getLenguajeActualApp()].source;
    };
    const query = `[${Config.nameDataLang}="${this.dataLangContactSwitchName}"]`;

    // creo el observer para el form
    Utils.watchTextChange(query, callback);
  }

  /**
   * Define el listener de la carga del form contact
   */
  static initLoaderFormContact() {
    // existe el elemento?
    const formContainer = Utils.doDocumentQuery(
      `.${this.contactFormContainerClass}`
    );
    if (!formContainer) {
      console.log(
        `[ContactJS] No existe el elemento "${this.contactFormContainerClass}"`
      );
      return;
    }

    // existe el form?
    const formElement = Utils.getElementPorID(this.contactFormID);
    if (!formElement) {
      console.log(
        `[ContactJS] No existe el elemento con ID "${this.contactFormID}"`
      );
      return;
    }

    // existe, lo pongo en estado de carga
    const loaderID = `${this.contactFormID}-loader`;
    MYTstrap.doLoading("add", formContainer, loaderID);

    // listener de cuando el form cargue por completo
    formElement.addEventListener("load", () => {
      MYTstrap.doLoading("remove", formContainer);
    });
  }

  /**
   * Define el HTML para la sección "más opciones de contacto"
   */
  static initMoreOptionsContact() {
    // existe el elemento?
    const moreOpcEl = Utils.doDocumentQuery(this.moreOpcionesElementName);
    if (!moreOpcEl) {
      console.log(
        `[ContactJS] No existe el elemento "${this.moreOpcionesElementName}"`
      );
      return;
    }

    // existe, defino su HTML
    const opcContacto = DataBase.opcContacto;
    let html = "";
    Object.values(opcContacto).forEach((opc) => {
      const opcHTML = `
        <div class="col-auto">
          <div class="d-none" ${Config.nameDataLang}="${opc.dataLang}" ${Config.nameDataTooltip}="${opc.dataToolTip}">...</div>
          <a class="icons-link" href="${opc.href}" target="_blank" ${Config.nameTooltipTarget}="${opc.tooltipTarget}">
            <img class="icons ml-2" src="${opc.sourceIMG}" alt="${opc.altIMG}" />
          </a>
        </div>
      `;

      // agrego el HTML
      html += opcHTML;
    });
    moreOpcEl.innerHTML = `
      <div class="row justify-content-center">
        ${html}
      </div>
    `;
  }

  /**
   * Iniciliza todo el JS para la vista CONTACT
   */
  static init() {
    this.listenerChangeFormContact();
    this.initLoaderFormContact();
    this.initMoreOptionsContact();
  }
}
