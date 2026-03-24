import type { Route } from './+types/about';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Sobre mi' },
    {
      name: 'description',
      content: 'Conoce más de mi persona y cómo me gusta trabajar',
    },
  ];
}

export default function About() {
  return <main className="px-5 py-20 md:px-24">Acerca de mi</main>;
}
