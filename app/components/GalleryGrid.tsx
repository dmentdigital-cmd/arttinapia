"use client";

import { useState } from "react";
import Image from "next/image";
import GalleryModal from "./GalleryModal";
import { imageDescriptions } from "@/app/data/imageDescriptions";

interface GalleryGridProps {
  fotos: string[];
}

export default function GalleryGrid({ fotos }: GalleryGridProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    description: string;
  } | null>(null);

  const handleImageClick = (foto: string, idx: number) => {
    const description =
      imageDescriptions[foto] ||
      `Trabajo ${idx + 1} - Ilustración de Artinapia`;
    setSelectedImage({
      src: `/fotos/${foto}`,
      alt: `Trabajo ${idx + 1}`,
      description,
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedImage(null), 300);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fotos.slice(0, 12).map((foto, idx) => (
          <button
            key={idx}
            onClick={() => handleImageClick(foto, idx)}
            className="group relative overflow-hidden rounded-2xl bg-gray-200 aspect-square hover:shadow-xl transition duration-300 cursor-pointer"
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
          </button>
        ))}
      </div>

      {selectedImage && (
        <GalleryModal
          isOpen={isModalOpen}
          imageSrc={selectedImage.src}
          imageAlt={selectedImage.alt}
          description={selectedImage.description}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}
