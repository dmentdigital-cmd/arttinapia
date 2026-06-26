export default function Services() {
  const services = [
    {
      title: "Marca Personal",
      color: "from-red to-pink",
      description: "Portafolios, identidad visual, presencia digital. Servicios diseñados para creadores y artistas.",
      items: ["Identidad Visual", "Portafolio Digital", "Branding Personal"],
    },
    {
      title: "Cielo en la Tierra",
      color: "from-blue to-blue-light",
      description: "Proyecto editorial independiente. Ilustración narrativa y libros creativos.",
      items: ["Ilustración Editorial", "Dirección de Arte", "Publicaciones"],
    },
    {
      title: "Servicios 1 a 1",
      color: "from-green to-gold",
      description: "Proyectos personalizados. Desde ilustraciones hasta direcciones creativas completas.",
      items: ["Ilustración Personalizada", "Dirección Creativa", "Asesoría Artística"],
    },
  ];

  return (
    <section id="servicios" className="bg-rose-50 py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-green mb-4">
            Servicios
          </h2>
          <p className="text-lg text-gray-600">
            Tres áreas de trabajo, infinitas posibilidades creativas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-2xl bg-cream hover:shadow-2xl transition duration-300 border border-green/10"
            >
              <div
                className={`h-1 w-12 bg-gradient-to-r ${service.color} rounded-full mb-6 group-hover:w-24 transition-all duration-300`}
              ></div>
              <h3 className="text-2xl font-bold text-dark-green mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-red rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
