import rawImages from "./images.json";

// Importación ansiosa de todas las imágenes disponibles en assets por Vite
const assetModules = import.meta.glob(
  "../../../assets/images/**/*.{jpg,jpeg,png,webp,svg,gif,JPG,JPEG,PNG,WEBP,GIF}",
  { eager: true, import: "default" }
);

// Mapa de búsqueda rápida: nombre de archivo o ruta -> URL resuelta por Vite
const assetMap = {};

for (const [path, url] of Object.entries(assetModules)) {
  // Remueve el prefijo relativo "../../../assets/images/"
  const relativePath = path.replace(/^\.\.\/\.\.\/\.\.\/assets\/images\//, "");
  assetMap[relativePath] = url;

  // Guarda también solo el nombre del archivo (ej. "suit.gif")
  const fileName = relativePath.split("/").pop();
  if (!assetMap[fileName]) {
    assetMap[fileName] = url;
  }
}

/**
 * Resuelve un nombre de archivo o URL al asset final procesado por Vite.
 * @param {string} nameOrUrl - Nombre del archivo (ej: "badbunny.jpg", "gifs/suit.gif") o URL externa
 * @returns {string} URL lista para usar en la web
 */
export const resolveImage = (nameOrUrl) => {
  if (!nameOrUrl || typeof nameOrUrl !== "string") return nameOrUrl || "";
  
  // Si ya es una URL web o data URI, se devuelve intacta
  if (
    nameOrUrl.startsWith("http://") ||
    nameOrUrl.startsWith("https://") ||
    nameOrUrl.startsWith("data:") ||
    nameOrUrl.startsWith("blob:")
  ) {
    return nameOrUrl;
  }

  // Buscar en el mapa de Vite
  if (assetMap[nameOrUrl]) {
    return assetMap[nameOrUrl];
  }

  // Buscar solo por nombre de archivo
  const baseName = nameOrUrl.split("/").pop();
  if (assetMap[baseName]) {
    return assetMap[baseName];
  }

  console.warn(`[images.js] Imagen no encontrada en assets: "${nameOrUrl}"`);
  return nameOrUrl;
};

/**
 * Retorna la sintaxis CSS `url('...')` para usar en fondos dinámicos.
 * Ideal para combinar con degradados o template literals:
 * `:style="{ backgroundImage: \`linear-gradient(...), \${bgUrl(images.hero.cover)}\` }"`
 * 
 * @param {string} img - Nombre del archivo o URL de la imagen
 * @returns {string} `url("/assets/...")` o `none`
 */
export const bgUrl = (img) => {
  const url = resolveImage(img);
  return url ? `url("${url}")` : "none";
};

/**
 * Retorna un objeto de estilo `{ backgroundImage: "url('...')" }` listo para `:style` en Vue.
 * Ideal para usar directamente:
 * `<div :style="bgStyle(images.countdown.frame)"></div>`
 * 
 * @param {string} img - Nombre del archivo o URL de la imagen
 * @returns {Record<string, string>} Objeto de estilo CSS
 */
export const bgStyle = (img) => {
  const url = resolveImage(img);
  return url ? { backgroundImage: `url("${url}")` } : {};
};

/**
 * Transforma recursivamente el JSON resolviendo todos los paths de imágenes.
 */
function processImages(target) {
  if (Array.isArray(target)) {
    return target.map((item) => processImages(item));
  }
  if (target !== null && typeof target === "object") {
    const processed = {};
    for (const [key, value] of Object.entries(target)) {
      if (key === "alt") {
        processed[key] = value;
      } else {
        processed[key] = processImages(value);
      }
    }
    return processed;
  }
  if (typeof target === "string") {
    return resolveImage(target);
  }
  return target;
}

export const images = processImages(rawImages);
export default images;
