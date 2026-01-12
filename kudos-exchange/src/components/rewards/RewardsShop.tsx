import { useState } from 'react';
import { Palmtree, Trophy, Shirt, Heart } from 'lucide-react';
import { RewardCard } from './RewardCard';
import { cn } from '../../lib/utils';

const CATEGORIES = ['All Rewards', 'Time Off', 'Gift Cards', 'Charity'];

const REWARDS = [
    {
        id: 1,
        title: 'Friday Half-Day',
        cost: 500,
        icon: Palmtree,
        category: 'Time Off',
        disabled: false
    },
    {
        id: 2,
        title: 'Lunch with the CEO',
        cost: 1200,
        icon: Trophy,
        category: 'Time Off', // Or a 'Recognition' category if desired, but putting in Time Off/General for now as per request structure implicity
        disabled: true,
        lockReason: 'Requires Level 6'
    },
    {
        id: 3,
        title: 'Company Hoodie',
        cost: 300,
        icon: Shirt,
        category: 'Gift Cards', // Using Gift Cards as catch-all or merch
        disabled: false
    },
    {
        id: 4,
        title: 'Donate to Red Cross',
        cost: 100,
        icon: Heart,
        category: 'Charity',
        disabled: false
    }
];

export const RewardsShop = () => {
    const [activeTab, setActiveTab] = useState('All Rewards');

    const filteredRewards = activeTab === 'All Rewards'
        ? REWARDS
        : REWARDS.filter(r => r.category === activeTab);

    return (
        <div className="max-w-7xl mx-auto py-8 px-6 space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-slate-900">Rewards Marketplace</h1>
                <p className="text-slate-500">Redeem your hard-earned Kudos.</p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 border-b border-slate-200 pb-1 overflow-x-auto">
                {CATEGORIES.map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={cn(
                            "px-4 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap",
                            activeTab === tab
                                ? "bg-slate-100 text-slate-900"
                                : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
                        )}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRewards.map(reward => (
                    <RewardCard
                        key={reward.id}
                        title={reward.title}
                        cost={reward.cost}
                        icon={reward.icon}
                        disabled={reward.disabled}
                        lockReason={reward.lockReason}
                    />
                ))}
            </div>
        </div>
    );
};
