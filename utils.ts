import { createDefine } from "fresh";

// Shared state type passed through ctx.state across middlewares, layouts and routes.
// deno-lint-ignore no-empty-interface
export interface State {}

export const define = createDefine<State>();
