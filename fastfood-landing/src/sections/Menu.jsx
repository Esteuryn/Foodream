import { useState } from "react";
import menuItems from "../data/MenuItems";

const categories = [
  "All",
  ...Array.from(new Set(menuItems.map((item) => item.category)))
];

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="menu" className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Explore Our Full Menu
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedCategory === cat
                  ? "bg-yellow-400 text-black"
                  : "bg-neutral-800 hover:bg-neutral-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <div
              key={item.name}
              className="bg-neutral-900 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <span className="text-yellow-400 font-medium">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-gray-400 mt-2 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;
