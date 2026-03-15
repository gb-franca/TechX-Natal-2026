import React from "react";
// 1. Importa o caminho da tua imagem (ajusta o nome do ficheiro conforme necessário)
import logoImg from "@/assets/logo-techx.png"; 

interface TechXLogoProps {
  className?: string;
  variant?: "dark" | "light" | "lime"; // Mantemos para não quebrar o código antigo, mesmo que não usemos todas agora
}

const TechXLogo = ({ className = "" }: TechXLogoProps) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      {/* 2. Renderiza a imagem */}
      <img 
        src={logoImg} 
        alt="TechX 26 Natal Logo" 
        className="w-full h-auto object-contain"
        draggable={false}
      />
    </div>
  );
};

export default TechXLogo;