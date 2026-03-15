import { motion } from "framer-motion";
import TechXLogo from "./TechXLogo";
import ImagemFundo from "@/assets/imgFundo.png"; 

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-royal overflow-hidden">
      
      {/* Imagem de Fundo */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ImagemFundo})` }}
      />

      {/* Elementos Decorativos */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-lime opacity-20 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-lavender opacity-20 blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      {/* Container Principal com gap reduzido entre os filhos */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center gap-0">
        
        {/* 1. Bloco do Logo - Margem negativa inferior para puxar o texto para cima */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="-mb-6 md:-mb-10" 
        >
          <div className="flex justify-center">
            <TechXLogo variant="lime" className="w-[85vw] md:w-[700px] lg:w-[900px] transition-all duration-300" />
          </div>
        </motion.div>

        {/* 2. Subtítulo - Margem mínima */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-lg md:text-xl text-white/90 tracking-[0.2em] uppercase mb-4"
        >
          Data Science Interdisciplinary in Real Life
        </motion.p>

        {/* 3. Informações de Evento - Espaçamento interno (gap) também reduzido */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 mb-8"
        >
          <div className="flex items-center gap-2 text-white/80 font-body">
            <svg className="w-5 h-5 text-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-base md:text-lg font-medium">15 e 16 de Maio de 2026</span>
          </div>
          <div className="flex items-center gap-2 text-white/80 font-body">
            <svg className="w-5 h-5 text-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-base md:text-lg font-medium">UFRN — Natal, RN</span>
          </div>
        </motion.div>

        {/* 4. Botão de Inscrição */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="https://www.even3.com.br/techx-natal26-ciencia-de-dados-interdisciplinaridade-na-vida-real-701837/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnRbtEPpy-XY4AEZNqAwm8gm_XTG8Z9y2xqQ3G43RDI58GYuZS5XfxtwmaD3U_aem_g72fTXV83zMwZw5oZ-3bJQ"
            className="inline-block bg-lime text-black font-bold font-display text-lg uppercase tracking-wider px-12 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Inscreva-se
          </a>
        </motion.div>
      </div>

      {/* Onda de Fundo */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 52.5C480 45 600 60 720 67.5C840 75 960 75 1080 67.5C1200 60 1320 45 1380 37.5L1440 30V120H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;