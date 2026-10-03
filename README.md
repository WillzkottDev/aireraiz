# Aire Raíz — sitio para Cloudflare Pages

Sitio estático responsive, sin dependencias ni build. Está listo para subir directamente a Cloudflare Pages.

## Publicar en Cloudflare Pages

### Opción A — GitHub
1. Subí el contenido de esta carpeta a un repositorio.
2. En Cloudflare: Workers & Pages → Create → Pages → Connect to Git.
3. Framework preset: **None**.
4. Build command: dejar vacío.
5. Build output directory: `/` (raíz del proyecto).
6. Deploy.

### Opción B — Direct Upload
1. Entrá a Workers & Pages → Create → Pages → Upload assets.
2. Arrastrá esta carpeta o el ZIP descomprimido.
3. Publicá.
4. Luego, en **Custom domains**, conectá el dominio propio.

## Qué conviene editar antes de publicar

- `index.html`
  - Biografía real.
  - Modalidades disponibles.
  - Ciudad/zona de Argentina.
  - Certificaciones/títulos reales.
  - Textos de servicios.
- Foto del entrenador/a:
  - El diseño actual usa un placeholder.
  - Podés poner una imagen en `assets/entrenador.jpg` y cambiar el bloque `.about-photo` por una etiqueta `<img>`, o usarla como `background-image`.
- Instagram ya apunta a:
  - https://www.instagram.com/aire__raiz/
- WhatsApp configurado:
  - `+54 9 2995 10-4753`
  - `https://wa.me/5492995104753`
  - El formulario genera el mensaje y abre WhatsApp con el texto precargado.
- Si tienen email:
  - agregarlo en el footer y formulario.
- Dominio:
  - configurarlo desde Cloudflare Pages > Custom domains.

## Estructura

- `index.html`: página completa.
- `styles.css`: diseño responsive.
- `script.js`: menú, animaciones, FAQ y generador de consulta.
- `assets/logo.svg`: logo conceptual editable.
- `assets/og-cover.svg`: imagen para compartir en redes.
- `_headers`: headers de seguridad/cache para Cloudflare.
- `_redirects`: fallback del sitio.

## Nota importante

La página se diseñó a partir del nombre **Aire Raíz**, el perfil indicado `@aire__raiz` y el contexto de entrenamiento personalizado. Instagram no permitió leer públicamente el contenido del perfil desde el entorno de desarrollo, por lo que no se inventaron precios, certificaciones, testimonios, dirección, nombre del entrenador/a ni horarios.

Con fotos/capturas del perfil y los datos reales, esos elementos se pueden reemplazar sin modificar la estructura general.
