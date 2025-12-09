import React, { useState } from 'react';
import { Plus, Minus, Search } from 'lucide-react';

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

const FAQ = () => {
    return (
        <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-slate-900">Pertanyaan yang Sering Diajukan</h2>
                <p className="text-slate-500 mt-2">Temukan jawaban untuk pertanyaan umum tentang layanan kami.</p>
            </div>

            <div className="relative mb-10">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                    type="text"
                    placeholder="Cari jawaban..."
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all shadow-sm"
                />
            </div>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <FAQItem key={index} {...faq} />
                ))}
            </div>
        </div>
    );
};

export default FAQ;
