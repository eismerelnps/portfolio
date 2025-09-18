/* empty css                               */
import { c as createComponent, m as maybeRenderHead, f as addAttribute, d as renderTemplate, e as createAstro, s as spreadAttributes, r as renderSlot, g as renderComponent, n as Fragment } from '../astro_D26Ozr8G.mjs';
import { $ as $$Badge, a as $$SocialPill, b as $$LinkedIn, c as $$Layout, d as $$SectionContainer } from './components_BrwNCvpP.mjs';

const $$AboutMe = createComponent(($$result, $$props, $$slots) => {
  const personalImageAlt = "Eismer Lobaina";
  return renderTemplate`${maybeRenderHead()}<article class="flex flex-col items-center justify-center gap-8 text-gray-700 dark:text-gray-300 md:flex-row"> <div class="[&>p]:mb-4 [&>p>strong]:text-yellow-500 dark:[&>p>strong]:text-yellow-100 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1"> <p class="[&strong]:text-orange-500"> <strong>Ingeniero de Software</strong> graduado de la UCI y
<strong>desarrollador web full stack</strong> con una trayectoria de 2 años en el
      desarrollo de aplicaciones web de impacto. Mi experiencia abarca el stack
      completo, desde el <strong>frontend</strong> (con React, Next.js y Tailwind CSS)
      hasta el <strong>backend</strong> (con Node.js, Express.js y Nest.js) y la base de datos
      (MongoDB). Me dedico a construir y optimizar productos que ya se encuentran en
      producción, demostrando mi capacidad para entregar valor de principio a fin.
</p> <!--<p class="[&strong]:text-orange-500">--> <!--  Me llamo <strong>Eismer Lobaina</strong>. Desde los 17 años comencé a--> <!--  interesarme por el mundo de la programación. Actualmente soy estudiante de <strong--> <!--    >Ingeniería de Software</strong--> <!--  >, Cuento con +1 año de experiencia en el desarrollo web full-stack y--> <!--  diseño desde que estuve involucrado con mi primer trabajo, Hoy estoy <strong--> <!--    >trabajando en el desarrollo de la plataforma--> <!--    <a target="_blank" class="underline" href="https://elchatcubano1.com.br"--> <!--      >ChatCubano</a--> <!--    ></strong--> <!--  > de conjunto a mi equipo de desarrollo.--> <!--</p>--> <!--<p>--> <!--  A lo largo de mi carrera ya he tenido la oportunidad de trabajar en una--> <!--  empresa de desarrollo de software como--> <!--  <strong>Desarrollador Frontend</strong>, asuminedo diferentes retos y--> <!--  contribuyendo al desarrollo de diferentes aplicaciones robustas, trabajando bajo enfoques ágiles en la metodología SCRUM --> <!--</p>--> </div> <img width="200" height="200" src="/graduation.png"${addAttribute(personalImageAlt, "alt")} class="order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20" style="object-position: 50% 50%"> </article> <!-- FRASES PROHIBIDAS EN VUESTRO PORTFOLIO

<p>
  Mi sueño es encontrar mi primer empleo en el mundo de la programación. Una empresa donde pueda seguir aprendiendo. ❌
</p>

<p>
  ❌ Apasionado de la programación desde chekitito. Me encantan los ordenadores y crear páginas web buenas y rápidas con la última tecnología.
</p>

<p>
  Trabajo bien en equipo. Siempre estoy aprendiendo cosas nuevas.
</p>

-------------------------------------

--------------------------------------

<p>
  ¡Soy Leo! Estudié Derecho Empresarial y, tras años ejerciendo, me pasé al mundo de la Programación. Desde entonces disfruto creando experiencias web para los usuarios.
</p>

<p>
  Entre mis éxitos destaco que durante el Grado Superior, ayudé a mis compañeros a aprender sobre TDD. Me encanta el testing, creo en su importancia, y me gusta compartir mi conocimiento sobre ello.
</p>

<p>
  Cuento con experiencia desarrollando aplicaciones móviles, y he creado una iniciativa llamada X para mezclar mis dos pasiones: la programación y el derecho. Ayudando a la sociedad a acceso a una defensa justa.
</p>

---------------------------------------

<p>Me llamo Sara, tengo 25 años y soy de Santiago, Chile 🇨🇱. Terminé mis estudios como Desarrolladora Web. Me encanta enfocarme en la parte del rendimiento, para ofrecer la mejora experiencia al usuario.</p>

<p>
  Colaboro en la organización del MeetUp local BeerJS donde reunimos a desarrolladores de Santiago para compartir conocimiento y experiencias. El año 2023 hicimos un total de 25 charlas con más de 2000 asistentes.
</p>

<p>
  Además de participar activamente en la comunidad, he participado en la Hackathon de Midudev quedando en 3er puesto con mi proyecto _Chatty_, donde usando IA podías interactuar con un PDF. ¡Échale un vistazo!
</p>

-->`;
}, "C:/Files/Work/ElonProds/portfolio/src/components/AboutMe.astro", void 0);

const $$Astro$h = createAstro("https://eismerlobaina.vercel.app/");
const $$Briefcase = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Briefcase;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path><path d="M12 12l0 .01"></path><path d="M3 13a20 20 0 0 0 18 0"></path></svg>`;
}, "C:/Files/Work/ElonProds/portfolio/src/components/icons/Briefcase.astro", void 0);

const $$Astro$g = createAstro("https://eismerlobaina.vercel.app/");
const $$Code = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Code;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 8l-4 4l4 4"></path><path d="M17 8l4 4l-4 4"></path><path d="M14 4l-4 16"></path></svg>`;
}, "C:/Files/Work/ElonProds/portfolio/src/components/icons/Code.astro", void 0);

const $$Astro$f = createAstro("https://eismerlobaina.vercel.app/");
const $$LinkInline = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$LinkInline;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} role="link" class="inline-flex items-center text-lg font-medium text-yellow-500 dark:text-yellow-200 dark:hover:text-yellow-300 hover:text-yellow-700"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Files/Work/ElonProds/portfolio/src/components/LinkInline.astro", void 0);

