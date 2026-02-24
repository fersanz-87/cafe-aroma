import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center justify-center">
      <Image
        src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&q=80"
        alt="Granos de café tostado"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h1 className="font-heading text-5xl font-bold text-white md:text-7xl">
          Café Aroma
        </h1>
        <p className="mt-4 text-xl text-white/90 md:text-2xl">
          El mejor café de Apodaca, Nuevo León
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#menu"
            className="inline-block rounded-full bg-gold px-8 py-3 text-sm font-semibold text-primary-dark transition-colors hover:bg-gold/90"
          >
            Ver Menú
          </a>
          <a
            href="#contacto"
            className="inline-block rounded-full border-2 border-white px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-primary-dark"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  );
}
