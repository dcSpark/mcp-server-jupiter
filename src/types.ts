export type ToolResultSchema<T> = {
  content: Array<{
    type: string;
    text: string;
  }>;
  isError: boolean;
  toolResult?: T;
};
