import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Shakirul Hasan Khan - Software Engineer & AI Developer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#141210',
          color: '#efefef',
          fontFamily: 'monospace',
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, #141210 0%, #201e18 100%)',
          }}
        />
        
        {/* Main Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            zIndex: 1,
            padding: '60px',
          }}
        >
          {/* Name */}
          <h1
            style={{
              fontSize: '72px',
              fontWeight: '700',
              margin: '0 0 20px 0',
              color: '#fff',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            Shakirul Hasan Khan
          </h1>
          
          {/* Title */}
          <p
            style={{
              fontSize: '36px',
              margin: '0 0 40px 0',
              color: '#ffe0c2',
              fontWeight: '400',
            }}
          >
            Software Engineer & AI Developer
          </p>
          
          {/* Description */}
          <p
            style={{
              fontSize: '24px',
              margin: '0',
              color: '#b4b4b4',
              maxWidth: '800px',
              lineHeight: 1.4,
            }}
          >
            4+ years experience in full-stack development, AI, and open source.
            Building AI-powered applications with React, NextJS, and Rust.
          </p>
        </div>
        
        {/* Decorative Element */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '200px',
            height: '2px',
            background: '#ffe0c2',
            opacity: 0.6,
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}