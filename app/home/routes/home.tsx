import type { Route } from './+types/home';
import {
  ApproachSection,
  InfoSection,
  ProjectsSection,
} from '../components/sections';
import { TechStrip } from '../components/ui/TechStrip';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Portafolio' },
    {
      name: 'description',
      content: 'Portafolio para mostrar mi experencia y trabajo a otros',
    },
  ];
}

export default function Home() {
  return (
    <main>
      <div className="px-10 md:px-24">
        <InfoSection />
      </div>

      <TechStrip />

      <div className="px-10 md:px-24">
        <ApproachSection />
        <ProjectsSection />
      </div>
    </main>
  );
}
