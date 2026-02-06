import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    title: 'Motor de Tic Tac Toe',
    description: 'Motor de juego estrategico con implementacion de logica pura',
    problem:
      'Las implementaciones tradicionales de juegos mezclan la interfaz con la logica del juego, dificultando las pruebas y la reutilizacion.',
    solution:
      'Desarrolle un motor de juego independiente del framework, enfocado en logica pura y gestion de estado, separando responsabilidades para maxima reutilizacion.',
    stack: ['TypeScript', 'Jest', 'Clean Architecture'],
    repoUrl: 'https://github.com',
    demoUrl: 'https://example.com',
  },
  {
    title: 'Sistema de Gestion',
    description: 'Aplicacion de gestion empresarial de nivel enterprise',
    problem:
      'Requisitos de negocio complejos con multiples roles de usuario y relaciones de datos intrincadas necesitaban una solucion mantenible.',
    solution:
      'Aplique principios SOLID y Clean Architecture para crear un sistema escalable con limites de dominio claros y componentes testeables.',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Docker'],
    repoUrl: 'https://github.com',
    demoUrl: 'https://example.com',
  },
  {
    title: 'App Movil de Inventario',
    description: 'Gestion de inventario multiplataforma para equipos de campo',
    problem:
      'Los trabajadores de campo necesitaban seguimiento de inventario offline con sincronizacion en tiempo real al conectarse.',
    solution:
      'Desarrolle una app React Native con arquitectura offline-first, usando SQLite para almacenamiento local y sincronizacion en segundo plano.',
    stack: ['React Native', 'TypeScript', 'SQLite', 'Node.js', 'REST API'],
    repoUrl: 'https://github.com',
  },
  {
    title: 'Servicio API Gateway',
    description: 'Gestion centralizada de APIs y capa de autenticacion',
    problem:
      'Multiples microservicios necesitaban autenticacion unificada, limitacion de peticiones y enrutamiento de solicitudes.',
    solution:
      'Construi un API gateway en Node.js implementando arquitectura hexagonal con adaptadores para diferentes proveedores de autenticacion.',
    stack: ['Node.js', 'Express', 'Redis', 'JWT', 'Docker'],
    repoUrl: 'https://github.com',
  },
  {
    title: 'Dashboard en Tiempo Real',
    description: 'Panel de analiticas en vivo con actualizaciones WebSocket',
    problem:
      'Los stakeholders necesitaban visibilidad en tiempo real de metricas clave sin recargar la pagina.',
    solution:
      'Cree un dashboard responsivo con conexiones WebSocket para actualizaciones de datos en vivo y renderizado eficiente de graficos.',
    stack: ['React', 'TypeScript', 'WebSocket', 'D3.js', 'Node.js'],
    repoUrl: 'https://github.com',
    demoUrl: 'https://example.com',
  },
  {
    title: 'Herramienta CLI',
    description: 'Interfaz de linea de comandos para scaffolding de proyectos',
    problem:
      'El equipo necesitaba configuracion consistente de proyectos con patrones de arquitectura predefinidos.',
    solution:
      'Construi una herramienta CLI que genera scaffolds de proyectos siguiendo arquitectura hexagonal con todas las configuraciones necesarias.',
    stack: ['Node.js', 'TypeScript', 'Commander.js', 'Inquirer'],
    repoUrl: 'https://github.com',
  },
];
