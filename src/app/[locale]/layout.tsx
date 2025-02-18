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
  // 等待 params 解析完成
  const { locale } = await params;
  
  // 验证 locale 是否在支持的语言列表中
  if (!locales.includes(locale)) {
    notFound();
  }

  // 获取对应语言的消息
  const messages = await getMessages({locale});

  return (
    // 使用 Provider 包裹子组件
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}