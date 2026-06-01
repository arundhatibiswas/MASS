import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge class names with Tailwind conflict resolution.
 * Use this everywhere instead of string concatenation.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
