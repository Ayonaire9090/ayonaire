'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import Header from '../header';
import Footer from '../footer';

// FAQ Item Component
function FAQItem({ number, question, answer, defaultOpen = false }: { number: string; question: string; answer: string; defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '1152px',
        borderRadius: '8px',
        padding: '3px',
        background: isOpen 
          ? 'linear-gradient(90deg, #F25E25 0%, #F97F11 100%)' 
          : 'rgba(242, 94, 37, 0.2)',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          borderRadius: '5px',
          padding: '24px',
          background: isOpen ? '#FFFFFF' : '#FAFAFA',
          boxShadow: isOpen ? '0px 11px 60px 0px #00000014' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <div
          className="flex items-start justify-between"
          style={{ cursor: 'pointer' }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex flex-col" style={{ gap: '8px', flex: 1 }}>
            <span
              style={{
                fontFamily: 'Spline Sans, sans-serif',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '100%',
                background: 'linear-gradient(90deg, #F25E25 0%, #F97F11 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {number}
            </span>
            <h3
              style={{
                fontFamily: 'Spline Sans, sans-serif',
                fontWeight: 600,
                fontSize: '20px',
                lineHeight: '150%',
                color: '#141414',
                margin: 0,
              }}
            >
              {question}
            </h3>
          </div>

          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'linear-gradient(90deg, #F25E25 0%, #F97F11 100%)',
              border: '2px solid #FFFFFF',
              boxShadow: '0px 4px 12px 0px rgba(242, 94, 37, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0,
              marginLeft: '24px',
            }}
          >
            {isOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 12H6" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 6V18M18 12H6" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            )}
          </div>
        </div>

        <div
          style={{
            maxHeight: isOpen ? '500px' : '0',
            overflow: 'hidden',
            transition: 'max-height 0.4s ease',
            paddingTop: isOpen ? '20px' : '0',
          }}
        >
          <p
            style={{
              fontFamily: 'Satoshi, sans-serif',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '150%',
              letterSpacing: '0.02em',
              color: '#6E6E6E',
              marginTop: 0,
            }}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupAnimated, setPopupAnimated] = useState(false);
  const [popupClosed, setPopupClosed] = useState(false);
  const statsRef = useRef<HTMLElement>(null);
  const bootcampRef = useRef<HTMLElement>(null);
  const testimonialScrollRef = useRef<HTMLDivElement>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const featuredLogos = [
    { name: 'Ify', url: '/images/logos/ify.png' },
    { name: 'The Guardian', url: '/images/logos/guardian.png' },
    { name: 'TechCabal', url: '/images/logos/techcabal.png' },
    { name: 'Forbes', url: '/images/logos/forbes.png' },
    { name: 'Technext', url: '/images/logos/technext.png' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (bootcampRef.current && !showPopup && !popupClosed) {
        const rect = bootcampRef.current.getBoundingClientRect();
        if (rect.top + rect.height < window.innerHeight / 2) {
          setShowPopup(true);
          setTimeout(() => setPopupAnimated(true), 10);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showPopup, popupClosed]);

  const handleClosePopup = () => {
    setPopupAnimated(false);
    setTimeout(() => {
      setShowPopup(false);
      setPopupClosed(true);
    }, 400);
  };

  useEffect(() => {
    const currentRef = statsRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const CountingNumber = ({ end, suffix = '', isRating = false }: { end: number; suffix?: string; isRating?: boolean }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000;
      const steps = 60;
      const increment = end / steps;
      const stepDuration = duration / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }, [end, isVisible]);

    if (isRating) {
      return <>{count.toFixed(1)}/5</>;
    }

    return <>{Math.round(count)}{suffix}</>;
  };

  return (
    <main>
      {/* 1. HERO SECTION */}
      <section 
        className="relative w-full overflow-hidden"
        style={{
          background: 'linear-gradient(178.47deg, #FFAC74 1.3%, #FFFFFF 45.22%)',
          minHeight: '872px',
        }}
      >
        <Header />
        
        <div className="max-w-[1740px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 pt-6 md:pt-8 pb-8 md:pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            <div className="space-y-8">
              <h1 
                className="leading-tight md:leading-[65px]"
                style={{
                  fontFamily: 'Spline Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(36px, 8vw, 60px)',
                  color: '#141414',
                }}
              >
                Build a Future-Proof Career in Tech
              </h1>

              <div className="space-y-3 md:space-y-4">
                {[
                  'Build a future-proof skillset',
                  'Break into high-paying roles, and',
                  'Thrive in high-growth industries'
                ].map((text, index) => (
                  <div key={index} className="flex items-start gap-2 md:gap-3">
                    <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                      <path d="M7.04049 14.9742C7.03815 14.9742 7.03542 14.9742 7.03308 14.9742C6.93638 14.9723 6.84513 14.931 6.77962 14.86L0.0935999 7.58983C-0.0210443 7.46505 -0.0315728 7.2771 0.0686433 7.14023C0.168859 7.00375 0.351354 6.95695 0.504993 7.0287L6.62442 9.89403C6.67589 9.9182 6.73672 9.90651 6.77611 9.86556L16.1106 0.109496C16.237 -0.0226959 16.4437 -0.0371239 16.5872 0.0767404C16.7307 0.190605 16.7638 0.394937 16.6636 0.548185L7.37819 14.7726C7.36493 14.7933 7.34933 14.812 7.33217 14.8296L7.29123 14.8705C7.22455 14.9368 7.13408 14.9742 7.04049 14.9742Z" fill="#F67219"/>
                    </svg>
                    <span 
                      style={{
                        fontFamily: 'Satoshi, sans-serif',
                        fontWeight: 500,
                        fontSize: 'clamp(16px, 4vw, 18px)',
                        lineHeight: '140%',
                        color: '#141414',
                      }}
                    >
                      {text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-4 pt-4">
                <button
                  className="group flex items-center justify-between rounded-[10px] md:rounded-[14px] transition-all hover:scale-105 pr-2 md:pr-3 pl-3 md:pl-4 py-2 md:py-3 flex-shrink-0"
                  style={{
                    minWidth: 'fit-content',
                    background: 'linear-gradient(90deg, #F67219 0%, #FFDCC4 100%)',
                  }}
                >
                  <span 
                    className="pr-1 md:pr-3"
                    style={{
                      fontFamily: 'Satoshi, sans-serif',
                      fontWeight: 700,
                      fontSize: 'clamp(13px, 3vw, 16px)',
                      lineHeight: '100%',
                      color: '#FFFFFF',
                    }}
                  >
                    See Bootcamps
                  </span>
                  <div 
                    className="flex items-center justify-center bg-white rounded-lg flex-shrink-0"
                    style={{
                      width: 'clamp(28px, 6vw, 33.33px)',
                      height: 'clamp(28px, 6vw, 33.33px)',
                    }}
                  >
                    <svg width="14" height="13" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[17px] md:h-[16px]">
                      <path d="M8.39038 0.571899L15.275 7.74298L8.10394 14.6276" stroke="#F67721" strokeWidth="1.5"/>
                      <path d="M0.0153809 7.51331L14.9237 7.81712" stroke="#F67721" strokeWidth="1.5"/>
                    </svg>
                  </div>
                </button>

                <button
                  className="px-4 md:px-6 py-2 md:py-4 rounded-[10px] md:rounded-[14px] border transition-all hover:bg-orange-50 flex-shrink-0"
                  style={{
                    borderColor: '#F67219',
                    borderWidth: '1px',
                    minWidth: 'fit-content',
                  }}
                >
                  <span 
                    style={{
                      fontFamily: 'Satoshi, sans-serif',
                      fontWeight: 700,
                      fontSize: 'clamp(13px, 3vw, 16px)',
                      lineHeight: '100%',
                      color: '#F67219',
                    }}
                  >
                    Talk to an Advisor
                  </span>
                </button>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end items-center mt-8 lg:mt-0">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ width: '100%', maxWidth: '450.9px' }}>
                <Image
                  src="/images/ayonaire-hero.png"
                  alt="Student with books"
                  width={451}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
                
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse hover:scale-110 transition-transform cursor-pointer"
                >
                  <svg width="93" height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="5" width="83" height="82.5328" rx="41.2664" fill="#F67219"/>
                    <rect x="2.5" y="2.5" width="88" height="87.5328" rx="43.7664" stroke="white" strokeOpacity="0.24" strokeWidth="5"/>
                    <path d="M58.9697 44.11C60.8379 45.2867 60.8379 48.0102 58.9697 49.1869L42.8488 59.3404C40.8511 60.5986 38.25 59.1629 38.25 56.8019V36.4949C38.25 34.134 40.8511 32.6982 42.8488 33.9565L58.9697 44.11Z" fill="white"/>
                  </svg>
                </button>
              </div>

              <div className="absolute hidden lg:block" style={{ right: '-70px', top: '30%' }}>
                <Image
                  src="/images/ayonaire-hero1.png"
                  alt="Students"
                  width={60}
                  height={180}
                  className="shadow-lg"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-10 flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <h3 
              className="flex-shrink-0 text-center md:text-left"
              style={{
                fontFamily: 'Spline Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(18px, 5vw, 24px)',
                lineHeight: '100%',
                color: '#141414',
              }}
            >
              As Featured In
            </h3>

            <div className="flex-1 relative overflow-hidden w-full">
              <div className="flex animate-scroll gap-6 md:gap-12 items-center">
                {[...featuredLogos, ...featuredLogos].map((logo, index) => (
                  <div key={index} className="flex-shrink-0 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                    <Image
                      src={logo.url}
                      alt={logo.name}
                      width={120}
                      height={40}
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
        `}</style>
      </section>

      {/* 2. STATS SECTION */}
      <section className="pt-6 md:pt-2 pb-8 md:pb-6 bg-white" ref={statsRef}>
        <div className="max-w-[1740px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <h2 
            className="mx-auto mb-6 md:mb-8 px-4"
            style={{
              maxWidth: '100%',
              fontFamily: 'Spline Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 7vw, 44px)',
              lineHeight: '1.2',
              textAlign: 'center',
              color: '#141414',
            }}
          >
            Trusted by Learners Across Africa and Beyond.
          </h2>

          <div className="grid grid-cols-2 lg:flex lg:flex-nowrap justify-center gap-3 md:gap-4 max-w-xl md:max-w-none mx-auto">
            {[
              { icon: 'hired.png', value: 65, suffix: '%', description: 'Hired After Internship', isRating: false },
              { icon: 'learner.png', value: 94, suffix: '%', description: 'Learner Satisfaction', isRating: false },
              { icon: 'completion.png', value: 89, suffix: '%', description: 'Completion Rate', isRating: false },
              { icon: 'star.png', value: 4.8, suffix: '', description: 'Learner Rating', isRating: true },
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center py-4 md:py-6"
                style={{
                  width: '100%',
                  maxWidth: '308px',
                  borderRadius: '20px',
                  background: '#FFF8F8',
                }}
              >
                <div 
                  className="mb-3 md:mb-5 flex items-center justify-center rounded-2xl"
                  style={{
                    width: '48px',
                    height: '48px',
                    background: '#FFFFFF',
                    boxShadow: '0px 4px 14px 0px #0000001A',
                  }}
                >
                  <Image
                    src={`/icons/${item.icon}`}
                    alt={item.description}
                    width={24}
                    height={24}
                    className="w-6 md:w-8 h-auto"
                  />
                </div>

                <div className="flex flex-col items-center" style={{ gap: 'clamp(8px, 2vw, 16px)' }}>
                  <h3 
                    style={{
                      fontFamily: 'Satoshi, sans-serif',
                      fontWeight: 700,
                      fontSize: 'clamp(40px, 10vw, 63px)',
                      lineHeight: '100%',
                      letterSpacing: '-0.2px',
                      textAlign: 'center',
                      color: '#F67219',
                    }}
                  >
                    <CountingNumber end={item.value} suffix={item.suffix} isRating={item.isRating} />
                  </h3>

                  <p 
                    style={{
                      fontFamily: 'Satoshi, sans-serif',
                      fontWeight: 500,
                      fontSize: 'clamp(16px, 4vw, 24px)',
                      lineHeight: '1.2',
                      letterSpacing: '-0.2px',
                      textAlign: 'center',
                      color: '#353535',
                      padding: '0 8px',
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BOOTCAMPS SECTION */}
      <section ref={bootcampRef} className="py-8 md:py-16" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #FFE7DE 100%)', borderRadius: '30px md:60px' }}>
        <div className="max-w-[1740px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="flex flex-col items-center">
            <div 
              className="flex items-center justify-center gap-2 mb-6 md:mb-8"
              style={{
                borderRadius: '100px',
                background: '#FFFFFF',
                border: '1px solid #D2D2D2',
                boxShadow: '0px 10px 10px 0px #6767DA14',
                padding: '10px 20px',
              }}
            >
              <style jsx>{`
                @media (min-width: 768px) {
                  div {
                    padding: 12px 24px !important;
                  }
                }
              `}</style>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.18759 4.14886C8.15964 6.48064 6.29326 8.34699 3.96148 9.37502C6.29326 10.403 8.15964 12.2693 9.18766 14.6012C10.2156 12.2693 12.082 10.403 14.4137 9.37502C12.082 8.34699 10.2156 6.48064 9.18759 4.14886ZM8.64294 2.297H9.73231C10.5589 5.50142 13.0612 8.00372 16.2656 8.83037V9.91967C13.0612 10.7462 10.5589 13.2486 9.73231 16.453H8.64294C7.81636 13.2486 5.31405 10.7462 2.10962 9.91967V8.83037C5.31405 8.00372 7.81636 5.50142 8.64294 2.297Z" fill="#6E6E6E"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M12.377 4.87377V3.74877C12.6231 3.74877 12.9563 3.59736 13.2487 3.30161C13.542 3.00499 13.6882 2.67056 13.6882 2.4375H14.8132C14.8132 2.66905 14.9601 3.00332 15.2554 3.30101C15.55 3.59806 15.8833 3.74877 16.1245 3.74877V4.87377C15.8616 4.87377 15.5291 5.02637 15.2442 5.31592C14.9582 5.60677 14.8132 5.94137 14.8132 6.18503H13.6882C13.6882 5.94853 13.538 5.61508 13.2394 5.31834C12.9403 5.02113 12.6062 4.87377 12.377 4.87377ZM14.2426 4.75183C14.306 4.67263 14.3729 4.59749 14.4422 4.52705C14.5185 4.44946 14.6007 4.3745 14.6882 4.30377C14.6061 4.23656 14.5287 4.1659 14.4566 4.09322C14.3859 4.02196 14.3173 3.94565 14.252 3.86501C14.1872 3.94538 14.119 4.02149 14.0486 4.09262C13.9726 4.16952 13.8906 4.24411 13.8035 4.31472C13.8844 4.38039 13.961 4.44939 14.0324 4.52037C14.1049 4.59241 14.1755 4.66981 14.2426 4.75183Z" fill="#6E6E6E"/>
              </svg>
              <span 
                style={{
                  fontFamily: 'Spline Sans, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '100%',
                  textAlign: 'center',
                  textTransform: 'capitalize',
                  background: 'linear-gradient(90deg, #F25E25 0%, #F97F11 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Our Bootcamps
              </span>
            </div>

            <h2 
              className="md:hidden mb-4 mx-auto px-4"
              style={{
                width: '250px',
                fontFamily: 'Spline Sans',
                fontWeight: 700,
                fontSize: '24px',
                lineHeight: '126%',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#141414',
              }}
            >
              Schools That Train You for the World's Most Demanded Skills
            </h2>

            <h2 
              className="hidden md:block mb-6 mx-auto px-4"
              style={{
                maxWidth: '100%',
                fontFamily: 'Spline Sans, sans-serif',
                fontWeight: 700,
                fontSize: '44px',
                lineHeight: '1.2',
                textAlign: 'center',
                color: '#141414',
              }}
            >
              Schools That Train You for the World's Most Demanded Skills
            </h2>

            <p 
              style={{
                fontFamily: 'Satoshi, sans-serif',
                fontWeight: 500,
                fontSize: 'clamp(14px, 3.5vw, 18px)',
                lineHeight: '1.6',
                letterSpacing: '-0.02em',
                textAlign: 'center',
                color: '#14141480',
                maxWidth: '800px',
                padding: '0 16px',
              }}
            >
              Explore our diverse range of bootcamps
            </p>
          </div>

          <div className="hidden md:block">
            <BootcampCarousel />
          </div>

          <div className="block md:hidden mt-8">
            <MobileBootcampAccordion />
          </div>
        </div>
      </section>

      {/* 4. COMPANY LOGOS SECTION */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <h2 
            className="md:hidden mb-8 px-4 mx-auto"
            style={{
              width: '250px',
              fontFamily: 'Spline Sans',
              fontWeight: 700,
              fontSize: '24px',
              lineHeight: '126%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#141414',
            }}
          >
            Our Talents Have Worked With Many of These Top Leading Companies
          </h2>

          <h2 
            className="hidden md:block mb-12 px-4"
            style={{
              maxWidth: '100%',
              margin: '0 auto',
              fontFamily: 'Spline Sans, sans-serif',
              fontWeight: 700,
              fontSize: '44px',
              lineHeight: '1.25',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#141414',
            }}
          >
            Our Talents Have Worked With Many of These Top Leading Companies
          </h2>

          <div 
            className="hidden md:grid grid-cols-5 gap-5"
            style={{
              maxWidth: '1280px',
              margin: '0 auto',
            }}
          >
            {[
              'microsoft',
              'google',
              'meta',
              'ibm',
              'nvidia',
              'palantir',
              'accenture',
              'deloitte',
              'mckinsey',
              'stripe',
              'spotify',
              'cgi',
              'tdbank',
              'salesforce',
              'wise',
            ].map((company) => (
              <div
                key={company}
                className="flex items-center justify-center"
                style={{
                  width: '240px',
                  height: '100px',
                  borderRadius: '20px',
                  background: '#FFFFFF',
                  boxShadow: '0px 13px 20px 0px #00000014',
                }}
              >
                <Image
                  src={`/logos/${company}.png`}
                  alt={company}
                  width={120}
                  height={40}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>

          <div className="md:hidden relative overflow-x-hidden overflow-y-visible">
            <div className="flex flex-col gap-4">
              <div className="flex animate-scroll-mobile gap-4">
                {[...Array(4)].map((_, setIndex) => (
                  <div key={setIndex} className="flex gap-4 flex-shrink-0">
                    {['microsoft', 'google', 'meta', 'ibm', 'nvidia', 'palantir', 'accenture', 'deloitte'].map((company) => (
                      <div
                        key={`${company}-${setIndex}`}
                        className="flex items-center justify-center flex-shrink-0"
                        style={{
                          width: '110px',
                          height: '70px',
                          borderRadius: '12px',
                          background: '#FFFFFF',
                          boxShadow: '0px 8px 16px 0px #00000012',
                        }}
                      >
                        <Image
                          src={`/logos/${company}.png`}
                          alt={company}
                          width={80}
                          height={30}
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              <div className="flex animate-scroll-mobile-reverse gap-4">
                {[...Array(4)].map((_, setIndex) => (
                  <div key={setIndex} className="flex gap-4 flex-shrink-0">
                    {['mckinsey', 'stripe', 'spotify', 'cgi', 'tdbank', 'salesforce', 'wise'].map((company) => (
                      <div
                        key={`${company}-${setIndex}`}
                        className="flex items-center justify-center flex-shrink-0"
                        style={{
                          width: '110px',
                          height: '70px',
                          borderRadius: '12px',
                          background: '#FFFFFF',
                          boxShadow: '0px 8px 16px 0px #00000012',
                        }}
                      >
                        <Image
                          src={`/logos/${company}.png`}
                          alt={company}
                          width={80}
                          height={30}
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <style jsx>{`
            @keyframes scroll-mobile {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(calc(-912px));
              }
            }
            @keyframes scroll-mobile-reverse {
              0% {
                transform: translateX(calc(-798px));
              }
              100% {
                transform: translateX(0);
              }
            }
            .animate-scroll-mobile {
              animation: scroll-mobile 25s linear infinite;
            }
            .animate-scroll-mobile-reverse {
              animation: scroll-mobile-reverse 22s linear infinite;
            }
          `}</style>
        </div>
      </section>

      {/* 5. WHY LEARNERS CHOOSE AYONAIRE SECTION */}
      <section 
        className="py-8 md:py-16 mx-4 md:mx-auto"
        style={{
          maxWidth: '1360px',
          borderRadius: '20px',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #FFE7DE 100%)',
        }}
      >
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center mb-8 md:mb-12">
            <div 
              className="flex items-center justify-center gap-2 mb-6 md:mb-8 mx-auto"
              style={{
                borderRadius: '100px',
                background: '#FFFFFF',
                border: '1px solid #D2D2D2',
                boxShadow: '0px 10px 10px 0px #6767DA14',
                padding: '10px 20px',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.18759 4.14886C8.15964 6.48064 6.29326 8.34699 3.96148 9.37502C6.29326 10.403 8.15964 12.2693 9.18766 14.6012C10.2156 12.2693 12.082 10.403 14.4137 9.37502C12.082 8.34699 10.2156 6.48064 9.18759 4.14886ZM8.64294 2.297H9.73231C10.5589 5.50142 13.0612 8.00372 16.2656 8.83037V9.91967C13.0612 10.7462 10.5589 13.2486 9.73231 16.453H8.64294C7.81636 13.2486 5.31405 10.7462 2.10962 9.91967V8.83037C5.31405 8.00372 7.81636 5.50142 8.64294 2.297Z" fill="#6E6E6E"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M12.377 4.87377V3.74877C12.6231 3.74877 12.9563 3.59736 13.2487 3.30161C13.542 3.00499 13.6882 2.67056 13.6882 2.4375H14.8132C14.8132 2.66905 14.9601 3.00332 15.2554 3.30101C15.55 3.59806 15.8833 3.74877 16.1245 3.74877V4.87377C15.8616 4.87377 15.5291 5.02637 15.2442 5.31592C14.9582 5.60677 14.8132 5.94137 14.8132 6.18503H13.6882C13.6882 5.94853 13.538 5.61508 13.2394 5.31834C12.9403 5.02113 12.6062 4.87377 12.377 4.87377ZM14.2426 4.75183C14.306 4.67263 14.3729 4.59749 14.4422 4.52705C14.5185 4.44946 14.6007 4.3745 14.6882 4.30377C14.6061 4.23656 14.5287 4.1659 14.4566 4.09322C14.3859 4.02196 14.3173 3.94565 14.252 3.86501C14.1872 3.94538 14.119 4.02149 14.0486 4.09262C13.9726 4.16952 13.8906 4.24411 13.8035 4.31472C13.8844 4.38039 13.961 4.44939 14.0324 4.52037C14.1049 4.59241 14.1755 4.66981 14.2426 4.75183Z" fill="#6E6E6E"/>
              </svg>
              <span 
                style={{
                  fontFamily: 'Spline Sans, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '100%',
                  textAlign: 'center',
                  textTransform: 'capitalize',
                  background: 'linear-gradient(90deg, #F25E25 0%, #F97F11 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Why Choose Ayonaire
              </span>
            </div>

            <h2 
              className="md:hidden mb-4 px-4 mx-auto"
              style={{
                width: '250px',
                fontFamily: 'Spline Sans',
                fontWeight: 700,
                fontSize: '24px',
                lineHeight: '126%',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#141414',
              }}
            >
              Why Learners Choose Ayonaire
            </h2>

            <h2 
              className="hidden md:block mb-6 px-4"
              style={{
                fontFamily: 'Spline Sans, sans-serif',
                fontWeight: 700,
                fontSize: '48px',
                lineHeight: '1.3',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#141414',
              }}
            >
              Why Learners Choose Ayonaire
            </h2>

            <p 
              className="px-4"
              style={{
                maxWidth: '100%',
                fontFamily: 'Satoshi, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(14px, 3.5vw, 20px)',
                lineHeight: '1.5',
                letterSpacing: '0.02em',
                textAlign: 'center',
                color: '#14141480',
                marginBottom: 'clamp(16px, 4vw, 0)',
              }}
            >
              Most tech schools only teach skills. At Ayonaire, we don&apos;t just train — we transform. Here&apos;s why thousands trust us to shape their future
            </p>
          </div>

          <div className="flex justify-center w-full">
            <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-4 md:gap-6 w-full max-w-[1328px]">
              {[
                {
                  icon: '/icons/why1.svg',
                  title: 'Gain Job-Ready Experience',
                  description: 'Every student gets placed into real projects and internships. You don\'t just graduate with certificates — you graduate with work experience that employers trust.',
                },
                {
                  icon: '/icons/why2.svg',
                  title: 'Get Expert Guidance to Get Hired',
                  description: 'Every student gets placed into real projects and internships. You don\'t just graduate with certificates — you graduate with work experience that employers trust.',
                },
                {
                  icon: '/icons/why3.svg',
                  title: 'Earn Certifications Employers Trust',
                  description: 'Every student gets placed into real projects and internships. You don\'t just graduate with certificates — you graduate with work experience that employers trust.',
                },
                {
                  icon: '/icons/why4.svg',
                  title: 'Build a Job-Winning Portfolio',
                  description: 'Every student gets placed into real projects and internships. You don\'t just graduate with certificates — you graduate with work experience that employers trust.',
                },
                {
                  icon: '/icons/why5.svg',
                  title: 'Launch Your Global Career',
                  description: 'Whether it\'s remote jobs, international roles, or visa guidance, we connect you beyond borders. Our mission is simple: prepare Africans for global opportunities while solving real world challenges.',
                },
                {
                  icon: '/icons/why6.svg',
                  title: 'Master the Skills for Career Growth',
                  description: 'Every student gets placed into real projects and internships. You don\'t just graduate with certificates — you graduate with work experience that employers trust.',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="w-full md:w-[310px]"
                  style={{
                    flexShrink: 0,
                    borderRadius: '16px',
                    padding: '3px',
                    background: 'linear-gradient(182.86deg, rgba(242, 94, 37, 0.24) 2.21%, rgba(249, 127, 17, 0) 56.93%)',
                  }}
                >
                  <div
                    className="h-full"
                    style={{
                      borderRadius: '16px',
                      background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.54) 99.49%, rgba(255, 255, 255, 0) 100%)',
                      padding: 'clamp(24px, 5vw, 40px) clamp(20px, 4vw, 24px)',
                    }}
                  >
                    <div style={{ marginBottom: 'clamp(16px, 4vw, 24px)' }}>
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={40}
                        height={40}
                        className="w-10 h-10"
                      />
                    </div>
                    
                    <h3 
                      className="md:hidden"
                      style={{
                        width: '270px',
                        maxWidth: '100%',
                        fontFamily: 'Spline Sans, sans-serif',
                        fontWeight: 500,
                        fontSize: '24px',
                        lineHeight: '132%',
                        letterSpacing: '0.02em',
                        color: '#141414',
                        marginBottom: '12px',
                        marginTop: 0,
                      }}
                    >
                      {item.title}
                    </h3>

                    <h3 
                      className="hidden md:block"
                      style={{
                        fontFamily: 'Spline Sans, sans-serif',
                        fontWeight: 500,
                        fontSize: '24px',
                        lineHeight: '132%',
                        letterSpacing: '0%',
                        color: '#141414',
                        marginBottom: '12px',
                        marginTop: 0,
                      }}
                    >
                      {item.title}
                    </h3>
                    
                    <p 
                      className="md:hidden"
                      style={{
                        width: '270px',
                        maxWidth: '100%',
                        fontFamily: 'Satoshi, sans-serif',
                        fontWeight: 400,
                        fontSize: '12px',
                        lineHeight: '150%',
                        letterSpacing: '0%',
                        color: '#6E6E6E',
                        margin: 0,
                      }}
                    >
                      {item.description}
                    </p>

                    <p 
                      className="hidden md:block"
                      style={{
                        fontFamily: 'Satoshi, sans-serif',
                        fontWeight: 400,
                        fontSize: '12px',
                        lineHeight: '150%',
                        letterSpacing: '0.02em',
                        color: '#6E6E6E',
                        margin: 0,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. JOB ASSISTANCE & CAREER SUPPORT SECTION */}
      <section className="pt-16 pb-0">
        <div className="max-w-[1280px] mx-auto px-6">
          {/* Desktop Version */}
          <div className="hidden md:block">
            <div className="flex items-start mb-8">
              <div 
                className="flex items-center justify-center gap-3"
                style={{
                  borderRadius: '100px',
                  background: '#FFFFFF',
                  border: '1px solid #D2D2D2',
                  boxShadow: '0px 10px 10px 0px #6767DA14',
                  padding: '12px 24px',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.18759 4.14886C8.15964 6.48064 6.29326 8.34699 3.96148 9.37502C6.29326 10.403 8.15964 12.2693 9.18766 14.6012C10.2156 12.2693 12.082 10.403 14.4137 9.37502C12.082 8.34699 10.2156 6.48064 9.18759 4.14886ZM8.64294 2.297H9.73231C10.5589 5.50142 13.0612 8.00372 16.2656 8.83037V9.91967C13.0612 10.7462 10.5589 13.2486 9.73231 16.453H8.64294C7.81636 13.2486 5.31405 10.7462 2.10962 9.91967V8.83037C5.31405 8.00372 7.81636 5.50142 8.64294 2.297Z" fill="#6E6E6E"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.377 4.87377V3.74877C12.6231 3.74877 12.9563 3.59736 13.2487 3.30161C13.542 3.00499 13.6882 2.67056 13.6882 2.4375H14.8132C14.8132 2.66905 14.9601 3.00332 15.2554 3.30101C15.55 3.59806 15.8833 3.74877 16.1245 3.74877V4.87377C15.8616 4.87377 15.5291 5.02637 15.2442 5.31592C14.9582 5.60677 14.8132 5.94137 14.8132 6.18503H13.6882C13.6882 5.94853 13.538 5.61508 13.2394 5.31834C12.9403 5.02113 12.6062 4.87377 12.377 4.87377ZM14.2426 4.75183C14.306 4.67263 14.3729 4.59749 14.4422 4.52705C14.5185 4.44946 14.6007 4.3745 14.6882 4.30377C14.6061 4.23656 14.5287 4.1659 14.4566 4.09322C14.3859 4.02196 14.3173 3.94565 14.252 3.86501C14.1872 3.94538 14.119 4.02149 14.0486 4.09262C13.9726 4.16952 13.8906 4.24411 13.8035 4.31472C13.8844 4.38039 13.961 4.44939 14.0324 4.52037C14.1049 4.59241 14.1755 4.66981 14.2426 4.75183Z" fill="#6E6E6E"/>
                </svg>
                <span 
                  style={{
                    fontFamily: 'Spline Sans, sans-serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '100%',
                    textAlign: 'center',
                    textTransform: 'capitalize',
                    background: 'linear-gradient(90deg, #F25E25 0%, #F97F11 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Why Join
                </span>
              </div>
            </div>

            <h2 
              style={{
                fontFamily: 'Spline Sans, sans-serif',
                fontWeight: 700,
                fontSize: '48px',
                lineHeight: '56px',
                letterSpacing: '0%',
                textAlign: 'left',
                textTransform: 'capitalize',
                color: '#141414',
                marginBottom: '24px',
              }}
            >
              Job Assistance & Career Support
            </h2>

            <p 
              className="mb-12"
              style={{
                width: '940px',
                maxWidth: '100%',
                fontFamily: 'Satoshi, sans-serif',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '30px',
                letterSpacing: '0%',
                textTransform: 'capitalize',
                color: '#6E6E6E',
                textAlign: 'left',
              }}
            >
              All Bootcamp Learners Receive Access To Our Smart Job Assistance Portal — A Suite Of Tools And Expert Resources Designed To Help You Stand Out In Today&apos;s Job Market.
            </p>

            <h3 
              className="mb-8"
              style={{
                fontFamily: 'Spline Sans, sans-serif',
                fontWeight: 500,
                fontSize: '32px',
                lineHeight: '56px',
                letterSpacing: '0%',
                textTransform: 'capitalize',
                color: '#141414',
              }}
            >
              What&apos;s Included
            </h3>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 407px)',
                columnGap: '29.5px',
                rowGap: '29px',
                width: '1280px',
                maxWidth: '100%',
                margin: '0 auto',
              }}
            >
              {[
                {
                  icon: '/icons/ats.svg',
                  title: 'ATS Resume Builder',
                  description: 'Create A Resume That Passes Applicant Tracking Systems.',
                },
                {
                  icon: '/icons/linkedin.svg',
                  title: 'LinkedIn Optimizer',
                  description: 'Get AI Suggestions To Strengthen Your Profile.',
                },
                {
                  icon: '/icons/resume.svg',
                  title: 'Resume Building & Review',
                  description: 'Professional Feedback To Highlight Your Strengths.',
                },
                {
                  icon: '/icons/website.svg',
                  title: 'Portfolio Website',
                  description: 'Automatically Showcase Your Best Projects.',
                },
                {
                  icon: '/icons/interview.svg',
                  title: 'Interview Preparation',
                  description: 'Structured Guidance And Confidence Training.',
                },
                {
                  icon: '/icons/interviews.svg',
                  title: 'Mock Interviews',
                  description: 'Available For Select Bootcamps.',
                },
                {
                  icon: '/icons/internship.svg',
                  title: 'Virtual Internship',
                  description: 'Gain Practical Experience Before Job Hunting.',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6"
                  style={{
                    width: '407px',
                    flexShrink: 0,
                    borderRadius: '10px',
                    background: '#FFFFFF',
                    border: '1px solid #0000000F',
                  }}
                >
                  <div 
                    className="flex items-center justify-center flex-shrink-0"
                    style={{
                      width: '58px',
                      height: '58px',
                      borderRadius: '50px',
                      background: 'linear-gradient(192.53deg, rgba(242, 94, 37, 0.24) 8.41%, rgba(249, 127, 17, 0) 94.27%)',
                    }}
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={32}
                      height={32}
                    />
                  </div>

                  <div>
                    <h4 
                      style={{
                        fontFamily: 'Satoshi, sans-serif',
                        fontWeight: 500,
                        fontSize: '20px',
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        textTransform: 'capitalize',
                        color: '#141414',
                        marginBottom: '8px',
                      }}
                    >
                      {item.title}
                    </h4>
                    
                    <p 
                      style={{
                        fontFamily: 'Satoshi, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '24px',
                        letterSpacing: '0%',
                        textTransform: 'capitalize',
                        color: '#6E6E6E',
                        margin: 0,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Version - Accordion */}
          <div className="md:hidden">
            <div className="flex flex-col items-start mb-6">
              <div 
                className="flex items-center justify-center gap-2 mb-6"
                style={{
                  borderRadius: '100px',
                  background: '#FFFFFF',
                  border: '1px solid #D2D2D2',
                  boxShadow: '0px 10px 10px 0px #6767DA14',
                  padding: '10px 20px',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.18759 4.14886C8.15964 6.48064 6.29326 8.34699 3.96148 9.37502C6.29326 10.403 8.15964 12.2693 9.18766 14.6012C10.2156 12.2693 12.082 10.403 14.4137 9.37502C12.082 8.34699 10.2156 6.48064 9.18759 4.14886ZM8.64294 2.297H9.73231C10.5589 5.50142 13.0612 8.00372 16.2656 8.83037V9.91967C13.0612 10.7462 10.5589 13.2486 9.73231 16.453H8.64294C7.81636 13.2486 5.31405 10.7462 2.10962 9.91967V8.83037C5.31405 8.00372 7.81636 5.50142 8.64294 2.297Z" fill="#6E6E6E"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.377 4.87377V3.74877C12.6231 3.74877 12.9563 3.59736 13.2487 3.30161C13.542 3.00499 13.6882 2.67056 13.6882 2.4375H14.8132C14.8132 2.66905 14.9601 3.00332 15.2554 3.30101C15.55 3.59806 15.8833 3.74877 16.1245 3.74877V4.87377C15.8616 4.87377 15.5291 5.02637 15.2442 5.31592C14.9582 5.60677 14.8132 5.94137 14.8132 6.18503H13.6882C13.6882 5.94853 13.538 5.61508 13.2394 5.31834C12.9403 5.02113 12.6062 4.87377 12.377 4.87377ZM14.2426 4.75183C14.306 4.67263 14.3729 4.59749 14.4422 4.52705C14.5185 4.44946 14.6007 4.3745 14.6882 4.30377C14.6061 4.23656 14.5287 4.1659 14.4566 4.09322C14.3859 4.02196 14.3173 3.94565 14.252 3.86501C14.1872 3.94538 14.119 4.02149 14.0486 4.09262C13.9726 4.16952 13.8906 4.24411 13.8035 4.31472C13.8844 4.38039 13.961 4.44939 14.0324 4.52037C14.1049 4.59241 14.1755 4.66981 14.2426 4.75183Z" fill="#6E6E6E"/>
                </svg>
                <span 
                  style={{
                    fontFamily: 'Spline Sans, sans-serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '100%',
                    textAlign: 'center',
                    textTransform: 'capitalize',
                    background: 'linear-gradient(90deg, #F25E25 0%, #F97F11 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Why Join
                </span>
              </div>

              <h2 
                className="mb-4"
                style={{
                  width: '250px',
                  fontFamily: 'Spline Sans',
                  fontWeight: 700,
                  fontSize: '24px',
                  lineHeight: '126%',
                  letterSpacing: '0%',
                  textAlign: 'left',
                  color: '#141414',
                }}
              >
                Job Assistance & Career Support
              </h2>

              <p 
                className="mb-6"
                style={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '150%',
                  letterSpacing: '0%',
                  color: '#6E6E6E',
                  textAlign: 'left',
                }}
              >
                Get Tools And Expert Support Through Our Smart Job Portal.
              </p>

              <h3 
                className="mb-4"
                style={{
                  fontFamily: 'Spline Sans',
                  fontWeight: 700,
                  fontSize: '20px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#141414',
                }}
              >
                What&apos;s Included
              </h3>
            </div>

            <JobAssistanceAccordion />
          </div>
        </div>
      </section>

      {/* 7. NEW FEATURES SECTION */}
      <section className="py-12">
        <div className="flex flex-col items-center mb-8">
          <div 
            className="flex items-center justify-center gap-2 mb-8"
            style={{
              borderRadius: '100px',
              background: '#FFFFFF',
              border: '1px solid #D2D2D2',
              boxShadow: '0px 10px 10px 0px #6767DA14',
              padding: '12px 24px',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.18759 4.14886C8.15964 6.48064 6.29326 8.34699 3.96148 9.37502C6.29326 10.403 8.15964 12.2693 9.18766 14.6012C10.2156 12.2693 12.082 10.403 14.4137 9.37502C12.082 8.34699 10.2156 6.48064 9.18759 4.14886ZM8.64294 2.297H9.73231C10.5589 5.50142 13.0612 8.00372 16.2656 8.83037V9.91967C13.0612 10.7462 10.5589 13.2486 9.73231 16.453H8.64294C7.81636 13.2486 5.31405 10.7462 2.10962 9.91967V8.83037C5.31405 8.00372 7.81636 5.50142 8.64294 2.297Z" fill="#6E6E6E"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M12.377 4.87377V3.74877C12.6231 3.74877 12.9563 3.59736 13.2487 3.30161C13.542 3.00499 13.6882 2.67056 13.6882 2.4375H14.8132C14.8132 2.66905 14.9601 3.00332 15.2554 3.30101C15.55 3.59806 15.8833 3.74877 16.1245 3.74877V4.87377C15.8616 4.87377 15.5291 5.02637 15.2442 5.31592C14.9582 5.60677 14.8132 5.94137 14.8132 6.18503H13.6882C13.6882 5.94853 13.538 5.61508 13.2394 5.31834C12.9403 5.02113 12.6062 4.87377 12.377 4.87377ZM14.2426 4.75183C14.306 4.67263 14.3729 4.59749 14.4422 4.52705C14.5185 4.44946 14.6007 4.3745 14.6882 4.30377C14.6061 4.23656 14.5287 4.1659 14.4566 4.09322C14.3859 4.02196 14.3173 3.94565 14.252 3.86501C14.1872 3.94538 14.119 4.02149 14.0486 4.09262C13.9726 4.16952 13.8906 4.24411 13.8035 4.31472C13.8844 4.38039 13.961 4.44939 14.0324 4.52037C14.1049 4.59241 14.1755 4.66981 14.2426 4.75183Z" fill="#6E6E6E"/>
            </svg>
            <span 
              style={{
                fontFamily: 'Spline Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '100%',
                textAlign: 'center',
                textTransform: 'capitalize',
                background: 'linear-gradient(90deg, #F25E25 0%, #F97F11 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              New Features
            </span>
          </div>

          <h2 
            className="md:hidden"
            style={{
              width: '250px',
              fontFamily: 'Spline Sans',
              fontWeight: 700,
              fontSize: '24px',
              lineHeight: '126%',
              letterSpacing: '0%',
              textAlign: 'center',
              textTransform: 'capitalize',
              color: '#141414',
            }}
          >
            New Features
          </h2>

          <h2 
            className="hidden md:block"
            style={{
              fontFamily: 'Spline Sans, sans-serif',
              fontWeight: 500,
              fontSize: '32px',
              lineHeight: '56px',
              letterSpacing: '0%',
              textTransform: 'capitalize',
              color: '#141414',
              textAlign: 'center',
            }}
          >
            New Features
          </h2>
        </div>

        {/* Desktop Grid - 4 columns, then 2 columns */}
        <div
          className="hidden md:grid"
          style={{
            gridTemplateColumns: 'repeat(4, 310px)',
            gap: '26px',
            justifyContent: 'center',
            maxWidth: '100%',
            margin: '0 auto',
            width: 'max-content',
          }}
        >
          {[
            {
              icon: '/icons/feature1.svg',
              title: <>AI-Powered<br />Resume Tools</>,
            },
            {
              icon: '/icons/feature2.svg',
              title: <>Live<br />Expert Webinars</>,
            },
            {
              icon: '/icons/feature3.svg',
              title: <>Enhanced<br />Portfolio Site</>,
            },
            {
              icon: '/icons/feature4.svg',
              title: <>AI Automation<br />Module</>,
            },
            {
              icon: '/icons/feature5.svg',
              title: <>Job<br />Playbooks</>,
            },
            {
              icon: '/icons/feature6.svg',
              title: <>Upgraded<br />Assistance Portal</>,
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                width: '310px',
                borderRadius: '12px',
                background: 'linear-gradient(90deg, #F25E25 0%, #F97F11 100%)',
                padding: '0 0 0 4px',
              }}
            >
              <div
                className="flex flex-col items-center justify-center p-6"
                style={{
                  background: '#FFFFFF',
                  borderRadius: '12px',
                  boxShadow: '0px 11px 60px 0px #00000014',
                }}
              >
                <div 
                  className="flex items-center justify-center mb-8"
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'radial-gradient(203.24% 185.08% at 0% 16.67%, #F67219 17.79%, #8E0000 99.99%, #F67219 100%), linear-gradient(132.4deg, #F67219 57.76%, #FFE6D5 98.88%)',
                  }}
                >
                  <Image
                    src={item.icon}
                    alt={typeof item.title === 'string' ? item.title : 'Feature'}
                    width={40}
                    height={40}
                  />
                </div>

                <h3 
                  style={{
                    fontFamily: 'Spline Sans, sans-serif',
                    fontWeight: 500,
                    fontSize: '24px',
                    lineHeight: '30px',
                    letterSpacing: '0%',
                    textAlign: 'center',
                    textTransform: 'capitalize',
                    color: '#141414',
                    margin: 0,
                  }}
                >
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Grid - 2 columns */}
        <div
          className="md:hidden grid grid-cols-2 gap-4 px-4"
          style={{
            maxWidth: '100%',
            margin: '0 auto',
          }}
        >
          {[
            {
              icon: '/icons/feature1.svg',
              title: 'AI-Powered Resume Tools',
            },
            {
              icon: '/icons/feature4.svg',
              title: 'AI Automation Module',
            },
            {
              icon: '/icons/feature2.svg',
              title: 'Live Expert Webinars',
            },
            {
              icon: '/icons/feature6.svg',
              title: 'Upgraded Assistance Portal',
            },
            {
              icon: '/icons/feature3.svg',
              title: 'Enhanced Portfolio Site',
            },
            {
              icon: '/icons/feature5.svg',
              title: 'Job Playbooks',
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                borderRadius: '12px',
                background: '#FFFFFF',
                borderLeft: '4px solid #F67219',
                boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.08)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                className="flex flex-col items-center justify-center py-6 px-4"
                style={{
                  minHeight: '160px',
                }}
              >
                <div 
                  className="flex items-center justify-center mb-4"
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #F67219 0%, #FFA55C 100%)',
                  }}
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={32}
                    height={32}
                  />
                </div>

                <h3 
                  style={{
                    fontFamily: 'Spline Sans',
                    fontWeight: 700,
                    fontSize: '16px',
                    lineHeight: '140%',
                    letterSpacing: '0%',
                    textAlign: 'center',
                    color: '#141414',
                    margin: 0,
                  }}
                >
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. MARQUEE TEXT SECTION */}
      <section className="py-16 overflow-hidden">
        <div className="relative">
          {/* Desktop Marquee */}
          <div
            className="hidden md:flex whitespace-nowrap"
            style={{
              animation: 'marquee 15s linear infinite',
            }}
          >
            <span
              style={{
                fontFamily: 'Spline Sans, sans-serif',
                fontWeight: 700,
                fontSize: '100px',
                lineHeight: '56px',
                letterSpacing: '0%',
                textAlign: 'center',
                textTransform: 'capitalize',
                color: '#1B1B1B14',
                paddingRight: '100px',
              }}
            >
              Your AI Career Starts Here with the global demand for AI professionals on the rise, there&apos;s never been a better time to enroll.
            </span>
            <span
              style={{
                fontFamily: 'Spline Sans, sans-serif',
                fontWeight: 700,
                fontSize: '100px',
                lineHeight: '56px',
                letterSpacing: '0%',
                textAlign: 'center',
                textTransform: 'capitalize',
                color: '#1B1B1B14',
                paddingRight: '100px',
              }}
            >
              Your AI Career Starts Here with the global demand for AI professionals on the rise, there&apos;s never been a better time to enroll.
            </span>
          </div>

          {/* Mobile Marquee */}
          <div
            className="md:hidden flex whitespace-nowrap"
            style={{
              animation: 'marquee 15s linear infinite',
            }}
          >
            <span
              style={{
                fontFamily: 'Spline Sans',
                fontWeight: 700,
                fontSize: '28px',
                lineHeight: '56px',
                letterSpacing: '0%',
                textAlign: 'center',
                verticalAlign: 'middle',
                textTransform: 'capitalize',
                color: '#1B1B1B14',
                paddingRight: '40px',
              }}
            >
              Your AI Career Starts Here with the global demand for AI professionals on the rise, there&apos;s never been a better time to enroll.
            </span>
            <span
              style={{
                fontFamily: 'Spline Sans',
                fontWeight: 700,
                fontSize: '28px',
                lineHeight: '56px',
                letterSpacing: '0%',
                textAlign: 'center',
                verticalAlign: 'middle',
                textTransform: 'capitalize',
                color: '#1B1B1B14',
                paddingRight: '40px',
              }}
            >
              Your AI Career Starts Here with the global demand for AI professionals on the rise, there&apos;s never been a better time to enroll.
            </span>
          </div>
        </div>
        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </section>

      {/* 9. TESTIMONIALS SECTION */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          {/* Desktop Version */}
          <div className="hidden md:block">
            <div className="flex items-center justify-between mb-12">
              <div className="flex flex-col items-start">
                <div 
                  className="flex items-center justify-center gap-3 mb-8"
                  style={{
                    borderRadius: '100px',
                    background: '#FFFFFF',
                    border: '1px solid #D2D2D2',
                    boxShadow: '0px 10px 10px 0px #6767DA14',
                    padding: '12px 24px',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.18759 4.14886C8.15964 6.48064 6.29326 8.34699 3.96148 9.37502C6.29326 10.403 8.15964 12.2693 9.18766 14.6012C10.2156 12.2693 12.082 10.403 14.4137 9.37502C12.082 8.34699 10.2156 6.48064 9.18759 4.14886ZM8.64294 2.297H9.73231C10.5589 5.50142 13.0612 8.00372 16.2656 8.83037V9.91967C13.0612 10.7462 10.5589 13.2486 9.73231 16.453H8.64294C7.81636 13.2486 5.31405 10.7462 2.10962 9.91967V8.83037C5.31405 8.00372 7.81636 5.50142 8.64294 2.297Z" fill="#6E6E6E"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.377 4.87377V3.74877C12.6231 3.74877 12.9563 3.59736 13.2487 3.30161C13.542 3.00499 13.6882 2.67056 13.6882 2.4375H14.8132C14.8132 2.66905 14.9601 3.00332 15.2554 3.30101C15.55 3.59806 15.8833 3.74877 16.1245 3.74877V4.87377C15.8616 4.87377 15.5291 5.02637 15.2442 5.31592C14.9582 5.60677 14.8132 5.94137 14.8132 6.18503H13.6882C13.6882 5.94853 13.538 5.61508 13.2394 5.31834C12.9403 5.02113 12.6062 4.87377 12.377 4.87377ZM14.2426 4.75183C14.306 4.67263 14.3729 4.59749 14.4422 4.52705C14.5185 4.44946 14.6007 4.3745 14.6882 4.30377C14.6061 4.23656 14.5287 4.1659 14.4566 4.09322C14.3859 4.02196 14.3173 3.94565 14.252 3.86501C14.1872 3.94538 14.119 4.02149 14.0486 4.09262C13.9726 4.16952 13.8906 4.24411 13.8035 4.31472C13.8844 4.38039 13.961 4.44939 14.0324 4.52037C14.1049 4.59241 14.1755 4.66981 14.2426 4.75183Z" fill="#6E6E6E"/>
                  </svg>
                  <span 
                    style={{
                      fontFamily: 'Spline Sans, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '100%',
                      textAlign: 'center',
                      textTransform: 'capitalize',
                      background: 'linear-gradient(90deg, #F25E25 0%, #F97F11 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Testimonial
                  </span>
                </div>

                <h2 
                  style={{
                    width: '382px',
                    maxWidth: '100%',
                    fontFamily: 'Spline Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: '48px',
                    lineHeight: '56px',
                    letterSpacing: '0%',
                    textTransform: 'capitalize',
                    color: '#141414',
                  }}
                >
                  Hear From Our Students
                </h2>
              </div>

              <div className="flex flex-col items-start gap-4">
                <div className="flex items-center gap-6">
                  <h3 
                    style={{
                      fontFamily: 'Spline Sans, sans-serif',
                      fontWeight: 600,
                      fontSize: '48px',
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      textTransform: 'capitalize',
                      color: '#141414',
                    }}
                  >
                    456+
                  </h3>
                  <p 
                    style={{
                      fontFamily: 'Spline Sans, sans-serif',
                      fontWeight: 500,
                      fontSize: '18px',
                      lineHeight: '26px',
                      letterSpacing: '0%',
                      textTransform: 'capitalize',
                      color: '#141414',
                      margin: 0,
                    }}
                  >
                    Customers Have Given<br />Rating For Support
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <Image
                    src="/icons/rating.svg"
                    alt="Rating"
                    width={122}
                    height={24}
                  />
                  <div 
                    style={{
                      width: '1px',
                      height: '24px',
                      background: '#D2D2D2',
                    }}
                  />
                  <p 
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '22px',
                      letterSpacing: '0%',
                      textTransform: 'capitalize',
                      color: '#6E6E6E',
                      margin: 0,
                    }}
                  >
                    Average Rating 5/5
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div
                ref={testimonialScrollRef}
                className="flex gap-[34px] overflow-x-auto scrollbar-hide scroll-smooth mb-8"
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                }}
              >
                {[
                  {
                    image: '/images/testimonial1.png',
                    name: 'Thandi L',
                    username: '@thandi l',
                    country: 'Cape Town, South Africa',
                    text: '"I\'ve Tried Other Online Courses, But Ayonaire Gave Me Real Mentorship And Structure. I Just Got Hired At A Digital Agency In Cape Town."',
                  },
                  {
                    image: '/images/testimonial2.png',
                    name: 'Jean-Paul M.',
                    username: '@ jean-paul m.',
                    country: 'Abidjan, Côte D\'Ivoire',
                    text: '"The Hands-On Projects Made Everything Click. I Now Freelance For Two Startups In Singapore Building AI-Powered Tools For Finance."',
                  },
                  {
                    image: '/images/testimonial3.png',
                    name: 'Kofi A.',
                    username: '@Thandi L',
                    country: 'Accra, Ghana',
                    text: '"The Community Here Is Unlike Anything I\'ve Experienced. The Support, The Weekly Check-Ins, The Portfolio Reviews, I Felt Seen And Guided Every Step."',
                  },
                ].map((testimonial, index) => (
                  <div
                    key={index}
                    style={{
                      minWidth: '404px',
                      width: '404px',
                      borderRadius: '12px',
                      background: '#FFFFFF',
                      border: '2px solid transparent',
                      backgroundImage: 'linear-gradient(white, white), linear-gradient(90deg, rgba(242, 94, 37, 0.1) 0%, rgba(249, 127, 17, 0.1) 100%)',
                      backgroundOrigin: 'border-box',
                      backgroundClip: 'padding-box, border-box',
                      position: 'relative',
                      padding: '24px',
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={46}
                        height={46}
                        style={{ borderRadius: '50%' }}
                      />
                      <div>
                        <h4 
                          style={{
                            fontFamily: 'Satoshi, sans-serif',
                            fontWeight: 700,
                            fontSize: '18px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                            textTransform: 'capitalize',
                            color: '#141414',
                            margin: 0,
                            marginBottom: '4px',
                          }}
                        >
                          {testimonial.name}
                        </h4>
                        <p 
                          style={{
                            fontFamily: 'Satoshi, sans-serif',
                            fontWeight: 400,
                            fontSize: '14px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                            textTransform: 'lowercase',
                            color: '#6E6E6E',
                            margin: 0,
                          }}
                        >
                          {testimonial.username}
                        </p>
                      </div>
                    </div>

                    <h5 
                      className="mb-4"
                      style={{
                        fontFamily: 'Satoshi, sans-serif',
                        fontWeight: 700,
                        fontSize: '18px',
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        textTransform: 'capitalize',
                        color: '#141414',
                        margin: 0,
                        marginBottom: '16px',
                      }}
                    >
                      {testimonial.country}
                    </h5>

                    <p 
                      className="mb-6"
                      style={{
                        fontFamily: 'Satoshi, sans-serif',
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '22px',
                        letterSpacing: '0%',
                        textTransform: 'capitalize',
                        color: '#6E6E6E',
                        margin: 0,
                        marginBottom: '24px',
                      }}
                    >
                      {testimonial.text}
                    </p>

                    <Image
                      src="/icons/ratings.svg"
                      alt="Rating"
                      width={122}
                      height={24}
                    />

                    <div
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: 'linear-gradient(90deg, #F25E25 0%, #F97F11 100%)',
                        borderRadius: '0 0 10px 10px',
                      }}
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-center items-center gap-4 mt-4">
                <button
                  onClick={() => {
                    const newIndex = Math.max(0, currentTestimonial - 1);
                    setCurrentTestimonial(newIndex);
                    if (testimonialScrollRef.current) {
                      testimonialScrollRef.current.scrollTo({
                        left: newIndex * 438,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className="p-2 hover:scale-110 transition-transform"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="#F67219" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <div className="flex gap-2">
                  {[0, 1, 2].map((index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setCurrentTestimonial(index);
                        if (testimonialScrollRef.current) {
                          testimonialScrollRef.current.scrollTo({
                            left: index * 438,
                            behavior: 'smooth'
                          });
                        }
                      }}
                      style={{
                        width: currentTestimonial === index ? '40px' : '12px',
                        height: '4px',
                        borderRadius: '2px',
                        background: currentTestimonial === index ? '#F67219' : '#D9D9D9',
                        transition: 'all 0.3s',
                        cursor: 'pointer',
                      }}
                    />
                  ))}
                </div>

                <button
                  onClick={() => {
                    const newIndex = Math.min(2, currentTestimonial + 1);
                    setCurrentTestimonial(newIndex);
                    if (testimonialScrollRef.current) {
                      testimonialScrollRef.current.scrollTo({
                        left: newIndex * 438,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className="p-2 hover:scale-110 transition-transform"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="#F67219" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Version */}
          <div className="md:hidden">
            <div className="flex flex-col items-center mb-8">
              <div 
                className="flex items-center justify-center gap-2 mb-6"
                style={{
                  borderRadius: '100px',
                  background: '#FFFFFF',
                  border: '1px solid #D2D2D2',
                  boxShadow: '0px 10px 10px 0px #6767DA14',
                  padding: '10px 20px',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.18759 4.14886C8.15964 6.48064 6.29326 8.34699 3.96148 9.37502C6.29326 10.403 8.15964 12.2693 9.18766 14.6012C10.2156 12.2693 12.082 10.403 14.4137 9.37502C12.082 8.34699 10.2156 6.48064 9.18759 4.14886ZM8.64294 2.297H9.73231C10.5589 5.50142 13.0612 8.00372 16.2656 8.83037V9.91967C13.0612 10.7462 10.5589 13.2486 9.73231 16.453H8.64294C7.81636 13.2486 5.31405 10.7462 2.10962 9.91967V8.83037C5.31405 8.00372 7.81636 5.50142 8.64294 2.297Z" fill="#6E6E6E"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.377 4.87377V3.74877C12.6231 3.74877 12.9563 3.59736 13.2487 3.30161C13.542 3.00499 13.6882 2.67056 13.6882 2.4375H14.8132C14.8132 2.66905 14.9601 3.00332 15.2554 3.30101C15.55 3.59806 15.8833 3.74877 16.1245 3.74877V4.87377C15.8616 4.87377 15.5291 5.02637 15.2442 5.31592C14.9582 5.60677 14.8132 5.94137 14.8132 6.18503H13.6882C13.6882 5.94853 13.538 5.61508 13.2394 5.31834C12.9403 5.02113 12.6062 4.87377 12.377 4.87377ZM14.2426 4.75183C14.306 4.67263 14.3729 4.59749 14.4422 4.52705C14.5185 4.44946 14.6007 4.3745 14.6882 4.30377C14.6061 4.23656 14.5287 4.1659 14.4566 4.09322C14.3859 4.02196 14.3173 3.94565 14.252 3.86501C14.1872 3.94538 14.119 4.02149 14.0486 4.09262C13.9726 4.16952 13.8906 4.24411 13.8035 4.31472C13.8844 4.38039 13.961 4.44939 14.0324 4.52037C14.1049 4.59241 14.1755 4.66981 14.2426 4.75183Z" fill="#6E6E6E"/>
                </svg>
                <span 
                  style={{
                    fontFamily: 'Spline Sans, sans-serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '100%',
                    textAlign: 'center',
                    textTransform: 'capitalize',
                    background: 'linear-gradient(90deg, #F25E25 0%, #F97F11 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Testimonial
                </span>
              </div>

              <h2 
                style={{
                  width: '250px',
                  fontFamily: 'Spline Sans',
                  fontWeight: 700,
                  fontSize: '24px',
                  lineHeight: '126%',
                  letterSpacing: '0%',
                  textAlign: 'center',
                  color: '#141414',
                  marginBottom: '24px',
                }}
              >
                Hear From Our Students
              </h2>
            </div>

            <div className="relative">
              <div
                ref={testimonialScrollRef}
                className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-4 -mx-4"
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  scrollSnapType: 'x mandatory',
                }}
              >
                {[
                  {
                    image: '/images/testimonial2.png',
                    name: 'Jean-Paul M.',
                    username: '@ jean-paul m.',
                    country: 'Abidjan, Côte D\'Ivoire',
                    text: '"The Hands-On Projects Made Everything Click. I Now Freelance For Two Startups In Singapore Building AI-Powered Tools For Finance."',
                  },
                  {
                    image: '/images/testimonial1.png',
                    name: 'Thandi L',
                    username: '@thandi l',
                    country: 'Cape Town, South Africa',
                    text: '"I\'ve Tried Other Online Courses, But Ayonaire Gave Me Real Mentorship And Structure. I Just Got Hired At A Digital Agency In Cape Town."',
                  },
                  {
                    image: '/images/testimonial3.png',
                    name: 'Kofi A.',
                    username: '@Thandi L',
                    country: 'Accra, Ghana',
                    text: '"The Community Here Is Unlike Anything I\'ve Experienced. The Support, The Weekly Check-Ins, The Portfolio Reviews, I Felt Seen And Guided Every Step."',
                  },
                ].map((testimonial, index) => (
                  <div
                    key={index}
                    style={{
                      minWidth: '320px',
                      maxWidth: '320px',
                      borderRadius: '16px',
                      background: '#FFFFFF',
                      boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.08)',
                      position: 'relative',
                      padding: '20px',
                      scrollSnapAlign: 'start',
                      flexShrink: 0,
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        style={{ borderRadius: '50%' }}
                      />
                      <div>
                        <h4 
                          style={{
                            fontFamily: 'Satoshi, sans-serif',
                            fontWeight: 700,
                            fontSize: '16px',
                            lineHeight: '100%',
                            color: '#141414',
                            margin: 0,
                            marginBottom: '6px',
                          }}
                        >
                          {testimonial.name}
                        </h4>
                        <p 
                          style={{
                            fontFamily: 'Satoshi, sans-serif',
                            fontWeight: 400,
                            fontSize: '12px',
                            lineHeight: '100%',
                            textTransform: 'lowercase',
                            color: '#6E6E6E',
                            margin: 0,
                          }}
                        >
                          {testimonial.username}
                        </p>
                      </div>
                    </div>

                    <h5 
                      style={{
                        fontFamily: 'Satoshi, sans-serif',
                        fontWeight: 700,
                        fontSize: '14px',
                        lineHeight: '100%',
                        color: '#141414',
                        margin: 0,
                        marginBottom: '12px',
                      }}
                    >
                      {testimonial.country}
                    </h5>

                    <p 
                      style={{
                        fontFamily: 'Satoshi, sans-serif',
                        fontWeight: 400,
                        fontSize: '13px',
                        lineHeight: '150%',
                        color: '#6E6E6E',
                        margin: 0,
                        marginBottom: '16px',
                      }}
                    >
                      {testimonial.text}
                    </p>

                    <div className="flex gap-1">
                      {[1, 2, 3, 4].map((star) => (
                        <svg key={star} width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M10 1L12.5 7.5L19 7.5L14 11.5L16 18L10 14L4 18L6 11.5L1 7.5L7.5 7.5L10 1Z" fill="#F67219"/>
                        </svg>
                      ))}
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 1L12.5 7.5L19 7.5L14 11.5L16 18L10 14L4 18L6 11.5L1 7.5L7.5 7.5L10 1Z" fill="#E5E5E5"/>
                      </svg>
                    </div>

                    <div
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: 'linear-gradient(90deg, #F25E25 0%, #F97F11 100%)',
                        borderRadius: '0 0 16px 16px',
                      }}
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-center items-center gap-4 mt-6">
                <button
                  onClick={() => {
                    const newIndex = Math.max(0, currentTestimonial - 1);
                    setCurrentTestimonial(newIndex);
                    if (testimonialScrollRef.current) {
                      const cardWidth = 320 + 16;
                      testimonialScrollRef.current.scrollTo({
                        left: newIndex * cardWidth,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className="p-2"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="15.5" stroke="#E5E5E5" strokeWidth="1"/>
                    <path d="M18 10L12 16L18 22" stroke="#F67219" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <div className="flex gap-2">
                  {[0, 1, 2].map((index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setCurrentTestimonial(index);
                        if (testimonialScrollRef.current) {
                          const cardWidth = 320 + 16;
                          testimonialScrollRef.current.scrollTo({
                            left: index * cardWidth,
                            behavior: 'smooth'
                          });
                        }
                      }}
                      style={{
                        width: currentTestimonial === index ? '32px' : '8px',
                        height: '4px',
                        borderRadius: '2px',
                        background: currentTestimonial === index ? '#F67219' : '#D9D9D9',
                        transition: 'all 0.3s',
                        cursor: 'pointer',
                      }}
                    />
                  ))}
                </div>

                <button
                  onClick={() => {
                    const newIndex = Math.min(2, currentTestimonial + 1);
                    setCurrentTestimonial(newIndex);
                    if (testimonialScrollRef.current) {
                      const cardWidth = 320 + 16;
                      testimonialScrollRef.current.scrollTo({
                        left: newIndex * cardWidth,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className="p-2"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="15.5" stroke="#E5E5E5" strokeWidth="1"/>
                    <path d="M14 22L20 16L14 10" stroke="#F67219" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. OUR MISSION SECTION */}
      <section className="py-16 hidden md:block">
        <div 
          className="mx-auto flex items-center gap-16"
          style={{
            maxWidth: '1277px',
            paddingLeft: '24px',
            paddingRight: '24px',
          }}
        >
          <div style={{ flex: 1 }}>
            <div 
              className="flex items-center gap-3 mb-8"
              style={{
                borderRadius: '100px',
                background: '#FFFFFF',
                border: '1px solid #D2D2D2',
                boxShadow: '0px 10px 10px 0px #6767DA14',
                padding: '12px 24px',
                width: 'fit-content',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.18759 4.14886C8.15964 6.48064 6.29326 8.34699 3.96148 9.37502C6.29326 10.403 8.15964 12.2693 9.18766 14.6012C10.2156 12.2693 12.082 10.403 14.4137 9.37502C12.082 8.34699 10.2156 6.48064 9.18759 4.14886ZM8.64294 2.297H9.73231C10.5589 5.50142 13.0612 8.00372 16.2656 8.83037V9.91967C13.0612 10.7462 10.5589 13.2486 9.73231 16.453H8.64294C7.81636 13.2486 5.31405 10.7462 2.10962 9.91967V8.83037C5.31405 8.00372 7.81636 5.50142 8.64294 2.297Z" fill="#6E6E6E"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M12.377 4.87377V3.74877C12.6231 3.74877 12.9563 3.59736 13.2487 3.30161C13.542 3.00499 13.6882 2.67056 13.6882 2.4375H14.8132C14.8132 2.66905 14.9601 3.00332 15.2554 3.30101C15.55 3.59806 15.8833 3.74877 16.1245 3.74877V4.87377C15.8616 4.87377 15.5291 5.02637 15.2442 5.31592C14.9582 5.60677 14.8132 5.94137 14.8132 6.18503H13.6882C13.6882 5.94853 13.538 5.61508 13.2394 5.31834C12.9403 5.02113 12.6062 4.87377 12.377 4.87377ZM14.2426 4.75183C14.306 4.67263 14.3729 4.59749 14.4422 4.52705C14.5185 4.44946 14.6007 4.3745 14.6882 4.30377C14.6061 4.23656 14.5287 4.1659 14.4566 4.09322C14.3859 4.02196 14.3173 3.94565 14.252 3.86501C14.1872 3.94538 14.119 4.02149 14.0486 4.09262C13.9726 4.16952 13.8906 4.24411 13.8035 4.31472C13.8844 4.38039 13.961 4.44939 14.0324 4.52037C14.1049 4.59241 14.1755 4.66981 14.2426 4.75183Z" fill="#6E6E6E"/>
              </svg>
              <span 
                style={{
                  fontFamily: 'Spline Sans, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '100%',
                  textAlign: 'center',
                  textTransform: 'capitalize',
                  background: 'linear-gradient(90deg, #F25E25 0%, #F97F11 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Our Mission
              </span>
            </div>

            <h2 
              className="mb-6"
              style={{
                width: '576px',
                maxWidth: '100%',
                fontFamily: 'Spline Sans, sans-serif',
                fontWeight: 700,
                fontSize: '44px',
                lineHeight: '53px',
                letterSpacing: '0%',
                color: '#141414',
              }}
            >
              Our Mission Is to Change Lives Through Digital Skills
            </h2>

            <div className="mb-8" style={{ width: '576px', maxWidth: '100%' }}>
              <p 
                style={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '24px',
                  letterSpacing: '0%',
                  color: 'rgba(20, 20, 20, 0.5)',
                  marginBottom: '16px',
                }}
              >
                We don&apos;t just train students; we produce problem-solvers, industry leaders, and community builders. Impact isn&apos;t a byproduct; it&apos;s the goal.
              </p>

              <p 
                style={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontWeight: 700,
                  fontSize: '18px',
                  lineHeight: '24px',
                  letterSpacing: '0%',
                  color: '#141414',
                  marginBottom: '16px',
                }}
              >
                We were founded to drive lasting change.
              </p>

              <p 
                style={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '24px',
                  letterSpacing: '0%',
                  color: 'rgba(20, 20, 20, 0.5)',
                }}
              >
                Transforming one life can have a lasting influence on generations, so every program, project, and mentorship is carefully designed to create a meaningful impact.
              </p>
            </div>

            <button
              className="group flex items-center justify-between rounded-[14px] transition-all hover:scale-105"
              style={{
                background: 'linear-gradient(90deg, #F67219 0%, #FFDCC4 100%)',
                paddingRight: '12px',
                paddingLeft: '16px',
                paddingTop: '12px',
                paddingBottom: '12px',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <span 
                style={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontWeight: 700,
                  fontSize: '16px',
                  lineHeight: '100%',
                  color: '#FFFFFF',
                  paddingRight: '12px',
                }}
              >
                Learn More About Us
              </span>
              <div 
                className="flex items-center justify-center bg-white rounded-lg flex-shrink-0"
                style={{
                  width: '33.33px',
                  height: '33.33px',
                }}
              >
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.39038 0.571899L15.275 7.74298L8.10394 14.6276" stroke="#F67721" strokeWidth="1.5"/>
                  <path d="M0.0153809 7.51331L14.9237 7.81712" stroke="#F67721" strokeWidth="1.5"/>
                </svg>
              </div>
            </button>
          </div>

          <div className="relative flex justify-end items-center" style={{ flexShrink: 0 }}>
            <div 
              className="relative overflow-hidden shadow-2xl"
              style={{ 
                width: '450.9px',
                borderRadius: '1.5rem',
                borderBottomLeftRadius: '100000px',
                borderBottomRightRadius: '100000px',
              }}
            >
              <Image
                src="/images/woman1.png"
                alt="Our Mission"
                width={451}
                height={600}
                className="w-full h-auto"
                style={{ color: 'transparent' }}
              />
              
              <button
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse hover:scale-110 transition-transform cursor-pointer"
                onClick={() => setIsPlaying(!isPlaying)}
                style={{
                  background: 'transparent',
                  border: 'none',
                }}
              >
                <svg width="93" height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="5" width="83" height="82.5328" rx="41.2664" fill="#F67219"/>
                  <rect x="2.5" y="2.5" width="88" height="87.5328" rx="43.7664" stroke="white" strokeOpacity="0.24" strokeWidth="5"/>
                  <path d="M58.9697 44.11C60.8379 45.2867 60.8379 48.0102 58.9697 49.1869L42.8488 59.3404C40.8511 60.5986 38.25 59.1629 38.25 56.8019V36.4949C38.25 34.134 40.8511 32.6982 42.8488 33.9565L58.9697 44.11Z" fill="white"/>
                </svg>
              </button>
            </div>

            <div 
              className="absolute shadow-lg"
              style={{
                right: '-70px',
                top: '30%',
              }}
            >
              <Image
                src="/images/people1.png"
                alt="Students"
                width={60}
                height={180}
                style={{ color: 'transparent' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 10. OUR MISSION SECTION - Mobile Version */}
      <section className="py-8 md:hidden">
        <div className="px-4">
          <div 
            className="flex items-center justify-center gap-2 mb-6"
            style={{
              borderRadius: '100px',
              background: '#FFFFFF',
              border: '1px solid #D2D2D2',
              boxShadow: '0px 10px 10px 0px #6767DA14',
              padding: '10px 20px',
              width: 'fit-content',
              margin: '0 auto',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.18759 4.14886C8.15964 6.48064 6.29326 8.34699 3.96148 9.37502C6.29326 10.403 8.15964 12.2693 9.18766 14.6012C10.2156 12.2693 12.082 10.403 14.4137 9.37502C12.082 8.34699 10.2156 6.48064 9.18759 4.14886ZM8.64294 2.297H9.73231C10.5589 5.50142 13.0612 8.00372 16.2656 8.83037V9.91967C13.0612 10.7462 10.5589 13.2486 9.73231 16.453H8.64294C7.81636 13.2486 5.31405 10.7462 2.10962 9.91967V8.83037C5.31405 8.00372 7.81636 5.50142 8.64294 2.297Z" fill="#6E6E6E"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M12.377 4.87377V3.74877C12.6231 3.74877 12.9563 3.59736 13.2487 3.30161C13.542 3.00499 13.6882 2.67056 13.6882 2.4375H14.8132C14.8132 2.66905 14.9601 3.00332 15.2554 3.30101C15.55 3.59806 15.8833 3.74877 16.1245 3.74877V4.87377C15.8616 4.87377 15.5291 5.02637 15.2442 5.31592C14.9582 5.60677 14.8132 5.94137 14.8132 6.18503H13.6882C13.6882 5.94853 13.538 5.61508 13.2394 5.31834C12.9403 5.02113 12.6062 4.87377 12.377 4.87377ZM14.2426 4.75183C14.306 4.67263 14.3729 4.59749 14.4422 4.52705C14.5185 4.44946 14.6007 4.3745 14.6882 4.30377C14.6061 4.23656 14.5287 4.1659 14.4566 4.09322C14.3859 4.02196 14.3173 3.94565 14.252 3.86501C14.1872 3.94538 14.119 4.02149 14.0486 4.09262C13.9726 4.16952 13.8906 4.24411 13.8035 4.31472C13.8844 4.38039 13.961 4.44939 14.0324 4.52037C14.1049 4.59241 14.1755 4.66981 14.2426 4.75183Z" fill="#6E6E6E"/>
            </svg>
            <span 
              style={{
                fontFamily: 'Spline Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '100%',
                textAlign: 'center',
                textTransform: 'capitalize',
                background: 'linear-gradient(90deg, #F25E25 0%, #F97F11 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Our Mission
            </span>
          </div>

          <h2 
            className="mb-4 text-center"
            style={{
              fontFamily: 'Spline Sans',
              fontWeight: 700,
              fontSize: '24px',
              lineHeight: '126%',
              letterSpacing: '0%',
              color: '#141414',
            }}
          >
            Our Mission Is to Change Lives Through Digital Skills
          </h2>

          {/* Image with play button */}
          <div className="relative mb-6 mx-auto" style={{ maxWidth: '400px' }}>
            <div 
              className="relative overflow-hidden shadow-2xl"
              style={{ 
                width: '100%',
                borderRadius: '1.5rem',
                borderBottomLeftRadius: '100px',
                borderBottomRightRadius: '100px',
              }}
            >
              <Image
                src="/images/woman1.png"
                alt="Our Mission"
                width={451}
                height={600}
                className="w-full h-auto"
              />
              
              <button
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse hover:scale-110 transition-transform cursor-pointer"
                onClick={() => setIsPlaying(!isPlaying)}
                style={{
                  background: 'transparent',
                  border: 'none',
                }}
              >
                <svg width="70" height="70" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="5" width="83" height="82.5328" rx="41.2664" fill="#F67219"/>
                  <rect x="2.5" y="2.5" width="88" height="87.5328" rx="43.7664" stroke="white" strokeOpacity="0.24" strokeWidth="5"/>
                  <path d="M58.9697 44.11C60.8379 45.2867 60.8379 48.0102 58.9697 49.1869L42.8488 59.3404C40.8511 60.5986 38.25 59.1629 38.25 56.8019V36.4949C38.25 34.134 40.8511 32.6982 42.8488 33.9565L58.9697 44.11Z" fill="white"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="mb-6">
            <p 
              className="mb-4"
              style={{
                fontFamily: 'Satoshi, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '150%',
                color: 'rgba(20, 20, 20, 0.5)',
              }}
            >
              We don&apos;t just train students; we produce problem-solvers, industry leaders, and community builders. Impact isn&apos;t a byproduct; it&apos;s the goal.
            </p>

            <p 
              className="mb-4"
              style={{
                fontFamily: 'Satoshi, sans-serif',
                fontWeight: 700,
                fontSize: '14px',
                lineHeight: '150%',
                color: '#141414',
              }}
            >
              We were founded to drive lasting change.
            </p>

            <p 
              style={{
                fontFamily: 'Satoshi, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '150%',
                color: 'rgba(20, 20, 20, 0.5)',
              }}
            >
              Transforming one life can have a lasting influence on generations, so every program, project, and mentorship is carefully designed to create a meaningful impact.
            </p>
          </div>

          <button
            className="w-full flex items-center justify-between rounded-[12px] transition-all hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #F67219 0%, #FFDCC4 100%)',
              paddingRight: '12px',
              paddingLeft: '16px',
              paddingTop: '14px',
              paddingBottom: '14px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <span 
              style={{
                fontFamily: 'Satoshi, sans-serif',
                fontWeight: 700,
                fontSize: '16px',
                lineHeight: '100%',
                color: '#FFFFFF',
                paddingRight: '12px',
              }}
            >
              Learn More About Us
            </span>
            <div 
              className="flex items-center justify-center bg-white rounded-lg flex-shrink-0"
              style={{
                width: '33.33px',
                height: '33.33px',
              }}
            >
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.39038 0.571899L15.275 7.74298L8.10394 14.6276" stroke="#F67721" strokeWidth="1.5"/>
                <path d="M0.0153809 7.51331L14.9237 7.81712" stroke="#F67721" strokeWidth="1.5"/>
              </svg>
            </div>
          </button>
        </div>
      </section>

      {/* 11. HOW WE LEARN AT AYONAIRE SECTION */}
      <section 
        className="py-16"
        style={{
          maxWidth: '100%',
          margin: '0 auto',
          background: 'linear-gradient(0deg, #F3F3F3, #F3F3F3), linear-gradient(0deg, #FBFBFB, #FBFBFB)',
        }}
      >
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center mb-16">
            <div 
              className="flex items-center justify-center gap-2 md:gap-3 mb-8"
              style={{
                borderRadius: '100px',
                background: '#FFFFFF',
                border: '1px solid #D2D2D2',
                boxShadow: '0px 10px 10px 0px #6767DA14',
                padding: '10px 20px',
              }}
            >
              <style jsx>{`
                @media (min-width: 768px) {
                  div {
                    padding: 12px 24px !important;
                  }
                }
              `}</style>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.18759 4.14886C8.15964 6.48064 6.29326 8.34699 3.96148 9.37502C6.29326 10.403 8.15964 12.2693 9.18766 14.6012C10.2156 12.2693 12.082 10.403 14.4137 9.37502C12.082 8.34699 10.2156 6.48064 9.18759 4.14886ZM8.64294 2.297H9.73231C10.5589 5.50142 13.0612 8.00372 16.2656 8.83037V9.91967C13.0612 10.7462 10.5589 13.2486 9.73231 16.453H8.64294C7.81636 13.2486 5.31405 10.7462 2.10962 9.91967V8.83037C5.31405 8.00372 7.81636 5.50142 8.64294 2.297Z" fill="#6E6E6E"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M12.377 4.87377V3.74877C12.6231 3.74877 12.9563 3.59736 13.2487 3.30161C13.542 3.00499 13.6882 2.67056 13.6882 2.4375H14.8132C14.8132 2.66905 14.9601 3.00332 15.2554 3.30101C15.55 3.59806 15.8833 3.74877 16.1245 3.74877V4.87377C15.8616 4.87377 15.5291 5.02637 15.2442 5.31592C14.9582 5.60677 14.8132 5.94137 14.8132 6.18503H13.6882C13.6882 5.94853 13.538 5.61508 13.2394 5.31834C12.9403 5.02113 12.6062 4.87377 12.377 4.87377ZM14.2426 4.75183C14.306 4.67263 14.3729 4.59749 14.4422 4.52705C14.5185 4.44946 14.6007 4.3745 14.6882 4.30377C14.6061 4.23656 14.5287 4.1659 14.4566 4.09322C14.3859 4.02196 14.3173 3.94565 14.252 3.86501C14.1872 3.94538 14.119 4.02149 14.0486 4.09262C13.9726 4.16952 13.8906 4.24411 13.8035 4.31472C13.8844 4.38039 13.961 4.44939 14.0324 4.52037C14.1049 4.59241 14.1755 4.66981 14.2426 4.75183Z" fill="#6E6E6E"/>
              </svg>
              <span 
                style={{
                  fontFamily: 'Spline Sans, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '100%',
                  textAlign: 'center',
                  textTransform: 'capitalize',
                  background: 'linear-gradient(90deg, #F25E25 0%, #F97F11 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Our Process
              </span>
            </div>

            <h2 
              className="md:hidden mb-6"
              style={{
                width: '250px',
                fontFamily: 'Spline Sans',
                fontWeight: 700,
                fontSize: '24px',
                lineHeight: '126%',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#141414',
              }}
            >
              How We Learn at Ayonaire
            </h2>

            <h2 
              className="hidden md:block mb-6"
              style={{
                fontFamily: 'Spline Sans, sans-serif',
                fontWeight: 700,
                fontSize: '48px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#141414',
                textAlign: 'center',
              }}
            >
              How We Learn at Ayonaire
            </h2>

            <p 
              style={{
                fontFamily: 'Satoshi, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(14px, 3.5vw, 18px)',
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#141414',
                maxWidth: '800px',
              }}
            >
              We walk with you from beginner to job-ready with a proven, structured learning experience. Every step of the journey is built for results
            </p>
          </div>

          {/* Process boxes would go here - keeping the desktop version as is */}
          <div className="hidden md:block">
            {/* Add your process boxes here */}
          </div>

          {/* Mobile Process Boxes */}
          <div className="md:hidden flex flex-col gap-4 px-4">
            {/* Process Box 1 */}
            <div 
              style={{
                borderRadius: '16px',
                border: '3px solid #F67219',
                background: '#FFFFFF',
                padding: '20px',
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div 
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #F67219 0%, #FFA55C 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="2" width="20" height="16" rx="2" stroke="white" strokeWidth="2"/>
                    <circle cx="12" cy="10" r="3" fill="white"/>
                  </svg>
                </div>
                <h3 
                  style={{
                    fontFamily: 'Spline Sans',
                    fontWeight: 700,
                    fontSize: '18px',
                    color: '#141414',
                    margin: 0,
                  }}
                >
                  Live Instructor-Led Classes
                </h3>
              </div>
              <p 
                style={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '150%',
                  color: '#6E6E6E',
                  margin: 0,
                  paddingLeft: '60px',
                }}
              >
                Join expert-led virtual classes where you'll learn through real-world use cases, performance tasks, and hands-on activities.
              </p>
            </div>

            {/* Process Box 2 */}
            <div 
              style={{
                borderRadius: '16px',
                border: '3px solid #E5E5E5',
                background: '#FAFAFA',
                padding: '20px',
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div 
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: '#E5E5E5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 11L12 14L22 4" stroke="#6E6E6E" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M21 12V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H16" stroke="#6E6E6E" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 
                  style={{
                    fontFamily: 'Spline Sans',
                    fontWeight: 700,
                    fontSize: '18px',
                    color: '#6E6E6E',
                    margin: 0,
                  }}
                >
                  Real-World Projects & Internship
                </h3>
              </div>
              <p 
                style={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '150%',
                  color: '#9E9E9E',
                  margin: 0,
                  paddingLeft: '60px',
                }}
              >
                Work on 5 capstone projects that reflect real industry problems which build your resume and portfolio.
              </p>
            </div>

            {/* Process Box 3 */}
            <div 
              style={{
                borderRadius: '16px',
                border: '3px solid #E5E5E5',
                background: '#FAFAFA',
                padding: '20px',
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div 
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: '#E5E5E5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="9" cy="9" r="2" stroke="#6E6E6E" strokeWidth="2"/>
                    <path d="M13 13C13 10.7909 11.2091 9 9 9C6.79086 9 5 10.7909 5 13" stroke="#6E6E6E" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M15 19C15 16.7909 16.7909 15 19 15C21.2091 15 23 16.7909 23 19" stroke="#6E6E6E" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 
                  style={{
                    fontFamily: 'Spline Sans',
                    fontWeight: 700,
                    fontSize: '18px',
                    color: '#6E6E6E',
                    margin: 0,
                  }}
                >
                  Mentorship & Feedback
                </h3>
              </div>
              <p 
                style={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '150%',
                  color: '#9E9E9E',
                  margin: 0,
                  paddingLeft: '60px',
                }}
              >
                Get weekly check-ins, 1-on-1 sessions, and feedback on your projects. You'll never feel stuck or alone.
              </p>
            </div>

            {/* Process Box 4 */}
            <div 
              style={{
                borderRadius: '16px',
                border: '3px solid #E5E5E5',
                background: '#FAFAFA',
                padding: '20px',
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div 
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: '#E5E5E5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M17 20H7C5.89543 20 5 19.1046 5 18V6C5 4.89543 5.89543 4 7 4H17C18.1046 4 19 4.89543 19 6V18C19 19.1046 18.1046 20 17 20Z" stroke="#6E6E6E" strokeWidth="2"/>
                    <path d="M9 8H15M9 12H15M9 16H13" stroke="#6E6E6E" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 
                  style={{
                    fontFamily: 'Spline Sans',
                    fontWeight: 700,
                    fontSize: '18px',
                    color: '#6E6E6E',
                    margin: 0,
                  }}
                >
                  Leadership & Soft Skills Mastery
                </h3>
              </div>
              <p 
                style={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '150%',
                  color: '#9E9E9E',
                  margin: 0,
                  paddingLeft: '60px',
                }}
              >
                Get weekly check-ins, 1-on-1 sessions, and feedback on your projects. You'll never feel stuck or alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. JOIN 1000+ LEARNERS SECTION - Mobile Version (moved position) */}
      <section className="md:hidden py-8 flex justify-center px-4">
        <div
          className="relative w-full"
          style={{
            borderRadius: '20px',
            overflow: 'hidden',
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              borderRadius: '20px',
              background: 'linear-gradient(132.4deg, #F67219 57.76%, #FFE6D5 98.88%)',
              opacity: 0.42,
            }}
          ></div>

          <div className="relative z-10 py-8 px-6">
            <h2
              className="mb-4"
              style={{
                width: '250px',
                fontFamily: 'Spline Sans',
                fontWeight: 700,
                fontSize: '24px',
                lineHeight: '126%',
                letterSpacing: '0%',
                textAlign: 'left',
                color: '#141414',
              }}
            >
              Join 1,000+ Learners Building Their Future with Ayonaire.
            </h2>

            <p
              className="mb-6"
              style={{
                fontFamily: 'Satoshi, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '150%',
                color: '#6E6E6E',
              }}
            >
              Across 19+ countries, aspiring tech professionals are choosing Ayonaire to gain high-income skills, launch global careers, and live with purpose and freedom.
            </p>

            <button
              className="w-full"
              style={{
                borderRadius: '12px',
                padding: '14px 24px',
                background: 'linear-gradient(90deg, #F25E25 0%, #F97F11 100%)',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <span
                style={{
                  fontFamily: 'Spline Sans, sans-serif',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '100%',
                  textAlign: 'center',
                  textTransform: 'capitalize',
                  color: '#FFFFFF',
                }}
              >
                Explore Our Bootcamps
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* 12. JOIN 1000+ LEARNERS SECTION - Desktop Version (original position) */}
      <section className="hidden md:flex py-16 justify-center">
        <div
          className="relative flex items-center justify-between px-16"
          style={{
            width: '1360px',
            maxWidth: '100%',
            borderRadius: '40px',
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              borderRadius: '40px',
              background: 'linear-gradient(132.4deg, #F67219 57.76%, #FFE6D5 98.88%)',
              opacity: 0.42,
            }}
          ></div>

          <div
            className="absolute inset-0"
            style={{
              borderRadius: '40px',
              overflow: 'hidden',
              opacity: 0.1,
            }}
          >
            <svg width="1360" height="539" viewBox="0 0 1360 539" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
              <path d="M646.427 -1001.2C597.466 -1128.59 355.241 -1191.5 395.213 -937.858C401.767 -896.269 402.427 -824.657 395.213 -737.49C388.605 -657.64 259.247 -613.949 219.539 -510.774C157.264 -348.966 390.105 -236.184 353.051 -151.125C304.521 -39.718 155.923 8.61902 73.7292 69.5696C-3.64737 126.948 -52.9338 219.014 -71.858 313.668C-105.058 479.727 -44.8081 653.751 121.161 662.409C204.245 666.743 313.821 629.638 451.429 529.349C512.953 484.509 567.205 447.556 615.421 417.676C739.521 340.77 706.156 522.682 853.723 529.349C937.806 533.147 1025.63 376.101 1092.11 459.87C1139.38 519.435 1193.62 591.707 1271.09 666.01C1407.14 796.498 1577.23 815.71 1601.29 629.478C1612.65 541.565 1591.46 407.872 1518.79 218.491C1472.28 97.2991 1587.96 101.571 1601.29 -53.7321C1614.62 -209.035 1505.63 -280.656 1584.53 -344.933L1586.11 -346.221C1646.24 -395.208 1710.38 -447.455 1745.41 -547.807C1775.58 -634.249 1772.7 -719.865 1745.41 -785.652C1716.2 -856.059 1659.04 -903.755 1584.53 -905.446C1509.76 -907.144 1417.52 -862.527 1318.52 -748.066C1253.25 -672.6 1209.04 -848.198 1092.11 -830.248C975.165 -812.297 958.912 -642.867 888.858 -692.009C767.168 -777.371 703.77 -852.01 646.427 -1001.2Z" stroke="white" strokeWidth="4"/>
            </svg>
          </div>

          <div className="relative z-10" style={{ width: '620px', maxWidth: '50%' }}>
            <h2
              className="mb-5"
              style={{
                fontFamily: 'Spline Sans, sans-serif',
                fontWeight: 700,
                fontSize: '44px',
                lineHeight: '53px',
                letterSpacing: '0%',
                color: '#141414',
              }}
            >
              Join 1,000+ Learners Building Their Future with Ayonaire.
            </h2>

            <p
              className="mb-8"
              style={{
                fontFamily: 'Satoshi, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '28px',
                letterSpacing: '-2%',
                color: '#6E6E6E',
              }}
            >
              Across 19+ countries, aspiring tech professionals are choosing Ayonaire to gain high-income skills, launch global careers, and live with purpose and freedom.
            </p>

            <button
              style={{
                width: '258px',
                gap: '10px',
                borderRadius: '12px',
                paddingTop: '16px',
                paddingRight: '32px',
                paddingBottom: '16px',
                paddingLeft: '32px',
                background: 'linear-gradient(90deg, #F25E25 0%, #F97F11 100%)',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <span
                style={{
                  fontFamily: 'Spline Sans, sans-serif',
                  fontWeight: 500,
                  fontSize: '18px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  textAlign: 'center',
                  textTransform: 'capitalize',
                  color: '#FFFFFF',
                }}
              >
                Explore Our Bootcamps
              </span>
            </button>
          </div>

          <div className="relative z-10" style={{ width: '555px', maxWidth: '45%' }}>
            <Image
              src="/images/map.png"
              alt="Global learners map"
              width={555}
              height={539}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </section>

      {/* 13. FAQ SECTION */}
      <section
        className="mx-4 md:mx-auto py-12 md:py-20"
        style={{
          maxWidth: '1360px',
          background: '#FFFFFF',
        }}
      >
        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 16px md:0' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 'clamp(40px, 8vw, 60px)' }}>
            <div
              className="flex items-center justify-center gap-2 md:gap-3 mb-6 md:mb-8"
              style={{
                borderRadius: '100px',
                background: '#FFFFFF',
                border: '1px solid #D2D2D2',
                boxShadow: '0px 10px 10px 0px #6767DA14',
                padding: '10px 20px',
              }}
            >
              <style jsx>{`
                @media (min-width: 768px) {
                  div {
                    padding: 12px 24px !important;
                  }
                }
              `}</style>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.18759 4.14886C8.15964 6.48064 6.29326 8.34699 3.96148 9.37502C6.29326 10.403 8.15964 12.2693 9.18766 14.6012C10.2156 12.2693 12.082 10.403 14.4137 9.37502C12.082 8.34699 10.2156 6.48064 9.18759 4.14886ZM8.64294 2.297H9.73231C10.5589 5.50142 13.0612 8.00372 16.2656 8.83037V9.91967C13.0612 10.7462 10.5589 13.2486 9.73231 16.453H8.64294C7.81636 13.2486 5.31405 10.7462 2.10962 9.91967V8.83037C5.31405 8.00372 7.81636 5.50142 8.64294 2.297Z" fill="#6E6E6E"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M12.377 4.87377V3.74877C12.6231 3.74877 12.9563 3.59736 13.2487 3.30161C13.542 3.00499 13.6882 2.67056 13.6882 2.4375H14.8132C14.8132 2.66905 14.9601 3.00332 15.2554 3.30101C15.55 3.59806 15.8833 3.74877 16.1245 3.74877V4.87377C15.8616 4.87377 15.5291 5.02637 15.2442 5.31592C14.9582 5.60677 14.8132 5.94137 14.8132 6.18503H13.6882C13.6882 5.94853 13.538 5.61508 13.2394 5.31834C12.9403 5.02113 12.6062 4.87377 12.377 4.87377ZM14.2426 4.75183C14.306 4.67263 14.3729 4.59749 14.4422 4.52705C14.5185 4.44946 14.6007 4.3745 14.6882 4.30377C14.6061 4.23656 14.5287 4.1659 14.4566 4.09322C14.3859 4.02196 14.3173 3.94565 14.252 3.86501C14.1872 3.94538 14.119 4.02149 14.0486 4.09262C13.9726 4.16952 13.8906 4.24411 13.8035 4.31472C13.8844 4.38039 13.961 4.44939 14.0324 4.52037C14.1049 4.59241 14.1755 4.66981 14.2426 4.75183Z" fill="#6E6E6E"/>
              </svg>
              <span
                style={{
                  fontFamily: 'Spline Sans, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '100%',
                  textAlign: 'center',
                  textTransform: 'capitalize',
                  background: 'linear-gradient(90deg, #F25E25 0%, #F97F11 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                FAQ
              </span>
            </div>

            <h2
              className="md:hidden"
              style={{
                width: '250px',
                fontFamily: 'Spline Sans',
                fontWeight: 700,
                fontSize: '24px',
                lineHeight: '126%',
                letterSpacing: '0%',
                textAlign: 'center',
                textTransform: 'capitalize',
                color: '#141414',
              }}
            >
              Frequently Asked Questions Certified AI Engineering Course
            </h2>

            <h2
              className="hidden md:block"
              style={{
                width: '856px',
                maxWidth: '100%',
                fontFamily: 'Spline Sans, sans-serif',
                fontWeight: 700,
                fontSize: '48px',
                lineHeight: '56px',
                textAlign: 'center',
                textTransform: 'capitalize',
                color: '#141414',
              }}
            >
              Frequently Asked Questions Certified AI Engineering Course
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <FAQItem
              number="01."
              question="Who is Ayonaire for?"
              answer="Ayonaire is for anyone looking to learn digital skills and advance their career in tech. Whether you're a complete beginner or looking to upskill, our programs are designed to guide you step-by-step with mentorship, real projects, and expert feedback."
              defaultOpen={true}
            />
            <FAQItem
              number="02."
              question="Are your bootcamps beginner-friendly?"
              answer="Yes. Whether you're starting from scratch or looking to upskill, our programs are designed to guide you step-by-step with mentorship, real projects, and expert feedback."
            />
            <FAQItem
              number="03."
              question="What bootcamps do you offer?"
              answer="We offer various bootcamps including AI Engineering, Data Analytics, Software Engineering, Product Management, and more. Each program is tailored to meet industry standards and prepare you for a successful career."
            />
            <FAQItem
              number="04."
              question="How are classes delivered?"
              answer="Classes are delivered through live virtual sessions with expert instructors. You'll participate in interactive lessons, work on real-world projects, and receive personalized feedback throughout your learning journey."
            />
            <FAQItem
              number="05."
              question="Do I get a certificate after the bootcamp?"
              answer="Yes, upon successful completion of the bootcamp, you'll receive a certificate that validates your skills and knowledge. This certificate is recognized by industry partners and can boost your career prospects."
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
            <button
              style={{
                borderRadius: '8px',
                padding: '12px 25px',
                background: 'linear-gradient(90deg, #F67219 0%, #FFDCC4 100%)',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <span
                style={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontWeight: 900,
                  fontSize: '16px',
                  lineHeight: '100%',
                  textAlign: 'center',
                  textTransform: 'capitalize',
                  color: '#FFFFFF',
                  whiteSpace: 'nowrap',
                }}
              >
                View More
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* POPUP */}
      {showPopup && (
        <>
          <div 
            className="fixed inset-0 bg-black z-40"
            style={{
              opacity: popupAnimated ? 0.5 : 0,
              transition: 'opacity 0.4s ease-out',
            }}
            onClick={handleClosePopup}
          />
          
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
            style={{
              pointerEvents: popupAnimated ? 'auto' : 'none',
            }}
          >
            <div 
              className="relative bg-white rounded-lg md:rounded-xl w-full max-w-[540px] md:max-w-[1360px]"
              style={{
                borderTop: '2px solid transparent',
                borderImage: 'linear-gradient(90deg, #F25E25 0%, #F97F11 100%) 1',
                transform: popupAnimated ? 'scale(1)' : 'scale(0.95)',
                opacity: popupAnimated ? 1 : 0,
                transition: 'transform 0.4s ease-out, opacity 0.4s ease-out',
              }}
            >
              <button
                onClick={handleClosePopup}
                className="absolute top-3 right-3 md:top-4 md:right-4 transition-all hover:scale-110 z-10"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-8 md:h-8">
                  <circle cx="12" cy="12" r="10" stroke="url(#paint0_linear_close)" strokeWidth="1.5"/>
                  <path d="M14.9994 15L9 9M9.00064 15L15 9" stroke="url(#paint1_linear_close)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="paint0_linear_close" x1="2" y1="12" x2="22" y2="12" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F25E25"/>
                      <stop offset="1" stopColor="#F97F11"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_close" x1="9" y1="12" x2="15" y2="12" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F25E25"/>
                      <stop offset="1" stopColor="#F97F11"/>
                    </linearGradient>
                  </defs>
                </svg>
              </button>

              {/* Mobile Layout */}
              <div className="flex flex-col items-center px-6 py-8 md:hidden">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <svg width="60" height="60" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.5001 37.5834C29.9349 37.5834 37.5834 29.9349 37.5834 20.5001C37.5834 11.0652 29.9349 3.41675 20.5001 3.41675C11.0652 3.41675 3.41675 11.0652 3.41675 20.5001C3.41675 29.9349 11.0652 37.5834 20.5001 37.5834Z" stroke="url(#paint0_linear_modal)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16.2292 16.2291C16.2292 13.8704 18.1414 11.9583 20.5001 11.9583C22.8588 11.9583 24.7709 13.8704 24.7709 16.2291C24.7709 17.693 24.0345 18.9848 22.9117 19.7544C21.7443 20.5544 20.5001 21.6472 20.5001 23.0624" stroke="url(#paint1_linear_modal)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M20.5002 29.0417H20.5154" stroke="url(#paint2_linear_modal)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <defs>
                        <linearGradient id="paint0_linear_modal" x1="3.41675" y1="20.5001" x2="37.5834" y2="20.5001" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#F25E25"/>
                          <stop offset="1" stopColor="#F97F11"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_modal" x1="16.2292" y1="17.5103" x2="24.7709" y2="17.5103" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#F25E25"/>
                          <stop offset="1" stopColor="#F97F11"/>
                        </linearGradient>
                        <linearGradient id="paint2_linear_modal" x1="20.5002" y1="29.5417" x2="20.5154" y2="29.5417" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#F25E25"/>
                          <stop offset="1" stopColor="#F97F11"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'Spline Sans, sans-serif',
                      fontWeight: 600,
                      fontSize: '20px',
                      lineHeight: '1.3',
                      color: '#141414',
                      textAlign: 'left',
                    }}
                  >
                    Lost in the noise and confused where to Start?
                  </h3>
                </div>

                <button
                  className="flex items-center justify-between rounded-xl transition-all hover:scale-105 w-full max-w-[280px]"
                  style={{
                    background: 'linear-gradient(90deg, #F67219 0%, #FFDCC4 100%)',
                    paddingRight: '12px',
                    paddingLeft: '24px',
                    paddingTop: '14px',
                    paddingBottom: '14px',
                  }}
                >
                  <span 
                    style={{
                      fontFamily: 'Satoshi, sans-serif',
                      fontWeight: 700,
                      fontSize: '16px',
                      lineHeight: '100%',
                      color: '#FFFFFF',
                      paddingRight: '12px',
                    }}
                  >
                    Take Our Survey
                  </span>
                  <div 
                    className="flex items-center justify-center bg-white rounded-lg flex-shrink-0"
                    style={{
                      width: '33.33px',
                      height: '33.33px',
                    }}
                  >
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.39038 0.571899L15.275 7.74298L8.10394 14.6276" stroke="#F67721" strokeWidth="1.5"/>
                      <path d="M0.0153809 7.51331L14.9237 7.81712" stroke="#F67721" strokeWidth="1.5"/>
                    </svg>
                  </div>
                </button>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:flex items-center justify-between px-12 py-6">
                <div className="flex items-center gap-4">
                  <svg width="123" height="1" viewBox="0 0 123 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="123" height="1" fill="#6E6E6E"/>
                  </svg>
                  
                  <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.5001 37.5834C29.9349 37.5834 37.5834 29.9349 37.5834 20.5001C37.5834 11.0652 29.9349 3.41675 20.5001 3.41675C11.0652 3.41675 3.41675 11.0652 3.41675 20.5001C3.41675 29.9349 11.0652 37.5834 20.5001 37.5834Z" stroke="url(#paint0_linear_232_309)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.2292 16.2291C16.2292 13.8704 18.1414 11.9583 20.5001 11.9583C22.8588 11.9583 24.7709 13.8704 24.7709 16.2291C24.7709 17.693 24.0345 18.9848 22.9117 19.7544C21.7443 20.5544 20.5001 21.6472 20.5001 23.0624" stroke="url(#paint1_linear_232_309)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20.5002 29.0417H20.5154" stroke="url(#paint2_linear_232_309)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                      <linearGradient id="paint0_linear_232_309" x1="3.41675" y1="20.5001" x2="37.5834" y2="20.5001" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F25E25"/>
                        <stop offset="1" stopColor="#F97F11"/>
                      </linearGradient>
                      <linearGradient id="paint1_linear_232_309" x1="16.2292" y1="17.5103" x2="24.7709" y2="17.5103" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F25E25"/>
                        <stop offset="1" stopColor="#F97F11"/>
                      </linearGradient>
                      <linearGradient id="paint2_linear_232_309" x1="20.5002" y1="29.5417" x2="20.5154" y2="29.5417" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F25E25"/>
                        <stop offset="1" stopColor="#F97F11"/>
                      </linearGradient>
                    </defs>
                  </svg>

                  <h3
                    style={{
                      fontFamily: 'Spline Sans, sans-serif',
                      fontWeight: 600,
                      fontSize: '32px',
                      lineHeight: '55px',
                      letterSpacing: '0%',
                      color: '#141414',
                    }}
                  >
                    Lost in the noise and confused where to Start?
                  </h3>
                </div>

                <button
                  className="flex items-center justify-between rounded-[14px] transition-all hover:scale-105"
                  style={{
                    background: 'linear-gradient(90deg, #F67219 0%, #FFDCC4 100%)',
                    paddingRight: '12px',
                    paddingLeft: '16px',
                    paddingTop: '12px',
                    paddingBottom: '12px',
                  }}
                >
                  <span 
                    style={{
                      fontFamily: 'Satoshi, sans-serif',
                      fontWeight: 700,
                      fontSize: '16px',
                      lineHeight: '100%',
                      color: '#FFFFFF',
                      paddingRight: '12px',
                    }}
                  >
                    Take Our Survey
                  </span>
                  <div 
                    className="flex items-center justify-center bg-white rounded-lg flex-shrink-0"
                    style={{
                      width: '33.33px',
                      height: '33.33px',
                    }}
                  >
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.39038 0.571899L15.275 7.74298L8.10394 14.6276" stroke="#F67721" strokeWidth="1.5"/>
                      <path d="M0.0153809 7.51331L14.9237 7.81712" stroke="#F67721" strokeWidth="1.5"/>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* FOOTER */}
      <Footer />
    </main>
  );
}

function BootcampCarousel() {
  const [activeTab, setActiveTab] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const tabs = [
    'School of AI',
    'School of Data',
    'School of Software Engineering',
    'School of Cyber Security',
    'School of Cloud & DevOps',
    'School of Digital Marketing',
    'School of Product',
  ];

  const bootcampsData = {
    'School of AI': [
      {
        image: '/images/SCHOOL-OF-AI/ai-engineering.jpg',
        title: 'AI Engineering',
        description: 'Whether you\'re starting from scratch or switching careers, there\'s a path here for you.',
        nextCohort: 'Jan 15, 2025',
        duration: '6 Months',
      },
      {
        image: '/images/SCHOOL-OF-AI/generative-ai.jpg',
        title: 'Generative AI Engineering',
        description: 'Whether you\'re starting from scratch or switching careers, there\'s a path here for you.',
        nextCohort: 'Jan 15, 2025',
        duration: '6 Months',
      },
      {
        image: '/images/SCHOOL-OF-AI/agentic-ai.jpg',
        title: 'Agentic AI Engineering',
        description: 'Whether you\'re starting from scratch or switching careers, there\'s a path here for you.',
        nextCohort: 'Jan 15, 2025',
        duration: '6 Months',
      },
      {
        image: '/images/SCHOOL-OF-AI/nlp-expert.jpg',
        title: 'Certified NLP Expert',
        description: 'Master natural language processing and build intelligent language applications.',
        nextCohort: 'Feb 1, 2025',
        duration: '4 Months',
      },
      {
        image: '/images/SCHOOL-OF-AI/machine-learning.jpg',
        title: 'Certified ML for AI',
        description: 'Learn machine learning fundamentals and advanced AI techniques.',
        nextCohort: 'Jan 20, 2025',
        duration: '5 Months',
      },
      {
        image: '/images/SCHOOL-OF-AI/deep-learning.jpg',
        title: 'Certified Deep Learning',
        description: 'Dive deep into neural networks and advanced deep learning architectures.',
        nextCohort: 'Feb 10, 2025',
        duration: '6 Months',
      },
      {
        image: '/images/SCHOOL-OF-AI/maths-AI.jpg',
        title: 'Math & Stats for AI',
        description: 'Build a strong mathematical foundation for artificial intelligence.',
        nextCohort: 'Jan 25, 2025',
        duration: '3 Months',
      },
      {
        image: '/images/SCHOOL-OF-AI/prompt-engineering.jpg',
        title: 'Prompt Engineering',
        description: 'Master the art of crafting effective prompts for AI systems.',
        nextCohort: 'Jan 18, 2025',
        duration: '2 Months',
      },
    ],
    'School of Data': [
      {
        image: '/images/SCHOOL-OF-DATA/data-science.jpg',
        title: 'Certified Data Science',
        description: 'Whether you\'re starting from scratch or switching careers, there\'s a path here for you.',
        nextCohort: 'Jan 15, 2025',
        duration: '6 Months',
      },
      {
        image: '/images/SCHOOL-OF-DATA/data-analytics.jpg',
        title: 'Certified Data Analytics',
        description: 'Transform raw data into actionable insights and make data-driven decisions.',
        nextCohort: 'Jan 22, 2025',
        duration: '5 Months',
      },
      {
        image: '/images/SCHOOL-OF-DATA/data-engineering.jpg',
        title: 'Certified Data Engineering',
        description: 'Build robust data pipelines and infrastructure for modern applications.',
        nextCohort: 'Feb 5, 2025',
        duration: '6 Months',
      },
      {
        image: '/images/SCHOOL-OF-DATA/data-analysis.jpg',
        title: 'Power BI Analytics',
        description: 'Create stunning visualizations and reports with Microsoft Power BI.',
        nextCohort: 'Jan 28, 2025',
        duration: '3 Months',
      },
      {
        image: '/images/SCHOOL-OF-DATA/data-analysis-tableau.jpg',
        title: 'Tableau Analytics',
        description: 'Master data visualization and storytelling with Tableau.',
        nextCohort: 'Feb 1, 2025',
        duration: '3 Months',
      },
      {
        image: '/images/SCHOOL-OF-DATA/machine-learning.jpg',
        title: 'ML for Data Analysis',
        description: 'Apply machine learning techniques to solve complex data problems.',
        nextCohort: 'Jan 30, 2025',
        duration: '5 Months',
      },
      {
        image: '/images/SCHOOL-OF-DATA/math-stats.jpg',
        title: 'Math & Stats for Data Science',
        description: 'Master the mathematical foundations of data science and analytics.',
        nextCohort: 'Jan 20, 2025',
        duration: '4 Months',
      },
      {
        image: '/images/SCHOOL-OF-DATA/sql.jpg',
        title: 'SQL for Data Analysis',
        description: 'Become proficient in SQL for data querying and manipulation.',
        nextCohort: 'Jan 25, 2025',
        duration: '2 Months',
      },
      {
        image: '/images/SCHOOL-OF-DATA/python.jpg',
        title: 'Python for Data Analysis',
        description: 'Learn Python programming for data analysis and visualization.',
        nextCohort: 'Jan 18, 2025',
        duration: '3 Months',
      },
      {
        image: '/images/SCHOOL-OF-DATA/big-data.jpg',
        title: 'Big Data with Apache Spark',
        description: 'Process and analyze massive datasets with Apache Spark.',
        nextCohort: 'Feb 8, 2025',
        duration: '4 Months',
      },
    ],
    'School of Software Engineering': [
      {
        image: '/images/SCHOOL-OF-SOFTWARE-ENGINEERING/fullstack.jpg',
        title: 'Full-Stack Development',
        description: 'Whether you\'re starting from scratch or switching careers, there\'s a path here for you.',
        nextCohort: 'Jan 15, 2025',
        duration: '6 Months',
      },
      {
        image: '/images/SCHOOL-OF-SOFTWARE-ENGINEERING/frontend.jpg',
        title: 'Front-End Development',
        description: 'Build beautiful and responsive user interfaces with modern frameworks.',
        nextCohort: 'Jan 20, 2025',
        duration: '4 Months',
      },
      {
        image: '/images/SCHOOL-OF-SOFTWARE-ENGINEERING/fullstack.jpg',
        title: 'Back-End Development',
        description: 'Master server-side programming and database management.',
        nextCohort: 'Jan 25, 2025',
        duration: '5 Months',
      },
      {
        image: '/images/SCHOOL-OF-SOFTWARE-ENGINEERING/python.jpg',
        title: 'Certified Python Expert',
        description: 'Become a Python expert and build powerful applications.',
        nextCohort: 'Feb 1, 2025',
        duration: '4 Months',
      },
      {
        image: '/images/SCHOOL-OF-SOFTWARE-ENGINEERING/python.jpg',
        title: 'Software Engineering with Python',
        description: 'Learn professional software development practices with Python.',
        nextCohort: 'Jan 28, 2025',
        duration: '6 Months',
      },
      {
        image: '/images/SCHOOL-OF-SOFTWARE-ENGINEERING/java.jpg',
        title: 'Software Engineering with Java',
        description: 'Master enterprise-level software development with Java.',
        nextCohort: 'Feb 5, 2025',
        duration: '6 Months',
      },
    ],
    'School of Cyber Security': [
      {
        image: '/images/School-of-Cyber/cyber-security.jpg',
        title: 'Certified Cyber Security',
        description: 'Whether you\'re starting from scratch or switching careers, there\'s a path here for you.',
        nextCohort: 'Jan 15, 2025',
        duration: '6 Months',
      },
      {
        image: '/images/School-of-Cyber/ethical-hacking.jpg',
        title: 'Certified Ethical Hacking',
        description: 'Learn to think like a hacker to protect systems and networks.',
        nextCohort: 'Jan 22, 2025',
        duration: '5 Months',
      },
    ],
    'School of Cloud & DevOps': [
      {
        image: '/images/School-of-Cloud-DevOps/cloud-computing.jpg',
        title: 'Certified Cloud Engineering',
        description: 'Whether you\'re starting from scratch or switching careers, there\'s a path here for you.',
        nextCohort: 'Jan 15, 2025',
        duration: '6 Months',
      },
      {
        image: '/images/School-of-Cloud-DevOps/devops.jpg',
        title: 'Certified DevOps Engineering',
        description: 'Master continuous integration, deployment, and infrastructure automation.',
        nextCohort: 'Jan 20, 2025',
        duration: '5 Months',
      },
    ],
    'School of Digital Marketing': [
      {
        image: '/images/School-of-Digital-Marketing/digital-marketing.jpg',
        title: 'AI in Digital Marketing',
        description: 'Whether you\'re starting from scratch or switching careers, there\'s a path here for you.',
        nextCohort: 'Jan 15, 2025',
        duration: '4 Months',
      },
      {
        image: '/images/School-of-Digital-Marketing/ai-rankings.jpg',
        title: 'AI SEO & GEO',
        description: 'Master search engine optimization with AI-powered strategies.',
        nextCohort: 'Jan 22, 2025',
        duration: '3 Months',
      },
      {
        image: '/images/School-of-Digital-Marketing/social-media.jpg',
        title: 'AI in Social Media Marketing',
        description: 'Leverage AI tools to create engaging social media campaigns.',
        nextCohort: 'Jan 28, 2025',
        duration: '3 Months',
      },
      {
        image: '/images/School-of-Digital-Marketing/search-marketing.jpg',
        title: 'AI in Search Marketing',
        description: 'Use artificial intelligence to optimize search marketing strategies.',
        nextCohort: 'Feb 1, 2025',
        duration: '3 Months',
      },
    ],
    'School of Product': [
      {
        image: '/images/School-Of-Marketing/product-design.jpg',
        title: 'Product Design',
        description: 'Whether you\'re starting from scratch or switching careers, there\'s a path here for you.',
        nextCohort: 'Jan 15, 2025',
        duration: '5 Months',
      },
      {
        image: '/images/School-Of-Marketing/business-development.jpg',
        title: 'Product Development',
        description: 'Learn to build products that users love from concept to launch.',
        nextCohort: 'Jan 20, 2025',
        duration: '6 Months',
      },
      {
        image: '/images/School-Of-Marketing/product management.jpg',
        title: 'Project Management',
        description: 'Master project management methodologies and lead successful teams.',
        nextCohort: 'Jan 25, 2025',
        duration: '4 Months',
      },
    ],
  };

  const currentBootcamps = bootcampsData[tabs[activeTab] as keyof typeof bootcampsData] || bootcampsData['School of AI'];

  const totalSlides = Math.ceil(currentBootcamps.length / 3);

  const nextSlide = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 420, behavior: 'smooth' });
    }
  };

  const prevSlide = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -420, behavior: 'smooth' });
    }
  };

  const visibleBootcamps = currentBootcamps.slice(currentSlide * 3, (currentSlide + 1) * 3);

  return (
    <div 
      className="mt-12 mx-auto p-6"
      style={{
        maxWidth: '1361px',
        borderRadius: '60px',
        background: '#FFFFFF',
        border: '1px solid #0000001A',
        overflow: 'visible',
      }}
    >
      <div 
        className="overflow-x-auto scrollbar-hide mb-8"
        style={{
          borderRadius: '4px',
          background: '#F3F3F3',
        }}
      >
        <div className="flex gap-1 p-2 min-w-max">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveTab(index);
                setCurrentSlide(0);
                setActiveCardIndex(0);
              }}
              className="px-6 py-4 rounded-sm whitespace-nowrap transition-all duration-300 hover:bg-white/50"
              style={
                activeTab === index
                  ? {
                      background: 'linear-gradient(90deg, #F67219 48.45%, #FFDCC4 100%)',
                      fontFamily: 'Satoshi, sans-serif',
                      fontWeight: 700,
                      fontSize: '18px',
                      lineHeight: '32px',
                      letterSpacing: '-0.02em',
                      color: '#ffffff',
                    }
                  : {
                      fontFamily: 'Satoshi, sans-serif',
                      fontWeight: 500,
                      fontSize: '18px',
                      lineHeight: '32px',
                      letterSpacing: '-0.02em',
                      color: '#141414',
                    }
              }
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="relative -mx-6">
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-6"
          style={{
            scrollBehavior: 'smooth',
            paddingTop: '10px',
            marginTop: '-10px',
          }}
        >
          {currentBootcamps.map((bootcamp, index) => (
            <div key={index} className="flex-shrink-0">
              <BootcampCard 
                {...bootcamp} 
                isActive={index === activeCardIndex}
                onClick={() => setActiveCardIndex(index)}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-4 mt-4">
          <button onClick={prevSlide} className="p-2 hover:scale-110 transition-transform">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="#F67219" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="flex gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <div
                key={index}
                className="cursor-pointer"
                onClick={() => setCurrentSlide(index)}
                style={{
                  width: index === currentSlide ? '40px' : '12px',
                  height: '4px',
                  borderRadius: '2px',
                  background: index === currentSlide ? '#F67219' : '#D9D9D9',
                  transition: 'all 0.3s',
                }}
              />
            ))}
          </div>
          <button onClick={nextSlide} className="p-2 hover:scale-110 transition-transform">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="#F67219" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

function BootcampCard({ image, title, description, nextCohort, duration, isActive, onClick }: {
  image: string;
  title: string;
  description: string;
  nextCohort: string;
  duration: string;
  isActive: boolean;
  onClick: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const isActiveOrHovered = isActive || isHovered;

  return (
    <div 
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative cursor-pointer transition-all hover:scale-[1.02]"
      style={{
        width: '406px',
        borderRadius: '26.02px',
        background: isActiveOrHovered ? 'linear-gradient(132.4deg, #F67219 57.76%, #FFE6D5 98.88%)' : '#FAFAFA',
        padding: '4px',
        boxShadow: isActiveOrHovered ? 'none' : '0px 13px 20px 0px #00000014',
      }}
    >
      <div 
        className="relative bg-white"
        style={{
          width: '398px',
          borderRadius: '22.12px',
          paddingTop: '10px',
        }}
      >
        <div 
          className="relative overflow-hidden mx-auto"
          style={{
            width: '378px',
            height: '242px',
            borderRadius: '15.61px',
            boxShadow: '2px 8px 22px 0px #BF744085',
          }}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-top"
          />
        </div>

        <div 
          className="px-[10px]"
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '17px',
            marginTop: '23px',
            paddingTop: '15px',
            paddingBottom: '40px',
          }}
        >
          <h3 
            style={{
              fontFamily: 'Spline Sans, sans-serif',
              fontWeight: 700,
              fontSize: '23.42px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#141219',
            }}
          >
            {title}
          </h3>

          <p 
            style={{
              fontFamily: 'Satoshi, sans-serif',
              fontWeight: 500,
              fontSize: '18.21px',
              lineHeight: '22.12px',
              letterSpacing: '-0.03em',
              color: '#141414CC',
            }}
          >
            {description}
          </p>

          <div className="flex items-center gap-2">
            <Image src="/icons/calendar.svg" alt="Calendar" width={20} height={20} />
            <span 
              style={{
                fontFamily: 'Satoshi, sans-serif',
                fontWeight: 500,
                fontSize: '18.21px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: 'gray',
              }}
            >
              Next Cohort: <strong style={{ color: '#141414' }}>{nextCohort}</strong>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Image src="/icons/duration.svg" alt="Duration" width={20} height={20} />
            <span 
              style={{
                fontFamily: 'Satoshi, sans-serif',
                fontWeight: 500,
                fontSize: '18.21px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: 'gray',
              }}
            >
              Duration: <strong style={{ color: '#141414' }}>{duration}</strong>
            </span>
          </div>
        </div>
      </div>

      <div 
        className="flex items-center justify-between px-6 py-6"
        style={{
          width: '398px',
          background: isActiveOrHovered 
            ? 'linear-gradient(90deg, #F67219 0%, #FFDCC4 118.57%)'
            : '#FFFFFF',
          borderRadius: '0 0 18px 18px',
        }}
      >
        <span 
          style={{
            fontFamily: 'Satoshi, sans-serif',
            fontWeight: 700,
            fontSize: '23.42px',
            lineHeight: '100%',
            letterSpacing: '0%',
            color: isActiveOrHovered ? '#FFFFFF' : '#141414',
          }}
        >
          View Program
        </span>
        <div 
          className="relative flex items-center"
          style={{
            width: '80.67px',
            borderRadius: '36.43px',
            padding: '8.46px 8.46px 8.46px 25.37px',
            gap: '18.21px',
            background: isActiveOrHovered ? 'linear-gradient(90deg, #F67219 0%, #FFDCC4 118.57%)' : 'transparent',
            border: isActiveOrHovered ? 'none' : '1.3px solid #E7E7E7',
          }}
        >
          <div 
            className="flex items-center justify-center relative"
            style={{
              width: '46.84px',
              height: '46.84px',
              borderRadius: '50%',
              background: isActiveOrHovered ? '#0000001A' : '#E1E1E1',
            }}
          >
            <Image 
              src="/icons/arrow.svg"
              alt="Arrow" 
              width={20} 
              height={20} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileBootcampAccordion() {
  const [expandedSchool, setExpandedSchool] = useState(0);

  const schools = [
    'School of AI',
    'School of Data',
    'School of Software Engineering',
    'School of Cyber Security',
    'School of Cloud & DevOps',
    'School of Digital Marketing',
    'School of Product',
  ];

  const bootcampsData = {
    'School of AI': [
      {
        image: '/images/SCHOOL-OF-AI/ai-engineering.jpg',
        title: 'AI Engineering',
        description: 'Whether you\'re starting from scratch or switching careers, there\'s a path here for you.',
        nextCohort: 'Jan 15, 2025',
        duration: '6 Months',
        rating: '4.5',
      },
      {
        image: '/images/SCHOOL-OF-AI/generative-ai.jpg',
        title: 'Generative AI Engineering',
        description: 'Whether you\'re starting from scratch or switching careers, there\'s a path here for you.',
        nextCohort: 'Jan 15, 2025',
        duration: '6 Months',
        rating: '5.0',
      },
      {
        image: '/images/SCHOOL-OF-AI/agentic-ai.jpg',
        title: 'Agentic AI Engineering',
        description: 'Whether you\'re starting from scratch or switching careers, there\'s a path here for you.',
        nextCohort: 'Jan 15, 2025',
        duration: '6 Months',
        rating: '4.8',
      },
      {
        image: '/images/SCHOOL-OF-AI/nlp-expert.jpg',
        title: 'Certified NLP Expert',
        description: 'Master natural language processing and build intelligent language applications.',
        nextCohort: 'Feb 1, 2025',
        duration: '4 Months',
        rating: '4.7',
      },
      {
        image: '/images/SCHOOL-OF-AI/machine-learning.jpg',
        title: 'Certified ML for AI',
        description: 'Learn machine learning fundamentals and advanced AI techniques.',
        nextCohort: 'Jan 20, 2025',
        duration: '5 Months',
        rating: '4.9',
      },
      {
        image: '/images/SCHOOL-OF-AI/deep-learning.jpg',
        title: 'Certified Deep Learning',
        description: 'Dive deep into neural networks and advanced deep learning architectures.',
        nextCohort: 'Feb 10, 2025',
        duration: '6 Months',
        rating: '4.8',
      },
      {
        image: '/images/SCHOOL-OF-AI/maths-AI.jpg',
        title: 'Math & Stats for AI',
        description: 'Build a strong mathematical foundation for artificial intelligence.',
        nextCohort: 'Jan 25, 2025',
        duration: '3 Months',
        rating: '4.6',
      },
      {
        image: '/images/SCHOOL-OF-AI/prompt-engineering.jpg',
        title: 'Prompt Engineering',
        description: 'Master the art of crafting effective prompts for AI systems.',
        nextCohort: 'Jan 18, 2025',
        duration: '2 Months',
        rating: '4.7',
      },
    ],
    'School of Data': [
      {
        image: '/images/SCHOOL-OF-DATA/data-science.jpg',
        title: 'Certified Data Science',
        description: 'Whether you\'re starting from scratch or switching careers, there\'s a path here for you.',
        nextCohort: 'Jan 15, 2025',
        duration: '6 Months',
        rating: '4.9',
      },
      {
        image: '/images/SCHOOL-OF-DATA/data-analytics.jpg',
        title: 'Certified Data Analytics',
        description: 'Transform raw data into actionable insights and make data-driven decisions.',
        nextCohort: 'Jan 22, 2025',
        duration: '5 Months',
        rating: '4.8',
      },
      {
        image: '/images/SCHOOL-OF-DATA/data-engineering.jpg',
        title: 'Certified Data Engineering',
        description: 'Build robust data pipelines and infrastructure for modern applications.',
        nextCohort: 'Feb 5, 2025',
        duration: '6 Months',
        rating: '4.7',
      },
      {
        image: '/images/SCHOOL-OF-DATA/data-analysis.jpg',
        title: 'Power BI Analytics',
        description: 'Create stunning visualizations and reports with Microsoft Power BI.',
        nextCohort: 'Jan 28, 2025',
        duration: '3 Months',
        rating: '4.6',
      },
      {
        image: '/images/SCHOOL-OF-DATA/data-analysis-tableau.jpg',
        title: 'Tableau Analytics',
        description: 'Master data visualization and storytelling with Tableau.',
        nextCohort: 'Feb 1, 2025',
        duration: '3 Months',
        rating: '4.8',
      },
      {
        image: '/images/SCHOOL-OF-DATA/machine-learning.jpg',
        title: 'ML for Data Analysis',
        description: 'Apply machine learning techniques to solve complex data problems.',
        nextCohort: 'Jan 30, 2025',
        duration: '5 Months',
        rating: '4.7',
      },
      {
        image: '/images/SCHOOL-OF-DATA/math-stats.jpg',
        title: 'Math & Stats for Data Science',
        description: 'Master the mathematical foundations of data science and analytics.',
        nextCohort: 'Jan 20, 2025',
        duration: '4 Months',
        rating: '4.5',
      },
      {
        image: '/images/SCHOOL-OF-DATA/sql.jpg',
        title: 'SQL for Data Analysis',
        description: 'Become proficient in SQL for data querying and manipulation.',
        nextCohort: 'Jan 25, 2025',
        duration: '2 Months',
        rating: '4.6',
      },
      {
        image: '/images/SCHOOL-OF-DATA/python.jpg',
        title: 'Python for Data Analysis',
        description: 'Learn Python programming for data analysis and visualization.',
        nextCohort: 'Jan 18, 2025',
        duration: '3 Months',
        rating: '4.8',
      },
      {
        image: '/images/SCHOOL-OF-DATA/big-data.jpg',
        title: 'Big Data with Apache Spark',
        description: 'Process and analyze massive datasets with Apache Spark.',
        nextCohort: 'Feb 8, 2025',
        duration: '4 Months',
        rating: '4.7',
      },
    ],
    'School of Software Engineering': [
      {
        image: '/images/SCHOOL-OF-SOFTWARE-ENGINEERING/fullstack.jpg',
        title: 'Full-Stack Development',
        description: 'Whether you\'re starting from scratch or switching careers, there\'s a path here for you.',
        nextCohort: 'Jan 15, 2025',
        duration: '6 Months',
        rating: '4.9',
      },
      {
        image: '/images/SCHOOL-OF-SOFTWARE-ENGINEERING/frontend.jpg',
        title: 'Front-End Development',
        description: 'Build beautiful and responsive user interfaces with modern frameworks.',
        nextCohort: 'Jan 20, 2025',
        duration: '4 Months',
        rating: '4.8',
      },
      {
        image: '/images/SCHOOL-OF-SOFTWARE-ENGINEERING/fullstack.jpg',
        title: 'Back-End Development',
        description: 'Master server-side programming and database management.',
        nextCohort: 'Jan 25, 2025',
        duration: '5 Months',
        rating: '4.7',
      },
      {
        image: '/images/SCHOOL-OF-SOFTWARE-ENGINEERING/python.jpg',
        title: 'Certified Python Expert',
        description: 'Become a Python expert and build powerful applications.',
        nextCohort: 'Feb 1, 2025',
        duration: '4 Months',
        rating: '4.8',
      },
      {
        image: '/images/SCHOOL-OF-SOFTWARE-ENGINEERING/python.jpg',
        title: 'Software Engineering with Python',
        description: 'Learn professional software development practices with Python.',
        nextCohort: 'Jan 28, 2025',
        duration: '6 Months',
        rating: '4.9',
      },
      {
        image: '/images/SCHOOL-OF-SOFTWARE-ENGINEERING/java.jpg',
        title: 'Software Engineering with Java',
        description: 'Master enterprise-level software development with Java.',
        nextCohort: 'Feb 5, 2025',
        duration: '6 Months',
        rating: '4.7',
      },
    ],
    'School of Cyber Security': [
      {
        image: '/images/School-of-Cyber/cyber-security.jpg',
        title: 'Certified Cyber Security',
        description: 'Whether you\'re starting from scratch or switching careers, there\'s a path here for you.',
        nextCohort: 'Jan 15, 2025',
        duration: '6 Months',
        rating: '4.8',
      },
      {
        image: '/images/School-of-Cyber/ethical-hacking.jpg',
        title: 'Certified Ethical Hacking',
        description: 'Learn to think like a hacker to protect systems and networks.',
        nextCohort: 'Jan 22, 2025',
        duration: '5 Months',
        rating: '4.9',
      },
    ],
    'School of Cloud & DevOps': [
      {
        image: '/images/School-of-Cloud-DevOps/cloud-computing.jpg',
        title: 'Certified Cloud Engineering',
        description: 'Whether you\'re starting from scratch or switching careers, there\'s a path here for you.',
        nextCohort: 'Jan 15, 2025',
        duration: '6 Months',
        rating: '4.8',
      },
      {
        image: '/images/School-of-Cloud-DevOps/devops.jpg',
        title: 'Certified DevOps Engineering',
        description: 'Master continuous integration, deployment, and infrastructure automation.',
        nextCohort: 'Jan 20, 2025',
        duration: '5 Months',
        rating: '4.9',
      },
    ],
    'School of Digital Marketing': [
      {
        image: '/images/School-of-Digital-Marketing/digital-marketing.jpg',
        title: 'AI in Digital Marketing',
        description: 'Whether you\'re starting from scratch or switching careers, there\'s a path here for you.',
        nextCohort: 'Jan 15, 2025',
        duration: '4 Months',
        rating: '4.7',
      },
      {
        image: '/images/School-of-Digital-Marketing/ai-rankings.jpg',
        title: 'AI SEO & GEO',
        description: 'Master search engine optimization with AI-powered strategies.',
        nextCohort: 'Jan 22, 2025',
        duration: '3 Months',
        rating: '4.8',
      },
      {
        image: '/images/School-of-Digital-Marketing/social-media.jpg',
        title: 'AI in Social Media Marketing',
        description: 'Leverage AI tools to create engaging social media campaigns.',
        nextCohort: 'Jan 28, 2025',
        duration: '3 Months',
        rating: '4.6',
      },
      {
        image: '/images/School-of-Digital-Marketing/search-marketing.jpg',
        title: 'AI in Search Marketing',
        description: 'Use artificial intelligence to optimize search marketing strategies.',
        nextCohort: 'Feb 1, 2025',
        duration: '3 Months',
        rating: '4.7',
      },
    ],
    'School of Product': [
      {
        image: '/images/School-Of-Marketing/product-design.jpg',
        title: 'Product Design',
        description: 'Whether you\'re starting from scratch or switching careers, there\'s a path here for you.',
        nextCohort: 'Jan 15, 2025',
        duration: '5 Months',
        rating: '4.8',
      },
      {
        image: '/images/School-Of-Marketing/business-development.jpg',
        title: 'Product Development',
        description: 'Learn to build products that users love from concept to launch.',
        nextCohort: 'Jan 20, 2025',
        duration: '6 Months',
        rating: '4.9',
      },
      {
        image: '/images/School-Of-Marketing/product management.jpg',
        title: 'Project Management',
        description: 'Master project management methodologies and lead successful teams.',
        nextCohort: 'Jan 25, 2025',
        duration: '4 Months',
        rating: '4.7',
      },
    ],
  };

  return (
    <div
      className="mx-auto"
      style={{
        maxWidth: '540px',
        borderRadius: '20px',
        background: '#FFFFFF',
        border: '1px solid #0000001A',
        padding: '16px',
      }}
    >
      {schools.map((school, index) => (
        <div key={index} className="mb-3">
          {/* Accordion Header */}
          <button
            onClick={() => setExpandedSchool(expandedSchool === index ? -1 : index)}
            className="w-full flex items-center justify-between px-4 py-4 rounded-lg transition-all"
            style={{
              background: expandedSchool === index ? '#FFF' : '#FFF',
              border: expandedSchool === index ? '2px solid #F67219' : '1px solid #E5E5E5',
              borderRadius: '12px',
            }}
          >
            <span
              style={{
                fontFamily: 'Satoshi, sans-serif',
                fontWeight: expandedSchool === index ? 700 : 500,
                fontSize: '16px',
                color: expandedSchool === index ? '#F67219' : '#141414',
                textAlign: 'left',
              }}
            >
              {school}
            </span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              style={{
                transform: expandedSchool === index ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s',
              }}
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke={expandedSchool === index ? '#F67219' : '#6E6E6E'}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Accordion Content */}
          {expandedSchool === index && (
            <div className="mt-4 px-2">
              <MobileBootcampCarousel bootcamps={bootcampsData[school] || []} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function MobileBootcampCarousel({ bootcamps }: { bootcamps: any[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    if (scrollRef.current && currentSlide < bootcamps.length - 1) {
      scrollRef.current.scrollBy({ left: 340, behavior: 'smooth' });
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (scrollRef.current && currentSlide > 0) {
      scrollRef.current.scrollBy({ left: -340, behavior: 'smooth' });
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div>
      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        style={{ scrollBehavior: 'smooth' }}
      >
        {bootcamps.map((bootcamp, index) => (
          <div key={index} className="snap-start flex-shrink-0" style={{ width: '320px' }}>
            <MobileBootcampCard {...bootcamp} />
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="disabled:opacity-30"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#F67219" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="flex gap-2">
          {bootcamps.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: currentSlide === index ? '32px' : '8px',
                height: '4px',
                borderRadius: '2px',
                background: currentSlide === index ? '#F67219' : '#D9D9D9',
                transition: 'all 0.3s',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === bootcamps.length - 1}
          className="disabled:opacity-30"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="#F67219" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

function MobileBootcampCard({ image, title, description, nextCohort, duration, rating }: any) {
  return (
    <div
      style={{
        borderRadius: '16px',
        background: '#FFFFFF',
        border: '2px solid #F672191A',
        overflow: 'hidden',
      }}
    >
      {/* Image */}
      <div className="relative" style={{ height: '180px' }}>
        <Image src={image} alt={title} fill className="object-cover" />
        {rating && (
          <div
            className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full"
            style={{ background: '#FFF' }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1L10 6L15 6L11 9L12.5 14L8 11L3.5 14L5 9L1 6L6 6L8 1Z" fill="#F67219"/>
            </svg>
            <span style={{ fontSize: '14px', fontWeight: 600 }}>{rating}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3
          style={{
            fontFamily: 'Spline Sans, sans-serif',
            fontWeight: 700,
            fontSize: '18px',
            lineHeight: '1.2',
            color: '#141219',
            marginBottom: '8px',
          }}
        >
          {title}
        </h3>

        <p
          style={{
            fontFamily: 'Satoshi, sans-serif',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '1.4',
            color: '#141414CC',
            marginBottom: '12px',
          }}
        >
          {description}
        </p>

        <div className="flex items-center gap-2 mb-2">
          <Image src="/icons/calendar.svg" alt="Calendar" width={16} height={16} />
          <span style={{ fontSize: '14px', color: '#6E6E6E' }}>
            Next Cohort: <strong style={{ color: '#141414' }}>{nextCohort}</strong>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Image src="/icons/duration.svg" alt="Duration" width={16} height={16} />
          <span style={{ fontSize: '14px', color: '#6E6E6E' }}>
            Duration: <strong style={{ color: '#141414' }}>{duration}</strong>
          </span>
        </div>
      </div>

      {/* Footer */}
      <div
        className="flex items-center justify-between px-4 py-3"
        style={{
          background: 'linear-gradient(90deg, #F67219 0%, #FFDCC4 118.57%)',
        }}
      >
        <span
          style={{
            fontFamily: 'Satoshi, sans-serif',
            fontWeight: 700,
            fontSize: '16px',
            color: '#FFFFFF',
          }}
        >
          View Program
        </span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M7 3L14 10L7 17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
  );
}

function JobAssistanceAccordion() {
  const [expandedItem, setExpandedItem] = useState(0);

  const items = [
    {
      icon: '/icons/ats.svg',
      title: 'ATS Resume Builder',
      description: 'Create A Resume That Passes Applicant Tracking Systems.',
    },
    {
      icon: '/icons/linkedin.svg',
      title: 'LinkedIn Optimizer',
      description: 'Get AI Suggestions To Strengthen Your Profile.',
    },
    {
      icon: '/icons/resume.svg',
      title: 'Resume Building & Review',
      description: 'Professional Feedback To Highlight Your Strengths.',
    },
    {
      icon: '/icons/website.svg',
      title: 'Portfolio Website',
      description: 'Automatically Showcase Your Best Projects.',
    },
    {
      icon: '/icons/interview.svg',
      title: 'Interview Preparation',
      description: 'Structured Guidance And Confidence Training.',
    },
    {
      icon: '/icons/interviews.svg',
      title: 'Mock Interviews',
      description: 'Available For Select Bootcamps.',
    },
    {
      icon: '/icons/internship.svg',
      title: 'Virtual Internship',
      description: 'Gain Practical Experience Before Job Hunting.',
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            borderRadius: '12px',
            border: expandedItem === index ? '2px solid #F67219' : '1px solid #E5E5E5',
            background: '#FFFFFF',
            overflow: 'hidden',
            transition: 'all 0.3s ease',
          }}
        >
          <button
            onClick={() => setExpandedItem(expandedItem === index ? -1 : index)}
            className="w-full flex items-center justify-between p-4"
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="flex items-center justify-center flex-shrink-0"
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'linear-gradient(192.53deg, rgba(242, 94, 37, 0.24) 8.41%, rgba(249, 127, 17, 0) 94.27%)',
                }}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={24}
                  height={24}
                />
              </div>
              <span
                style={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontWeight: expandedItem === index ? 700 : 500,
                  fontSize: '16px',
                  lineHeight: '100%',
                  color: '#141414',
                  textAlign: 'left',
                }}
              >
                {item.title}
              </span>
            </div>

            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              style={{
                transform: expandedItem === index ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s',
                flexShrink: 0,
              }}
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke={expandedItem === index ? '#F67219' : '#6E6E6E'}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {expandedItem === index && (
            <div
              className="px-4 pb-4"
              style={{
                animation: 'slideDown 0.3s ease',
              }}
            >
              <p
                style={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '150%',
                  letterSpacing: '0%',
                  color: '#6E6E6E',
                  margin: 0,
                  paddingLeft: '60px',
                }}
              >
                {item.description}
              </p>
            </div>
          )}
        </div>
      ))}

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}