const $$Astro$e = createAstro("https://eismerlobaina.vercel.app/");
const $$ExperienceItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$ExperienceItem;
  const { title, company, description, link, date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]"> <div class="relative pb-12 md:col-span-2"> <div class="sticky top-0"> <span class="text-yellow-400 -left-[42px] absolute rounded-full text-5xl">&bull;</span> <h3 class="text-xl font-bold text-yellow-400">${title}</h3> <h4 class="font-semibold text-xl text-gray-600 dark:text-white">${company}</h4> <time class="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80">${date}</time> </div> </div> <div class="relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3"> ${description} ${link && renderTemplate`${renderComponent($$result, "LinkInline", $$LinkInline, { "href": link }, { "default": ($$result2) => renderTemplate`
Saber más${" "}<svg xmlns="http://www.w3.org/2000/svg" class="w-5 icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M9 6l6 6l-6 6"></path> ` })} </svg> ` })}`} </div> </div>`;
}, "C:/Files/Work/ElonProds/portfolio/src/components/ExperienceItem.astro", void 0);

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const EXPERIENCIE = [
    {
      date: "Actualmente...",
      title: "Desarrollador web fullstack",
      company: "Freelancer",
      description: "Como desarrollador full stack freelance, he llevado m\xFAltiples proyectos desde la idealizaci\xF3n hasta la puesta en producci\xF3n. Mi proyecto principal es InMas Soft, una aplicaci\xF3n de gesti\xF3n de inventarios que constru\xED desde cero, ha logrado una gran aceptaci\xF3n en el mercado, con m\xE1s de 10 clientes puntuales en menos de 4 meses. Mi experiencia tambi\xE9n incluye el desarrollo de aplicaciones como MeRewards, GestCad y ChatCubano, as\xED como la creaci\xF3n de automatizaciones, landing pages y el mantenimiento de diversas plataformas web.",
      link: "https://inmas.vercel.app"
    },
    {
      date: "Octubre, 2023",
      title: "Desarrollador web frontend",
      company: "Avangenio SURL",
      description: "Como pasante, me integr\xE9 a un equipo de desarrollo para trabajar en proyectos reales. Fui responsable de la maquetaci\xF3n y la optimizaci\xF3n de c\xF3digo, adem\xE1s de la integraci\xF3n de componentes. Esta experiencia me ayud\xF3 a desarrollar un enfoque colaborativo y a ganar experiencia en la creaci\xF3n de aplicaciones web robustas.",
      link: "https://avangenio.com/"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<ol class="relative mt-16"> ${EXPERIENCIE.map((experiencie) => renderTemplate`<li class=""> ${renderComponent($$result, "ExperienceItem", $$ExperienceItem, { ...experiencie })} </li>`)} </ol>`;
}, "C:/Files/Work/ElonProds/portfolio/src/components/Experience.astro", void 0);

const $$Astro$d = createAstro("https://eismerlobaina.vercel.app/");
const $$ProfileCheck = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$ProfileCheck;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path><path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path><path d="M15 19l2 2l4 -4"></path></svg>`;
}, "C:/Files/Work/ElonProds/portfolio/src/components/icons/ProfileCheck.astro", void 0);

const $$Astro$c = createAstro("https://eismerlobaina.vercel.app/");
const $$GitHub = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$GitHub;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>`;
}, "C:/Files/Work/ElonProds/portfolio/src/components/icons/GitHub.astro", void 0);

const $$Astro$b = createAstro("https://eismerlobaina.vercel.app/");
const $$NextJS = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$NextJS;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="256" height="256" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"> <defs> <linearGradient id="c" x1="55.633%" x2="83.228%" y1="56.385%" y2="96.08%"> <stop offset="0%" stop-color="#FFF"></stop> <stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop> </linearGradient> <linearGradient id="d" x1="50%" x2="49.953%" y1="0%" y2="73.438%"> <stop offset="0%" stop-color="#FFF"></stop> <stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop> </linearGradient> <circle id="a" cx="128" cy="128" r="128"></circle> </defs> <mask id="b" fill="#fff"> <use xlink:href="#a"></use> </mask> <g mask="url(#b)"> <circle cx="128" cy="128" r="128"></circle> <path fill="url(#c)" d="M212.634 224.028 98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128.433 128.433 0 0 0 13.524-10.418Z"></path> <path fill="url(#d)" d="M163.556 76.8h17.067v102.4h-17.067z"></path> </g> </svg>`;
}, "C:/Files/Work/ElonProds/portfolio/src/components/icons/NextJS.astro", void 0);

const $$Astro$a = createAstro("https://eismerlobaina.vercel.app/");
const $$Tailwind = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Tailwind;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33"><g clip-path="url(#a)"><path fill="#38bdf8" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h54v32.4H0z"></path></clipPath></defs></svg>`;
}, "C:/Files/Work/ElonProds/portfolio/src/components/icons/Tailwind.astro", void 0);

const $$Astro$9 = createAstro("https://eismerlobaina.vercel.app/");
const $$Typescript = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Typescript;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="800px" height="800px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>Typescript</title><path d="M23.827,8.243A4.424,4.424,0,0,1,26.05,9.524a5.853,5.853,0,0,1,.852,1.143c.011.045-1.534,1.083-2.471,1.662-.034.023-.169-.124-.322-.35a2.014,2.014,0,0,0-1.67-1c-1.077-.074-1.771.49-1.766,1.433a1.3,1.3,0,0,0,.153.666c.237.49.677.784,2.059,1.383,2.544,1.095,3.636,1.817,4.31,2.843a5.158,5.158,0,0,1,.416,4.333,4.764,4.764,0,0,1-3.932,2.815,10.9,10.9,0,0,1-2.708-.028,6.531,6.531,0,0,1-3.616-1.884,6.278,6.278,0,0,1-.926-1.371,2.655,2.655,0,0,1,.327-.208c.158-.09.756-.434,1.32-.761L19.1,19.6l.214.312a4.771,4.771,0,0,0,1.35,1.292,3.3,3.3,0,0,0,3.458-.175,1.545,1.545,0,0,0,.2-1.974c-.276-.395-.84-.727-2.443-1.422a8.8,8.8,0,0,1-3.349-2.055,4.687,4.687,0,0,1-.976-1.777,7.116,7.116,0,0,1-.062-2.268,4.332,4.332,0,0,1,3.644-3.374A9,9,0,0,1,23.827,8.243ZM15.484,9.726l.011,1.454h-4.63V24.328H7.6V11.183H2.97V9.755A13.986,13.986,0,0,1,3.01,8.289c.017-.023,2.832-.034,6.245-.028l6.211.017Z" style="fill:#007acc"></path></svg>`;
}, "C:/Files/Work/ElonProds/portfolio/src/components/icons/Typescript.astro", void 0);

