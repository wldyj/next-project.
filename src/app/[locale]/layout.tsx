import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/navigation';
import { getMessages } from 'next-intl/server';

// 验证 locale 是否有效
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// 验证请求的 locale
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  // 等待解析 params
  const resolvedParams = await params;
  
  // 验证请求的语言是否支持
  if (!locales.includes(resolvedParams.locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={resolvedParams.locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}