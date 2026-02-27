import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin } from 'lucide-react';

function AreasServed() {
  const serviceAreas = [
    { region: 'Portland Metro', cities: ['Portland', 'Beaverton', 'Hillsboro', 'Tigard', 'Lake Oswego', 'West Linn', 'Oregon City'] },
    { region: 'Columbia River Gorge', cities: ['Hood River', 'The Dalles', 'Cascade Locks'] },
    { region: 'Willamette Valley', cities: ['Salem', 'Eugene', 'Corvallis', 'Albany'] },
    { region: 'Oregon Coast', cities: ['Cannon Beach', 'Seaside', 'Newport', 'Lincoln City'] },
    { region: 'Central Oregon', cities: ['Bend', 'Redmond', 'Sisters'] },
    { region: 'Washington', cities: ['Vancouver', 'Camas', 'Washougal'] }
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

      {/* Page Header */}
      <section style={{ padding: '80px 24px 40px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{
            letterSpacing: '3px',
            fontSize: '2.5em',
            margin: '0 0 0.5em 0',
            fontWeight: 300,
            color: '#4a4a4a'
          }}>
            Areas We Serve
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
            Proudly serving the Pacific Northwest with professional photo booth services.
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section style={{ padding: '40px 24px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            background: '#FFFFFF',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
          }}>
            {/* Placeholder for map - Replace with actual Google Maps embed or similar */}
            <div style={{
              width: '100%',
              height: '500px',
              background: 'linear-gradient(135deg, #e86c6c 0%, #ff5c94 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              fontSize: '24px',
              fontWeight: 600
            }}>
              <div style={{ textAlign: 'center' }}>
                <MapPin size={64} style={{ marginBottom: '16px' }} />
                <p>Map Coming Soon</p>
                <p style={{ fontSize: '16px', fontWeight: 400, marginTop: '8px' }}>
                  Google Maps Integration Placeholder
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas List */}
      <section style={{ padding: '80px 24px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
            letterSpacing: '3px',
            fontSize: '1.8em',
            marginBottom: '3em',
            fontWeight: 300,
            color: '#4a4a4a'
          }}>
            Service Regions
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
          }}>
            {serviceAreas.map((area, idx) => (
              <div key={idx} style={{
                background: '#f9f9f9',
                borderRadius: '16px',
                padding: '32px',
                border: '1px solid rgba(18, 18, 18, 0.05)'
              }}>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: 600,
                  color: '#e86c6c',
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <MapPin size={20} />
                  {area.region}
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {area.cities.map((city, cityIdx) => (
                    <li key={cityIdx} style={{
                      color: '#9b9b9b',
                      fontSize: '16px',
                      marginBottom: '8px',
                      paddingLeft: '20px',
                      position: 'relative'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: '#e86c6c'
                      }}>•</span>
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Note */}
          <div style={{
            marginTop: '64px',
            textAlign: 'center',
            background: '#f9f9f9',
            padding: '48px',
            borderRadius: '16px'
          }}>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 600,
              color: '#4a4a4a',
              marginBottom: '16px'
            }}>
              Don't See Your Area?
            </h3>
            <p style={{
              color: '#9b9b9b',
              fontSize: '16px',
              lineHeight: 1.6,
              marginBottom: '24px',
              maxWidth: '600px',
              margin: '0 auto 24px'
            }}>
              We love to travel! Contact us to discuss bringing our photo booth services to your location.
            </p>
            <Link 
              to="/#contact"
              className="btn-primary"
              style={{
                display: 'inline-flex',
                textDecoration: 'none'
              }}
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AreasServed;
