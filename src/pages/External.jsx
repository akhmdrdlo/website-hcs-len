import React from 'react';
import { FileBadge, Users, Calendar, ArrowUpRight } from 'lucide-react';

const FeatureCard = ({ title, description, icon: Icon, actionText, href }) => (
    <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col items-center text-center">
        <div className="p-4 bg-secondary-50 rounded-2xl mb-6">
            <Icon className="w-8 h-8 text-secondary-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-500 mb-6 flex-1">{description}</p>
        <a
            href={href}
            className="inline-flex items-center justify-center w-full px-6 py-3 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-colors"
        >
            {actionText}
            <ArrowUpRight className="w-4 h-4 ml-2" />
        </a>
    </div>
);

const External = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900">Layanan Eksternal</h2>
                <p className="text-slate-500 mt-2">Layanan untuk pelamar, tamu, dan mitra eksternal.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <FeatureCard
                    title="SOP Pengajuan KP dan PKL"
                    description="Lihat SOP pengajuan KP dan PKL"
                    icon={FileBadge}
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

            <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-10 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Butuh informasi lebih lanjut?</h3>
                <p className="text-slate-300 max-w-2xl mx-auto mb-8">
                    Cek bagian FAQ kami yang lengkap atau gunakan chatbot untuk bantuan segera.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <a href="/faq" className="inline-block bg-white text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors w-full sm:w-auto">
                        Pergi ke FAQ
                    </a>
                    <a
                        href="https://wa.me/6287819881108"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-[#25D366] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#128C7E] transition-colors w-full sm:w-auto"
                    >
                        <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Hubungi Kami
                    </a>
                </div>
            </div>
        </div>
    );
};

export default External;
