import React, { useState } from 'react';
import { FileText, FileBadge, Users, Calendar, ArrowUpRight, Plus, Minus, Search, MessageSquare, Bot } from 'lucide-react';
import { motion } from 'framer-motion';
import Chatbot from '../components/Chatbot';

// --- Components from FAQ.jsx ---
const faqs = [
    {
        question: "Apa saja persyaratan untuk melamar magang?",
        answer: "Pelamar magang harus merupakan mahasiswa aktif, memiliki IPK minimal 3.0, dan dapat berkomitmen untuk magang minimal 2 bulan."
    },
    {
        question: "Bagaimana cara mengonversi kredit Magang Mandiri saya?",
        answer: "Anda dapat mengonversi kredit magang mandiri dengan menyerahkan sertifikat penyelesaian dan laporan ke divisi HC melalui portal Layanan Internal."
    },
    {
        question: "Bagaimana proses reservasi tamu?",
        answer: "Tamu harus mengajukan permintaan reservasi setidaknya 3 hari kerja sebelumnya. Konfirmasi akan dikirim melalui email beserta panduan pengunjung."
    },
    {
        question: "Bisakah saya memperpanjang durasi magang saya?",
        answer: "Perpanjangan dimungkinkan berdasarkan kinerja dan kebutuhan proyek. Diskusikan hal ini dengan supervisor Anda setidaknya 2 minggu sebelum tanggal berakhir awal."
    },
    {
        question: "Di mana saya bisa menemukan SOP terbaru?",
        answer: "Semua Prosedur Operasional Standar (SOP) yang berlaku dan terbaru tersedia di bagian Layanan Internal di bawah 'SOP & Prosedur'."
    }
];

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-slate-200 rounded-xl overflow-hidden bg-white hover:border-primary-200 transition-colors">
            <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-medium text-slate-900 text-lg">{question}</span>
                {isOpen ? (
                    <Minus className="text-primary-600 w-5 h-5 flex-shrink-0" />
                ) : (
                    <Plus className="text-slate-400 w-5 h-5 flex-shrink-0" />
                )}
            </button>
            {isOpen && (
                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50 bg-slate-50/50">
                    {answer}
                </div>
            )}
        </div>
    );
};

// --- Components from External.jsx ---
const FeatureCard = ({ title, description, icon: Icon, actionText, href }) => (
    <motion.div
        variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
        }}
        className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
    >
        <div className="p-4 bg-gradient-to-br from-secondary-50 to-primary-50 rounded-2xl mb-6 shadow-inner">
            <Icon className="w-8 h-8 text-secondary-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-500 mb-6 flex-1">{description}</p>
        <a
            href={href}
            className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-slate-900 to-slate-800 text-white font-medium rounded-xl hover:shadow-lg hover:from-slate-800 hover:to-slate-700 transition-all duration-300"
        >
            {actionText}
            <ArrowUpRight className="w-4 h-4 ml-2" />
        </a>
    </motion.div>
);

const PublicExternalServices = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 font-sans text-slate-900 selection:bg-primary-100 selection:text-primary-900">
            {/* Header / Navbar Replacement */}
            <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/20 bg-white/70 backdrop-blur-md shadow-sm transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <img src="len-logo.png" alt="Len Logo" className="h-10 w-auto object-contain drop-shadow-sm" />
                        <div>
                            <h1 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                                Layanan HC Eksternal
                            </h1>
                            <p className="text-xs text-slate-500 font-medium tracking-wide">Portal Informasi Publik</p>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 space-y-24">

                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <div className="inline-block px-4 py-1.5 bg-primary-50 rounded-full text-primary-700 text-sm font-semibold mb-6 border border-primary-100 shadow-sm">
                        👋 Selamat Datang Mitra & Calon Talenta
                    </div>
                    <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight leading-tight">
                        Portal Layanan <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
                            Eksternal Terpadu
                        </span>
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        Akses mudah untuk program magang, kunjungan perusahaan, dan informasi kemitraan dalam satu tempat.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                >
                    <div className="flex items-center justify-center space-x-3 mb-12">
                        <div className="h-px w-10 bg-slate-300"></div>
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Layanan Kami</h3>
                        <div className="h-px w-10 bg-slate-300"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard
                            title="SOP Pengajuan KP dan PKL"
                            description="Lihat SOP pengajuan KP dan PKL"
                            icon={FileText}
                            actionText="Lihat SOP"
                            href="#"
                        />
                        <FeatureCard
                            title="Konversi Magang"
                            description="Ajukan konversi kredit magang. Durasi minimum 2 bulan diperlukan."
                            icon={FileBadge}
                            actionText="Ajukan Konversi"
                            href="#"
                        />
                        <FeatureCard
                            title="Pengajuan KP/PKL"
                            description="Kirimkan aplikasi Kerja Praktik / PKL Anda. Termasuk formulir dan persyaratan."
                            icon={Users}
                            actionText="Lihat Persyaratan"
                            href="#"
                        />
                        <FeatureCard
                            title="Reservasi Tamu"
                            description="Jadwalkan kunjungan atau pertemuan. Pesan slot Anda untuk kunjungan perusahaan."
                            icon={Calendar}
                            actionText="Pesan Kunjungan"
                            href="#"
                        />
                    </div>
                </motion.div>

                {/* FAQ Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/60 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 border border-white/40 shadow-xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-gradient-to-br from-primary-100/40 to-secondary-100/40 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-gradient-to-tr from-blue-100/40 to-purple-100/40 rounded-full blur-3xl"></div>

                    <div className="relative z-10">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl font-bold text-slate-900">Pertanyaan Umum</h3>
                            <p className="text-slate-500 mt-3 text-lg">Jawaban cepat untuk pertanyaan yang sering diajukan</p>
                        </div>

                        <div className="relative max-w-2xl mx-auto mb-12">
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Cari pertanyaan..."
                                className="w-full pl-14 pr-6 py-4 rounded-2xl border border-slate-200 bg-white/80 focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/20 outline-none transition-all shadow-sm text-lg"
                            />
                        </div>

                        <div className="space-y-4 max-w-3xl mx-auto">
                            {faqs.map((faq, index) => (
                                <FAQItem key={index} {...faq} />
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden"
                >
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold mb-4">Butuh Bantuan Lebih Lanjut?</h3>
                        <p className="text-white/90 mb-8 text-lg">
                            Jika Anda tidak menemukan jawaban yang Anda cari, jangan ragu untuk menghubungi tim kami langsung.
                        </p>
                        <a
                            href="https://wa.me/6287819881108"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 bg-white text-primary-700 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                            <MessageSquare className="w-5 h-5 mr-2" />
                            Hubungi via WhatsApp
                        </a>
                    </div>
                </motion.div>

            </main>

            {/* Footer */}
            <footer className="bg-slate-900 text-slate-400 py-16 mt-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <img src="/images/len-logo.png" alt="Len Logo" className="h-12 w-auto mx-auto mb-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500" />
                    <p className="font-medium text-slate-300">&copy; 2024 Human Capital Services. All rights reserved.</p>
                </div>
            </footer>

            <Chatbot />

            {/* External WhatsApp Contact */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="fixed bottom-24 right-6 z-40 md:bottom-24"
            >
                <a
                    href="https://wa.me/6287819881108"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-3 bg-[#25D366] text-white px-6 py-3.5 rounded-full font-bold shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:-translate-y-1 transition-all duration-300"
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
                        className="fill-current w-6 h-6 group-hover:scale-110 transition-transform"
                    >
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                    <span className="text-lg">Hubungi Eksternal</span>
                </a>
            </motion.div>
        </div>
    );
};

export default PublicExternalServices;
