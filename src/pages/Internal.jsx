import React from 'react';
import { FileText, Briefcase, GraduationCap, ChevronRight, Clock } from 'lucide-react';

const Section = ({ title, icon: Icon, children }) => (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden mb-8">
        <div className="p-6 border-b border-slate-50 bg-slate-50/50 flex items-center space-x-3">
            <div className="p-2 bg-primary-100 rounded-lg">
                <Icon className="w-5 h-5 text-primary-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">{title}</h3>
        </div>
        <div className="p-6">
            {children}
        </div>
    </div>
);

const ExternalLink = ({ href, title, description }) => (
    <a
        href={href}
        className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-primary-200 hover:bg-primary-50/30 transition-all duration-200 group"
    >
        <div>
            <h4 className="font-medium text-slate-900 group-hover:text-primary-700">{title}</h4>
            <p className="text-sm text-slate-500 mt-1">{description}</p>
        </div>
        <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-primary-500 transition-transform group-hover:translate-x-1" />
    </a>
);

const Internal = () => {
    return (
        <div className="max-w-5xl mx-auto pb-20">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900">Layanan Internal</h2>
                <p className="text-slate-500 mt-2">Kelola prosedur internal, deskripsi pekerjaan, dan program magang.</p>
            </div>

            <Section title="Format & Panduan" icon={FileText}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

            {/* Internal WhatsApp Contact */}
            <div className="fixed bottom-6 right-6 z-40">
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
            </div>
        </div>
    );
};

export default Internal;
