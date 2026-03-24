import { Link } from 'react-router';
import { Github } from '~/shared/components/icons/Github';
import { Linkedin } from '~/shared/components/icons/Linkedin';

export const Footer = () => {
  return (
    <footer className="border-border bg-muted/30 border-t">
      <div className="flex flex-col items-center gap-4 px-10 py-8 md:px-24">
        <div className="flex items-center gap-4">
          <Link
            to="https://github.com/LuisPg10"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github />
          </Link>
          <Link
            to="https://www.linkedin.com/in/ldpinto"
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
