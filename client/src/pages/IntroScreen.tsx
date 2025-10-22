import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Activity, Scan, Zap } from "lucide-react";
import { useLocation } from "wouter";

export default function IntroScreen() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center overflow-hidden relative">
      {/* Background animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background opacity-50" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-8">
            <motion.div
              className="relative"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img 
                src="/feriscan-logo.png" 
                alt="Feriscan Logo" 
                className="w-48 h-auto drop-shadow-2xl"
              />
              <motion.div
                className="absolute inset-0 rounded-lg"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                style={{
                  background: 'radial-gradient(circle, rgba(237, 26, 59, 0.3) 0%, transparent 70%)',
                }}
              />
            </motion.div>
          </div>
          <p className="text-2xl text-primary font-semibold mb-2">
            A evolução no cuidado de feridas
          </p>
          <p className="text-xl text-muted-foreground mb-12">
            Precisão à sua mão
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border">
            <Scan className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Análise Precisa</h3>
            <p className="text-sm text-muted-foreground">
              Laser de precisão científica para medições exatas
            </p>
          </div>
          <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-blue-500/30">
            <Activity className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Múltiplos Parâmetros</h3>
            <p className="text-sm text-muted-foreground">
              Temperatura, pH, tecido, exsudato e muito mais
            </p>
          </div>
          <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border">
            <Zap className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Resultados Rápidos</h3>
            <p className="text-sm text-muted-foreground">
              Análise completa em segundos com relatório detalhado
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            size="lg"
            className="text-lg px-12 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/50"
            onClick={() => setLocation("/scan")}
          >
            Iniciar Análise
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 text-sm text-muted-foreground"
        >
          Simulador de Prova de Conceito - Feriscan Healthtech Ltda.
        </motion.p>
      </div>
    </div>
  );
}

