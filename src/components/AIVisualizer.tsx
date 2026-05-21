import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Cpu, Network, RefreshCw, BarChart, Binary } from 'lucide-react';

export default function AIVisualizer() {
  const [activeEpoch, setActiveEpoch] = useState(1);
  const [accuracy, setAccuracy] = useState(0.825);
  const [loss, setLoss] = useState(0.485);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState(true);

  // Epoch incrementing and log generation logic
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveEpoch((prev) => {
        const next = prev < 500 ? prev + 1 : 1;
        
        // Simulating fine improvements in accuracy and loss
        if (next === 1) {
          setAccuracy(0.825);
          setLoss(0.485);
        } else {
          setAccuracy((acc) => Math.min(0.988, Number((acc + Math.random() * 0.0012).toFixed(4))));
          setLoss((ls) => Math.max(0.015, Number((ls - Math.random() * 0.0015).toFixed(4))));
        }

        // Generate thematic log statements
        const logs = [
          `Epoch ${next}/500: loss=${(loss - Math.random() * 0.001).toFixed(4)} - val_acc=${accuracy.toFixed(4)}`,
          `Learning rate decayed to ${(0.001 * Math.exp(-next / 150)).toExponential(3)}`,
          `TensorFlow: Weights optimized via Adam Optimizer.`,
          `Signal propagation completed across all hidden layers.`,
          `Successfully processed batch size 64 recursively.`,
          `Synced active telemetry to main model parameters.`,
        ];
        
        setTerminalLogs((prevLogs) => {
          const freshLog = logs[Math.floor(Math.random() * logs.length)];
          const updated = [...prevLogs, `[${new Date().toLocaleTimeString()}] ${freshLog}`];
          if (updated.length > 5) {
            return updated.slice(updated.length - 5);
          }
          return updated;
        });

        return next;
      });
    }, 1800);

    return () => clearInterval(interval);
  }, [isPlaying, accuracy, loss]);

  // Initial terminal logs
  useEffect(() => {
    setTerminalLogs([
      `[${new Date().toLocaleTimeString()}] Initializing neural architecture...`,
      `[${new Date().toLocaleTimeString()}] Input variables defined: [Dimension: 128]`,
      `[${new Date().toLocaleTimeString()}] Deep network fully connected on ports [B.Tech ACEIT]`,
      `[${new Date().toLocaleTimeString()}] Ready to stream data. click "Optimize" button to toggle.`
    ]);
  }, []);

  return (
    <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden border-[10px] border-white shadow-[0_30px_70px_rgba(131,82,69,0.12)] bg-gradient-to-b from-[#fdfbf7] via-white to-[#fff9f6] p-6 sm:p-8 flex flex-col justify-between font-sans">
      
      {/* Visualizer Header */}
      <div className="flex items-center justify-between border-b border-[#ffdbd1]/30 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-[#ffdbd1]/50 text-[#835245] shadow-sm">
            <Cpu className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#835245]/70 block">
              Core Engine
            </span>
            <span className="text-xs font-semibold text-[#271813] font-mono tracking-tight flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7d562d] inline-block animate-ping"></span>
              MODEL::TRAINING_ACTIVE
            </span>
          </div>
        </div>
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          title="Toggle Training Simulation"
          className="p-2.5 rounded-xl border border-[#ffdbd1]/40 hover:bg-[#ffdbd1]/20 active:scale-95 transition-all text-[#835245] cursor-pointer flex items-center justify-center bg-white/60 shadow-xs"
        >
          <RefreshCw className={`w-4 h-4 ${isPlaying ? 'animate-spin [animation-duration:8s]' : ''}`} />
        </button>
      </div>

      {/* Interactive Neural Network Visualization Block */}
      <div className="my-5 flex-1 relative flex flex-col justify-center min-h-[160px]">
        {/* Animated Background Flowing Grid */}
        <div className="absolute inset-0 opacity-15 overflow-hidden rounded-xl">
          <svg width="100%" height="100%" className="strokes-clay">
            <defs>
              <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#835245" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* SVG Neural Connections Diagram */}
        <div className="relative w-full h-[150px] flex items-center justify-around z-10 px-4">
          
          {/* Layer 1: Input */}
          <div className="flex flex-col justify-between h-full py-6 relative">
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[9px] font-bold text-stone-400 uppercase tracking-widest font-mono">
              Input
            </span>
            {[1, 2, 3].map((node) => (
              <div 
                key={`input-${node}`} 
                className="w-4 h-4 rounded-full bg-[#835245]/25 border-2 border-[#835245] relative flex items-center justify-center shadow-xs"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#835245] animate-ping" />
              </div>
            ))}
          </div>

          {/* SVG Connector lines */}
          <svg className="absolute inset-x-0 inset-y-0 w-full h-full pointer-events-none stroke-[#835245]/20" fill="none">
            {/* Input to Hidden 1 */}
            <path d="M 40,24 L 130,12 L 40,75 L 130,12 L 40,126 L 130,12" strokeWidth="1.5" strokeDasharray="3,3" />
            <path d="M 40,24 L 130,75 L 40,75 L 130,75 L 40,126 L 130,75" strokeWidth="1.5" />
            <path d="M 40,24 L 130,138 L 40,75 L 130,138 L 40,126 L 130,138" strokeWidth="1.5" strokeDasharray="3,3" />
            
            {/* Hidden 1 to Output */}
            <path d="M 130,12 L 220,75 M 130,75 L 220,75 M 130,138 L 220,75" strokeWidth="2.5" className="stroke-[#835245]/50" />
            
            {/* Pulsing signal markers moving along paths */}
            <circle r="3" fill="#7d562d">
              <animateMotion dur="2.1s" repeatCount="indefinite" path="M 40,75 L 130,75 L 220,75" />
            </circle>
            <circle r="3.5" fill="#835245">
              <animateMotion dur="1.8s" repeatCount="indefinite" path="M 40,24 L 130,12 L 220,75" />
            </circle>
            <circle r="2.5" fill="#f4b5a4">
              <animateMotion dur="2.5s" repeatCount="indefinite" path="M 40,126 L 130,138 L 220,75" />
            </circle>
          </svg>

          {/* Layer 2: Hidden */}
          <div className="flex flex-col justify-between h-full py-2 relative">
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[9px] font-bold text-stone-400 uppercase tracking-widest font-mono">
              Dense
            </span>
            {[1, 2, 3, 4].map((node) => (
              <div 
                key={`hidden-${node}`} 
                className="w-5 h-5 rounded-full bg-[#fdfbf7] border-2 border-[#7d562d] relative flex items-center justify-center shadow-xs"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#7d562d]" />
              </div>
            ))}
          </div>

          {/* Layer 3: Output */}
          <div className="flex flex-col justify-center h-full relative">
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[9px] font-bold text-[#835245] uppercase tracking-widest font-mono whitespace-nowrap">
              Predict (Y)
            </span>
            <div className="w-8 h-8 rounded-full bg-[#ffdbd1] border-2 border-[#835245] flex items-center justify-center shadow-md shadow-[#835245]/15">
              <Network className="w-4 h-4 text-[#835245]" />
            </div>
          </div>

        </div>
      </div>

      {/* Real-time Dashboard Curves & Statistics */}
      <div className="mt-2 grid grid-cols-3 gap-3 border-t border-[#ffdbd1]/30 pt-4 text-left">
        <div>
          <span className="text-[10px] uppercase font-bold text-[#835245]/60 tracking-wider font-sans block mb-0.5">
            Epoch Count
          </span>
          <span className="text-sm font-mono font-bold text-[#271813]">
            {activeEpoch} <span className="text-stone-400 text-[10px]">/500</span>
          </span>
        </div>
        <div>
          <span className="text-[10px] uppercase font-bold text-[#835245]/60 tracking-wider font-sans block mb-0.5">
            Val Accuracy
          </span>
          <span className="text-sm font-mono font-bold text-[#835245]">
            {(accuracy * 100).toFixed(2)}%
          </span>
        </div>
        <div>
          <span className="text-[10px] uppercase font-bold text-[#835245]/60 tracking-wider font-sans block mb-0.5">
            Entropy Loss
          </span>
          <span className="text-sm font-mono font-bold text-[#7d562d]">
            {loss.toFixed(4)}
          </span>
        </div>
      </div>

      {/* Terminal Telemetry Board */}
      <div className="mt-4 p-4 rounded-2xl bg-[#271813] border border-[#271813]/80 text-left relative overflow-hidden group">
        <div className="flex items-center justify-between border-b border-[#fff8f6]/10 pb-2 mb-2">
          <div className="flex items-center gap-1.5 text-[8.5px] uppercase font-bold tracking-widest text-[#fdfbf7]/60 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f4b5a4] mr-1 inline-block animate-pulse"></span>
            Telemetry Stream logs
          </div>
          <Binary className="w-3.5 h-3.5 text-[#ffdbd1]/30" />
        </div>
        <div className="space-y-1.5 font-mono text-[9px] text-[#fdfbf7]/80 leading-relaxed overflow-hidden h-[74px]">
          {terminalLogs.map((log, index) => (
            <div 
              key={index} 
              className={`truncate group-hover:text-white transition-colors duration-150 ${index === terminalLogs.length - 1 ? 'text-[#ffdbd1] font-semibold' : ''}`}
            >
              {log}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
