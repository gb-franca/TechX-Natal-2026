import { useState, useEffect } from "react";
import TechXLogo from "./TechXLogo";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-dark/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4 flex items-center justify-between">
        <TechXLogo variant="lime" className={`transition-all duration-300 ${
      scrolled ? "w-[140px] md:w-[160px]" : "w-[130px] md:w-[230px]"
    }`} />
        <div className="hidden md:flex items-center gap-8 font-body text-sm uppercase tracking-wider">
          <a href="#atividades" className="text-primary-foreground/80 hover:text-lime transition-colors">Atividades</a>
          <a href="#beneficios" className="text-primary-foreground/80 hover:text-lime transition-colors">Benefícios</a>
          <a href="#parceiros" className="text-primary-foreground/80 hover:text-lime transition-colors">Parceiros</a>
        </div>
        <a
          href="https://www.even3.com.br/techx-natal26-ciencia-de-dados-interdisciplinaridade-na-vida-real-701837/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnRbtEPpy-XY4AEZNqAwm8gm_XTG8Z9y2xqQ3G43RDI58GYuZS5XfxtwmaD3U_aem_g72fTXV83zMwZw5oZ-3bJQ"
          className="bg-lime text-dark font-display text-sm uppercase tracking-wider px-6 py-2.5 rounded-lg hover:brightness-110 transition-all"
        >
          Inscreva-se
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
