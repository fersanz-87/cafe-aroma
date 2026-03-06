export default function Location() {
  return (
    <section id="ubicacion" className="bg-warm-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-primary-dark md:text-4xl">
            Encuéntranos
          </h2>
          <p className="mt-4 text-lg text-warm-gray">
            Ven a visitarnos, estamos en el corazón de Apodaca
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Map */}
          <div className="overflow-hidden rounded-2xl shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14381.05!2d-100.1885!3d25.7817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662c0a3bbf13a5b%3A0x9c0d6cbf0e26c1a9!2sApodaca%2C%20N.L.!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Café Aroma en Apodaca, Nuevo León"
            />
          </div>

          {/* Contact info */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cream text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-primary-dark">
                  Dirección
                </h3>
                <p className="mt-1 text-warm-gray">
                  Av. Miguel Alemán 456, Col. Centro
                  <br />
                  Apodaca, Nuevo León, C.P. 66600
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cream text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-primary-dark">
                  Horarios
                </h3>
                <div className="mt-1 space-y-1 text-warm-gray">
                  <p>Lunes a Viernes: 7:00 AM - 9:00 PM</p>
                  <p>Sábados: 8:00 AM - 10:00 PM</p>
                  <p>Domingos: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cream text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-primary-dark">
                  Teléfono
                </h3>
                <p className="mt-1 text-warm-gray">
                  <a
                    href="tel:+528112345678"
                    className="transition-colors hover:text-primary"
                  >
                    (81) 8325-5678
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
