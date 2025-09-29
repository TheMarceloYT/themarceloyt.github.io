/**
 * Base de datos de la app
 * Creado por TheMarceloYT (https://github.com/TheMarceloYT)
 */

// config de la app
import { Config } from "../config/app.mjs";

export class DataBase {
	/* TRADUCCIÓN DE TODOS LOS TEXTOS DE LA APP [INICIO] */
	static translationTextos = {
		es: {
			/* INDEX [INICIO] */
			langHome: "Inicio",
			langProjects: "Proyectos",
			langContact: "Contacto",
			langBtnEs: "Español",
			langBtnEn: "Inglés",
			// themeAuto: "Automático",
			langThemeLight: "Claro",
			langThemeDark: "Oscuro",
			langOffcanvasFooterText: "Todos los derechos reservados por",
			langFooterTextReserved: "Todos los derechos reservados por",
			langFooterTextAdvice: `Versión de la app: ${Config.appVersion}`,
			/* INDEX [FIN] */

			/* ABOUT [INICIO] */
			langPfpText: `Desarrollador full-stack con sólida base en programación y especial enfoque 
      en back-end. Me caracterizo por la responsabilidad, proactividad y capacidad de adaptación, 
      además de un alto compromiso con el trabajo en equipo. Apasionado por la tecnología y el aprendizaje 
      continuo, busco aportar valor a proyectos de desarrollo de software y crecer profesionalmente en el área.`,
			langAboutHabilidades: "Habilidades",
			langSkillUno: `Programación y desarrollo: Algoritmos y estructuras de datos, análisis y diseño de 
      sistemas, desarrollo web, aplicaciones móviles y software de escritorio.`,
			langSkillDos: `Tecnologías y herramientas: Python, bases de datos, Git, desarrollo en la nube y 
      inteligencia artificial.`,
			langSkillTres: `Sistemas: Operativos, arquitecturas de software y entornos de computación.`,
			langSkillCuatro: `Ingeniería inversa: Decodificación a juego de consola para desarrollo de servidor 
      privado y personalizado.`,
			langSkillCinco: "Videojuegos: Desarrollo de videojuegos en Godot Engine.",
			langSkillSeis: `Liderazgo: Liderar equipos de competición en videojuegos, equipos TI en ingeniería inversa y 
      desarrollo de backend y equipos de administración en Discord.`,
			langSkillSiete: `Blandas: Resolución de problemas, Pensamiento crítico, Creatividad, 
      Innovación, Liderazgo, Motivación, Trabajo en equipo, Adaptabilidad, Flexibilidad, 
      Organización, Planificación, Autodisciplina, Responsabilidad, Compromiso, Proactividad, 
      Toma de decisiones, Manejo de conflictos, Ética profesional, Aprendizaje continuo, 
      Curiosidad y Manejo de la presión.`,
			langAboutHerramientas: "Herramientas",
			langC: "C",
			langCPP: "C++",
			langCSHARP: "C#",
			langHTML: "HTML",
			langCSS: "CSS",
			langLARAVEL: "LARAVEL",
			langPHP: "PHP",
			langTYPESCRIPT: "TYPESCRIPT",
			langPYTHON: "PYTHON",
			langPUNTONET: ".NET",
			langDART: "DART",
			langJS: "JS",
			langFLUTTER: "FLUTTER",
			langJAVA: "JAVA",
			langORACLESQL: "ORACLE SQL",
			langSQLSERVER: "MICROSOFT SQL SERVER",
			langREACT: "REACT",
			langMARIADB: "MARIA DB",
			langLINUX: "LINUX",
			langNODEJS: "NODE JS",
			langPOSTMAN: "POSTMAN",
			langREVERSEING: "INGENIERÍA INVERSA",
			langMYSQL: "MYSQL",
			langGIT: "GIT",
			langDJANGO: "DJANGO",
			langFIREBASE: "FIREBASE",
			langCODEIGNITER: "CODEIGNITER",
			langDISCORD: "DISCORD",
			langAWS: "AWS",
			langIA: "IA",
			langBOOTSTRAP: "BOOTSTRAP",
			langGHIDRA: "GHIDRA",
			langAboutCertificados: "Certificados",
			langAboutInfoWeb: "Información de la web",
			langSantaMariaCertTitle: "Técnico en informática",
			langSantaMariaCertDesc: `Certificado de Título de Técnico en Informática, que acredita formación profesional 
      en el área de tecnologías de la información, con competencias en desarrollo de software, programación, 
      bases de datos, redes, sistemas operativos y soporte técnico. Este título valida la capacidad para diseñar, 
      implementar y mantener soluciones tecnológicas, así como para analizar y resolver problemas informáticos en 
      distintos entornos laborales.`,
			langSantaMariaIcon: "Universidad Técnica Federico Santa María",
			langDescInfoWebUno: `Este proyecto es una aplicación web desarrollada desde cero bajo un enfoque MVC 
      (Model-View-Controller) adaptado, utilizando únicamente HTML, CSS y JavaScript vanilla, sin frameworks 
      externos. La estructura está diseñada de forma modular, escalable y profesional, siguiendo buenas prácticas 
      de organización de carpetas y código limpio, lo que facilita su mantenimiento y extensión.`,
			langDescInfoWebDos: `El repositorio cuenta con licencia, lo que permite a empresas o desarrolladores de conversar sobre la 
      adopción de esta misma estructura para proyectos comerciales o la contratación de servicios para 
      implementar soluciones personalizadas con este modelo:`,
			langDescUno: `Arquitectura MVC nativa implementada en vanilla JS.`,
			langDescDos: `Sistema de enrutamiento propio, permitiendo navegación SPA sin frameworks.`,
			langDescTres: `Organización profesional de carpetas (separación clara de vistas, modelos y controladores).`,
			langDescCuatro: `Código modular y reutilizable, fácil de escalar.`,
			langDescCinco: `Diseño responsive y optimizado con HTML y CSS puros.`,
			langDescSeis: `Proyecto bajo licencia con posibilidad de uso o adaptación empresarial.`,
			langDescSiete: `Disponibilidad para colaboración o contratación, orientado a negocios que busquen una base 
      sólida y eficiente para sus aplicaciones web.`,
			langDescOcho: `Librerías de CSS y JS propios.`,
			langDescNueve: "Implementación propia de soporte multilenguaje y personalización de temas.",
			/* ABOUT [FIN] */

			/* PROJECTS [INICIO] */
			langArtiumDesc: `Aplicación web desarrollada en Laravel y Bootstrap, con integración de Bootstrap Icons, 
      enfocada en brindar una experiencia profesional e intuitiva. La plataforma funciona como un espacio para 
      artistas, quienes pueden subir y gestionar sus obras (imágenes con título, descripción y demás detalles). 
      Cada publicación admite interacciones sociales, incluyendo comentarios y valoraciones mediante “me gusta”. 
      Los usuarios registrados tienen acceso a todas las publicaciones, pudiendo explorar el contenido artístico y 
      dejar su opinión. Por su parte, los administradores cuentan con un panel de gestión completo, con 
      herramientas para crear, editar, eliminar y administrar artistas, usuarios, administradores y 
      publicaciones, garantizando un control integral de la plataforma.`,
			langDone: "Terminado",
			langReinventing: "Reinventando",
			langDeveloping: "Desarrollando",
			langPending: "Pendiente",
			langHerrUsadas: "Herramientas usadas:",
			langProjectCode: "Ir al código fuente",
			langProjectPrivacy: "Proyecto privado",
			langGlobiDesc: `Aplicación de mensajería instantánea diseñada para conectar al mundo de forma rápida, 
      segura y sencilla. Con una interfaz moderna e intuitiva, ofrece una experiencia de comunicación sin 
      límites pensada para usuarios que valoran tanto la privacidad como la velocidad en sus conversaciones. 
      Permite chatear en tiempo real con contactos sin retrasos, crear grupos dinámicos para compartir 
      experiencias, noticias o proyectos, y garantiza la protección de datos mediante cifrado de extremo a 
      extremo. Su carácter global y accesible facilita la conexión entre personas de cualquier parte del mundo 
      sin barreras. Más que una aplicación de mensajería, Globi es un espacio para crear comunidad, compartir y 
      mantenerse siempre cerca de quienes más importan, combinando simplicidad, innovación y conexión global.`,
			langAutoGestorDesc: `Aplicación desarrollada en Java con base de datos MySQL que permite la administración 
      integral de un taller de vehículos de forma eficiente y organizada. La plataforma está diseñada para 
      facilitar la gestión de clientes, vehículos, productos y ventas, generando boletas y registros completos 
      de cada proceso. Gracias a su arquitectura robusta y a su enfoque en la productividad, AutoGestor optimiza 
      las operaciones diarias del taller y asegura un control preciso de la información, ofreciendo una solución 
      confiable y adaptable a distintos entornos de trabajo.`,
			langTaskFlowDesc: `Aplicación desarrollada en .NET con C# y WPF que permite gestionar de manera completa 
      las tareas pendientes en un entorno organizado y flexible. La plataforma facilita la creación de tareas 
      con categorías personalizadas, su edición y eliminación, así como el control de estados para marcar 
      aquellas que han sido completadas antes de la fecha de término. Con una base de datos local administrada 
      mediante Entity Framework, TaskFlow ofrece una solución confiable y práctica para optimizar la 
      productividad personal o profesional, manteniendo un control claro de todas las responsabilidades en un 
      solo lugar.`,
			langKompryDesc: `Plataforma e-commerce desarrollada en Laravel con HTML, CSS, PHP y JavaScript, pensada 
      para ofrecer una experiencia de navegación clara, rápida y completa. El sistema integra funcionalidades 
      de búsqueda avanzada y filtros personalizados que permiten a los usuarios encontrar fácilmente lo que 
      buscan. Además, cuenta con un sistema de inicio de sesión para administradores con el fin de gestionar 
      el catálogo y mantener el control de la plataforma, junto con la posibilidad de que los usuarios 
      registrados dejen comentarios y opiniones que enriquecen la experiencia de compra. Representa 
      una base sólida y escalable para el desarrollo de un comercio electrónico moderno, confiable y adaptable 
      a las necesidades del mercado digital.`,
			langMK9Reborn: `Proyecto comunitario cuyo objetivo es revivir y preservar el modo online de Mortal Kombat 9 
      en PlayStation 3, brindando a los jugadores la posibilidad de volver a disfrutar de la experiencia 
      multijugador de este título icónico. El desarrollo se realiza de manera independiente y sin fines de 
      lucro, impulsado exclusivamente por la pasión hacia el juego y el compromiso con su conservación para las 
      futuras generaciones de jugadores. El proyecto consiste en la creación de un servidor propio construido 
      desde cero, diseñado para replicar las funcionalidades originales del modo online de Mortal Kombat 9. Es 
      importante destacar que no se modifican ni distribuyen archivos del juego original ni se altera su código; 
      el propósito es únicamente ofrecer una infraestructura alternativa que permita a la comunidad volver a 
      conectarse y competir en línea.`,
			/* PROJECTS [FIN] */

			/* CONTACT [INICIO] */
			langOpcContact: "Opciones de contacto",
			langMoreOpcContact: "Más opciones de contacto:",
			langContactSwitch: "Switch ES",
			langContactCorreo: "Enviar un correo",
			langContactGithub: "Mi Github",
			langContactLinkedin: "Mi linkedin",
			/* CONTACT [FIN] */

			/* NOT FOUND [INICIO] */
			langNotFound: "Recurso no encontrado...",
			/* NOT FOUND [FIN] */
		},
		en: {
			/* INDEX [INICIO] */
			langHome: "Home",
			langProjects: "Projects",
			langContact: "Contact",
			langBtnEs: "Spanish",
			langBtnEn: "English",
			// themeAuto: "Automatic",
			langThemeLight: "Light",
			langThemeDark: "Dark",
			langOffcanvasFooterText: "All rights reserved by",
			langFooterTextReserved: "All rights reserved by",
			langFooterTextAdvice: `App version: ${Config.appVersion}`,
			/* INDEX [FIN] */

			/* ABOUT [INICIO] */
			langPfpText: `Full-stack developer with a solid background in programming and a special focus 
      on the back-end. I'm characterized by responsibility, proactivity, and adaptability, as well as 
      a strong commitment to teamwork. Passionate about technology and continuous learning, I seek to 
      add value to software development projects and grow professionally in the field.`,
			langAboutHabilidades: "Skills",
			langSkillUno: `Programming and development: Algorithms and data structures, systems analysis and design, 
      web development, mobile applications and desktop software.`,
			langSkillDos: `Technologies and tools: Python, databases, Git, cloud development and artificial intelligence.`,
			langSkillTres: `Systems: Operating systems, software architectures and computing environments.`,
			langSkillCuatro: `Reverse Engineering: Decoding a console game for private and custom server development.`,
			langSkillCinco: "Video games: Video game development in Godot Engine.",
			langSkillSeis: `Leadership: Leading competitive gaming teams, IT teams in reverse engineering and backend 
      development and administration teams at Discord.`,
			langSkillSiete: `Soft: Problem-solving, Critical thinking, Creativity, Innovation, Leadership, 
      Motivation, Teamwork, Adaptability, Flexibility, Organization, Planning, Self-discipline, Responsibility, 
      Commitment, Proactivity, Decision-making, Conflict management, Professional ethics, Continuous learning, 
      Curiosity, and Pressure management:`,
			langAboutHerramientas: "Tools",
			langC: "C",
			langCPP: "C++",
			langCSHARP: "C#",
			langHTML: "HTML",
			langCSS: "CSS",
			langLARAVEL: "LARAVEL",
			langPHP: "PHP",
			langTYPESCRIPT: "TYPESCRIPT",
			langPYTHON: "PYTHON",
			langPUNTONET: ".NET",
			langDART: "DART",
			langJS: "JS",
			langFLUTTER: "FLUTTER",
			langJAVA: "JAVA",
			langORACLESQL: "ORACLE SQL",
			langSQLSERVER: "MICROSOFT SQL SERVER",
			langREACT: "REACT",
			langMARIADB: "MARIA DB",
			langLINUX: "LINUX",
			langNODEJS: "NODE JS",
			langPOSTMAN: "POSTMAN",
			langREVERSEING: "REVERSE ENGINEERING",
			langMYSQL: "MYSQL",
			langGIT: "GIT",
			langDJANGO: "DJANGO",
			langFIREBASE: "FIREBASE",
			langCODEIGNITER: "CODEIGNITER",
			langDISCORD: "DISCORD",
			langAWS: "AWS",
			langIA: "AI",
			langBOOTSTRAP: "BOOTSTRAP",
			langGHIDRA: "GHIDRA",
			langAboutCertificados: "Certificates",
			langAboutInfoWeb: "Web information",
			langSantaMariaCertTitle: "Computer technician",
			langSantaMariaCertDesc: `A Certificate of Computer Technician Qualification, which accredits professional 
      training in the field of information technology, with skills in software development, programming, 
      databases, networks, operating systems, and technical support. This qualification validates the ability 
      to design, implement, and maintain technological solutions, as well as to analyze and solve IT problems 
      in various work environments.`,
			langSantaMariaIcon: "Universidad Técnica Federico Santa María",
			langDescInfoWebUno: `This project is a web application developed from scratch using a customized MVC 
      (Model-View-Controller) approach, using only vanilla HTML, CSS, and JavaScript, without any external 
      frameworks. The structure is designed to be modular, scalable, and professional, following good practices 
      for folder organization and clean code, making it easy to maintain and extend.`,
			langDescInfoWebDos: `The repository is licensed, allowing companies or developers to discuss adopting 
      this same structure for commercial projects or contracting services to implement custom solutions using 
      this model.`,
			langDescUno: `Native MVC architecture implemented in vanilla JS.`,
			langDescDos: `Custom routing system, allowing SPA navigation without frameworks.`,
			langDescTres: `Professional folder organization (clear separation of views, models, and controllers).`,
			langDescCuatro: `Modular and reusable code, easy to scale.`,
			langDescCinco: `Responsive and optimized design with pure HTML and CSS.`,
			langDescSeis: `Licensed project with the possibility of business use or adaptation.`,
			langDescSiete: `Available for collaboration or contracting, aimed at businesses looking for a solid and 
      efficient foundation for their web applications.`,
			langDescOcho: `Custom CSS and JS libraries.`,
			langDescNueve: "Own implementation of multilingual support and theme customization.",
			/* ABOUT [FIN] */

			/* PROJECTS [INICIO] */
			langArtiumDesc: `A web application developed in Laravel and Bootstrap, with Bootstrap Icons integration, 
      focused on providing a professional and intuitive experience. The platform functions as a space for 
      artists, who can upload and manage their works (images with titles, descriptions, and other details). 
      Each post allows for social interactions, including comments and ratings through "likes." Registered users 
      have access to all posts, allowing them to explore the artistic content and leave their opinions. 
      Administrators, meanwhile, have access to a comprehensive management panel with tools to create, edit, 
      delete, and manage artists, users, administrators, and posts, ensuring comprehensive control over the 
      platform.`,
			langDone: "Finished",
			langReinventing: "Reinventing",
			langDeveloping: "Developing",
			langPending: "Pending",
			langHerrUsadas: "Used tools:",
			langProjectCode: "Go to source code",
			langProjectPrivacy: "Private project",
			langGlobiDesc: `Instant messaging app designed to connect the world quickly, securely, and easily. With a 
      modern and intuitive interface, it offers a seamless communication experience designed for users who value 
      both privacy and speed in their conversations. It allows users to chat in real time with contacts without 
      delays, create dynamic groups to share experiences, news, or projects, and guarantees data protection 
      through end-to-end encryption. Its global and accessible nature facilitates connection between people 
      from all over the world without barriers. More than a messaging app, Globi is a space to build community, 
      share, and always stay close to those who matter most, combining simplicity, innovation, and global 
      connection.`,
			langAutoGestorDesc: `An application developed in Java with a MySQL database that enables the efficient 
      and organized management of a vehicle workshop. The platform is designed to facilitate the management 
      of customers, vehicles, products, and sales, generating invoices and complete records of each process. 
      Thanks to its robust architecture and focus on productivity, AutoGestor optimizes the workshop's daily 
      operations and ensures precise control of information, offering a reliable solution adaptable to different 
      work environments.`,
			langTaskFlowDesc: `An application developed in .NET with C# and WPF that allows you to fully manage 
      pending tasks in an organized and flexible environment. The platform facilitates the creation of 
      tasks with custom categories, their editing and deletion, as well as status control to mark those 
      completed before the due date. With a local database managed through Entity Framework, TaskFlow offers a 
      reliable and practical solution for optimizing personal or professional productivity, maintaining clear 
      control of all responsibilities in one place.`,
			langKompryDesc: `An e-commerce platform developed in Laravel with HTML, CSS, PHP, and JavaScript, 
      designed to offer a clear, fast, and comprehensive browsing experience. The system integrates advanced 
      search features and custom filters that allow users to easily find what they're looking for. It also 
      features an administrator login system to manage the catalog and maintain platform control, along with 
      the ability for registered users to leave comments and reviews that enrich the shopping experience. 
      Represents a solid and scalable foundation for the development of modern, reliable e-commerce, 
      adaptable to the needs of the digital market.`,
			langMK9Reborn: `A community project aimed at reviving and preserving Mortal Kombat 9's online mode on 
      PlayStation 3, giving players the chance to once again enjoy the multiplayer experience of this iconic 
      title. Development is independent and non-profit, driven solely by a passion for the game and a commitment 
      to preserving it for future generations of players. The project consists of creating a proprietary server 
      built from the ground up, designed to replicate the original features of Mortal Kombat 9's online mode. 
      It's important to note that no files from the original game are modified or distributed, nor is its code 
      altered; the goal is solely to provide an alternative infrastructure that allows the community to 
      reconnect and compete online.`,
			/* PROJECTS [FIN] */

			/* CONTACT [INICIO] */
			langOpcContact: "Contact options",
			langMoreOpcContact: "More contact options:",
			langContactSwitch: "Switch EN",
			langContactCorreo: "Send an email",
			langContactGithub: "My Github",
			langContactLinkedin: "My linkedin",
			/* CONTACT [FIN] */

			/* NOT FOUND [INICIO] */
			langNotFound: "Resource not found...",
			/* NOT FOUND [FIN] */
		},
	};
	/* TRADUCCIÓN DE TODOS LOS TEXTOS DE LA APP [FIN] */

