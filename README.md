# opencode-llama-config

Minimal isolated OpenCode profile for the local `llama.cpp` debugging workflow.

This config is intended to be deployed to `~/.config/opencode-llama/opencode` and launched with an `opencode-llama` wrapper that points OpenCode at isolated XDG config/data/state/cache roots.

Goals:

- keep the default agent on `llama`
- avoid loading the normal OpenCode MCP-heavy profile
- preserve only the local provider config needed for llama.cpp debugging
- route OpenCode directly to `http://hero.makeitwork.cloud:8080/v1`; the Forge proxy remains deployed on hero for separate experiments but is not stable enough for this profile's multi-step tool loop
