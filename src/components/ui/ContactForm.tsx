"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle } from "lucide-react";

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-[#003366] mb-2">Спасибо за заявку!</h3>
        <p className="text-gray-600">Мы свяжемся с вами в ближайшее время.</p>
        <Button
          variant="outline"
          className="mt-4"
          onClick={() => setIsSubmitted(false)}
        >
          Отправить еще заявку
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h3 className="text-xl font-bold text-[#003366] mb-2">Оставить заявку</h3>
      <p className="text-gray-600 text-sm mb-6">
        Заполните форму и мы ответим в ближайшее время
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Ваше имя *
          </label>
          <Input
            required
            placeholder="Введите ваше имя"
            className="border-gray-200 focus:border-[#0073e6] focus:ring-[#0073e6]"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Телефон *
          </label>
          <Input
            required
            type="tel"
            placeholder="+7 (___) ___-__-__"
            className="border-gray-200 focus:border-[#0073e6] focus:ring-[#0073e6]"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Комментарий
          </label>
          <Textarea
            placeholder="Опишите ваш вопрос или задачу"
            rows={4}
            className="border-gray-200 focus:border-[#0073e6] focus:ring-[#0073e6] resize-none"
          />
        </div>
        
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            required
            id="agreement"
            className="mt-1 h-4 w-4 rounded border-gray-300 text-[#0073e6] focus:ring-[#0073e6]"
          />
          <label htmlFor="agreement" className="text-xs text-gray-600">
            Я согласен с{" "}
            <a href="/user/agreement" className="text-[#0073e6] hover:underline">
              пользовательским соглашением
            </a>
          </label>
        </div>
        
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-[#003366] to-[#0073e6] hover:from-[#005bb5] hover:to-[#00aaff] text-white"
        >
          {isLoading ? (
            "Отправка..."
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Отправить заявку
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
