// 定义支持的语言列表和默认语言
export const locales = ['en', 'zh'] as const;
export const defaultLocale = 'en' as const;

// 创建类型以确保类型安全
export type Locale = (typeof locales)[number]; 