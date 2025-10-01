declare const AnalyticsError: {
  new (message?: string): { name: string; message: string; stack?: string };
  readonly prototype: Error;
};

declare const CurlError: {
  new (message?: string): { name: string; message: string; stack?: string };
  readonly prototype: Error;
};

declare const EventingError: {
  new (message?: string): { name: string; message: string; stack?: string };
  readonly prototype: Error;
};

declare const KVError: {
  new (message?: string | { code: number; desc: string; name: string }): {
    name: string;
    message: string | { code: number; desc: string; name: string };
    stack?: string;
  };
  readonly prototype: Error;
};

declare const N1QLError: {
  new (message?: string): { name: string; message: string; stack?: string };
  readonly prototype: Error;
};

/**
 * https://docs.couchbase.com/server/current/eventing/eventing-language-constructs.html#n1ql_call
 */
declare function N1QL(
  statement: string,
  params?: unknown[] | Record<string, unknown>,
  options?: { isPrepared?: boolean; consistency?: "none" | "request" },
): {
  [Symbol.iterator]: () => Iterator<unknown, null, void>;
  close: () => void;
};

/**
 * @deprecated
 * https://docs.couchbase.com/server/current/eventing/eventing-language-constructs.html#n1ql_call
 */
declare class N1qlQuery {
  constructor(
    stmt: string,
    params?: {
      namedParams?: Record<string, unknown>;
      consistency?: "none" | "request";
    },
  );
  statement: string;
  named: Record<string, unknown>;
  options: { consistency: "none" | "request" };
  execQuery: () => unknown[];
}

/**
 * https://docs.couchbase.com/server/current/eventing/eventing-timers.html#canceltimer-function
 */
declare function cancelTimer(
  callback: (context: unknown) => void,
  reference: string,
): boolean;

declare namespace couchbase {
  export namespace LookupInSpec {
    /**
     * https://docs.couchbase.com/server/current/eventing/eventing-advanced-keyspace-accessors.html#example-9
     */
    function get(
      path: string,
      specOptions?: { xattrs?: boolean },
    ): { spec_type: 1; path: string; options?: Record<string, unknown> };

    function create(
      specType: number,
      path: string,
      specOptions?: Record<string, unknown>,
    ): { spec_type: number; path: string; options?: Record<string, unknown> };
  }

  export namespace MutateInSpec {
    function arrayAddUnique(
      path: string,
      value: unknown,
      specOptions?: { create_path?: boolean; xattrs?: boolean },
    ): {
      spec_type: 8;
      path: string;
      value: unknown;
      options?: Record<string, unknown>;
    };

    function arrayAppend(
      path: string,
      value: unknown,
      specOptions?: { create_path?: boolean; xattrs?: boolean },
    ): {
      spec_type: 5;
      path: string;
      value: unknown;
      options?: Record<string, unknown>;
    };

    function arrayInsert(
      path: string,
      value: unknown,
      specOptions?: { create_path?: boolean; xattrs?: boolean },
    ): {
      spec_type: 7;
      path: string;
      value: unknown;
      options?: Record<string, unknown>;
    };

    function arrayPrepend(
      path: string,
      value: unknown,
      specOptions?: { create_path?: boolean; xattrs?: boolean },
    ): {
      spec_type: 6;
      path: string;
      value: unknown;
      options?: Record<string, unknown>;
    };

    function insert(
      path: string,
      value: unknown,
      specOptions?: { create_path?: boolean; xattrs?: boolean },
    ): {
      spec_type: 1;
      path: string;
      value: unknown;
      options?: Record<string, unknown>;
    };

    function remove(
      path: string,
      specOptions?: { create_path?: boolean; xattrs?: boolean },
    ): {
      spec_type: 4;
      path: string;
      value: undefined;
      options?: Record<string, unknown>;
    };

    function replace(
      path: string,
      value: unknown,
      specOptions?: { create_path?: boolean; xattrs?: boolean },
    ): {
      spec_type: 3;
      path: string;
      value: unknown;
      options?: Record<string, unknown>;
    };

    function upsert(
      path: string,
      value: unknown,
      specOptions?: { create_path?: boolean; xattrs?: boolean },
    ): {
      spec_type: 2;
      path: string;
      value: unknown;
      options?: Record<string, unknown>;
    };

    function create(
      specType: number,
      path: string,
      value: unknown,
      specOptions?: Record<string, unknown>,
    ): {
      spec_type: number;
      path: string;
      value: unknown;
      options?: Record<string, unknown>;
    };
  }

