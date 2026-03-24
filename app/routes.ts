import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('home/routes/home.tsx'),
  route('about', 'about/routes/about.tsx'),
] satisfies RouteConfig;
