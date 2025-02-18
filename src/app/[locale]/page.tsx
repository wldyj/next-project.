'use client';

import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('common');
  
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">
        {t('title')}
      </h1>
      <p className="mb-4">
        {t('description')}
      </p>
      <div className="space-x-4">
        <button className="btn">
          {t('upload')}
        </button>
        <button className="btn">
          {t('convert')}
        </button>
      </div>
    </main>
  );
} 