import type { Route } from './+types/home';
import { Button } from '~/shared/components/ui/button';
import { useTheme } from '~/shared/themes';

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
  const { setTheme } = useTheme();

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-2">
      <h1>Portafolio de Luis</h1>

      <div className="flex gap-2">
        <Button onClick={() => setTheme('light')}>Claro</Button>
        <Button onClick={() => setTheme('dark')}>Oscuro</Button>
        <Button onClick={() => setTheme('system')}>Sistema</Button>
      </div>
    </main>
  );
}
