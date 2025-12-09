import Groq from "groq-sdk";

const API_KEY = import.meta.env.VITE_GROQ_API_KEY ||
    import.meta.env.VITE_OPENAI_API_KEY ||
    import.meta.env.VITE_GEMINI_API_KEY;

let groq = null;

if (API_KEY) {
    groq = new Groq({
        apiKey: API_KEY,
        dangerouslyAllowBrowser: true // Required for client-side usage in Vite
    });
}

export const sendMessageToGemini = async (message, context = 'external') => {
    if (!groq) {
        console.error("FATAL: API Key Groq tidak ditemukan. Cek .env Anda.");
        return getFallbackResponse(message, context);
    }

    // System Prompt Configuration
    const instructions = context === 'internal'
        ? `Kamu adalah Asisten HR Internal untuk "PT. Len Industri (Persero)".
           Tugasmu: Membantu anak magang dengan SOP internal.
           
           DATA PENTING (Hafalkan):
           1. Syarat Lulus Magang:
              - Wajib 4 stempel olahraga per bulan (pilih: Zumba/Jumat Sehat/Cardio).
              - Tugas utama dari mentor selesai.
              - Lulus tes hafalan (Doa harian, UUD 1945, Juz Amma, Lagu Indonesia Raya).
              - Tidak ada pelanggaran tata tertib (Nihil pelanggaran).
           2. Jadwal Olahraga:
              - Zumba: Senin sore, 16:45 WIB.
              - Jumat Sehat: Jumat pagi, 06:00 WIB.
           3. Link Penting Internal:
              - Format Laporan Magang: https://bit.ly/TemplateLaporanPesertaOJT
              - Panduan Konversi Magang: https://forms.gle/1bWqVGGtiWibUjdv7
              - Tata Tertib & Aturan: https://drive.google.com/file/d/16_e74wQ_SFdn-wQeNa4kX1HD1R6_sWmu/view?usp=sharing

           ATURAN JAWABAN:
           - HANYA TULIS jawaban berdasarkan DATA PENTING di atas, dan link jika diminta.
           - JANGAN menjawab pertanyaan umum di luar konteks HR/Magang/Len Industri.
           - JANGAN MENGARANG.
           - Jika jawaban tidak ada di data, TULIS: "FALLBACK_TRIGGER"`

        : `Kamu adalah Asisten HR Eksternal untuk "PT. Len Industri (Persero)".
           Tugasmu: Menjawab pertanyaan publik, calon pelamar, dan tamu menggunakan template resmi.
           
           DATA PENTING (TEMPLATE RESMI):
           1. PENGAJUAN MAGANG/KP (Belum ada Dokumen):
              "Selamat Pagi/Siang/Sore, untuk magang mandiri silahkan untuk mengirimkan CV-nya dan surat pengajuan PKL/KP atau surat pengantar secara terpisah ke link berikut: https://wa.me/6287819881108?text=Halo,%20saya%20ingin%20mengajukan%20KP/PKL. Untuk periode PKL/KP minimal 2 bulan, ya. Terima kasih."
           
           2. DOKUMEN & SOP PENTING:
              - SOP Pengajuan KP/PKL: https://drive.google.com/file/d/1nUCZgqKBQxkMFQH2SRc4ZFA8gBZQAlbO/view?usp=sharing
              - Link Reservasi Tamu: https://docs.google.com/forms/d/1EkrDj10p6LwfSH8LC9JxXEstJk7AwCej5U-ER9yMm6k/edit?usp=drive_web&ouid=101940004713204849510
              - Link Pendaftaran Magenta (BUMN): https://magenta.bumn.go.id/c/len-defend-id

           3. SUDAH KIRIM DOKUMEN (Menunggu Proses):
              "Selamat Pagi/Siang/Sore, akan kami proses terlebih dahulu, mohon menunggu informasi untuk tahap selanjutnya."
           
           4. FOLLOW-UP (Belum Dijadwalkan):
              "Selamat Pagi/Siang/Sore, masih kami proses ya, mohon menunggu untuk informasi selanjutnya untuk tahap lanjutan, dikarenakan sedang banyak pengajuan yang masuk untuk KP/PKL pada bulan ini. Terima Kasih 🙏🏻"
           
           5. TANYA POSISI TERTENTU:
              "Selamat Pagi/Siang/Sore, silahkan mengajukan saja terlebih dahulu. Terima Kasih 🙏🏻"
           
           6. ALAMAT KANTOR:
              "Jl. Soekarno-Hatta No.442, Pasirluyu, Kec. Regol, Kota Bandung, Jawa Barat 40254"
              
           7. INFO BPJS:
              "Periode BPJS mengikuti periode magang-nya, ya. Apabila terjadi kendala dalam pembuatan BPJS Ketenagakerjaan dan belum bisa sampai di hari onboarding, dapat dikonfirmasi saat pelaksanaan onboarding."

           ATURAN JAWABAN:
           - HANYA TULIS jawaban berdasarkan TEMPLATE dan DOKUMEN di atas.
           - JANGAN menjawab pertanyaan umum di luar konteks.
           - Jika tidak ada template yang cocok, TULIS: "FALLBACK_TRIGGER"`;

    try {
        const chatCompletion = await groq.chat.completions.create({
            messages: [
                { role: "system", content: instructions },
                { role: "user", content: message }
            ],
            model: "openai/gpt-oss-20b",
            temperature: 0.3, // Lower temperature for stricter adherence
            max_completion_tokens: 1024,
            top_p: 1,
            stream: false,
            reasoning_effort: "medium",
            stop: null
        });

        const reply = chatCompletion.choices[0]?.message?.content || "";

        // CHECK FOR FALLBACK TRIGGER
        // If the AI says "FALLBACK_TRIGGER", we return null.
        // This tells Chatbot.jsx to render the CLICKABLE WhatsApp Link component.
        if (reply.includes("FALLBACK_TRIGGER")) {
            return null;
        }

        return reply;

    } catch (error) {
        console.error("Groq API Error:", error);
        return getFallbackResponse(message, context);
    }
};

