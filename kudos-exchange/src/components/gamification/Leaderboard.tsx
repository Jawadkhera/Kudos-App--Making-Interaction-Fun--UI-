import { Crown, TrendingUp } from 'lucide-react';
import { LEADERBOARD } from '../../data/mockData';
import { cn } from '../../lib/utils';

export const Leaderboard = () => {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <div className="flex items-center gap-2 mb-6">
                <Crown className="w-5 h-5 text-yellow-500" />
                <h2 className="font-bold text-slate-800">Top Contributors</h2>
            </div>

            <div className="space-y-4">
                {LEADERBOARD.map((entry) => (
                    <div
                        key={entry.rank}
                        className={cn(
                            "flex items-center gap-3 p-3 rounded-xl transition-colors",
                            entry.rank === 1 ? "bg-yellow-50 border border-yellow-100" : "hover:bg-slate-50"
                        )}
                    >
                        <div className={cn(
                            "w-6 h-6 flex items-center justify-center font-bold text-sm rounded-full",
                            entry.rank === 1 ? "text-yellow-700" :
                                entry.rank === 2 ? "text-slate-600" :
                                    entry.rank === 3 ? "text-orange-600" : "text-slate-400"
                        )}>
                            {entry.rank}
                        </div>

                        <img
                            src={entry.user.avatar}
                            alt={entry.user.name}
                            className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                        />

                        <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-slate-800 text-sm truncate">{entry.user.name}</h4>
                            <p className="text-xs text-slate-500 truncate">{entry.user.jobTitle}</p>
                        </div>

                        <div className="flex items-center gap-1 text-primary-600 font-semibold text-sm">
                            <TrendingUp className="w-3 h-3" />
                            {entry.coinsEarned}
                        </div>
                    </div>
                ))}
            </div>

            <button className="w-full mt-6 py-2 text-sm text-slate-500 hover:text-primary-600 font-medium transition-colors">
                View All Rankings
            </button>
        </div>
    );
};
