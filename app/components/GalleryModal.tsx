"use client";

import { useEffect } from "react";
import Image from "next/image";

interface GalleryModalProps {
  isOpen: boolean;
  imageSrc: string;
  imageAlt: string;
  description: string;
  onClose: () => void;
}

export default function GalleryModal({
  isOpen,
  imageSrc,
  imageAlt,
  description,
  onClose,
}: GalleryModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-cream rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-96 md:h-[500px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>

        <div className="p-6 md:p-8">
          <h3 className="text-2xl md:text-3xl font-bold text-dark-green mb-4">
            {imageAlt}
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {description}
          </p>
          <button
            onClick={onClose}
            className="bg-red text-cream px-6 py-2 rounded-lg font-semibold hover:bg-pink transition"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
