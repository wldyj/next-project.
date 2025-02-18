import { getRequestConfig } from 'next-intl/server';
import { headers } from 'next/headers';

// 统一配置国际化
export default getRequestConfig(async () => {
  const headersList = await headers();
  // 如果没有获取到语言设置，默认使用中文
  const locale = headersList.get('X-NEXT-INTL-LOCALE') || 'zh-CN';
  
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});