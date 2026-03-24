import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router';
import type { Project } from '~/home/types/project';
import { Github } from '~/shared/components/icons/Github';
import { Badge } from '~/shared/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/shared/components/ui/card';

interface Props {
  project: Project;
}

export const ProjectCard = ({ project }: Props) => {
  const { title, description, problem, solution, stack, repoUrl, demoUrl } =
    project;

  return (
    <Card
      className="hover:border-foreground/20 pt-0 transition-colors"
      role="article"
    >
      <img
        src={project.image}
        alt={project.title}
        className="h-75 rounded-t-xl object-cover"
      />

      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col">
        <div className="flex-1">
          {/* project description */}
          {problem && solution && (
            <div className="mb-4 flex-1 space-y-3">
              <div>
                <p className="text-foreground mb-1 text-xs font-medium tracking-wider uppercase">
                  Problema
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {problem}
                </p>
              </div>
              <div>
                <p className="text-foreground mb-1 text-xs font-medium tracking-wider uppercase">
                  Solución
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {solution}
                </p>
              </div>
            </div>
          )}

          {/* used technologies */}
          <div className="mb-4 flex flex-wrap items-end gap-1.5">
            {stack.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="font-mono text-xs"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* links (github and live demo) */}
        {(demoUrl || repoUrl) && (
          <div className="border-border flex flex-wrap gap-3 border-t pt-4">
            {repoUrl && (
              <Link
                to={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground flex items-center gap-1.5 text-sm transition-colors"
              >
                <Github width="16" height="16" />
                Repositorio
              </Link>
            )}

            {demoUrl && (
              <Link
                to={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground flex items-center gap-1.5 text-sm transition-colors"
              >
                <ExternalLink className="size-4" />
                Live Demo
              </Link>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
