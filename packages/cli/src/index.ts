#!/usr/bin/env bun

import { Agent, greet } from "@ai-agent/core";
import { parseArgs, formatOutput } from "@ai-agent/shared";

const args = parseArgs(process.argv);
const input = args["input"] || args["i"] || "Hello";

const agent = new Agent({
  name: "cli-agent",
  model: "gpt-4",
});

console.log(formatOutput(greet("Aaron")))
const response = await agent.run(input);
console.log(formatOutput(response));
