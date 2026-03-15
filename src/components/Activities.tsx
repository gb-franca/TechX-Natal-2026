import { motion } from "framer-motion";
import { Mic, Code, Users, FlaskConical, Store } from "lucide-react";
import textureDots from "@/assets/texture-dots.png";

const activities = [
  {
    icon: Mic,
    title: "Palestrantes",
    description: "+10 especialistas nacionais e internacionais em Data Science, IA e tecnologias emergentes.",
  },
  {
    icon: Code,
    title: "Hackathon",
    description: "Desafio intensivo de programação para resolver problemas reais com dados interdisciplinares.",
  },
  {
    icon: Users,
    title: "Mentorias",
    description: "Sessões de mentoria com profissionais da indústria e academia para orientar sua carreira.",
  },
  {
    icon: FlaskConical,
    title: "Exposição de Pesquisas",
    description: "Apresentação de trabalhos acadêmicos e projetos inovadores da comunidade.",
  },
  {
    icon: Store,
    title: "Feira de Estandes",
    description: "Empresas e startups expondo soluções e oportunidades de carreira em tecnologia.",
  },
];

const Activities = () => {
  return (
    <section id="atividades" className="relative py-24 bg-background overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] bg-repeat"
        style={{ backgroundImage: `url(${textureDots})`, backgroundSize: "600px" }}
      />

      <div className="container relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground uppercase tracking-tight mb-4">
            Atividades
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-card border border-border rounded-xl p-8 hover:border-secondary transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-14 h-14 rounded-lg bg-royal/10 flex items-center justify-center mb-5 group-hover:bg-royal group-hover:text-primary-foreground transition-colors duration-300">
                <activity.icon className="w-7 h-7 text-royal group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground uppercase tracking-wide mb-3">
                {activity.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {activity.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
