# FluentSwitch

[![Build Status](https://travis-ci.org/maximilian-krauss/fluent-switch.svg?branch=master)](https://travis-ci.org/maximilian-krauss/fluent-switch)

Better way to do switching.

## Installation

```bash
npm i fluent-switch
```

## Usage

### No fallback

```js
  FluentSwitch
    .createFrom(error)
    .case(e => e instanceof TimeoutError, e => log.error('timeout', e))
    .case(e => e instanceof ConnectionError, () => e => log.error('connection', e))
    .execute()
```

### With fallback

```js
  FluentSwitch
    .createFrom(error)
    .case(e => e instanceof TimeoutError, e => log.error('timeout', e))
    .case(e => e instanceof ConnectionError, () => e => log.error('connection', e))
    .else(e => log.error('Unknown error', e))
    .execute()
```
