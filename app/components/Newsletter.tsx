"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Aquí puedes integrar Mailchimp, Formspree, o tu servicio preferido
    // Por ahora es un placeholder
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <section className="bg-gradient-to-r from-dark-green to-dark-green/80 py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-cream mb-4">
          Sígueme en el proceso creativo
        </h2>
        <p className="text-blue-light/90 mb-8 text-lg">
          Suscríbete para recibir actualizaciones de nuevos proyectos, talleres y colaboraciones
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-red hover:bg-pink text-cream px-6 py-3 rounded-lg font-semibold transition disabled:opacity-50"
          >
            {status === "loading" ? "Suscribiendo..." : "Suscribirse"}
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-cream text-sm">¡Gracias! Revisa tu correo para confirmar.</p>
        )}
      </div>
    </section>
  );
}
