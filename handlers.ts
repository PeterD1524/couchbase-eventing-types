/**
 * https://docs.couchbase.com/server/current/eventing/eventing-language-constructs.html#onupdate_handler
 * https://docs.couchbase.com/server/current/eventing/eventing-Terminologies.html#onupdate
 */
export type OnUpdate = (
  doc: unknown,
  meta: {
    cas: string;
    rootcas: string;
    id: string;
    expiration: number;
    flags: number;
    vb: number;
    seq: number;
    datatype: "json" | "binary";
    keyspace: {
      bucket_name: string;
      scope_name: string;
      collection_name: string;
    };
    cid: number;
  },
  xattrs: Record<string, unknown>,
) => void;

/**
 * https://docs.couchbase.com/server/current/eventing/eventing-language-constructs.html#ondelete_handler
 * https://docs.couchbase.com/server/current/eventing/eventing-Terminologies.html#ondelete
 */
export type OnDelete = (
  meta: {
    cas: string;
    rootcas: string;
    id: string;
    expiration: number;
    flags: number;
    vb: number;
    seq: number;
    keyspace: {
      bucket_name: string;
      scope_name: string;
      collection_name: string;
    };
    cid: number;
  },
  options: { expired: boolean },
) => void;
