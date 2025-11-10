import { resolveCommand, type Agent, type Command, type ResolvedCommand } from "package-manager-detector";

export const PACKAGE_MANAGERS: Agent[] = ["pnpm", "npm", "bun", "yarn"] as const;
export type PackageManager = (typeof PACKAGE_MANAGERS)[number];

export type PackageManagerCommand = Command | "create";

export function getCommand(
  pm: Agent,
  type: PackageManagerCommand,
  command: string | string[],
): ResolvedCommand {
  let args = [];
  if (typeof command === "string") {
    args = command.split(" ");
  } else {
    args = command;
  }

  if (type === "create") return { command: pm, args: ["create", ...args] };

  const cmd = resolveCommand(pm, type, args);

  if (cmd === null) throw new Error("Could not resolve command");

  return cmd;
}