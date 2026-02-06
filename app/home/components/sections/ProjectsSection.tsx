import { Link } from 'react-router';
import { ExternalLink } from 'lucide-react';
import { projects } from '~/home/data/projects';
import { Github } from '~/shared/components/icons/Github';
import { Badge } from '~/shared/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/shared/components/ui/card';
import { ProjectCard } from '../ui/ProjectCard';

export const ProjectsSection = () => {
  return (
    <section id="projects" className="mx-auto py-16 md:py-24">
      <div className="mb-12">
        <p className="text-muted-foreground mb-2 font-mono text-sm">
          projects.showcase
        </p>
        <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
          Proyectos
        </h2>
        <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed text-pretty">
          Una colección de trabajo que muestra mi enfoque en arquitectura de
          software, código limpio y resolución de problemas. Cada proyecto
          demuestra desafíos técnicos específicos y sus soluciones.
        </p>
      </div>

      <div className="border-border mb-8 flex items-center gap-4 border-b pb-4">
        <span className="text-muted-foreground text-sm">
          Mostrando{' '}
          <strong className="text-foreground">{projects.length}</strong>{' '}
          proyectos
        </span>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};
