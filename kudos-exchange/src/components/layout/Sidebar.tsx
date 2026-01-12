import { LayoutDashboard, ShoppingBag, Users, UserCircle, Rocket } from 'lucide-react';
import { cn } from '../../lib/utils';
import { CURRENT_USER } from '../../data/mockData';

const NAV_ITEMS = [
    { icon: LayoutDashboard, label: 'Home', active: true },
    { icon: ShoppingBag, label: 'Rewards Shop', active: false },
    { icon: Users, label: 'Team Analytics', active: false },
    { icon: UserCircle, label: 'Profile', active: false },
];

interface SidebarProps {
    activePage?: string;
    onNavigate?: (page: string) => void;
}

export const Sidebar = ({ activePage = 'Home', onNavigate }: SidebarProps) => {
    return (
        <aside className="hidden md:block w-64 shrink-0 sticky top-0 h-screen py-6 pl-6">
            <div className="flex items-center gap-2 mb-10 px-4">
                <div className="bg-primary-600 p-2 rounded-xl">
                    <Rocket className="w-6 h-6 text-white" />
                </div>
                <span className="font-bold text-xl text-slate-900 tracking-tight">Kudos Exchange</span>
            </div>

            <nav className="space-y-1 mb-8">
                {NAV_ITEMS.map((item) => (
                    <button
                        key={item.label}
                        onClick={() => onNavigate?.(item.label)}
                        className={cn(
                            "w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 group relative overflow-hidden",
                            activePage === item.label
                                ? "text-primary-600 bg-primary-50"
                                : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                        )}
                    >
                        {activePage === item.label && (
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary-600 rounded-r-full" />
                        )}
                        <item.icon className={cn("w-5 h-5", activePage === item.label && "fill-primary-100")} />
                        {item.label}
                    </button>
                ))}
            </nav>

            <div className="px-4 mt-auto">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-3 mb-3">
                        <img src={CURRENT_USER.avatar} alt="User" className="w-10 h-10 rounded-full" />
                        <div>
                            <p className="font-bold text-sm text-slate-900">{CURRENT_USER.name}</p>
                            <p className="text-xs text-slate-500">@{CURRENT_USER.id}</p>
                        </div>
                    </div>
                    <button className="w-full py-2 text-xs font-semibold text-slate-600 border border-slate-200 rounded-lg hover:bg-white transition-colors">
                        Log Out
                    </button>
                </div>
            </div>
        </aside>
    );
};