/**
 * FALLBACK LOGIC
 */
const getFallbackResponse = (message, context) => {
    const msg = message.toLowerCase();

    // 1. Static Keyword Responses (Offline Capable)
    if (context === 'internal') {
        if (msg.includes('jadwal') || msg.includes('senam') || msg.includes('zumba')) {
            return "Info Jadwal: Zumba setiap Senin (16:45 WIB) dan Jumat Sehat setiap Jumat (06:00 WIB). Wajib hadir untuk stempel kelulusan.";
        }
        if (msg.includes('syarat') || msg.includes('lulus')) {
            return "Syarat Lulus: 1. Min 4 stempel olahraga/bulan. 2. Tugas selesai. 3. Hafalan (Doa, UUD 45, Lagu Raya). 4. Patuh tata tertib.";
        }
    } else {
        if (msg.includes('syarat') || msg.includes('magang') || msg.includes('pkl')) {
            return "Magang/PKL di PT Len Industri minimal berdurasi 2 bulan. Wajib menyertakan surat pengantar resmi dari kampus/sekolah saat pengajuan.";
        }
        if (msg.includes('tamu') || msg.includes('kunjungan')) {
            return "Kunjungan tamu wajib reservasi H-3. Silakan akses menu 'Reservasi Tamu' di dashboard untuk mendaftar.";
        }
        if (msg.includes('alamat') || msg.includes('lokasi')) {
            return "Jl. Soekarno-Hatta No.442, Pasirluyu, Kec. Regol, Kota Bandung, Jawa Barat 40254";
        }
    }

    // 2. Generic Failure -> Return NULL to trigger Chatbot.jsx clickable link
    return null;
};