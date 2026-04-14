/** Passphrase from env; falls back for local dev. Set `VITE_STORY_PASSPHRASE` in production. */
export function getExpectedPassphrase(): string {
  const fromEnv = import.meta.env.VITE_STORY_PASSPHRASE
  if (fromEnv && String(fromEnv).trim() !== '') {
    return String(fromEnv).trim()
  }
  return 'roro-and-mstf'
}

export const STORAGE_REMEMBER_KEY = 'roro_story_remember'
