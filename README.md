# opencode-llama-config

Minimal isolated OpenCode profile for the local `llama.cpp` debugging workflow through the Forge proxy.

This config is intended to be deployed to `~/.config/opencode-llama/opencode` and launched with an `opencode-llama` wrapper that points OpenCode at isolated XDG config/data/state/cache roots.

Goals:

- keep the default agent on `llama`
- avoid loading the normal OpenCode MCP-heavy profile
- preserve only the local provider config needed for llama.cpp debugging
- route OpenCode to `http://hero.makeitwork.cloud:8081/v1` so requests pass through Forge before reaching `llama-server` on hero
- normalize Qwen system-message placement with `plugins/qwen-system-first.js` because the GGUF chat template rejects system messages after the first turn
