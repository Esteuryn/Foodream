function LocationSection() {
  return (
    <section id="location" className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Us</h2>
          <p className="text-lg text-gray-300 mb-4">
            Come visit us at our New York location! We're serving fresh food every day with love.
          </p>

          <ul className="text-gray-400 text-sm space-y-1 mb-6">
            <li><strong>Address:</strong> 517 E 117th St, New York, NY 10035</li>
            <li><strong>Open Hours:</strong> Mon–Sun, 10:00 AM – 10:00 PM</li>
            <li><strong>Phone:</strong> (212) 555-1234</li>
          </ul>

          <a
            href="https://maps.app.goo.gl/idSZSZB2UtLj8gR46"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-300 transition"
          >
            Open in Google Maps
          </a>
        </div>

        {/* Map embed */}
        <div className="w-full h-80 shadow-xl rounded-lg overflow-hidden">
         <iframe
            title="Restaurant Location"
            className="w-full h-full grayscale"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.1593890346014!2d-73.9329181240943!3d40.79745107138667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f63fa2e3f729%3A0x24eb14aabf64629a!2s517%20E%20117th%20St%2C%20New%20York%2C%20NY%2010035%2C%20USA!5e0!3m2!1sen!2sdo!4v1716778500000!5m2!1sen!2sdo"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
         ></iframe>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;