import { menuItems } from "@/data/menu";

const categoryLabels: Record<string, string> = {
  cafe: "Cafés",
  bebida: "Bebidas",
  postre: "Postres",
  snack: "Snacks",
};

export default function Menu() {
  return (
    <section id="menu" className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-primary-dark md:text-4xl">
            Nuestro Menú
          </h2>
          <p className="mt-4 text-lg text-warm-gray">
            Descubre nuestras bebidas y delicias preparadas con los mejores ingredientes
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <span className="inline-block rounded-full bg-cream px-3 py-1 text-xs font-medium text-primary">
                {categoryLabels[item.category]}
              </span>
              <h3 className="mt-3 font-heading text-lg font-semibold text-primary-dark">
                {item.name}
              </h3>
              <p className="mt-2 text-sm text-warm-gray">
                {item.description}
              </p>
              <p className="mt-4 text-xl font-bold text-gold">
                ${item.price} <span className="text-sm font-normal text-warm-gray">MXN</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
