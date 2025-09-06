/**
 * Librería JS propio
 * Creado por TheMarceloYT (https://github.com/TheMarceloYT)
 */

export class MYTstrap {
  /* VARIABLES GLOBALES [INICIO] */
  static mainOffcanvasClase = "offcanvas";
  static MainOffcanvasBackdropClase = "offcanvas-backdrop";
  static nameDataTooltip = "data-tooltip";
  static nameDataTooltipTarget = "tooltip-target";
  static modalID = "mytstrapModal";
  static modalBodyClase = "modal-body";
  static modalTitleClase = "modal-title";
  static modalFooterClase = "modal-footer";
  static modalBackdrop = null;
  static modalDataButton = "data-modal-close";
  static modalDataButtonOpen = "data-modal-open";
  static modal = null;
  static zoomableImgClass = "zoomable";
  /* VARIABLES GLOBALES [FIN] */

  /* FUNCIONES REUTILIZABLES [INICIO] */

  /**
   * Crear un div en el body con clase
   * @param {String} classDiv - Nombre de la clase del div
   */
  static createDivEnBody(classDiv) {
    const div = document.createElement("div");
    div.classList.add(`${classDiv}`);
    document.body.appendChild(div);

    // paso el div
    return div;
  }

  /**
   * Hace un Query Selector al documento
   * @param {String} elementoHTML - Elemento a buscar
   */
  static buscarElementoHTML = (elementoHTML) =>
    document.querySelector(`${elementoHTML}`);

  /* FUNCIONES REUTILIZABLES [FIN] */

  /* FUNCIONES NORMALES [INICIO] */

  /**
   * Inicia el sistema de mostrado del Main Offcanvas
   */
  static initMainOffcanvas() {
    // abrir offcanvas
    document
      .querySelectorAll(`[data-bs-toggle="${this.mainOffcanvasClase}"]`)
      .forEach((btn) => {
        btn.addEventListener("click", () => {
          const targetSelector = btn.getAttribute("data-bs-target");
          const offcanvas = this.buscarElementoHTML(`${targetSelector}`);

          // mostramos offcanvas (si existe)
          if (offcanvas) {
            offcanvas.classList.add("show");

            // muestro backdrop
            const backdrop = this.createDivEnBody(
              this.MainOffcanvasBackdropClase
            );
            backdrop.classList.add("show");

            // permitir cerrar al hacer clic sobre el backdrop
            backdrop.addEventListener("click", () => {
              offcanvas.classList.remove("show");
              backdrop.remove();

              // restaurar scroll del body
              document.body.style.overflow = "";
            });

            // previene scroll del body
            document.body.style.overflow = "hidden";
          }
        });
      });

    // cerrar offcanvas
    document
      .querySelectorAll(`[data-bs-dismiss="${this.mainOffcanvasClase}"]`)
      .forEach((closeBtn) => {
        closeBtn.addEventListener("click", () => {
          const offcanvas = closeBtn.closest(`.${this.mainOffcanvasClase}`);
          const backdrop = this.buscarElementoHTML(
            `.${this.MainOffcanvasBackdropClase}`
          );

          // cerramos offcanvas (si existe)
          if (offcanvas) offcanvas.classList.remove("show");

          // elimino el backdrop (si existe)
          if (backdrop) backdrop.remove();

          // restaurar scroll del body
          document.body.style.overflow = "";
        });
      });
  }

  /**
   * Inicia el sistema de los dropdowns
   */
  static initDropdowns() {
    document.addEventListener("click", function (e) {
      const toggler = e.target.closest("dropdown > .dropdown-toggle");

      // si hay toggler, habro el dropdown menu
      if (toggler) {
        const dropdown = toggler.closest("dropdown");
        const dropdownMenu = dropdown.querySelector(".dropdown-menu");

        // Cerrar todos los demás abiertos (excepto el actual)
        document.querySelectorAll("dropdown.open").forEach((d) => {
          if (d !== dropdown) d.classList.remove("open");
        });

        // mostrar dropdown actual
        dropdown.classList.toggle("open");

        // detecto si se sale de la pantalla (lo acomodo dentro de la pantalla)
        if (dropdown.classList.contains("open")) {
          // reset a posiciones
          dropdownMenu.style.removeProperty("left");
          dropdownMenu.style.removeProperty("right");

          // obtengo las coordenadas del dropdown menu
          const rect = dropdownMenu.getBoundingClientRect();

          // si se sale por la derecha
          if (rect.right > window.innerWidth) {
            const overflow = rect.right - window.innerWidth;
            dropdownMenu.style.left = `${dropdownMenu.offsetLeft - overflow}px`;
          }

          // si se sale por la izquierda
          if (rect.left < 0) {
            dropdownMenu.style.left = `${
              dropdownMenu.offsetLeft - rect.left
            }px`;
          }

          // si se sale por abajo (para offcanvas vertical)
          if (rect.bottom > window.innerHeight) {
            const overflowBottom = rect.bottom - window.innerHeight;
            dropdownMenu.style.top = `${
              dropdownMenu.offsetTop - overflowBottom
            }px`;
          }
        }

        return;
      }

      // Si no clickeó un toggler o otra cosa, cierro el menu
      if (!e.target.closest("dropdown")) {
        document
          .querySelectorAll("dropdown.open")
          .forEach((d) => d.classList.remove("open"));
      }
    });
  }

