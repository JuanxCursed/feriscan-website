export interface WoundAnalysis {
  dimensoes: {
    comprimento: number; // cm
    largura: number; // cm
    profundidade: number; // cm
    area: number; // cm²
  };
  tecido: {
    tipo: string;
    percentual: number;
    secundario: string;
    percentualSecundario: number;
  };
  exsudato: {
    volume: string;
    consistencia: string;
    cor: string;
  };
  bordas: {
    estado: string;
    maceracao: boolean;
    sinaisInfeccao: boolean;
  };
  pelePerilisional: {
    estado: string;
    coloracao: string;
    temperatura: number; // °C
  };
  ph: number;
  temperatura: number; // °C
  risco: string;
  recomendacao: string;
}

export const mockWoundData: WoundAnalysis = {
  dimensoes: {
    comprimento: 4.5,
    largura: 3.2,
    profundidade: 0.8,
    area: 14.4,
  },
  tecido: {
    tipo: "Granulação",
    percentual: 70,
    secundario: "Necrótico",
    percentualSecundario: 30,
  },
  exsudato: {
    volume: "Moderado",
    consistencia: "Seroso",
    cor: "Amarelo claro",
  },
  bordas: {
    estado: "Regulares",
    maceracao: false,
    sinaisInfeccao: false,
  },
  pelePerilisional: {
    estado: "Íntegra",
    coloracao: "Normal",
    temperatura: 34.2,
  },
  ph: 6.8,
  temperatura: 34.2,
  risco: "Baixo",
  recomendacao: "Continuar tratamento atual com acompanhamento semanal",
};

