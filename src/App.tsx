/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Plus, Save, Thermometer, Settings } from 'lucide-react';

const REFRIGERANTS = ['R-22', 'R-410A', 'R-134a', 'R-404A'];
const SYSTEMS = ['Air Conditioner', 'Fridge', 'Freezer'];

export default function App() {
  const [refrigerant, setRefrigerant] = useState(REFRIGERANTS[0]);
  const [system, setSystem] = useState(SYSTEMS[0]);
  const [ambientTemp, setAmbientTemp] = useState(70);
  
  // Simulated Calculation Engine
  const calculatePressures = (ref: string, sys: string, temp: number) => {
    // Simplified logic for demonstration
    const base = temp * 1.5;
    return {
      suction: (base - 20).toFixed(1),
      high: (base + 150).toFixed(1)
    };
  };

  const pressures = calculatePressures(refrigerant, system, ambientTemp);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 font-sans">
      <header className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
        <h1 className="text-xl font-bold tracking-tight">HVAC-R Tools</h1>
        <button className="p-2 hover:bg-slate-800 rounded-full"><Settings size={20} /></button>
      </header>

      <div className="grid gap-6">
        <section className="bg-slate-900 p-6 rounded-xl border border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <select value={refrigerant} onChange={e => setRefrigerant(e.target.value)} className="bg-slate-800 p-3 rounded-lg border border-slate-700">
              {REFRIGERANTS.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
            <select value={system} onChange={e => setSystem(e.target.value)} className="bg-slate-800 p-3 rounded-lg border border-slate-700">
              {SYSTEMS.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <input type="number" value={ambientTemp} onChange={e => setAmbientTemp(Number(e.target.value))} className="bg-slate-800 p-3 rounded-lg border border-slate-700" placeholder="Ambient Temp" />
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="text-sm text-slate-400 mb-1">Suction PSI</div>
              <div className="text-4xl font-bold tabular-nums">{pressures.suction}</div>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="text-sm text-slate-400 mb-1">High PSI</div>
              <div className="text-4xl font-bold tabular-nums">{pressures.high}</div>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 p-6 rounded-xl border border-slate-800">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2"><Plus /> New Job Log</h2>
          {/* Placeholder for Job Logging Form */}
          <button className="w-full bg-emerald-600 text-white p-3 rounded-lg font-semibold flex items-center justify-center gap-2">
            <Save size={20} /> Save Job Entry
          </button>
        </section>
      </div>
    </div>
  );
}
