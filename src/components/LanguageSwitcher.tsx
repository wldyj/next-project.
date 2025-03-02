'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import Cookies from 'js-cookie';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const switchLanguage = (newLocale: string) => {
    // 设置语言Cookie
    Cookies.set('NEXT_LOCALE', newLocale, { path: '/' });
    
    // 强制刷新页面以应用新语言
    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <div className="flex space-x-4">
      <button
        disabled={locale === 'zh' || isPending}
        onClick={() => switchLanguage('zh')}
        className={`px-3 py-1 rounded ${locale === 'zh' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        中文
      </button>
      <button
        disabled={locale === 'en' || isPending}
        onClick={() => switchLanguage('en')}
        className={`px-3 py-1 rounded ${locale === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        English
      </button>
    </div>
  );
} 