  /**
   * https://docs.couchbase.com/server/current/eventing/eventing-language-constructs.html#analytics_call
   */
  export function analyticsQuery(
    statement: string,
    params: unknown[] | Record<string, unknown>,
    options?: { isPrepared?: boolean; consistency?: "none" | "request" },
  ): {
    [Symbol.iterator]: () => Iterator<unknown, null, void>;
    close: () => void;
  };

  /**
   * https://docs.couchbase.com/server/current/eventing/eventing-language-constructs.html#base64_call
   */
  export function base64Decode(x: string): string;

  /**
   * https://docs.couchbase.com/server/current/eventing/eventing-language-constructs.html#base64_call
   */
  export function base64Encode(x: unknown): string;

  /**
   * https://docs.couchbase.com/server/current/eventing/eventing-language-constructs.html#base64_call
   */
  export function base64Float32ArrayDecode(x: string): number[];

  /**
   * https://docs.couchbase.com/server/current/eventing/eventing-language-constructs.html#base64_call
   */
  export function base64Float32ArrayEncode(x: number[]): string;

  /**
   * https://docs.couchbase.com/server/current/eventing/eventing-language-constructs.html#base64_call
   */
  export function base64Float64ArrayDecode(x: string): number[];

  /**
   * https://docs.couchbase.com/server/current/eventing/eventing-language-constructs.html#base64_call
   */
  export function base64Float64ArrayEncode(x: number[]): string;

  export function bindingDetails(
    binding: Record<string, unknown>,
    meta: { id: string },
  ): {
    access: "r" | "rw";
    keyspace: { bucket: string; scope: string; collection: string };
  };

  /**
   * https://docs.couchbase.com/server/current/eventing/eventing-timers.html#canceltimer-function
   */
  export function cancelTimer(
    callback: (context: unknown) => void,
    reference: string,
  ): boolean;

  /**
   * https://docs.couchbase.com/server/current/eventing/eventing-language-constructs.html#crc64_call
   */
  export function crc64(x: unknown): string;

  /**
   * https://docs.couchbase.com/server/current/eventing/eventing-language-constructs.html#crc_64_go_iso_call
   */
  export function crc_64_go_iso(x: unknown): string;

  /**
   * https://docs.couchbase.com/server/current/eventing/eventing-timers.html#createtimer-function
   * https://docs.couchbase.com/server/current/eventing/eventing-language-constructs.html#timers_general
   */
  export function createTimer<T>(
    callback: (context: T) => void,
    date: Date,
    reference: string | null,
    context: T,
  ): string;

  /**
   * https://docs.couchbase.com/server/current/eventing/eventing-curl-spec.html#language-syntax
   */
  export function curl(
    method: "GET" | "POST" | "PUT" | "HEAD" | "DELETE",
    binding: Record<string, never>,
    request_object?: {
      headers?: Record<string, string>;
      body?: unknown;
      encoding?: "FORM" | "JSON" | "TEXT" | "BINARY";
      path?: string;
      params?: Record<string, string | number | boolean>;
    },
  ): { body: unknown; status: number; headers: Record<string, string> };

  /**
   * https://docs.couchbase.com/server/current/eventing/eventing-advanced-keyspace-accessors.html#advanced-decrement-op
   */
  export function decrement(
    binding: Record<string, unknown>,
    meta: {
      id: string;
      keyspace?: { scope_name?: string; collection_name: string };
    },
  ):
    | {
        doc: { count: number };
        meta: { id: string; cas: string };
        success: true;
      }
    | {
        error: {
          code: 0;
          name: "LCB_DELTA_BADVAL";
          desc: "counter value cannot be parsed as a number";
          not_number: true;
        };
        success: false;
      };

  /**
   * https://docs.couchbase.com/server/current/eventing/eventing-advanced-keyspace-accessors.html#advanced-delete-op
   */
  function _delete(
    binding: Record<string, unknown>,
    meta: {
      id: string;
      cas: string;
      keyspace?: { scope_name?: string; collection_name: string };
    },
  ):
    | { meta: { id: string; cas: string }; success: true }
    | {
        error: {
          code: 1;
          name: "LCB_KEY_ENOENT";
          desc: "The document key does not exist on the server";
          key_not_found: true;
        };
        success: false;
      }
    | {
        error: {
          code: 2;
          name: "LCB_KEY_EEXISTS";
          desc: "The document key exists with a CAS value different than specified";
          cas_mismatch: true;
        };
        success: false;
      };
  export { _delete as delete };

