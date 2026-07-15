import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";

export default function (pi: ExtensionAPI) {
  pi.registerProvider("volcengine-plan", {
    baseUrl: "https://ark.cn-beijing.volces.com/api/coding/v3",
    apiKey: "$VOLCENGINE_API_KEY",
    api: "openai-completions",
    models: [
      {
        id: "ark-code-latest",
        name: "ark-code-latest",
        reasoning: false,
        input: ["text", "image"] as ("text" | "image")[],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 256000,
        maxTokens: 32000,
        compat: {
          supportsDeveloperRole: false,
          maxTokensField: "max_tokens" as const,
        },
      },
      {
        id: "doubao-seed-code",
        name: "doubao-seed-code",
        reasoning: false,
        input: ["text", "image"] as ("text" | "image")[],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 256000,
        maxTokens: 32000,
        compat: {
          supportsDeveloperRole: false,
          maxTokensField: "max_tokens" as const,
        },
      },
      {
        id: "glm-5.2",
        name: "glm-5.2",
        reasoning: false,
        input: ["text"] as ("text" | "image")[],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 200000,
        maxTokens: 65536,
        compat: {
          supportsDeveloperRole: false,
          maxTokensField: "max_tokens" as const,
        },
      },
      {
        id: "deepseek-v4-flash",
        name: "deepseek-v4-flash",
        reasoning: false,
        input: ["text"] as ("text" | "image")[],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 1024000,
        maxTokens: 65536,
        compat: {
          supportsDeveloperRole: false,
          maxTokensField: "max_tokens" as const,
        },
      },
      {
        id: "deepseek-v4-pro",
        name: "deepseek-v4-pro",
        reasoning: false,
        input: ["text"] as ("text" | "image")[],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 1024000,
        maxTokens: 65536,
        compat: {
          supportsDeveloperRole: false,
          maxTokensField: "max_tokens" as const,
        },
      },
      {
        id: "doubao-seed-2.0-code",
        name: "doubao-seed-2.0-code",
        reasoning: false,
        input: ["text", "image"] as ("text" | "image")[],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 256000,
        maxTokens: 65536,
        compat: {
          supportsDeveloperRole: false,
          maxTokensField: "max_tokens" as const,
        },
      },
      {
        id: "doubao-seed-2.0-pro",
        name: "doubao-seed-2.0-pro",
        reasoning: false,
        input: ["text", "image"] as ("text" | "image")[],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 256000,
        maxTokens: 65536,
        compat: {
          supportsDeveloperRole: false,
          maxTokensField: "max_tokens" as const,
        },
      },
      {
        id: "doubao-seed-2.0-lite",
        name: "doubao-seed-2.0-lite",
        reasoning: false,
        input: ["text", "image"] as ("text" | "image")[],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 256000,
        maxTokens: 65536,
        compat: {
          supportsDeveloperRole: false,
          maxTokensField: "max_tokens" as const,
        },
      },
      {
        id: "minimax-m2.7",
        name: "minimax-m2.7",
        reasoning: false,
        input: ["text"] as ("text" | "image")[],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 200000,
        maxTokens: 65536,
        compat: {
          supportsDeveloperRole: false,
          maxTokensField: "max_tokens" as const,
        },
      },
      {
        id: "minimax-m3",
        name: "minimax-m3",
        reasoning: false,
        input: ["text"] as ("text" | "image")[],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 200000,
        maxTokens: 65536,
        compat: {
          supportsDeveloperRole: false,
          maxTokensField: "max_tokens" as const,
        },
      },
      {
        id: "kimi-k2.6",
        name: "kimi-k2.6",
        reasoning: false,
        input: ["text", "image"] as ("text" | "image")[],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 256000,
        maxTokens: 32000,
        compat: {
          supportsDeveloperRole: false,
          maxTokensField: "max_tokens" as const,
        },
      },
      {
        id: "kimi-k2.7-code",
        name: "kimi-k2.7-code",
        reasoning: false,
        input: ["text", "image"] as ("text" | "image")[],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 256000,
        maxTokens: 32000,
        compat: {
          supportsDeveloperRole: false,
          maxTokensField: "max_tokens" as const,
        },
      },
    ],
    // Add OAuth-like login flow so /login prompts for the API key
    oauth: {
      name: "Volcengine Coding Plan (API Key)",
      async login(callbacks) {
        const apiKey = await callbacks.onPrompt({
          message: "Enter your Volcengine ARK API key",
          placeholder: "Get one at https://console.volcengine.com/ark/region:ark+cn-beijing/",
        });
        return {
          access: apiKey,
          refresh: "",
          expires: 0,
        };
      },
      async refreshToken(credentials) {
        // API keys don't expire; return as-is
        return credentials;
      },
      getApiKey(credentials) {
        return credentials.access;
      },
    },
  });
}