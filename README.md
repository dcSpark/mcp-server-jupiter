# MCP Jupiter

This repository contains a Model Context Protocol (MCP) server that provides Claude with access to Jupiter's swap API. The server enables Claude to perform operations like getting quotes, building swap transactions, and sending swap transactions on the Solana blockchain using Jupiter.

## Overview

The MCP server exposes several tools to Claude:

- `jupiter_get_quote`: Get a quote for swapping tokens on Jupiter
- `jupiter_build_swap_transaction`: Build a swap transaction on Jupiter
- `jupiter_send_swap_transaction`: Send a swap transaction on Jupiter

## Prerequisites

- Node.js (v16 or higher)
- Claude Desktop application

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/dcSpark/mcp-server-jupiter.git
   cd mcp-server-jupiter
   ```

2. Install dependencies:
   ```bash
   npm ci
   ```

3. Build the project:
   ```bash
   npm run build
   ```

## Configuration

### Configure Claude Desktop

To configure Claude Desktop to use this MCP server:

1. Open Claude Desktop
2. Navigate to the Claude Desktop configuration file:
   - macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
   - Windows: `%APPDATA%\Claude\claude_desktop_config.json`
   - Linux: `~/.config/Claude/claude_desktop_config.json`

3. Add the MCP server configuration:

```json
{
  "mcpServers": {
    "mcp-server-jupiter": {
      "command": "node",
      "args": [
        "/path/to/your/mcp-server-jupiter/build/index.js"
      ]
    }
  }
}
```

### Running Locally

```bash
node build/index.js
```

## Usage

Once configured, restart Claude Desktop. Claude will now have access to the Jupiter swap tools. You can ask Claude to:

1. Get a quote for swapping tokens:
   ```
   What's the quote for swapping 1 SOL to USDC?
   ```

2. Build a swap transaction:
   ```
   Build a swap transaction for the quote I just got.
   ```

3. Send a swap transaction:
   ```
   Send the swap transaction I just built.
   ```

Claude will use the MCP server to interact with Jupiter's swap API directly.

## Development

### Adding New Tools

To add new tools to the MCP server:

1. Define the tool in `src/tools.ts`
2. Create a handler function in the appropriate handler file
3. Add the handler to the `handlers` object in `src/tools.ts`

### Building

```bash
npm run build
```

## License

MIT
