function ComboOffer() {
  return (
    <section id= "specials" className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 items-center gap-10">
        
        {/* Text section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Special Combo of the Month!
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Try our limited-time seasonal mushroom burger combo — a juicy burger topped with sautéed mushrooms, served with crispy yuca fries and a refreshing orange lemon juice. Available while supplies last!
          </p>
          <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-300 transition">
            Order Now
          </button>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/menu/combo-placeholder.png"
            alt="Special Combo"
            className="rounded-xl w-full max-w-md shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default ComboOffer;
