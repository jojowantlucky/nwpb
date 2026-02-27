import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';

function PhotoBooks() {
  const [activeModal, setActiveModal] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Custom designs with image counts
  const customDesigns = [
    { id: 1, name: 'Bamboo Leaves', folder: 'bamboo-leaves', imageCount: 3 },
    { id: 2, name: 'Beach Sandals', folder: 'beach-sandals', imageCount: 6 },
    { id: 3, name: 'Best Day', folder: 'best-day', imageCount: 2 },
    { id: 4, name: 'Box Modern', folder: 'box-modern', imageCount: 6 },
    { id: 5, name: 'City Skyline', folder: 'city-skyline', imageCount: 2 },
    { id: 6, name: 'Color Explosion', folder: 'color-explosion', imageCount: 6 },
    { id: 7, name: 'Diamond Geo', folder: 'diamond-geo', imageCount: 6 },
    { id: 8, name: 'Double Diamond', folder: 'double-diamond', imageCount: 6 },
    { id: 9, name: 'Eat Drink and Be Married', folder: 'eat-drink-and-be-married', imageCount: 6 },
    { id: 10, name: 'Endless Love', folder: 'endless-love', imageCount: 6 },
    { id: 11, name: 'Eucalyptus', folder: 'eucalyptus', imageCount: 6 },
    { id: 12, name: 'Feather Flowers', folder: 'feather-flowers', imageCount: 6 },
    { id: 13, name: 'Floral Swirls', folder: 'floral-swirls', imageCount: 2 },
    { id: 14, name: 'Geo Flowers', folder: 'geo-flowers', imageCount: 6 },
    { id: 15, name: 'Geo Sparks', folder: 'geo-sparks', imageCount: 6 },
    { id: 16, name: 'Hanging Sign', folder: 'hanging-sign', imageCount: 2 },
    { id: 17, name: 'Heart Duo', folder: 'heart-duo', imageCount: 6 },
    { id: 18, name: 'Keep It Simple', folder: 'keep-it-simple', imageCount: 6 },
    { id: 19, name: 'Lace Design', folder: 'lace-design', imageCount: 6 },
    { id: 20, name: 'Line Simple', folder: 'line-simple', imageCount: 6 },
    { id: 21, name: 'Mums', folder: 'mums', imageCount: 2 },
    { id: 22, name: 'Picture Frames', folder: 'picture-frames', imageCount: 6 },
    { id: 23, name: 'Polka Dots', folder: 'polka-dots', imageCount: 6 },
    { id: 24, name: 'Thistle Flower', folder: 'thistle-flower', imageCount: 6 },
    { id: 25, name: 'Vintage Lanterns', folder: 'vintage-lanterns', imageCount: 6 },
    { id: 26, name: 'Wildflower Stencil', folder: 'wildflower-stencil', imageCount: 6 }
  ];

  const standardDesigns = [
    { id: 1, name: 'Standard Design 1', imageCount: 1 },
    { id: 2, name: 'Standard Design 2', imageCount: 1 },
    { id: 3, name: 'Standard Design 3', imageCount: 1 },
    { id: 4, name: 'Standard Design 4', imageCount: 1 },
    { id: 5, name: 'Standard Design 5', imageCount: 1 },
    { id: 6, name: 'Standard Design 6', imageCount: 1 },
    { id: 7, name: 'Standard Design 7', imageCount: 1 },
    { id: 8, name: 'Standard Design 8', imageCount: 1 },
    { id: 9, name: 'Standard Design 9', imageCount: 1 },
    { id: 10, name: 'Standard Design 10', imageCount: 1 }
  ];

  const openModal = (design, isCustom) => {
    setActiveModal({ ...design, isCustom });
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setActiveModal(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (activeModal) {
      setCurrentImageIndex((prev) => 
        prev < activeModal.imageCount - 1 ? prev + 1 : 0
      );
    }
  };

  const prevImage = () => {
    if (activeModal) {
      setCurrentImageIndex((prev) => 
        prev > 0 ? prev - 1 : activeModal.imageCount - 1
      );
    }
  };

  const getImagePath = (design, index, isCustom) => {
    if (isCustom) {
      const prefix = design.filePrefix || design.folder;
      const fileName = `${prefix}${index + 1}.webp`;
      return `${process.env.PUBLIC_URL}/img/photobooks/custom/${design.folder}/${fileName}`;
    } else {
      return `${process.env.PUBLIC_URL}/img/photobooks/standard-photobook${design.id}.webp`;
    }
  };

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
              <div key={design.id} 
                onClick={() => openModal(design, true)}
                style={{
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <img
                  src={getImagePath(design, 0, true)}
                  alt={design.name}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    transition: 'all 0.3s ease'
                  }}
                  loading="lazy"
                />
                <h3 style={{
                  textAlign: 'center',
                  fontSize: '18px',
                  fontWeight: 500,
                  color: '#4a4a4a',
                  marginTop: '12px',
                  marginBottom: 0
                }}>
                  {design.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standard Designs Section */}
      <section id="standard" style={{ padding: '80px 24px', background: '#f9f9f9' }}>
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
              <div key={design.id}
                onClick={() => openModal(design, false)}
                style={{
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <img
                  src={getImagePath(design, 0, false)}
                  alt={design.name}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    transition: 'all 0.3s ease'
                  }}
                  loading="lazy"
                />
                <h3 style={{
                  textAlign: 'center',
                  fontSize: '18px',
                  fontWeight: 500,
                  color: '#4a4a4a',
                  marginTop: '12px',
                  marginBottom: 0
                }}>
                  {design.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Book Modal */}
      {activeModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.7)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={closeModal}
        >
          {/* Modal Content */}
          <div
            style={{
              position: 'relative',
              maxWidth: '900px',
              width: '100%',
              background: '#FFFFFF',
              borderRadius: '8px',
              overflow: 'hidden'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                zIndex: 10,
                background: 'rgba(255, 255, 255, 0.9)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'background 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#FFFFFF'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)'}
            >
              <X size={24} color="#4a4a4a" />
            </button>

            {/* Image Display */}
            <div style={{ position: 'relative', background: '#f9f9f9' }}>
              <img
                src={getImagePath(activeModal, currentImageIndex, activeModal.isCustom)}
                alt={`${activeModal.name} - Image ${currentImageIndex + 1}`}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />

              {/* Navigation Arrows (only if more than 1 image) */}
              {activeModal.imageCount > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    style={{
                      position: 'absolute',
                      left: '16px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'rgba(255, 255, 255, 0.9)',
                      border: 'none',
                      borderRadius: '50%',
                      width: '48px',
                      height: '48px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'background 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#FFFFFF'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)'}
                  >
                    <ChevronLeft size={28} color="#4a4a4a" />
                  </button>

                  <button
                    onClick={nextImage}
                    style={{
                      position: 'absolute',
                      right: '16px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'rgba(255, 255, 255, 0.9)',
                      border: 'none',
                      borderRadius: '50%',
                      width: '48px',
                      height: '48px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'background 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#FFFFFF'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)'}
                  >
                    <ChevronRight size={28} color="#4a4a4a" />
                  </button>
                </>
              )}
            </div>

            {/* Modal Footer */}
            <div style={{ padding: '24px', textAlign: 'center' }}>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 600,
                color: '#4a4a4a',
                marginBottom: '8px'
              }}>
                {activeModal.name}
              </h3>
              {activeModal.imageCount > 1 && (
                <p style={{
                  color: '#9b9b9b',
                  fontSize: '14px',
                  margin: 0
                }}>
                  Image {currentImageIndex + 1} of {activeModal.imageCount}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PhotoBooks;