const $$Astro$8 = createAstro("https://eismerlobaina.vercel.app/");
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Link;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`;
}, "C:/Files/Work/ElonProds/portfolio/src/components/icons/Link.astro", void 0);

const $$Astro$7 = createAstro("https://eismerlobaina.vercel.app/");
const $$LinkButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$LinkButton;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} role="link" class="inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Files/Work/ElonProds/portfolio/src/components/LinkButton.astro", void 0);

const $$Astro$6 = createAstro("https://eismerlobaina.vercel.app/");
const $$NodeJs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$NodeJs;
  return renderTemplate`<!--?xml version="1.0" encoding="utf-8"?--><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="800px" height="800px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M17.1725 2.29872C16.4627 1.89953 15.5373 1.90132 14.8269 2.29872C11.2689 4.26227 7.71082 6.22641 4.15216 8.18906C3.45969 8.55335 2.99264 9.29698 3.00009 10.0688V21.9328C2.99509 22.7197 3.48622 23.4705 4.19655 23.8298C5.21871 24.3736 6.2118 24.9726 7.25244 25.4802C8.45451 26.0709 9.95843 26.2015 11.1752 25.5855C12.1629 25.075 12.6016 23.9395 12.6003 22.896C12.6083 18.9806 12.6016 15.0651 12.6034 11.1496C12.6269 10.9756 12.4962 10.7896 12.3064 10.7938C11.8517 10.7866 11.3964 10.7896 10.9417 10.7926C10.7699 10.7764 10.6022 10.9191 10.6152 11.0918C10.6091 14.982 10.6164 18.8734 10.6115 22.7642C10.6214 23.3024 10.2578 23.8196 9.73913 24.0014C8.5412 24.4213 5.12198 22.2012 5.12198 22.2012C4.9965 22.1431 4.91682 22.007 4.92912 21.8718C4.92912 17.9576 4.92973 14.0433 4.92912 10.1297C4.91187 9.97191 5.00912 9.8298 5.15402 9.76538C8.70033 7.8134 12.2448 5.85654 15.7911 3.90336C15.9143 3.82115 16.086 3.8214 16.2089 3.90396C19.7552 5.85654 23.3003 7.81161 26.8472 9.76368C26.9926 9.828 27.0857 9.9725 27.0709 10.1297C27.0703 14.0433 27.0721 17.9576 27.0697 21.8713C27.0802 22.0098 27.0086 22.144 26.8793 22.2048C23.3661 24.1462 19.8129 26.025 16.3315 28.0228C16.1796 28.1099 16.0075 28.2086 15.8373 28.1126C14.9218 27.6062 14.0174 27.0801 13.1049 26.5688C13.0057 26.5069 12.8794 26.4803 12.7759 26.5496C12.3668 26.7652 11.982 26.9398 11.5122 27.1258C10.8524 27.387 10.9578 27.4938 11.5529 27.8405C12.62 28.4444 13.6889 29.0459 14.756 29.6504C15.4585 30.0888 16.4024 30.12 17.1275 29.7149C20.6861 27.7538 24.2436 25.7904 27.8029 23.8293C28.5113 23.468 29.0049 22.7202 28.9999 21.9327V10.0688C29.0068 9.31264 28.5576 8.58227 27.886 8.21259C24.3156 6.23947 20.7435 4.27064 17.1725 2.29872Z" fill="#8CC84B"></path> <path d="M22.5419 11.2062C21.1452 10.459 19.4836 10.4192 17.9315 10.5169C16.8102 10.6277 15.6309 10.9371 14.814 11.7409C13.9761 12.5489 13.7937 13.8537 14.1917 14.9085C14.4769 15.6539 15.1948 16.1386 15.9372 16.395C16.8935 16.7326 17.8979 16.837 18.9026 16.9414C19.819 17.0366 20.7357 17.1319 21.6165 17.4042C21.9763 17.5234 22.3953 17.7058 22.5055 18.0973C22.6073 18.5609 22.4957 19.0998 22.1193 19.4219C20.9237 20.3682 17.5979 20.2232 16.4166 19.4784C15.939 19.1611 15.7332 18.5994 15.6495 18.0641C15.6402 17.8973 15.5059 17.7443 15.3248 17.757C14.8713 17.7516 14.4178 17.7528 13.9643 17.7564C13.8061 17.7431 13.6416 17.8557 13.6329 18.0172C13.5397 20.4689 15.7914 21.5377 17.9039 21.773C19.1108 21.888 20.3442 21.8814 21.5327 21.6224C22.4261 21.419 23.3219 21.0444 23.9369 20.3563C24.6953 19.52 24.8444 18.2749 24.5043 17.2332C24.2443 16.4559 23.5012 15.9573 22.7416 15.7008C21.7086 15.3466 20.4844 15.1562 19.5488 15.0671C18.1889 14.9376 16.5729 14.9905 16.188 14.0969C16.0345 13.629 16.1651 13.048 16.5951 12.7602C17.7328 11.9885 20.0483 12.091 21.2265 12.6675C21.7675 12.9384 22.081 13.4948 22.2104 14.0565C22.2344 14.2215 22.3454 14.3937 22.5364 14.3865C22.9868 14.3955 23.4372 14.3889 23.8875 14.3895C24.0422 14.4003 24.2116 14.313 24.2418 14.1546C24.2227 12.9806 23.6232 11.7788 22.5419 11.2062Z" fill="#8CC84B"></path> </svg>`;
}, "C:/Files/Work/ElonProds/portfolio/src/components/icons/NodeJs.astro", void 0);

const $$Astro$5 = createAstro("https://eismerlobaina.vercel.app/");
const $$SocketIo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SocketIo;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> <path d="M15.917 0.021c-1.339 0.005-2.672 0.172-3.969 0.505-6.24 1.552-11.193 7.203-11.828 13.613-0.787 6.063 2.281 12.381 7.525 15.511 5.152 3.224 12.125 3.095 17.167-0.296 4.532-2.943 7.349-8.303 7.183-13.715-0.077-5.353-3.083-10.557-7.683-13.307-2.505-1.547-5.452-2.323-8.395-2.312zM15.828 2.281c6.593-0.011 13.052 5.088 13.713 11.901 1.261 7.547-5.005 15.219-12.651 15.443-7.271 0.724-14.303-5.443-14.511-12.745-0.541-5.911 3.36-11.781 8.932-13.735 1.437-0.572 2.969-0.864 4.516-0.859zM22.62 6.584c-3.584 2.78-7.016 5.744-10.521 8.609 1.604 0.020 3.219 0.020 4.828 0.009 1.88-2.885 3.813-5.733 5.693-8.619zM15.068 16.787c-1.88 2.891-3.817 5.744-5.699 8.635 3.595-2.776 7.011-5.76 10.537-8.609-1.615-0.020-3.229-0.025-4.839-0.025z"></path> </svg>`;
}, "C:/Files/Work/ElonProds/portfolio/src/components/icons/SocketIo.astro", void 0);