  /**
   * Inicia el sistema de tooltips
   */
  static initTooltips() {
    // creamos el tooltip (si no existe)
    const existTooltip = document.getElementById("tooltip");
    if (!existTooltip) {
      const tooltipDiv = document.createElement("div");
      tooltipDiv.classList.add("tooltip");
      tooltipDiv.id = "tooltip";
      document.body.appendChild(tooltipDiv);
    }

    // hacemos el listeners para el mouse
    const tooltip = document.getElementById("tooltip");
    document
      .querySelectorAll(`[${MYTstrap.nameDataTooltipTarget}]`)
      .forEach((el) => {
        // ya existe el mismo listener?
        if (el.dataset.tooltipListeners === "true") return;

        // listener del centrado del mouse
        el.addEventListener("mouseenter", function (e) {
          const target = el.getAttribute(MYTstrap.nameDataTooltipTarget);
          const textEl = document.querySelector(
            `[${MYTstrap.nameDataTooltip}="${target}"]`
          );
          // existe el texto para el tooltip?
          if (textEl) {
            tooltip.textContent = textEl.textContent;
            tooltip.style.left = e.pageX + "px";
            tooltip.style.top = e.pageY + "px";
            tooltip.classList.add("show");
          }
          // no existe
          else
            console.log(
              `[MYTstrap] No existe el texto para el tooltip de ${[target]}`
            );
        });

        // listener de cuando el mouse se mueve
        el.addEventListener("mousemove", (e) => {
          tooltip.style.left = e.pageX + "px";
          tooltip.style.top = e.pageY + "px";
        });

        // listener de cuando el mouse deja el focus al elemento
        el.addEventListener("mouseleave", () => {
          tooltip.classList.remove("show");
        });

        // marcamos que ya tiene listeners
        el.dataset.tooltipListeners = "true";
      });
  }

  /**
   * Iniciamos el volteador de los pfp
   */
  static initPFPflip() {
    const flip = document.querySelector(".pfp-flip");

    // existe el flip de los pfp?
    if (flip) {
      // ya existe el mismo interval?
      if (flip.dataset.interval === "true") return;

      // no tiene, lo creamos
      setInterval(() => {
        flip.classList.toggle("flipped");
      }, 4000);

      // marcamos que ya tiene interval
      flip.dataset.interval = "true";
    }
    // no existe
    else console.log(`[MYTstrap] No existe el flip de pfp`);
  }

  /**
   * Esconde el modal
   */
  static hideModal() {
    // existe el modal?
    if (!this.modal) {
      console.log(`[MYTstrap] No existe el modal`);
      return;
    }

    // escondo el modal
    this.modal.classList.remove("show");
    this.modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    // eliminar backdrop (si existe)
    if (this.modalBackdrop) {
      this.modalBackdrop.classList.remove("show");
      this.modalBackdrop?.remove();
      this.modalBackdrop = null;
    }
    // no existe
    else console.log(`[MYTstrap] No existe el backdrop del modal`);
  }

  /**
   * Muestra el modal con los atributos recibidos
   * @param {String} title - Título del modal a definir
   * @param {String} body - Body del modal a definir
   * @param {String} footer - Footer del modal a definir
   */
  static showModal(title, body, footer) {
    // existe el modal?
    if (!this.modal) {
      console.log(`[MYTstrap] No existe el modal`);
      return;
    }

    // aplico el contenido dinámico
    const modalTitle = this.modal.querySelector(`.${this.modalTitleClase}`);
    const modalBody = this.modal.querySelector(`.${this.modalBodyClase}`);
    const modalFooter = this.modal.querySelector(`.${this.modalFooterClase}`);
    if (title) modalTitle.innerHTML = title;
    if (body) modalBody.innerHTML = body;
    if (footer) modalFooter.innerHTML = footer;

    // crear y mostrar modal backdrop
    this.modalBackdrop = document.createElement("div");
    this.modalBackdrop.className = "mytstrap-modal-backdrop";
    document.body.appendChild(this.modalBackdrop);
    this.modalBackdrop.classList.add("show");

    // listener para cerrar si se clickea en backdrop
    this.modalBackdrop.addEventListener("click", () => this.hideModal());

    // mostrar modal
    this.modal.classList.add("show");
    this.modal.removeAttribute("aria-hidden");
    document.body.style.overflow = "hidden";
  }

