# couchbase-eventing-types

This repo contains TypeScript definitions for [Couchbase Eventing Functions](https://docs.couchbase.com/server/current/eventing/eventing-overview.html).

Definitions are written by inspecting `globalThis` in the [Debugger](https://docs.couchbase.com/server/current/eventing/eventing-debugging-and-diagnosability.html#debugging-functions) on Couchbase Enterprise Edition 7.6.7 build 6706 and reading the source code at [couchbase/eventing](https://github.com/couchbase/eventing).

## Usage

tsconfig.json:

```json
{
  "compilerOptions": {
    "strict": true, // yes
    "types": ["couchbase-eventing-types"], // include the types
    "lib": ["ES2024", "ESNext.Array"] // the JavaScript engine seems to support these APIs
  }
}
```

The handler signatures are defined in `handlers.ts`.

main.ts:

```typescript
import type { OnUpdate } from "couchbase-eventing-types/handlers.js";

// bucket alias https://docs.couchbase.com/server/current/eventing/eventing-Terminologies.html#bucket-alias
declare const src_col: Record<string, unknown>;

function OnUpdate(
  doc: Parameters<OnUpdate>[0],
  meta: Parameters<OnUpdate>[1],
  xattrs: Parameters<OnUpdate>[2],
): ReturnType<OnUpdate> {
  // will error if the handler does not implement the signature correctly
  // compiles to `OnUpdate;`
  OnUpdate satisfies OnUpdate;

  log("input doc", doc);
  log("input meta", meta);
  log("input meta.id", meta.id); // string
  log("input meta.cas", meta.cas); // string
  log("input meta.expiration", meta.expiration); // number
  log("input xattrs", xattrs);
  // could be the same or different
  const new_meta = { id: "test_adv_get::1" };
  const result = couchbase.get(src_col, new_meta);
  if (result.success) {
    log(
      "success adv. get: result.doc",
      result.doc,
      "result.meta.cas",
      result.meta.cas,
    );
  } else {
    log("failure adv. get: id", new_meta.id, "result.error", result.error);
  }
}

// another way to ensure the handler implements the signature correctly without adding runtime behavior
type Satisfies<T, U extends T> = U;
// the export is just to turn off the `'_' is declared but never used.ts(6196)` error
export type _ = Satisfies<OnUpdate, typeof OnUpdate>;
```

Use a TypeScript compiler or bundler to convert the code into JavaScript.

Make sure the output contains only functions in global space. Top level async functions and export declarations are also prohibited.

Note that Eventing Functions support inline [SQL++](https://docs.couchbase.com/server/current/eventing/eventing-language-constructs.html#n1ql_statements).

[N1QL()](https://docs.couchbase.com/server/current/eventing/eventing-language-constructs.html#n1ql_call) can be used to run SQL++ statements without using special syntax.

[Reserved Words](https://docs.couchbase.com/server/current/eventing/eventing-language-constructs.html#reserved-words)
