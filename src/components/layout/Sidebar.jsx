import React from 'react';
import { LayoutDashboard, Users, FileText, HelpCircle, Briefcase } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();

    const navItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
        { icon: Users, label: 'Layanan Internal', path: '/internal' },
        { icon: Briefcase, label: 'Layanan Eksternal', path: '/external' },
        { icon: HelpCircle, label: 'FAQ', path: '/faq' },
    ];

    return (
        <div className="bg-white w-64 min-h-screen border-r border-slate-200 flex flex-col fixed left-0 top-0 z-30">
            <div className="p-6 border-b border-slate-100 flex items-center space-x-3">
                <img src="len-icon.png" alt="Len Logo" className="h-10 w-auto object-contain" />
                <div>
                    <h1 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                        Layanan HC
                    </h1>
                    <p className="text-xs text-slate-500">Dasbor Human Capital</p>
                </div>
            </div>

            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;

                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group ${isActive
                                ? 'bg-primary-50 text-primary-600 shadow-sm'
                                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                }`}
                        >
                            <Icon size={20} className={isActive ? 'text-primary-600' : 'text-slate-400 group-hover:text-slate-600'} />
                            <span className="font-medium">{item.label}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-slate-200">
                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-4 rounded-xl border border-primary-100">
                    <p className="text-sm font-medium text-slate-800">Butuh Bantuan?</p>
                    <p className="text-xs text-slate-500 mt-1">Hubungi Dukungan HC</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
