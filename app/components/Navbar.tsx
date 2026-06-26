"use client";

export default function Navbar() {
  return (
    <nav className="bg-rose-100 sticky top-0 z-50 border-b border-pink/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-red">Artinapia</h1>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-800 hover:text-red transition">
              Inicio
            </a>
            <a href="#galeria" className="text-gray-800 hover:text-red transition">
              Galería
            </a>
            <a href="#servicios" className="text-gray-800 hover:text-red transition">
              Servicios
            </a>
            <a href="#contacto" className="text-gray-800 hover:text-red transition">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
