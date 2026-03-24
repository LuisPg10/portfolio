import { Link } from 'react-router';
import { appMenu } from './config/app-menu';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';

export const AppLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
      <Navbar
        title={
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-md">
              <span className="text-primary-foreground font-mono text-sm font-bold">
                {'</>'}
              </span>
            </div>
            <p className="font-semibold tracking-tight">Luis Dev</p>
          </Link>
        }
        items={appMenu}
      />

      {children}
      <Footer />
    </div>
  );
};
