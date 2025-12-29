import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Portafolio de Luis' },
    {
      name: 'description',
      content: 'Portafolio para mostrar mi experencia y trabajo a otros',
    },
  ];
}

export default function Home() {
  return <h1>Portafolio de Luis</h1>;
}
