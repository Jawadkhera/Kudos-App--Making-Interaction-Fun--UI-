import React from 'react';
import { Sidebar } from './Sidebar';
import { RightPanel } from './RightPanel';

interface DashboardLayoutProps {
    children: React.ReactNode;
    showRightPanel?: boolean;
    activePage?: string;
    onNavigate?: (page: string) => void;
}

export const DashboardLayout = ({ children, showRightPanel = true, activePage, onNavigate }: DashboardLayoutProps) => {
    return (
        <div className="min-h-screen bg-slate-50 flex">
            <Sidebar activePage={activePage} onNavigate={onNavigate} />

            <main className="flex-1 min-w-0">
                <div className="h-full">
                    {children}
                </div>
            </main>

            {showRightPanel && <RightPanel />}
        </div>
    );
};
