import React from 'react';
import { ArrowLeft } from 'lucide-react';

function PhotoBooks() {
  const customDesigns = [
    { id: 1, name: 'Custom Design 1', image: '/photo-books/custom-1.webp' },
    { id: 2, name: 'Custom Design 2', image: '/photo-books/custom-2.webp' },
    { id: 3, name: 'Custom Design 3', image: '/photo-books/custom-3.webp' },
    { id: 4, name: 'Custom Design 4', image: '/photo-books/custom-4.webp' },
    { id: 5, name: 'Custom Design 5', image: '/photo-books/custom-5.webp' },
    { id: 6, name: 'Custom Design 6', image: '/photo-books/custom-6.webp' }
  ];

  const standardDesigns = [
    { id: 1, name: 'Standard Design 1', image: '/photo-books/standard-1.webp' },
    { id: 2, name: 'Standard Design 2', image: '/photo-books/standard-2.webp' },
    { id: 3, name: 'Standard Design 3', image: '/photo-books/standard-3.webp' },
    { id: 4, name: 'Standard Design 4', image: '/photo-books/standard-4.webp' },
    { id: 5, name: 'Standard Design 5', image: '/photo-books/standard-5.webp' },
    { id: 6, name: 'Standard Design 6', image: '/photo-books/standard-6.webp' },
    { id: 7, name: 'Standard Design 7', image: '/photo-books/standard-7.webp' },
    { id: 8, name: 'Standard Design 8', image: '/photo-books/standard-8.webp' },
    { id: 9, name: 'Standard Design 9', image: '/photo-books/standard-9.webp' },
    { id: 10, name: 'Standard Design 10', image: '/photo-books/standard-10.webp' },
    { id: 11, name: 'Standard Design 11', image: '/photo-books/standard-11.webp' },
    { id: 12, name: 'Standard Design 12', image: '/photo-books/standard-12.webp' },
    { id: 13, name: 'Standard Design 13', image: '/photo-books/standard-13.webp' },
    { id: 14, name: 'Standard Design 14', image: '/photo-books/standard-14.webp' },
    { id: 15, name: 'Standard Design 15', image: '/photo-books/standard-15.webp' },
    { id: 16, name: 'Standard Design 16', image: '/photo-books/standard-16.webp' },
    { id: 17, name: 'Standard Design 17', image: '/photo-books/standard-17.webp' },
    { id: 18, name: 'Standard Design 18', image: '/photo-books/standard-18.webp' },
    { id: 19, name: 'Standard Design 19', image: '/photo-books/standard-19.webp' }
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
          <a 
            href="/"
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
          </a>
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
