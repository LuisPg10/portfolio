import { Link } from 'react-router';
import { useTheme } from '~/core/themes';
import { technologies } from '../../data/technologies';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '~/shared/components/ui/tooltip';

export const TechStrip = () => {
  const { isDark } = useTheme();

  return (
    <section className="border-border bg-muted/30 border-y py-12">
      <div className="mx-auto max-w-4xl px-10 md:px-24">
        <p className="text-muted-foreground mb-6 text-center text-sm font-medium tracking-wider uppercase">
          Tecnologías con las que trabajo
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {technologies.map((tech) => (
            <Tooltip key={tech.name}>
              <TooltipTrigger className="font-mono text-lg" asChild>
                <Link to={tech.site} target="_blank">
                  <img
                    src={
                      isDark && tech.icon.hasDarkResource
                        ? tech.icon.darkResource
                        : tech.icon.resource
                    }
                    alt={tech.name}
                    className="size-8"
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{tech.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </section>
  );
};
