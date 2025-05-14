/**
 * Checks if a given URL is likely an external URL.
 * This includes common protocols like http, https, mailto, tel, and protocol-relative URLs.
 *
 * @param {string} url - The URL to check.
 * @returns {boolean} True if the URL is considered external, false otherwise.
 *
 * @example
 * ```ts
 * isExternalUrl("https://example.com"); // true
 * isExternalUrl("http://localhost:3000"); // true
 * isExternalUrl("//cdn.example.com/image.png"); // true
 * isExternalUrl("mailto:test@example.com"); // true
 * isExternalUrl("tel:+1234567890"); // true
 * isExternalUrl("/internal/path"); // false
 * isExternalUrl("relative/path"); // false
 * isExternalUrl("#hash-link"); // false
 * ```
 */
export const isExternalUrl = (url: string): boolean => {
  if (!url) return false;
  return (
    url.startsWith('http://') ||
    url.startsWith('https://') ||
    url.startsWith('//') || // Protocol-relative URLs
    url.startsWith('mailto:') ||
    url.startsWith('tel:')
  );
};
