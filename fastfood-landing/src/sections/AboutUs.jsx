function AboutUs() {
  return (
    <section id="about" className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 items-center gap-12">
        
        {/* Texto */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-gray-300 mb-4">
            At Foodream, we believe in making every meal unforgettable. Our journey began with a simple idea — to combine quality ingredients with bold flavors in a place that feels like home.
          </p>
          <p className="text-lg text-gray-400">
            Whether you're here for a quick bite or a full meal, we pour passion into every plate. Our team is dedicated to freshness, flavor, and serving you food that dreams are made of.
          </p>
        </div>

        {/* Imagen (opcional) */}
        <div className="flex justify-center">
          <img
            src="/menu/about-us.jpg"
            alt="Foodream Team"
            className="rounded-xl w-full max-w-md shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
