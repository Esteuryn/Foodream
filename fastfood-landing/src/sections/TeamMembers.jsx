function AboutUs() {
  const TeamMembers = [
    {
      name: "Alex Rivera",
      role: "Co-Founder & Head Chef",
      image: "/team/alex.jpg",
      description:
        "Alex brings over 15 years of culinary experience, crafting bold flavors that define Foodream's signature dishes."
    },
    {
      name: "Sofia Delgado",
      role: "Co-Founder & Creative Director",
      image: "/team/sofia.jpg",
      description:
        "Sofia's vision shapes the brand's identity, ensuring every detail resonates with our commitment to excellence."
    }
  ];

  return (
    <section id="founders" className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Team Members</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {TeamMembers.map((teammenbers, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={teammenbers.image}
                alt={teammenbers.name}
                className="w-40 h-40 rounded-full object-cover mb-4 border-4 border-yellow-400"
              />
              <h3 className="text-xl font-semibold">{teammenbers.name}</h3>
              <p className="text-yellow-400 mb-2">{teammenbers.role}</p>
              <p className="text-gray-300 text-sm max-w-xs">{teammenbers.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutUs;