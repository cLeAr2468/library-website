import { Clock } from 'lucide-react'

// const services = [
//   {
//     service: 'Book Borrowing',
//     client: 'Students, Faculty, Staff',
//     requirements: 'Valid ID / Library Account',
//     steps: ['Present ID', 'Request book', 'Librarian records loan', 'Receive book'],
//     time: '3–5 minutes',
//   },
//   {
//     service: 'Book Returning',
//     client: 'Borrowers',
//     requirements: 'Borrowed book/material',
//     steps: ['Present book', 'Librarian checks condition', 'Loan cleared'],
//     time: '2–3 minutes',
//   },
//   {
//     service: 'Reference & Research Assistance',
//     client: 'Students, Faculty, Researchers',
//     requirements: 'Research query/topic',
//     steps: ['Approach librarian', 'State information need', 'Receive assistance/resources'],
//     time: '5–15 minutes',
//   },
//   {
//     service: 'Printing & Photocopying',
//     client: 'Library users',
//     requirements: 'File/material to copy, payment',
//     steps: ['Submit request/file', 'Staff processes', 'Pay fee', 'Receive output'],
//     time: '3–10 minutes',
//   },
// ]

export default function CitizensCharter() {
  return (
    <>
      {/* Hero */}
      <section className="no-reveal relative overflow-hidden bg-primary-dark text-white">
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)', backgroundSize: '56px 56px' }} />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-accent/30" />
        <div className="relative container-shell py-8 sm:py-10 lg:py-14">
          <p className="eyebrow text-accent before:bg-accent/70 mb-6 animate-fade-up">Service Standards</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] animate-fade-up" style={{ animationDelay: '80ms' }}>
            Citizen&apos;s Charter
          </h1>
          <p className="mt-6 max-w-2xl text-white/75 leading-8 text-base sm:text-lg animate-fade-up" style={{ animationDelay: '160ms' }}>
            Clear service standards for the NWSSU-SJ community — what to prepare, what happens, and how long it takes.
          </p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="section-padding bg-background">
        <div className="container-shell">
          <div className="max-w-2xl mx-auto rounded-2xl border border-border bg-white p-8 sm:p-12 text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/[0.06] text-primary">
              <Clock size={26} strokeWidth={1.75} />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-text">Coming Soon</h2>
            <p className="mt-3 text-sm sm:text-base text-muted leading-7">
              The Citizen&apos;s Charter is being prepared and will be available here soon. Please check back later for updates on library service standards and procedures.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
