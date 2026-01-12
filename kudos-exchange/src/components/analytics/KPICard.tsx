import type { LucideIcon } from 'lucide-react';
import { cn } from '../../lib/utils';

interface KPICardProps {
    title: string;
    value: string;
    subtext?: string;
    icon: LucideIcon;
    trend?: 'up' | 'down' | 'neutral';
    colorClass?: string;
}

export const KPICard = ({ title, value, subtext, icon: Icon, colorClass = "bg-white" }: KPICardProps) => {
    return (
        <div className={cn("p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start justify-between", colorClass)}>
            <div>
                <p className="text-slate-500 text-sm font-medium mb-1">{title}</p>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{value}</h3>
                {subtext && <p className="text-sm font-medium text-green-600 flex items-center gap-1">{subtext}</p>}
            </div>
            <div className="p-3 bg-white/50 rounded-xl backdrop-blur-sm">
                <Icon className="w-6 h-6 text-slate-700" />
            </div>
        </div>
    );
};
