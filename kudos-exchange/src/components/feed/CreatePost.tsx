import { useState } from 'react';
import { Search, ChevronDown, Coins, Send } from 'lucide-react';
import { CURRENT_USER } from '../../data/mockData';

export const CreatePost = () => {
    const [selectedCoins, setSelectedCoins] = useState(50);
    const [selectedValue, setSelectedValue] = useState('Trust');

    const coreValues = ['Trust', 'Innovation', 'Shared Goals', 'Accountability'];

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-6">
            <div className="p-6 bg-gradient-to-r from-primary-50/50 to-white">
                <h2 className="text-lg font-bold text-slate-800 mb-4">Give Kudos</h2>

                <div className="flex gap-4 mb-6">
                    <img src={CURRENT_USER.avatar} alt="Me" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                    <div className="flex-1 space-y-4">
                        <div className="relative">
                            <textarea
                                placeholder="What did your teammate do great?"
                                className="w-full h-24 p-4 bg-white border border-slate-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all placeholder:text-slate-400"
                            />
                        </div>

                        {/* Core Values Selector */}
                        <div className="flex flex-col gap-2">
                            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Tag a Core Value:</span>
                            <div className="flex flex-wrap gap-2">
                                {coreValues.map(value => (
                                    <button
                                        key={value}
                                        onClick={() => setSelectedValue(value)}
                                        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${selectedValue === value
                                                ? 'bg-primary-600 text-white shadow-md shadow-primary-600/20'
                                                : 'bg-white border border-slate-200 text-slate-600 hover:border-primary-300 hover:text-primary-600'
                                            }`}
                                    >
                                        {value}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 items-center pt-2">
                            {/* Teammate Selector Mock */}
                            <div className="relative group">
                                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 font-medium hover:border-primary-300 hover:text-primary-600 transition-all">
                                    <Search className="w-4 h-4" />
                                    Select Teammate
                                    <ChevronDown className="w-4 h-4 text-slate-400" />
                                </button>
                            </div>

                            <div className="h-8 w-px bg-slate-200 hidden sm:block" />

                            {/* Coin Slider */}
                            <div className="flex items-center gap-3 bg-yellow-50/50 px-4 py-2 rounded-lg border border-yellow-100">
                                <Coins className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                <input
                                    type="range"
                                    min="10"
                                    max="100"
                                    step="10"
                                    value={selectedCoins}
                                    onChange={(e) => setSelectedCoins(Number(e.target.value))}
                                    className="w-24 accent-yellow-500 h-1.5 bg-yellow-200 rounded-lg appearance-none cursor-pointer"
                                />
                                <span className="text-sm font-bold text-yellow-700 min-w-[3ch]">+{selectedCoins}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                    <div className="flex gap-2">
                        {['#Teamwork', '#Innovation', '#AboveAndBeyond', '#Leadership'].map(tag => (
                            <button key={tag} className="px-3 py-1.5 rounded-full text-xs font-medium text-slate-500 bg-slate-50 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                                {tag}
                            </button>
                        ))}
                    </div>
                    <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-semibold text-sm flex items-center gap-2 transition-transform active:scale-95 shadow-lg shadow-primary-600/20">
                        Send Kudos
                        <Send className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};
