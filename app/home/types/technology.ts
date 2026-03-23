export interface Technology {
  name: TechName;
  icon: TechIcon;
  site: string;
}

export const enum TechName {
  AWS = 'AWS',
  Bun = 'Bun',
  Dart = 'Dart',
  Docker = 'Docker',
  Express = 'Express',
  Firebase = 'Firebase',
  Flutter = 'Flutter',
  IsarDB = 'IsarDB',
  Java = 'Java',
  JavaScript = 'JavaScript',
  Jest = 'Jest',
  Linux = 'Linux',
  MariaDB = 'MariaDB',
  MUI = 'MUI',
  Nodejs = 'Nodejs',
  React = 'React',
  ReactRouter = 'React Router',
  ShadcnUI = 'ShadcnUI',
  SQLite = 'SQLite',
  Tailwind = 'TailwindCSS',
  TansTackQuery = 'Tanstack Query',
  TypeScript = 'TypeScript',
  Vite = 'Vite',
  Vitest = 'Vitest',
}

interface TechIcon {
  resource: string;
  hasDarkResource: boolean;
  darkResource?: string;
}