  export function deleteInternal(
    binding: Record<string, unknown>,
    meta: {
      id: string;
      cas: string;
      keyspace?: { scope_name?: string; collection_name: string };
    },
  ):
    | { meta: { id: string; cas: string }; success: true }
    | {
        error: {
          code: 1;
          name: "LCB_KEY_ENOENT";
          desc: "The document key does not exist on the server";
          key_not_found: true;
        };
        success: false;
      }
    | {
        error: {
          code: 2;
          name: "LCB_KEY_EEXISTS";
          desc: "The document key exists with a CAS value different than specified";
          cas_mismatch: true;
        };
        success: false;
      };

  export function ejectKeys(currtime: number): void;

  /**
   * https://docs.couchbase.com/server/current/eventing/eventing-advanced-keyspace-accessors.html#advanced-get-op
   */
  export function get(
    binding: Record<string, unknown>,
    meta: {
      id: string;
      keyspace?: { scope_name?: string; collection_name: string };
    },
    options?: { cache?: boolean },
  ):
    | {
        doc: unknown;
        meta: { id: string; cas: string; datatype: "json" };
        res_size: number;
        success: true;
      }
    | {
        doc: ArrayBuffer;
        meta: { id: string; cas: string; datatype: "binary" };
        res_size: number;
        success: true;
      }
    | {
        error: {
          code: 1;
          name: "LCB_KEY_ENOENT";
          desc: "The document key does not exist on the server";
          key_not_found: true;
        };
        success: false;
      };

  export function getCachedKey(
    id: string,
    details: {
      keyspace: { bucket: string; scope: string; collection: string };
    },
  ): string;

  export function getInternal(
    binding: Record<string, unknown>,
    meta: {
      id: string;
      keyspace?: { scope_name?: string; collection_name: string };
    },
    options?: { cache?: boolean },
  ):
    | {
        doc: unknown;
        meta: { id: string; cas: string; datatype: "json" };
        res_size: number;
        success: true;
      }
    | {
        doc: ArrayBuffer;
        meta: { id: string; cas: string; datatype: "binary" };
        res_size: number;
        success: true;
      }
    | {
        error: {
          code: 1;
          name: "LCB_KEY_ENOENT";
          desc: "The document key does not exist on the server";
          key_not_found: true;
        };
        success: false;
      };

  /**
   * https://docs.couchbase.com/server/current/eventing/eventing-advanced-keyspace-accessors.html#advanced-increment-op
   */
  export function increment(
    binding: Record<string, unknown>,
    meta: {
      id: string;
      keyspace?: { scope_name?: string; collection_name: string };
    },
  ):
    | {
        doc: { count: number };
        meta: { id: string; cas: string };
        success: true;
      }
    | {
        error: {
          code: 0;
          name: "LCB_DELTA_BADVAL";
          desc: "counter value cannot be parsed as a number";
          not_number: true;
        };
        success: false;
      };

  /**
   * https://docs.couchbase.com/server/current/eventing/eventing-advanced-keyspace-accessors.html#advanced-insert-op
   */
  export function insert(
    binding: Record<string, unknown>,
    meta: {
      id: string;
      expiry_date: Date;
      keyspace?: { scope_name?: string; collection_name: string };
    },
    doc: unknown,
    options?: { self_recursion?: boolean },
  ):
    | { meta: { id: string; cas: string; expiry_date?: Date }; success: true }
    | {
        error: {
          code: 2;
          name: "LCB_KEY_EEXISTS";
          desc: "The document key already exists in the server.";
          key_already_exists: true;
        };
        success: false;
      };

  export function insertInternal(
    binding: Record<string, unknown>,
    meta: {
      id: string;
      expiry_date: Date;
      keyspace?: { scope_name?: string; collection_name: string };
    },
    doc: unknown,
    options?: { self_recursion?: boolean },
  ):
    | { meta: { id: string; cas: string; expiry_date?: Date }; success: true }
    | {
        error: {
          code: 2;
          name: "LCB_KEY_EEXISTS";
          desc: "The document key already exists in the server.";
          key_already_exists: true;
        };
        success: false;
      };

  export function invalidateKey(key: string): void;

  /**
   * https://docs.couchbase.com/server/current/eventing/eventing-language-constructs.html#logging
   */
  export function log(...args: unknown[]): void;

