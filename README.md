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

Crear un sitio Node.js con dirección `bookapp.alwaysdata.net/tabla-periodica`, directorio de trabajo **`apps/tabla-periodica`** (relativo), comando **`env BASE_PATH=/tabla-periodica node /home/bookapp/apps/tabla-periodica/server.js`**, Node 22 o superior y variable de entorno **`BASE_PATH=/tabla-periodica`**. No fijar PORT, IP ni HOST: los proporciona alwaysdata. Acepta la ruta conservada o recortada por el proxy.

Comprobar `/tabla-periodica/`, `/tabla-periodica/healthz`, búsqueda, lista móvil y enlaces CSS. El propietario confirmó que el despliegue funciona y el portafolio ya enlaza la demo. Vigilar RAM/CPU antes de activar otra aplicación; si hay problemas detener únicamente este sitio.

## Organización

`data/elementos.js`: posiciones y familias; `routes/`: búsqueda; `Views/`: HTML; `public/`: CSS; `app.js`: HTTP; `server.js`: arranque. Las familias son una clasificación educativa simplificada del proyecto original; no se incluyen masas ni datos experimentales. Se corrige el símbolo de flerovio a **Fl** y el marcador Ac–Lr a actínidos. Referencia: https://iupac.org/what-we-do/periodic-table-of-elements/.

`node_modules` se elimina del control de versiones: las dependencias se reconstruyen desde el lockfile.
## Demo y uso

**[Abrir Tabla periódica](https://bookapp.alwaysdata.net/tabla-periodica/)**

1. Buscar un símbolo, por ejemplo `Fe`, y pulsar **Buscar**.
2. Combinar con el selector de familia si se desea.
3. Utilizar **Ver lista adaptable** o desplazar horizontalmente la tabla en móvil.
4. Pulsar **Restablecer** para retirar filtros.

La consulta usa `q` (hasta 20 caracteres) y `grupo`; ejemplo local: `/?q=Fe&grupo=MT`. No necesita JavaScript en el navegador para filtrar. Los elementos no coincidentes se atenúan sin cambiar sus posiciones; la lista muestra solo coincidencias. Hay 118 símbolos únicos y dos marcadores de series, que no se cuentan como elementos de la lista.

## Configuración del proceso

| Variable | Predeterminado local | Función |
| --- | --- | --- |
| `PORT` | `8080` | Puerto HTTP |
| `IP` / `HOST` | `127.0.0.1` | Dirección; IP tiene prioridad |
| `BASE_PATH` | vacío | Prefijo, por ejemplo `/tabla-periodica` |

La aplicación lee variables del proceso, no carga `.env` automáticamente. En Linux: `env BASE_PATH=/tabla-periodica npm start`. En PowerShell, establecer `$env:BASE_PATH="/tabla-periodica"` antes de `npm start`. No sobrescribir la IP y el puerto del proveedor en producción.

## Familias

| Código | Clasificación educativa |
| --- | --- |
| A | Alcalinos |
| AA | Alcalinotérreos |
| MT | Metales de transición |
| LT | Lantánidos |
| AT | Actínidos |
| OM | Otros metales |
| M | Metaloides |
| ONM | Otros no metales |
| H | Halógenos |
| GN | Gases nobles |

Las filas separadas de lantánidos y actínidos son posiciones visuales, no períodos adicionales. No se incluyen números atómicos, nombres completos ni masas. Toda ampliación científica debe contrastarse con una fuente.

## Validación y mantenimiento

`npm test` ejecuta `test/app.test.js`: respuestas HTTP, estilos, salud, 404, prefijos y símbolos/coordenadas. `npm run dev` utiliza nodemon; `npm start` utiliza Node directamente. No abrir `Views/home.hbs` como archivo estático: necesita Express.

Si faltan estilos, revisar el prefijo. Si la tabla no cabe en el móvil, usar su desplazamiento o la lista: sus 18 columnas no deben mezclarse. Para actualizar, conservar la configuración del sitio y reconstruir dependencias desde el lockfile si cambian. Esta ampliación se basa en lectura de código, sin repetir pruebas ni revisión visual.

## Autor

[Jeison Rosario](https://github.com/Jeison-Rosario)
