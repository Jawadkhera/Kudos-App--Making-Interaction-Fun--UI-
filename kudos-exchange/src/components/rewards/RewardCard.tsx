import type { LucideIcon } from 'lucide-react';
import { Lock } from 'lucide-react';
import { cn } from '../../lib/utils';

interface RewardCardProps {
    title: string;
    cost: number;
    icon: LucideIcon;
    disabled?: boolean;
    lockReason?: string;
}

export const RewardCard = ({ title, cost, icon: Icon, disabled, lockReason }: RewardCardProps) => {
    return (
        <div className={cn(
            "bg-white rounded-2xl border p-6 flex flex-col items-center text-center transition-all",
            disabled
                ? "border-slate-100 opacity-60 grayscale cursor-not-allowed"
                : "border-slate-100 shadow-sm hover:shadow-md hover:border-primary-200"
        )}>
            <div className={cn(
                "w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors",
                disabled ? "bg-slate-100 text-slate-400" : "bg-primary-50 text-primary-600"
            )}>
                <Icon className="w-8 h-8" />
            </div>

            <h3 className="font-bold text-slate-900 mb-1">{title}</h3>
            <p className="text-sm font-semibold text-slate-500 mb-6">{cost} Coins</p>

            {disabled ? (
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1.5 rounded-full">
                    <Lock className="w-3 h-3" />
                    {lockReason}
                </div>
            ) : (
                <button className="w-full py-2 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl transition-colors shadow-sm shadow-primary-600/20 active:scale-95">
                    Redeem
                </button>
            )}
        </div>
    );
};
