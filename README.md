# Tabla periódica

Aplicación educativa con Node.js, Express y Handlebars. Muestra 118 símbolos, familias, búsqueda y una lista adaptable a móviles. La tabla conserva sus 18 columnas y permite desplazamiento dentro del componente.

## Desarrollo

Requiere Node.js 22 o superior. Ejecutar `npm ci`, `npm test` y `npm start`. Abrir http://127.0.0.1:8080/. No utiliza base de datos ni credenciales.

## alwaysdata

Después de fusionar el PR:

```sh
mkdir -p ~/apps
cd ~/apps
git clone https://github.com/Jeison-Rosario/tabla-periodica.git
cd tabla-periodica
npm ci --omit=dev
npm test
```

Crear un sitio Node.js con dirección `bookapp.alwaysdata.net/tabla-periodica`, directorio de trabajo **`apps/tabla-periodica`** (relativo), comando **`node /home/bookapp/apps/tabla-periodica/server.js`**, Node 22 o superior y variable de entorno **`BASE_PATH=/tabla-periodica`**. No fijar PORT, IP ni HOST: los proporciona alwaysdata. Acepta la ruta conservada o recortada por el proxy.

Comprobar `/tabla-periodica/`, `/tabla-periodica/healthz`, búsqueda, lista móvil y enlaces CSS. La revisión visual en el servidor queda pendiente. Añadir el enlace al portafolio solo después de comprobar el despliegue. Vigilar RAM/CPU antes de activar otra aplicación; si hay problemas detener únicamente este sitio.

## Organización

`data/elementos.js`: posiciones y familias; `routes/`: búsqueda; `Views/`: HTML; `public/`: CSS; `app.js`: HTTP; `server.js`: arranque. Las familias son una clasificación educativa simplificada del proyecto original; no se incluyen masas ni datos experimentales. Se corrige el símbolo de flerovio a **Fl** y el marcador Ac–Lr a actínidos. Referencia: https://iupac.org/what-we-do/periodic-table-of-elements/.

`node_modules` se elimina del control de versiones: las dependencias se reconstruyen desde el lockfile.
