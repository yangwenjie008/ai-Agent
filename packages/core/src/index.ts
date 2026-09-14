export function greet(name: string): string {
  return `Hello, ${name}! Welcome to AI Agent.`;
}

export interface AgentConfig {
  name: string;
  model: string;
  temperature?: number;
}

export class Agent {
  private config: AgentConfig;

  constructor(config: AgentConfig) {
    this.config = config;
  }

  async run(input: string): Promise<string> {
    console.log(`Agent ${this.config.name} processing: ${input}`);
    return `Response from ${this.config.name}`;
  }
}
