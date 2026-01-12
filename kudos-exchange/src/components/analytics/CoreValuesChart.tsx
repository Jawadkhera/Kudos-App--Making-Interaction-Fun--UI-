import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const DATA = [
    { name: 'Trust', value: 40, color: '#0ea5e9' }, // sky-500
    { name: 'Innovation', value: 30, color: '#8b5cf6' }, // violet-500
    { name: 'Shared Goals', value: 20, color: '#f59e0b' }, // amber-500
    { name: 'Accountability', value: 10, color: '#10b981' }, // emerald-500
];

export const CoreValuesChart = () => {
    return (
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm h-full flex flex-col">
            <div className="mb-2">
                <h3 className="font-bold text-slate-800 text-lg">Core Values Breakdown</h3>
                <p className="text-slate-500 text-sm">Distribution of accolades by category.</p>
            </div>

            <div className="flex-1 min-h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={DATA}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={100}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {DATA.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        />
                        <Legend
                            verticalAlign="bottom"
                            height={36}
                            iconType="circle"
                            wrapperStyle={{ fontSize: '12px' }}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};
