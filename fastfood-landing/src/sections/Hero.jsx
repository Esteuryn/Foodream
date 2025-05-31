import heroImg from "../assets/hero-burguer.png";

function Hero() {
  return (
    <section id="home" className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 items-center gap-10">
        
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Delicious Food,<br className="hidden md:block" /> Delivered To You
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Enjoy the taste of juicy burgers and crispy fries, freshly made and delivered right to your door.
          </p>
          <div className="mt-6 flex justify-start">
            <a
              href="#menu"
              className="inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-300 transition"
            >
              Explore Our Menu
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={heroImg}
            alt="Juicy burger and fries"
            className="rounded-xl w-full max-w-md shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
