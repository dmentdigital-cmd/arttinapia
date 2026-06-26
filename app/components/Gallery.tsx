import { promises as fs } from "fs";
import path from "path";
import GalleryGrid from "./GalleryGrid";

export default async function Gallery() {
  const fotos = await getPhotos();

  return (
    <section id="galeria" className="bg-rose-100 py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-green mb-4">
            Galería
          </h2>
          <p className="text-lg text-gray-600">
            Explora mis trabajos en ilustración, fotografía y dirección creativa
          </p>
        </div>

        <GalleryGrid fotos={fotos} />
      </div>
    </section>
  );
}

async function getPhotos() {
  try {
    const fotosDir = path.join(process.cwd(), "public/fotos");
    const files = await fs.readdir(fotosDir);
    return files.filter((f) => f.endsWith(".webp")).sort();
  } catch {
    return [];
  }
}
