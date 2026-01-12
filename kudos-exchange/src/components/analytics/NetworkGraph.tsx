export const NetworkGraph = () => {
    return (
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm h-full min-h-[400px] flex flex-col relative">
            <div className="mb-6 z-10">
                <h3 className="font-bold text-slate-800 text-lg">Social Cohesion Map</h3>
                <p className="text-slate-500 text-sm">Visualizing team connectivity and group behavior.</p>
            </div>

            <div className="flex-1 relative w-full flex items-center justify-center bg-slate-50/50 rounded-xl overflow-hidden">
                {/* Network Visualization */}
                <svg className="w-full h-full absolute inset-0 pointer-events-none">
                    {/* Hub to Core Connections (High Collaboration) */}
                    <g stroke="#0ea5e9" strokeWidth="2.5">
                        <line x1="50%" y1="50%" x2="50%" y2="30%" /> {/* To Alex */}
                        <line x1="50%" y1="50%" x2="70%" y2="50%" /> {/* To Sarah */}
                        <line x1="50%" y1="50%" x2="50%" y2="70%" /> {/* To Mike */}
                        <line x1="50%" y1="50%" x2="30%" y2="50%" /> {/* To Emily */}

                        {/* Cross connections between core */}
                        <line x1="50%" y1="30%" x2="70%" y2="50%" strokeWidth="1" opacity="0.5" />
                        <line x1="70%" y1="50%" x2="50%" y2="70%" strokeWidth="1" opacity="0.5" />
                        <line x1="50%" y1="70%" x2="30%" y2="50%" strokeWidth="1" opacity="0.5" />
                        <line x1="30%" y1="50%" x2="50%" y2="30%" strokeWidth="1" opacity="0.5" />
                    </g>

                    {/* Isolated Connections (Low Interaction) */}
                    <g stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4">
                        {/* John to Emily */}
                        <line x1="15%" y1="50%" x2="30%" y2="50%" />
                        {/* Lisa to Sarah */}
                        <line x1="85%" y1="50%" x2="70%" y2="50%" />
                    </g>
                </svg>

                {/* Nodes Container */}
                <div className="relative w-full h-full">
                    {/* Center Hub */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-14 h-14 bg-primary-600 rounded-full border-4 border-white shadow-md flex items-center justify-center z-20">
                            <span className="text-xs font-black text-white uppercase tracking-wider">HUB</span>
                        </div>
                    </div>

                    {/* Core Team Members */}
                    {/* Top: Alex */}
                    <div className="absolute top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                        <div className="w-12 h-12 bg-primary-50 rounded-full border-2 border-primary-500 shadow-sm flex items-center justify-center z-10">
                            <span className="text-xs font-bold text-primary-700">Alex</span>
                        </div>
                    </div>

                    {/* Right: Sarah */}
                    <div className="absolute top-[50%] left-[70%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                        <div className="w-12 h-12 bg-primary-50 rounded-full border-2 border-primary-500 shadow-sm flex items-center justify-center z-10">
                            <span className="text-xs font-bold text-primary-700">Sarah</span>
                        </div>
                    </div>

                    {/* Bottom: Mike */}
                    <div className="absolute top-[70%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                        <div className="w-12 h-12 bg-primary-50 rounded-full border-2 border-primary-500 shadow-sm flex items-center justify-center z-10">
                            <span className="text-xs font-bold text-primary-700">Mike</span>
                        </div>
                    </div>

                    {/* Left: Emily */}
                    <div className="absolute top-[50%] left-[30%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                        <div className="w-12 h-12 bg-primary-50 rounded-full border-2 border-primary-500 shadow-sm flex items-center justify-center z-10">
                            <span className="text-xs font-bold text-primary-700">Emily</span>
                        </div>
                    </div>

                    {/* Isolated Node: John */}
                    <div className="absolute top-[50%] left-[15%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 group">
                        <div className="w-12 h-12 bg-white rounded-full border-2 border-slate-300 shadow-sm flex items-center justify-center z-10 group-hover:border-orange-400 transition-colors">
                            <span className="text-xs font-bold text-slate-500">John</span>
                        </div>
                        <div className="absolute -bottom-6 px-2 py-0.5 bg-orange-100 text-orange-700 text-[10px] font-bold rounded-full opacity-100 transition-opacity">
                            Isolated
                        </div>
                    </div>

                    {/* Isolated Node: Lisa */}
                    <div className="absolute top-[50%] right-[15%] translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 group">
                        <div className="w-12 h-12 bg-white rounded-full border-2 border-slate-300 shadow-sm flex items-center justify-center z-10 group-hover:border-orange-400 transition-colors">
                            <span className="text-xs font-bold text-slate-500">Lisa</span>
                        </div>
                        <div className="absolute -bottom-6 px-2 py-0.5 bg-orange-100 text-orange-700 text-[10px] font-bold rounded-full opacity-100 transition-opacity">
                            Isolated
                        </div>
                    </div>
                </div>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg border border-slate-100 text-xs shadow-sm z-20">
                    <div className="flex items-center gap-2 mb-1">
                        <div className="w-6 h-0.5 bg-primary-500"></div>
                        <span className="text-slate-600 font-medium">High Collaboration</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-0 border-t-2 border-slate-300 border-dashed"></div>
                        <span className="text-slate-600 font-medium">Low Interaction</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
