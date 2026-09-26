import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://kavya-shaw.vercel.app/#person",
        "name": "Kavya Shaw",
        "url": "https://kavya-shaw.vercel.app",
        "jobTitle": "AI/ML Developer & Web Engineer",
        "worksFor": {
          "@type": "CollegeOrUniversity",
          "name": "Supreme Knowledge Foundation Group of Institutions"
        },
        "alumniOf": "Supreme Knowledge Foundation Group of Institutions",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Kolkata",
          "addressCountry": "IN"
        },
        "sameAs": [
          "https://github.com/kavya0704",
          "https://www.linkedin.com/in/kavya-shaw-025b5a251/"
        ],
        "knowsAbout": [
          "Artificial Intelligence",
          "Machine Learning",
          "Computer Vision",
          "OpenCV",
          "YOLOv8",
          "Python",
          "FastAPI",
          "Next.js",
          "React",
          "WebSockets",
          "MQTT"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://kavya-shaw.vercel.app/#website",
        "url": "https://kavya-shaw.vercel.app",
        "name": "Kavya Shaw — AI/ML & Web Developer Portfolio",
        "description": "Portfolio of Kavya Shaw, a Computer Science student specializing in AI/ML, building Python applications, computer-vision systems, APIs and modern web experiences.",
        "publisher": {
          "@id": "https://kavya-shaw.vercel.app/#person"
        }
      }
    ]
  };

  return (
    <Html lang="en" className="dark">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#050505" />
        
        {/* Google Fonts Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />

        {/* Structured Data JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <body className="antialiased selection:bg-white selection:text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
