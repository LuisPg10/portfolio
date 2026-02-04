import { Sun, Moon, Computer } from 'lucide-react';
import { useTheme, type Theme } from '~/core/themes';
import { Button } from '~/shared/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '~/shared/components/ui/dropdown-menu';

const buttonsInfo: Record<Theme, { text: string; icon: React.ReactElement }> = {
  light: { text: 'Claro', icon: <Sun /> },
  dark: { text: 'Oscuro', icon: <Moon /> },
  system: { text: 'Sistema', icon: <Computer /> },
};

export const DropdownTheme = () => {
  const { isDark, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          {isDark ? buttonsInfo.dark.icon : buttonsInfo.light.icon}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          {Object.keys(buttonsInfo).map((themeKey) => {
            const theme = themeKey as Theme;

            return (
              <DropdownMenuItem key={theme} onClick={() => setTheme(theme)}>
                {buttonsInfo[theme].icon} {buttonsInfo[theme].text}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
