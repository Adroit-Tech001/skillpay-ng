'use client';

import { SalaryRange, SkillLevel } from '@/lib/types';
import { formatCurrency } from '@/lib/utils';
import { useState } from 'react';

interface SalaryCardProps {
  title: string;
  local: SalaryRange;
  remote: SalaryRange;
  demand: number;
  trend: number;
}

export default function SalaryCard({ title, local, remote, demand, trend }: SalaryCardProps) {
  const [workType, setWorkType] = useState<'local' | 'remote'>('local');
  const [currency, setCurrency] = useState<'NGN' | 'USD'>('NGN');

  const currentSalary = workType === 'local' ? local : remote;
  const isCurrency = currency === 'NGN';

  const getSalaryLevel = (level: SkillLevel) => {
    const salary = isCurrency ? currentSalary[level].naira : currentSalary[level].usd;
    return formatCurrency(salary, currency);
  };

  const getDemandColor = () => {
    if (demand >= 9) return 'bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-100';
    if (demand >= 7) return 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100';
    return 'bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-100';
  };

  return (
    <div className="card p-6">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className={`px-3 py-1 rounded-full text-sm font-semibold ${getDemandColor()}`}>
          Demand: {demand}/10
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-4 mb-6 flex-wrap">
        <div className="flex gap-2">
          <button
            onClick={() => setWorkType('local')}
            className={`px-4 py-2 rounded-lg font-medium ${
              workType === 'local'
                ? 'bg-primary-600 text-white'
                : 'bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white'
            }`}
          >
            Local
          </button>
          <button
            onClick={() => setWorkType('remote')}
            className={`px-4 py-2 rounded-lg font-medium ${
              workType === 'remote'
                ? 'bg-primary-600 text-white'
                : 'bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white'
            }`}
          >
            Remote
          </button>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setCurrency('NGN')}
            className={`px-4 py-2 rounded-lg font-medium ${
              currency === 'NGN'
                ? 'bg-primary-600 text-white'
                : 'bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white'
            }`}
          >
            ₦ Naira
          </button>
          <button
            onClick={() => setCurrency('USD')}
            className={`px-4 py-2 rounded-lg font-medium ${
              currency === 'USD'
                ? 'bg-primary-600 text-white'
                : 'bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white'
            }`}
          >
            $ USD
          </button>
        </div>
      </div>

      {/* Salary Ranges */}
      <div className="space-y-4">
        <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
          <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">Beginner Level</div>
          <div className="text-2xl font-bold text-primary-600">{getSalaryLevel('beginner')}</div>
          <div className="text-xs text-slate-500 mt-2">Monthly salary range</div>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
          <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">Intermediate Level</div>
          <div className="text-2xl font-bold text-primary-600">{getSalaryLevel('intermediate')}</div>
          <div className="text-xs text-slate-500 mt-2">Monthly salary range</div>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
          <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">Senior Level</div>
          <div className="text-2xl font-bold text-primary-600">{getSalaryLevel('senior')}</div>
          <div className="text-xs text-slate-500 mt-2">Monthly salary range</div>
        </div>
      </div>

      {/* Trend */}
      <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
        <div className="flex items-center gap-2">
          <span className="text-sm text-slate-600 dark:text-slate-400">Market Trend:</span>
          <span className={`font-bold ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {trend > 0 ? '+' : ''}{trend}%
          </span>
        </div>
      </div>
    </div>
  );
}
