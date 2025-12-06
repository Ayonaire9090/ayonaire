'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        width: '1440px',
        margin: '0 auto',
        borderTopLeftRadius: '60px',
        borderTopRightRadius: '60px',
        background: 'linear-gradient(180deg, #2B2A2A 0%, #141414 100%)',
      }}
    >
      {/* Background Overlay Images */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '1236.71px',
          opacity: 0.08,
          pointerEvents: 'none',
        }}
      >
        <Image
          src="/logos/footer-1.png"
          alt=""
          width={1237}
          height={400}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>

      <div 
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '1236.71px',
          opacity: 0.08,
          pointerEvents: 'none',
          overflow: 'hidden',
          height: '50%',
        }}
      >
        <Image
          src="/logos/footer-2.png"
          alt=""
          width={1237}
          height={400}
          style={{ width: '100%', height: 'auto', position: 'absolute', bottom: 0 }}
        />
      </div>

      <div 
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '330px',
          opacity: 0.2,
          pointerEvents: 'none',
        }}
      >
        <Image
          src="/logos/footer-3.png"
          alt=""
          width={330}
          height={200}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>

      <div className="relative z-10" style={{ padding: '80px 80px 40px' }}>
        {/* First Section - Widgets */}
        <div
          className="flex"
          style={{
            width: '1280px',
            margin: '0 auto',
            justifyContent: 'space-between',
            marginBottom: '60px',
          }}
        >
          {/* Logo and Description */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <Image
              src="/logos/ayonaire.png"
              alt="Ayonaire"
              width={158}
              height={40}
            />
            <p
              style={{
                fontFamily: 'Satoshi, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '100%',
                opacity: 0.5,
                color: '#FFFFFF',
                width: '268px',
              }}
            >
              Learning knows no limits. Here&apos;s to your journey of seamless learning. Pick your preferred course from the list of paid & free resources.
            </p>
          </div>

          {/* Top Courses */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <h3
              style={{
                fontFamily: 'Spline Sans, sans-serif',
                fontWeight: 600,
                fontSize: '20px',
                lineHeight: '100%',
                color: '#FFFFFF',
                marginBottom: '16px',
              }}
            >
              Top Courses
            </h3>
            {[
              'AI Engineering',
              'Agentic Engineering',
              'Gen in Data Analytics',
              'Gen in Data Science',
              'Gen in Business Analysis',
              'UI/UX Design',
              'Tech Sales Bootcamp',
              'HR Analytics Bootcamp',
            ].map((course, index) => (
              <Link
                key={index}
                href="#"
                style={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '100%',
                  opacity: 0.5,
                  color: '#FFFFFF',
                  textDecoration: 'none',
                }}
              >
                {course}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <h3
              style={{
                fontFamily: 'Spline Sans, sans-serif',
                fontWeight: 600,
                fontSize: '20px',
                lineHeight: '100%',
                color: '#FFFFFF',
                marginBottom: '16px',
              }}
            >
              Company
            </h3>
            {[
              'About us',
              'Our Story',
              'Learning Champions',
              'Our Partners',
              'Become a Trainer',
              'Alumni',
              'Careers',
              'Business Network',
              'Podcast',
            ].map((item, index) => (
              <Link
                key={index}
                href="#"
                style={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '100%',
                  opacity: 0.5,
                  color: '#FFFFFF',
                  textDecoration: 'none',
                }}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Quick Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <h3
              style={{
                fontFamily: 'Spline Sans, sans-serif',
                fontWeight: 600,
                fontSize: '20px',
                lineHeight: '100%',
                color: '#FFFFFF',
                marginBottom: '16px',
              }}
            >
              Quick Links
            </h3>
            {[
              'Courses',
              'Blogs',
              'Data Challenges',
              'Hire Talent',
              'Contact Us',
            ].map((item, index) => (
              <Link
                key={index}
                href="#"
                style={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '100%',
                  opacity: 0.5,
                  color: '#FFFFFF',
                  textDecoration: 'none',
                }}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Schools */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <h3
              style={{
                fontFamily: 'Spline Sans, sans-serif',
                fontWeight: 600,
                fontSize: '20px',
                lineHeight: '100%',
                color: '#FFFFFF',
                marginBottom: '16px',
              }}
            >
              Schools
            </h3>
            {[
              'AI School',
              'Data School',
              'Product School',
              'Cybersecurity School',
              'Software Engineering School',
              'Cloud & DevOps School',
              'Marketing School',
            ].map((school, index) => (
              <Link
                key={index}
                href="#"
                style={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '100%',
                  opacity: 0.5,
                  color: '#FFFFFF',
                  textDecoration: 'none',
                }}
              >
                {school}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h3
              style={{
                fontFamily: 'Spline Sans, sans-serif',
                fontWeight: 600,
                fontSize: '20px',
                lineHeight: '100%',
                color: '#FFFFFF',
              }}
            >
              Contact
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
              <span
                style={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '100%',
                  opacity: 0.5,
                  color: '#FFFFFF',
                }}
              >
                info@ayonaire.com
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 19H12.01" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.5 2H10.5C8.14298 2 6.96447 2 6.23223 2.73223C5.5 3.46447 5.5 4.64298 5.5 7V17C5.5 19.357 5.5 20.5355 6.23223 21.2678C6.96447 22 8.14298 22 10.5 22H13.5C15.857 22 17.0355 22 17.7678 21.2678C18.5 20.5355 18.5 19.357 18.5 17V7C18.5 4.64298 18.5 3.46447 17.7678 2.73223C17.0355 2 15.857 2 13.5 2Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span
                style={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '100%',
                  opacity: 0.5,
                  color: '#FFFFFF',
                }}
              >
                +234 9067835701
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 19H12.01" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.5 2H10.5C8.14298 2 6.96447 2 6.23223 2.73223C5.5 3.46447 5.5 4.64298 5.5 7V17C5.5 19.357 5.5 20.5355 6.23223 21.2678C6.96447 22 8.14298 22 10.5 22H13.5C15.857 22 17.0355 22 17.7678 21.2678C18.5 20.5355 18.5 19.357 18.5 17V7C18.5 4.64298 18.5 3.46447 17.7678 2.73223C17.0355 2 15.857 2 13.5 2Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span
                style={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '100%',
                  opacity: 0.5,
                  color: '#FFFFFF',
                }}
              >
                +234 9067835701
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
              <span
                style={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '100%',
                  opacity: 0.5,
                  color: '#FFFFFF',
                }}
              >
                support@ayonaire.com
              </span>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                marginTop: '24px',
              }}
            >
              <span
                style={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '100%',
                  color: '#FFFFFF',
                }}
              >
                Back to top
              </span>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '6px',
                  border: '1px solid #FFFFFF66',
                  padding: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.81706 2.83301L7.81706 12.833" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3.80083 6.86621L7.81683 2.83288L11.8335 6.86621" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            width: '1280px',
            margin: '0 auto',
            height: '0px',
            border: '1px solid #FFFFFF1A',
            marginBottom: '40px',
          }}
        />

        {/* Second Section - Copyright and Social */}
        <div
          className="flex items-center"
          style={{
            width: '1280px',
            margin: '0 auto',
            justifyContent: 'space-between',
          }}
        >
          <p
            style={{
              fontFamily: 'Satoshi, sans-serif',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '100%',
              color: '#FFFFFF',
            }}
          >
            © Ayonaire Academy. All Rights Reserved.
          </p>

          <div className="flex items-center" style={{ gap: '16px' }}>
            {[
              { icon: 'x.svg', alt: 'X' },
              { icon: 'fb.svg', alt: 'Facebook' },
              { icon: 'Instagram.svg', alt: 'Instagram' },
              { icon: 'in.svg', alt: 'LinkedIn' },
            ].map((social, index) => (
              <Link
                key={index}
                href="#"
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '60px',
                  border: '1px solid #DCDCDC2B',
                  padding: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                }}
              >
                <Image
                  src={`/icons/${social.icon}`}
                  alt={social.alt}
                  width={24}
                  height={24}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}