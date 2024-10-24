// declarations.d.ts

declare module 'components';
declare module 'config';
declare module 'hooks';
declare module 'node_modules';
declare module 'pages';
declare module 'public';

interface Window {
    preloadedPictures: string[]; // Adjust the type as necessary
  }

  declare module 'components' {
    export const ComponentName: React.ComponentType;
    // add more exports as needed
  }