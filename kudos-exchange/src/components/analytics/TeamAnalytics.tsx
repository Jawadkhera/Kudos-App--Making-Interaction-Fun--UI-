import { Smile, TrendingUp, Coins } from 'lucide-react';
import { KPICard } from './KPICard';
import { NetworkGraph } from './NetworkGraph';
import { CoreValuesChart } from './CoreValuesChart';
import { RiskAlert } from './RiskAlert';

export const TeamAnalytics = () => {
    return (
        <div className="max-w-7xl mx-auto py-8 px-6 space-y-6">
            <div className="flex items-center justify-between mb-2">
                <h1 className="text-2xl font-bold text-slate-900">Team Analytics</h1>
                <div className="text-sm text-slate-500">Last updated: Just now</div>
            </div>

            {/* Top Row: KPIs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <KPICard
                    title="Team Mood Score"
                    value="8.5/10"
                    subtext="Excellent"
                    icon={Smile}
                    colorClass="bg-green-50/50 border-green-100"
                />
                <KPICard
                    title="Collaboration Index"
                    value="+12%"
                    subtext="this week"
                    icon={TrendingUp}
                />
                <KPICard
                    title="Total Kudos Given"
                    value="1,240"
                    subtext="Top 5% of teams"
                    icon={Coins}
                    colorClass="bg-yellow-50/50 border-yellow-100"
                />
            </div>

            {/* Middle Row: Network & Values */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-fr">
                <div className="lg:col-span-2 h-full">
                    <NetworkGraph />
                </div>
                <div className="h-full">
                    <CoreValuesChart />
                </div>
            </div>

            {/* Bottom Row: Risk Alert */}
            <RiskAlert />
        </div>
    );
};
