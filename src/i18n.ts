import { getRequestConfig } from 'next-intl/server';

// 统一配置国际化
export default getRequestConfig(async ({ locale }) => {
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});