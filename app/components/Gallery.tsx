import Image from "next/image";
import { promises as fs } from "fs";
import path from "path";

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fotos.slice(0, 12).map((foto, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl bg-gray-200 aspect-square hover:shadow-xl transition duration-300"
            >
              <Image
                src={`/fotos/${foto}`}
                alt={`Trabajo ${idx + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition opacity-0 group-hover:opacity-100 flex items-center justify-center">
                <span className="text-cream font-semibold text-lg">Ver más</span>
              </div>
            </div>
          ))}
        </div>
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