	/* HERRAMIENTAS [INICIO] */
	static herramientasSection = {
		c: {
			dataLang: "langC",
			dataTooltip: "c",
			sourceIMG: "/assets/images/herramientas/c_logo.webp",
			altIMG: "C logo",
			tooltipTarget: "c",
		},
		cpp: {
			dataLang: "langCPP",
			dataTooltip: "cpp",
			sourceIMG: "/assets/images/herramientas/cpp_logo.webp",
			altIMG: "C++ logo",
			tooltipTarget: "cpp",
		},
		csharp: {
			dataLang: "langCSHARP",
			dataTooltip: "csharp",
			sourceIMG: "/assets/images/herramientas/csharp_logo.webp",
			altIMG: "C# logo",
			tooltipTarget: "csharp",
		},
		html: {
			dataLang: "langHTML",
			dataTooltip: "html",
			sourceIMG: "/assets/images/herramientas/html_logo.webp",
			altIMG: "HTML logo",
			tooltipTarget: "html",
		},
		css: {
			dataLang: "langCSS",
			dataTooltip: "css",
			sourceIMG: "/assets/images/herramientas/css_logo.webp",
			altIMG: "CSS logo",
			tooltipTarget: "css",
		},
		laravel: {
			dataLang: "langLARAVEL",
			dataTooltip: "laravel",
			sourceIMG: "/assets/images/herramientas/laravel_logo.webp",
			altIMG: "LARAVEL logo",
			tooltipTarget: "laravel",
		},
		php: {
			dataLang: "langPHP",
			dataTooltip: "php",
			sourceIMG: "/assets/images/herramientas/php_logo.webp",
			altIMG: "PHP logo",
			tooltipTarget: "php",
		},
		typescript: {
			dataLang: "langTYPESCRIPT",
			dataTooltip: "typescript",
			sourceIMG: "/assets/images/herramientas/typescript_logo.webp",
			altIMG: "TYPESCRIPT logo",
			tooltipTarget: "typescript",
		},
		python: {
			dataLang: "langPYTHON",
			dataTooltip: "python",
			sourceIMG: "/assets/images/herramientas/python_logo.webp",
			altIMG: "PYTHON logo",
			tooltipTarget: "python",
		},
		puntoNET: {
			dataLang: "langPUNTONET",
			dataTooltip: "puntoNET",
			sourceIMG: "/assets/images/herramientas/puntoNET_logo.webp",
			altIMG: ".NET logo",
			tooltipTarget: "puntoNET",
		},
		dart: {
			dataLang: "langDART",
			dataTooltip: "dart",
			sourceIMG: "/assets/images/herramientas/dart_logo.webp",
			altIMG: "DART logo",
			tooltipTarget: "dart",
		},
		js: {
			dataLang: "langJS",
			dataTooltip: "langJS",
			sourceIMG: "/assets/images/herramientas/js_logo.webp",
			altIMG: "JS logo",
			tooltipTarget: "langJS",
		},
		flutter: {
			dataLang: "langFLUTTER",
			dataTooltip: "flutter",
			sourceIMG: "/assets/images/herramientas/flutter_logo.webp",
			altIMG: "FLUTTER logo",
			tooltipTarget: "flutter",
		},
		java: {
			dataLang: "langJAVA",
			dataTooltip: "java",
			sourceIMG: "/assets/images/herramientas/java_logo.webp",
			altIMG: "JAVA logo",
			tooltipTarget: "java",
		},
		oracleSQL: {
			dataLang: "langORACLESQL",
			dataTooltip: "oracleSQL",
			sourceIMG: "/assets/images/herramientas/oracleSQL_logo.webp",
			altIMG: "ORACLE SQL logo",
			tooltipTarget: "oracleSQL",
		},
		sqlSERVER: {
			dataLang: "langSQLSERVER",
			dataTooltip: "sqlSERVER",
			sourceIMG: "/assets/images/herramientas/SQLserver_logo.webp",
			altIMG: "SQL SERVER logo",
			tooltipTarget: "sqlSERVER",
		},
		react: {
			dataLang: "langREACT",
			dataTooltip: "react",
			sourceIMG: "/assets/images/herramientas/react_logo.webp",
			altIMG: "REACT logo",
			tooltipTarget: "react",
		},
		mariaDB: {
			dataLang: "langMARIADB",
			dataTooltip: "mariaDB",
			sourceIMG: "/assets/images/herramientas/mariadb_logo.webp",
			altIMG: "MARIADB logo",
			tooltipTarget: "mariaDB",
		},
		linux: {
			dataLang: "langLINUX",
			dataTooltip: "linux",
			sourceIMG: "/assets/images/herramientas/linux_logo.webp",
			altIMG: "LINUX logo",
			tooltipTarget: "linux",
		},
		nodeJS: {
			dataLang: "langNODEJS",
			dataTooltip: "nodeJS",
			sourceIMG: "/assets/images/herramientas/nodeJS_logo.webp",
			altIMG: "NODE JS logo",
			tooltipTarget: "nodeJS",
		},
		postman: {
			dataLang: "langPOSTMAN",
			dataTooltip: "postman",
			sourceIMG: "/assets/images/herramientas/postman_logo.webp",
			altIMG: "POSTMAN logo",
			tooltipTarget: "postman",
		},
		reING: {
			dataLang: "langREVERSEING",
			dataTooltip: "reverseING",
			sourceIMG: "/assets/images/herramientas/reverseING_logo.webp",
			altIMG: "INGENIERÍA INVERSA logo",
			tooltipTarget: "reverseING",
		},
		mySQL: {
			dataLang: "langMYSQL",
			dataTooltip: "mysql",
			sourceIMG: "/assets/images/herramientas/mysql_logo.webp",
			altIMG: "MYSQL logo",
			tooltipTarget: "mysql",
		},
		git: {
			dataLang: "langGIT",
			dataTooltip: "git",
			sourceIMG: "/assets/images/herramientas/git_logo.webp",
			altIMG: "GIT logo",
			tooltipTarget: "git",
		},
		django: {
			dataLang: "langDJANGO",
			dataTooltip: "django",
			sourceIMG: "/assets/images/herramientas/django_logo.webp",
			altIMG: "DJANGO logo",
			tooltipTarget: "django",
		},
		firebase: {
			dataLang: "langFIREBASE",
			dataTooltip: "firebase",
			sourceIMG: "/assets/images/herramientas/firebase_logo.webp",
			altIMG: "FIREBASE logo",
			tooltipTarget: "firebase",
		},
		codeigniter: {
			dataLang: "langCODEIGNITER",
			dataTooltip: "codeIgniter",
			sourceIMG: "/assets/images/herramientas/codeigniter_logo.webp",
			altIMG: "CODEIGNITER logo",
			tooltipTarget: "codeIgniter",
		},
		discord: {
			dataLang: "langDISCORD",
			dataTooltip: "discord",
			sourceIMG: "/assets/images/herramientas/discord_logo.webp",
			altIMG: "DISCORD logo",
			tooltipTarget: "discord",
		},
		aws: {
			dataLang: "langAWS",
			dataTooltip: "aws",
			sourceIMG: "/assets/images/herramientas/aws_logo.webp",
			altIMG: "AWS logo",
			tooltipTarget: "aws",
		},
		ia: {
			dataLang: "langIA",
			dataTooltip: "ia",
			sourceIMG: "/assets/images/herramientas/AI_logo.webp",
			altIMG: "IA logo",
			tooltipTarget: "ia",
		},
		bootstrap: {
			dataLang: "langBOOTSTRAP",
			dataTooltip: "bootstrap",
			sourceIMG: "/assets/images/herramientas/bootstrap_logo.webp",
			altIMG: "BOOTSTRAP logo",
			tooltipTarget: "bootstrap",
		},
		ghidra: {
			dataLang: "langGHIDRA",
			dataTooltip: "ghidra",
			sourceIMG: "/assets/images/herramientas/ghidra_logo.webp",
			altIMG: "GHIDRA logo",
			tooltipTarget: "ghidra",
		},
	};
	/* HERRAMIENTAS [FIN] */

