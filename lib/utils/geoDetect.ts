/**
 * EU timezone prefixes — used to detect EU visitors without a geolocation API.
 * Detection method: Intl.DateTimeFormat().resolvedOptions().timeZone
 * This runs on the client only (typeof window !== 'undefined').
 */
const EU_TIMEZONE_PREFIXES = [
  'Europe/',
  'Atlantic/Azores',
  'Atlantic/Canary',
  'Atlantic/Faroe',
  'Atlantic/Madeira',
  'Indian/Reunion',
  'Indian/Mayotte',
]

/**
 * Returns true if the visitor's local timezone is within the EU/EEA.
 * Falls back to false (no banner) if timezone cannot be determined.
 */
export function isEuVisitor(): boolean {
  if (typeof window === 'undefined') return false
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
    return EU_TIMEZONE_PREFIXES.some((prefix) => tz.startsWith(prefix))
  } catch {
    return false
  }
}