const $$Astro$4 = createAstro("https://eismerlobaina.vercel.app/");
const $$MongoDB = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$MongoDB;
  return renderTemplate`<!--?xml version="1.0" encoding="utf-8"?--><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="800px" height="800px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient id="a" x1="-645.732" y1="839.188" x2="-654.59" y2="839.25" gradientTransform="matrix(-0.977, -0.323, -0.29, 0.877, -375.944, -928.287)" gradientUnits="userSpaceOnUse"><stop offset="0.231" stop-color="#999875"></stop><stop offset="0.563" stop-color="#9b9977"></stop><stop offset="0.683" stop-color="#a09f7e"></stop><stop offset="0.768" stop-color="#a9a889"></stop><stop offset="0.837" stop-color="#b7b69a"></stop><stop offset="0.896" stop-color="#c9c7b0"></stop><stop offset="0.948" stop-color="#deddcb"></stop><stop offset="0.994" stop-color="#f8f6eb"></stop><stop offset="1" stop-color="#fbf9ef"></stop></linearGradient><linearGradient id="b" x1="-644.287" y1="823.405" x2="-657.028" y2="845.476" gradientTransform="matrix(-0.977, -0.323, -0.29, 0.877, -375.944, -928.287)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#48a547"></stop><stop offset="1" stop-color="#3f9143"></stop></linearGradient><linearGradient id="c" x1="-643.386" y1="839.485" x2="-652.418" y2="833.417" gradientTransform="matrix(-0.977, -0.323, -0.29, 0.877, -375.944, -928.287)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#41a247"></stop><stop offset="0.352" stop-color="#4ba74b"></stop><stop offset="0.956" stop-color="#67b554"></stop><stop offset="1" stop-color="#69b655"></stop></linearGradient></defs><title>file_type_mongo</title><path d="M16.62,30l-.751-.249s.1-3.8-1.275-4.067c-.9-1.048.133-44.741,3.423-.149a2.712,2.712,0,0,0-1.333,1.523A14.1,14.1,0,0,0,16.62,30Z" style="fill:url(#a)"></path><path d="M17.026,26.329a13.223,13.223,0,0,0,5-13.225C20.556,6.619,17.075,4.487,16.7,3.673a9.792,9.792,0,0,1-.825-1.6l.277,18.069S15.578,25.664,17.026,26.329Z" style="fill:url(#b)"></path><path d="M15.487,26.569S9.366,22.4,9.72,15.025A15.54,15.54,0,0,1,15.239,3.377,1.725,1.725,0,0,0,15.846,2c.381.82.319,12.243.359,13.579C16.36,20.776,15.916,25.588,15.487,26.569Z" style="fill:url(#c)"></path></svg>`;
}, "C:/Files/Work/ElonProds/portfolio/src/components/icons/MongoDB.astro", void 0);

