# 3D Web Page

A full-stack web application featuring 3D graphics using Three.js, TypeScript, and TailwindCSS.

## Technologies Used

- Frontend:
  - HTML5
  - TailwindCSS
  - TypeScript
  - Three.js
  - Vite

- Backend:
  - Express
  - Node.js

## Development

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Start backend server:
```bash
npm run server
```

## Adding 3D Models

1. Export your models from Blender as .glb or .gltf files
2. Place them in the `public/models` directory
3. Load them using the Scene.loadModel() method

## Deployment

This project is configured for deployment on Vercel. Push to main branch to trigger automatic deployment.
