import { Link } from 'react-router';
import { Github } from '~/shared/components/icons/Github';
import { Linkedin } from '~/shared/components/icons/Linkedin';

export const Footer = () => {
  return (
    <footer className="border-border bg-muted/30 border-t">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
        <div className="flex items-center gap-4">
          <Link
            to="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github />
          </Link>
          <Link
            to="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
};
