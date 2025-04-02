import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { config } from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

config();

const app = express();
const port = process.env.PORT || 3000;
const isProd = process.env.NODE_ENV === 'production';

app.use(express.json());

// Serve static files from the 'public' directory
app.use('/models', express.static(join(__dirname, '../public/models')));
if (isProd) {
  app.use(express.static(join(__dirname, '../dist')));
}

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

// Handle SPA routing in production
if (isProd) {
  app.get('*', (_req, res) => {
    res.sendFile(join(__dirname, '../dist/index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
