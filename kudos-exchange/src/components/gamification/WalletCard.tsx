import { Coins, Trophy, Zap } from 'lucide-react';
import { CURRENT_USER } from '../../data/mockData';

export const WalletCard = () => {
    return (
        <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-6 text-white shadow-lg mb-6">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-primary-100 text-sm font-medium mb-1">My Balance</h3>
                    <div className="flex items-center gap-2">
                        <Coins className="w-6 h-6 text-yellow-300" />
                        <span className="text-3xl font-bold">{CURRENT_USER.balance.toLocaleString()}</span>
                    </div>
                </div>
                <div className="bg-primary-500/30 p-2 rounded-lg backdrop-blur-sm">
                    <Trophy className="w-5 h-5 text-yellow-300" />
                </div>
            </div>

            <div className="space-y-2">
                <div className="flex justify-between text-xs text-primary-100">
                    <span className="flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        Level {CURRENT_USER.level}: {CURRENT_USER.levelTitle}
                    </span>
                    <span>{CURRENT_USER.nextLevelProgress}% to Lvl {CURRENT_USER.level + 1}</span>
                </div>

                <div className="h-2 bg-primary-900/30 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${CURRENT_USER.nextLevelProgress}%` }}
                    />
                </div>
            </div>
        </div>
    );
};
