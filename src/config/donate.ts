/**
 * Donation configuration — the ONLY file the client needs to edit to go live.
 *
 * How it works (no API keys, no backend):
 *  - Each sponsorship tier links out to a hosted payment page (Stripe Payment Link
 *    or PayPal). Buttons simply open these URLs in a new tab.
 *  - Apple Pay & Google Pay appear automatically on Stripe-hosted Payment Link
 *    pages for supported devices/browsers — nothing extra to configure.
 *
 * TO GO LIVE, replace every "REPLACE_ME" below:
 *  1. Stripe → Dashboard → Payment Links → create one link per row.
 *       - For MONTHLY tiers, set the price to "Recurring · Monthly".
 *       - For ONE-TIME tiers, set the price to "One time".
 *       - For the "custom" amount, create a link with "Customer chooses price".
 *  2. PayPal → create donation/subscription buttons (paypal.com/donate or
 *     a subscription "Smart Button" link) and paste the URLs.
 *
 * Until real URLs are added, buttons fall back to FALLBACK_DONATE_URL and a
 * "not yet configured" notice is shown in the UI.
 */

export type Frequency = 'one-time' | 'monthly'

export interface Tier {
  id: string
  name: string
  /** Amount in USD. */
  amount: number
  description: string
  /** Highlight this tier as the suggested option. */
  featured?: boolean
}

export interface PaymentLinks {
  stripe: string
  paypal: string
}

/** Shown when a specific link hasn't been configured yet. */
export const FALLBACK_DONATE_URL = 'REPLACE_ME'

/** Sponsorship tiers (inspired by tiered giving — edit freely). */
export const TIERS: Tier[] = [
  { id: 'caring', name: 'Caring Member', amount: 20, description: 'Provides learning materials for a student.' },
  { id: 'hope', name: 'Hope Giver', amount: 45, description: 'Supports counseling for a teen mother.' },
  { id: 'cosponsor', name: 'Co-Sponsor', amount: 70, description: 'Helps fund vocational training.', featured: true },
  { id: 'sustaining', name: 'Sustaining Sponsor', amount: 100, description: 'Covers health insurance for a family.' },
  { id: 'full', name: 'Full Sponsor', amount: 150, description: 'Funds startup capital for a woman entrepreneur.' },
]

/**
 * Hosted checkout URLs keyed by frequency, then tier id.
 * `custom` is used when the donor enters their own amount.
 */
export const PAYMENT_LINKS: Record<Frequency, Record<string, PaymentLinks>> = {
  'one-time': {
    caring: { stripe: 'REPLACE_ME', paypal: 'REPLACE_ME' },
    hope: { stripe: 'REPLACE_ME', paypal: 'REPLACE_ME' },
    cosponsor: { stripe: 'REPLACE_ME', paypal: 'REPLACE_ME' },
    sustaining: { stripe: 'REPLACE_ME', paypal: 'REPLACE_ME' },
    full: { stripe: 'REPLACE_ME', paypal: 'REPLACE_ME' },
    custom: { stripe: 'REPLACE_ME', paypal: 'REPLACE_ME' },
  },
  monthly: {
    caring: { stripe: 'REPLACE_ME', paypal: 'REPLACE_ME' },
    hope: { stripe: 'REPLACE_ME', paypal: 'REPLACE_ME' },
    cosponsor: { stripe: 'REPLACE_ME', paypal: 'REPLACE_ME' },
    sustaining: { stripe: 'REPLACE_ME', paypal: 'REPLACE_ME' },
    full: { stripe: 'REPLACE_ME', paypal: 'REPLACE_ME' },
    custom: { stripe: 'REPLACE_ME', paypal: 'REPLACE_ME' },
  },
}

/** Resolve the hosted URL for a given selection, falling back gracefully. */
export function resolveLink(
  frequency: Frequency,
  tierId: string,
  provider: keyof PaymentLinks
): { url: string; configured: boolean } {
  const entry = PAYMENT_LINKS[frequency]?.[tierId]
  const url = entry?.[provider]
  if (url && url !== 'REPLACE_ME') return { url, configured: true }
  return { url: FALLBACK_DONATE_URL, configured: false }
}

export function isConfigured(url: string) {
  return Boolean(url) && url !== 'REPLACE_ME'
}
