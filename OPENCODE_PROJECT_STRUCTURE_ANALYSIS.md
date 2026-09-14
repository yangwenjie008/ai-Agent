# OpenCode 项目结构分析

## 项目概述
OpenCode 是一个 AI 驱动的开发工具，采用 monorepo 架构，使用 Bun 作为包管理器和运行时。

## 技术栈
- **运行时**: Bun 1.3.14
- **语言**: TypeScript
- **框架**: Effect v4 (函数式编程框架)
- **UI**: SolidJS (Web), Electron (桌面), React-like TUI (终端)
- **数据库**: SQLite (通过 Drizzle ORM)
- **构建工具**: Turbo, Vite
- **包管理**: Bun workspaces

## 核心包结构

### 1. `packages/opencode` - 主应用入口
- **用途**: CLI 工具和主应用逻辑
- **关键目录**:
  - `src/agent/` - AI 代理实现
  - `src/session/` - 会话管理
  - `src/tool/` - 工具集成
  - `src/mcp/` - Model Context Protocol 实现
  - `src/server/` - 内嵌服务器
  - `src/cli/` - 命令行界面

### 2. `packages/core` - 核心业务逻辑
- **用途**: 基础服务和领域逻辑
- **关键模块**:
  - `src/session/` - 会话核心逻辑
  - `src/agent/` - 代理系统
  - `src/tool/` - 工具系统
  - `src/database/` - 数据库抽象
  - `src/config/` - 配置管理
  - `src/project/` - 项目管理
  - `src/provider/` - AI 提供商集成
  - `src/effect/` - Effect 运行时和工具

### 3. `packages/server` - HTTP API 服务器
- **用途**: REST API 服务器
- **关键文件**:
  - `src/api.ts` - API 路由定义
  - `src/handlers.ts` - 请求处理器
  - `src/auth.ts` - 认证中间件
  - `src/routes.ts` - 路由配置

### 4. `packages/protocol` - 协议定义
- **用途**: API 契约和类型定义
- **关键文件**:
  - `src/api.ts` - API 协议定义
  - `src/groups/` - API 分组
  - `src/middleware/` - 中间件协议

### 5. `packages/client` - 客户端 SDK
- **用途**: 自动生成的客户端代码
- **关键目录**:
  - `src/generated/` - 自动生成的类型
  - `src/generated-effect/` - Effect 版本的生成代码
  - `src/contract.ts` - 合约定义

### 6. `packages/tui` - 终端用户界面
- **用途**: 终端 UI 实现
- **关键目录**:
  - `src/component/` - UI 组件
  - `src/routes/` - 路由
  - `src/ui/` - UI 元素
  - `src/prompt/` - 提示词处理

### 7. `packages/app` - Web 应用
- **用途**: 浏览器端应用
- **关键目录**:
  - `src/components/` - React/Solid 组件
  - `src/pages/` - 页面组件
  - `src/hooks/` - 自定义 hooks
  - `src/context/` - 上下文管理

### 8. `packages/desktop` - 桌面应用
- **用途**: Electron 桌面应用
- **关键目录**:
  - `src/main/` - 主进程
  - `src/preload/` - 预加载脚本
  - `src/renderer/` - 渲染进程

## 辅助包

### `packages/llm` - LLM 集成
- AI 模型提供商集成
- 流式处理和响应管理

### `packages/plugin` - 插件系统
- 插件加载和管理
- 插件 API 定义

### `packages/sdk` 和 `packages/sdk-next` - SDK
- JavaScript SDK 实现
- 用于外部集成

### `packages/ui` - 共享 UI 组件
- 跨平台 UI 组件库
- 设计系统实现

### `packages/schema` - 数据模式
- 数据验证和转换
- Schema 定义

### `packages/identity` - 身份认证
- 用户认证和授权
- SSO 集成

### `packages/console` - 管理控制台
- 管理界面
- 监控和配置

### `packages/storybook` - 组件文档
- UI 组件文档
- 开发环境

## 开发工作流

### 脚本命令
```bash
# 开发
bun run dev              # 启动主应用
bun run dev:desktop      # 启动桌面应用
bun run dev:web          # 启动 Web 应用
bun run dev:console      # 启动管理控制台
bun run dev:storybook    # 启动 Storybook

# 构建和检查
bun run typecheck        # 类型检查
bun run lint             # 代码检查
bun run test             # 测试（从包目录运行）

# 代码生成
bun run generate         # 重新生成客户端代码
```

## 架构特点

1. **Effect 优先**: 大量使用 Effect 进行函数式编程和错误处理
2. **类型安全**: 严格的 TypeScript 类型，自动生成的客户端类型
3. **模块化**: 清晰的包边界和依赖管理
4. **跨平台**: 支持 CLI、Web、桌面多种界面
5. **AI 集成**: 深度集成多种 AI 提供商

## 依赖关系
```
Schema → Core → Protocol → Server
Client → Schema + Protocol
SDK → Client + Core + Server
TUI → Core
App → Client
Desktop → App + Core
```

## 开发注意事项
- 从包目录运行测试，不要从根目录
- 使用 `bun typecheck` 进行类型检查
- 修改公共 API 后需要重新生成客户端代码
- Effect 是核心依赖，遵循 Effect 的编程模式