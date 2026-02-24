"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/app/actions/contact";

const initialState: ContactState = {
  status: "idle",
  errors: {},
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, initialState);

  return (
    <section id="contacto" className="bg-cream py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-primary-dark md:text-4xl">
            Contáctanos
          </h2>
          <p className="mt-4 text-lg text-warm-gray">
            ¿Tienes alguna pregunta o sugerencia? Nos encantaría escucharte
          </p>
        </div>

        <form action={formAction} className="mt-12 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-primary-dark">
              Nombre *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full rounded-xl border border-primary/20 bg-white px-4 py-3 text-foreground placeholder:text-warm-gray/50 focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none"
              placeholder="Tu nombre completo"
            />
            {state.errors?.name && (
              <p className="mt-1 text-sm text-red-600">{state.errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-primary-dark">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full rounded-xl border border-primary/20 bg-white px-4 py-3 text-foreground placeholder:text-warm-gray/50 focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none"
              placeholder="tu@email.com"
            />
            {state.errors?.email && (
              <p className="mt-1 text-sm text-red-600">{state.errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-primary-dark">
              Teléfono <span className="text-warm-gray">(opcional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="mt-1 block w-full rounded-xl border border-primary/20 bg-white px-4 py-3 text-foreground placeholder:text-warm-gray/50 focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none"
              placeholder="(81) 1234-5678"
            />
            {state.errors?.phone && (
              <p className="mt-1 text-sm text-red-600">{state.errors.phone}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-primary-dark">
              Mensaje *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="mt-1 block w-full rounded-xl border border-primary/20 bg-white px-4 py-3 text-foreground placeholder:text-warm-gray/50 focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none resize-none"
              placeholder="Escribe tu mensaje aquí..."
            />
            {state.errors?.message && (
              <p className="mt-1 text-sm text-red-600">{state.errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark focus:ring-2 focus:ring-gold/20 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? "Enviando..." : "Enviar Mensaje"}
          </button>

          {state.status === "success" && (
            <div className="rounded-xl bg-green-50 border border-green-200 p-4 text-center text-sm text-green-800">
              ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
            </div>
          )}

          {state.status === "error" && !Object.keys(state.errors || {}).length && (
            <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-center text-sm text-red-800">
              Ocurrió un error al enviar tu mensaje. Por favor, intenta de nuevo.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
