export default function Footer() {
  return (
    <footer className="bg-black text-cream py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-red mb-4">Artinapia</h3>
            <p className="text-gray-400">
              Ilustradora colombiana explorando mundos visuales coloridos.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-cream mb-4">Menú</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#galeria" className="hover:text-red transition">
                  Galería
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-red transition">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-red transition">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-cream mb-4">Redes</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-red transition">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red transition">
                  TikTok
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red transition">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-cream mb-4">Contacto</h4>
            <p className="text-gray-400">
              📧 hola@artinapia.com
              <br />
              📱 +57 (123) 456-7890
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Artinapia. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
