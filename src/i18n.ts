import { getRequestConfig } from 'next-intl/server';
import { headers } from 'next/headers';

// 统一配置国际化
export default getRequestConfig(async () => {
  const headersList = await headers();
  // 如果没有获取到语言设置，默认使用中文
  const locale = headersList.get('X-NEXT-INTL-LOCALE') || 'zh';
  
  // 从正确的 JavaScript 模块路径导入翻译文件
  // 注意：这里导入的是 index.js 文件而不是 .json 文件
  const messages = (await import(`../messages/${locale}/index`)).default;
  
  return {
    locale,
    messages
  };
});