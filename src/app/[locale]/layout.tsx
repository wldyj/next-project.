import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/navigation';
import { getMessages } from 'next-intl/server';
import LanguageSwitcher from '@/components/LanguageSwitcher';

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
  params: Promise<{ locale: string }>;
}) {
  // 等待解析 params
  const resolvedParams = await params;
  const locale = resolvedParams.locale as Locale;
  
  // 验证请求的语言是否支持
  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className="flex flex-col min-h-screen">
        <header className="p-4 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">HEIC 转换器</h1>
            <LanguageSwitcher />
          </div>
        </header>
        <main className="flex-grow">
          {children}
        </main>
      </div>
    </NextIntlClientProvider>
  );
}