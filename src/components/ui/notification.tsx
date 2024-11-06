
import * as React from "react";
import { cn } from "@/lib/utils";

interface PropsNotificacao {
  mensagem: string;
  tipo?: "sucesso" | "erro";
  onClose: () => void;
}

const Notificacao: React.FC<PropsNotificacao> = ({ mensagem, tipo = "sucesso", onClose }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer); 
  }, [onClose]);

  return (
    <div
      className={cn(
        "flex items-center justify-between p-4 rounded-lg shadow-lg text-white text-base transition-all transform-gpu ease-in-out duration-300",
        {
          "bg-green-500": tipo === "sucesso",
          "bg-red-500": tipo === "erro",
        }
      )}
    >
      <span>{mensagem}</span>
      <button
        className="ml-4 text-white hover:text-gray-200 focus:outline-none"
        onClick={onClose}
      >
        ✖
      </button>
    </div>
  );
};

export default Notificacao;
