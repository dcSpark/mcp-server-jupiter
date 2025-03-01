import { ResultSchema } from "@modelcontextprotocol/sdk/types.js";

export type ToolResultSchema<T> = {
  content: Array<{
    type: string;
    text: string;
  }>;
  isError: boolean;
  toolResult?: T;
};
