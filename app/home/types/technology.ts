export interface Technology {
  name: string;
  icon: TechIcon;
  site: string;
}

interface TechIcon {
  resource: string;
  hasDarkResource: boolean;
  darkResource?: string;
}
