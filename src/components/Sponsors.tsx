import { motion } from "framer-motion";
import csUfrn from "@/assets/csUfrn.png";
import iePuzzelers from "@/assets/I3E_Puzzelers.png";
import ieUfrn from "@/assets/I3E_UFRN.png";
import ieYoungProfession from "@/assets/I3E_YoungProfession.png";
import nanoMentoring from "@/assets/nanoMentoring.png";
import ufrn from "@/assets/UFRN.png";
import cs80 from "@/assets/cs80.png"
import csSyp from "@/assets/csSyp.png"
import ieCollabratec from "@/assets/ieCollabratec.png"

const Sponsors = () => {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer id="parceiros" className="bg-black py-20">
      <div className="container max-w-7xl mx-auto px-4">
        
        {/* CONTAINER VERTICAL - FOCO NO TAMANHO DOS COMPONENTES */}
        <div className="flex flex-col gap-20 items-center">
          
          {/* SECÇÃO: REALIZAÇÃO */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariant}
            className="w-full flex flex-col items-center text-center"
          >
            <h3 className="font-display text-xl md:text-2xl font-bold text-lime uppercase tracking-[0.25em] mb-10">
              Realização
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-2">
              <img src={csUfrn} alt="IEEE Computer Society" className="h-32 md:h-40 object-contain" />
            </div>
          </motion.div>

          {/* SECÇÃO: PATROCÍNIO */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariant}
            transition={{ delay: 0.1 }}
            className="w-full flex flex-col items-center text-center"
          >
            <h3 className="font-display text-xl md:text-2xl font-bold text-lime uppercase tracking-[0.25em] mb-10">
              Patrocínio
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-210">
              <img src={cs80} alt="Computer Society" className="h-32 md:h-60 object-contain" />
              <img src={csSyp} alt="Computer Society SYP" className="h-32 md:h-60 object-contain" />
              <img src={nanoMentoring} alt="Nano Mentoring" className="h-32 md:h-50 object-contain" />
            </div>
          </motion.div>

          {/* SECÇÃO: APOIO */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariant}
            transition={{ delay: 0.2 }}
            className="w-full flex flex-col items-center text-center"
          >
            <h3 className="font-display text-xl md:text-2xl font-bold text-lime uppercase tracking-[0.25em] mb-10">
              Apoio
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-2">
              <img src={iePuzzelers} alt="IEEE Puzzlers" className="h-32 md:h-40 object-contain" />
              <img src={ieCollabratec} alt="IEEE Collabratec" className="h-32 md:h-40 object-contain" />
              <img src={ieUfrn} alt="IEEE UFRN" className="h-32 md:h-40 object-contain" />
              <img src={ufrn} alt="Ufrn" className="h-32 md:h-40 object-contain" />

            </div>
          </motion.div>
        </div>

        {/* --- RODAPÉ FINAL --- */}
        <div className="mt-20 pt-10 border-t border-white/10 text-center">
          <p className="font-body text-white/50 text-sm md:text-base">
            © 2026 TechX Natal 26 — IEEE CS UFRN.
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