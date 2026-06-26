"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Aquí integraras Formspree o tu servicio de emails
    // Formspree: https://formspree.io/
    // Por ahora es un placeholder
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <section id="contacto" className="bg-rose-100 py-20 md:py-32">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-green mb-4">
            Vamos a crear juntos
          </h2>
          <p className="text-lg text-gray-600">
            ¿Tienes un proyecto en mente? Cuéntame tus ideas
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-green/30 focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-green/30 focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Mensaje
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 rounded-lg border border-green/30 focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent"
              placeholder="Cuéntame sobre tu proyecto..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-red hover:bg-pink text-cream py-3 rounded-lg font-semibold transition disabled:opacity-50"
          >
            {status === "loading" ? "Enviando..." : "Enviar mensaje"}
          </button>

          {status === "success" && (
            <p className="text-center text-red font-semibold">
              ¡Mensaje enviado! Pronto me pondré en contacto.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
