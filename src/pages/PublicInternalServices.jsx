import React from 'react';
import { FileText, Briefcase, GraduationCap, ChevronRight, Clock, MessageSquare, Bot } from 'lucide-react';
import Chatbot from '../components/Chatbot';
import { motion } from 'framer-motion';

// Reusing Section and ExternalLink components for consistency, but defined locally since this is a standalone page
const Section = ({ title, icon: Icon, children }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg overflow-hidden mb-8"
    >
        <div className="bg-gradient-to-r from-slate-50 to-white px-6 py-4 border-b border-slate-100 flex items-center">
            <div className="p-2 bg-white rounded-lg border border-slate-100 mr-4 shadow-sm">
                <Icon className="w-5 h-5 text-primary-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">{title}</h3>
        </div>
        <div className="p-6">
            {children}
        </div>
    </motion.div>
);

const ExternalLink = ({ href, title, description }) => (
    <a
        href={href}
        className="group flex flex-col p-4 rounded-xl border border-slate-200 hover:border-primary-200 hover:bg-primary-50 transition-all duration-200"
    >
        <div className="flex justify-between items-start mb-2">
            <h4 className="font-medium text-slate-900 group-hover:text-primary-700">{title}</h4>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-primary-500 transition-transform group-hover:translate-x-1" />
        </div>
        <p className="text-sm text-slate-500 mt-1">{description}</p>
    </a>
);

const PublicInternalServices = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            {/* Header / Navbar Replacement */}
            <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/20 bg-white/70 backdrop-blur-md shadow-sm transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <img src="len-logo.png" alt="Len Logo" className="h-10 w-auto object-contain drop-shadow-sm" />
                        <div>
                            <h1 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                                Layanan HC Internal
                            </h1>
                            <p className="text-xs text-slate-500 font-medium tracking-wide">Portal Informasi Staf & Magang</p>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32">

                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-block px-4 py-1.5 bg-secondary-50 rounded-full text-secondary-700 text-sm font-semibold mb-6 border border-secondary-100 shadow-sm">
                        🔒 Area Terbatas
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Portal Internal</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Pusat informasi untuk prosedur internal, syarat kelulusan magang, dan jadwal kegiatan kesehatan.
                    </p>
                </motion.div>

                <Section title="Format & Panduan" icon={FileText}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <ExternalLink
                            href="#"
                            title="Format Laporan Magang"
                            description="Unduh template laporan akhir magang."
                        />
                        <ExternalLink
                            href="#"
                            title="Panduan Konversi Magang"
                            description="Petunjuk teknis konversi kredit magang."
                        />
                        <ExternalLink
                            href="#"
                            title="Tata Tertib & Aturan"
                            description="Pedoman perilaku dan disiplin."
                        />
                    </div>
                </Section>

                <Section title="Syarat Kelulusan Magang" icon={GraduationCap}>
                    <div className="space-y-6 text-slate-600">
                        <div>
                            <h4 className="font-bold text-slate-900 mb-2">1. Cap Kertas Olahraga</h4>
                            <p>Wajib memenuhi <strong>4 cap per bulan</strong>. Cap didapatkan dengan mengikuti kegiatan olahraga rutin.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 mb-2">2. Tugas Utama</h4>
                            <p>Menyelesaikan seluruh tugas utama yang diberikan oleh pembimbing magang dengan baik.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 mb-2">3. Hafalan Wajib</h4>
                            <ul className="list-disc list-inside space-y-1 ml-2">
                                <li>Bacaan Sholat</li>
                                <li>Pembukaan UUD 1945</li>
                                <li>11 Surat Juz Amma (termasuk Al-Fatihah)</li>
                                <li>
                                    Lagu Wajib Nasional
                                    <br />
                                    <span className="text-sm text-red-600 font-medium italic">
                                        (Kecuali: Indonesia Pusaka, Halo-Halo Bandung, Indonesia Raya, dan Garuda Pancasila)
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Section>

                <Section title="Jadwal & Kesehatan" icon={Clock}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-primary-50 p-6 rounded-xl border border-primary-100">
                            <h4 className="font-bold text-primary-900 mb-3 flex items-center">
                                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                                Jadwal Zumba
                            </h4>
                            <ul className="space-y-2 text-primary-800">
                                <li>Senin: 16.45 WIB</li>
                                <li>Jumat: 07.00 WIB</li>
                            </ul>
                        </div>
                        <div className="bg-secondary-50 p-6 rounded-xl border border-secondary-100">
                            <h4 className="font-bold text-secondary-900 mb-3 flex items-center">
                                <span className="w-2 h-2 bg-secondary-500 rounded-full mr-2"></span>
                                Jumat Sehat
                            </h4>
                            <p className="text-secondary-800 mb-2">Mulai jam 06.00 WIB</p>
                            <p className="text-sm text-secondary-700">
                                Diharapkan beraktivitas olahraga untuk menyegarkan badan dan mengisi cap ke tim HCS.
                            </p>
                        </div>
                    </div>
                </Section>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-white rounded-2xl border border-slate-200 p-8 text-center shadow-lg"
                >
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Masih Bingung?</h3>
                    <p className="text-slate-600 mb-6">
                        Jika ada pertanyaan spesifik mengenai prosedur internal atau magang yang belum terjawab, silakan hubungi admin HC.
                    </p>
                    <a
                        href="https://wa.me/6287819014620"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-secondary-600 text-white rounded-xl font-bold hover:bg-secondary-700 transition-all shadow-md hover:shadow-lg"
                    >
                        <MessageSquare className="w-5 h-5 mr-2" />
                        Chat Admin Internal
                    </a>
                </motion.div>

            </main>

            {/* Footer */}
            <footer className="bg-slate-900 text-slate-300 py-12 mt-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
                <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
                    <img src="/images/len-logo.png" alt="Len Logo" className="h-12 w-auto mx-auto mb-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500" />
                    <p>&copy; 2024 Human Capital Services. All rights reserved.</p>
                </div>
            </footer>

            <Chatbot />

            {/* Internal WhatsApp Contact */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                className="fixed bottom-24 right-6 z-40 md:bottom-24"
            >
                <a
                    href="https://wa.me/6287819014620"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-[#128C7E] transition-colors"
                >
                    <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="fill-current"
                    >
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                    <span>Hubungi Internal HC</span>
                </a>
            </motion.div>
        </div>
    );
};

export default PublicInternalServices;