  /**
   * https://docs.couchbase.com/server/current/eventing/eventing-advanced-keyspace-accessors.html#advanced-subdoc-array-op-lookupin
   */
  export function lookupIn(
    binding: Record<string, unknown>,
    meta: {
      id: string;
      keyspace?: { scope_name?: string; collection_name: string };
    },
    subdoc_array: {
      spec_type: number;
      path: string;
      options?: Record<string, unknown>;
    }[],
    options?: Record<string, never>,
  ):
    | {
        doc: ({ value: unknown; success: true } | { success: false })[];
        meta: { id: string; cas: string; datatype: "json" };
        success: true;
      }
    | {
        error: {
          code: 1;
          name: "LCB_KEY_ENOENT";
          desc: "The document key does not exist on the server";
          key_not_found: true;
        };
        success: false;
      };

  export function lookupInInternal(
    binding: Record<string, unknown>,
    meta: {
      id: string;
      keyspace?: { scope_name?: string; collection_name: string };
    },
    subdoc_array: {
      spec_type: 1;
      path: string;
      options?: Record<string, unknown>;
    }[],
  ):
    | {
        doc: ({ value: unknown; success: true } | { success: false })[];
        meta: { id: string; cas: string; datatype: "json" };
        success: true;
      }
    | {
        error: {
          code: 1;
          name: "LCB_KEY_ENOENT";
          desc: "The document key does not exist on the server";
          key_not_found: true;
        };
        success: false;
      };

  export const map_key_size: number;

  export const mapkeys: Map<
    string,
    {
      data:
        | {
            doc: unknown;
            meta: { id: string; cas: string; datatype: "json" };
            res_size: number;
            success: true;
          }
        | {
            doc: ArrayBuffer;
            meta: { id: string; cas: string; datatype: "binary" };
            res_size: number;
            success: true;
          };
      time: number;
    }
  >;

  export const max_expiry: number;

  export const max_size: number;

  /**
   * https://docs.couchbase.com/server/current/eventing/eventing-advanced-keyspace-accessors.html#advanced-subdoc-array-op-mutatein
   */
  export function mutateIn(
    binding: Record<string, unknown>,
    meta: {
      id: string;
      cas?: string;
      keyspace?: { scope_name?: string; collection_name: string };
    },
    subdoc_operation_array: {
      spec_type: number;
      path: string;
      value: unknown;
      options?: Record<string, unknown>;
    }[],
    options?: { self_recursion?: boolean },
  ):
    | { meta: { id: string; cas: string }; success: true }
    | {
        error: {
          code: 0;
          name: "LCB_ERR_SUBDOC_PATH_NOT_FOUND";
          desc: "The document key does not exist on the server";
          field_not_found: true;
        };
        success: false;
      }
    | {
        error: {
          code: 0;
          name: "LCB_ERR_SUBDOC_PATH_EXISTS";
          desc: "The document path already exist";
          field_already_exists: true;
        };
        success: false;
      }
    | {
        error: {
          code: 1;
          name: "LCB_KEY_ENOENT";
          desc: "The document key does not exist on the server";
          key_not_found: true;
        };
        success: false;
      }
    | {
        error: {
          code: 2;
          name: "LCB_KEY_EEXISTS";
          desc: "The document key exists with a CAS value different than specified";
          cas_mismatch: true;
        };
        success: false;
      };

  export function mutateInInternal(
    binding: Record<string, unknown>,
    meta: {
      id: string;
      cas?: string;
      keyspace?: { scope_name?: string; collection_name: string };
    },
    subdoc_operation_array: {
      spec_type: number;
      path: string;
      value: unknown;
      options?: Record<string, unknown>;
    }[],
    options?: { self_recursion?: boolean },
  ):
    | { meta: { id: string; cas: string }; success: true }
    | {
        error: {
          code: 0;
          name: "LCB_ERR_SUBDOC_PATH_NOT_FOUND";
          desc: "The document key does not exist on the server";
          field_not_found: true;
        };
        success: false;
      }
    | {
        error: {
          code: 0;
          name: "LCB_ERR_SUBDOC_PATH_EXISTS";
          desc: "The document path already exist";
          field_already_exists: true;
        };
        success: false;
      }
    | {
        error: {
          code: 1;
          name: "LCB_KEY_ENOENT";
          desc: "The document key does not exist on the server";
          key_not_found: true;
        };
        success: false;
      }
    | {
        error: {
          code: 2;
          name: "LCB_KEY_EEXISTS";
          desc: "The document key exists with a CAS value different than specified";
          cas_mismatch: true;
        };
        success: false;
      };

  export function n1qlQuery(
    statement: string,
    params?: unknown[] | Record<string, unknown>,
    options?: { isPrepared?: boolean; consistency?: "none" | "request" },
  ): {
    [Symbol.iterator]: () => Iterator<unknown, null, void>;
    close: () => void;
  };

