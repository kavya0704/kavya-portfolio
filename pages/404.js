import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Home, Compass } from 'lucide-react';

export default function Custom404() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6 text-center">
      <Head>
        <title>404 — Page Not Found | Kavya Shaw</title>
        <meta name="robots" content="noindex, follow" />
      </Head>

      <div className="max-w-md space-y-6">
        <div className="inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-cyan-400">
          <Compass className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
            Error 404
          </span>
          <h1 className="text-3xl sm:text-4xl font-normal tracking-tight text-white">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
            The page you are looking for doesn&apos;t exist or has moved. Let&apos;s get you back to the portfolio.
          </p>
        </div>

        <div className="pt-2 flex justify-center gap-3">
          <Link
            href="/"
            className="btn-magnetic inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-neutral-950 text-xs font-semibold hover:bg-neutral-200 transition-colors shadow-lg"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
