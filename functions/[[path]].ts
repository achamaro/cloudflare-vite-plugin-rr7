import { createPagesFunctionHandler } from "@react-router/cloudflare";
import { createRequestHandler } from "react-router";
// import * as build from "../build/server";

declare module "react-router" {
  export interface AppLoadContext {
    cloudflare: {
      env: Env;
      ctx: ExecutionContext;
    };
  }
}

// const requestHandler = createRequestHandler(
//   () => import("virtual:react-router/server-build"),
//   import.meta.env.MODE
// );

// export default {
//   async fetch(request, env, ctx) {
//     return requestHandler(request, {
//       cloudflare: { env, ctx },
//     });
//   },
// } satisfies ExportedHandler<Env>;


export const onRequest = createPagesFunctionHandler<Env>({
	build: () => import("virtual:react-router/server-build"),
	// mode: import.meta.env.MODE,
});
