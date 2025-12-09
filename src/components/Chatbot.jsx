import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

import { sendMessageToGemini } from '../services/gemini';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'bot', text: 'Halo! Saya Asisten HC. Ada yang bisa saya bantu hari ini?' }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);
    const location = useLocation();

    // Determine Context
    const isInternal = location.pathname.includes('internal');
    const context = isInternal ? 'internal' : 'external';

    // Dynamic WhatsApp Config
    const waConfig = isInternal
        ? { number: '6287819014620', label: 'Admin Internal' }
        : { number: '6287819881108', label: 'Layanan Eksternal' };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = input;
        setMessages(prev => [...prev, { type: 'user', text: userMessage }]);
        setInput('');
        setIsLoading(true);

        try {
            // Call Gemini API with Context
            const botReply = await sendMessageToGemini(userMessage, context);

            if (botReply) {
                setMessages(prev => [...prev, { type: 'bot', text: botReply }]);
            } else {
                // Fallback Logic
                const encodedMessage = encodeURIComponent(`Halo, saya ingin bertanya: "${userMessage}"`);
                const waUrl = `https://wa.me/${waConfig.number}?text=${encodedMessage}`;

                const fallbackMessage = (
                    <span>
                        Maaf, saya tidak dapat menjawab pertanyaan tersebut saat ini.
                        Silakan <a href={waUrl} target="_blank" rel="noreferrer" className="underline font-bold text-primary-600 hover:text-primary-800">hubungi {waConfig.label}</a> untuk bantuan lebih lanjut.
                    </span>
                );
                setMessages(prev => [...prev, { type: 'bot', text: fallbackMessage }]);
            }
        } catch (error) {
            setMessages(prev => [...prev, { type: 'bot', text: "Maaf, terjadi kesalahan pada sistem." }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="bg-white w-[350px] md:w-[400px] h-[500px] rounded-2xl shadow-2xl border border-slate-200 flex flex-col mb-4 overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-4 flex items-center justify-between text-white shadow-md z-10">
                            <div className="flex items-center space-x-2">
                                <div className="p-1.5 bg-white/20 rounded-full backdrop-blur-sm">
                                    <Bot size={20} />
                                </div>
                                <div>
                                    <span className="font-bold block">Asisten HC</span>
                                    <span className="text-[10px] opacity-90 uppercase tracking-wider">{context === 'internal' ? 'Internal Support' : 'Public Support'}</span>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-lg transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages Area with Aesthetic Background */}
                        <div className="flex-1 p-4 overflow-y-auto space-y-4 relative">
                            {/* Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-red-50 to-slate-100 opacity-50 z-0"></div>

                            {/* Content */}
                            <div className="relative z-10 space-y-4">
                                {messages.map((msg, idx) => (
                                    <div
                                        key={idx}
                                        className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div
                                            className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.type === 'user'
                                                ? 'bg-gradient-to-br from-primary-600 to-secondary-600 text-white rounded-br-none'
                                                : 'bg-white border border-slate-100 text-slate-700 rounded-bl-none'
                                                }`}
                                        >
                                            {msg.text}
                                        </div>
                                    </div>
                                ))}
                                {isLoading && (
                                    <div className="flex justify-start">
                                        <div className="bg-white border border-slate-100 px-4 py-3 rounded-2xl rounded-bl-none shadow-sm">
                                            <div className="flex space-x-1.5">
                                                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>
                        </div>

                        {/* Input */}
                        <div className="p-4 bg-white border-t border-slate-100 z-10">
                            <div className="flex items-center space-x-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder={context === 'internal' ? "Tanya soal magang, jadwal..." : "Tanya soal KP, magang..."}
                                    className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 text-sm bg-slate-50 transition-all"
                                />
                                <button
                                    onClick={handleSend}
                                    className="p-2.5 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl hover:shadow-lg hover:shadow-red-500/30 transition-all disabled:opacity-50 hover:-translate-y-0.5 active:translate-y-0"
                                    disabled={!input.trim() || isLoading}
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-4 rounded-full shadow-xl transition-all duration-300 transform ${isOpen
                    ? 'bg-slate-800 text-white rotate-90 scale-90'
                    : 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:shadow-primary-500/40 hover:scale-110'
                    }`}
            >
                {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
            </button>
        </div>
    );
};

export default Chatbot;
