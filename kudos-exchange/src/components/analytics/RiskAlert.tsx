import { AlertTriangle } from 'lucide-react';

export const RiskAlert = () => {
    return (
        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4 flex items-start gap-4 animate-in slide-in-from-bottom-2">
            <div className="p-2 bg-orange-100 rounded-xl shrink-0">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
            </div>
            <div>
                <h4 className="font-bold text-orange-900 mb-1">At-Risk Alert: Isolation Detected</h4>
                <p className="text-orange-800 text-sm leading-relaxed">
                    Alert: <span className="font-semibold">2 Team members (John, Lisa)</span> are isolated this week.
                    Recommended Action: <span className="underline decoration-orange-400 decoration-2 underline-offset-2 cursor-pointer hover:text-orange-950">Assign a collaborative task</span> to foster inclusion.
                </p>
            </div>
        </div>
    );
};
