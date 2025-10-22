import { motion } from "framer-motion";
import { Loader2, Scan } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";

export default function ScanningSimulation() {
  const [, setLocation] = useLocation();
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState<"scanning" | "processing" | "complete">("scanning");

  useEffect(() => {
    // Simular progresso de escaneamento
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setStage("processing");
          setTimeout(() => {
            setStage("complete");
            setTimeout(() => {
              setLocation("/results");
            }, 1000);
          }, 2000);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [setLocation]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center overflow-hidden relative">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 max-w-3xl mx-auto px-8 text-center">
        {/* Device animation */}
        <motion.div
          className="relative mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-64 h-64 mx-auto">
            {/* Outer pulse ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-primary/30"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />

            {/* Middle ring */}
            <motion.div
              className="absolute inset-8 rounded-full border-4 border-primary/50"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.7, 0, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
                delay: 0.3,
              }}
            />

            {/* Center device */}
            <div className="absolute inset-16 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 backdrop-blur-sm flex items-center justify-center border-2 border-primary/50">
              <motion.div
                animate={{
                  rotate: stage === "scanning" ? 360 : 0,
                }}
                transition={{
                  duration: 2,
                  repeat: stage === "scanning" ? Infinity : 0,
                  ease: "linear",
                }}
              >
                <Scan className="w-16 h-16 text-primary" />
              </motion.div>
            </div>

            {/* Laser scanning effect */}
            {stage === "scanning" && (
              <motion.div
                className="absolute left-1/2 w-1 bg-gradient-to-b from-transparent via-primary to-transparent"
                style={{ height: "100%", x: "-50%" }}
                animate={{
                  y: ["-50%", "50%", "-50%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}
          </div>
        </motion.div>

        {/* Status text */}
        <motion.div
          key={stage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {stage === "scanning" && (
            <>
              <h2 className="text-4xl font-bold mb-4">Escaneando Ferida</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Capturando dados com laser de precisão...
              </p>
            </>
          )}
          {stage === "processing" && (
            <>
              <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                <Loader2 className="w-8 h-8 animate-spin" />
                Processando Análise
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Analisando parâmetros clínicos...
              </p>
            </>
          )}
          {stage === "complete" && (
            <>
              <motion.h2
                className="text-4xl font-bold mb-4 text-primary"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                ✓ Análise Completa
              </motion.h2>
              <p className="text-xl text-muted-foreground mb-8">
                Preparando resultados...
              </p>
            </>
          )}
        </motion.div>

        {/* Progress bar */}
        <div className="max-w-md mx-auto">
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-primary/70"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <p className="text-sm text-muted-foreground mt-2">{progress}%</p>
        </div>

        {/* Scanning parameters */}
        {stage === "scanning" && (
          <motion.div
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {[
              { name: "Temperatura", color: "bg-orange-500" },
              { name: "pH", color: "bg-blue-500" },
              { name: "Tecido", color: "bg-primary" },
              { name: "Exsudato", color: "bg-blue-400" },
            ].map((param, i) => (
              <motion.div
                key={param.name}
                className="bg-card/30 backdrop-blur-sm p-4 rounded-lg border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <div className="flex items-center justify-center gap-2">
                  <motion.div
                    className={`w-2 h-2 rounded-full ${param.color}`}
                    animate={{
                      opacity: [1, 0.3, 1],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                  <span className="text-sm">{param.name}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}

