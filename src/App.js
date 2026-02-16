import React, { useState, useEffect } from 'react';
import {
	Camera,
	ChevronDown,
	X,
	Phone,
	Mail,
	MapPin,
	Check,
	Star,
	Image,
	Book,
	Clock,
	Users,
	Sparkles,
	Share2,
	Menu,
} from 'lucide-react';

export default function NoteworthyPhotoBooths() {
	const [navVisible, setNavVisible] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [activeModal, setActiveModal] = useState(null);
	const [activeBoothModal, setActiveBoothModal] = useState(null);
	const [photoBookModal, setPhotoBookModal] = useState(null);
	const [boothGalleryModal, setBoothGalleryModal] = useState(null);
	const [photoBookGallery, setPhotoBookGallery] = useState(null);
	const [currentPhotoBookImage, setCurrentPhotoBookImage] = useState(0);
	const [isPaused, setIsPaused] = useState(false);
	const carouselRef = React.useRef(null);
	const isScrolling = React.useRef(false);

	useEffect(() => {
		const handleScroll = () => {
			setNavVisible(window.scrollY > 600);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Load Check Cherry auto-resize script
	useEffect(() => {
		const script = document.createElement('script');
		script.src = 'https://noteworthy-djs.checkcherry.com/api/checkcherry_widgets/iframe';
		script.type = 'text/javascript';
		script.charset = 'utf-8';
		script.async = true;
		document.body.appendChild(script);

		return () => {
			// Cleanup script on unmount
			if (document.body.contains(script)) {
				document.body.removeChild(script);
			}
		};
	}, []);

	// Initialize carousel position to middle set
	useEffect(() => {
		if (carouselRef.current) {
			const cardWidth = 320 + 32; // card width + gap
			const numBooths = 5;
			carouselRef.current.scrollLeft = cardWidth * numBooths; // Start at second set
		}
	}, []);

	// Handle infinite scroll
	useEffect(() => {
		const carousel = carouselRef.current;
		if (!carousel) return;

		const handleCarouselScroll = () => {
			if (isScrolling.current) return;

			const cardWidth = 320 + 32;
			const numBooths = 5;
			const maxScroll = carousel.scrollWidth - carousel.clientWidth;
			const currentScroll = carousel.scrollLeft;

			// If scrolled to near the end, jump back to middle set
			if (currentScroll >= maxScroll - cardWidth) {
				isScrolling.current = true;
				carousel.scrollLeft = cardWidth * numBooths;
				setTimeout(() => {
					isScrolling.current = false;
				}, 50);
			}
			// If scrolled to near the beginning, jump forward to middle set
			else if (currentScroll <= cardWidth) {
				isScrolling.current = true;
				carousel.scrollLeft = cardWidth * numBooths;
				setTimeout(() => {
					isScrolling.current = false;
				}, 50);
			}
		};

		carousel.addEventListener('scroll', handleCarouselScroll);
		return () => carousel.removeEventListener('scroll', handleCarouselScroll);
	}, []);

	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const scrollCarousel = (direction) => {
		if (carouselRef.current) {
			const scrollAmount = 352; // card width (320px) + gap (32px)
			const currentScroll = carouselRef.current.scrollLeft;
			const targetScroll =
				direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount;

			carouselRef.current.scrollTo({
				left: targetScroll,
				behavior: 'smooth',
			});
		}
	};

	const teamMembers = [
		{
			id: 1,
			name: 'Sarah Johnson',
			role: 'Founder & Lead Photographer',
			bio: 'With over 10 years of experience in event photography, Sarah founded Noteworthy Photo Booths to bring joy and lasting memories to every celebration. Her passion for capturing authentic moments and creating unforgettable experiences drives everything we do.',
			image: '👩‍💼',
		},
		{
			id: 2,
			name: 'Mike Chen',
			role: 'Technical Director',
			bio: 'Mike ensures all our photo booth equipment runs flawlessly at every event. With a background in audio-visual technology and a keen eye for detail, he guarantees picture-perfect results every time.',
			image: '👨‍💻',
		},
		{
			id: 3,
			name: 'Emily Rodriguez',
			role: 'Event Coordinator',
			bio: 'Emily works closely with clients to customize every aspect of their photo booth experience. Her organizational skills and creative vision help bring each event to life exactly as imagined.',
			image: '👩‍🎨',
		},
		{
			id: 4,
			name: 'James Taylor',
			role: 'Booth Operator',
			bio: 'James keeps the energy high and guests smiling at every event. His friendly personality and technical expertise ensure everyone has a fantastic photo booth experience.',
			image: '👨‍🎤',
		},
	];

	const boothTypes = [
		{
			id: 1,
			name: 'Open-Air Photo Booth',
			description:
				'Perfect for larger groups and events where flexibility is key. Our open-air booths accommodate groups of any size and can be positioned anywhere at your venue.',
			features: [
				'Accommodates unlimited group sizes',
				'Professional DSLR camera',
				'Customizable backdrop options',
				'Perfect for high-traffic events',
			],
			icon: '📸',
		},
		{
			id: 2,
			name: '360 Photo Booth',
			description:
				'Create stunning slow-motion videos with our revolutionary 360-degree video booth. Guests stand on a platform while a camera rotates around them, capturing dynamic content perfect for social sharing.',
			features: [
				'Cinematic slow-motion video',
				'360-degree rotating camera',
				'Instant social media sharing',
				'Digital delivery only',
			],
			icon: '🎬',
		},
		{
			id: 3,
			name: 'Enclosed Photo Booth',
			description:
				'The classic photo booth experience with modern technology. Private, intimate space for smaller groups to let loose and have fun.',
			features: [
				'Private enclosed space',
				'Seats up to 6 people',
				'Vintage aesthetic with modern tech',
				'Instant print strips',
			],
			icon: '📦',
		},
		{
			id: 4,
			name: 'Selfie-Station Booth',
			description:
				'A compact, modern solution perfect for corporate events and smaller venues. Guests can take unlimited photos using a touchscreen interface.',
			features: [
				'Compact footprint',
				'Touchscreen interface',
				'Digital sharing options',
				'No instant prints',
			],
			icon: '🤳',
		},
		{
			id: 5,
			name: 'Mirror Photo Booth',
			description:
				'An interactive experience featuring a full-length mirror that comes alive with animations and prompts. Touch the mirror to take photos, sign your prints, and more.',
			features: [
				'Interactive touch mirror',
				'Full-length elegance',
				'Animated emoji stamps',
				'Digital signature capture',
			],
			icon: '🪞',
		},
	];

	const testimonials = [
		{
			id: 1,
			name: 'Jennifer Martinez',
			company: 'Nike',
			quote:
				'Noteworthy Photo Booths made our corporate event unforgettable! The 360 booth was a huge hit and the team was incredibly professional.',
			logo: '✓',
		},
		{
			id: 2,
			name: 'David Thompson',
			company: 'Intel',
			quote:
				'From setup to teardown, everything was seamless. Our employees are still talking about the mirror booth experience!',
			logo: '◉',
		},
		{
			id: 3,
			name: 'Amanda Lee',
			company: 'Adidas',
			quote:
				'The open-air booth was perfect for our product launch. High quality prints and excellent service throughout.',
			logo: '⚡',
		},
		{
			id: 4,
			name: 'Robert Kim',
			company: 'Columbia Sportswear',
			quote:
				'Best investment we made for our company party. The photo books are now treasured keepsakes for our team.',
			logo: '▲',
		},
	];

	const features = [
		{ icon: Clock, title: '3 Hours Photography', desc: 'Extended coverage time' },
		{ icon: Image, title: 'Instant 2x6" Prints', desc: 'Two prints per session' },
		{ icon: Users, title: 'Unlimited Sessions', desc: 'As many photos as you want' },
		{ icon: Sparkles, title: 'Props Included', desc: 'Fun accessories provided' },
		{ icon: Share2, title: 'Social Sharing', desc: 'Text or email instantly' },
		{ icon: Star, title: 'Custom Print Design', desc: 'Your assets or our templates' },
	];

	const photoBookDesigns = [
		{ id: 'bamboo-leaves', name: 'Bamboo Leaves', imageCount: 3 },
		{ id: 'best-day', name: 'Best Day', imageCount: 2 },
		{ id: 'box-modern', name: 'Box Modern', imageCount: 6 },
		{ id: 'city-skyline', name: 'City Skyline', imageCount: 2 },
		{ id: 'color-explosion', name: 'Color Explosion', imageCount: 6 },
		{ id: 'diamond-geo', name: 'Diamond Geo', imageCount: 6 },
		{ id: 'double-diamond', name: 'Double Diamond', imageCount: 6 },
		{ id: 'eat-drink-and-be-married', name: 'Eat Drink And Be Married', imageCount: 6 },
		{ id: 'endless-love', name: 'Endless Love', imageCount: 6 },
		{ id: 'eucalyptus', name: 'Eucalyptus', imageCount: 6 },
		{ id: 'feather-flowers', name: 'Feather Flowers', imageCount: 6 },
		{ id: 'floral-swirls', name: 'Floral Swirls', imageCount: 2 },
		{ id: 'geo-flowers', name: 'Geo Flowers', imageCount: 6 },
		{ id: 'geo-sparks', name: 'Geo Sparks', imageCount: 6 },
		{ id: 'hanging-sign', name: 'Hanging Sign', imageCount: 8 },
		{ id: 'heart-duo', name: 'Heart Duo', imageCount: 6 },
		{ id: 'keep-it-simple', name: 'Keep It Simple', imageCount: 6 },
		{ id: 'lace-design', name: 'Lace Design', imageCount: 6 },
		{ id: 'line-simple', name: 'Line Simple', imageCount: 6 },
		{ id: 'mums', name: 'Mums', imageCount: 2 },
		{ id: 'picture-frames', name: 'Picture Frames', imageCount: 6 },
		{ id: 'polka-dots', name: 'Polka Dots', imageCount: 6 },
		{ id: 'thistle-flower', name: 'Thistle Flower', imageCount: 6 },
		{ id: 'vintage-lanterns', name: 'Vintage Lanterns', imageCount: 6 },
		{ id: 'wildflower-stencil', name: 'Wildflower Stencil', imageCount: 6 },
	];

	return (
		<div
			style={{
				background: '#FAFAF8',
				minHeight: '100vh',
				fontFamily: 'system-ui, -apple-system, sans-serif',
			}}>
			<style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Shadows+Into+Light&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        .display-font {
          font-family: 'Montserrat', sans-serif;
        }

        .body-font {
          font-family: 'Montserrat', sans-serif;
        }

        .script-font {
          font-family: 'Shadows Into Light', cursive;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Hide scrollbar for carousel */
        .carousel-track::-webkit-scrollbar {
          display: none;
        }

        @keyframes logoScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-160px * 8 - 80px * 8));
          }
        }

        .logo-carousel {
          will-change: transform;
        }

        @keyframes parallaxFloat {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .parallax-bg {
          animation: parallaxFloat 20s ease-in-out infinite;
        }

        /* Features Carousel - Horizontal Scroll */
        .features-carousel {
          display: flex;
          gap: 24px;
        }

        .features-carousel::-webkit-scrollbar {
          display: none;
        }

        /* Desktop - 3 cards visible */
        .feature-card {
          min-width: calc((100% - 48px) / 3);
          max-width: calc((100% - 48px) / 3);
        }

        /* Tablet - 2 cards visible (even number) */
        @media (max-width: 968px) {
          .feature-card {
            min-width: calc((100% - 24px) / 2);
            max-width: calc((100% - 24px) / 2);
          }
        }

        /* Mobile - 2 cards visible (even number) */
        @media (max-width: 640px) {
          .feature-card {
            min-width: calc((100% - 24px) / 2);
            max-width: calc((100% - 24px) / 2);
          }
        }

        /* Small mobile - 2 cards still, but better fit */
        @media (max-width: 480px) {
          .feature-card {
            min-width: calc(50% - 12px);
            max-width: calc(50% - 12px);
          }
        }


        .animate-bounce {
          animation: bounce 2s ease-in-out infinite;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .nav-hidden {
          transform: translateY(-100%);
          opacity: 0;
        }

        .nav-visible {
          transform: translateY(0);
          opacity: 1;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(18, 18, 18, 0.85);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 24px;
          animation: fadeIn 0.2s ease-out;
        }

        .modal-content {
          background: #FAFAF8;
          border-radius: 16px;
          max-width: 600px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          animation: fadeIn 0.3s ease-out;
        }

        .btn-primary {
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          color: #FAFAF8;
          padding: 14px 32px;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(37, 99, 235, 0.4);
        }

        .btn-secondary {
          background: transparent;
          color: #121212;
          padding: 14px 32px;
          border: 2px solid #121212;
          border-radius: 8px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          background: #121212;
          color: #FAFAF8;
          transform: translateY(-2px);
        }

        .card-hover {
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
        }

        .section-padding {
          padding: 100px 24px;
        }

        /* Book With Confidence Badges - Even Numbers Per Row */
        .badges-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 32px;
        }

        @media (max-width: 1024px) {
          .badges-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .section-padding {
            padding: 60px 24px;
          }
          .badges-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
        }

        @media (max-width: 480px) {
          .badges-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        /* Mobile Navigation */
        @media (max-width: 968px) {
          .desktop-nav {
            display: none !important;
          }
          
          .mobile-menu-button {
            display: block !important;
          }
          
          .mobile-nav {
            display: flex !important;
          }
        }

        /* Google Maps responsive container */
        .map-container {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
        }

        .map-container iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }

        /* Contact Form Iframe Styling */
        .checkcherry-autoresize-frame {
          background: transparent !important;
        }

        /* Carousel Scroll Snap */
        .carousel-track {
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
        }

        .carousel-track::-webkit-scrollbar {
          display: none;
        }

        /* Responsive booth cards and carousel */
        @media (max-width: 768px) {
          .carousel-fade-overlay {
            display: none;
          }
          
          .section-heading-wrapper {
            max-width: 95% !important;
            padding: 0 12px;
          }
          
          .carousel-container {
            max-width: 100% !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          
          .carousel-arrow {
            width: 40px !important;
            height: 40px !important;
          }
          
          .carousel-arrow svg {
            width: 18px;
            height: 18px;
          }
          
          .booth-card {
            width: 85vw !important;
            min-width: 85vw !important;
            max-width: 85vw !important;
          }
        }

        @media (max-width: 480px) {
          .carousel-container {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          
          .carousel-arrow {
            width: 36px !important;
            height: 36px !important;
          }
          
          .booth-card {
            width: 88vw !important;
            min-width: 88vw !important;
            max-width: 88vw !important;
          }
        }

        /* Contact Form - Responsive Width */
        .contact-form-container {
          max-width: 900px;
        }

        @media (max-width: 968px) {
          .contact-form-container {
            width: 90% !important;
            padding: 40px 32px !important;
          }
        }

        @media (max-width: 640px) {
          .contact-form-container {
            width: 95% !important;
            padding: 32px 24px !important;
          }
        }

        /* Hero Mobile Image Setup:
           1. Add your mobile hero image to /public/hero-mobile.jpg
           2. Uncomment the CSS below (remove the /* and */ lines)
           3. Image will show on mobile (≤768px), video shows on desktop
           Recommended image size: 1080px wide × 1920px tall (portrait)
        */
        /*
        @media (max-width: 768px) {
          .hero-video {
            display: none;
          }
          .hero-mobile-image {
            display: block !important;
          }
        }
        */
      `}</style>

			{/* Sticky Navigation */}
			<nav
				className={`body-font ${navVisible ? 'nav-visible animate-slideDown' : 'nav-hidden'}`}
				style={{
					position: 'fixed',
					top: 0,
					left: 0,
					right: 0,
					background: 'rgba(250, 250, 248, 0.75)',
					backdropFilter: 'blur(12px)',
					borderBottom: '1px solid rgba(18, 18, 18, 0.08)',
					padding: '16px 24px',
					zIndex: 100,
					transition: 'transform 0.3s ease, opacity 0.3s ease',
				}}>
				<div
					style={{
						maxWidth: '1400px',
						margin: '0 auto',
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}>
					<div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
						<Camera size={28} color='#ff3a7c' strokeWidth={2.5} />
						<span style={{ fontSize: '20px', fontWeight: 600, color: '#121212' }}>
							Noteworthy Photo Booths
						</span>
					</div>

					{/* Desktop Navigation */}
					<div
						className='desktop-nav'
						style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
						<a
							onClick={() => scrollToSection('home')}
							style={{
								color: '#121212',
								fontWeight: 600,
								fontSize: '15px',
								textDecoration: 'none',
								cursor: 'pointer',
							}}>
							Home
						</a>
						<a
							onClick={() => scrollToSection('about')}
							style={{
								color: '#121212',
								fontWeight: 600,
								fontSize: '15px',
								textDecoration: 'none',
								cursor: 'pointer',
							}}>
							About
						</a>
						<a
							onClick={() => scrollToSection('team')}
							style={{
								color: '#121212',
								fontWeight: 600,
								fontSize: '15px',
								textDecoration: 'none',
								cursor: 'pointer',
							}}>
							Team
						</a>
						<a
							onClick={() => scrollToSection('booths')}
							style={{
								color: '#121212',
								fontWeight: 600,
								fontSize: '15px',
								textDecoration: 'none',
								cursor: 'pointer',
							}}>
							Booths
						</a>
						<a
							onClick={() => scrollToSection('contact')}
							style={{
								color: '#121212',
								fontWeight: 600,
								fontSize: '15px',
								textDecoration: 'none',
								cursor: 'pointer',
							}}>
							Contact
						</a>
						<a
							href='https://noteworthy-djs.checkcherry.com/users/sign_in'
							target='_blank'
							rel='noopener noreferrer'
							style={{
								color: '#121212',
								fontWeight: 600,
								fontSize: '15px',
								textDecoration: 'none',
							}}>
							Login
						</a>
						<button
							className='btn-primary'
							style={{ padding: '10px 24px', fontSize: '14px' }}
							onClick={() => scrollToSection('contact')}>
							Book Now
						</button>
					</div>

					{/* Mobile Hamburger Button */}
					<button
						className='mobile-menu-button'
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						style={{
							display: 'none',
							background: 'none',
							border: 'none',
							cursor: 'pointer',
							padding: '8px',
						}}>
						{mobileMenuOpen ? (
							<X size={28} color='#121212' strokeWidth={2} />
						) : (
							<Menu size={28} color='#121212' strokeWidth={2} />
						)}
					</button>
				</div>

				{/* Mobile Navigation Menu */}
				<div
					className={`mobile-nav ${mobileMenuOpen ? 'mobile-nav-open' : ''}`}
					style={{
						display: 'none',
						flexDirection: 'column',
						gap: '0',
						background: 'rgba(250, 250, 248, 0.98)',
						position: 'absolute',
						top: '100%',
						left: 0,
						right: 0,
						borderBottom: '1px solid rgba(18, 18, 18, 0.08)',
						maxHeight: mobileMenuOpen ? '500px' : '0',
						overflow: 'hidden',
						transition: 'max-height 0.3s ease',
					}}>
					<a
						onClick={() => {
							scrollToSection('home');
							setMobileMenuOpen(false);
						}}
						style={{
							color: '#121212',
							fontWeight: 600,
							fontSize: '16px',
							textDecoration: 'none',
							cursor: 'pointer',
							padding: '16px 24px',
							borderBottom: '1px solid rgba(18, 18, 18, 0.05)',
						}}>
						Home
					</a>
					<a
						onClick={() => {
							scrollToSection('about');
							setMobileMenuOpen(false);
						}}
						style={{
							color: '#121212',
							fontWeight: 600,
							fontSize: '16px',
							textDecoration: 'none',
							cursor: 'pointer',
							padding: '16px 24px',
							borderBottom: '1px solid rgba(18, 18, 18, 0.05)',
						}}>
						About
					</a>
					<a
						onClick={() => {
							scrollToSection('team');
							setMobileMenuOpen(false);
						}}
						style={{
							color: '#121212',
							fontWeight: 600,
							fontSize: '16px',
							textDecoration: 'none',
							cursor: 'pointer',
							padding: '16px 24px',
							borderBottom: '1px solid rgba(18, 18, 18, 0.05)',
						}}>
						Team
					</a>
					<a
						onClick={() => {
							scrollToSection('booths');
							setMobileMenuOpen(false);
						}}
						style={{
							color: '#121212',
							fontWeight: 600,
							fontSize: '16px',
							textDecoration: 'none',
							cursor: 'pointer',
							padding: '16px 24px',
							borderBottom: '1px solid rgba(18, 18, 18, 0.05)',
						}}>
						Booths
					</a>
					<a
						onClick={() => {
							scrollToSection('contact');
							setMobileMenuOpen(false);
						}}
						style={{
							color: '#121212',
							fontWeight: 600,
							fontSize: '16px',
							textDecoration: 'none',
							cursor: 'pointer',
							padding: '16px 24px',
							borderBottom: '1px solid rgba(18, 18, 18, 0.05)',
						}}>
						Contact
					</a>
					<a
						href='https://noteworthy-djs.checkcherry.com/users/sign_in'
						target='_blank'
						rel='noopener noreferrer'
						style={{
							color: '#121212',
							fontWeight: 600,
							fontSize: '16px',
							textDecoration: 'none',
							padding: '16px 24px',
							borderBottom: '1px solid rgba(18, 18, 18, 0.05)',
						}}>
						Login
					</a>
					<div style={{ padding: '16px 24px' }}>
						<button
							className='btn-primary'
							style={{ padding: '12px 24px', fontSize: '16px', width: '100%' }}
							onClick={() => {
								scrollToSection('contact');
								setMobileMenuOpen(false);
							}}>
							Book Now
						</button>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<section
				id='home'
				style={{
					minHeight: '100vh',
					background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					position: 'relative',
					overflow: 'hidden',
				}}>
				{/* Hero Video Background */}
				<video
					className='hero-video'
					autoPlay
					muted
					loop
					playsInline
					style={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						minWidth: '100%',
						minHeight: '100%',
						width: 'auto',
						height: 'auto',
						transform: 'translate(-50%, -50%)',
						objectFit: 'cover',
						zIndex: 0,
					}}>
					<source
						src={process.env.PUBLIC_URL + '/NWPB_Home_Page_Video_v3.webm'}
						type='video/webm'
					/>
				</video>

				{/* Hero Mobile Background Image - Hidden by default, shown on mobile when you add image */}
				<div
					className='hero-mobile-image'
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundImage: `url(${process.env.PUBLIC_URL}/hero-mobile.jpg)`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						zIndex: 0,
						display: 'none',
					}}
				/>

				{/* Overlay */}
				<div
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						background:
							'linear-gradient(135deg, rgba(255, 58, 124, 0.15) 0%, rgba(18, 18, 18, 0.5) 100%)',
						zIndex: 1,
					}}
				/>

				<div
					style={{
						position: 'relative',
						zIndex: 2,
						textAlign: 'center',
						maxWidth: '1000px',
						padding: '24px',
					}}>
					{/* Frosted Glass Container */}
					<div
						style={{
							background: 'rgba(18, 18, 18, 0.4)',
							backdropFilter: 'blur(20px)',
							WebkitBackdropFilter: 'blur(20px)',
							borderRadius: '48px',
							padding: '60px 48px',
							border: '1px solid rgba(250, 250, 248, 0.1)',
							boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
						}}>
						<div style={{ marginBottom: '24px' }}>
							<Camera size={64} color='#ff3a7c' strokeWidth={2} />
						</div>
						<h1
							className='display-font animate-fadeIn'
							style={{
								fontSize: 'clamp(48px, 8vw, 86px)',
								fontWeight: 600,
								color: '#FAFAF8',
								marginBottom: '24px',
								lineHeight: 1.1,
							}}>
							Noteworthy
							<span
								style={{
									display: 'block',
									background: 'linear-gradient(135deg, #ff3a7c 0%, #ff5c94 100%)',
									WebkitBackgroundClip: 'text',
									WebkitTextFillColor: 'transparent',
								}}>
								Photo Booths
							</span>
						</h1>
						<p
							className='script-font animate-fadeIn'
							style={{
								fontSize: '28px',
								color: '#ff5c94',
								marginBottom: '24px',
								animationDelay: '0.1s',
								opacity: 0,
								animation: 'fadeIn 0.6s ease-out 0.1s forwards',
							}}>
							Creating unforgettable moments
						</p>
						<p
							className='body-font animate-fadeIn'
							style={{
								fontSize: '20px',
								color: 'rgba(250, 250, 248, 0.95)',
								marginBottom: '40px',
								lineHeight: 1.6,
								animationDelay: '0.2s',
								opacity: 0,
								animation: 'fadeIn 0.6s ease-out 0.2s forwards',
							}}>
							Professional photo booth experiences for weddings, corporate events, and celebrations
							across Portland.
						</p>
						<div
							style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
							<button
								className='btn-primary'
								style={{ fontSize: '18px', padding: '16px 40px' }}
								onClick={() => scrollToSection('booths')}>
								Explore Booths
							</button>
							<button
								className='btn-secondary'
								style={{
									borderColor: '#FAFAF8',
									color: '#FAFAF8',
									fontSize: '18px',
									padding: '16px 40px',
								}}
								onClick={() => scrollToSection('contact')}>
								Get in Touch
							</button>
						</div>
					</div>
				</div>

				{/* Scroll Indicator */}
				<div
					style={{
						position: 'absolute',
						bottom: '40px',
						right: '40px',
						zIndex: 3,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						gap: '8px',
					}}>
					<span
						className='body-font'
						style={{
							color: 'rgba(250, 250, 248, 0.7)',
							fontSize: '14px',
							fontWeight: 600,
							letterSpacing: '1px',
						}}>
						SCROLL
					</span>
					<div className='animate-bounce'>
						<ChevronDown size={28} color='#ff3a7c' strokeWidth={3} />
					</div>
				</div>
			</section>

			{/* About Us Section */}
			<section
				id='about'
				className='section-padding'
				style={{
					background: '#FFFFFF',
				}}>
				<div style={{ maxWidth: '1200px', margin: '0 auto' }}>
					<div style={{ textAlign: 'center', marginBottom: '64px' }}>
						<p
							className='script-font'
							style={{
								fontSize: '24px',
								color: '#ff3a7c',
								marginBottom: '12px',
							}}>
							Who we are
						</p>
						<h2
							className='display-font'
							style={{
								fontSize: 'clamp(36px, 6vw, 56px)',
								fontWeight: 600,
								color: '#121212',
								marginBottom: '16px',
							}}>
							About Us
						</h2>
					</div>

					<div
						style={{
							display: 'grid',
							gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
							gap: '48px',
							marginBottom: '64px',
						}}>
						<div>
							<h3
								className='display-font'
								style={{
									fontSize: '28px',
									fontWeight: 600,
									color: '#121212',
									marginBottom: '24px',
								}}>
								Our Story
							</h3>
							<p
								className='body-font'
								style={{
									fontSize: '17px',
									color: '#555555',
									lineHeight: 1.8,
								}}>
								Noteworthy Photo Booths is Portland's premier photo booth rental company, dedicated
								to creating unforgettable memories for your special events. With years of experience
								in the entertainment industry, we combine cutting-edge technology with exceptional
								service to deliver an experience your guests will love.
							</p>
						</div>

						<div>
							<h3
								className='display-font'
								style={{
									fontSize: '28px',
									fontWeight: 600,
									color: '#121212',
									marginBottom: '24px',
								}}>
								Our Mission
							</h3>
							<p
								className='body-font'
								style={{
									fontSize: '17px',
									color: '#555555',
									lineHeight: 1.8,
								}}>
								We believe every event deserves to be memorable. Our mission is to provide
								top-quality photo booth experiences that bring joy, laughter, and lasting memories
								to weddings, corporate events, and celebrations throughout the Pacific Northwest.
							</p>
						</div>
					</div>

					<div
						style={{
							background: '#FAF8FC',
							borderRadius: '24px',
							padding: '48px',
							border: '1px solid rgba(18, 18, 18, 0.05)',
						}}>
						<h3
							className='display-font'
							style={{
								fontSize: '28px',
								fontWeight: 600,
								color: '#121212',
								marginBottom: '32px',
								textAlign: 'center',
							}}>
							Why Choose Us?
						</h3>
						<div
							style={{
								display: 'grid',
								gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
								gap: '32px',
							}}>
							{[
								{
									icon: '⚡',
									title: 'Fast Setup',
									desc: 'Professional setup and breakdown included',
								},
								{ icon: '🎨', title: 'Custom Designs', desc: 'Personalized prints and backdrops' },
								{
									icon: '📸',
									title: 'High Quality',
									desc: 'Professional DSLR cameras and lighting',
								},
								{
									icon: '🎉',
									title: 'Unlimited Prints',
									desc: 'No limits on photos during your event',
								},
							].map((item, idx) => (
								<div key={idx} style={{ textAlign: 'center' }}>
									<div style={{ fontSize: '48px', marginBottom: '16px' }}>{item.icon}</div>
									<h4
										className='display-font'
										style={{
											fontSize: '20px',
											fontWeight: 600,
											color: '#121212',
											marginBottom: '8px',
										}}>
										{item.title}
									</h4>
									<p
										className='body-font'
										style={{
											fontSize: '15px',
											color: '#555555',
											lineHeight: 1.6,
										}}>
										{item.desc}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Photo Booth Types - Carousel */}
			<section
				id='booths'
				className='section-padding'
				style={{
					background: '#FFF7E6',
					overflow: 'hidden',
				}}>
				<div
					style={{ maxWidth: '80%', margin: '0 auto', marginBottom: '64px' }}
					className='section-heading-wrapper'>
					<div style={{ textAlign: 'center' }}>
						<p
							className='script-font'
							style={{
								fontSize: '24px',
								color: '#ff3a7c',
								marginBottom: '12px',
							}}>
							Choose your perfect booth
						</p>
						<h2
							className='display-font'
							style={{
								fontSize: 'clamp(36px, 6vw, 56px)',
								fontWeight: 600,
								color: '#121212',
								marginBottom: '16px',
							}}>
							Our Photo Booths
						</h2>
						<p
							className='body-font'
							style={{
								fontSize: '18px',
								color: '#555555',
								maxWidth: '700px',
								margin: '0 auto',
							}}>
							Choose from our diverse selection of photo booth experiences, each designed to create
							lasting memories for your guests
						</p>
					</div>
				</div>

				{/* Carousel Container */}
				<div
					style={{
						position: 'relative',
						paddingLeft: '24px',
						paddingRight: '24px',
						maxWidth: '80%',
						margin: '0 auto',
					}}
					className='carousel-container'>
					{/* Left Arrow */}
					<button
						onClick={() => scrollCarousel('left')}
						className='carousel-arrow'
						style={{
							position: 'absolute',
							left: '0',
							top: '50%',
							transform: 'translateY(-50%)',
							zIndex: 20,
							width: '56px',
							height: '56px',
							borderRadius: '50%',
							background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
							border: 'none',
							boxShadow: '0 4px 16px rgba(37, 99, 235, 0.4)',
							cursor: 'pointer',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							transition: 'all 0.3s ease',
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
							e.currentTarget.style.boxShadow = '0 6px 24px rgba(37, 99, 235, 0.5)';
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
							e.currentTarget.style.boxShadow = '0 4px 16px rgba(37, 99, 235, 0.4)';
						}}>
						<svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='#FAFAF8'
							strokeWidth='3'
							strokeLinecap='round'
							strokeLinejoin='round'>
							<polyline points='15 18 9 12 15 6'></polyline>
						</svg>
					</button>

					{/* Right Arrow */}
					<button
						onClick={() => scrollCarousel('right')}
						className='carousel-arrow'
						style={{
							position: 'absolute',
							right: '0',
							top: '50%',
							transform: 'translateY(-50%)',
							zIndex: 20,
							width: '56px',
							height: '56px',
							borderRadius: '50%',
							background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
							border: 'none',
							boxShadow: '0 4px 16px rgba(37, 99, 235, 0.4)',
							cursor: 'pointer',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							transition: 'all 0.3s ease',
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
							e.currentTarget.style.boxShadow = '0 6px 24px rgba(37, 99, 235, 0.5)';
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
							e.currentTarget.style.boxShadow = '0 4px 16px rgba(37, 99, 235, 0.4)';
						}}>
						<svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='#FAFAF8'
							strokeWidth='3'
							strokeLinecap='round'
							strokeLinejoin='round'>
							<polyline points='9 18 15 12 9 6'></polyline>
						</svg>
					</button>

					{/* Carousel Track Wrapper - clips partial cards */}
					<div
						style={{
							overflow: 'hidden',
							position: 'relative',
						}}>
						{/* Right edge fade to cover partial cards */}
						<div
							className='carousel-fade-overlay'
							style={{
								position: 'absolute',
								top: 0,
								right: 0,
								width: '150px',
								height: '100%',
								background: 'linear-gradient(to left, #FFF7E6 0%, transparent 100%)',
								pointerEvents: 'none',
								zIndex: 10,
							}}
						/>

						<div
							ref={carouselRef}
							className='carousel-track'
							style={{
								display: 'flex',
								gap: '32px',
								overflowX: 'scroll',
								scrollBehavior: 'smooth',
								scrollbarWidth: 'none',
								msOverflowStyle: 'none',
								WebkitOverflowScrolling: 'touch',
								scrollSnapType: 'x mandatory',
								paddingRight: '200px',
							}}>
							{/* Render booths 3 times for infinite scroll */}
							{[...boothTypes, ...boothTypes, ...boothTypes].map((booth, index) => (
								<div
									key={`booth-${booth.id}-${index}`}
									className='booth-card'
									style={{
										background: '#FFFFFF',
										borderRadius: '20px',
										padding: '32px 24px',
										border: '1px solid rgba(18, 18, 18, 0.1)',
										boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
										transition: 'all 0.3s ease',
										width: '320px',
										minWidth: '320px',
										maxWidth: '320px',
										flexShrink: 0,
										display: 'flex',
										flexDirection: 'column',
										scrollSnapAlign: 'start',
									}}>
									<div
										style={{
											fontSize: '56px',
											marginBottom: '20px',
											textAlign: 'center',
										}}>
										{booth.icon}
									</div>
									<h3
										className='display-font'
										style={{
											fontSize: '24px',
											fontWeight: 600,
											color: '#121212',
											marginBottom: '12px',
											textAlign: 'center',
										}}>
										{booth.name}
									</h3>
									<p
										className='body-font'
										style={{
											fontSize: '15px',
											color: '#555555',
											lineHeight: 1.6,
											marginBottom: '20px',
											textAlign: 'center',
											flexGrow: 1,
										}}>
										{booth.description}
									</p>
									<div
										style={{
											display: 'flex',
											display: 'flex',
											gap: '8px',
											marginTop: 'auto',
										}}>
										<button
											className='btn-primary'
											style={{
												flex: 1,
												justifyContent: 'center',
												fontSize: '14px',
												padding: '12px 16px',
											}}
											onClick={() => scrollToSection('contact')}>
											Book Now
										</button>
										<button
											className='btn-secondary'
											style={{ flex: 1, fontSize: '14px', padding: '12px 16px' }}
											onClick={() => setActiveBoothModal(booth)}>
											More Info
										</button>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Photo Books Section */}
			<section className='section-padding' style={{ background: '#FAFAF8' }}>
				<div style={{ maxWidth: '1400px', margin: '0 auto' }}>
					<div style={{ textAlign: 'center', marginBottom: '64px' }}>
						<p
							className='script-font'
							style={{
								fontSize: '24px',
								color: '#ff3a7c',
								marginBottom: '12px',
							}}>
							Preserve your memories
						</p>
						<h2
							className='display-font'
							style={{
								fontSize: 'clamp(36px, 6vw, 56px)',
								fontWeight: 600,
								color: '#121212',
								marginBottom: '16px',
							}}>
							Photo Book Designs
						</h2>
						<p
							className='body-font'
							style={{
								fontSize: '18px',
								color: '#555555',
								maxWidth: '700px',
								margin: '0 auto',
							}}>
							Choose from 25 beautiful designs for your custom photo book. Each design includes
							multiple layout options to showcase your event memories.
						</p>
					</div>

					{/* Photo Book Grid */}
					<div
						style={{
							display: 'grid',
							gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
							gap: '24px',
						}}>
						{photoBookDesigns.map((design, idx) => (
							<div
								key={idx}
								onClick={() => {
									setPhotoBookGallery(design);
									setCurrentPhotoBookImage(0);
								}}
								style={{
									background: '#FFFFFF',
									borderRadius: '12px',
									overflow: 'hidden',
									cursor: 'pointer',
									border: '1px solid rgba(18, 18, 18, 0.1)',
									boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
									transition: 'all 0.3s ease',
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.transform = 'translateY(-4px)';
									e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.transform = 'translateY(0)';
									e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
								}}>
								{/* Thumbnail Image */}
								<div
									style={{
										width: '100%',
										height: '200px',
										background: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										overflow: 'hidden',
									}}>
									<img
										src={`${process.env.PUBLIC_URL}/photo-books/${design.id}-1.webp`}
										alt={design.name}
										style={{
											width: '100%',
											height: '100%',
											objectFit: 'cover',
										}}
										onError={(e) => {
											e.target.style.display = 'none';
											e.target.parentElement.innerHTML =
												'<div style="color: #999; font-size: 14px;">Preview Coming Soon</div>';
										}}
									/>
								</div>

								{/* Design Info */}
								<div style={{ padding: '20px' }}>
									<h3
										className='body-font'
										style={{
											fontSize: '18px',
											fontWeight: 600,
											color: '#121212',
											marginBottom: '8px',
										}}>
										{design.name}
									</h3>
									<p
										className='body-font'
										style={{
											fontSize: '14px',
											color: '#666666',
										}}>
										{design.imageCount} layout{design.imageCount !== 1 ? 's' : ''}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Photo Book Gallery Modal */}
			{photoBookGallery && (
				<div
					style={{
						position: 'fixed',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						background: 'rgba(0, 0, 0, 0.95)',
						zIndex: 1000,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						padding: '20px',
					}}
					onClick={() => setPhotoBookGallery(null)}>
					<div
						style={{
							position: 'relative',
							maxWidth: '1200px',
							width: '100%',
							maxHeight: '90vh',
						}}
						onClick={(e) => e.stopPropagation()}>
						{/* Close Button */}
						<button
							onClick={() => setPhotoBookGallery(null)}
							style={{
								position: 'absolute',
								top: '-50px',
								right: '0',
								background: 'transparent',
								border: 'none',
								color: '#FFFFFF',
								fontSize: '40px',
								cursor: 'pointer',
								zIndex: 1001,
								width: '50px',
								height: '50px',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}>
							<X size={32} />
						</button>

						{/* Design Title */}
						<div
							style={{
								position: 'absolute',
								top: '-50px',
								left: '0',
								color: '#FFFFFF',
								fontSize: '24px',
								fontWeight: 600,
							}}>
							{photoBookGallery.name}
						</div>

						{/* Main Image */}
						<div
							style={{
								background: '#FFFFFF',
								borderRadius: '8px',
								overflow: 'hidden',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								maxHeight: '80vh',
							}}>
							<img
								src={`${process.env.PUBLIC_URL}/photo-books/${photoBookGallery.id}-${currentPhotoBookImage + 1}.webp`}
								alt={`${photoBookGallery.name} layout ${currentPhotoBookImage + 1}`}
								style={{
									maxWidth: '100%',
									maxHeight: '80vh',
									objectFit: 'contain',
								}}
							/>
						</div>

						{/* Navigation Arrows */}
						{currentPhotoBookImage > 0 && (
							<button
								onClick={() => setCurrentPhotoBookImage(currentPhotoBookImage - 1)}
								style={{
									position: 'absolute',
									left: '20px',
									top: '50%',
									transform: 'translateY(-50%)',
									background: 'rgba(255, 255, 255, 0.9)',
									border: 'none',
									borderRadius: '50%',
									width: '50px',
									height: '50px',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									cursor: 'pointer',
									boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
									zIndex: 1001,
								}}>
								<ChevronDown size={28} style={{ transform: 'rotate(90deg)', color: '#121212' }} />
							</button>
						)}

						{currentPhotoBookImage < photoBookGallery.imageCount - 1 && (
							<button
								onClick={() => setCurrentPhotoBookImage(currentPhotoBookImage + 1)}
								style={{
									position: 'absolute',
									right: '20px',
									top: '50%',
									transform: 'translateY(-50%)',
									background: 'rgba(255, 255, 255, 0.9)',
									border: 'none',
									borderRadius: '50%',
									width: '50px',
									height: '50px',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									cursor: 'pointer',
									boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
									zIndex: 1001,
								}}>
								<ChevronDown size={28} style={{ transform: 'rotate(-90deg)', color: '#121212' }} />
							</button>
						)}

						{/* Image Counter */}
						<div
							style={{
								position: 'absolute',
								bottom: '-40px',
								left: '50%',
								transform: 'translateX(-50%)',
								color: '#FFFFFF',
								fontSize: '16px',
								background: 'rgba(0, 0, 0, 0.5)',
								padding: '8px 16px',
								borderRadius: '20px',
							}}>
							{currentPhotoBookImage + 1} / {photoBookGallery.imageCount}
						</div>

						{/* Thumbnail Strip */}
						<div
							style={{
								position: 'absolute',
								bottom: '-120px',
								left: '50%',
								transform: 'translateX(-50%)',
								display: 'flex',
								gap: '12px',
								maxWidth: '100%',
								overflowX: 'auto',
								padding: '10px',
							}}>
							{Array.from({ length: photoBookGallery.imageCount }).map((_, idx) => (
								<div
									key={idx}
									onClick={() => setCurrentPhotoBookImage(idx)}
									style={{
										width: '80px',
										height: '60px',
										borderRadius: '4px',
										overflow: 'hidden',
										cursor: 'pointer',
										border:
											currentPhotoBookImage === idx ? '3px solid #ff3a7c' : '3px solid transparent',
										opacity: currentPhotoBookImage === idx ? 1 : 0.6,
										transition: 'all 0.3s ease',
										flexShrink: 0,
									}}>
									<img
										src={`${process.env.PUBLIC_URL}/photo-books/${photoBookGallery.id}-${idx + 1}.webp`}
										alt={`Thumbnail ${idx + 1}`}
										style={{
											width: '100%',
											height: '100%',
											objectFit: 'cover',
										}}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			)}

			{/* Backdrops Section */}
			<section
				className='section-padding'
				style={{
					background: '#F0F4FF',
					position: 'relative',
				}}>
				<div style={{ maxWidth: '1400px', margin: '0 auto' }}>
					<div style={{ textAlign: 'center', marginBottom: '64px' }}>
						<p
							className='script-font'
							style={{
								fontSize: '24px',
								color: '#ff3a7c',
								marginBottom: '12px',
							}}>
							Complete the look
						</p>
						<h2
							className='display-font'
							style={{
								fontSize: 'clamp(36px, 6vw, 56px)',
								fontWeight: 600,
								color: '#121212',
								marginBottom: '16px',
							}}>
							Backdrop Options
						</h2>
						<p
							className='body-font'
							style={{
								fontSize: '18px',
								color: '#555555',
								maxWidth: '700px',
								margin: '0 auto',
							}}>
							Elevate your photo booth experience with our selection of professional backdrops
						</p>
					</div>

					<div
						style={{
							display: 'grid',
							gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
							gap: '48px',
							maxWidth: '1200px',
							margin: '0 auto',
						}}>
						{/* Standard Backdrops */}
						<div
							style={{
								background: '#FFFFFF',
								borderRadius: '24px',
								overflow: 'hidden',
								border: '1px solid rgba(18, 18, 18, 0.1)',
								boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
								transition: 'all 0.3s ease',
								display: 'flex',
								flexDirection: 'column',
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.transform = 'translateY(-8px)';
								e.currentTarget.style.boxShadow = '0 16px 40px rgba(0, 0, 0, 0.12)';
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.transform = 'translateY(0)';
								e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.08)';
							}}>
							{/* Placeholder Image */}
							<div
								style={{
									height: '300px',
									background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									fontSize: '80px',
									position: 'relative',
									overflow: 'hidden',
								}}>
								<div
									style={{
										position: 'absolute',
										top: 0,
										left: 0,
										right: 0,
										bottom: 0,
										opacity: 0.1,
										fontSize: '60px',
										display: 'grid',
										gridTemplateColumns: 'repeat(4, 1fr)',
										gap: '20px',
										padding: '20px',
									}}>
									{[...Array(12)].map((_, i) => (
										<div key={i}>🎨</div>
									))}
								</div>
								<div style={{ position: 'relative', zIndex: 1, opacity: 0.9 }}>🎭</div>
							</div>

							<div
								style={{ padding: '32px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
								<h3
									className='display-font'
									style={{
										fontSize: '32px',
										fontWeight: 600,
										color: '#121212',
										marginBottom: '16px',
									}}>
									Standard Backdrops
								</h3>
								<p
									className='body-font'
									style={{
										fontSize: '16px',
										color: '#555555',
										lineHeight: 1.7,
										marginBottom: '24px',
										flexGrow: 1,
									}}>
									Classic solid color backdrops perfect for any event. Choose from our wide
									selection of colors to match your event theme.
								</p>
								<ul
									style={{
										listStyle: 'none',
										padding: 0,
										marginBottom: '32px',
									}}>
									{[
										'Wide color selection',
										'Professional wrinkle-free material',
										'Easy to match theme',
										'Included with booth rental',
									].map((feature, idx) => (
										<li
											key={idx}
											style={{
												display: 'flex',
												alignItems: 'center',
												gap: '12px',
												marginBottom: '12px',
											}}>
											<div
												style={{
													width: '24px',
													height: '24px',
													background: 'linear-gradient(135deg, #ff3a7c 0%, #ff5c94 100%)',
													borderRadius: '50%',
													display: 'flex',
													alignItems: 'center',
													justifyContent: 'center',
													flexShrink: 0,
												}}>
												<span style={{ color: '#FAFAF8', fontWeight: 'bold', fontSize: '14px' }}>
													✓
												</span>
											</div>
											<span className='body-font' style={{ color: '#555555', fontSize: '15px' }}>
												{feature}
											</span>
										</li>
									))}
								</ul>
								<button
									className='btn-primary'
									style={{ width: '100%', justifyContent: 'center', fontSize: '16px' }}
									onClick={() => scrollToSection('contact')}>
									Learn More
								</button>
							</div>
						</div>

						{/* Premium Backdrops */}
						<div
							style={{
								background: '#FFFFFF',
								borderRadius: '24px',
								overflow: 'hidden',
								border: '2px solid #2563eb',
								boxShadow: '0 8px 24px rgba(37, 99, 235, 0.2)',
								transition: 'all 0.3s ease',
								position: 'relative',
								display: 'flex',
								flexDirection: 'column',
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.transform = 'translateY(-8px)';
								e.currentTarget.style.boxShadow = '0 16px 40px rgba(37, 99, 235, 0.3)';
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.transform = 'translateY(0)';
								e.currentTarget.style.boxShadow = '0 8px 24px rgba(37, 99, 235, 0.2)';
							}}>
							{/* Popular Badge */}
							<div
								className='body-font'
								style={{
									position: 'absolute',
									top: '20px',
									right: '20px',
									background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
									color: '#FAFAF8',
									padding: '8px 20px',
									borderRadius: '20px',
									fontSize: '13px',
									fontWeight: 700,
									letterSpacing: '0.5px',
									zIndex: 5,
									boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
								}}>
								POPULAR
							</div>

							{/* Placeholder Image */}
							<div
								style={{
									height: '300px',
									background: 'linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									fontSize: '80px',
									position: 'relative',
									overflow: 'hidden',
								}}>
								<div
									style={{
										position: 'absolute',
										top: 0,
										left: 0,
										right: 0,
										bottom: 0,
										opacity: 0.2,
										fontSize: '40px',
										display: 'grid',
										gridTemplateColumns: 'repeat(6, 1fr)',
										gap: '10px',
										padding: '10px',
									}}>
									{[...Array(24)].map((_, i) => (
										<div key={i}>✨</div>
									))}
								</div>
								<div style={{ position: 'relative', zIndex: 1, opacity: 0.9 }}>✨</div>
							</div>

							<div
								style={{ padding: '32px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
								<h3
									className='display-font'
									style={{
										fontSize: '32px',
										fontWeight: 600,
										color: '#121212',
										marginBottom: '16px',
									}}>
									Premium Sequin
								</h3>
								<p
									className='body-font'
									style={{
										fontSize: '16px',
										color: '#555555',
										lineHeight: 1.7,
										marginBottom: '24px',
										flexGrow: 1,
									}}>
									Stunning sequin backdrops that shimmer and shine. Perfect for adding glamour and
									elegance to your photos.
								</p>
								<ul
									style={{
										listStyle: 'none',
										padding: 0,
										marginBottom: '32px',
									}}>
									{[
										'Shimmering sequin material',
										'Multiple metallic colors',
										'Creates stunning photos',
										'Popular for weddings & events',
									].map((feature, idx) => (
										<li
											key={idx}
											style={{
												display: 'flex',
												alignItems: 'center',
												gap: '12px',
												marginBottom: '12px',
											}}>
											<div
												style={{
													width: '24px',
													height: '24px',
													background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
													borderRadius: '50%',
													display: 'flex',
													alignItems: 'center',
													justifyContent: 'center',
													flexShrink: 0,
												}}>
												<span style={{ color: '#FAFAF8', fontWeight: 'bold', fontSize: '14px' }}>
													✓
												</span>
											</div>
											<span className='body-font' style={{ color: '#555555', fontSize: '15px' }}>
												{feature}
											</span>
										</li>
									))}
								</ul>
								<button
									className='btn-primary'
									style={{ width: '100%', justifyContent: 'center', fontSize: '16px' }}
									onClick={() => scrollToSection('contact')}>
									Learn More
								</button>
							</div>
						</div>

						{/* Custom Backdrops */}
						<div
							style={{
								background: '#FFFFFF',
								borderRadius: '24px',
								overflow: 'hidden',
								border: '1px solid rgba(18, 18, 18, 0.1)',
								boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
								transition: 'all 0.3s ease',
								display: 'flex',
								flexDirection: 'column',
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.transform = 'translateY(-8px)';
								e.currentTarget.style.boxShadow = '0 16px 40px rgba(0, 0, 0, 0.12)';
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.transform = 'translateY(0)';
								e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.08)';
							}}>
							{/* Placeholder Image */}
							<div
								style={{
									height: '300px',
									background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									fontSize: '80px',
									position: 'relative',
									overflow: 'hidden',
								}}>
								<div
									style={{
										position: 'absolute',
										top: 0,
										left: 0,
										right: 0,
										bottom: 0,
										opacity: 0.1,
										fontSize: '60px',
										display: 'flex',
										flexWrap: 'wrap',
										gap: '30px',
										padding: '20px',
									}}>
									{[...Array(8)].map((_, i) => (
										<div key={i}>🎨</div>
									))}
								</div>
								<div style={{ position: 'relative', zIndex: 1, opacity: 0.9 }}>🖼️</div>
							</div>

							<div
								style={{ padding: '32px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
								<h3
									className='display-font'
									style={{
										fontSize: '32px',
										fontWeight: 600,
										color: '#121212',
										marginBottom: '16px',
									}}>
									Custom Designs
								</h3>
								<p
									className='body-font'
									style={{
										fontSize: '16px',
										color: '#555555',
										lineHeight: 1.7,
										marginBottom: '24px',
										flexGrow: 1,
									}}>
									Fully customized backdrops designed specifically for your event. Add your logo,
									branding, or themed designs.
								</p>
								<ul
									style={{
										listStyle: 'none',
										padding: 0,
										marginBottom: '32px',
									}}>
									{[
										'Fully custom designs',
										'Your logos & branding',
										'Themed artwork',
										'Professional printing',
									].map((feature, idx) => (
										<li
											key={idx}
											style={{
												display: 'flex',
												alignItems: 'center',
												gap: '12px',
												marginBottom: '12px',
											}}>
											<div
												style={{
													width: '24px',
													height: '24px',
													background: 'linear-gradient(135deg, #ff3a7c 0%, #ff5c94 100%)',
													borderRadius: '50%',
													display: 'flex',
													alignItems: 'center',
													justifyContent: 'center',
													flexShrink: 0,
												}}>
												<span style={{ color: '#FAFAF8', fontWeight: 'bold', fontSize: '14px' }}>
													✓
												</span>
											</div>
											<span className='body-font' style={{ color: '#555555', fontSize: '15px' }}>
												{feature}
											</span>
										</li>
									))}
								</ul>
								<button
									className='btn-primary'
									style={{ width: '100%', justifyContent: 'center', fontSize: '16px' }}
									onClick={() => scrollToSection('contact')}>
									Learn More
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Parallax Divider */}
			<section
				style={{
					height: '300px',
					background: 'linear-gradient(135deg, #ff3a7c 20%, #2563eb 80%)',
					position: 'relative',
					overflow: 'hidden',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}>
				{/* Animated Pattern */}
				<div
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
            radial-gradient(circle at 80% 50%, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
          `,
						backgroundSize: '50px 50px',
						opacity: 0.5,
						transform: 'translateZ(0)',
						willChange: 'transform',
					}}
					className='parallax-bg'
				/>

				{/* Decorative Elements */}
				<div
					style={{
						position: 'relative',
						zIndex: 1,
						fontSize: '80px',
						opacity: 0.15,
						display: 'flex',
						gap: '40px',
						animation: 'float 4s ease-in-out infinite',
					}}>
					<span>📸</span>
					<span>🎉</span>
					<span>✨</span>
				</div>
			</section>
			{/* Team Section */}
			<section id='team' className='section-padding' style={{ background: '#F0F4FF' }}>
				<div style={{ maxWidth: '1400px', margin: '0 auto' }}>
					<div style={{ textAlign: 'center', marginBottom: '64px' }}>
						<p
							className='script-font'
							style={{
								fontSize: '24px',
								color: '#ff3a7c',
								marginBottom: '12px',
							}}>
							The faces behind the fun
						</p>
						<h2
							className='display-font'
							style={{
								fontSize: 'clamp(36px, 6vw, 56px)',
								fontWeight: 600,
								color: '#121212',
								marginBottom: '16px',
							}}>
							Meet the Team
						</h2>
						<p
							className='body-font'
							style={{
								fontSize: '18px',
								color: '#555555',
								maxWidth: '600px',
								margin: '0 auto',
							}}>
							The passionate professionals behind every memorable event
						</p>
					</div>

					<div
						style={{
							display: 'grid',
							gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
							gap: '32px',
						}}>
						{teamMembers.map((member) => (
							<div
								key={member.id}
								className='card-hover'
								onClick={() => setActiveModal(member)}
								style={{
									background: '#FFFFFF',
									borderRadius: '16px',
									padding: '32px',
									textAlign: 'center',
									border: '1px solid rgba(18, 18, 18, 0.1)',
									boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
								}}>
								<div
									style={{
										width: '120px',
										height: '120px',
										background: 'linear-gradient(135deg, #ff3a7c 0%, #ff5c94 100%)',
										borderRadius: '50%',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										margin: '0 auto 24px',
										fontSize: '60px',
										boxShadow: '0 8px 24px rgba(255, 58, 124, 0.25)',
									}}>
									{member.image}
								</div>
								<h3
									className='display-font'
									style={{
										fontSize: '24px',
										fontWeight: 600,
										color: '#121212',
										marginBottom: '8px',
									}}>
									{member.name}
								</h3>
								<p
									className='body-font'
									style={{
										fontSize: '16px',
										color: '#ff3a7c',
										fontWeight: 600,
										marginBottom: '16px',
									}}>
									{member.role}
								</p>
								<button
									className='btn-secondary'
									style={{
										fontSize: '14px',
										padding: '10px 24px',
										width: '100%',
									}}>
									Read Bio
								</button>
							</div>
						))}
					</div>
				</div>
			</section>
			{/* Features Section */}
			<section
				className='section-padding'
				style={{
					background: '#FFF5F9',
					position: 'relative',
					overflow: 'hidden',
				}}>
				{/* Parallax Background Pattern */}
				<div
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundImage: `radial-gradient(circle, rgba(251, 191, 36, 0.15) 2px, transparent 2px)`,
						backgroundSize: '40px 40px',
						backgroundPosition: '0 0, 20px 20px',
						opacity: 0.4,
						transform: 'translateZ(0)',
						willChange: 'transform',
					}}
					className='parallax-bg'
				/>

				<div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
					<div style={{ textAlign: 'center', marginBottom: '64px' }}>
						<p
							className='script-font'
							style={{
								fontSize: '24px',
								color: '#ff3a7c',
								marginBottom: '12px',
							}}>
							Everything you need & more
						</p>
						<h2
							className='display-font'
							style={{
								fontSize: 'clamp(36px, 6vw, 56px)',
								fontWeight: 600,
								color: '#121212',
								marginBottom: '16px',
							}}>
							What's Included
						</h2>
						<p
							className='body-font'
							style={{
								fontSize: '18px',
								color: '#555555',
								maxWidth: '700px',
								margin: '0 auto',
							}}>
							Premium features included with every booth rental
						</p>
						<p
							className='body-font'
							style={{
								fontSize: '14px',
								color: '#999999',
								marginTop: '12px',
								fontStyle: 'italic',
							}}>
							*Instant prints not available for selfie-station or 360 booths
						</p>
					</div>

					{/* Features Carousel */}
					<div
						style={{
							overflow: 'hidden',
							position: 'relative',
						}}>
						<div
							className='features-carousel'
							style={{
								display: 'flex',
								gap: '24px',
								overflowX: 'auto',
								scrollBehavior: 'smooth',
								scrollbarWidth: 'none',
								msOverflowStyle: 'none',
								WebkitOverflowScrolling: 'touch',
								scrollSnapType: 'x mandatory',
								paddingBottom: '20px',
							}}>
							{features.map((feature, idx) => {
								const Icon = feature.icon;
								return (
									<div
										key={idx}
										className='feature-card'
										style={{
											background: '#FFFFFF',
											borderRadius: '16px',
											padding: '32px',
											textAlign: 'center',
											border: '1px solid rgba(18, 18, 18, 0.1)',
											boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
											flexShrink: 0,
											scrollSnapAlign: 'start',
										}}>
										<div
											style={{
												width: '72px',
												height: '72px',
												background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
												borderRadius: '16px',
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center',
												margin: '0 auto 24px',
												boxShadow: '0 8px 24px rgba(37, 99, 235, 0.3)',
											}}>
											<Icon size={36} color='#FAFAF8' strokeWidth={2.5} />
										</div>
										<h3
											className='body-font'
											style={{
												fontSize: '20px',
												fontWeight: 600,
												color: '#121212',
												marginBottom: '8px',
											}}>
											{feature.title}
										</h3>
										<p
											className='body-font'
											style={{
												fontSize: '15px',
												color: '#555555',
											}}>
											{feature.desc}
										</p>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</section>

			{/* Service Area Section */}
			<section
				className='section-padding'
				style={{
					position: 'relative',
					backgroundImage: `url(${process.env.PUBLIC_URL}/mount-hood.jpg)`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundAttachment: 'fixed',
					overflow: 'hidden',
				}}>
				{/* Overlay for readability */}
				<div
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						background: 'rgba(255, 255, 255, 0.75)',
						zIndex: 0,
					}}
				/>

				<div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
					<div style={{ textAlign: 'center', marginBottom: '64px' }}>
						<p
							className='script-font'
							style={{
								fontSize: '24px',
								color: '#ff3a7c',
								marginBottom: '12px',
							}}>
							Serving the Pacific Northwest
						</p>
						<h2
							className='display-font'
							style={{
								fontSize: 'clamp(36px, 6vw, 56px)',
								fontWeight: 600,
								color: '#121212',
								marginBottom: '16px',
							}}>
							Our Service Area
						</h2>
						<p
							className='body-font'
							style={{
								fontSize: '18px',
								color: '#555555',
								maxWidth: '700px',
								margin: '0 auto',
							}}>
							We proudly serve all of Washington and Oregon, bringing premium photo booth
							experiences to your event
						</p>
					</div>

					<div
						style={{
							display: 'grid',
							gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
							gap: '32px',
							marginBottom: '48px',
						}}>
						{/* Oregon */}
						<div
							style={{
								background: '#FFFFFF',
								borderRadius: '20px',
								padding: '40px',
								border: '1px solid rgba(18, 18, 18, 0.08)',
								boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
							}}>
							<h3
								className='display-font'
								style={{
									fontSize: '32px',
									fontWeight: 600,
									color: '#121212',
									marginBottom: '24px',
									display: 'flex',
									alignItems: 'center',
									gap: '12px',
								}}>
								<span style={{ fontSize: '40px' }}>🌲</span>
								Oregon
							</h3>
							<div
								style={{
									display: 'grid',
									gridTemplateColumns: 'repeat(2, 1fr)',
									gap: '12px',
								}}>
								{[
									'Portland',
									'Eugene',
									'Salem',
									'Gresham',
									'Hillsboro',
									'Beaverton',
									'Bend',
									'Medford',
									'Springfield',
									'Corvallis',
									'Albany',
									'Tigard',
									'Lake Oswego',
									'Keizer',
									'Grants Pass',
									'Oregon City',
									'McMinnville',
									'Redmond',
									'Tualatin',
									'West Linn',
								].map((city, idx) => (
									<p
										key={idx}
										className='body-font'
										style={{
											fontSize: '15px',
											color: '#555555',
											padding: '8px 12px',
											background: '#FAF8FC',
											borderRadius: '8px',
											textAlign: 'center',
										}}>
										{city}
									</p>
								))}
							</div>
						</div>

						{/* Washington */}
						<div
							style={{
								background: '#FFFFFF',
								borderRadius: '20px',
								padding: '40px',
								border: '1px solid rgba(18, 18, 18, 0.08)',
								boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
							}}>
							<h3
								className='display-font'
								style={{
									fontSize: '32px',
									fontWeight: 600,
									color: '#121212',
									marginBottom: '24px',
									display: 'flex',
									alignItems: 'center',
									gap: '12px',
								}}>
								<span style={{ fontSize: '40px' }}>🏔️</span>
								Washington
							</h3>
							<div
								style={{
									display: 'grid',
									gridTemplateColumns: 'repeat(2, 1fr)',
									gap: '12px',
								}}>
								{[
									'Seattle',
									'Spokane',
									'Tacoma',
									'Vancouver',
									'Bellevue',
									'Kent',
									'Everett',
									'Renton',
									'Spokane Valley',
									'Federal Way',
									'Yakima',
									'Kirkland',
									'Bellingham',
									'Kennewick',
									'Auburn',
									'Pasco',
									'Marysville',
									'Lakewood',
									'Redmond',
									'Shoreline',
								].map((city, idx) => (
									<p
										key={idx}
										className='body-font'
										style={{
											fontSize: '15px',
											color: '#555555',
											padding: '8px 12px',
											background: '#FAF8FC',
											borderRadius: '8px',
											textAlign: 'center',
										}}>
										{city}
									</p>
								))}
							</div>
						</div>
					</div>

					<div
						style={{
							textAlign: 'center',
							padding: '32px',
							background: '#FFFFFF',
							borderRadius: '16px',
							border: '1px solid rgba(18, 18, 18, 0.08)',
							boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
						}}>
						<p
							className='body-font'
							style={{
								fontSize: '17px',
								color: '#555555',
								lineHeight: 1.8,
								marginBottom: '16px',
							}}>
							<strong style={{ color: '#121212' }}>Don't see your city listed?</strong>
						</p>
						<p
							className='body-font'
							style={{
								fontSize: '16px',
								color: '#555555',
								lineHeight: 1.7,
								maxWidth: '600px',
								margin: '0 auto 24px',
							}}>
							We serve all cities throughout Washington and Oregon. Contact us to confirm
							availability for your location!
						</p>
						<button
							className='btn-primary'
							style={{ padding: '14px 32px', fontSize: '16px' }}
							onClick={() => scrollToSection('contact')}>
							Contact Us
						</button>
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section className='section-padding' style={{ background: '#F8FAFB' }}>
				<div style={{ maxWidth: '1400px', margin: '0 auto' }}>
					<div style={{ textAlign: 'center', marginBottom: '64px' }}>
						<p
							className='script-font'
							style={{
								fontSize: '24px',
								color: '#ff3a7c',
								marginBottom: '12px',
							}}>
							Don't just take our word for it
						</p>
						<h2
							className='display-font'
							style={{
								fontSize: 'clamp(36px, 6vw, 56px)',
								fontWeight: 600,
								color: '#121212',
								marginBottom: '16px',
							}}>
							What Our Clients Say
						</h2>
						<p
							className='body-font'
							style={{
								fontSize: '18px',
								color: '#555555',
							}}>
							Trusted by leading companies across Portland
						</p>
					</div>

					<div
						style={{
							display: 'grid',
							gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
							gap: '32px',
						}}>
						{testimonials.map((testimonial) => (
							<div
								key={testimonial.id}
								style={{
									background: '#FFFFFF',
									borderRadius: '16px',
									padding: '40px 32px',
									border: '1px solid rgba(18, 18, 18, 0.1)',
									boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
									position: 'relative',
								}}>
								<div
									style={{
										position: 'absolute',
										top: '24px',
										right: '24px',
										width: '48px',
										height: '48px',
										background: '#F5F5F3',
										borderRadius: '50%',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										fontSize: '24px',
										fontWeight: 'bold',
										color: '#121212',
									}}>
									{testimonial.logo}
								</div>
								<div style={{ marginBottom: '24px' }}>
									{[...Array(5)].map((_, i) => (
										<Star
											key={i}
											size={20}
											fill='#ff3a7c'
											color='#ff3a7c'
											style={{ display: 'inline-block', marginRight: '4px' }}
										/>
									))}
								</div>
								<p
									className='body-font'
									style={{
										fontSize: '17px',
										color: '#121212',
										lineHeight: 1.7,
										marginBottom: '24px',
										fontStyle: 'italic',
									}}>
									"{testimonial.quote}"
								</p>
								<div>
									<p
										className='body-font'
										style={{
											fontSize: '16px',
											fontWeight: 600,
											color: '#121212',
											marginBottom: '4px',
										}}>
										{testimonial.name}
									</p>
									<p
										className='body-font'
										style={{
											fontSize: '14px',
											color: '#ff3a7c',
											fontWeight: 600,
										}}>
										{testimonial.company}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Book With Confidence Section */}
			<section
				className='section-padding'
				style={{
					background: '#FFFFFF',
				}}>
				<div style={{ maxWidth: '1400px', margin: '0 auto' }}>
					<div style={{ textAlign: 'center', marginBottom: '64px' }}>
						<p
							className='script-font'
							style={{
								fontSize: '24px',
								color: '#ff3a7c',
								marginBottom: '12px',
							}}>
							Trusted by thousands
						</p>
						<h2
							className='display-font'
							style={{
								fontSize: 'clamp(36px, 6vw, 56px)',
								fontWeight: 600,
								color: '#121212',
								marginBottom: '16px',
							}}>
							Book With Confidence
						</h2>
						<p
							className='body-font'
							style={{
								fontSize: '18px',
								color: '#555555',
								maxWidth: '700px',
								margin: '0 auto',
							}}>
							Award-winning service recognized by leading wedding and event platforms
						</p>
					</div>

					<div
						className='badges-grid'
						style={{
							maxWidth: '1200px',
							margin: '0 auto',
						}}>
						{[
							{
								name: 'WeddingWire',
								filename: 'weddingwire.png',
								color: '#6C5CE7',
								url: 'https://www.weddingwire.com/biz/noteworthy-djs-portland/9661cffdf7751c14.html',
							},
							{
								name: 'The Knot',
								filename: 'theknot.png',
								color: '#FF6B9D',
								url: 'https://www.theknot.com/marketplace/redirect-558056',
							},
							{
								name: 'Yelp',
								filename: 'yelp.png',
								color: '#D32323',
								url: 'https://www.yelp.com/biz/noteworthy-djs-and-photo-booths-portland',
							},
							{
								name: 'Google',
								filename: 'google.png',
								color: '#4285F4',
								url: 'https://g.page/r/CZfmtyV1dyK0EBM/review',
							},
							{
								name: 'Zola',
								filename: 'zola.png',
								color: '#2EC4B6',
								url: 'https://www.zola.com/wedding-vendors/wedding-bands-djs/noteworthy-djs-photo-booths',
							},
							{
								name: 'BBB',
								filename: 'bbb.png',
								color: '#003366',
								url: 'https://www.bbb.org/us/or/portland/profile/photo-booth-rental/YOUR-ID',
							},
						].map((badge, idx) => (
							<a
								key={idx}
								href={badge.url}
								target='_blank'
								rel='noopener noreferrer'
								style={{
									background: '#FAFAF8',
									borderRadius: '16px',
									padding: '32px 24px',
									textAlign: 'center',
									border: '1px solid rgba(18, 18, 18, 0.08)',
									boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
									transition: 'all 0.3s ease',
									cursor: 'pointer',
									textDecoration: 'none',
									display: 'block',
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.transform = 'translateY(-4px)';
									e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.1)';
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.transform = 'translateY(0)';
									e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.06)';
								}}>
								<div
									style={{
										width: '120px',
										height: '120px',
										margin: '0 auto 16px',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
									}}>
									<img
										src={`${process.env.PUBLIC_URL}/badges/${badge.filename}`}
										alt={`${badge.name} Badge`}
										style={{
											width: '100%',
											height: '100%',
											objectFit: 'contain',
										}}
									/>
								</div>
								<h4
									className='display-font'
									style={{
										fontSize: '18px',
										fontWeight: 600,
										color: '#121212',
										marginBottom: '8px',
									}}>
									{badge.name}
								</h4>
								<p
									className='body-font'
									style={{
										fontSize: '14px',
										color: '#555555',
									}}>
									{badge.name === 'BBB' ? 'Accredited Business' : 'Top Rated'}
								</p>
							</a>
						))}
					</div>

					<div
						style={{
							textAlign: 'center',
							marginTop: '48px',
							padding: '32px',
							background: '#FAF8FC',
							borderRadius: '16px',
							border: '1px solid rgba(18, 18, 18, 0.05)',
						}}>
						<p
							className='body-font'
							style={{
								fontSize: '17px',
								color: '#555555',
								lineHeight: 1.8,
								maxWidth: '800px',
								margin: '0 auto',
							}}>
							<strong style={{ color: '#121212' }}>Join hundreds of satisfied clients</strong> who
							have trusted us with their special moments. Our commitment to excellence and attention
							to detail has earned us top ratings across all major review platforms.
						</p>
					</div>
				</div>
			</section>

			{/* Previous Clients Logo Carousel */}
			<section
				style={{
					background: '#FFFFFF',
					padding: '80px 24px',
					borderTop: '1px solid rgba(18, 18, 18, 0.05)',
					borderBottom: '1px solid rgba(18, 18, 18, 0.05)',
					overflow: 'hidden',
				}}>
				<div style={{ maxWidth: '1400px', margin: '0 auto', marginBottom: '48px' }}>
					<div style={{ textAlign: 'center' }}>
						<p
							className='script-font'
							style={{
								fontSize: '24px',
								color: '#ff3a7c',
								marginBottom: '12px',
							}}>
							Trusted by amazing brands
						</p>
						<h2
							className='display-font'
							style={{
								fontSize: 'clamp(32px, 5vw, 48px)',
								fontWeight: 600,
								color: '#121212',
								marginBottom: '16px',
							}}>
							Previous Clients
						</h2>
					</div>
				</div>

				{/* Logo Carousel */}
				<div style={{ position: 'relative' }}>
					<div
						className='logo-carousel'
						style={{
							display: 'flex',
							gap: '80px',
							animation: 'logoScroll 30s linear infinite',
							width: 'fit-content',
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.animationPlayState = 'paused';
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.animationPlayState = 'running';
						}}>
						{/* Duplicate logos 3 times for infinite scroll */}
						{[...Array(3)].map((_, setIndex) => (
							<React.Fragment key={setIndex}>
								{[
									{ name: 'Nike', logo: '✓', color: '#121212' },
									{ name: 'Intel', logo: '◉', color: '#0071C5' },
									{ name: 'Adidas', logo: '⚡', color: '#121212' },
									{ name: 'Columbia', logo: '▲', color: '#1D4F91' },
									{ name: 'Google', logo: 'G', color: '#4285F4' },
									{ name: 'Amazon', logo: '↗', color: '#FF9900' },
									{ name: 'Microsoft', logo: '⊞', color: '#00A4EF' },
									{ name: 'Apple', logo: '', color: '#121212' },
								].map((client, index) => (
									<div
										key={`${setIndex}-${index}`}
										style={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											minWidth: '160px',
											height: '100px',
											background: '#FAFAF8',
											borderRadius: '12px',
											border: '1px solid rgba(18, 18, 18, 0.08)',
											transition: 'all 0.3s ease',
											cursor: 'pointer',
										}}
										onMouseEnter={(e) => {
											e.currentTarget.style.transform = 'scale(1.05)';
											e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)';
										}}
										onMouseLeave={(e) => {
											e.currentTarget.style.transform = 'scale(1)';
											e.currentTarget.style.boxShadow = 'none';
										}}>
										<div style={{ textAlign: 'center' }}>
											<div
												style={{
													fontSize: '36px',
													fontWeight: 'bold',
													color: client.color,
													marginBottom: '8px',
												}}>
												{client.logo}
											</div>
											<div
												className='body-font'
												style={{
													fontSize: '14px',
													fontWeight: 600,
													color: '#121212',
													letterSpacing: '1px',
												}}>
												{client.name}
											</div>
										</div>
									</div>
								))}
							</React.Fragment>
						))}
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section
				id='contact'
				className='section-padding'
				style={{
					background: '#FAF8FC',
				}}>
				<div style={{ maxWidth: '1400px', margin: '0 auto' }}>
					<div style={{ textAlign: 'center', marginBottom: '64px' }}>
						<p
							className='script-font'
							style={{
								fontSize: '24px',
								color: '#ff3a7c',
								marginBottom: '12px',
							}}>
							Let's make it happen
						</p>
						<h2
							className='display-font'
							style={{
								fontSize: 'clamp(36px, 6vw, 56px)',
								fontWeight: 600,
								color: '#121212',
								marginBottom: '16px',
							}}>
							Get in Touch
						</h2>
						<p
							className='body-font'
							style={{
								fontSize: '18px',
								color: '#555555',
								maxWidth: '600px',
								margin: '0 auto',
							}}>
							Ready to book your photo booth? Contact us today for availability and pricing
						</p>
					</div>

					{/* Top Row: Contact Info + Google Map */}
					<div
						style={{
							display: 'grid',
							gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
							gap: '48px',
							marginBottom: '48px',
						}}>
						{/* Contact Info */}
						<div>
							<h3
								className='display-font'
								style={{
									fontSize: '28px',
									fontWeight: 600,
									color: '#121212',
									marginBottom: '32px',
								}}>
								Contact Information
							</h3>
							<div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
								<div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
									<div
										style={{
											width: '48px',
											height: '48px',
											background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
											borderRadius: '12px',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											flexShrink: 0,
										}}>
										<Phone size={24} color='#FAFAF8' />
									</div>
									<div>
										<p
											className='body-font'
											style={{ fontSize: '14px', color: '#555555', marginBottom: '4px' }}>
											Phone
										</p>
										<a
											href='tel:503-770-0382'
											className='body-font'
											style={{
												fontSize: '17px',
												fontWeight: 600,
												color: '#121212',
												textDecoration: 'none',
											}}>
											503-770-0382
										</a>
									</div>
								</div>

								<div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
									<div
										style={{
											width: '48px',
											height: '48px',
											background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
											borderRadius: '12px',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											flexShrink: 0,
										}}>
										<Mail size={24} color='#FAFAF8' />
									</div>
									<div>
										<p
											className='body-font'
											style={{ fontSize: '14px', color: '#555555', marginBottom: '4px' }}>
											Email
										</p>
										<a
											href='mailto:booking@noteworthyphotobooths.com'
											className='body-font'
											style={{
												fontSize: '17px',
												fontWeight: 600,
												color: '#121212',
												textDecoration: 'none',
												wordBreak: 'break-word',
											}}>
											booking@noteworthyphotobooths.com
										</a>
									</div>
								</div>

								<div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
									<div
										style={{
											width: '48px',
											height: '48px',
											background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
											borderRadius: '12px',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											flexShrink: 0,
										}}>
										<MapPin size={24} color='#FAFAF8' />
									</div>
									<div>
										<p
											className='body-font'
											style={{ fontSize: '14px', color: '#555555', marginBottom: '4px' }}>
											Address
										</p>
										<p
											className='body-font'
											style={{
												fontSize: '17px',
												fontWeight: 600,
												color: '#121212',
												lineHeight: 1.5,
											}}>
											6635 N Baltimore Ave
											<br />
											Suite 8A
											<br />
											Portland, OR 97203
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Google Maps */}
						<div>
							<h3
								className='display-font'
								style={{
									fontSize: '28px',
									fontWeight: 600,
									color: '#121212',
									marginBottom: '32px',
								}}>
								Our Location
							</h3>
							<div
								style={{
									borderRadius: '12px',
									overflow: 'hidden',
									height: '350px',
									background: '#FFFFFF',
									border: '1px solid rgba(18, 18, 18, 0.1)',
									boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
								}}>
								<iframe
									src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.4425076358876!2d-122.74489892346438!3d45.56947327107368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a70a03c4ba5f%3A0x67c90a6fb3e0c0f4!2s6635%20N%20Baltimore%20Ave%20%238a%2C%20Portland%2C%20OR%2097203!5e0!3m2!1sen!2sus!4v1709123456789!5m2!1sen!2sus'
									allowFullScreen=''
									loading='lazy'
									referrerPolicy='no-referrer-when-downgrade'
									style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
								/>
							</div>
						</div>
					</div>

					{/* Bottom Row: Contact Form - Full Width */}
					<div
						style={{
							background: '#FFFFFF',
							borderRadius: '16px',
							padding: '48px 40px',
							border: '1px solid rgba(18, 18, 18, 0.1)',
							boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
							width: '80%',
							margin: '0 auto',
							background:
								'linear-gradient(135deg, rgba(255, 58, 124, 0.02) 0%, rgba(37, 99, 235, 0.02) 100%)',
						}}
						className='contact-form-container'>
						<h3
							className='display-font'
							style={{
								fontSize: '32px',
								fontWeight: 600,
								color: '#121212',
								marginBottom: '16px',
								textAlign: 'center',
							}}>
							Send Us a Message
						</h3>
						<p
							className='body-font'
							style={{
								fontSize: '16px',
								color: '#555555',
								marginBottom: '40px',
								textAlign: 'center',
							}}>
							Fill out the form below and we'll get back to you within 24 hours
						</p>
						<div
							style={{
								background: '#FAFAF8',
								borderRadius: '12px',
								padding: '24px',
								border: '1px solid rgba(18, 18, 18, 0.05)',
							}}>
							<iframe
								className='checkcherry-autoresize-frame'
								src='https://noteworthy-djs.checkcherry.com/contact/2994?iframe=true&props=%7B%7D'
								style={{
									margin: '0 auto',
									padding: 0,
									border: 'none',
									width: '100%',
									minHeight: '950px',
									display: 'block',
									background: 'transparent',
								}}
								scrolling='no'
								allowTransparency='true'
								title='Contact Form'
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer
				style={{
					background: '#121212',
					padding: '48px 24px',
					borderTop: '1px solid rgba(255, 255, 255, 0.1)',
				}}>
				<div
					style={{
						maxWidth: '1400px',
						margin: '0 auto',
						textAlign: 'center',
					}}>
					<div style={{ marginBottom: '24px' }}>
						<Camera size={40} color='#ff3a7c' strokeWidth={2} />
					</div>
					<h3
						className='display-font'
						style={{
							fontSize: '24px',
							fontWeight: 600,
							color: '#FAFAF8',
							marginBottom: '16px',
						}}>
						Noteworthy Photo Booths
					</h3>
					<p
						className='body-font'
						style={{
							fontSize: '15px',
							color: 'rgba(250, 250, 248, 0.6)',
							marginBottom: '24px',
						}}>
						Creating unforgettable moments, one photo at a time
					</p>

					{/* Social Media Links */}
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							gap: '20px',
							marginBottom: '32px',
						}}>
						<a
							href='https://www.facebook.com/noteworthyphotobooths'
							target='_blank'
							rel='noopener noreferrer'
							style={{
								width: '48px',
								height: '48px',
								borderRadius: '50%',
								background: 'rgba(250, 250, 248, 0.1)',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								transition: 'all 0.3s ease',
								textDecoration: 'none',
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.background = '#1877F2';
								e.currentTarget.style.transform = 'translateY(-4px)';
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.background = 'rgba(250, 250, 248, 0.1)';
								e.currentTarget.style.transform = 'translateY(0)';
							}}>
							<svg width='24' height='24' viewBox='0 0 24 24' fill='white'>
								<path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
							</svg>
						</a>
						<a
							href='https://www.instagram.com/noteworthyphotobooths'
							target='_blank'
							rel='noopener noreferrer'
							style={{
								width: '48px',
								height: '48px',
								borderRadius: '50%',
								background: 'rgba(250, 250, 248, 0.1)',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								transition: 'all 0.3s ease',
								textDecoration: 'none',
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.background =
									'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)';
								e.currentTarget.style.transform = 'translateY(-4px)';
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.background = 'rgba(250, 250, 248, 0.1)';
								e.currentTarget.style.transform = 'translateY(0)';
							}}>
							<svg width='24' height='24' viewBox='0 0 24 24' fill='white'>
								<path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
							</svg>
						</a>
					</div>

					<div
						className='body-font'
						style={{
							fontSize: '14px',
							color: 'rgba(250, 250, 248, 0.5)',
							paddingTop: '24px',
							borderTop: '1px solid rgba(255, 255, 255, 0.1)',
						}}>
						<div style={{ marginBottom: '8px' }}>
							© 2026 Noteworthy Productions LLC. All rights reserved.
						</div>
						<div style={{ fontSize: '13px', color: 'rgba(250, 250, 248, 0.4)' }}>
							Designed by Joe Ebner
						</div>
					</div>
				</div>
			</footer>

			{/* Team Member Modal */}
			{activeModal && (
				<div className='modal-overlay' onClick={() => setActiveModal(null)}>
					<div className='modal-content' onClick={(e) => e.stopPropagation()}>
						<button
							onClick={() => setActiveModal(null)}
							style={{
								position: 'absolute',
								top: '20px',
								right: '20px',
								background: 'rgba(18, 18, 18, 0.1)',
								border: 'none',
								borderRadius: '50%',
								width: '40px',
								height: '40px',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								cursor: 'pointer',
								transition: 'all 0.2s ease',
							}}>
							<X size={24} color='#121212' />
						</button>
						<div style={{ padding: '48px 40px' }}>
							<div
								style={{
									width: '120px',
									height: '120px',
									background: 'linear-gradient(135deg, #ff3a7c 0%, #ff5c94 100%)',
									borderRadius: '50%',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									margin: '0 auto 24px',
									fontSize: '60px',
									boxShadow: '0 8px 24px rgba(255, 58, 124, 0.25)',
								}}>
								{activeModal.image}
							</div>
							<h3
								className='display-font'
								style={{
									fontSize: '32px',
									fontWeight: 600,
									color: '#121212',
									marginBottom: '8px',
									textAlign: 'center',
								}}>
								{activeModal.name}
							</h3>
							<p
								className='body-font'
								style={{
									fontSize: '18px',
									color: '#ff3a7c',
									fontWeight: 600,
									marginBottom: '32px',
									textAlign: 'center',
								}}>
								{activeModal.role}
							</p>
							<p
								className='body-font'
								style={{
									fontSize: '17px',
									color: '#555555',
									lineHeight: 1.8,
									textAlign: 'center',
								}}>
								{activeModal.bio}
							</p>
						</div>
					</div>
				</div>
			)}

			{/* Booth Info Modal */}
			{activeBoothModal && (
				<div className='modal-overlay' onClick={() => setActiveBoothModal(null)}>
					<div className='modal-content' onClick={(e) => e.stopPropagation()}>
						<button
							onClick={() => setActiveBoothModal(null)}
							style={{
								position: 'absolute',
								top: '20px',
								right: '20px',
								background: 'rgba(18, 18, 18, 0.1)',
								border: 'none',
								borderRadius: '50%',
								width: '40px',
								height: '40px',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								cursor: 'pointer',
							}}>
							<X size={24} color='#121212' />
						</button>
						<div style={{ padding: '48px 40px' }}>
							<div
								style={{
									fontSize: '80px',
									marginBottom: '24px',
									textAlign: 'center',
								}}>
								{activeBoothModal.icon}
							</div>
							<h3
								className='display-font'
								style={{
									fontSize: '36px',
									fontWeight: 600,
									color: '#121212',
									marginBottom: '16px',
									textAlign: 'center',
								}}>
								{activeBoothModal.name}
							</h3>
							<p
								className='body-font'
								style={{
									fontSize: '18px',
									color: '#555555',
									lineHeight: 1.7,
									marginBottom: '40px',
									textAlign: 'center',
								}}>
								{activeBoothModal.description}
							</p>

							{/* Gallery Section */}
							<div style={{ marginBottom: '40px' }}>
								<h4
									className='display-font'
									style={{
										fontSize: '24px',
										fontWeight: 600,
										color: '#121212',
										marginBottom: '24px',
										textAlign: 'center',
									}}>
									Gallery
								</h4>
								<div
									style={{
										display: 'grid',
										gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
										gap: '16px',
										marginBottom: '32px',
									}}>
									{[1, 2, 3, 4, 5].map((num) => (
										<div
											key={num}
											style={{
												aspectRatio: '4/3',
												background: 'linear-gradient(135deg, #ff3a7c 0%, #ff5c94 100%)',
												borderRadius: '12px',
												display: 'flex',
												flexDirection: 'column',
												alignItems: 'center',
												justifyContent: 'center',
												position: 'relative',
												overflow: 'hidden',
												boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
												cursor: 'pointer',
												transition: 'transform 0.3s ease',
											}}
											onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
											onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}>
											{/* Pattern Background */}
											<div
												style={{
													position: 'absolute',
													top: 0,
													left: 0,
													right: 0,
													bottom: 0,
													opacity: 0.1,
													fontSize: '32px',
													display: 'flex',
													flexWrap: 'wrap',
													gap: '10px',
													padding: '10px',
													alignItems: 'center',
													justifyContent: 'center',
												}}>
												{[...Array(4)].map((_, i) => (
													<div key={i}>📸</div>
												))}
											</div>

											{/* Placeholder Content */}
											<div
												style={{
													position: 'relative',
													zIndex: 1,
													textAlign: 'center',
												}}>
												<Image
													size={40}
													color='#FAFAF8'
													strokeWidth={2}
													style={{ marginBottom: '8px' }}
												/>
												<p
													className='body-font'
													style={{
														color: '#FAFAF8',
														fontSize: '14px',
														fontWeight: 600,
													}}>
													Photo {num}
												</p>
											</div>
										</div>
									))}
								</div>
							</div>

							<div style={{ marginBottom: '32px' }}>
								<h4
									className='body-font'
									style={{
										fontSize: '20px',
										fontWeight: 600,
										color: '#121212',
										marginBottom: '16px',
									}}>
									Key Features:
								</h4>
								{activeBoothModal.features.map((feature, idx) => (
									<div
										key={idx}
										style={{
											display: 'flex',
											alignItems: 'center',
											gap: '12px',
											marginBottom: '12px',
										}}>
										<Check size={20} color='#ff3a7c' strokeWidth={3} />
										<span className='body-font' style={{ fontSize: '16px', color: '#555555' }}>
											{feature}
										</span>
									</div>
								))}
							</div>
							<button
								className='btn-primary'
								style={{ width: '100%', justifyContent: 'center', fontSize: '18px' }}
								onClick={() => {
									setActiveBoothModal(null);
									scrollToSection('contact');
								}}>
								Book This Booth
							</button>
						</div>
					</div>
				</div>
			)}

			{/* Photo Book Modal */}
			{photoBookModal && (
				<div className='modal-overlay' onClick={() => setPhotoBookModal(null)}>
					<div
						className='modal-content'
						onClick={(e) => e.stopPropagation()}
						style={{ maxWidth: '900px' }}>
						<button
							onClick={() => setPhotoBookModal(null)}
							style={{
								position: 'absolute',
								top: '20px',
								right: '20px',
								background: 'rgba(18, 18, 18, 0.1)',
								border: 'none',
								borderRadius: '50%',
								width: '40px',
								height: '40px',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								cursor: 'pointer',
								zIndex: 10,
							}}>
							<X size={24} color='#121212' />
						</button>
						<div style={{ padding: '48px 40px' }}>
							<h3
								className='display-font'
								style={{
									fontSize: '36px',
									fontWeight: 600,
									color: '#121212',
									marginBottom: '16px',
									textAlign: 'center',
								}}>
								{photoBookModal === 'standard' ? 'Standard Photo Books' : 'Custom Photo Books'}
							</h3>
							<p
								className='body-font'
								style={{
									fontSize: '17px',
									color: '#555555',
									marginBottom: '40px',
									textAlign: 'center',
									lineHeight: 1.7,
								}}>
								{photoBookModal === 'standard'
									? 'Browse our collection of professionally designed templates'
									: 'Explore custom designs tailored to your brand and event'}
							</p>

							{/* Gallery Grid - 5 Placeholders */}
							<div
								style={{
									display: 'grid',
									gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
									gap: '20px',
									marginBottom: '40px',
								}}>
								{[1, 2, 3, 4, 5].map((num) => (
									<div
										key={num}
										style={{
											aspectRatio: '3/4',
											background:
												photoBookModal === 'standard'
													? 'linear-gradient(135deg, #ff3a7c 0%, #ff5c94 100%)'
													: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
											borderRadius: '12px',
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'center',
											justifyContent: 'center',
											position: 'relative',
											overflow: 'hidden',
											boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
											cursor: 'pointer',
											transition: 'transform 0.3s ease',
										}}
										onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
										onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}>
										{/* Pattern Background */}
										<div
											style={{
												position: 'absolute',
												top: 0,
												left: 0,
												right: 0,
												bottom: 0,
												opacity: 0.1,
												fontSize: '40px',
												display: 'flex',
												flexWrap: 'wrap',
												gap: '15px',
												padding: '15px',
											}}>
											{[...Array(6)].map((_, i) => (
												<div key={i}>{photoBookModal === 'standard' ? '📖' : '✨'}</div>
											))}
										</div>

										{/* Placeholder Content */}
										<div
											style={{
												position: 'relative',
												zIndex: 1,
												textAlign: 'center',
											}}>
											<Book
												size={48}
												color='#FAFAF8'
												strokeWidth={2}
												style={{ marginBottom: '12px' }}
											/>
											<p
												className='body-font'
												style={{
													color: '#FAFAF8',
													fontSize: '18px',
													fontWeight: 600,
												}}>
												{photoBookModal === 'standard' ? 'Template' : 'Design'} {num}
											</p>
										</div>
									</div>
								))}
							</div>

							<div
								style={{
									background: '#F5F5F3',
									padding: '24px',
									borderRadius: '12px',
									marginBottom: '32px',
								}}>
								<h4
									className='display-font'
									style={{
										fontSize: '20px',
										fontWeight: 600,
										color: '#121212',
										marginBottom: '16px',
									}}>
									{photoBookModal === 'standard' ? 'Template Features:' : 'Custom Features:'}
								</h4>
								{(photoBookModal === 'standard'
									? [
											'Multiple template designs',
											'High-quality printing',
											'Professional binding',
											'Quick turnaround',
											'Various size options',
										]
									: [
											'Fully customized designs',
											'Your branding & logos',
											'Premium paper options',
											'Dedicated design consultation',
											'Unlimited revisions',
										]
								).map((feature, idx) => (
									<div
										key={idx}
										style={{
											display: 'flex',
											alignItems: 'center',
											gap: '12px',
											marginBottom: '12px',
										}}>
										<Check
											size={20}
											color={photoBookModal === 'standard' ? '#ff3a7c' : '#2563eb'}
											strokeWidth={3}
										/>
										<span className='body-font' style={{ fontSize: '16px', color: '#555555' }}>
											{feature}
										</span>
									</div>
								))}
							</div>

							<button
								className='btn-primary'
								style={{ width: '100%', justifyContent: 'center', fontSize: '18px' }}
								onClick={() => {
									setPhotoBookModal(null);
									scrollToSection('contact');
								}}>
								Get a Quote
							</button>
						</div>
					</div>
				</div>
			)}

			{/* Booth Gallery Modal */}
			{boothGalleryModal && (
				<div className='modal-overlay' onClick={() => setBoothGalleryModal(null)}>
					<div
						className='modal-content'
						onClick={(e) => e.stopPropagation()}
						style={{ maxWidth: '1000px' }}>
						<button
							onClick={() => setBoothGalleryModal(null)}
							style={{
								position: 'absolute',
								top: '20px',
								right: '20px',
								background: 'rgba(18, 18, 18, 0.1)',
								border: 'none',
								borderRadius: '50%',
								width: '40px',
								height: '40px',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								cursor: 'pointer',
								zIndex: 10,
							}}>
							<X size={24} color='#121212' />
						</button>
						<div style={{ padding: '48px 40px' }}>
							<div
								style={{
									fontSize: '56px',
									marginBottom: '16px',
									textAlign: 'center',
								}}>
								{boothGalleryModal.icon}
							</div>
							<h3
								className='display-font'
								style={{
									fontSize: '36px',
									fontWeight: 600,
									color: '#121212',
									marginBottom: '16px',
									textAlign: 'center',
								}}>
								{boothGalleryModal.name} Gallery
							</h3>
							<p
								className='body-font'
								style={{
									fontSize: '17px',
									color: '#555555',
									marginBottom: '40px',
									textAlign: 'center',
									lineHeight: 1.7,
								}}>
								Browse photos from real events featuring this booth
							</p>

							{/* Gallery Grid - 5 Placeholders */}
							<div
								style={{
									display: 'grid',
									gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
									gap: '20px',
									marginBottom: '40px',
								}}>
								{[1, 2, 3, 4, 5].map((num) => (
									<div
										key={num}
										style={{
											aspectRatio: '4/3',
											background: 'linear-gradient(135deg, #ff3a7c 0%, #ff5c94 100%)',
											borderRadius: '16px',
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'center',
											justifyContent: 'center',
											position: 'relative',
											overflow: 'hidden',
											boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
											cursor: 'pointer',
											transition: 'transform 0.3s ease',
										}}
										onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
										onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}>
										{/* Pattern Background */}
										<div
											style={{
												position: 'absolute',
												top: 0,
												left: 0,
												right: 0,
												bottom: 0,
												opacity: 0.1,
												fontSize: '48px',
												display: 'flex',
												flexWrap: 'wrap',
												gap: '20px',
												padding: '20px',
												alignItems: 'center',
												justifyContent: 'center',
											}}>
											{[...Array(4)].map((_, i) => (
												<div key={i}>📸</div>
											))}
										</div>

										{/* Placeholder Content */}
										<div
											style={{
												position: 'relative',
												zIndex: 1,
												textAlign: 'center',
											}}>
											<Image
												size={56}
												color='#FAFAF8'
												strokeWidth={2}
												style={{ marginBottom: '12px' }}
											/>
											<p
												className='body-font'
												style={{
													color: '#FAFAF8',
													fontSize: '18px',
													fontWeight: 600,
												}}>
												Event Photo {num}
											</p>
										</div>
									</div>
								))}
							</div>

							<div
								style={{
									background: '#F5F5F3',
									padding: '24px',
									borderRadius: '12px',
									marginBottom: '32px',
								}}>
								<h4
									className='display-font'
									style={{
										fontSize: '20px',
										fontWeight: 600,
										color: '#121212',
										marginBottom: '16px',
									}}>
									{boothGalleryModal.name} Features:
								</h4>
								{boothGalleryModal.features.map((feature, idx) => (
									<div
										key={idx}
										style={{
											display: 'flex',
											alignItems: 'center',
											gap: '12px',
											marginBottom: '12px',
										}}>
										<Check size={20} color='#ff3a7c' strokeWidth={3} />
										<span className='body-font' style={{ fontSize: '16px', color: '#555555' }}>
											{feature}
										</span>
									</div>
								))}
							</div>

							<div style={{ display: 'flex', gap: '12px' }}>
								<button
									className='btn-secondary'
									style={{ flex: 1, justifyContent: 'center', fontSize: '16px' }}
									onClick={() => {
										setBoothGalleryModal(null);
										setActiveBoothModal(boothGalleryModal);
									}}>
									More Info
								</button>
								<button
									className='btn-primary'
									style={{ flex: 1, justifyContent: 'center', fontSize: '16px' }}
									onClick={() => {
										setBoothGalleryModal(null);
										scrollToSection('contact');
									}}>
									Book This Booth
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
