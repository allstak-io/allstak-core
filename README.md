# @allstak/core

**Shared runtime-agnostic primitive powering every AllStak JavaScript SDK.**

[![npm version](https://img.shields.io/npm/v/@allstak/core.svg)](https://www.npmjs.com/package/@allstak/core)
[![CI](https://github.com/allstak-io/allstak-core/actions/workflows/ci.yml/badge.svg)](https://github.com/allstak-io/allstak-core/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Platform-agnostic core for the AllStak JavaScript SDKs — re-exports init, capture, and context APIs with no DOM, React, or React Native dependencies.

## Dashboard

View captured events live at [app.allstak.sa](https://app.allstak.sa).

![AllStak dashboard](https://app.allstak.sa/images/dashboard-preview.png)

## Features

- Stable public surface shared by `@allstak/browser`, `@allstak/react`, and `@allstak/react-native`
- `AllStak.init` / `captureException` / `captureMessage` / `addBreadcrumb`
- User and tag context helpers
- Distributed tracing (`startSpan`, `getTraceId`)
- Cron heartbeats and HTTP/DB capture
- Zero browser or Node-specific code — safe for isomorphic builds

## What You Get

Once integrated, every event flows to your AllStak dashboard:

- **Errors** — stack traces, breadcrumbs, release + environment tags
- **Logs** — structured logs with search and filters
- **Traces** — distributed spans with propagated trace IDs
- **Alerts** — email and webhook notifications on regressions

Most users should install a runtime-specific SDK (`@allstak/js`, `@allstak/browser`, `@allstak/react`, `@allstak/react-native`) which depends on `@allstak/core`.

## Installation

```bash
npm install @allstak/core
```

## Quick Start

> Create a project at [app.allstak.sa](https://app.allstak.sa) to get your API key.

```ts
import { AllStak } from '@allstak/core';

AllStak.init({
  apiKey: process.env.ALLSTAK_API_KEY!,
  environment: 'production',
});

AllStak.captureException(new Error('test: hello from allstak-core'));
```

Run the file — the test error appears in your dashboard within seconds.

## Get Your API Key

1. Sign up at [app.allstak.sa](https://app.allstak.sa)
2. Create a project
3. Copy your API key from **Project Settings → API Keys**
4. Export it as `ALLSTAK_API_KEY` or pass it to `AllStak.init(...)`

## Configuration

| Option | Type | Required | Default | Description |
|---|---|---|---|---|
| `apiKey` | `string` | yes | — | Project API key (`ask_live_…`) |
| `environment` | `string` | no | — | Deployment env |
| `release` | `string` | no | — | Version or git SHA |
| `host` | `string` | no | `https://api.allstak.sa` | Ingest host override |
| `user` | `{ id?, email? }` | no | — | Default user context |
| `tags` | `Record<string,string>` | no | — | Default tags |
| `maxBreadcrumbs` | `number` | no | `50` | Ring buffer size |

## Example Usage

Capture an exception with context:

```ts
AllStak.captureException(new Error('checkout failed'), { cartId: 'c_9' });
```

Send a log message:

```ts
AllStak.captureMessage('Cache warmed', 'info');
```

Set user and tags:

```ts
AllStak.setUser({ id: 'u_1', email: 'dev@example.com' });
AllStak.setTag('service', 'api');
```

## Production Endpoint

Production endpoint: `https://api.allstak.sa`. Override via `host` for self-hosted installs:

```ts
AllStak.init({ apiKey: '...', host: 'https://allstak.mycorp.com' });
```

## Links

- Documentation: https://docs.allstak.sa
- Dashboard: https://app.allstak.sa
- Source: https://github.com/allstak-io/allstak-core

## License

MIT © AllStak
