import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from './navigation';

// 配置国际化中间件
export default createMiddleware({
  defaultLocale,
  locales,
  localePrefix: 'always', // URL 中始终显示语言前缀
  localeDetection: true   // 启用自动语言检测
});

// 配置路由匹配
export const config = {
  matcher: [
    // 匹配所有需要国际化的路由
    '/',
    '/(zh|en)/:path*',
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
}; 