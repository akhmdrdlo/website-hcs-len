import React from 'react';
import { FileText, Briefcase, GraduationCap, ChevronRight, Clock, MessageSquare, CheckCircle2 } from 'lucide-react';
import Chatbot from '../components/Chatbot';
import { motion } from 'framer-motion';

// Reusing Section and ExternalLink components for consistency, but defined locally since this is a standalone page
const Section = ({ title, icon: Icon, children }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
    >
        <div className="flex items-center space-x-4 mb-8">
            <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm">
                <Icon className="w-6 h-6 text-slate-700" />
            </div>
            <h2 className="text-3xl font-bold text-slate-800 tracking-tight">{title}</h2>
        </div>
        <div>
            {children}
        </div>
    </motion.div>
);

const ScheduleCard = ({ title, time, desc, gradient }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className={`p-8 rounded-3xl ${gradient} text-white shadow-xl relative overflow-hidden group`}
    >
        <div className="absolute right-0 top-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16 blur-xl group-hover:scale-150 transition-transform duration-700"></div>
        <div className="relative z-10">
            <h3 className="text-lg font-medium opacity-90 mb-2">{title}</h3>
            <div className="text-3xl font-bold mb-3 tracking-tight">{time}</div>
            <p className="text-sm opacity-75 font-medium bg-white/10 inline-block px-3 py-1 rounded-full">{desc}</p>
        </div>
    </motion.div>
);

const ExternalLink = ({ href, title, description, icon: Icon }) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="group flex flex-col p-6 bg-white rounded-2xl border border-slate-200 hover:border-red-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
        <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-red-50 rounded-xl group-hover:bg-red-600 transition-colors duration-300">
                {Icon && <Icon className="w-6 h-6 text-red-600 group-hover:text-white transition-colors duration-300" />}
            </div>
            <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-red-500 transition-colors" />
        </div>
        <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-red-700 transition-colors">{title}</h4>
        <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
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

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">

                {/* Premium Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20 relative"
                >
                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-100 rounded-full blur-[100px] -z-10 opacity-60"></div>
                    <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-100 rounded-full blur-[80px] -z-10 opacity-60"></div>

                    <div className="inline-block px-4 py-1.5 bg-white border border-red-100 rounded-full text-red-600 text-sm font-semibold mb-6 shadow-sm">
                        🔒 Portal Internal Anak Magang
                    </div>
                    <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                        Layanan <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">Human Capital</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Akses cepat ke panduan prosedur, persyaratan kelulusan magang, dan jadwal kegiatan kesehatan perusahaan.
                    </p>
                </motion.div>

                {/* Section 1: Documents & Guides (Glassmorphic Cards) */}
                <Section title="Dokumen & Panduan" icon={FileText}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ExternalLink
                            href="https://bit.ly/TemplateLaporanPesertaOJT"
                            title="Format Laporan Akhir"
                            description="Template resmi laporan akhir untuk peserta magang & KP."
                            icon={FileText}
                        />
                        <ExternalLink
                            href="https://forms.gle/1bWqVGGtiWibUjdv7"
                            title="Panduan Konversi SKS"
                            description="Prosedur teknis pengajuan konversi nilai ke kampus."
                            icon={GraduationCap}
                        />
                        <ExternalLink
                            href="https://drive.google.com/file/d/16_e74wQ_SFdn-wQeNa4kX1HD1R6_sWmu/view?usp=sharing"
                            title="Buku Saku Tata Tertib"
                            description="Pedoman etika dan aturan disiplin perusahaan."
                            icon={Briefcase}
                        />
                    </div>
                </Section>

                {/* Section 2: Graduation Requirements (Featured Card) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl border border-slate-100 p-8 md:p-10 shadow-xl mb-16 relative overflow-hidden group hover:shadow-2xl transition-all duration-500"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-110 -z-0"></div>
                    <div className="relative z-10">
                        <div className="flex items-center space-x-3 mb-8">
                            <div className="p-3 bg-red-600 rounded-xl shadow-lg shadow-red-200">
                                <CheckCircle2 className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900">Syarat Kelulusan Magang</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { title: "4 Cap Olahraga", desc: "Wajib minimal 2x olahraga (Zumba/Jumat Sehat) per bulan.", color: "text-blue-600" },
                                { title: "Tugas Utama", desc: "Menyelesaikan seluruh project dari mentor.", color: "text-purple-600" },
                                { title: "Tes Hafalan", desc: "Lulus tes hafalan Doa, UUD 45, Juz Amma, & Lagu Nasional.", color: "text-green-600" },
                                { title: "Nihil Pelanggaran", desc: "Tidak pernah mendapat SP atau masalah disiplin.", color: "text-red-600" }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-slate-50 p-6 rounded-2xl">
                                    <h4 className={`text-lg font-bold ${item.color} mb-2`}>{idx + 1}. {item.title}</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Section 3: Schedule (Gradient Cards) */}
                <Section title="Jadwal Rutin Mingguan" icon={Clock}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <ScheduleCard
                            title="Jam Kerja Kantor"
                            time="08:00 - 17:00"
                            desc="Senin s.d Jum'at"
                            gradient="bg-gradient-to-br from-slate-700 to-slate-900"
                        />
                        <ScheduleCard
                            title="Zumba Sore"
                            time="16:45 WIB"
                            desc="Setiap Hari Senin"
                            gradient="bg-gradient-to-br from-pink-500 to-rose-500"
                        />
                        <ScheduleCard
                            title="Jumat Sehat"
                            time="06:00 WIB"
                            desc="Setiap Hari Jumat"
                            gradient="bg-gradient-to-br from-emerald-400 to-teal-600"
                        />
                    </div>
                </Section>

                {/* Premium CTA Banner */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 relative rounded-3xl overflow-hidden shadow-2xl"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-900"></div>
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>

                    <div className="relative z-10 p-12 text-center md:text-left md:flex items-center justify-between">
                        <div className="mb-8 md:mb-0 md:mr-8">
                            <h3 className="text-3xl font-bold text-white mb-4">Butuh Bantuan Lebih Lanjut?</h3>
                            <p className="text-red-100 text-lg max-w-xl">
                                Tim Human Capital siap membantu menjawab pertanyaan spesifik Anda terkait prosedur internal.
                            </p>
                        </div>
                        <a
                            href="https://wa.me/6287819014620"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 bg-white text-red-700 rounded-full font-bold text-lg hover:bg-slate-100 hover:scale-105 transition-all shadow-lg"
                        >
                            <MessageSquare className="w-5 h-5 mr-2" />
                            Hubungi Admin Internal
                        </a>
                    </div>
                </motion.div>

            </main>


            {/* Footer */}
            <footer className="bg-slate-900 text-slate-300 py-12 mt-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
                <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
                    <img src="len-logo.png" alt="Len Logo" className="h-50 w-auto mx-auto mb-8 opacity-100 grayscale hover:grayscale-0 transition-all duration-500" />
                    <p>&copy; 2026 Human Capital Services. All rights reserved.</p>
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