const $$Astro$3 = createAstro("https://eismerlobaina.vercel.app/");
const $$Redux = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Redux;
  return renderTemplate`<!--?xml version="1.0" encoding="utf-8"?--><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} fill="#000000" width="800px" height="800px" viewBox="0 -0.5 25 25" xmlns="http://www.w3.org/2000/svg"><path d="m17.54 16.745c.893-.089 1.585-.837 1.585-1.746 0-.036-.001-.072-.003-.108v.005c-.047-.963-.834-1.726-1.801-1.736h-.065c-.968.036-1.739.829-1.739 1.802 0 .022 0 .044.001.067v-.003c.026.473.22.897.522 1.217l-.001-.001c-1.187 2.214-3.001 3.96-5.204 5.031l-.069.03c-1.192.66-2.614 1.048-4.127 1.048-.383 0-.761-.025-1.13-.073l.044.005c-1.361-.131-2.533-.844-3.277-1.884l-.009-.014c-.537-.755-.858-1.695-.858-2.711 0-.837.218-1.623.601-2.305l-.012.024c.547-1.036 1.293-1.898 2.194-2.562l.021-.014c-.171-.453-.324-.999-.432-1.56l-.011-.066c-4.683 3.349-4.208 7.93-2.786 10.095 1.243 1.586 3.159 2.596 5.311 2.596.098 0 .195-.002.292-.006h-.014c.035.001.077.001.119.001.647 0 1.276-.075 1.88-.216l-.056.011c4.008-.734 7.29-3.317 8.974-6.814l.032-.074z"></path><path d="m23.18 12.799c-2.403-2.74-5.91-4.46-9.82-4.46-.119 0-.239.002-.357.005h.018-.538c-.283-.567-.86-.95-1.526-.95-.02 0-.039 0-.059.001h.003-.039c-.966.014-1.744.8-1.744 1.768 0 .029.001.057.002.085v-.004c.045.963.832 1.728 1.8 1.738h.079c.714-.028 1.317-.472 1.577-1.094l.004-.012h.585c2.554.003 4.924.787 6.884 2.128l-.042-.027c1.531.98 2.713 2.388 3.392 4.055l.021.058c.26.542.411 1.178.411 1.849 0 .71-.169 1.38-.47 1.972l.011-.025c-.777 1.586-2.379 2.658-4.231 2.658-.068 0-.135-.001-.202-.004h.01c-1.137-.024-2.21-.274-3.183-.707l.052.021c-.379.316-1.011.836-1.47 1.153 1.214.596 2.638.959 4.143.994h.012c.059.002.128.003.197.003 2.552 0 4.787-1.355 6.026-3.384l.018-.031c.342-.811.54-1.753.54-2.742 0-1.98-.796-3.774-2.085-5.079l.001.001-.015.032z"></path><path d="m6.844 17.316c.044.964.833 1.731 1.803 1.738h.064c.968-.033 1.741-.827 1.741-1.8 0-.99-.799-1.794-1.788-1.801h-.067c-.01-.001-.022-.001-.033-.001-.073 0-.143.011-.209.033l.005-.001c-1.07-1.741-1.703-3.85-1.703-6.107 0-.364.016-.724.049-1.079l-.003.046c.091-1.906.791-3.633 1.907-5.007l-.012.016c.991-1.071 2.387-1.753 3.944-1.803h.009c3.412-.064 4.835 4.188 4.945 5.878l1.582.473c-.368-5.181-3.59-7.901-6.671-7.901-3.132.163-5.731 2.27-6.622 5.131l-.014.052c-.438 1.262-.692 2.716-.692 4.229 0 2.588.741 5.003 2.021 7.044l-.032-.055c-.143.216-.228.481-.228.766 0 .053.003.105.009.156l-.001-.006z"></path></svg>`;
}, "C:/Files/Work/ElonProds/portfolio/src/components/icons/Redux.astro", void 0);

