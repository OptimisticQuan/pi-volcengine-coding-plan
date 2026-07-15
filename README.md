# pi-volcengine-coding-plan

[![npm version](https://img.shields.io/npm/v/pi-volcengine-coding-plan.svg?style=flat-square)](https://www.npmjs.com/package/pi-volcengine-coding-plan)
[![MIT License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)

给 pi 增加 Volcengine Coding Plan 国内版模型支持的扩展包。安装后会注册 `volcengine-plan` provider。

## 功能概览

- 注册 Volcengine Coding Plan provider，兼容 pi 的 OpenAI 风格调用路径
- 支持通过 `/login` 交互式输入 API Key，无需手动配置环境变量
- 使用统一的 `VOLCENGINE_API_KEY` 环境变量访问全部模型
- 覆盖 Volcengine Coding Plan 当前完整模型集合（12 个模型）
- 直接使用国内版 Coding Plan endpoint，而不是基础模型 endpoint

## 安装

```bash
pi install npm:pi-volcengine-coding-plan
```

## 配置

### 方式一：交互式登录（推荐）

安装后直接在 pi 中输入 `/login`，选择 `Volcengine Coding Plan (API Key)`，按提示输入你的 Volcengine ARK API Key 即可。密钥会安全存储在 pi 的凭证系统中。

```bash
pi
/login
```

API Key 获取地址：https://console.volcengine.com/ark/region:ark+cn-beijing/apikey

### 方式二：环境变量

设置环境变量：

```bash
export VOLCENGINE_API_KEY="your-ark-api-key"
```

如果你想长期使用，把这一行写进 `~/.zshrc` 或 `~/.bashrc`。

## 使用方式

### 交互式选择模型

```bash
pi
```

进入后执行 `/model`，从列表中选择 `volcengine-plan` 下面的模型。

### 命令行直接指定模型

推荐始终使用完整 provider/model 语法，避免与内置 provider 的同名模型冲突：

```bash
pi --model volcengine-plan/ark-code-latest
pi --model volcengine-plan/doubao-seed-2.0-code
pi --model volcengine-plan/glm-5.2
pi --model volcengine-plan/deepseek-v4-pro
pi --model volcengine-plan/kimi-k2.7-code
```

列出当前所有可用模型：

```bash
pi --list-models
```

如果你要把它设成默认模型，可以参考下面的配置思路：

```json
{
  "agents": {
    "defaults": {
      "model": {
        "primary": "volcengine-plan/ark-code-latest"
      }
    }
  }
}
```

## 可用模型

| Model ID | Context Window | Max Tokens | Input |
|----------|----------------|------------|-------|
| `ark-code-latest` | 256000 | 32000 | text, image |
| `doubao-seed-code` | 256000 | 32000 | text, image |
| `glm-5.2` | 200000 | 65536 | text |
| `deepseek-v4-flash` | 1024000 | 65536 | text |
| `deepseek-v4-pro` | 1024000 | 65536 | text |
| `doubao-seed-2.0-code` | 256000 | 65536 | text, image |
| `doubao-seed-2.0-pro` | 256000 | 65536 | text, image |
| `doubao-seed-2.0-lite` | 256000 | 65536 | text, image |
| `minimax-m2.7` | 200000 | 65536 | text |
| `minimax-m3` | 200000 | 65536 | text |
| `kimi-k2.6` | 256000 | 32000 | text, image |
| `kimi-k2.7-code` | 256000 | 32000 | text, image |

## 重要说明

- 本扩展使用的是 Volcengine Coding Plan endpoint：`https://ark.cn-beijing.volces.com/api/coding/v3`
- 不要改成普通基础模型接口，否则调用路径和计费方式都可能不符合你的 Coding Plan 预期
- 类似 `glm-5.2`、`deepseek-v4-pro`、`kimi-k2.7-code` 这类常见模型 id，可能与其他 provider 重名，建议始终使用 `volcengine-plan/模型ID`

## 发布与维护

完整发布流程见 [PUBLISHING.md](./PUBLISHING.md)。

你至少需要完成这几件事：

1. 把 `package.json` 里的 `author` 和 `repository` 改成你自己的信息
2. 在 GitHub 仓库里配置 `NPM_TOKEN`
3. 首次发布前执行一次 `npm publish --dry-run`

## License

MIT