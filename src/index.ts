/**
 * @allstak-io/core — platform-agnostic core API.
 *
 * Re-exports the initialization, capture, and context APIs that every
 * platform-specific package builds on top of. Contains NO window/DOM
 * references, no React, no React-Native.
 *
 * The concrete implementation lives in `@allstak-io/allstak-js`. This package
 * keeps it separated by a stable public surface so platform packages can depend
 * on `@allstak-io/core` without pulling browser/React code.
 */
export {
  AllStak,
  type AllStakConfig,
  type Breadcrumb,
  type LogEvent,
  type LogLevel,
  type HttpRequestItem,
  type SpanData,
  Span,
  type DbQueryItem,
  DatabaseModule,
  type HeartbeatOptions,
} from '@allstak-io/allstak-js';
