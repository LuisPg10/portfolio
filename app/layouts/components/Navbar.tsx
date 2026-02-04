import { Link, useLocation } from 'react-router';
import { cn } from '~/shared/lib/utils';
import type { NavbarItem } from '~/layouts/types/navbar-item';
import { DropdownTheme } from './DropdownTheme';

interface Props {
  title?: React.ReactNode;
  items?: NavbarItem[];
}

export const Navbar = ({ title, items = [] }: Props) => {
  const { pathname } = useLocation();

  return (
    <header className="border-border bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="mx-auto flex h-14 items-center justify-between px-10">
        {title}
        <div className="flex gap-5">
          <nav className="flex items-center gap-1">
            {items.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  pathname === item.path
                    ? 'text-foreground bg-muted'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50',
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <DropdownTheme />
        </div>
      </div>
    </header>
  );
};
