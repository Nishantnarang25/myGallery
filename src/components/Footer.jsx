const Footer = () => {
  return (
    <footer className="bg-[#f1f1f1] py-6 mt-20 w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left: Signature */}
        <p className="text-sm text-[#292728]">
          &copy; {new Date().getFullYear()} Nishant. All rights reserved.
        </p>

        {/* Right: Email */}
        <a 
          href="mailto:nishantnarang111@gmail.com"
          className="text-sm text-[#292728] hover:text-[#805AD5] transition-colors"
        >
          nishantnarang111@gmail.com
        </a>
      </div>
    </footer>
  )
}

export default Footer;
