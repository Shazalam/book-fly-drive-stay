import React from "react";
import Script from "next/script";

const GoogleTagManager: React.FC = () => {
  return (
    <>
      {/* Google Tag - Load gtag.js */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17119997110"
        strategy="afterInteractive"
      />

      {/* Google Tag - Initialization */}
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-17119997110');
        `}
      </Script>
    </>
  );
};

export default GoogleTagManager;
