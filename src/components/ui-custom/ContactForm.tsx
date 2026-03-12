'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Send, Phone, User, MessageSquare } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    comment: '',
    agreement: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreement) return;

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitted(true);
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <Card className="bg-white shadow-lg">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-[#003366] mb-2">Спасибо!</h3>
          <p className="text-gray-600">Форма отправлена. Мы свяжемся с вами в ближайшее время.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white shadow-lg">
      <CardHeader className="bg-gradient-to-r from-[#003366] to-[#0073e6] text-white rounded-t-lg">
        <CardTitle className="text-xl flex items-center gap-2">
          <Send className="w-5 h-5" />
          Заказать звонок
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-700 flex items-center gap-1">
              <User className="w-4 h-4" />
              Ваше имя: <span className="text-red-500">*</span>
            </label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Введите ваше имя"
              required
              className="border-gray-300 focus:border-[#0073e6] focus:ring-[#0073e6]"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-gray-700 flex items-center gap-1">
              <Phone className="w-4 h-4" />
              Телефон: <span className="text-red-500">*</span>
            </label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+7 (___) ___-__-__"
              required
              className="border-gray-300 focus:border-[#0073e6] focus:ring-[#0073e6]"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="comment" className="text-sm font-medium text-gray-700 flex items-center gap-1">
              <MessageSquare className="w-4 h-4" />
              Ваш комментарий:
            </label>
            <Textarea
              id="comment"
              value={formData.comment}
              onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
              placeholder="Опишите ваш запрос"
              rows={3}
              className="border-gray-300 focus:border-[#0073e6] focus:ring-[#0073e6] resize-none"
            />
          </div>

          <div className="flex items-start gap-2">
            <Checkbox
              id="agreement"
              checked={formData.agreement}
              onCheckedChange={(checked) => setFormData({ ...formData, agreement: checked as boolean })}
              className="mt-1"
            />
            <label htmlFor="agreement" className="text-sm text-gray-600">
              Ознакомлен с{' '}
              <a href="/user/agreement" className="text-[#0073e6] hover:underline">
                пользовательским соглашением
              </a>
              <span className="text-red-500"> *</span>
            </label>
          </div>

          <Button
            type="submit"
            disabled={!formData.agreement || isSubmitting}
            className="w-full bg-gradient-to-r from-[#003366] to-[#0073e6] hover:from-[#005bb5] hover:to-[#00aaff] text-white"
          >
            {isSubmitting ? 'Отправка...' : 'Отправить'}
            <Send className="ml-2 w-4 h-4" />
          </Button>

          <p className="text-xs text-gray-500 text-center">
            Заполните эту форму и мы обязательно ответим в ближайшее время!
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
