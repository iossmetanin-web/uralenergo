import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

// Email отправка
async function sendEmail(data: { name: string; phone: string; email?: string; message?: string }) {
  const emailText = `
НОВАЯ ЗАЯВКА С САЙТА ВСЕТРАНСФОРМАТОРЫ.РФ

Имя: ${data.name}
Телефон: ${data.phone}
Email: ${data.email || "Не указан"}
Сообщение: ${data.message || "Не указано"}

---
Заявка поступила: ${new Date().toLocaleString("ru-RU")}
  `.trim();

  // Логируем для отладки
  console.log("📧 Email уведомление:");
  console.log(emailText);
  console.log("📧 Отправить на: ural-energy@internet.ru");
  
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Валидация
    const { name, phone, email, message, source } = body;
    
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Имя должно содержать минимум 2 символа" },
        { status: 400 }
      );
    }
    
    if (!phone || typeof phone !== "string" || phone.trim().length < 10) {
      return NextResponse.json(
        { error: "Введите корректный номер телефона" },
        { status: 400 }
      );
    }
    
    // Сохранение в БД
    const lead = await db.lead.create({
      data: {
        name: name.trim(),
        phone: phone.trim(),
        email: email?.trim() || null,
        message: message?.trim() || null,
        source: source || "website",
      },
    });
    
    // Отправка email уведомления
    try {
      await sendEmail({ name, phone, email, message });
    } catch (emailError) {
      console.error("Ошибка отправки email:", emailError);
      // Не прерываем выполнение, заявка уже сохранена
    }
    
    return NextResponse.json({
      success: true,
      id: lead.id,
      message: "Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.",
    });
    
  } catch (error) {
    console.error("Ошибка создания заявки:", error);
    return NextResponse.json(
      { error: "Произошла ошибка при отправке заявки. Попробуйте позвонить нам." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: "API заявок УралЭнерго" });
}
