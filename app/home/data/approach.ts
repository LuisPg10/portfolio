interface Approach {
  title: string;
  description: string;
}

export const approach: Approach[] = [
  {
    title: 'Arquitectura Primero',
    description:
      'Cada proyecto comienza con un diseño de arquitectura adecuado. Arquitectura Hexagonal de la mano de Screaming Architecture y principios de Codigo Limpio aseguran mantenibilidad a largo plazo.',
  },

  {
    title: 'Disenar Antes de Codificar',
    description:
      'Diagramas UML, diagramas de secuencia y documentación adecuada antes de escribir una sola línea de código.',
  },

  {
    title: 'Excelencia en Control de Versiones',
    description:
      'Metodología Gitflow  o Trunk Base Development estricta con commits significativos, estrategias de branching adecuadas y revisiones de codigo exhaustivas.',
  },

  {
    title: 'Soluciones Escalables',
    description:
      'Construyendo sistemas que crecen con tus necesidades. Diseño de base de datos, arquitectura de API y estrategias de despliegue adecuadas.',
  },
];
