import { WalletCard } from '../gamification/WalletCard';
import { Leaderboard } from '../gamification/Leaderboard';

export const RightPanel = () => {
    return (
        <aside className="hidden lg:block w-80 shrink-0 sticky top-6 h-fit animate-in slide-in-from-right-4 duration-700">
            <WalletCard />
            <Leaderboard />
        </aside>
    );
};
