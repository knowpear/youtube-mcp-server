
在gemini cli中使用該mcp server

settings.json

{
  "mcpServers": {
    "youtube": {
      "command": "C:\\Program Files\\nodejs\\npx.cmd",
      "args": [
        "github:knowpear/youtube-mcp-server"
      ],
      "env": {
        "YOUTUBE_API_KEY": "你的 API KEY"
      }
    }
  }
}