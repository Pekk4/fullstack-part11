import { TextEncoder, TextDecoder } from 'node:util'

if (!globalThis.TextEncoder) {
  Object.defineProperty(globalThis, 'TextEncoder', { value: TextEncoder })
}

if (!globalThis.TextDecoder) {
  Object.defineProperty(globalThis, 'TextDecoder', { value: TextDecoder })
}
