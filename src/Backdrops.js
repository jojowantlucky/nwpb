import React from 'react';
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

  // Sequin backdrops - 14 total
  const sequinBackdrops = Array.from({ length: 14 }, (_, i) => ({
    id: i + 1,
    name: `Sequin Backdrop ${i + 1}`,
    image: `/img/backdrops/sequin/sequin-${i + 1}.webp`
  }));

  // Custom backdrops - TBD (placeholder with 6 for now)
  const customBackdrops = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    name: `Custom Design ${i + 1}`,
    image: `/img/backdrops/custom/custom-${i + 1}.webp`
  }));

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
              Premium Sequin Backdrops
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
                  background: 'linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)',
                  borderRadius: '8px',
                  overflow: 'hidden'
                }}>
                  {/* Placeholder */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '64px',
                    opacity: 0.3
                  }}>
                    ✨
                  </div>
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

      {/* Custom Designs Section */}
      <section id="custom" style={{ padding: '80px 24px', background: '#FFFFFF' }}>
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
              Custom Backdrop Designs
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
              Choose your backdrop design for your event. Add your logo, branding, or themed designs.
            </p>
          </div>

          {/* Custom Backdrops Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '32px'
          }}>
            {customBackdrops.map(backdrop => (
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
                  background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                  borderRadius: '8px',
                  overflow: 'hidden'
                }}>
                  {/* Placeholder */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '64px',
                    opacity: 0.3
                  }}>
                    🖼️
                  </div>
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

          {/* Info Box */}
          <div style={{
            marginTop: '64px',
            textAlign: 'center',
            background: '#f9f9f9',
            padding: '48px',
            borderRadius: '16px',
            maxWidth: '700px',
            margin: '64px auto 0'
          }}>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 600,
              color: '#4a4a4a',
              marginBottom: '16px'
            }}>
              Need Something Custom?
            </h3>
            <p style={{
              color: '#9b9b9b',
              fontSize: '16px',
              lineHeight: 1.6,
              marginBottom: '24px'
            }}>
              We can create fully customized backdrops designed specifically for your event. Add your logo, branding, or themed designs.
            </p>
            <Link 
              to="/#contact"
              className="btn-primary"
              style={{
                display: 'inline-flex',
                textDecoration: 'none'
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Backdrops;
