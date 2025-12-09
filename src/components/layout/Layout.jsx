import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    return (
        <div className="flex h-screen bg-slate-50 overflow-hidden">
            <Sidebar />
            <main className="flex-1 overflow-y-auto w-full">
                <div className="max-w-7xl mx-auto px-8 py-8">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default Layout;
