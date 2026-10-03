# Aire Raíz — Cloudflare Workers Static Assets

## Configuración recomendada en Cloudflare
- Deploy command: `npx wrangler deploy`
- Build command: dejar vacío
- Root directory: `/`
- Framework: Static / None

Los archivos públicos están dentro de `/public`.

## Corrección aplicada
Se eliminó `_redirects` porque la regla `/* /index.html 200` generaba un bucle infinito
en Cloudflare Workers Static Assets.

`wrangler.jsonc` usa:
- assets.directory = `./public`
- not_found_handling = `single-page-application`

Así Cloudflare no intenta publicar `.git`, README u otros archivos internos del repositorio.
