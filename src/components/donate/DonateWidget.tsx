'use client'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  TIERS,
  type Frequency,
  resolveLink,
  isConfigured,
} from '@/config/donate'

export default function DonateWidget() {
  const [frequency, setFrequency] = useState<Frequency>('one-time')
  const [selectedId, setSelectedId] = useState<string>(
    TIERS.find((t) => t.featured)?.id ?? TIERS[0].id
  )
  const [customAmount, setCustomAmount] = useState<string>('')
  const [showCheck, setShowCheck] = useState(false)

  const isCustom = selectedId === 'custom'

  const selectedAmount = useMemo(() => {
    if (isCustom) return Number(customAmount) || 0
    return TIERS.find((t) => t.id === selectedId)?.amount ?? 0
  }, [isCustom, customAmount, selectedId])

  const stripe = resolveLink(frequency, selectedId, 'stripe')
  const paypal = resolveLink(frequency, selectedId, 'paypal')

  const customInvalid = isCustom && selectedAmount < 1
  const stripeReady = isConfigured(stripe.url) && !customInvalid
  const paypalReady = isConfigured(paypal.url) && !customInvalid

  const open = (url: string) => {
    if (!isConfigured(url)) return
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-neutral-200 p-6 md:p-10 max-w-3xl mx-auto">
      {/* Frequency toggle */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex p-1 rounded-full bg-neutral-100 relative">
          {(['one-time', 'monthly'] as Frequency[]).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFrequency(f)}
              className={`relative z-10 px-6 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                frequency === f ? 'text-white' : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              {frequency === f && (
                <motion.span
                  layoutId="freq-pill"
                  className="absolute inset-0 rounded-full bg-primary -z-10"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              {f === 'one-time' ? 'One-time' : 'Monthly'}
            </button>
          ))}
        </div>
      </div>

      {/* Tiers */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {TIERS.map((tier) => {
          const active = selectedId === tier.id
          return (
            <button
              key={tier.id}
              type="button"
              onClick={() => setSelectedId(tier.id)}
              className={`text-left rounded-2xl border-2 p-5 transition-all ${
                active
                  ? 'border-primary bg-primary/5 shadow-sm'
                  : 'border-neutral-200 hover:border-primary/40'
              }`}
            >
              <div className="flex items-baseline justify-between mb-1">
                <span className="font-display font-bold text-2xl text-neutral-900">
                  ${tier.amount}
                </span>
                {frequency === 'monthly' && (
                  <span className="text-xs font-medium text-neutral-400">/mo</span>
                )}
              </div>
              <div className="font-semibold text-sm text-neutral-800">{tier.name}</div>
              <p className="text-xs text-neutral-500 mt-1 leading-relaxed">{tier.description}</p>
            </button>
          )
        })}

        {/* Custom amount tile */}
        <button
          type="button"
          onClick={() => setSelectedId('custom')}
          className={`text-left rounded-2xl border-2 p-5 transition-all ${
            isCustom ? 'border-primary bg-primary/5 shadow-sm' : 'border-neutral-200 hover:border-primary/40'
          }`}
        >
          <div className="font-semibold text-sm text-neutral-800 mb-2">Custom amount</div>
          <div className="flex items-center gap-1">
            <span className="text-neutral-500 font-medium">$</span>
            <input
              type="number"
              min={1}
              inputMode="decimal"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              onFocus={() => setSelectedId('custom')}
              placeholder="Other"
              className="w-full bg-transparent border-b border-neutral-300 focus:border-primary outline-none font-display font-bold text-xl text-neutral-900 py-1"
            />
          </div>
        </button>
      </div>

      {/* Summary */}
      <div className="text-center mb-6">
        <p className="text-neutral-500 text-sm">
          You&rsquo;re giving{' '}
          <span className="font-semibold text-neutral-900">
            ${selectedAmount > 0 ? selectedAmount.toLocaleString() : '—'}
          </span>{' '}
          {frequency === 'monthly' ? 'every month' : 'once'}.
        </p>
      </div>

      {/* Payment buttons */}
      <div className="space-y-3">
        <button
          type="button"
          disabled={!stripeReady}
          onClick={() => open(stripe.url)}
          className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 transition-colors"
        >
          <CardIcon className="w-5 h-5" />
          Donate with Card / Apple Pay
        </button>

        <button
          type="button"
          disabled={!paypalReady}
          onClick={() => open(paypal.url)}
          className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#FFC439] hover:brightness-95 disabled:opacity-50 disabled:cursor-not-allowed text-[#003087] font-bold py-4 transition-all"
        >
          <PayPalIcon className="h-5" />
          Donate with PayPal
        </button>

        {/* Pay by check */}
        <button
          type="button"
          onClick={() => setShowCheck((v) => !v)}
          aria-expanded={showCheck}
          className="w-full inline-flex items-center justify-center gap-2 rounded-xl border-2 border-neutral-200 hover:border-primary/40 text-neutral-700 font-semibold py-4 transition-colors"
        >
          <CheckIcon className="w-5 h-5" />
          Donate by Check
          <svg
            className={`w-4 h-4 transition-transform ${showCheck ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <AnimatePresence initial={false}>
          {showCheck && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="rounded-xl bg-neutral-50 border border-neutral-200 p-5 text-sm text-neutral-700 leading-relaxed">
                <p className="mb-3">
                  Make your check{selectedAmount > 0 ? ` for $${selectedAmount.toLocaleString()}` : ''}{' '}
                  payable to <span className="font-semibold">International Community Center</span> and
                  mail it to:
                </p>
                <address className="not-italic font-medium text-neutral-800">
                  International Community Center (ICC)<br />
                  4625 East Broadway Blvd, Suite #201A<br />
                  Tucson, Arizona 85711
                </address>
                <p className="mt-3 text-xs text-neutral-500">
                  ICC is a registered 501(c)(3) nonprofit — your check donation is tax-deductible.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <p className="text-center text-xs text-neutral-400 mt-5">
        {customInvalid
          ? 'Enter an amount of $1 or more to continue.'
          : !stripeReady && !paypalReady
          ? 'Online donations are being set up. Please check back soon or contact info@icommunitycenter.org.'
          : 'Apple Pay & Google Pay appear automatically at checkout on supported devices. Secure payment via Stripe & PayPal.'}
      </p>
    </div>
  )
}

function CardIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h2m-4 4h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 10l2-5h14l2 5M3 10v8a1 1 0 001 1h16a1 1 0 001-1v-8M7 15h4" />
    </svg>
  )
}

function PayPalIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 .901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201H8.83a.483.483 0 0 0-.477.41l-1.034 6.555-.32 2.03a.32.32 0 0 0 .315.373h3.94a.733.733 0 0 0 .724-.618l.03-.158.567-3.598.036-.197a.734.734 0 0 1 .724-.62h.456c2.947 0 5.255-1.198 5.93-4.66.282-1.447.135-2.654-.61-3.504a2.91 2.91 0 0 0-.83-.66z" />
    </svg>
  )
}
