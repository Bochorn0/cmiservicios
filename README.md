# CMI — Construcciones y Mantenimiento Integral

Sitio institucional de CMI: construcción, mantenimiento industrial y tratamiento de agua en Hermosillo, Sonora.

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Deploy

Cada pull request a `main` corre lint y build. Al fusionar el PR, GitHub Actions entra por SSH al droplet, actualiza el código, construye y reinicia PM2.

Secrets del repo (`Settings → Secrets and variables → Actions`):

- `DROPLET_HOST` — `174.138.34.118`
- `DROPLET_USER` — `deploy`
- `DROPLET_SSH_KEY` — llave privada de deploy (sin passphrase)

