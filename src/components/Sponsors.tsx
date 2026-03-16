import { motion } from "framer-motion";
import csImg from "@/assets/CS.png";
import iePuzzelers from "@/assets/I3E_Puzzelers.png";
import ieUfrn from "@/assets/I3E_UFRN.png";
import ieYoungProfession from "@/assets/I3E_YoungProfession.png";
import nanoMentoring from "@/assets/nanoMentoring.png";

const Sponsors = () => {
  // Colocamos as logos num array para facilitar a duplicação no carrossel
  const logos = [csImg, iePuzzelers, ieUfrn, ieYoungProfession, nanoMentoring];

  return (
    <footer id = "parceiros" className="bg-black py-20 overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4">
        
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-tight mb-4">
            Realização e Apoio
          </h2>
          <div className="w-24 h-1 bg-lime mx-auto rounded-full" />
        </motion.div>

        {/* --- CARROSSEL --- */}
        <div className="relative flex overflow-hidden group">
          <motion.div
            className="flex whitespace-nowrap items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 20,
              repeat: Infinity,
            }}
          >
            {/* Renderizamos o array duas vezes para criar o efeito infinito */}
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Sponsor ${index}`}
                className="h-24 md:h-32 mx-8 object-contain"
              />
            ))}
          </motion.div>
        </div>

        {/* --- RODAPÉ COM O TEU NOME --- */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="font-body text-white/50 text-sm">
            © 2026 TechX Natal 26 — IEEE CS. Todos os direitos reservados.
            <span className="block mt-2">
              Desenvolvido por{" "}
              <a 
                href="https:\\www.linkedin.com/in/gabriel-frança-628074228" // Coloca o teu link aqui
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lime hover:underline transition-all duration-300 font-medium"
              >
                Gabriel França
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Sponsors;




