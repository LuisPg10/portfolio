import projectImages from './project-images';
import { TechName, Tool, type Project } from '../types';

// TODO: Add images to projects
const laborProjects: Project[] = [
  {
    image: projectImages.artGallery,
    title: 'Art Gallery',
    description:
      'Plaforma para la administración de proyectos de arte, usuarios y eventos, además de semaforización para control de actividades.',
    problem:
      'Tadeo Art Gallery presentaba problemas en la gestión de eventos y proyectos artísticos teniendo dificultades para gestionar cronogramas y actividades.',
    solution:
      'Desarrollé una aplicación preliminar que permite solventar estos problemas de gestión minimizando la acción humana y gestionando procesos desde dicho sistema.',
    stack: [
      Tool.CleanArchitecture,
      TechName.TypeScript,
      TechName.React,
      TechName.MUI,
      TechName.Firebase,
      TechName.Vite,
      TechName.Vitest,
    ],
    repoUrl: 'https://github.com/LuisPg10/art-gallery-app',
  },
  {
    image: projectImages.ortodent,
    title: 'Ortodent',
    description: 'Landing page para la clínica odontológica Ortodent',
    problem:
      'La clínica odontológica no tenía posicionamiento más allá de las redes sociales.',
    solution: 'Desarrollé una landing page para mejorar su posicionamiento.',
    stack: [
      Tool.ScreamingArchitecture,
      TechName.TypeScript,
      TechName.React,
      TechName.Tailwind,
      TechName.ShadcnUI,
      TechName.Vite,
    ],
    repoUrl: 'https://github.com/LuisPg10/ortodent',
    demoUrl: 'https://ortodent.care',
  },
  {
    image: projectImages.luzdent,
    title: 'Luz Dent',
    description: 'Landing page para la clínica odontológica Luz Dent',
    problem:
      'La clínica odontológica no tenía un posicionamiento claro en la web',
    solution: 'Desarrollé una landing page para mejorar su posicionamiento.',
    stack: [
      Tool.ScreamingArchitecture,
      TechName.TypeScript,
      TechName.React,
      TechName.Tailwind,
      TechName.ShadcnUI,
      TechName.Vite,
    ],
    repoUrl: 'https://github.com/LuisPg10/luzdent',
    demoUrl: 'https://www.luzdentdg.com/',
  },

  {
    image: projectImages.kankuamoDictionary,
    title: 'Diccionario kankuamo',
    description:
      'Diccionario para el aprendizaje de la lengua kankuama junto con el inglés y el español',
    problem:
      'Las comunidades de del resguardo indígena Río Seco tenían dificultades para el aprendizaje del español e inglés usando herramientas didacticas, además las tradiciones culturales estaban sufriendo un declive debido a la globalización que estaba llegado a este sitio.',
    solution:
      'Desarrollé una aplicación interactiva para faciliar el aprendizaje de la lengua nativa de los estudiantes articulandola con el inglés y el español.',
    stack: [
      TechName.JavaScript,
      TechName.React,
      TechName.Dart,
      TechName.Flutter,
      TechName.MariaDB,
    ],
    repoUrl: 'https://github.com/LuisPg10/kankuamo-dictionary',
    demoUrl: 'https://kankuamo-dictionary.netlify.app',
  },
];

const personalProjects: Project[] = [
  {
    image: projectImages.tesloShop,
    title: 'TesloShop',
    description:
      'Aplicación para la gestión de un ecommerce de ropa usando herramientas como TansTack Query para la cache de los datos y mejorar la experiencia del usuario.',
    stack: [
      TechName.TypeScript,
      TechName.React,
      TechName.Tailwind,
      TechName.ShadcnUI,
      TechName.TansTackQuery,
      TechName.Vite,
    ],
    repoUrl: 'https://github.com/LuisPg10/teslo-shop-frontend',
    demoUrl: 'https://tesloshop-app.netlify.app',
  },
  {
    image: projectImages.cinemapedia,
    title: 'Cinemapedia',
    description:
      'Aplicación para conocer las películas de todas las épocas, sus diferentes actores y trailers para obtener más información de la misma.',
    stack: [
      Tool.CleanArchitecture,
      TechName.Flutter,
      TechName.IsarDB,
      TechName.SQLite,
    ],
  },
  {
    image: projectImages.techBlog,
    title: 'TechBlog',
    description:
      'Aplicación para la gestión de publicaciones de un foro interno. Se usaron herramientas como EC2 para el despliegue en la nube, docker para la contenerización del backend y el frontend y otros servicios de AWS como S3 para el almacenamiento de archivos y DynamoDB junto a RDS para el almacenamiento de las publicaciones.',
    stack: [
      TechName.TypeScript,
      TechName.React,
      TechName.Vite,
      TechName.AWS,
      TechName.Docker,
    ],
    repoUrl: 'https://gitlab.com/LuisPg10/tech-blog',
    demoUrl: 'https://luis-tech-blog.netlify.app',
  },
  {
    image: projectImages.yesNoApp,
    title: 'Yes No App',
    description:
      'Chat de conversación para poner en prueba la UI con Flutter. Con consumo de apis y manejo de estados con provider.',
    stack: [Tool.CleanArchitecture, TechName.Flutter],
  },
  {
    image: projectImages.toktik,
    title: 'TokTik',
    description:
      'Aplicación estilo TikTok para el aprendizaje de Flutter y los diferentes widgets que se pueden usar como Stack, Icon, Column, etc.',
    stack: [Tool.CleanArchitecture, TechName.Flutter],
  },
];

export const projects = {
  labor: laborProjects,
  personal: personalProjects,
};