const $$Astro$2 = createAstro("https://eismerlobaina.vercel.app/");
const $$NestJs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$NestJs;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#DF234F" d="M75.4.3c-.9 0-1.8.2-2.6.5 1.7 1.1 2.6 2.6 3.1 4.3 0 .2.1.4.1.6 0 .2.1.4.1.6.1 2.9-.8 3.3-1.4 5-1 2.2-.7 4.6.5 6.5.1.2.2.5.4.7-1.3-8.4 5.7-9.6 7-12.2.1-2.3-1.8-3.8-3.3-4.9C77.8.5 76.6.3 75.4.3zm10.5 1.8c-.1.8 0 .6-.1 1 0 .3 0 .6-.1.9-.1.3-.1.5-.2.8-.1.3-.2.5-.3.8-.1.2-.2.4-.3.7-.1.1-.2.3-.3.4-.1.1-.1.2-.2.3-.2.2-.3.5-.5.7l-.6.6c-.2.2-.4.4-.6.5-.7.5-1.5.9-2.2 1.4-.2.2-.5.3-.7.5-.2.2-.4.3-.6.5l-.6.6c-.2.2-.4.4-.5.7-.2.2-.3.5-.5.7-.1.3-.2.5-.4.8-.1.3-.2.5-.3.8-.1.3-.2.6-.2.8 0 .1 0 .3-.1.4 0 .1 0 .3-.1.4v1.4c0 .3 0 .5.1.8 0 .3.1.5.2.8.1.3.2.5.3.8.1.2.2.3.2.5l-7.6-2.9c-1.3-.4-2.5-.7-3.8-1-.7-.2-1.4-.3-2.1-.5-2-.4-4-.7-6-.9h-.2c-2-.2-3.9-.3-5.9-.3-1.5 0-2.9.1-4.3.2-2 .1-4 .4-6 .7l-1.5.3c-1 .2-2 .4-3 .7-.5.1-1 .3-1.5.4-.5.2-1 .4-1.4.6-.4.2-.7.3-1.1.5-.1 0-.1 0-.2.1-.3.2-.6.3-.9.5-.1 0-.2.1-.2.1-.4.2-.7.4-1 .5-.2.1-.5.2-.7.3-.1.1-.2.1-.3.2-.3.2-.6.3-.9.5-.3.2-.6.3-.8.5-.2.2-.5.3-.7.5 0 0-.1 0-.1.1-.2.1-.4.3-.6.5l-.1.1c-.2.1-.3.3-.5.4-.1 0-.1.1-.2.1-.2.1-.3.3-.5.4 0 .1-.1.1-.1.1l-.6.6-.1.1-.6.6s0 .1-.1.1l-.5.5c-.1.1-.2.1-.2.2l-.6.6c0 .1-.1.1-.1.2l-.8.8-.1.1c-.5.6-1.1 1.1-1.7 1.6-.6.5-1.2 1-1.9 1.5s-1.3.9-2 1.3-1.4.7-2.1 1c-.7.3-1.4.6-2.1.8-1.4.3-2.8.9-4 1 0-.5-.3-.4-.6-.4-.3.1-.6.1-.8.2-.3.1-.5.2-.8.3-.3.1-.5.2-.8.4-.2.2-.5.3-.7.5-.2.2-.5.4-.7.6-.2.2-.5.4-.7.6-.2.2-.4.4-.6.7-.2.3-.4.5-.5.8-.2.2-.3.5-.5.8-.1.3-.3.6-.4.9l-.3.9c-.1.3-.1.5-.2.8v.1c-.1.3-.1.7-.1.9.1-.1.1.1.1.3v.4c0 .2.1.4.1.6.1.2.1.4.2.6.1.2.2.4.4.6.1.2.3.4.4.6.2.2.4.4.6.5.2.2.4.4.6.5.8.7 1 .9 2 1.5.2.1.3.2.5.3h.1v.2c0 .3.1.5.2.8.1.3.2.6.3.8l.3.6c0 .1.1.1.1.2.1.3.3.5.4.7.2.2.3.5.5.7l.6.6.6.6H8c.2.2.4.3.6.5.2.2.5.3.7.4.2.1.5.3.8.4.2.1.4.2.7.2 0 0 .1 0 .1.1.1 0 .3.1.4.1-.1 1.8-.1 3.5.1 4.1.3.7 1.8-1.4 3.2-3.7-.2 2.3-.3 5 0 5.8.4.8 2.3-1.8 4.1-4.6 23.4-5.4 44.8 10.8 47.1 33.7-.4-3.6-4.8-5.6-6.9-5.1-1 2.4-2.7 5.6-5.4 7.5.2-2.2.1-4.4-.3-6.6-.7 3-2.1 5.9-4.1 8.3-3.1.2-6.3-1.3-7.9-3.6-.1-.1-.2-.3-.3-.4-.1-.2-.2-.5-.3-.7-.1-.2-.2-.5-.2-.7v-.7-.5c0-.2.1-.5.2-.7.1-.2.1-.5.2-.7.1-.2.2-.5.4-.7.6-1.6.6-2.9-.5-3.6l-.6-.3c-.1 0-.3-.1-.4-.1-.1 0-.2-.1-.3-.1-.2-.1-.5-.1-.7-.2-.2-.1-.5-.1-.7-.1-.2 0-.5-.1-.7-.1h-.5c-.3 0-.5 0-.7.1-.2 0-.5.1-.7.1-.2.1-.5.1-.7.2-.2.1-.4.2-.7.3l-.6.3c-7.7 5-3.1 16.8 2.1 20.2-2 .4-4 .8-4.6 1.2l-.1.1c1.4.9 2.9 1.6 4.5 2.2 2.1.7 4.4 1.3 5.4 1.6 2.7.6 5.5.8 8.3.6 14.6-1 26.6-12.2 28.8-26.8.1.3.1.6.2.9.1.6.2 1.2.3 1.9.1.3.1.6.1.9v.1c0 .3.1.6.1.9 0 .4.1.7.1 1.1V91.6c0 .3-.1.5-.1.8v.3c0 .3-.1.6-.1 1-.1.3-.1.6-.2.9v.1c-.1.3-.1.6-.2.9v.1c-.1.3-.1.6-.2.9v.1l-.3.9v.1c-.1.3-.2.7-.3 1-.1.3-.2.6-.4 1-.1.3-.2.7-.4 1-.1.3-.3.6-.4 1-.1.3-.3.6-.4.9 0 .1-.1.2-.1.2s0 .1-.1.1c-2.1 4.3-5.3 8.1-9.3 11.1-.3.2-.5.4-.8.6-.1.1-.2.1-.2.2-.2.2-.5.3-.7.5l.1.2c.5-.1.9-.1 1.4-.2.9-.1 1.7-.3 2.6-.5.2 0 .5-.1.7-.2.2 0 .3-.1.5-.1s.5-.1.7-.1c.2-.1.4-.1.6-.2 3.3-.8 6.5-1.9 9.6-3.2-5.3 7.2-12.3 13-20.5 16.8 3.8-.3 7.6-.9 11.3-2 13.3-3.9 24.5-12.9 31.2-25-1.4 7.6-4.4 14.9-8.9 21.3 3.2-2.1 6.1-4.6 8.8-7.3 7.4-7.7 12.3-17.6 13.9-28.1 1.1 5.2 1.5 10.6 1 15.9 23.9-33.3 2-67.8-7.2-76.9 0-.1-.1-.1-.1-.2v0c0 .4 0 .8-.1 1.2-.1.8-.2 1.5-.3 2.2-.2.7-.4 1.5-.6 2.2-.2.7-.5 1.4-.8 2.1-.3.7-.6 1.4-1 2-.4.6-.8 1.3-1.2 1.9-.4.6-.9 1.2-1.4 1.8-.5.6-1 1.1-1.6 1.7-.3.3-.6.6-1 .8-.3.2-.5.4-.8.7-.6.5-1.2.9-1.9 1.3-.6.4-1.3.8-2 1.1l-2.1.9c-.7.3-1.4.5-2.1.7-.7.2-1.5.4-2.2.5-.8.1-1.5.2-2.2.3-.5 0-1.1.1-1.6.1-.8 0-1.5-.1-2.2-.1-.8-.1-1.5-.2-2.2-.3-.8-.1-1.5-.3-2.2-.6.7-.1 1.5-.1 2.2-.3.8-.1 1.5-.3 2.2-.5.7-.2 1.5-.4 2.1-.7l2.1-.9c.7-.3 1.3-.7 2-1.1.6-.4 1.3-.9 1.9-1.3.6-.5 1.2-1 1.7-1.5.6-.5 1.1-1.1 1.6-1.6.5-.6 1-1.2 1.4-1.8.1-.1.1-.2.2-.3.3-.5.7-1.1 1-1.6.4-.7.7-1.3 1-2 .3-.7.6-1.4.8-2.1l.6-2.1c.1-.8.3-1.5.3-2.2.1-.8.1-1.5.1-2.2 0-.5 0-1.1-.1-1.6-.1-.8-.2-1.5-.3-2.2-.1-.8-.3-1.5-.5-2.2-.2-.7-.5-1.4-.7-2.1-.3-.7-.6-1.4-.9-2-.4-.7-.7-1.3-1.1-2-.4-.6-.9-1.2-1.3-1.8-.5-.6-1-1.1-1.5-1.7-.3-.3-.6-.6-.9-.8-1.5-1.2-3-2.2-4.6-3.2-.2-.1-.4-.2-.7-.3-1.3-1.1-2.3-1.4-3.3-1.8z"></path></svg>`;
}, "C:/Files/Work/ElonProds/portfolio/src/components/icons/NestJs.astro", void 0);

