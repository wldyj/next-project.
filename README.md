# Next.js 项目初始化模板

这是一个基于 [Next.js](https://nextjs.org) 的项目初始化模板，用于快速启动新的 Next.js 项目。本模板已预配置了多种常用功能和最佳实践，帮助开发者快速搭建高质量的 Next.js 应用。

## 特性

- 🚀 基于最新的 Next.js 15.1.7
- 🌐 内置国际化支持 (next-intl)
- 🎨 集成 Tailwind CSS 进行样式设计
- 📝 TypeScript 支持
- 🧹 ESLint 配置
- 🍪 Cookie 处理 (js-cookie)
- 📁 组织良好的项目结构
- 🔄 开发服务器自动热重载

## 快速开始

### 使用此模板创建新项目

```bash
# 克隆此仓库
git clone https://github.com/yourusername/next-init-project.git my-project

# 进入项目目录
cd my-project

# 安装依赖
npm install
# 或
yarn install
# 或
pnpm install
# 或
bun install
```

### 启动开发服务器

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
# 或
bun dev
```

在浏览器中打开 [http://localhost:3001](http://localhost:3001) 查看结果。

## 项目架构

```
src/
├── app/                     # Next.js 应用路由
│   ├── [locale]/            # 国际化路由
│   │   ├── layout.tsx       # 根布局组件
│   │   ├── page.tsx         # 首页组件
│   │   └── [...]/           # 其他页面路由
│   └── globals.css          # 全局CSS样式
│
├── components/              # 可复用组件
│   ├── ui/                  # 基础UI组件（按钮、输入框等）
│   │   ├── button.tsx       # 按钮组件
│   │   └── ...              # 其他UI组件
│   ├── layout/              # 布局组件（页头、页脚、侧边栏等）
│   │   ├── header.tsx       # 页头组件
│   │   └── ...              # 其他布局组件
│   └── features/            # 功能组件（特定业务功能）
│       ├── auth/            # 认证相关组件
│       └── ...              # 其他功能组件
│
├── config/                  # 配置文件
│   ├── site.ts              # 站点配置
│   ├── menu.ts              # 菜单配置
│   └── ...                  # 其他配置
│
├── hooks/                   # 自定义 React Hooks
│   ├── use-auth.ts          # 认证相关Hook
│   ├── use-form.ts          # 表单相关Hook
│   └── ...                  # 其他自定义Hook
│
├── lib/                     # 工具库
│   ├── api.ts               # API客户端
│   ├── auth.ts              # 认证工具
│   └── ...                  # 其他工具库
│
├── styles/                  # 全局样式
│   ├── mixins/              # SCSS混入
│   ├── variables/           # SCSS变量
│   └── ...                  # 其他样式文件
│
├── utils/                   # 工具函数
│   ├── format.ts            # 格式化工具
│   ├── validation.ts        # 验证工具
│   └── ...                  # 其他工具函数
│
├── i18n.ts                  # 国际化配置
└── middleware.ts            # Next.js 中间件

messages/                    # 国际化翻译文件
├── en/                      # 英文翻译
│   ├── common.json          # 通用翻译
│   ├── error.json           # 错误信息翻译
│   └── index.js             # 英文翻译导出文件
└── zh/                      # 中文翻译
    ├── common.json          # 通用翻译
    ├── error.json           # 错误信息翻译
    └── index.js             # 中文翻译导出文件
```

### 目录说明及最佳实践

#### `app/` 目录
- **用途**：包含所有页面路由和布局
- **最佳实践**：
  - 使用 App Router 和文件系统路由
  - 页面组件应专注于布局和数据获取
  - 业务逻辑应抽离到hooks和utils中
  - 尽量使用服务器组件(Server Components)来减少客户端JavaScript体积

#### `components/` 目录
- **用途**：存放所有可复用的React组件
- **最佳实践**：
  - **ui/**：存放基础UI组件，应保持高度可复用性和无业务逻辑
  - **layout/**：存放布局相关组件，如Header、Footer、Sidebar等
  - **features/**：按功能模块组织的业务组件，包含特定业务逻辑
  - 组件应遵循单一职责原则
  - 使用TypeScript定义清晰的props接口
  - 组件文件使用PascalCase命名(如Button.tsx)

#### `config/` 目录
- **用途**：集中管理应用配置
- **最佳实践**：
  - 配置应以常量或对象形式导出
  - 环境相关配置应通过环境变量注入
  - 避免在配置中包含业务逻辑

#### `hooks/` 目录
- **用途**：存放自定义React Hooks
- **最佳实践**：
  - Hook名称应以use前缀开头
  - 每个Hook应专注于单一功能
  - 分离UI逻辑和业务逻辑
  - 文件名使用kebab-case命名(如use-auth.ts)

#### `lib/` 目录
- **用途**：存放第三方库的包装和核心功能实现
- **最佳实践**：
  - 抽象第三方服务和API调用
  - 实现核心业务逻辑
  - 提供清晰的接口供其他部分使用

#### `styles/` 目录
- **用途**：存放全局样式和样式工具
- **最佳实践**：
  - 组件样式应与组件保持在同一位置
  - 全局样式应最小化，主要用于重置和变量定义
  - 使用Tailwind CSS作为主要样式方案

#### `utils/` 目录
- **用途**：存放纯函数和工具函数
- **最佳实践**：
  - 函数应是纯函数，无副作用
  - 每个工具函数应有明确的单一用途
  - 按功能类型组织文件(如format.ts, validation.ts)
  - 文件名使用kebab-case命名

#### `i18n.ts` 文件
- **用途**：配置国际化
- **最佳实践**：
  - 使用next-intl管理翻译
  - 翻译文件存放在messages/目录
  - 所有用户可见文本应使用i18n机制

#### `middleware.ts` 文件
- **用途**：Next.js中间件配置
- **最佳实践**：
  - 用于路由保护、重定向和请求处理
  - 保持轻量，避免复杂逻辑
  - 性能敏感代码应谨慎放置

#### `messages/` 目录
- **用途**：存放多语言翻译文件
- **最佳实践**：
  - 按语言代码（如en、zh）组织子目录
  - 按功能模块（如common、error）拆分翻译文件
  - 使用JSON格式存储翻译键值对
  - 在index.js中聚合并导出所有翻译
  - 保持翻译键的一致性和层次结构
  - 避免在翻译中包含HTML或复杂格式，使用参数替代

## 国际化实现

本项目使用 [next-intl](https://next-intl-docs.vercel.app/) 实现国际化，主要特点：

### 目录结构
```
messages/                # 翻译文件根目录
├── en/                  # 英文翻译
│   ├── common.json      # 通用文本（标题、按钮等）
│   ├── error.json       # 错误信息
│   └── index.js         # 导出所有英文翻译
└── zh/                  # 中文翻译
    ├── common.json      # 通用文本
    ├── error.json       # 错误信息
    └── index.js         # 导出所有中文翻译
```

### 关键文件
- **src/i18n.ts**: 国际化配置，负责加载正确的语言包
- **src/middleware.ts**: 处理语言检测和路由
- **src/navigation.ts**: 定义支持的语言列表
- **src/app/[locale]/layout.tsx**: 国际化布局组件，提供翻译上下文

### 使用方法

1. **在组件中使用翻译**
```tsx
'use client';
import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('common');
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      <button>{t('upload')}</button>
    </div>
  );
}
```

2. **切换语言**
```tsx
'use client';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  
  const switchLanguage = (newLocale) => {
    Cookies.set('NEXT_LOCALE', newLocale, { path: '/' });
    router.refresh();
  };
  
  return (
    <div>
      <button onClick={() => switchLanguage('zh')}>中文</button>
      <button onClick={() => switchLanguage('en')}>English</button>
    </div>
  );
}
```

3. **添加新语言**
   - 在 `messages/` 下创建新的语言目录（如 `ja/`）
   - 复制现有语言的JSON文件并翻译内容
   - 创建对应的 `index.js` 导出文件
   - 在 `src/navigation.ts` 中添加新语言代码

4. **添加新翻译模块**
   - 在各语言目录下创建新的JSON文件（如 `dashboard.json`）
   - 在各语言的 `index.js` 中导入并导出新模块

## 自定义

您可以通过修改 `src/app/page.tsx` 开始编辑首页。页面会随着您的编辑自动更新。

## 部署

推荐使用 [Vercel 平台](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) 部署您的 Next.js 应用。

查看 [Next.js 部署文档](https://nextjs.org/docs/app/building-your-application/deploying) 了解更多详情。

## 许可证

本项目采用 MIT 许可证 - 详情请查看 [LICENSE](./LICENSE) 文件。