	/* CERTIFICADOS [INICIO] */
	static certificadosSection = {
		santaMaria: {
			id: "certInfSantaMaria",
			dataLangTitle: "langSantaMariaCertTitle",
			dataLangDesc: "langSantaMariaCertDesc",
			dataLangIcon: "langSantaMariaIcon",
			dataToolTip: "santaMariaCert",
			sourceIMG: "/assets/images/certificados/usm_estudios_uno.webp",
			altIMG: "USM certificado",
			sourceICON: "/assets/images/certificados/usm_logo.webp",
			altICON: "USM logo",
			tooltipTarget: "santaMariaCert",
		},
	};
	/* CERTIFICADOS [FIN] */

	/* ESTADO PROYECTOS [INICIO] */
	static proyectosState = {
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
	/* ESTADO PROYECTOS [FIN] */

	/* PROYECTOS [INICIO] */
	static proyectosSection = {
		kompry: {
			id: "projectKompry",
			state: "developing",
			title: "Kompry",
			dataLangDesc: "langKompryDesc",
			sourceIMG: "/assets/images/proyectos/soon.webp",
			altIMG: "Kompry logo",
			herramientas: ["html", "css", "js", "php", "laravel", "mysql"],
			sourceHerramientas: "/assets/images/herramientas/",
			sourceCodeLink: "undefined",
			privacy: "private",
		},
		mk9reborn: {
			id: "projectMK9Reborn",
			state: "developing",
			title: "MK9 REBORN",
			dataLangDesc: "langMK9Reborn",
			sourceIMG: "/assets/images/proyectos/mk9reborn.webp",
			altIMG: "MK9 Reborn logo",
			herramientas: ["php", "laravel", "mysql", "reverseING", "ghidra"],
			sourceHerramientas: "/assets/images/herramientas/",
			sourceCodeLink: "https://github.com/TheMarceloYT/appArtistasUsm_laravel",
			privacy: "private",
		},
		artium: {
			id: "projectArtium",
			state: "developing",
			title: "Artium",
			dataLangDesc: "langArtiumDesc",
			sourceIMG: "/assets/images/proyectos/artium_logo.webp",
			altIMG: "Artium logo",
			herramientas: ["html", "css", "js", "php", "laravel", "mysql"],
			sourceHerramientas: "/assets/images/herramientas/",
			sourceCodeLink: "https://github.com/TheMarceloYT/appArtistasUsm_laravel",
			privacy: "public",
		},
		globi: {
			id: "projectGlobi",
			state: "reinventing",
			title: "Globi",
			dataLangDesc: "langGlobiDesc",
			sourceIMG: "/assets/images/proyectos/globi_logo.webp",
			altIMG: "Globi logo",
			herramientas: ["dart", "flutter", "firebase"],
			sourceHerramientas: "/assets/images/herramientas/",
			sourceCodeLink: "https://github.com/TheMarceloYT/appEventosFlutter_flutter",
			privacy: "public",
		},
		autogestor: {
			id: "projectAutoGestor",
			state: "pending",
			title: "AutoGestor",
			dataLangDesc: "langAutoGestorDesc",
			sourceIMG: "/assets/images/proyectos/soon.webp",
			altIMG: "AutoGestor logo",
			herramientas: ["java", "mysql"],
			sourceHerramientas: "/assets/images/herramientas/",
			sourceCodeLink: "https://github.com/TheMarceloYT/appTallerDeVehiculos_NetBeans",
			privacy: "public",
		},
		taskflow: {
			id: "projectTaskFlow",
			state: "pending",
			title: "TaskFlow",
			dataLangDesc: "langTaskFlowDesc",
			sourceIMG: "/assets/images/proyectos/soon.webp",
			altIMG: "TaskFlow logo",
			herramientas: ["csharp", "puntoNET"],
			sourceHerramientas: "/assets/images/herramientas/",
			sourceCodeLink: "https://github.com/TheMarceloYT/appTareasPendientes_NET",
			privacy: "public",
		},
	};
	/* PROYECTOS [FIN] */

	/* FORM DE CONTACTO [INICIO] */
	static formContacto = {
		es: {
			source:
				"https://docs.google.com/forms/d/e/1FAIpQLSePV1iMSy2_qCPiw7d5QMkp1rthKm_SFnZ1yINntE-94yBe-A/viewform?embedded=true",
		},
		en: {
			source:
				"https://docs.google.com/forms/d/e/1FAIpQLSesNS_cnNNlcT-9ZGbnZFcZ2OL4c2f8LkPkfb4bdlPpHDkKgQ/viewform?embedded=true",
		},
	};
	/* FORM DE CONTACTO [FIN] */

	/* OPCIONES DE CONTACTO [INICIO] */
	static opcContacto = {
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
	/* OPCIONES DE CONTACTO [FIN] */
}
