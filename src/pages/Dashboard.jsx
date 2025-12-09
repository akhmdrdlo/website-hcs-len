import React from 'react';
import { Users, FileText, CheckCircle, Clock } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const data = [
    { name: 'Jan', submissions: 40, completed: 24 },
    { name: 'Feb', submissions: 30, completed: 13 },
    { name: 'Mar', submissions: 20, completed: 58 },
    { name: 'Apr', submissions: 27, completed: 39 },
    { name: 'May', submissions: 18, completed: 48 },
    { name: 'Jun', submissions: 23, completed: 38 },
];

const StatCard = ({ title, value, change, icon: Icon, color }) => (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
        <div className="flex justify-between items-start">
            <div>
                <p className="text-sm font-medium text-slate-500">{title}</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">{value}</p>
            </div>
            <div className={`p-3 rounded-xl ${color}`}>
                <Icon className="w-6 h-6 text-white" />
            </div>
        </div>
        <div className="mt-4 flex items-center text-sm">
            <span className="text-emerald-600 font-medium">{change}</span>
            <span className="text-slate-500 ml-2">vs last month</span>
        </div>
    </div>
);

const Dashboard = () => {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold text-slate-900">Ikhtisar Dasbor</h2>
                <p className="text-slate-500">Selamat datang kembali, ini yang terjadi hari ini.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Total Anak Magang"
                    value="124"
                    change="+12%"
                    icon={Users}
                    color="bg-blue-500"
                />
                <StatCard
                    title="Aplikasi Tertunda"
                    value="18"
                    change="-5%"
                    icon={Clock}
                    color="bg-amber-500"
                />
                <StatCard
                    title="Proyek Aktif"
                    value="45"
                    change="+8%"
                    icon={FileText}
                    color="bg-violet-500"
                />
                <StatCard
                    title="Magang Selesai"
                    value="32"
                    change="+24%"
                    icon={CheckCircle}
                    color="bg-emerald-500"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 mb-6">Tren Magang</h3>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                                <Tooltip
                                    cursor={{ fill: '#f8fafc' }}
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                                <Bar dataKey="submissions" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                                <Bar dataKey="completed" fill="#cbd5e1" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 mb-6">Distribusi Departemen</h3>
                    <div className="h-80 flex items-center justify-center">
                        {/* Placeholder for Pie Chart or other visualization */}
                        <p className="text-slate-400">Grafik distribusi departemen sedang dimuat...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
