import { motion } from "framer-motion";
import { Award, Package, Coffee } from "lucide-react";
import textureWaves from "@/assets/imgFundoBeneficios.png";

const benefits = [
  {
    icon: Package,
    title: "Kit do Participante",
    description: "Receba um kit exclusivo com materiais do evento, brindes e camiseta oficial TechX Natal 26.",
  },
  {
    icon: Award,
    title: "Certificado",
    description: "Certificado de participação validado pelo IEEE Computer Society para enriquecer seu currículo.",
  },
  {
    icon: Coffee,
    title: "Alimentação",
    description: "Coffee break em ambos os dias e almoço incluso exclusivamente no segundo dia de evento.",
  },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="relative py-24 bg-lime overflow-hidden">
      {/* TEXTURA: Aplicada com mix-blend-multiply e opacidade ajustada 
         para interagir com o fundo bg-lime.
      */}
      <div
        className="absolute inset-0 opacity-30 bg-repeat mix-blend-multiply pointer-events-none"
        style={{ 
          backgroundImage: `url(${textureWaves})`, 
          backgroundSize: "600px" 
        }}
      />

      <div className="container relative z-10 max-w-5xl mx-auto px-4">
        {/* Título da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold text-dark uppercase tracking-tight mb-4">
            Benefícios
          </h2>
          <div className="w-24 h-1 bg-royal mx-auto rounded-full" />
        </motion.div>

        {/* Grid de Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="text-center group"
            >
              <div className="w-20 h-20 rounded-2xl bg-dark/10 flex items-center justify-center mx-auto mb-6 transition-colors group-hover:bg-dark/20">
                <benefit.icon className="w-10 h-10 text-dark" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-dark uppercase tracking-wide mb-3">
                {benefit.title}
              </h3>
              <p className="font-body text-dark/80 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;