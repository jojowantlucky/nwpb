import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function PhotoBooks() {
  const customDesigns = [
    { id: 1, name: 'Bamboo Leaves', image: '/img/photobooks/custom/bamboo-leaves/bamboo-leaves1.webp' },
    { id: 2, name: 'Beach Sandals', image: '/img/photobooks/custom/beach-sandles/beach-sandals1.webp' },
    { id: 3, name: 'City Skyline', image: '/img/photobooks/custom/city-skyline/city-skyline1.webp' },
    { id: 4, name: 'Color Explosion', image: '/img/photobooks/custom/color-explosion/color-explosion1.webp' },
    { id: 5, name: 'Diamond Geo', image: '/img/photobooks/custom/diamond-geo/diamond-geo1.webp' },
    { id: 6, name: 'Double Diamond', image: '/img/photobooks/custom/double-diamond/double-diamond1.webp' },
    { id: 7, name: 'Feather Flowers', image: '/img/photobooks/custom/feather-flowers/feather-flowers1.webp' },
    { id: 8, name: 'Floral Swirls', image: '/img/photobooks/custom/floral-swirls/floral-swirls1.webp' },
    { id: 9, name: 'Geo Sparks', image: '/img/photobooks/custom/geo-sparks/geo-sparks1.webp' },
    { id: 10, name: 'Hanging Sign', image: '/img/photobooks/custom/hanging-sign/hanging-sign1.webp' },
    { id: 11, name: 'Heart Duo', image: '/img/photobooks/custom/heart-duo/heart-duo1.webp' },
    { id: 12, name: 'Keep It Simple', image: '/img/photobooks/custom/keep-it-simple/keep-it-simple1.webp' },
    { id: 13, name: 'Mums', image: '/img/photobooks/custom/mums/mums1.webp' },
    { id: 14, name: 'Vintage Lanterns', image: '/img/photobooks/custom/venture-lanterns/vintage-lanterns1.webp' },
    { id: 15, name: 'Wildflower Stencil', image: '/img/photobooks/custom/wildflower-stencil/wildflower-stencil1.webp' }
  ];

  const standardDesigns = [
    { id: 1, name: 'Standard Design 1', image: '/img/photobooks/standard-photobook1.webp' },
    { id: 2, name: 'Standard Design 2', image: '/img/photobooks/standard-photobook2.webp' },
    { id: 3, name: 'Standard Design 3', image: '/img/photobooks/standard-photobook3.webp' },
    { id: 4, name: 'Standard Design 4', image: '/img/photobooks/standard-photobook4.webp' },
    { id: 5, name: 'Standard Design 5', image: '/img/photobooks/standard-photobook5.webp' },
    { id: 6, name: 'Standard Design 6', image: '/img/photobooks/standard-photobook6.webp' },
    { id: 7, name: 'Standard Design 7', image: '/img/photobooks/standard-photobook7.webp' },
    { id: 8, name: 'Standard Design 8', image: '/img/photobooks/standard-photobook8.webp' },
    { id: 9, name: 'Standard Design 9', image: '/img/photobooks/standard-photobook9.webp' },
    { id: 10, name: 'Standard Design 10', image: '/img/photobooks/standard-photobook10.webp' }
  ];

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

      {/* Custom Designs Section */}
      <section style={{ padding: '80px 24px', background: '#FFFFFF' }}>
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
              Custom Photo Book Designs
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
              Work with our design team to create completely unique photo books with your branding, logos, and custom layouts.
            </p>
          </div>

          {/* Custom Designs Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '32px'
          }}>
            {customDesigns.map(design => (
              <div key={design.id} style={{
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <img
                  src={`${process.env.PUBLIC_URL}${design.image}`}
                  alt={design.name}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease'
                  }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standard Designs Section */}
      <section style={{ padding: '80px 24px', background: '#f9f9f9' }}>
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
              Standard Photo Book Designs
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
              Choose from our curated selection of professionally designed templates for a beautiful, ready-to-go photo book.
            </p>
          </div>

          {/* Standard Designs Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '32px'
          }}>
            {standardDesigns.map(design => (
              <div key={design.id} style={{
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <img
                  src={`${process.env.PUBLIC_URL}${design.image}`}
                  alt={design.name}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease'
                  }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default PhotoBooks;
