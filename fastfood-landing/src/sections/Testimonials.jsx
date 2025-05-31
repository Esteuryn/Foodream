import testimonials from "../data/testimonials";

function Testimonials() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">What People Are Saying</h2>
        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-neutral-900 p-6 rounded-xl shadow-lg">
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <div className="text-yellow-400 mb-2">
                {"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}
              </div>
              <p className="text-sm text-gray-300">{t.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
