import { motion } from "framer-motion";

// Assets
import csUfrn from "@/assets/IEEE CS UFRN 2.png";
import cs80 from "@/assets/cs80.png";
import csSyp from "@/assets/CS SYP Activities - preta.png";
import nanoMentoring from "@/assets/Nano Mentoring - branca.png";
import iePuzzelers from "@/assets/Puzzlers-branca.png";
import ieCollabratec from "@/assets/IEEE Collabratec-branca.png";
import ieUfrn from "@/assets/IEEE UFRN-branca.png";
import ufrn from "@/assets/UFRN.png";

const Sponsors = () => {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-black py-20 overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4">
        
        {/* --- SEÇÃO 1: REALIZAÇÃO --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
          transition={{ delay: 0.1 }}
          className="w-full flex flex-col items-center text-center mb-24"
        >
          <h3 className="font-display text-xl md:text-2xl font-bold text-lime uppercase tracking-[0.25em] mb-12">
            Realização
          </h3>
          <div className="flex justify-center items-center">
            <img 
              src={csUfrn} 
              alt="IEEE Computer Society UFRN" 
              className="h-12 md:h-20 object-contain" 
            />
          </div>
        </motion.div>

        {/* --- SEÇÃO 2: PATROCÍNIO --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
          transition={{ delay: 0.3 }}
          className="w-full flex flex-col items-center text-center mb-10"
        >
          <h3 className="font-display text-xl md:text-2xl font-bold text-lime uppercase tracking-[0.25em] mb-12">
            Patrocínio
          </h3>
          {/* Alinhamento garantido pelo items-center e gap consistente */}
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-10">
            <img src={cs80} alt="IEEE CS 80 Years" className="h-18 md:h-60 object-contain" />
            <img src={csSyp} alt="IEEE CS SYP Activities" className="h-18 md:h-60 object-contain -ml-4 md:-ml-20" />
            <img src={nanoMentoring} alt="Nano Mentoring" className="h-18 md:h-60 object-contain" />
          </div>
        </motion.div>

        {/* --- SEÇÃO 3: APOIO --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
          transition={{ delay: 0.5 }}
          className="w-full flex flex-col items-center text-center mb-20"
        >
          <h3 className="font-display text-xl md:text-2xl font-bold text-lime uppercase tracking-[0.25em]">
            Apoio
          </h3>
          {/* Aqui mantive seus tamanhos menores (h-15/h-40) com alinhamento central */}
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            <img src={iePuzzelers} alt="IEEE Puzzlers" className="h-10 md:h-60 object-contain" />
            <img src={ieCollabratec} alt="IEEE Collabratec" className="h-8 md:h-12 object-contain" />
            <img src={ieUfrn} alt="IEEE UFRN Student Branch" className="h-10 md:h-14 object-contain" />
            <img src={ufrn} alt="UFRN" className="h-14 md:h-24 object-contain" />
          </div>
        </motion.div>

        {/* --- RODAPÉ FINAL --- */}
        <div className="mt-20 pt-10 border-t border-white/10 text-center">
          <p className="font-body text-white/50 text-sm md:text-base">
            © 2026 TechX Natal — IEEE CS UFRN.
            <span className="block mt-2">
              Desenvolvido por{" "}
              <a
                href="https://www.linkedin.com/in/gabriel-frança-628074228"
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