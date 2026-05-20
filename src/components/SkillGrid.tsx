'use client';

import { skillsData } from '@/lib/data/salaryData';
import Link from 'next/link';
import { TrendingUp } from 'lucide-react';

export default function SkillGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skillsData.map((skill) => (
        <Link key={skill.id} href={`/skill/${skill.id}`}>
          <div className="card p-6 hover:shadow-lg hover:border-primary-400 dark:hover:border-primary-600 cursor-pointer h-full">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold mb-1">{skill.name}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{skill.category}</p>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">
              {skill.description}
            </p>

            <div className="space-y-3">
              {/* Demand */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Market Demand</span>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full ${
                        i < Math.ceil(skill.demand / 2)
                          ? 'bg-primary-600'
                          : 'bg-slate-300 dark:bg-slate-700'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Time to Learn */}
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">Learn in</span>
                <span className="font-semibold">{skill.timeToLearn}</span>
              </div>

              {/* Job Trend */}
              <div className="flex items-center gap-2 text-sm text-green-600">
                <TrendingUp size={16} />
                <span className="font-semibold">+{skill.jobMarketTrend}% growth</span>
              </div>

              {/* Salary Preview */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                <div className="text-xs text-slate-500 mb-2">Remote (Monthly)</div>
                <div className="text-lg font-bold text-primary-600">
                  ${skill.salaryRemote.beginner.usd.toLocaleString()} - ${skill.salaryRemote.senior.usd.toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