const $$Astro$1 = createAstro("https://eismerlobaina.vercel.app/");
const $$Express = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Express;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z"></path></svg>`;
}, "C:/Files/Work/ElonProds/portfolio/src/components/icons/Express.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const TAGS = {
    NEXT: {
      name: "Nest.js",
      class: "bg-black text-white",
      icon: $$NextJS
    },
    NEST: {
      name: "Next.js",
      class: "bg-black text-white",
      icon: $$NestJs
    },
    TAILWIND: {
      name: "Tailwind CSS",
      class: "bg-[#003159] text-white",
      icon: $$Tailwind
    },
    TYPESCRIPT: {
      name: "Typescript",
      class: "bg-blue-500/20 dark:text-white text-black",
      icon: $$Typescript
    },
    SOCKET_IO: {
      name: "Socket IO",
      class: "bg-white text-black",
      icon: $$SocketIo
    },
    NODE_JS: {
      name: "Node Js",
      class: "bg-green-500/50  dark:text-white text-black",
      icon: $$NodeJs
    },
    MONGO_DB: {
      name: "Mongo DB",
      class: "bg-green-500/20 dark:text-white text-black",
      icon: $$MongoDB
    },
    EXPRESS_JS: {
      name: "Express Js",
      class: "bg-white text-black",
      icon: $$Express
    },
    REDUX: {
      name: "Redux",
      class: "bg-purple-500 text-black",
      icon: $$Redux
    },
    JAVASCRIPT: {
      name: "Javasript",
      class: "bg-yellow-500 text-black",
      icon: $$Redux
    }
  };
  const PROJECTS = [
    {
      title: "InMas - Inventory Management System",
      description: "InMas Soft es una aplicaci\xF3n web de gesti\xF3n de inventarios y negocios que lider\xE9 y desarroll\xE9 desde cero. El software, dise\xF1ado para optimizar operaciones en Cuba, incluye m\xF3dulos de TPV-POS, tiendas online, cat\xE1logos digitales y automatizaci\xF3n de procesos. Mi objetivo fue construir un un sistema para la gesti\xF3n de mi propio negocio, y ha tenido un impacto positivo en el mercado privado cubano, logrando la confianza de m\xE1s de 10 clientes.",
      link: "https://inmas.vercel.app",
      github: "",
      image: "/projects/inmas.png",
      tags: [
        TAGS.NEXT,
        TAGS.TYPESCRIPT,
        TAGS.TAILWIND,
        TAGS.NODE_JS,
        TAGS.MONGO_DB,
        TAGS.REDUX,
        TAGS.NEST,
        TAGS.EXPRESS_JS
      ]
    },
    {
      title: "MeRewards - CashBack System",
      description: "MeRewards es una plataforma de fidelizaci\xF3n de clientes y cashback desarrollada de manera freelance. La aplicaci\xF3n web multi-secci\xF3n ofrece a los negocios un sistema de recompensas con promociones, descuentos y cashback. El proyecto cuenta con roles de usuario para administradores, cajeros y clientes, lo que demuestra mi capacidad para crear soluciones robustas y completas.",
      link: "https://me-rewards.com/home",
      github: "",
      image: "/projects/merewards.png",
      tags: [
        TAGS.NEXT,
        TAGS.TYPESCRIPT,
        TAGS.TAILWIND,
        TAGS.REDUX,
        TAGS.NEST
      ]
    },
    {
      title: "GestCad - Candidate Magnament System",
      description: "El sistema de gesti\xF3n de candidatos de una empresa de desarrollo de software est\xE1 basado en 4 m\xF3dulos: para el candidato, para el administrador, para los proveedores y para los clientes.",
      link: "https://gestcad-front.vercel.app/",
      github: "",
      image: "/projects/gestcad.png",
      tags: [
        TAGS.NEXT,
        TAGS.TYPESCRIPT,
        TAGS.TAILWIND,
        TAGS.SOCKET_IO,
        TAGS.MONGO_DB,
        TAGS.REDUX,
        TAGS.NEST
      ]
    },
    {
      title: "Chat Cubano - A chat app inpired on telegram",
      description: "Una aplicaci\xF3n web de mensajer\xEDa instant\xE1nea, dise\xF1ada para cubanos, se encuentra actualmente en desarrollo. El objetivo es aprovechar las fortalezas de Telegram y, a la vez, implementar el resto de las necesidades del cliente. Creada desde cero por m\xED con Next.js, React, Tailwind CSS, Redux, Redux Toolkit, Node.js, Socket.IO, Express.js y MongoDB.",
      link: "https://elchatcubano1.com.br/",
      github: "",
      image: "/projects/chatcubano.png",
      tags: [
        TAGS.NEXT,
        TAGS.TYPESCRIPT,
        TAGS.TAILWIND,
        TAGS.NODE_JS,
        TAGS.SOCKET_IO,
        TAGS.MONGO_DB,
        TAGS.REDUX
      ]
    },
    {
      title: "School schedule - A school schedule for your educational center",
      description: "Un horario escolar en desarrollo que cuenta con 3 m\xF3dulos: para el estudiante, para el profesor y para el administrador. Con este sistema puedes crear y gestionar escuelas, los horarios de clase y los profesores que las impartir\xE1n.",
      link: "https://school-hours.vercel.app/es/week",
      github: "",
      image: "/projects/schedule.png",
      tags: [
        TAGS.NEXT,
        TAGS.TYPESCRIPT,
        TAGS.TAILWIND,
        TAGS.NODE_JS,
        TAGS.SOCKET_IO,
        TAGS.MONGO_DB,
        TAGS.REDUX
      ]
    },
    {
      title: "MySpace - The future IT Social Media",
      description: "Plataforma en desarrollo. Pensada para construir la futura red social de la industria tecnol\xF3ca. Creada desde cero con Next.js, React, Tailwind CSS, Redux, Node JS, Express JS y Mongo DB",
      link: "https://myspacereloaded.vercel.app/me",
      image: "/projects/myspace.png",
      tags: [
        TAGS.NEXT,
        TAGS.TAILWIND,
        TAGS.TYPESCRIPT,
        TAGS.NODE_JS,
        TAGS.MONGO_DB,
        TAGS.REDUX
      ]
    },
    {
      title: "Men\xFA Digital - Men\xFA digital para restaurantes, bares o negocios gastron\xF3micos",
      description: "Aplicaci\xF3n web que permite crear un men\xFA digital para tu restaurante, bar, cafeter\xEDa o negocio, podr\xE1s gestionar, crear, editar, borrar, ocultar, as\xED como filtrar cualquier producto. Brindale un mejor servicio a tus clientes con este men\xFA digital. POV: Esta es una instancia de desarrollo, por lo que puede notar algunas demoras en la respuesta del servidor.",
      link: "https://gatonegro.vercel.app/menu",
      image: "/projects/digitalmenu.png",
      tags: [
        TAGS.NEXT,
        TAGS.TAILWIND,
        TAGS.JAVASCRIPT,
        TAGS.MONGO_DB,
        TAGS.NODE_JS,
        TAGS.EXPRESS_JS
      ]
    },
    {
      title: "Caribbean Payways - Maquetaci\xF3n y dise\xF1o",
      description: "Maquetaci\xF3n de la p\xE1gina de lista de espera del servicio Caribbean Payways como parte de un contrato freelancer.",
      link: "https://caribbean-pay-ways.vercel.app/",
      image: "/projects/caribbeanpayways.png",
      tags: [TAGS.NEXT, TAGS.TAILWIND]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-y-16"> ${PROJECTS.map(({ image, title, description, tags, link, github }) => renderTemplate`<article class="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0"> <div class="w-full md:w-1/2"> <div class="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50"> <img${addAttribute(title, "alt")} class="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105" loading="lazy"${addAttribute(image, "src")}> </div> </div> <div class="w-full md:w-1/2 md:max-w-lg"> <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-100"> ${title} </h3> <div class="flex flex-wrap mt-2"> <ul class="flex flex-row flex-wrap mb-2 gap-2"> ${tags.map((tag) => renderTemplate`<li> <span${addAttribute(`flex  gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2 `, "class")}> ${renderComponent($$result, "tag.icon", tag.icon, { "class": "size-4" })} ${tag.name} </span> </li>`)} </ul> <div class="mt-2 text-gray-700 dark:text-gray-400"> ${description} </div> <footer class="flex items-end justify-start mt-4 gap-x-4"> ${github && renderTemplate`${renderComponent($$result, "LinkButton", $$LinkButton, { "href": github }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GitHub", $$GitHub, { "class": "size-6" })}
Code
` })}`} ${link && renderTemplate`${renderComponent($$result, "LinkButton", $$LinkButton, { "href": link }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Link", $$Link, { "class": "size-4" })}
Preview
` })}`} </footer> </div> </div> </article>`)} </div>`;
}, "C:/Files/Work/ElonProds/portfolio/src/components/Projects.astro", void 0);