  /**
   * Inicia el sistema de modals
   */
  static initModal() {
    this.modal = document.getElementById(this.modalID);

    // existe el modal?
    if (!this.modal) {
      console.log(`[MYTstrap] No existe el modal`);
      return;
    }

    // listener para los btns de abrir el modal
    document.querySelectorAll(`${this.modalDataButtonOpen}`).forEach((btn) => {
      // ya existe el mismo listener?
      if (btn.dataset.modalOpenListener === "true") return;

      btn.addEventListener("click", () => this.showModal());

      // marcamos que ya tiene listeners
      btn.dataset.modalOpenListener = "true";
    });

    // listener de cerrar con botones
    this.modal.querySelectorAll(`[${this.modalDataButton}]`).forEach((btn) => {
      // ya existe el mismo listener?
      if (btn.dataset.modalCloseListener === "true") return;

      btn.addEventListener("click", () => this.hideModal());

      // marcamos que ya tiene listeners
      btn.dataset.modalCloseListener = "true";
    });

    // listener cerrar con ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") this.hideModal();
    });
  }

  /**
   * Hace imagenes que puedan hacerse zoom
   */
  static initZoomInImgs() {
    // hay imágenes zoomables?
    const zoomableIMGS = document.querySelector(`.${this.zoomableImgClass}`);
    if (!zoomableIMGS) {
      console.log(`[MYTstrap] No hay imágenes zoomables`);
      return;
    }

    // defino los listener para cada zoomable img
    document.querySelectorAll(`.${this.zoomableImgClass}`).forEach((img) => {
      // ya existe el mismo listener?
      if (img.dataset.zoomableListener === "true") return;

      // se le añade la img zoomable al container
      const divImgZoomable = document.createElement("div");
      divImgZoomable.id = "zoom-overlay";
      divImgZoomable.style = "display: none;";
      divImgZoomable.innerHTML = `<img id="zoom-img" src="" alt="Zoom" />`;
      img.parentElement.appendChild(divImgZoomable);

      // obtengo elementos del div overlay
      const overlay = document.getElementById("zoom-overlay");
      const zoomImg = document.getElementById("zoom-img");

      // defino el listener del click en imágen para hacerle zoom
      img.addEventListener("click", (e) => {
        // evita que se cierre el overlay
        e.stopPropagation();

        zoomImg.src = img.src;
        overlay.style.display = "flex";
        zoomImg.classList.toggle("zoomed");
      });

      // defino listener del click en el overlay para cerrarlo
      overlay.addEventListener("click", () => {
        overlay.style.display = "none";
        zoomImg.src = "";
        zoomImg.classList.remove("zoomed");
      });

      // marcamos que ya tiene listeners
      img.dataset.zoomableListener = "true";
    });
  }

  /**
   * Crea/quita loader para un elemento seleccionado
   * @param {String} tipo - Tipo de procedimiento (add/remove)
   * @param {HTMLElement} element - Elemento para poner el loader
   * @param {String} id - ID para el loader
   */
  static doLoading(tipo, element, id) {
    // existe el elemento?
    if (!element) {
      console.log(
        `[MYTstrap] No se puede hacer un loader a un elemento inexistente`
      );
      return;
    }

    // existe, tipo de procedimiento?
    if (tipo === "add") {
      const overlay = document.createElement("div");
      overlay.id = id;
      element.style.position = element.style.position || "relative";
      overlay.className = "loading";

      // Crear spinner
      const spinner = document.createElement("div");
      spinner.className = "loading-spinner";

      // agrego el loader
      overlay.appendChild(spinner);
      element.appendChild(overlay);

      // guardamos la referencia al loader
      element.loader = overlay;

      return;
    }
    // remover loader
    if (element.loader) {
      element.removeChild(element.loader);
      element.loader = null;
    }
  }

  /* FUNCIONES NORMALES [FIN] */

  /**
   * Inicia todas las funciones
   */
  static init() {
    this.initMainOffcanvas();
    this.initDropdowns();
    this.initTooltips();
    this.initPFPflip();
    this.initModal();
    this.initZoomInImgs();
  }
}
