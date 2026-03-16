import React from 'react'
import { useParams, Link } from 'react-router-dom'

const blogPosts = [
  {
    id: 1,
    title: 'React Hooks 入门指南',
    excerpt: '本文介绍React Hooks的基本概念和使用方法，帮助你快速上手这个强大的特性。',
    content: '# React Hooks 入门指南\n\nReact Hooks 是 React 16.8 引入的新特性，它允许我们在函数组件中使用 state 和其他 React 特性，而不需要编写类组件。\n\n## 什么是 React Hooks？\n\nHooks 是一些可以让你在函数组件中"钩入" React 状态和生命周期特性的函数。Hooks 不能在类组件中使用 —— 它们让你不用类也能使用 React。\n\n## 常用的 Hooks\n\n### useState\n\nuseState 是最基本的 Hook，它允许我们在函数组件中添加状态。\n\n```jsx\nimport React, { useState } from \'react\';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}\n```\n\n### useEffect\n\nuseEffect 允许我们在函数组件中执行副作用操作，比如数据获取、订阅或手动更改 DOM。\n\n```jsx\nimport React, { useState, useEffect } from \'react\';\n\nfunction Example() {\n  const [count, setCount] = useState(0);\n\n  useEffect(() => {\n    document.title = `You clicked ${count} times`;\n  });\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}\n```\n\n## 自定义 Hooks\n\n你还可以创建自己的自定义 Hooks，以便在不同组件之间重用状态逻辑。\n\n```jsx\nimport { useState, useEffect } from \'react\';\n\nfunction useWindowWidth() {\n  const [width, setWidth] = useState(window.innerWidth);\n\n  useEffect(() => {\n    const handleResize = () => setWidth(window.innerWidth);\n    window.addEventListener(\'resize\', handleResize);\n    return () => window.removeEventListener(\'resize\', handleResize);\n  }, []);\n\n  return width;\n}\n```\n\n## 总结\n\nReact Hooks 为我们提供了一种更简洁、更灵活的方式来编写 React 组件。它们让我们能够在函数组件中使用状态和生命周期方法，同时也让代码更易于理解和维护。\n\n通过使用 Hooks，我们可以：\n1. 重用状态逻辑而不用改变组件结构\n2. 分割基于功能的代码，而不是基于生命周期方法\n3. 使用函数组件而不用类组件\n\n希望本文对你理解 React Hooks 有所帮助！',
    date: '2024-03-15',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=React%20Hooks%20tutorial%20code%20snippet&image_size=landscape_16_9'
  },
  {
    id: 2,
    title: '前端性能优化最佳实践',
    excerpt: '探索前端性能优化的各种方法，从代码层面到构建工具，全面提升网站速度。',
    content: '# 前端性能优化最佳实践\n\n前端性能优化是提升用户体验的关键因素。一个加载速度快、响应迅速的网站不仅能提高用户满意度，还能提升搜索引擎排名。\n\n## 代码层面优化\n\n### 1. 减少 HTTP 请求\n\n- 合并 CSS 和 JavaScript 文件\n- 使用 CSS sprites 合并图片\n- 使用字体图标替代图片图标\n- 懒加载非关键资源\n\n### 2. 优化资源加载\n\n- 使用适当的图片格式（WebP 优先）\n- 压缩图片和资源文件\n- 使用 CDN 加速静态资源\n- 启用浏览器缓存\n\n### 3. 代码分割\n\n- 按需加载 JavaScript 模块\n- 使用 React.lazy 和 Suspense\n- 分割大型 bundle\n\n## 构建工具优化\n\n### 1. 使用现代构建工具\n\n- Webpack 5 或 Vite\n- 配置合理的构建选项\n- 使用 Tree Shaking 移除未使用的代码\n\n### 2. 代码压缩\n\n- 压缩 JavaScript、CSS 和 HTML\n- 移除不必要的注释和空白\n- 使用 Terser 进行高级压缩\n\n## 运行时优化\n\n### 1. 渲染优化\n\n- 使用虚拟列表处理长列表\n- 避免不必要的重渲染\n- 使用 React.memo、useMemo 和 useCallback\n\n### 2. 网络优化\n\n- 使用 HTTP/2 或 HTTP/3\n- 启用 GZIP 或 Brotli 压缩\n- 实现预加载和预连接\n\n## 监控和分析\n\n- 使用 Lighthouse 进行性能审计\n- 监控 Core Web Vitals\n- 分析用户真实体验数据\n\n## 总结\n\n前端性能优化是一个持续的过程，需要从多个方面入手。通过合理的代码结构、优化的资源加载和现代的构建工具，我们可以显著提升网站的性能，为用户提供更好的体验。\n\n记住，性能优化不是一次性的工作，而是需要持续关注和改进的。定期审计和监控你的网站性能，及时发现并解决问题，才能保持良好的用户体验。',
    date: '2024-03-10',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=frontend%20performance%20optimization%20dashboard&image_size=landscape_16_9'
  },
  {
    id: 3,
    title: 'TypeScript 高级类型技巧',
    excerpt: '深入了解TypeScript的高级类型系统，掌握泛型、条件类型等强大特性。',
    content: '# TypeScript 高级类型技巧\n\nTypeScript 是 JavaScript 的超集，它添加了静态类型系统，使我们的代码更加健壮和可维护。除了基本类型外，TypeScript 还提供了许多高级类型特性，让我们能够编写更加灵活和强大的类型定义。\n\n## 泛型\n\n泛型是 TypeScript 中最强大的特性之一，它允许我们编写可重用的组件，这些组件可以处理多种类型的数据。\n\n```typescript\nfunction identity<T>(arg: T): T {\n  return arg;\n}\n\nlet output1 = identity<string>("myString");\nlet output2 = identity<number>(42);\n```\n\n## 条件类型\n\n条件类型允许我们根据类型条件来选择不同的类型。\n\n```typescript\ntype NonNullable<T> = T extends null | undefined ? never : T;\n\ntype A = NonNullable<string | null | undefined>; // string\ntype B = NonNullable<number | null>; // number\n```\n\n## 映射类型\n\n映射类型允许我们基于旧类型创建新类型。\n\n```typescript\ntype Readonly<T> = {\n  readonly [P in keyof T]: T[P];\n};\n\ninterface Person {\n  name: string;\n  age: number;\n}\n\ntype ReadonlyPerson = Readonly<Person>; // { readonly name: string; readonly age: number; }\n```\n\n## 类型守卫\n\n类型守卫允许我们在运行时检查类型，从而在编译时获得更准确的类型推断。\n\n```typescript\nfunction isString(value: unknown): value is string {\n  return typeof value === \'string\';\n}\n\nfunction processValue(value: unknown) {\n  if (isString(value)) {\n    // 这里 value 被推断为 string 类型\n    console.log(value.length);\n  }\n}\n```\n\n## 模板字面量类型\n\n模板字面量类型允许我们基于字符串字面量创建新的类型。\n\n```typescript\ntype EventName<T extends string> = `${T}Changed`;\n\ntype ClickEvent = EventName<"click">; // "clickChanged"\ntype MouseEvent = EventName<"mouse">; // "mouseChanged"\n```\n\n## 总结\n\nTypeScript 的高级类型系统为我们提供了强大的工具，让我们能够编写更加类型安全、可维护的代码。通过掌握这些高级类型技巧，我们可以：\n\n1. 创建更加灵活和可重用的类型定义\n2. 编写更加类型安全的代码\n3. 提高代码的可读性和可维护性\n4. 减少运行时错误\n\n希望本文对你理解 TypeScript 的高级类型系统有所帮助！',
    date: '2024-03-05',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=TypeScript%20advanced%20types%20code&image_size=landscape_16_9'
  },
  {
    id: 4,
    title: 'CSS Grid 布局完全指南',
    excerpt: '从基础到高级，全面掌握CSS Grid布局，创建复杂的响应式设计。',
    content: '# CSS Grid 布局完全指南\n\nCSS Grid 是一种强大的二维布局系统，它允许我们在网页上创建复杂的布局结构。与 Flexbox 不同，Grid 可以同时处理行和列，为我们提供了更多的布局可能性。\n\n## 基本概念\n\n### 网格容器\n\n要使用 Grid 布局，首先需要将一个元素设置为网格容器：\n\n```css\n.container {\n  display: grid;\n}\n```\n\n### 网格项\n\n网格容器的直接子元素自动成为网格项：\n\n```html\n<div class="container">\n  <div class="item">1</div>\n  <div class="item">2</div>\n  <div class="item">3</div>\n  <div class="item">4</div>\n</div>\n```\n\n### 网格线\n\n网格线是网格布局的基础，它们定义了网格的结构：\n\n- 水平网格线分隔行\n- 垂直网格线分隔列\n\n### 网格轨道\n\n网格轨道是两条相邻网格线之间的空间，可以是行或列：\n\n```css\n.container {\n  display: grid;\n  grid-template-columns: 100px 100px 100px;\n  grid-template-rows: 50px 50px;\n}\n```\n\n## 常用属性\n\n### 容器属性\n\n- `grid-template-columns`：定义列的大小和数量\n- `grid-template-rows`：定义行的大小和数量\n- `grid-gap`：定义网格项之间的间距\n- `grid-auto-flow`：定义网格项的排列顺序\n- `justify-content`：水平对齐网格\n- `align-content`：垂直对齐网格\n\n### 网格项属性\n\n- `grid-column`：指定网格项的列位置\n- `grid-row`：指定网格项的行位置\n- `grid-area`：指定网格项的区域\n\n## 响应式设计\n\nCSS Grid 非常适合创建响应式布局，可以使用媒体查询和相对单位：\n\n```css\n.container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  grid-gap: 20px;\n}\n\n@media (max-width: 768px) {\n  .container {\n    grid-template-columns: 1fr;\n  }\n}\n```\n\n## 高级技巧\n\n### 网格模板区域\n\n使用 `grid-template-areas` 创建命名的网格区域：\n\n```css\n.container {\n  display: grid;\n  grid-template-areas:\n    "header header header"\n    "sidebar content content"\n    "footer footer footer";\n  grid-template-columns: 200px 1fr 1fr;\n  grid-template-rows: 100px 1fr 100px;\n}\n\n.header {\n  grid-area: header;\n}\n\n.sidebar {\n  grid-area: sidebar;\n}\n\n.content {\n  grid-area: content;\n}\n\n.footer {\n  grid-area: footer;\n}\n```\n\n### 重叠网格项\n\n网格项可以重叠，使用 `z-index` 控制层级：\n\n```css\n.item1 {\n  grid-column: 1 / 3;\n  grid-row: 1 / 3;\n  z-index: 2;\n}\n\n.item2 {\n  grid-column: 2 / 4;\n  grid-row: 2 / 4;\n  z-index: 1;\n}\n```\n\n## 总结\n\nCSS Grid 是一种强大的布局工具，它为我们提供了创建复杂、响应式布局的能力。通过掌握 Grid 的基本概念和高级技巧，我们可以：\n\n1. 创建更加灵活和复杂的布局\n2. 减少对嵌套 div 的依赖\n3. 简化响应式设计\n4. 提高代码的可读性和可维护性\n\n希望本文对你理解和使用 CSS Grid 布局有所帮助！',
    date: '2024-02-28',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=CSS%20Grid%20layout%20design&image_size=landscape_16_9'
  },
  {
    id: 5,
    title: 'Node.js 微服务架构设计',
    excerpt: '学习如何设计和实现基于Node.js的微服务架构，提高系统的可扩展性。',
    content: '# Node.js 微服务架构设计\n\n微服务架构是一种将应用程序分解为小型、独立服务的设计方法。每个服务都专注于特定的业务功能，可以独立开发、部署和扩展。\n\n## 什么是微服务架构？\n\n微服务架构是一种软件设计模式，它将应用程序构建为一系列松耦合的服务。每个服务都：\n\n- 专注于特定的业务功能\n- 可以独立开发和部署\n- 拥有自己的数据存储\n- 通过 API 与其他服务通信\n\n## Node.js 微服务的优势\n\n- **轻量级**：Node.js 本身轻量，适合构建微服务\n- **高效**：基于事件驱动和非阻塞 I/O，处理并发请求能力强\n- **生态丰富**：拥有大量的 npm 包，加速开发\n- **易于部署**：可以容器化，方便在云环境中部署\n\n## 设计原则\n\n### 1. 服务拆分\n\n- 按业务领域拆分\n- 每个服务职责单一\n- 服务之间通过 API 通信\n\n### 2. 数据管理\n\n- 每个服务拥有自己的数据库\n- 避免共享数据库\n- 通过 API 进行数据交互\n\n### 3. 通信机制\n\n- RESTful API\n- GraphQL\n- 消息队列（如 RabbitMQ、Kafka）\n\n### 4. 服务发现\n\n- 客户端发现\n- 服务端发现\n- 使用服务注册中心（如 Consul、Etcd）\n\n### 5. 容错处理\n\n- 超时机制\n- 重试策略\n- 熔断机制\n- 负载均衡\n\n## 技术栈选择\n\n### 核心框架\n\n- Express.js：轻量、灵活\n- Nest.js：企业级、模块化\n- Fastify：高性能\n\n### 数据库\n\n- MongoDB：文档数据库，适合快速开发\n- PostgreSQL：关系型数据库，功能强大\n- Redis：缓存和会话管理\n\n### 消息队列\n\n- RabbitMQ：可靠的消息传递\n- Kafka：高吞吐量\n\n### 部署工具\n\n- Docker：容器化\n- Kubernetes：容器编排\n- Jenkins：持续集成/持续部署\n\n## 实现示例\n\n### 服务架构\n\n```\n├── user-service\n├── product-service\n├── order-service\n├── payment-service\n└── api-gateway\n```\n\n### API 网关\n\nAPI 网关是微服务架构的入口点，负责路由请求、认证和授权：\n\n```javascript\nconst express = require(\'express\');\nconst { createProxyMiddleware } = require(\'http-proxy-middleware\');\n\nconst app = express();\n\n// 路由到用户服务\napp.use(\'/api/users\', createProxyMiddleware({\n  target: \'http://user-service:3001\',\n  changeOrigin: true\n}));\n\n// 路由到产品服务\napp.use(\'/api/products\', createProxyMiddleware({\n  target: \'http://product-service:3002\',\n  changeOrigin: true\n}));\n\napp.listen(3000, () => {\n  console.log(\'API Gateway running on port 3000\');\n});\n```\n\n## 监控和管理\n\n- **日志管理**：ELK Stack（Elasticsearch, Logstash, Kibana）\n- **监控**：Prometheus + Grafana\n- **追踪**：Jaeger 或 Zipkin\n\n## 总结\n\nNode.js 微服务架构为我们提供了一种构建可扩展、可维护应用程序的方法。通过合理的服务拆分、通信机制和容错处理，我们可以：\n\n1. 提高开发效率和团队协作\n2. 实现独立部署和扩展\n3. 提高系统的可靠性和容错能力\n4. 更好地应对业务增长\n\n希望本文对你理解和实现 Node.js 微服务架构有所帮助！',
    date: '2024-02-20',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Node.js%20microservices%20architecture&image_size=landscape_16_9'
  },
  {
    id: 6,
    title: 'Git 工作流最佳实践',
    excerpt: '掌握Git的高级使用技巧，建立规范的版本控制工作流程。',
    content: '# Git 工作流最佳实践\n\nGit 是目前最流行的版本控制系统，它为我们提供了强大的代码管理能力。建立规范的 Git 工作流程对于团队协作和项目管理至关重要。\n\n## 常用 Git 工作流\n\n### 1. Git Flow\n\nGit Flow 是一种经典的 Git 工作流，它定义了严格的分支管理策略：\n\n- **master**：主分支，存储已发布的代码\n- **develop**：开发分支，集成所有功能开发\n- **feature**：功能分支，从 develop 分支创建\n- **release**：发布分支，从 develop 分支创建\n- **hotfix**：热修复分支，从 master 分支创建\n\n### 2. GitHub Flow\n\nGitHub Flow 是一种更简单的工作流，适合持续部署的项目：\n\n- **main**：主分支，始终保持可部署状态\n- **feature**：功能分支，从 main 分支创建\n- **Pull Request**：通过 PR 进行代码审查\n- **Merge**：合并到 main 分支后自动部署\n\n### 3. GitLab Flow\n\nGitLab Flow 是 GitHub Flow 的扩展，增加了环境分支：\n\n- **main**：主分支\n- **environment**：环境分支（如 staging、production）\n- **feature**：功能分支\n\n## 最佳实践\n\n### 1. 分支管理\n\n- **命名规范**：使用有意义的分支名称，如 `feature/login-page`、`fix/bug-123`\n- **分支生命周期**：功能完成后及时合并并删除分支\n- **分支保护**：对主分支设置保护规则，防止直接推送\n\n### 2. 提交规范\n\n- **提交信息**：使用清晰、简洁的提交信息\n- **提交大小**：每个提交应该是一个逻辑上的变更\n- **提交频率**：频繁提交，保持提交粒度小\n\n### 3. 代码审查\n\n- **Pull Request**：使用 PR 进行代码审查\n- **审查标准**：建立明确的代码审查标准\n- **反馈及时**：及时提供审查反馈\n\n### 4. 标签管理\n\n- **版本标签**：使用语义化版本号作为标签\n- **发布标签**：为每个发布创建标签\n\n### 5. 冲突解决\n\n- **定期同步**：定期从主分支拉取最新代码\n- **冲突处理**：谨慎处理冲突，确保代码质量\n\n## Git 命令技巧\n\n### 1. 基础命令\n\n```bash\n# 克隆仓库\ngit clone <repository-url>\n\n# 查看状态\ngit status\n\n# 添加文件\ngit add <file>\n\n# 提交更改\ngit commit -m "commit message"\n\n# 推送更改\ngit push origin <branch>\n\n# 拉取更改\ngit pull origin <branch>\n```\n\n### 2. 分支命令\n\n```bash\n# 创建分支\ngit checkout -b <branch-name>\n\n# 切换分支\ngit checkout <branch-name>\n\n# 查看分支\ngit branch\n\n# 合并分支\ngit merge <branch-name>\n\n# 删除分支\ngit branch -d <branch-name>\n```\n\n### 3. 高级命令\n\n```bash\n# 查看提交历史\ngit log\n\n# 查看文件变更\ngit diff\n\n# 撤销更改\ngit checkout -- <file>\n\n# 重置提交\ngit reset <commit-hash>\n\n# 交互式重写历史\ngit rebase -i <commit-hash>\n```\n\n## 工具推荐\n\n- **Git GUI**：GitHub Desktop、GitKraken\n- **IDE 集成**：VS Code Git 扩展、IntelliJ Git 集成\n- **CI/CD**：GitHub Actions、GitLab CI、Jenkins\n\n## 总结\n\n建立规范的 Git 工作流程对于项目的成功至关重要。通过选择适合项目的工作流、遵循最佳实践和使用适当的工具，我们可以：\n\n1. 提高代码质量和可维护性\n2. 改善团队协作和沟通\n3. 减少错误和冲突\n4. 加速开发和部署流程\n\n希望本文对你建立和优化 Git 工作流有所帮助！',
    date: '2024-02-15',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Git%20workflow%20diagram&image_size=landscape_16_9'
  }
]

const BlogDetail = () => {
  const { id } = useParams()
  const post = blogPosts.find(p => p.id === parseInt(id))

  if (!post) {
    return (
      <div className="container" style={{ padding: '2rem 0' }}>
        <h1>文章不存在</h1>
        <Link to="/" className="read-more">返回首页</Link>
      </div>
    )
  }

  return (
    <section style={{ padding: '2rem 0' }}>
      <div className="container">
        <Link to="/" className="read-more" style={{ display: 'inline-block', marginBottom: '1rem' }}>返回首页</Link>
        <article>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{post.title}</h1>
          <div style={{ color: 'var(--secondary-color)', marginBottom: '2rem' }}>{post.date}</div>
          <img src={post.image} alt={post.title} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', marginBottom: '2rem', borderRadius: '8px' }} />
          <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>').replace(/# (.*?)(?=\n|$)/g, '<h1>$1</h1>').replace(/## (.*?)(?=\n|$)/g, '<h2>$1</h2>').replace(/```(.*?)```/g, '<pre><code>$1</code></pre>') }} />
        </article>
      </div>
    </section>
  )
}

export default BlogDetail