## Getting Started | 快速开始

### 🚀 Development Setup | 开发环境设置

1. **Install Dependencies | 安装依赖**

   ```bash
   pnpm install
   # or | 或者
   npm install
   # or | 或者
   yarn install
   ```

2. **Start Development Server | 启动本地开发服务器**

   ```bash
   pnpm dev
   # or | 或者
   npm run dev
   # or | 或者
   yarn dev
   ```

3. **Open Browser | 打开浏览器**

   Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

   访问 [http://localhost:3001](http://localhost:3001) 查看结果。

### 📝 Available Scripts | 可用脚本

- `pnpm dev` - Start development server on port 3001 (with Turbopack) | 在端口 3001 启动开发服务器（使用 Turbopack）
- `pnpm build` - Build the application for production | 构建生产版本
- `pnpm start` - Start the production server | 启动生产服务器
- `pnpm lint` - Run ESLint for code quality checks | 运行 ESLint 进行代码质量检查

---

## Server Deployment | 服务器部署

### Server Environment Setup | 服务器环境准备

#### 1. Install Node.js | 安装 Node.js

#### 2. Install pnpm (Optional but Recommended) | 安装 pnpm (可选但推荐)

```bash
# Method 1: Install using npm | 方式一：使用 npm 安装
npm install -g pnpm

```

### Deployment Steps | 部署步骤

#### Using pnpm (Recommended) | 使用 pnpm (推荐)

```bash
# 1. Clone project to server | 克隆项目到服务器
git clone <your-repository-url>
cd <project-directory>

# 2. Install dependencies | 安装依赖
pnpm install

# 3. Build project | 构建项目
pnpm build

# 4. Start production server | 启动生产服务器
pnpm start

```

#### Using npm | 使用 npm

```bash
# 1. Clone project to server | 克隆项目到服务器
git clone <your-repository-url>
cd <project-directory>

# 2. Install dependencies | 安装依赖
npm install

# 3. Build project | 构建项目
npm run build

# 4. Start production server | 启动生产服务器
npm start

```
