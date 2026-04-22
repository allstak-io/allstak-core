# @allstak-io/core

Platform-agnostic AllStak SDK core — initialization, capture, and context APIs.  
Used internally by `@allstak-io/browser`, `@allstak-io/react`, and `@allstak-io/react-native`.

## Install

> **Auth required:** GitHub Packages requires a token with `read:packages` scope.

### 1. Configure `.npmrc`

Add to your project root `.npmrc` (or `~/.npmrc`):

```ini
@allstak-io:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_PAT
```

`YOUR_GITHUB_PAT` must be a [GitHub Personal Access Token](https://github.com/settings/tokens) with `read:packages` scope.

### 2. Install

```bash
npm install @allstak-io/core@0.1.1
# or
pnpm add @allstak-io/core@0.1.1
```

## Usage

```ts
import { AllStak } from '@allstak-io/core';

AllStak.init({
  apiKey: process.env.ALLSTAK_API_KEY!,
  environment: 'production',
  release: 'v1.0.0',
  // ingest: 'https://api.allstak.sa'  ← default, can omit
});

AllStak.captureException(new Error('something went wrong'));
AllStak.captureMessage('Startup complete', 'info');
```

## What's exported

| Export | Description |
|--------|-------------|
| `AllStak` | Main SDK object — `init`, `captureException`, `captureMessage`, etc. |
| `AllStakConfig` | Type for `AllStak.init(config)` |
| `Span` | Distributed tracing span class |
| `DatabaseModule` | DB auto-instrumentation module |
| `Breadcrumb`, `LogEvent`, `LogLevel`, `HttpRequestItem`, `SpanData`, `DbQueryItem`, `HeartbeatOptions` | Types |

## GitHub Packages

- **Package:** `@allstak-io/core`
- **Registry:** `https://npm.pkg.github.com`
- **Repo:** [github.com/allstak-io/allstak-core](https://github.com/allstak-io/allstak-core)
- **Releases:** [github.com/allstak-io/allstak-core/releases](https://github.com/allstak-io/allstak-core/releases)

## Versioning

Releases follow [SemVer](https://semver.org). Tags must match `package.json` version exactly (e.g. `v0.1.1`). The release workflow fails if there's a mismatch.
