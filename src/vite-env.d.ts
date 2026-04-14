/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_STORY_PASSPHRASE?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
