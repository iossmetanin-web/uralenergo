"use client";

import { useState } from "react";
import { Loader2, CheckCircle, AlertCircle, X } from "lucide-react";

interface LeadFormProps {
  source?: string;
  onSuccess?: () => void;
  compact?: boolean;
}

export function LeadForm({ source = "website", onSuccess, compact = false }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Произошла ошибка");
      }

      setStatus("success");
      setFormData({ name: "", phone: "", email: "", message: "" });
      
      if (onSuccess) {
        setTimeout(onSuccess, 2000);
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Произошла ошибка");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
        <h3 className="font-heading text-xl font-semibold mb-2">Заявка отправлена!</h3>
        <p className="text-[#666666]">Мы перезвоним вам в течение 1 часа</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Имя */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Имя <span className="text-[#E63B2E]">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          minLength={2}
          placeholder="Как к вам обращаться?"
          className="w-full px-4 py-3 border border-[#D6D3D1] bg-white focus:outline-none focus:border-[#111111] transition-colors"
        />
      </div>

      {/* Телефон */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1">
          Телефон <span className="text-[#E63B2E]">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          minLength={10}
          placeholder="+7 (___) ___-__-__"
          className="w-full px-4 py-3 border border-[#D6D3D1] bg-white focus:outline-none focus:border-[#111111] transition-colors font-mono"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="email@example.com"
          className="w-full px-4 py-3 border border-[#D6D3D1] bg-white focus:outline-none focus:border-[#111111] transition-colors"
        />
      </div>

      {/* Сообщение */}
      {!compact && (
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Комментарий
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            placeholder="Опишите ваш проект или задайте вопрос..."
            className="w-full px-4 py-3 border border-[#D6D3D1] bg-white focus:outline-none focus:border-[#111111] transition-colors resize-none"
          />
        </div>
      )}

      {/* Ошибка */}
      {status === "error" && (
        <div className="flex items-center gap-2 text-[#E63B2E] text-sm">
          <AlertCircle className="w-4 h-4" />
          {errorMessage}
        </div>
      )}

      {/* Кнопка отправки */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full btn-brutal btn-brutal-accent flex items-center justify-center gap-2"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Отправка...
          </>
        ) : (
          "Отправить заявку"
        )}
      </button>

      <p className="text-xs text-center text-[#666666]">
        Нажимая кнопку, вы соглашаетесь с{" "}
        <a href="#" className="underline hover:text-[#E63B2E]">
          политикой конфиденциальности
        </a>
      </p>
    </form>
  );
}

// Модальное окно с формой
interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
}

export function LeadFormModal({ isOpen, onClose, source = "modal" }: LeadFormModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#111111]/80" 
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-[#F5F3EE] border-2 border-[#111111] max-w-md w-full p-6 shadow-[8px_8px_0_#111111] animate-in fade-in zoom-in-95 duration-200">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 hover:bg-[#D6D3D1] transition-colors"
          aria-label="Закрыть"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <h3 className="font-heading text-xl font-semibold mb-2">Оставить заявку</h3>
          <p className="text-sm text-[#666666]">
            Заполните форму и мы перезвоним вам в течение 1 часа
          </p>
        </div>

        {/* Form */}
        <LeadForm source={source} onSuccess={onClose} />
      </div>
    </div>
  );
}