  /**
   * https://docs.couchbase.com/server/current/eventing/eventing-advanced-keyspace-accessors.html#advanced-replace-op
   */
  export function replace(
    binding: Record<string, unknown>,
    meta: {
      id: string;
      cas?: string;
      expiry_date?: Date;
      keyspace?: { scope_name?: string; collection_name: string };
    },
    doc: unknown,
    options?: { self_recursion?: boolean },
  ):
    | { meta: { id: string; cas: string; expiry_date?: Date }; success: true }
    | {
        error: {
          code: 1;
          name: "LCB_KEY_ENOENT";
          desc: "The document key does not exist on the server";
          key_not_found: true;
        };
        success: false;
      }
    | {
        error: {
          code: 2;
          name: "LCB_KEY_EEXISTS";
          desc: "The document key exists with a CAS value different than specified";
          cas_mismatch: true;
        };
        success: false;
      };

  export function replaceInternal(
    binding: Record<string, unknown>,
    meta: {
      id: string;
      cas?: string;
      expiry_date?: Date;
      keyspace?: { scope_name?: string; collection_name: string };
    },
    doc: unknown,
    options?: { self_recursion?: boolean },
  ):
    | { meta: { id: string; cas: string; expiry_date?: Date }; success: true }
    | {
        error: {
          code: 1;
          name: "LCB_KEY_ENOENT";
          desc: "The document key does not exist on the server";
          key_not_found: true;
        };
        success: false;
      }
    | {
        error: {
          code: 2;
          name: "LCB_KEY_EEXISTS";
          desc: "The document key exists with a CAS value different than specified";
          cas_mismatch: true;
        };
        success: false;
      };

  /**
   * https://docs.couchbase.com/server/current/eventing/eventing-advanced-keyspace-accessors.html#advanced-touch-op
   */
  export function touch(
    binding: Record<string, unknown>,
    meta: {
      id: string;
      expiry_date?: Date;
      keyspace?: { scope_name?: string; collection_name: string };
    },
  ):
    | { meta: { id: string; cas: string }; success: true }
    | {
        error: {
          code: 1;
          name: "LCB_KEY_ENOENT";
          desc: "The document key does not exist on the server";
          key_not_found: true;
        };
        success: false;
      };

  export function touchInternal(
    binding: Record<string, unknown>,
    meta: {
      id: string;
      expiry_date?: Date;
      keyspace?: { scope_name?: string; collection_name: string };
    },
  ):
    | { meta: { id: string; cas: string }; success: true }
    | {
        error: {
          code: 1;
          name: "LCB_KEY_ENOENT";
          desc: "The document key does not exist on the server";
          key_not_found: true;
        };
        success: false;
      };

  /**
   * https://docs.couchbase.com/server/current/eventing/eventing-advanced-keyspace-accessors.html#advanced-upsert-op
   */
  export function upsert(
    binding: Record<string, unknown>,
    meta: {
      id: string;
      keyspace?: { scope_name?: string; collection_name: string };
    },
    doc: unknown,
    options?: { self_recursion?: boolean },
  ): { meta: { id: string; cas: string; expiry_date?: Date }; success: true };

  export function upsertInternal(
    binding: Record<string, unknown>,
    meta: {
      id: string;
      keyspace?: { scope_name?: string; collection_name: string };
    },
    doc: unknown,
    options?: { self_recursion?: boolean },
  ): { meta: { id: string; cas: string; expiry_date?: Date }; success: true };
}

/**
 * https://docs.couchbase.com/server/current/eventing/eventing-language-constructs.html#crc64_call
 */
declare function crc64(x: unknown): string;

/**
 * https://docs.couchbase.com/server/current/eventing/eventing-timers.html#createtimer-function
 * https://docs.couchbase.com/server/current/eventing/eventing-language-constructs.html#timers_general
 */
declare function createTimer<T>(
  callback: (context: T) => void,
  date: Date,
  reference: string | null,
  context: T,
): string;

/**
 * https://docs.couchbase.com/server/current/eventing/eventing-curl-spec.html#language-syntax
 */
declare function curl(
  method: "GET" | "POST" | "PUT" | "HEAD" | "DELETE",
  binding: Record<string, never>,
  request_object?: {
    headers?: Record<string, string>;
    body?: unknown;
    encoding?: "FORM" | "JSON" | "TEXT" | "BINARY";
    path?: string;
    params?: Record<string, string | number | boolean>;
  },
): { body: unknown; status: number; headers: Record<string, string> };

/**
 * https://docs.couchbase.com/server/current/eventing/eventing-language-constructs.html#logging
 */
declare function log(...args: unknown[]): void;
