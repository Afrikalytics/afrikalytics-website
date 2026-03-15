export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

/** Allowed payment redirect hosts */
const ALLOWED_PAYMENT_HOSTS = ["app.paydunya.com", "paydunya.com"];

export function isSafePaymentUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return (
      parsed.protocol === "https:" &&
      ALLOWED_PAYMENT_HOSTS.some(
        (host) => parsed.hostname === host || parsed.hostname.endsWith(`.${host}`)
      )
    );
  } catch {
    return false;
  }
}

/** Allowed survey embed origins */
const ALLOWED_EMBED_ORIGINS = [
  "https://form.typeform.com",
  "https://docs.google.com",
  "https://forms.google.com",
  "https://tally.so",
  "https://airtable.com",
  "https://surveyhero.com",
];

export function isSafeEmbedUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return (
      parsed.protocol === "https:" &&
      ALLOWED_EMBED_ORIGINS.some(
        (origin) => {
          const originUrl = new URL(origin);
          return parsed.hostname === originUrl.hostname ||
            parsed.hostname.endsWith(`.${originUrl.hostname}`);
        }
      )
    );
  } catch {
    return false;
  }
}