const $$Astro = createAstro("https://eismerlobaina.vercel.app/");
const $$Mail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Mail;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail-forward" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path><path d="M3 6l9 6l9 -6"></path><path d="M15 18h6"></path><path d="M18 15l3 3l-3 3"></path></svg>`;
}, "C:/Files/Work/ElonProds/portfolio/src/components/icons/Mail.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const personalImageAlt = "Eismer Lobaina";
  return renderTemplate`${maybeRenderHead()}<div class="max-w-xl"> <div class="flex gap-4 mb-4"> <img class="rounded-full shadow-lg size-16" src="/eismerlobaina.jpg"${addAttribute(personalImageAlt, "alt")}> <a href="https://linkedin.com/in/eismerlobaina" target="_blank" rel="noopener" class="flex items-center transition md:justify-center md:hover:scale-105"> ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result2) => renderTemplate`Disponible para trabajar` })} </a> </div> <h1 class="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white">
Saludos, soy Eismer Lobaina
</h1> <p class="mt-6 text-xl text-gray-800 dark:[&>strong]:text-orange-200 [&>strong]:text-orange-500 [&>a]:text-red-500 [&>a]:underline [&>strong]:font-semibold dark:text-gray-300">
Soy <strong>Ingeniero de Software</strong> y <strong>desarrollador web full stack</strong> con <strong>2</strong> años de experiencia, de La Habana, Cuba
<span class="text-blue-500">CU</span>.
    Me enfoco en construir soluciones escalables que resuelven problemas reales.
    Mi experiencia abarca el <strong>ciclo completo de desarrollo</strong>,
    desde el diseño y la codificación hasta la implementación y el mantenimiento en producción.
</p> <nav class="flex flex-wrap gap-4 mt-8"> ${renderComponent($$result, "SocialPill", $$SocialPill, { "href": "mailto:eismerlobaina@gmail.com" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MailIcon", $$Mail, { "class": "size-4" })}
Contáctame
` })} ${renderComponent($$result, "SocialPill", $$SocialPill, { "href": "https://linkedin.com/in/eismerlobaina" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LinkedInIcon", $$LinkedIn, { "class": "size-4" })}
LinkedIn
` })} </nav> </div>`;
}, "C:/Files/Work/ElonProds/portfolio/src/components/Hero.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Porfolio de eismerlobaina - Desarrollador y Programador Web con 2 a\xF1os de experiencia", "description": "Contrata a eismerlobaina para crear tu aplicaci\xF3n web o m\xF3vil. Desarrollador Web fullstack y dise\xF1ador" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-4"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "py-16 md:py-36" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Hero", $$Hero, {})} ` })} <div class="space-y-24"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "experiencia" }, { "default": ($$result3) => renderTemplate` <h2 class="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white"> ${renderComponent($$result3, "Briefcase", $$Briefcase, { "class": "size-8" })}
Experiencia laboral
</h2> ${renderComponent($$result3, "Experience", $$Experience, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "proyectos" }, { "default": ($$result3) => renderTemplate` <h2 class="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white"> ${renderComponent($$result3, "CodeIcon", $$Code, { "class": "size-7" })}
Proyectos
</h2> ${renderComponent($$result3, "Projects", $$Projects, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "sobre-mi" }, { "default": ($$result3) => renderTemplate` <h2 class="flex items-center mb-6 text-3xl font-semibold gap-x-8 text-black/80 dark:text-white"> ${renderComponent($$result3, "ProfileCheck", $$ProfileCheck, { "class": "size-8" })}
Sobre mí
</h2> ${renderComponent($$result3, "AboutMe", $$AboutMe, {})} ` })} </div> </main> ` })}`;
}, "C:/Files/Work/ElonProds/portfolio/src/pages/index.astro", void 0);

const $$file = "C:/Files/Work/ElonProds/portfolio/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
