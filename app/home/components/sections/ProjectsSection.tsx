import { useState } from 'react';
import { projects } from '~/home/data/projects';
import { ProjectCard } from '../ui/ProjectCard';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '~/shared/components/ui/tabs';

export const ProjectsSection = () => {
  const [tabValue, setTabValue] = useState('labor');

  const handleTabChange = (value: string) => {
    setTabValue(value);
  };

  return (
    <section id="projects" className="mx-auto py-16 md:py-24">
      <div className="mb-8">
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

      <Tabs defaultValue={tabValue} onValueChange={handleTabChange}>
        <TabsList>
          <TabsTrigger value="labor">Laborales</TabsTrigger>
          <TabsTrigger value="personal">Personales</TabsTrigger>
        </TabsList>

        <div className="border-border mt-8 mb-8 flex items-center gap-4 border-b pb-4">
          <span className="text-muted-foreground text-sm">
            Mostrando{' '}
            <strong className="text-foreground">
              {tabValue === 'labor'
                ? projects.labor.length
                : projects.personal.length}
            </strong>{' '}
            proyectos
          </span>
        </div>

        <TabsContent value="labor">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.labor.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="personal">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.personal.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};
