function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center space-y-4 text-center">

        {/* Logo + nombre */}
        <div className="flex items-center gap-2">
          <img src="/src/assets/logo.svg" alt="Foodream Logo" className="w-8 h-8" />
          <span className="text-lg font-semibold">Foodream</span>
        </div>

        {/* Lema */}
        <p className="text-sm text-gray-400">
          Dream it. Taste it. Love it.
        </p>

        {/* Redes sociales */}
        <div className="flex gap-4">
        <a href="#" aria-label="Instagram" className="hover:text-yellow-400 transition" target="_blank" rel="noreferrer">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 2 .2 2.6.4.6.2 1.1.5 1.6 1 .5.5.8 1 1 1.6.2.6.3 1.4.4 2.6.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 2-.4 2.6-.2.6-.5 1.1-1 1.6-.5.5-1 .8-1.6 1-.6.2-1.4.3-2.6.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-2-.2-2.6-.4-.6-.2-1.1-.5-1.6-1-.5-.5-.8-1-1-1.6-.2-.6-.3-1.4-.4-2.6-.1-1.2-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-1.2.2-2 .4-2.6.2-.6.5-1.1 1-1.6.5-.5 1-.8 1.6-1 .6-.2 1.4-.3 2.6-.4 1.2-.1 1.6-.1 4.8-.1zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.8.4-1.2.8-.4.4-.6.7-.8 1.2-.2.4-.3 1-.4 2.1-.1 1.1-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1.1.2 1.7.4 2.1.2.5.4.8.8 1.2.4.4.7.6 1.2.8.4.2 1 .3 2.1.4 1.1.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.8-.4 1.2-.8.4-.4.6-.7.8-1.2.2-.4.3-1 .4-2.1.1-1.1.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.4-.8-.8-1.2-.4-.4-.7-.6-1.2-.8-.4-.2-1-.3-2.1-.4-1.1-.1-1.6-.1-4.7-.1z"/>
            <path d="M12 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.6-10.9a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
            </svg>
        </a>
        <a href="#" aria-label="Facebook" className="hover:text-yellow-400 transition" target="_blank" rel="noreferrer">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12z" />
            </svg>
        </a>
        <a href="#" aria-label="WhatsApp" className="hover:text-yellow-400 transition" target="_blank" rel="noreferrer">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32">
            <path d="M16 3C9.4 3 4 8.4 4 15c0 2.7 1 5.2 2.7 7.2L4 29l7-2.5c1.9 1 4.1 1.6 6.3 1.6 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 21c-2 0-4-.6-5.7-1.7l-.4-.3-4.1 1.5 1.4-4.1-.3-.4A9 9 0 1 1 25 16c0 5-4 9-9 9z" />
            <path d="M21.2 18.3c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.9 1-.2.2-.3.2-.6.1-.3-.1-1.1-.4-2-1.2-.7-.6-1.2-1.3-1.3-1.6-.1-.3 0-.5.1-.6.1-.1.2-.3.4-.5.2-.2.2-.3.3-.5.1-.1 0-.4 0-.6s-.6-1.5-.8-2c-.2-.4-.4-.4-.6-.4h-.5c-.1 0-.5 0-.8.4-.2.3-1 1-1 2.4 0 1.4 1 2.7 1.1 2.9.1.2 2.1 3.4 5.1 4.5.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.5-.6 1.7-1.2.2-.6.2-1.2.2-1.3 0-.1 0-.2-.2-.3z" />
            </svg>
        </a>
        </div>


        {/* Copyright */}
        <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Foodream. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
