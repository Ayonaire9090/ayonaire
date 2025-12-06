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
        width: '1152px',
        borderRadius: '8px',
        border: isOpen ? '2px solid' : '2px solid rgba(242, 94, 37, 0.2)',
        borderImageSource: isOpen ? 'linear-gradient(90deg, #F25E25 0%, #F97F11 100%)' : undefined,
        borderImageSlice: isOpen ? 1 : undefined,
        padding: '24px',
        background: isOpen ? '#FFFFFF' : '#FAFAFA',
        boxShadow: isOpen ? '0px 11px 60px 0px #00000014' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        className="flex items-center justify-between"
        style={{ cursor: 'pointer' }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center" style={{ gap: '16px', flex: 1 }}>
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
              minWidth: '40px',
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
            marginLeft: '56px',
            marginTop: 0,
          }}
        >
          {answer}
        </p>
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
    }, [end]);

    if (isRating) {
      return <>{count.toFixed(1)}/5</>;
    }

    return <>{Math.round(count)}{suffix}</>;
  };

  return (
    <main>
      <section 
        className="relative w-full overflow-hidden"
        style={{
          background: 'linear-gradient(178.47deg, #FFAC74 1.3%, #FFFFFF 45.22%)',
          height: '872px',
        }}
      >
        <Header />
        
        <div className="max-w-[1740px] mx-auto px-6 md:px-12 lg:px-20 pt-8 pb-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
              <h1 
                className="leading-[65px]"
                style={{
                  fontFamily: 'Spline Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '60px',
                  color: '#141414',
                }}
              >
                Build a Future-Proof Career in Tech
              </h1>

              <div className="space-y-4">
                {[
                  'Build a future-proof skillset',
                  'Break into high-paying roles, and',
                  'Thrive in high-growth industries'
                ].map((text, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                      <path d="M7.04049 14.9742C7.03815 14.9742 7.03542 14.9742 7.03308 14.9742C6.93638 14.9723 6.84513 14.931 6.77962 14.86L0.0935999 7.58983C-0.0210443 7.46505 -0.0315728 7.2771 0.0686433 7.14023C0.168859 7.00375 0.351354 6.95695 0.504993 7.0287L6.62442 9.89403C6.67589 9.9182 6.73672 9.90651 6.77611 9.86556L16.1106 0.109496C16.237 -0.0226959 16.4437 -0.0371239 16.5872 0.0767404C16.7307 0.190605 16.7638 0.394937 16.6636 0.548185L7.37819 14.7726C7.36493 14.7933 7.34933 14.812 7.33217 14.8296L7.29123 14.8705C7.22455 14.9368 7.13408 14.9742 7.04049 14.9742Z" fill="#F67219"/>
                    </svg>
                    <span 
                      style={{
                        fontFamily: 'Satoshi, sans-serif',
                        fontWeight: 500,
                        fontSize: '18px',
                        lineHeight: '100%',
                        color: '#141414',
                      }}
                    >
                      {text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  className="group flex items-center justify-between rounded-[14px] transition-all hover:scale-105 pr-3 pl-4 py-3"
                  style={{
                    background: 'linear-gradient(90deg, #F67219 0%, #FFDCC4 100%)',
                  }}
                >
                  <span 
                    className="pr-3"
                    style={{
                      fontFamily: 'Satoshi, sans-serif',
                      fontWeight: 700,
                      fontSize: '16px',
                      lineHeight: '100%',
                      color: '#FFFFFF',
                    }}
                  >
                    See Bootcamps
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

                <button
                  className="px-6 py-4 rounded-[14px] border transition-all hover:bg-orange-50"
                  style={{
                    borderColor: '#F67219',
                    borderWidth: '1px',
                  }}
                >
                  <span 
                    style={{
                      fontFamily: 'Satoshi, sans-serif',
                      fontWeight: 700,
                      fontSize: '16px',
                      lineHeight: '100%',
                      color: '#F67219',
                    }}
                  >
                    Talk to an Advisor
                  </span>
                </button>
              </div>
            </div>

            <div className="relative flex justify-end items-center">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ width: '450.9px' }}>
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

              <div className="absolute" style={{ right: '-70px', top: '30%' }}>
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

          <div className="mt-10 flex items-center gap-8">
            <h3 
              className="flex-shrink-0"
              style={{
                fontFamily: 'Spline Sans, sans-serif',
                fontWeight: 700,
                fontSize: '24px',
                lineHeight: '100%',
                color: '#141414',
              }}
            >
              As Featured In
            </h3>

            <div className="flex-1 relative overflow-hidden">
              <div className="flex animate-scroll gap-12 items-center">
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

      <section className="pt-2 pb-6 bg-white" ref={statsRef}>
        <div className="max-w-[1740px] mx-auto px-6 md:px-12 lg:px-20">
          <h2 
            className="mx-auto mb-8"
            style={{
              width: '777px',
              maxWidth: '100%',
              fontFamily: 'Spline Sans, sans-serif',
              fontWeight: 700,
              fontSize: '44px',
              lineHeight: '55px',
              textAlign: 'center',
              color: '#141414',
            }}
          >
            Trusted by Learners Across Africa and Beyond.
          </h2>

          <div className="flex flex-nowrap justify-center gap-4">
            {[
              { icon: 'hired.png', value: 65, suffix: '%', description: 'Hired After Internship', isRating: false },
              { icon: 'learner.png', value: 94, suffix: '%', description: 'Learner Satisfaction', isRating: false },
              { icon: 'completion.png', value: 89, suffix: '%', description: 'Completion Rate', isRating: false },
              { icon: 'star.png', value: 4.8, suffix: '', description: 'Learner Rating', isRating: true },
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center py-6"
                style={{
                  width: '308px',
                  borderRadius: '20px',
                  background: '#FFF8F8',
                }}
              >
                <div 
                  className="mb-5 flex items-center justify-center rounded-2xl"
                  style={{
                    width: '64px',
                    background: '#FFFFFF',
                    boxShadow: '0px 4px 14px 0px #0000001A',
                  }}
                >
                  <Image
                    src={`/icons/${item.icon}`}
                    alt={item.description}
                    width={32}
                    height={32}
                    className="w-8 h-auto py-4"
                  />
                </div>

                <div className="flex flex-col items-center" style={{ gap: '16px' }}>
                  <h3 
                    style={{
                      fontFamily: 'Satoshi, sans-serif',
                      fontWeight: 700,
                      fontSize: '63px',
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
                      fontSize: '24px',
                      lineHeight: '24px',
                      letterSpacing: '-0.2px',
                      textAlign: 'center',
                      color: '#353535',
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

      <section ref={bootcampRef} className="py-16" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #FFE7DE 100%)', borderRadius: '60px' }}>
        <div className="max-w-[1740px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col items-center">
            <div 
              className="flex items-center justify-center gap-2 mb-8"
              style={{
                width: '220px',
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
                Our Bootcamps
              </span>
            </div>

            <h2 
              className="mb-6 mx-auto"
              style={{
                width: '777px',
                maxWidth: '100%',
                fontFamily: 'Spline Sans, sans-serif',
                fontWeight: 700,
                fontSize: '44px',
                lineHeight: '55px',
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
                fontSize: '18px',
                lineHeight: '29px',
                letterSpacing: '-0.02em',
                textAlign: 'center',
                color: '#14141480',
                maxWidth: '800px',
              }}
            >
              Explore our diverse range of bootcamps
            </p>
          </div>

          <BootcampCarousel />
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 
            style={{
              width: '796px',
              margin: '0 auto',
              fontFamily: 'Spline Sans, sans-serif',
              fontWeight: 700,
              fontSize: '44px',
              lineHeight: '55px',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#141414',
              marginBottom: '48px',
            }}
          >
            Our Talents Have Worked With Many of These Top Leading Companies
          </h2>

          <div 
            className="grid grid-cols-5"
            style={{
              maxWidth: '1280px',
              margin: '0 auto',
              gap: '20px',
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
        </div>
      </section>

      <section 
        className="py-16 mx-auto"
        style={{
          maxWidth: '1440px',
          borderRadius: '60px',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #FFE7DE 100%)',
        }}
      >
        <div className="px-6">
          <div className="flex flex-col items-center mb-12">
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
                Why Choose Ayonaire
              </span>
            </div>

            <h2 
              className="mb-6"
              style={{
                fontFamily: 'Spline Sans, sans-serif',
                fontWeight: 700,
                fontSize: '48px',
                lineHeight: '126%',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#141414',
              }}
            >
              Why Learners Choose Ayonaire
            </h2>

            <p 
              style={{
                width: '714.42px',
                maxWidth: '100%',
                fontFamily: 'Satoshi, sans-serif',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '100%',
                letterSpacing: '0.02em',
                textAlign: 'center',
                color: '#14141480',
              }}
            >
              Most tech schools only teach skills. At Ayonaire, we don&apos;t just train — we transform. Here&apos;s why thousands trust us to shape their future
            </p>
          </div>

          <div 
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <div 
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '24px',
                maxWidth: '1328px',
              }}
            >
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
                style={{
                  width: '310px',
                  flexShrink: 0,
                  borderRadius: '16px',
                  padding: '10px',
                  background: 'linear-gradient(182.86deg, rgba(242, 94, 37, 0.24) 2.21%, rgba(249, 127, 17, 0) 56.93%)',
                }}
              >
                <div
                  style={{
                    borderRadius: '16px',
                    background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.54) 99.49%, rgba(255, 255, 255, 0) 100%)',
                    paddingTop: '40px',
                    paddingLeft: '24px',
                    paddingRight: '24px',
                    paddingBottom: '40px',
                  }}
                >
                  <div style={{ marginBottom: '24px' }}>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={40}
                      height={40}
                    />
                  </div>
                  
                  <h3 
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

      <section className="pt-16 pb-0">
        <div className="max-w-[1280px] mx-auto px-6">
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
            className="mb-6"
            style={{
              fontFamily: 'Spline Sans, sans-serif',
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: '56px',
              letterSpacing: '0%',
              textAlign: 'left',
              textTransform: 'capitalize',
              color: '#141414',
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
        </div>

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
      </section>


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

        <div
          style={{
            display: 'grid',
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
                    alt={item.title}
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
      </section>

      <section className="py-16 overflow-hidden">
        <div className="relative">
          <div
            className="flex whitespace-nowrap"
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

      <section className="py-16 flex justify-center">
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
              <path d="M435.713 -882.363C400.237 -1113.27 621.591 -1055.71 666.479 -938.923C721.435 -796.15 782.192 -729.236 896.358 -653.494C960.565 -609.044 976.015 -763.746 1083.09 -780.56C1190.17 -797.375 1231.07 -638.027 1290.98 -706.676C1382.09 -810.791 1466.81 -850.724 1535.24 -848.204C1603.23 -846.209 1655.35 -802.085 1681.69 -737.3C1706.28 -676.719 1708.31 -598.1 1679.63 -519.009C1642.2 -424.998 1588.14 -366.481 1533.25 -318.636C1461.54 -259.117 1560.04 -193.377 1546.98 -51.9865C1533.93 89.4041 1427.49 85.1246 1468.86 194.484C1533.91 365.756 1552.44 486.392 1541.45 565.551C1519.06 734.486 1363.38 716.374 1238.43 597.39C1166.78 529.524 1116.02 463.875 1071.56 410.655C1010.4 334.854 929.743 478.249 852.387 475.415C717.167 470.044 746.67 305.013 632.993 375.278C588.362 402.758 538.333 436.492 481.777 477.258C354.274 568.382 253.739 599.731 178.603 593.488C27.7228 584.955 -26.8613 425.978 3.68391 274.313C21.2397 187.613 66.5227 103.331 137.461 50.7301C215.236 -6.94495 351.942 -52.1226 396.346 -157.697C430.124 -236.177 218.023 -340.043 274.447 -488.513C310.338 -583.637 427.806 -624.643 433.909 -698.38C440.552 -778.642 440.782 -844.39 435.713 -882.363Z" stroke="white" strokeWidth="4"/>
              <path d="M478.031 -824.533C447.105 -1031.94 647.263 -979.916 688.012 -874.124C740.503 -738.255 798.53 -679.283 905.005 -613.405C963.271 -573.792 977.896 -713.257 1074.95 -728.879C1172 -744.502 1209.56 -601.926 1264.01 -663.533C1347.1 -756.961 1424.17 -792.08 1486.17 -788.748C1547.53 -786.458 1594.54 -746.05 1617.96 -687.102C1639.82 -631.926 1640.99 -560.564 1613.85 -489.085C1574.37 -402.605 1531.3 -338.066 1482.18 -291.902C1417.77 -237.338 1505.63 -177.695 1492.87 -50.6811C1480.1 76.3331 1383.06 72.0609 1419.24 169.23C1476.58 321.836 1492.41 429.02 1481.81 499.168C1461.13 650.253 1320.08 633.301 1206.41 526.212C1140.68 465.006 1093.48 406.195 1051.89 359.492C996.151 291.907 922.777 421.18 852.259 419.317C729.584 415.259 755.181 267.649 652.094 331.042C611.112 356.031 565.378 386.435 513.876 422.994C396.663 504.656 305.317 530.15 238.238 522.022C102.667 513.644 53.8292 370.237 81.6748 233.463C97.8367 155.003 139.05 78.7839 203.447 31.1329C276.689 -23.0731 401.304 -64.9406 441.517 -164.327C471.97 -235.968 280.919 -330.575 331.409 -465.219C363.43 -551.979 468.836 -590.16 474.426 -657.542C480.489 -730.634 481.608 -790.301 478.031 -824.533Z" stroke="white" strokeWidth="4"/>
              <path d="M518.519 -769.037C492.095 -953.702 671.367 -907.028 708.039 -811.842C758.146 -682.397 813.535 -631.149 912.486 -574.891C964.901 -539.971 978.724 -664.706 1065.91 -679.193C1153.09 -693.679 1187.34 -567.354 1236.43 -622.143C1311.62 -705.225 1381.16 -735.66 1436.82 -731.507C1491.66 -728.913 1533.63 -692.077 1554.18 -638.752C1573.33 -588.782 1573.65 -524.417 1548 -460.29C1506.41 -381.031 1474.26 -310.26 1430.84 -265.614C1373.63 -215.809 1450.98 -162.047 1438.49 -48.9456C1426 64.1556 1338.21 59.8763 1369.25 145.213C1418.95 279.71 1432.13 373.837 1421.89 435.232C1402.89 569.019 1276.25 553.167 1173.69 457.583C1113.78 402.814 1070.07 350.626 1031.29 310.267C980.871 250.651 914.664 366.273 850.877 365.373C740.558 362.61 762.287 231.881 669.631 288.633C632.234 311.222 590.726 338.407 544.196 370.892C437.092 443.39 354.793 463.128 295.669 453.092C175.199 444.839 132.032 316.48 157.221 194.1C172.014 123.593 209.221 55.1603 267.176 12.2866C336 -38.6429 448.716 -77.3504 484.801 -170.903C511.976 -235.964 341.68 -321.654 386.314 -442.959C414.515 -521.668 508.02 -557.163 513.105 -618.432C518.598 -684.619 520.608 -738.421 518.519 -769.037Z" stroke="white" strokeWidth="4"/>
              <path d="M560.816 -713.542C538.94 -875.46 697.008 -834.135 729.538 -749.557C777.174 -626.525 829.828 -583.007 921.08 -536.375C967.55 -506.148 980.546 -616.151 1057.7 -629.502C1134.86 -642.852 1165.75 -532.784 1209.38 -580.753C1276.55 -653.486 1338.44 -679.234 1387.66 -674.257C1435.87 -671.359 1472.72 -638.095 1490.36 -590.392C1506.78 -545.629 1506.24 -488.262 1482.13 -431.49C1438.51 -359.449 1417.34 -282.423 1379.69 -239.291C1329.78 -194.244 1396.49 -146.364 1384.29 -47.1799C1372.1 52.004 1293.71 47.7167 1319.55 121.215C1361.54 237.596 1372.02 318.659 1362.18 371.297C1344.88 487.779 1232.88 473.027 1141.61 388.95C1087.63 340.62 1047.48 295.057 1011.58 261.047C966.577 209.403 907.656 311.37 850.713 311.435C752.944 309.969 770.767 196.128 688.706 246.237C654.962 266.426 617.752 290.391 576.278 318.801C479.471 382.131 406.366 396.107 355.302 384.157C250.147 376.028 212.728 262.72 235.216 154.738C248.614 92.1874 281.749 31.5414 333.159 -6.55408C397.443 -54.2104 498.061 -89.759 529.953 -177.483C553.802 -235.964 404.564 -312.737 443.262 -420.702C467.592 -491.36 549.031 -524.169 553.602 -579.325C558.515 -638.607 561.413 -686.544 560.816 -713.542Z" stroke="white" strokeWidth="4"/>
              <path d="M603.097 -655.436C585.769 -794.246 722.628 -758.362 751.016 -684.582C796.173 -568.243 846.081 -532.549 929.625 -495.646C970.149 -470.181 982.316 -565.205 1049.44 -577.39C1116.57 -589.575 1144.11 -496.009 1182.28 -537.051C1241.41 -599.273 1295.65 -620.277 1338.44 -614.487C1380.01 -611.292 1411.75 -581.674 1426.48 -539.702C1440.16 -500.245 1438.77 -450.004 1416.19 -400.713C1370.56 -336.054 1360.35 -252.951 1328.47 -211.431C1285.87 -171.244 1341.94 -129.353 1330.04 -44.3075C1318.14 40.7377 1249.15 36.4521 1269.81 97.9482C1304.08 195.955 1311.88 263.774 1302.42 307.537C1286.83 406.456 1189.48 392.836 1109.49 320.454C1061.45 278.672 1024.87 239.836 991.842 212.249C952.262 168.691 900.63 256.776 850.532 257.806C765.318 257.64 779.238 160.94 707.774 204.294C677.684 222.037 644.775 242.729 608.358 267C521.857 321.022 457.947 329.205 414.942 315.37C325.104 307.384 293.432 209.381 313.218 116.037C325.219 61.5829 354.281 8.85956 399.144 -24.3726C458.881 -68.6478 547.396 -100.957 575.093 -182.655C595.616 -234.424 467.438 -302.108 500.201 -396.491C520.66 -458.939 590.032 -488.989 594.09 -537.908C598.422 -590.151 602.205 -632.116 603.097 -655.436Z" stroke="white" strokeWidth="4"/>
              <path d="M643.547 -599.942C630.73 -715.993 746.664 -685.461 770.968 -622.292C813.741 -512.355 861.009 -484.396 937.018 -457.129C971.682 -436.361 983.045 -516.645 1040.28 -527.695C1097.52 -538.745 1121.75 -461.445 1154.55 -495.664C1205.77 -547.531 1252.47 -563.844 1288.91 -557.228C1323.94 -553.729 1350.62 -527.682 1362.47 -491.334C1373.45 -457.085 1371.2 -413.845 1350.12 -371.91C1302.37 -314.47 1303.11 -225.086 1276.94 -185.075C1241.54 -149.647 1287.09 -113.639 1275.46 -42.5178C1263.83 28.603 1204.11 24.3087 1219.62 73.9582C1246.24 153.838 1251.37 208.584 1242.28 243.584C1228.37 325.188 1145.46 312.667 1076.6 251.798C1034.39 216.457 1001.3 184.25 971.084 163.017C936.84 127.436 892.389 201.86 849.033 203.856C776.196 204.99 786.241 125.187 725.226 161.896C698.728 177.238 670.051 194.708 638.615 214.902C562.239 259.751 507.393 262.164 472.357 246.41C397.648 238.547 371.658 155.602 388.783 76.6619C399.414 30.1661 424.462 -14.7671 462.871 -43.2194C518.185 -84.2242 594.781 -113.376 618.342 -189.25C635.581 -234.438 528.197 -293.204 555.093 -374.241C571.723 -428.637 629.174 -456.003 632.725 -498.808C636.486 -544.144 641.163 -580.241 643.547 -599.942Z" stroke="white" strokeWidth="4"/>
              <path d="M685.773 -544.451C677.5 -637.725 772.204 -612.547 792.36 -559.995C832.632 -456.438 877.134 -436.224 945.404 -418.607C974.114 -402.541 984.644 -468.076 1031.84 -477.992C1079.04 -487.907 1099.9 -426.889 1127.24 -454.279C1170.41 -495.782 1209.45 -507.398 1239.44 -499.951C1267.83 -496.145 1289.4 -473.669 1298.34 -442.948C1306.58 -413.908 1303.48 -377.671 1283.95 -343.097C1234.21 -292.875 1245.89 -197.161 1225.5 -158.648C1197.41 -127.978 1232.31 -97.8561 1220.99 -40.6705C1209.66 16.515 1159.36 12.2103 1169.68 50C1188.59 111.734 1191.04 153.393 1182.34 179.618C1170.14 243.892 1101.89 232.468 1044.34 183.12C1008.07 154.225 978.565 128.653 951.239 113.783C922.423 86.1865 885.27 146.94 848.77 149.907C788.503 152.344 794.647 89.4535 744.243 119.513C721.407 132.453 697.038 146.7 670.668 162.813C604.62 198.481 558.982 195.11 532.008 177.426C472.625 169.683 452.385 101.805 466.803 37.2789C476.034 -1.25391 497.003 -38.3928 528.857 -62.063C579.599 -99.8035 644.073 -125.799 663.435 -195.863C677.345 -234.469 591.037 -284.313 611.995 -351.999C624.755 -398.341 670.132 -423.025 673.168 -459.716C676.348 -498.143 681.905 -528.371 685.773 -544.451Z" stroke="white" strokeWidth="4"/>
              <path d="M726.818 -488.965C723.052 -559.433 797.037 -539.614 813.155 -497.689C851.162 -400.477 893.156 -388.024 954.077 -380.083C976.99 -368.726 986.747 -419.496 1024.16 -428.279C1061.58 -437.062 1079.19 -392.348 1101.2 -412.9C1136.57 -444.026 1168.16 -450.935 1191.87 -442.65C1213.77 -438.533 1230.34 -419.63 1236.41 -394.538C1241.96 -370.71 1237.99 -341.481 1219.9 -314.276C1167.86 -271.269 1190.59 -169.151 1175.86 -132.121C1154.93 -106.21 1179.37 -81.9781 1168.28 -38.7459C1157.19 4.48621 1116.04 0.168762 1121.21 26.0775C1132.5 69.6348 1132.28 98.1827 1123.92 115.618C1113.37 162.535 1059.41 152.206 1012.85 114.393C982.322 91.951 956.228 73.0232 931.638 64.53C908.091 44.9315 878.033 92.0003 848.19 95.9417C800.164 99.6877 802.435 53.7358 762.366 77.1381L761.252 77.7464C742.289 88.0994 722.458 98.9261 701.42 110.721C645.332 137.196 608.654 128.018 589.602 108.388C545.229 100.762 530.633 47.968 542.424 -2.12952C550.308 -32.6922 567.313 -62.0294 592.785 -80.9135C639.248 -115.399 691.953 -138.242 707.221 -202.512C717.877 -234.533 652.185 -275.451 667.315 -329.777C676.268 -368.062 709.811 -390.068 712.35 -420.643C714.965 -452.157 721.439 -476.511 726.818 -488.965Z" stroke="white" strokeWidth="4"/>
              <path d="M768.944 -430.785C769.719 -478.136 822.407 -463.764 834.362 -432.65C869.819 -342.225 908.99 -337.586 962.1 -339.351C979.038 -332.754 987.948 -368.534 1015.29 -376.144C1042.63 -383.755 1056.85 -355.542 1073.38 -369.166C1100.67 -389.778 1124.56 -391.95 1141.8 -382.865C1157.05 -378.458 1168.48 -363.211 1171.64 -343.86C1174.45 -325.349 1169.64 -303.258 1153.12 -283.541C1099.18 -247.942 1132.79 -139.89 1123.85 -104.511C1110.24 -83.4738 1124.02 -65.2399 1113.25 -36.1511C1102.48 -7.06235 1070.79 -11.3728 1070.78 2.54276C1074.35 27.7342 1071.45 43.048 1063.5 51.6171C1054.67 80.9724 1015.43 71.7848 980.219 45.6736C955.666 29.7837 933.183 17.5832 911.516 15.5024C893.419 3.98712 870.689 37.1633 847.733 42.0611C812.323 47.0985 810.696 18.2857 781.276 34.9279C765.659 43.015 749.793 50.7589 733.428 58.6461C687.73 75.8118 660.295 60.8715 649.317 39.3851C620.305 31.9111 611.47 -5.56616 620.542 -41.0136C627.018 -63.4709 639.926 -84.8767 658.819 -98.891C700.652 -129.965 741.182 -149.553 752.238 -207.74C759.554 -233.034 714.994 -264.844 724.175 -305.568C729.252 -335.625 750.696 -354.854 752.717 -379.177C754.748 -403.639 762.091 -422.01 768.944 -430.785Z" stroke="white" strokeWidth="4"/>
              <path d="M811.695 -375.222C816.99 -399.624 848.55 -390.654 856.376 -370.255C889.339 -286.411 925.75 -289.554 971.153 -300.999C982.166 -299.133 990.245 -320.042 1007.59 -326.499C1024.94 -332.956 1035.81 -321.137 1046.9 -327.881C1066.18 -338.053 1082.45 -335.507 1093.27 -325.607C1101.92 -320.9 1108.25 -309.267 1108.52 -295.6C1108.61 -282.353 1102.95 -267.334 1087.97 -255.043C1032.07 -226.757 1076.55 -112.569 1073.37 -78.7628C1067.02 -62.5427 1070.21 -50.2514 1059.75 -35.204C1049.28 -20.1565 1026.96 -24.4689 1021.79 -22.4817C1017.69 -15.5491 1012.12 -13.3983 1004.56 -13.6506C997.443 -1.74393 972.789 -9.81244 948.835 -24.3106C930.2 -33.7007 911.282 -39.2192 892.496 -34.9112C879.801 -38.3912 864.335 -18.9981 848.204 -13.1367C825.304 -6.80167 819.798 -18.5858 800.938 -8.64948C788.967 -2.98859 777.389 1.50513 766.066 5.28177C730.65 13.2012 712.38 -7.51401 709.423 -30.8942C695.662 -38.2324 692.547 -60.5155 698.926 -81.4294C704.008 -95.8516 712.856 -109.393 725.225 -118.581C762.502 -146.318 790.967 -162.7 797.844 -214.94C801.847 -233.579 778.261 -256.374 781.534 -283.619C782.758 -305.534 792.189 -322.035 793.697 -340.174C795.149 -357.654 803.367 -370.099 811.695 -375.222Z" stroke="white" strokeWidth="4"/>
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

      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-6">
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
      </section>

      <section className="py-16">
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

      <section 
        className="py-16"
        style={{
          maxWidth: '100%',
          margin: '0 auto',
          background: 'linear-gradient(0deg, #F3F3F3, #F3F3F3), linear-gradient(0deg, #FBFBFB, #FBFBFB)',
        }}
      >
        <div className="px-6">
          <div className="flex flex-col items-center mb-16">
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
                Our Process
              </span>
            </div>

            <h2 
              className="mb-6"
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
                fontSize: '18px',
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

          <div 
            className="flex justify-center items-center"
            style={{ gap: '25.91px' }}
          >
            {/* Box 1: Live Instructor-Led Classes */}
            <div className="flex flex-col items-center" style={{ position: 'relative' }}>
              <div
                style={{
                  width: '64.77px',
                  height: '64.77px',
                  borderRadius: '36.43px',
                  padding: '12.14px',
                  background: 'linear-gradient(132.4deg, #F67219 57.76%, #FFE6D5 98.88%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '-30px',
                  position: 'relative',
                  zIndex: 10,
                }}
              >
                <Image
                  src="/icons/process1.svg"
                  alt="Live Instructor-Led Classes"
                  width={40}
                  height={40}
                />
              </div>

              <div style={{ position: 'relative' }}>
                <div
                  style={{
                    width: '249.36px',
                    height: '249.36px',
                    borderRadius: '24.29px',
                    background: '#FFFFFF',
                    boxShadow: '0px 8.91px 48.58px 0px #00000014',
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'Spline Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: '24px',
                      lineHeight: '100%',
                      textAlign: 'center',
                      color: '#141414',
                      marginBottom: '16px',
                    }}
                  >
                    Live Instructor-Led Classes
                  </h3>
                  <p
                    style={{
                      fontFamily: 'Satoshi, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '24px',
                      textAlign: 'center',
                      color: '#6E6E6E',
                    }}
                  >
                    Join expert-led virtual classes where you&apos;ll learn through real-world use cases, performance tasks, and hands-on activities.
                  </p>
                </div>

                <div 
                  style={{ 
                    position: 'absolute', 
                    bottom: 0, 
                    left: '50%', 
                    transform: 'translateX(-50%) translateY(0%)',
                  }}
                >
                  <svg width="284" height="139" viewBox="0 0 284 139" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.90824 0V98.8947C8.67107 110.513 25.534 129.243 34.0925 129.538H241.163C255.369 129.242 261.848 125.003 271.717 112.567C273.794 109.948 274.864 106.68 274.864 103.337V0" stroke="url(#paint0_linear_232_163_box1)" strokeWidth="17.8115"/>
                    <defs>
                      <linearGradient id="paint0_linear_232_163_box1" x1="8.90576" y1="64.7691" x2="274.864" y2="64.7691" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F25E25"/>
                        <stop offset="1" stopColor="#F97F11"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <svg width="13" height="70" viewBox="0 0 13 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.04181 1.16309C5.04181 0.520493 5.56273 -0.000430794 6.20532 -0.000430822C6.84791 -0.00043085 7.36884 0.520493 7.36884 1.16309L6.20532 1.16309L5.04181 1.16309ZM6.20532 57.0119C9.63248 57.0119 12.4107 59.7901 12.4107 63.2173C12.4107 66.6445 9.63249 69.4227 6.20533 69.4227C2.77816 69.4227 -9.77504e-05 66.6445 -9.79002e-05 63.2173C-9.805e-05 59.7901 2.77816 57.0119 6.20532 57.0119ZM6.20532 1.16309L7.36884 1.16309L7.36884 63.2173L6.20532 63.2173L5.04181 63.2173L5.04181 1.16309L6.20532 1.16309Z" fill="url(#paint0_linear_232_160)"/>
                  <defs>
                    <linearGradient id="paint0_linear_232_160" x1="6.70532" y1="1.16309" x2="6.70532" y2="63.2173" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F25E25"/>
                      <stop offset="1" stopColor="#F97F11"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Box 2: Real-World Projects & Internship */}
            <div className="flex flex-col items-center" style={{ position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <svg width="13" height="70" viewBox="0 0 13 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.36884 68.2598C7.36884 68.9024 6.84791 69.4233 6.20532 69.4233C5.56273 69.4233 5.04181 68.9024 5.04181 68.2598L6.20532 68.2598L7.36884 68.2598ZM6.20532 12.411C2.77816 12.411 -0.000103175 9.6327 -0.000103325 6.20554C-0.000103475 2.77838 2.77816 0.00012222 6.20532 0.00012207C9.63248 0.000121921 12.4107 2.77838 12.4107 6.20554C12.4107 9.6327 9.63248 12.411 6.20532 12.411ZM6.20532 68.2598L5.04181 68.2598L5.0418 6.20554L6.20532 6.20554L7.36884 6.20554L7.36884 68.2598L6.20532 68.2598Z" fill="url(#paint0_linear_232_186)"/>
                  <defs>
                    <linearGradient id="paint0_linear_232_186" x1="5.70532" y1="68.2598" x2="5.70532" y2="6.20554" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F25E25"/>
                      <stop offset="1" stopColor="#F97F11"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div style={{ position: 'relative' }}>
                <div 
                  style={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: '50%', 
                    transform: 'translateX(-50%) translateY(0%)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0px',
                  }}
                >
                  <svg width="284" height="139" viewBox="0 0 284 139" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M274.861 138.444V39.5496C275.098 27.9315 258.236 9.2011 249.677 8.90617L42.6064 8.90617C28.4009 9.20222 21.9219 13.4417 12.053 25.8774C9.97504 28.4959 8.90573 31.7643 8.90573 35.1071V138.444" stroke="url(#paint0_linear_232_190_box2)" strokeWidth="17.8115"/>
                    <defs>
                      <linearGradient id="paint0_linear_232_190_box2" x1="274.864" y1="73.6753" x2="8.90573" y2="73.6753" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F25E25"/>
                        <stop offset="1" stopColor="#F97F11"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '-22px', marginTop: '40px' }}>
                    <g clipPath="url(#clip0_232_167_2)">
                      <path d="M24.5473 4.39419C24.4202 4.51794 24.3193 4.66601 24.2507 4.82958C24.182 4.99314 24.147 5.16886 24.1477 5.34624L24.1477 12.3301C24.1477 12.8749 23.706 13.3166 23.1612 13.3166H1.32178C0.591763 13.3166 0 13.9084 0 14.6384L0 28.2314C0 28.9614 0.591763 29.5531 1.32178 29.5531H23.1612C23.706 29.5531 24.1477 29.9948 24.1477 30.5396V37.5432C24.1339 38.2731 24.7144 38.876 25.4442 38.8897C25.625 38.8932 25.8045 38.8595 25.9718 38.7907C26.139 38.722 26.2903 38.6197 26.4164 38.4901L42.5149 22.3917C42.7637 22.1468 42.9055 21.8135 42.9095 21.4644C42.9102 21.2882 42.8756 21.1137 42.8078 20.9511C42.7401 20.7885 42.6405 20.641 42.5149 20.5174L26.4164 4.41898C25.9072 3.89602 25.0703 3.88492 24.5473 4.39419Z" fill="url(#paint0_linear_232_167_2)"/>
                    </g>
                    <defs>
                      <linearGradient id="paint0_linear_232_167_2" x1="21.4548" y1="38.89" x2="21.4548" y2="4.01938" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F25E25"/>
                        <stop offset="1" stopColor="#F97F11"/>
                      </linearGradient>
                      <clipPath id="clip0_232_167_2">
                        <rect width="42.9095" height="42.9095" fill="white" transform="matrix(0 -1 1 0 0 42.9095)"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                <div
                  style={{
                    width: '249.36px',
                    height: '249.36px',
                    borderRadius: '24.29px',
                    background: '#FFFFFF',
                    boxShadow: '0px 8.91px 48.58px 0px #00000014',
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'Spline Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: '24px',
                      lineHeight: '100%',
                      textAlign: 'center',
                      color: '#141414',
                      marginBottom: '16px',
                    }}
                  >
                    Real-World Projects & Internship
                  </h3>
                  <p
                    style={{
                      fontFamily: 'Satoshi, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '24px',
                      textAlign: 'center',
                      color: '#6E6E6E',
                    }}
                  >
                    Work on 5 capstone projects that reflect real industry problems which build your resume and portfolio.
                  </p>
                </div>
              </div>

              <div
                style={{
                  width: '64.77px',
                  height: '64.77px',
                  borderRadius: '36.43px',
                  padding: '12.14px',
                  background: 'linear-gradient(132.4deg, #F67219 57.76%, #FFE6D5 98.88%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '-30px',
                  position: 'relative',
                  zIndex: 10,
                }}
              >
                <Image
                  src="/icons/process2.svg"
                  alt="Real-World Projects"
                  width={40}
                  height={40}
                />
              </div>
            </div>

            {/* Box 3: Mentorship & Feedback */}
            <div className="flex flex-col items-center" style={{ position: 'relative' }}>
              <div
                style={{
                  width: '64.77px',
                  height: '64.77px',
                  borderRadius: '36.43px',
                  padding: '12.14px',
                  background: 'linear-gradient(132.4deg, #F67219 57.76%, #FFE6D5 98.88%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '-30px',
                  position: 'relative',
                  zIndex: 10,
                }}
              >
                <Image
                  src="/icons/process3.svg"
                  alt="Mentorship & Feedback"
                  width={40}
                  height={40}
                />
              </div>

              <div style={{ position: 'relative' }}>
                <div
                  style={{
                    width: '249.36px',
                    height: '249.36px',
                    borderRadius: '24.29px',
                    background: '#FFFFFF',
                    boxShadow: '0px 8.91px 48.58px 0px #00000014',
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'Spline Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: '24px',
                      lineHeight: '100%',
                      textAlign: 'center',
                      color: '#141414',
                      marginBottom: '16px',
                    }}
                  >
                    Mentorship & Feedback
                  </h3>
                  <p
                    style={{
                      fontFamily: 'Satoshi, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '24px',
                      textAlign: 'center',
                      color: '#6E6E6E',
                    }}
                  >
                    Get weekly check-ins, 1-on-1 sessions, and feedback on your projects. You&apos;ll never feel stuck or alone.
                  </p>
                </div>

                <div 
                  style={{ 
                    position: 'absolute', 
                    bottom: 0, 
                    left: '50%', 
                    transform: 'translateX(-50%) translateY(0%)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    gap: '0px',
                  }}
                >
                  <svg width="284" height="139" viewBox="0 0 284 139" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.90824 0V98.8947C8.67107 110.513 25.534 129.243 34.0925 129.538H241.163C255.369 129.242 261.848 125.003 271.717 112.567C273.794 109.948 274.864 106.68 274.864 103.337V0" stroke="url(#paint0_linear_232_163_box3)" strokeWidth="17.8115"/>
                    <defs>
                      <linearGradient id="paint0_linear_232_163_box3" x1="8.90576" y1="64.7691" x2="274.864" y2="64.7691" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F25E25"/>
                        <stop offset="1" stopColor="#F97F11"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '-22px', marginBottom: '100px' }}>
                    <g clipPath="url(#clip0_232_167_3)">
                      <path d="M24.5473 4.39419C24.4202 4.51794 24.3193 4.66601 24.2507 4.82958C24.182 4.99314 24.147 5.16886 24.1477 5.34624L24.1477 12.3301C24.1477 12.8749 23.706 13.3166 23.1612 13.3166H1.32178C0.591763 13.3166 0 13.9084 0 14.6384L0 28.2314C0 28.9614 0.591763 29.5531 1.32178 29.5531H23.1612C23.706 29.5531 24.1477 29.9948 24.1477 30.5396V37.5432C24.1339 38.2731 24.7144 38.876 25.4442 38.8897C25.625 38.8932 25.8045 38.8595 25.9718 38.7907C26.139 38.722 26.2903 38.6197 26.4164 38.4901L42.5149 22.3917C42.7637 22.1468 42.9055 21.8135 42.9095 21.4644C42.9102 21.2882 42.8756 21.1137 42.8078 20.9511C42.7401 20.7885 42.6405 20.641 42.5149 20.5174L26.4164 4.41898C25.9072 3.89602 25.0703 3.88492 24.5473 4.39419Z" fill="url(#paint0_linear_232_167_3)"/>
                    </g>
                    <defs>
                      <linearGradient id="paint0_linear_232_167_3" x1="21.4548" y1="38.89" x2="21.4548" y2="4.01938" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F25E25"/>
                        <stop offset="1" stopColor="#F97F11"/>
                      </linearGradient>
                      <clipPath id="clip0_232_167_3">
                        <rect width="42.9095" height="42.9095" fill="white" transform="matrix(0 -1 1 0 0 42.9095)"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <svg width="13" height="70" viewBox="0 0 13 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.04181 1.16309C5.04181 0.520493 5.56273 -0.000430794 6.20532 -0.000430822C6.84791 -0.00043085 7.36884 0.520493 7.36884 1.16309L6.20532 1.16309L5.04181 1.16309ZM6.20532 57.0119C9.63248 57.0119 12.4107 59.7901 12.4107 63.2173C12.4107 66.6445 9.63249 69.4227 6.20533 69.4227C2.77816 69.4227 -9.77504e-05 66.6445 -9.79002e-05 63.2173C-9.805e-05 59.7901 2.77816 57.0119 6.20532 57.0119ZM6.20532 1.16309L7.36884 1.16309L7.36884 63.2173L6.20532 63.2173L5.04181 63.2173L5.04181 1.16309L6.20532 1.16309Z" fill="url(#paint0_linear_232_160_3)"/>
                  <defs>
                    <linearGradient id="paint0_linear_232_160_3" x1="6.70532" y1="1.16309" x2="6.70532" y2="63.2173" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F25E25"/>
                      <stop offset="1" stopColor="#F97F11"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Box 4: Leadership & Soft Skills Mastery */}
            <div className="flex flex-col items-center" style={{ position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <svg width="13" height="70" viewBox="0 0 13 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.36884 68.2598C7.36884 68.9024 6.84791 69.4233 6.20532 69.4233C5.56273 69.4233 5.04181 68.9024 5.04181 68.2598L6.20532 68.2598L7.36884 68.2598ZM6.20532 12.411C2.77816 12.411 -0.000103175 9.6327 -0.000103325 6.20554C-0.000103475 2.77838 2.77816 0.00012222 6.20532 0.00012207C9.63248 0.000121921 12.4107 2.77838 12.4107 6.20554C12.4107 9.6327 9.63248 12.411 6.20532 12.411ZM6.20532 68.2598L5.04181 68.2598L5.0418 6.20554L6.20532 6.20554L7.36884 6.20554L7.36884 68.2598L6.20532 68.2598Z" fill="url(#paint0_linear_232_186_4)"/>
                  <defs>
                    <linearGradient id="paint0_linear_232_186_4" x1="5.70532" y1="68.2598" x2="5.70532" y2="6.20554" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F25E25"/>
                      <stop offset="1" stopColor="#F97F11"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div style={{ position: 'relative' }}>
                <div 
                  style={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: '50%', 
                    transform: 'translateX(-50%) translateY(0%)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0px',
                  }}
                >
                  <svg width="284" height="139" viewBox="0 0 284 139" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M274.861 138.444V39.5496C275.098 27.9315 258.236 9.2011 249.677 8.90617L42.6064 8.90617C28.4009 9.20222 21.9219 13.4417 12.053 25.8774C9.97504 28.4959 8.90573 31.7643 8.90573 35.1071V138.444" stroke="url(#paint0_linear_232_190_box4)" strokeWidth="17.8115"/>
                    <defs>
                      <linearGradient id="paint0_linear_232_190_box4" x1="274.864" y1="73.6753" x2="8.90573" y2="73.6753" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F25E25"/>
                        <stop offset="1" stopColor="#F97F11"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '-22px', marginTop: '40px' }}>
                    <g clipPath="url(#clip0_232_167_4)">
                      <path d="M24.5473 4.39419C24.4202 4.51794 24.3193 4.66601 24.2507 4.82958C24.182 4.99314 24.147 5.16886 24.1477 5.34624L24.1477 12.3301C24.1477 12.8749 23.706 13.3166 23.1612 13.3166H1.32178C0.591763 13.3166 0 13.9084 0 14.6384L0 28.2314C0 28.9614 0.591763 29.5531 1.32178 29.5531H23.1612C23.706 29.5531 24.1477 29.9948 24.1477 30.5396V37.5432C24.1339 38.2731 24.7144 38.876 25.4442 38.8897C25.625 38.8932 25.8045 38.8595 25.9718 38.7907C26.139 38.722 26.2903 38.6197 26.4164 38.4901L42.5149 22.3917C42.7637 22.1468 42.9055 21.8135 42.9095 21.4644C42.9102 21.2882 42.8756 21.1137 42.8078 20.9511C42.7401 20.7885 42.6405 20.641 42.5149 20.5174L26.4164 4.41898C25.9072 3.89602 25.0703 3.88492 24.5473 4.39419Z" fill="url(#paint0_linear_232_167_4)"/>
                    </g>
                    <defs>
                      <linearGradient id="paint0_linear_232_167_4" x1="21.4548" y1="38.89" x2="21.4548" y2="4.01938" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F25E25"/>
                        <stop offset="1" stopColor="#F97F11"/>
                      </linearGradient>
                      <clipPath id="clip0_232_167_4">
                        <rect width="42.9095" height="42.9095" fill="white" transform="matrix(0 -1 1 0 0 42.9095)"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                <div
                  style={{
                    width: '249.36px',
                    height: '249.36px',
                    borderRadius: '24.29px',
                    background: '#FFFFFF',
                    boxShadow: '0px 8.91px 48.58px 0px #00000014',
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'Spline Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: '24px',
                      lineHeight: '100%',
                      textAlign: 'center',
                      color: '#141414',
                      marginBottom: '16px',
                    }}
                  >
                    Leadership & Soft Skills Mastery
                  </h3>
                  <p
                    style={{
                      fontFamily: 'Satoshi, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '24px',
                      textAlign: 'center',
                      color: '#6E6E6E',
                    }}
                  >
                    Get weekly check-ins, 1-on-1 sessions, and feedback on your projects. You&apos;ll never feel stuck or alone.
                  </p>
                </div>
              </div>

              <div
                style={{
                  width: '64.77px',
                  height: '64.77px',
                  borderRadius: '36.43px',
                  padding: '12.14px',
                  background: 'linear-gradient(132.4deg, #F67219 57.76%, #FFE6D5 98.88%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '-30px',
                  position: 'relative',
                  zIndex: 10,
                }}
              >
                <Image
                  src="/icons/process4.svg"
                  alt="Leadership & Soft Skills"
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        style={{
          width: '1440px',
          margin: '0 auto',
          background: '#FFFFFF',
          padding: '80px 0',
        }}
      >
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          {/* FAQ Pill and Heading */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '60px' }}>
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
                FAQ
              </span>
            </div>

            <h2
              style={{
                width: '856px',
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

          {/* FAQ Items */}
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

          {/* View More Button */}
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
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{
              pointerEvents: popupAnimated ? 'auto' : 'none',
            }}
          >
            <div 
              className="relative bg-white rounded-lg"
              style={{
                maxWidth: '1440px',
                width: '100%',
                borderTop: '2px solid transparent',
                borderImage: 'linear-gradient(90deg, #F25E25 0%, #F97F11 100%) 1',
                transform: popupAnimated ? 'scale(1)' : 'scale(0.95)',
                opacity: popupAnimated ? 1 : 0,
                transition: 'transform 0.4s ease-out, opacity 0.4s ease-out',
              }}
            >
              <button
                onClick={handleClosePopup}
                className="absolute top-4 right-4 transition-all hover:scale-110 z-10"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="url(#paint0_linear_226_746)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14.9994 15L9 9M9.00064 15L15 9" stroke="url(#paint1_linear_226_746)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="paint0_linear_226_746" x1="2" y1="12" x2="22" y2="12" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F25E25"/>
                      <stop offset="1" stopColor="#F97F11"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_226_746" x1="9" y1="12" x2="15" y2="12" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F25E25"/>
                      <stop offset="1" stopColor="#F97F11"/>
                    </linearGradient>
                  </defs>
                </svg>
              </button>

              <div className="flex items-center justify-between px-12 py-6">
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
      {/* Footer */}
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