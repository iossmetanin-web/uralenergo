"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export function MessengerWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send the form data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsOpen(false);
      setFormData({ name: "", phone: "", message: "" });
    }, 2000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Popup Form */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-white border border-[#D6D3D1] shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-200">
          {/* Header */}
          <div className="p-4 border-b border-[#D6D3D1] flex items-center justify-between bg-[#111111]">
            <span className="font-heading font-semibold text-white">Напишите нам</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form */}
          {isSubmitted ? (
            <div className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-6 h-6 text-green-600" />
              </div>
              <p className="font-medium text-[#111111]">Сообщение отправлено!</p>
              <p className="text-sm text-[#666666] mt-1">Мы скоро свяжемся с вами</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Ваше имя</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-[#D6D3D1] focus:border-[#E63B2E] focus:outline-none transition-colors"
                  placeholder="Как к вам обращаться?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Телефон</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 border border-[#D6D3D1] focus:border-[#E63B2E] focus:outline-none transition-colors"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Сообщение</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 border border-[#D6D3D1] focus:border-[#E63B2E] focus:outline-none transition-colors resize-none"
                  placeholder="Опишите ваш вопрос..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#E63B2E] text-white py-3 font-medium hover:bg-[#B82820] transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Отправить
              </button>
            </form>
          )}
        </div>
      )}

      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 flex items-center justify-center shadow-lg transition-all duration-200 border-2 ${
          isOpen
            ? "bg-[#111111] text-white border-[#111111]"
            : "bg-[#E63B2E] text-white border-[#E63B2E] hover:bg-[#B82820] hover:border-[#B82820]"
        }`}
        aria-label="Написать нам"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
}
