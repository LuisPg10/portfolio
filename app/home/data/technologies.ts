import type { Technology } from '../types/technology';

import javascriptIcon from '~/assets/icons/javascript.svg';
import reactDarkIcon from '~/assets/icons/react-dark.svg';
import reactIcon from '~/assets/icons/react-light.svg';
import flutterIcon from '~/assets/icons/flutter.svg';
import dartIcon from '~/assets/icons/dart.svg';
import bunIcon from '~/assets/icons/bun.svg';
import javaIcon from '~/assets/icons/java.svg';
import jestIcon from '~/assets/icons/jest.svg';
import linuxIcon from '~/assets/icons/linux.svg';
import nodejsIcon from '~/assets/icons/nodejs.svg';
import reactRouterIcon from '~/assets/icons/reactrouter.svg';
import typescriptIcon from '~/assets/icons/typescript.svg';
import viteIcon from '~/assets/icons/vite.svg';
import vitestIcon from '~/assets/icons/vitest.svg';
import awsDarkIcon from '~/assets/icons/aws-dark.svg';
import awsIcon from '~/assets/icons/aws-light.svg';
import firebaseIcon from '~/assets/icons/firebase.svg';
import expressIcon from '~/assets/icons/express-light.svg';
import expressDarkIcon from '~/assets/icons/express-dark.svg';

export const technologies: Technology[] = [
  {
    name: 'Javascript',
    site: 'https://developer.mozilla.org/docs/Web/JavaScript',
    icon: { resource: javascriptIcon, hasDarkResource: false },
  },

  {
    name: 'TypeScript',
    site: 'https://www.typescriptlang.org',
    icon: { resource: typescriptIcon, hasDarkResource: false },
  },

  {
    name: 'React',
    site: 'https://react.dev',
    icon: {
      resource: reactIcon,
      hasDarkResource: false,
      darkResource: reactDarkIcon,
    },
  },

  {
    name: 'Node.js',
    site: 'https://nodejs.org',
    icon: { resource: nodejsIcon, hasDarkResource: false },
  },

  {
    name: 'Bun',
    site: 'https://bun.sh',
    icon: { resource: bunIcon, hasDarkResource: false },
  },

  {
    name: 'Express.js',
    site: 'https://expressjs.com',
    icon: {
      resource: expressIcon,
      hasDarkResource: true,
      darkResource: expressDarkIcon,
    },
  },

  {
    name: 'Vite',
    site: 'https://vite.dev',
    icon: { resource: viteIcon, hasDarkResource: false },
  },

  {
    name: 'Jest',
    site: 'https://jestjs.io',
    icon: { resource: jestIcon, hasDarkResource: false },
  },

  {
    name: 'Vitest',
    site: 'https://vitest.dev',
    icon: { resource: vitestIcon, hasDarkResource: false },
  },

  {
    name: 'React Router',
    site: 'https://reactrouter.com',
    icon: { resource: reactRouterIcon, hasDarkResource: false },
  },

  {
    name: 'Dart',
    site: 'https://dart.dev',
    icon: { resource: dartIcon, hasDarkResource: false },
  },

  {
    name: 'Flutter',
    site: 'https://flutter.dev',
    icon: { resource: flutterIcon, hasDarkResource: false },
  },

  {
    name: 'Java',
    site: 'https://www.java.com',
    icon: { resource: javaIcon, hasDarkResource: false },
  },

  {
    name: 'Linux',
    site: 'https://www.linux.org',
    icon: { resource: linuxIcon, hasDarkResource: false },
  },

  {
    name: 'AWS',
    icon: {
      resource: awsIcon,
      hasDarkResource: true,
      darkResource: awsDarkIcon,
    },
    site: 'https://aws.amazon.com',
  },

  {
    name: 'Firebase',
    icon: { resource: firebaseIcon, hasDarkResource: false },
    site: 'https://firebase.google.com',
  },
];
