'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import Header from '../header';

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLElement>(null);

  const featuredLogos = [
    { name: 'Ify', url: '/images/logos/ify.png' },
    { name: 'The Guardian', url: '/images/logos/guardian.png' },
    { name: 'TechCabal', url: '/images/logos/techcabal.png' },
    { name: 'Forbes', url: '/images/logos/forbes.png' },
    { name: 'Technext', url: '/images/logos/technext.png' },
  ];

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

      <section className="py-16" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #FFE7DE 100%)' }}>
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
        borderRadius: '20px',
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
  return (
    <div 
      onClick={onClick}
      className="relative cursor-pointer transition-all hover:scale-[1.02]"
      style={{
        width: '406px',
        borderRadius: '26.02px',
        background: isActive ? 'linear-gradient(132.4deg, #F67219 57.76%, #FFE6D5 98.88%)' : '#FAFAFA',
        padding: '4px',
        boxShadow: isActive ? 'none' : '0px 13px 20px 0px #00000014',
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
          background: isActive 
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
            color: isActive ? '#FFFFFF' : '#141414',
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
            background: isActive ? 'linear-gradient(90deg, #F67219 0%, #FFDCC4 118.57%)' : 'transparent',
            border: isActive ? 'none' : '1.3px solid #E7E7E7',
          }}
        >
          <div 
            className="flex items-center justify-center relative"
            style={{
              width: '46.84px',
              height: '46.84px',
              borderRadius: '50%',
              background: isActive ? '#0000001A' : '#E1E1E1',
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