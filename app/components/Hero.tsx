export default function Hero() {
  return (
    <section id="inicio" className="bg-gradient-to-b from-rose-200 via-rose-100 to-rose-200 texture-arttinapia py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-dark-green mb-6">
              Artinapia
            </h2>
            <p className="text-xl text-gray-700 mb-4">
              Ilustradora y artista visual colombiana
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Creo mundos visuales coloridos y narrativos. Especializada en ilustración editorial,
              dirección creativa y servicios personalizados.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#galeria"
                className="bg-red text-cream px-8 py-3 rounded-lg font-semibold hover:bg-pink transition"
              >
                Ver trabajos
              </a>
              <a
                href="#servicios"
                className="border-2 border-red text-red px-8 py-3 rounded-lg font-semibold hover:bg-red/10 transition"
              >
                Servicios
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-3xl h-96 overflow-hidden border-4 border-gray-800 shadow-lg">
              <img
                src="/fotos/pagina_3.webp"
                alt="Artinapia"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
