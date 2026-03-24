import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { Stats } from '../ui/Stats';
import { Badge } from '~/shared/components/ui/badge';
import { Button } from '~/shared/components/ui/button';

export const InfoSection = () => {
  return (
    <section className="mx-auto py-24 md:py-20">
      <div className="flex flex-col gap-6">
        <Badge variant="muted">
          <span className="size-2 rounded-full bg-emerald-500" />
          Disponible para nuevos proyectos
        </Badge>

        <h1 className="text-3xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
          Desarrollador FullStack
          <br />
          <span className="text-muted-foreground">
            Arquitectura y Escalabilidad
          </span>
        </h1>

        <p className="text-muted-foreground max-w-sm text-lg leading-relaxed text-pretty sm:max-w-2xl">
          Construyendo aplicaciones robustas con enfoque en plataformas
          <strong className="text-foreground font-medium"> Web</strong> y{' '}
          <strong className="text-foreground font-medium">Móvil</strong>. Me
          especializo en arquitectura limpia, sistemas escalables y código
          mantenible que perdura en el tiempo.
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link to="#projects">
              Ver proyectos
              <ArrowRight />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/about">Sobre mi</Link>
          </Button>
        </div>
      </div>

      <Stats />
    </section>
  );
};
