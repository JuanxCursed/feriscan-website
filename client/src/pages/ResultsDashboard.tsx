import AnimatedCounter from "@/components/AnimatedCounter";
import TissueChart from "@/components/TissueChart";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockWoundData } from "@/lib/mockData";
import { motion } from "framer-motion";
import {
  Activity,
  AlertCircle,
  Droplets,
  Home,
  Ruler,
  Thermometer,
} from "lucide-react";
import { useLocation } from "wouter";

export default function ResultsDashboard() {
  const [, setLocation] = useLocation();
  const data = mockWoundData;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header
        className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/feriscan-logo.png" 
              alt="Feriscan Logo" 
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-2xl font-bold">Feriscan</h1>
              <p className="text-sm text-muted-foreground">Relatório de Análise</p>
            </div>
          </div>
          <Button
            variant="outline"
            onClick={() => setLocation("/")}
            className="gap-2"
          >
            <Home className="w-4 h-4" />
            Nova Análise
          </Button>
        </div>
      </motion.header>

      {/* Main content */}
      <main className="container py-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          {/* Summary card */}
          <motion.div variants={item}>
            <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <AlertCircle className="w-6 h-6 text-primary" />
                  Resumo da Análise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Nível de Risco
                    </p>
                    <p className="text-3xl font-bold text-primary">
                      {data.risco}
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm text-muted-foreground mb-1">
                      Recomendação
                    </p>
                    <p className="text-lg">{data.recomendacao}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Dimensions */}
          <motion.div variants={item}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Ruler className="w-5 h-5 text-primary" />
                  Dimensões da Ferida
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-secondary/50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">
                      Comprimento
                    </p>
                    <p className="text-2xl font-bold">
                      <AnimatedCounter
                        value={data.dimensoes.comprimento}
                        decimals={1}
                        suffix=" cm"
                      />
                    </p>
                  </div>
                  <div className="bg-secondary/50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Largura</p>
                    <p className="text-2xl font-bold">
                      <AnimatedCounter
                        value={data.dimensoes.largura}
                        decimals={1}
                        suffix=" cm"
                      />
                    </p>
                  </div>
                  <div className="bg-secondary/50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">
                      Profundidade
                    </p>
                    <p className="text-2xl font-bold">
                      <AnimatedCounter
                        value={data.dimensoes.profundidade}
                        decimals={1}
                        suffix=" cm"
                      />
                    </p>
                  </div>
                  <div className="bg-secondary/50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Área</p>
                    <p className="text-2xl font-bold">
                      <AnimatedCounter
                        value={data.dimensoes.area}
                        decimals={1}
                        suffix=" cm²"
                      />
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Tissue and Exudate */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={item}>
              <Card className="h-full border-blue-500/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-blue-500" />
                    Tipo de Tecido
                  </CardTitle>
                </CardHeader>
              <CardContent>
                <div className="mb-8">
                  <TissueChart
                    primary={data.tecido.percentual}
                    secondary={data.tecido.percentualSecundario}
                    primaryLabel={data.tecido.tipo}
                    secondaryLabel={data.tecido.secundario}
                  />
                </div>
                <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold">{data.tecido.tipo}</span>
                        <span className="text-blue-500 font-bold">
                          {data.tecido.percentual}%
                        </span>
                      </div>
                      <div className="h-3 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-blue-500"
                          initial={{ width: 0 }}
                          animate={{ width: `${data.tecido.percentual}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold">
                          {data.tecido.secundario}
                        </span>
                        <span className="text-blue-400 font-bold">
                          {data.tecido.percentualSecundario}%
                        </span>
                      </div>
                      <div className="h-3 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-blue-400"
                          initial={{ width: 0 }}
                          animate={{
                            width: `${data.tecido.percentualSecundario}%`,
                          }}
                          transition={{ duration: 1, delay: 0.7 }}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="h-full border-blue-400/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Droplets className="w-5 h-5 text-blue-400" />
                    Exsudato
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-muted-foreground">Volume</span>
                      <span className="font-semibold">{data.exsudato.volume}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-muted-foreground">Consistência</span>
                      <span className="font-semibold">
                        {data.exsudato.consistencia}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-muted-foreground">Cor</span>
                      <span className="font-semibold">{data.exsudato.cor}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Borders and Perilesional Skin */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={item}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Bordas da Ferida</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-muted-foreground">Estado</span>
                      <span className="font-semibold">{data.bordas.estado}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-muted-foreground">Maceração</span>
                      <span
                        className={`font-semibold ${data.bordas.maceracao ? "text-destructive" : "text-green-500"}`}
                      >
                        {data.bordas.maceracao ? "Sim" : "Não"}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-muted-foreground">
                        Sinais de Infecção
                      </span>
                      <span
                        className={`font-semibold ${data.bordas.sinaisInfeccao ? "text-destructive" : "text-green-500"}`}
                      >
                        {data.bordas.sinaisInfeccao ? "Sim" : "Não"}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Pele Perilesional</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-muted-foreground">Estado</span>
                      <span className="font-semibold">
                        {data.pelePerilisional.estado}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-muted-foreground">Coloração</span>
                      <span className="font-semibold">
                        {data.pelePerilisional.coloracao}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-muted-foreground">Temperatura</span>
                      <span className="font-semibold">
                        {data.pelePerilisional.temperatura}°C
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Temperature and pH */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={item}>
              <Card className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 border-orange-500/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Thermometer className="w-5 h-5 text-orange-500" />
                    Temperatura da Pele
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <motion.p
                      className="text-6xl font-bold text-orange-500"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 1 }}
                    >
                      <AnimatedCounter
                        value={data.temperatura}
                        decimals={1}
                        suffix="°C"
                      />
                    </motion.p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Temperatura normal (34-36°C)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-blue-500" />
                    pH da Ferida
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <motion.p
                      className="text-6xl font-bold text-blue-500"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.2 }}
                    >
                      <AnimatedCounter
                        value={data.ph}
                        decimals={1}
                      />
                    </motion.p>
                    <p className="text-sm text-muted-foreground mt-2">
                      pH levemente ácido (ideal: 5.5-7.0)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div variants={item} className="text-center pt-8 pb-4">
            <p className="text-sm text-muted-foreground">
              Relatório gerado pelo sistema Feriscan • {new Date().toLocaleDateString("pt-BR")} às {new Date().toLocaleTimeString("pt-BR")}
            </p>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}

