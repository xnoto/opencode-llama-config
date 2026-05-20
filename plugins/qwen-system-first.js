export const QwenSystemFirst = async () => {
  return {
    "experimental.chat.messages.transform": async (_input, output) => {
      const messages = output.messages || []
      const system = []
      let firstUser

      for (const message of messages) {
        const info = message.info
        if (info?.role !== "user") continue

        if (!firstUser) firstUser = info
        if (typeof info.system === "string" && info.system.trim()) {
          system.push(info.system.trim())
          delete info.system
        }
      }

      if (!firstUser || system.length === 0) return

      firstUser.system = Array.from(new Set(system)).join("\n\n")
    },
  }
}
