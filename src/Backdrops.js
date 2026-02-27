import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function Backdrops() {
  // Standard backdrops - actual products with real names
  const standardBackdrops = [
    { id: 1, name: 'Yellow', filename: 'yellow-standard.webp' },
    { id: 2, name: 'White', filename: 'white-standard.webp' },
    { id: 3, name: 'Vintage Rose', filename: 'vintage-rose-standard.webp' },
    { id: 4, name: 'Sky Blue', filename: 'sky-blue-standard.webp' },
    { id: 5, name: 'Red', filename: 'red-standard.webp' },
    { id: 6, name: 'Ocean Blue', filename: 'ocean-blue-standard.webp' },
    { id: 7, name: 'Navy Blue', filename: 'navy-blue-standard.webp' },
    { id: 8, name: 'Mocha', filename: 'mocha-standard.webp' },
    { id: 9, name: 'Lilac', filename: 'lilac-standard.webp' },
    { id: 10, name: 'Charcoal Grey', filename: 'charcoal-grey-standard.webp' },
    { id: 11, name: 'Green', filename: 'green-standard.webp' },
    { id: 12, name: 'Glacier Grey', filename: 'glacier-grey-standard.webp' },
    { id: 13, name: 'Black', filename: 'black-standard.webp' }
  ];

  // Sequin backdrops - actual products with real names
  const sequinBackdrops = [
    { id: 1, name: 'Black', filename: 'black-sequin.webp' },
    { id: 2, name: 'Blush', filename: 'blush-sequin.webp' },
    { id: 3, name: 'Champagne', filename: 'champagne-sequin.webp' },
    { id: 4, name: 'Gold', filename: 'gold-sequin.webp' },
    { id: 5, name: 'Ivory', filename: 'ivory-sequin.webp' },
    { id: 6, name: 'Lilac', filename: 'lilac-sequin.webp' },
    { id: 7, name: 'Navy', filename: 'navy-sequin.webp' },
    { id: 8, name: 'Purple', filename: 'purple-sequin.webp' },
    { id: 9, name: 'Slate Grey', filename: 'slate-grey-sequin.webp' },
    { id: 10, name: 'Spearmint', filename: 'spearmint-sequin.webp' },
    { id: 11, name: 'Teal', filename: 'teal-sequin.webp' }
  ];

  // Load PB Backdrops widget script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widget.pbbackdrops.com/app/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF' }}>
      {/* Header with Back Button */}
      <div style={{ 
        background: '#FFFFFF', 
        borderBottom: '1px solid rgba(18, 18, 18, 0.05)',
        padding: '24px 0',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
          <Link 
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#4a4a4a',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: 500,
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#e86c6c'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#4a4a4a'}
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Page Header */}
      <section style={{ padding: '80px 24px 40px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{
            letterSpacing: '3px',
            fontSize: '2.5em',
            margin: '0 0 0.5em 0',
            fontWeight: 300,
            color: '#4a4a4a'
          }}>
            Backdrop Options
          </h1>
          
          {/* Line below */}
          <div style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/img/logo/nwpb-horizontal-line.webp)`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            height: '1em',
            marginTop: '0.5em',
            opacity: 0.5,
            margin: '0 auto',
            maxWidth: '600px'
          }} />

          <p style={{ 
            color: '#9b9b9b',
            fontSize: '1.1em',
            lineHeight: '1.8',
            marginTop: '2em',
            maxWidth: '700px',
            margin: '2em auto 0'
          }}>
            Elevate your photo booth experience with our selection of professional backdrops. Choose your favorite during the booking process.
          </p>
        </div>
      </section>

      {/* Standard Backdrops Section */}
      <section id="standard" style={{ padding: '80px 24px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{
              letterSpacing: '3px',
              fontSize: '1.8em',
              margin: '0 0 0.5em 0',
              padding: '0.5em 0',
              fontWeight: 300,
              color: '#4a4a4a'
            }}>
              Standard Backdrops
            </h2>
            
            {/* Line below */}
            <div style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/img/logo/nwpb-horizontal-line.webp)`,
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              height: '1em',
              marginTop: '0.5em',
              opacity: 0.5,
              margin: '0 auto',
              maxWidth: '600px'
            }} />

            <p style={{ 
              color: '#9b9b9b',
              fontSize: '1.1em',
              lineHeight: '1.8',
              marginTop: '2em',
              maxWidth: '700px',
              margin: '2em auto 0'
            }}>
              Classic solid color backdrops perfect for any event. Choose from our wide selection to match your theme.
            </p>
          </div>

          {/* Standard Backdrops Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '32px'
          }}>
            {standardBackdrops.map(backdrop => (
              <div key={backdrop.id} style={{
                overflow: 'hidden',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{
                  width: '100%',
                  paddingBottom: '100%', // 1:1 aspect ratio
                  position: 'relative',
                  borderRadius: '8px',
                  overflow: 'hidden'
                }}>
                  <img
                    src={`${process.env.PUBLIC_URL}/img/backdrops/standard/${backdrop.filename}`}
                    alt={backdrop.name}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                    loading="lazy"
                  />
                </div>
                <h3 style={{
                  textAlign: 'center',
                  fontSize: '16px',
                  fontWeight: 500,
                  color: '#4a4a4a',
                  marginTop: '12px',
                  marginBottom: 0
                }}>
                  {backdrop.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Sequin Section */}
      <section id="sequin" style={{ padding: '80px 24px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{
              letterSpacing: '3px',
              fontSize: '1.8em',
              margin: '0 0 0.5em 0',
              padding: '0.5em 0',
              fontWeight: 300,
              color: '#4a4a4a'
            }}>
              Sequin Backdrops
            </h2>
            
            {/* Line below */}
            <div style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/img/logo/nwpb-horizontal-line.webp)`,
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              height: '1em',
              marginTop: '0.5em',
              opacity: 0.5,
              margin: '0 auto',
              maxWidth: '600px'
            }} />

            <p style={{ 
              color: '#9b9b9b',
              fontSize: '1.1em',
              lineHeight: '1.8',
              marginTop: '2em',
              maxWidth: '700px',
              margin: '2em auto 0'
            }}>
              Stunning sequin backdrops that shimmer and shine. Perfect for adding glamour and elegance to your photos.
            </p>
          </div>

          {/* Sequin Backdrops Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '32px'
          }}>
            {sequinBackdrops.map(backdrop => (
              <div key={backdrop.id} style={{
                overflow: 'hidden',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{
                  width: '100%',
                  paddingBottom: '100%', // 1:1 aspect ratio
                  position: 'relative',
                  borderRadius: '8px',
                  overflow: 'hidden'
                }}>
                  <img
                    src={`${process.env.PUBLIC_URL}/img/backdrops/sequin/${backdrop.filename}`}
                    alt={backdrop.name}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                    loading="lazy"
                  />
                </div>
                <h3 style={{
                  textAlign: 'center',
                  fontSize: '16px',
                  fontWeight: 500,
                  color: '#4a4a4a',
                  marginTop: '12px',
                  marginBottom: 0
                }}>
                  {backdrop.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Backdrops Section */}
      <section id="premium" style={{ padding: '80px 24px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{
              letterSpacing: '3px',
              fontSize: '1.8em',
              margin: '0 0 0.5em 0',
              padding: '0.5em 0',
              fontWeight: 300,
              color: '#4a4a4a'
            }}>
              Premium Backdrops
            </h2>
            
            {/* Line below */}
            <div style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/img/logo/nwpb-horizontal-line.webp)`,
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              height: '1em',
              marginTop: '0.5em',
              opacity: 0.5,
              margin: '0 auto',
              maxWidth: '600px'
            }} />

            <p style={{ 
              color: '#9b9b9b',
              fontSize: '1.1em',
              lineHeight: '1.8',
              marginTop: '2em',
              maxWidth: '700px',
              margin: '2em auto 0'
            }}>
              Browse hundreds of premium custom backdrop designs. Perfect for weddings, corporate events, and special occasions.
            </p>
          </div>

          {/* PB Backdrops Widget */}
          <div style={{
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid rgba(18, 18, 18, 0.08)',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
            background: '#FFFFFF'
          }}>
            <iframe 
              src="https://widget.pbbackdrops.com/embed/v1/200fa513-91e4-4164-9140-c3c3a04832cc?choice=1&search=1" 
              style={{
                width: '100%',
                height: '700px',
                border: 'none',
                display: 'block'
              }}
              title="Premium Backdrop Designer"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Backdrops;
