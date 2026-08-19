'use client'

import { useState, useEffect, type CSSProperties, type FormEvent, type ReactNode } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

function useWindowWidth(fallback = 1024) {
  const [width, setWidth] = useState(fallback)
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth)
    handler()
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])
  return width
}

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Sectors', href: '#sectors' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

const SERVICES = [
  {
    number: '01',
    title: 'Geotechnical Investigation',
    summary:
      'Trial pits, borehole drilling, soil and rock sampling, DCP testing, SPT, groundwater observations, and soil profiling to establish subsurface profiles.',
    icon: '⛏',
  },
  {
    number: '02',
    title: 'Soil & Geotechnical Laboratory Testing',
    summary:
      'Particle-size distribution, Atterberg limits, natural moisture content, CBR, direct shear, permeability, compaction, and classification tests.',
    icon: '🔬',
  },
  {
    number: '03',
    title: 'Construction Materials Testing',
    summary:
      'Aggregate characterization, field density, concrete testing, rebound hammer assessment, compaction verification for earthworks, roads, and buildings.',
    icon: '🏗',
  },
  {
    number: '04',
    title: 'Field Testing & In-Situ Assessment',
    summary:
      'DCP, SPT, field density and compaction assessment, groundwater observations, rebound hammer, and other project-specific in-situ investigations.',
    icon: '📐',
  },
  {
    number: '05',
    title: 'Foundation Engineering & Geotechnical Consultancy',
    summary:
      'Foundation type selection, allowable bearing pressure, settlement analysis, subgrade assessment, ground improvement, and construction-stage recommendations.',
    icon: '🏛',
  },
  {
    number: '06',
    title: 'Road & Pavement Geotechnics',
    summary:
      'Subgrade characterization, DCP investigations, CBR testing, soil classification, compaction assessment, and earthworks recommendations for road corridors.',
    icon: '🛣',
  },
  {
    number: '07',
    title: 'Slope, Earthworks & Ground Stability',
    summary:
      'Slope condition assessment, soil stratigraphy, groundwater and drainage evaluation, erosion susceptibility, and embankment stability recommendations.',
    icon: '⛰',
  },
  {
    number: '08',
    title: 'Building & Construction Consultancy',
    summary:
      'Site assessments, building condition evaluations, technical inspections, construction quality monitoring, and engineering reports throughout the project lifecycle.',
    icon: '🏢',
  },
]

const WHATSAPP_PHONE = '+250 788 424 508'
const WHATSAPP_PHONE_DIGITS = WHATSAPP_PHONE.replace(/\D/g, '')

type Service = (typeof SERVICES)[number]

const SECTORS = [
  { label: 'Residential & Commercial Buildings', icon: '🏘' },
  { label: 'Roads & Bridges', icon: '🌉' },
  { label: 'Water & Hydraulic Infrastructure', icon: '💧' },
  { label: 'Dams & Reservoirs', icon: '🏔' },
  { label: 'Industrial Developments', icon: '🏭' },
  { label: 'Agricultural Infrastructure', icon: '🌾' },
  { label: 'Marshland & Irrigation', icon: '🌿' },
  { label: 'Institutional Facilities', icon: '🏫' },
]

const REASONS = [
  {
    title: 'Integrated Investigation',
    body: 'We combine field investigation, laboratory testing, and engineering interpretation into one cohesive geotechnical service.',
  },
  {
    title: 'Technically Defensible',
    body: 'Our findings are based on representative site data, appropriate testing, sound engineering judgment, and clearly documented technical evidence.',
  },
  {
    title: 'Practical Recommendations',
    body: 'We translate subsurface data into actionable engineering solutions — not just tables of results, but decisions you can build on.',
  },
  {
    title: 'Multi-Standard Compliance',
    body: 'Our procedures can be undertaken in accordance with applicable ASTM, ISO/RS, BS, or project-specified testing requirements.',
  },
]

// ─── Reusable label ───────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 10,
        color: '#c4872a',
        letterSpacing: '0.14em',
        textTransform: 'uppercase' as const,
        marginBottom: '1.25rem',
      }}
    >
      {children}
    </div>
  )
}

// ─── NavBar ───────────────────────────────────────────────────────────────────
function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const w = useWindowWidth()
  const isMobile = w < 768

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 100,
        backgroundColor: 'rgba(26,18,8,0.97)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(196,135,42,0.25)',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 1.25rem',
          height: 72,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span
            style={{
              width: 48,
              height: 48,
              borderRadius: '50%',
              overflow: 'hidden',
              backgroundColor: '#ffffff',
              flexShrink: 0,
              position: 'relative',
              display: 'block',
            }}
          >
            <Image
              src="/images/logo.png"
              alt="GEOSURVEY ENGINEERING Ltd"
              fill
              sizes="48px"
              priority
              style={{ objectFit: 'cover', objectPosition: 'center 12%' }}
            />
          </span>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, color: '#e8d4b8', lineHeight: 1.1, letterSpacing: '0.04em' }}>
              GEOSURVEY
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 8, color: '#c4872a', letterSpacing: '0.1em', textTransform: 'uppercase', lineHeight: 1 }}>
              Engineering Ltd
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        {!isMobile && (
          <nav style={{ display: 'flex', gap: '1.75rem', alignItems: 'center' }}>
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 500, color: '#a8bcc8', textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase', transition: 'color 0.2s' }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#e8b554')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#a8bcc8')}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, color: '#1a1208', backgroundColor: '#c4872a', padding: '8px 18px', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'background-color 0.2s' }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.backgroundColor = '#e8b554')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.backgroundColor = '#c4872a')}
            >
              Get Quote
            </a>
          </nav>
        )}

        {/* Hamburger */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'flex', flexDirection: 'column', gap: 5 }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: 22,
                  height: 2,
                  backgroundColor: '#e8d4b8',
                  transition: 'transform 0.2s, opacity 0.2s',
                  transformOrigin: 'center',
                  opacity: menuOpen && i === 1 ? 0 : 1,
                  transform:
                    menuOpen && i === 0
                      ? 'translateY(7px) rotate(45deg)'
                      : menuOpen && i === 2
                      ? 'translateY(-7px) rotate(-45deg)'
                      : 'none',
                }}
              />
            ))}
          </button>
        )}
      </div>

      {/* Mobile drawer */}
      {isMobile && menuOpen && (
        <div
          style={{
            backgroundColor: '#1a1208',
            borderTop: '1px solid rgba(196,135,42,0.2)',
            padding: '1.5rem 1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0',
          }}
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 500, color: '#d4b08a', textDecoration: 'none', letterSpacing: '0.04em', padding: '0.85rem 0', borderBottom: '1px solid rgba(196,135,42,0.12)' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{ marginTop: '1.25rem', fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, color: '#1a1208', backgroundColor: '#c4872a', padding: '12px 20px', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase', textAlign: 'center' }}
          >
            Get a Quote
          </a>
        </div>
      )}
    </header>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function HeroSection() {
  const w = useWindowWidth(390)
  const isMobile = w < 640

  const copy = (
    <>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: isMobile ? '1rem' : '1.25rem', border: '1px solid rgba(196,135,42,0.4)', padding: '6px 12px' }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#c4872a', display: 'inline-block', flexShrink: 0 }} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#c4872a', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
          Kigali, Rwanda · Est. 2020
        </span>
      </div>

      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: isMobile ? 'clamp(2.15rem, 10vw, 2.75rem)' : 'clamp(3rem, 7vw, 6.5rem)',
          color: '#faf5ec',
          lineHeight: 1.05,
          letterSpacing: '-0.01em',
          margin: '0 0 0.85rem',
          maxWidth: 860,
        }}
      >
        Ground Truth
        <br />
        <em style={{ color: '#c4872a' }}>Engineered</em> for
        <br />
        Your Project.
      </h1>

      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: isMobile ? 14 : 'clamp(1rem, 2vw, 1.2rem)',
          color: '#a8bcc8',
          lineHeight: 1.7,
          maxWidth: 540,
          margin: isMobile ? '0 0 1.75rem' : '0 0 2.5rem',
          fontWeight: 300,
        }}
      >
        Professional Geotechnical Engineering and Building Consultancy. We transform subsurface uncertainty into reliable engineering decisions — from investigation to interpretation.
      </p>

      <div
        style={{
          display: 'flex',
          gap: isMobile ? '0.85rem' : '1rem',
          flexDirection: isMobile ? 'column' : 'row',
          flexWrap: 'wrap',
          alignItems: isMobile ? 'stretch' : 'center',
        }}
      >
        <a
          href="#services"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 12,
            fontWeight: 600,
            color: '#1a1208',
            backgroundColor: '#c4872a',
            padding: isMobile ? '13px 20px' : '14px 32px',
            textDecoration: 'none',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            display: 'inline-block',
            textAlign: 'center',
            transition: 'background-color 0.2s',
          }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.backgroundColor = '#e8b554')}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.backgroundColor = '#c4872a')}
        >
          Our Services
        </a>
        <a
          href="#contact"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 12,
            fontWeight: 500,
            color: '#e8d4b8',
            textDecoration: 'none',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: isMobile ? 'center' : 'flex-start',
            gap: '0.5rem',
            padding: isMobile ? '12px 0' : '14px 0',
            borderBottom: '1px solid rgba(232,212,184,0.3)',
          }}
        >
          Request a Quotation <span style={{ fontSize: 15 }}>→</span>
        </a>
      </div>
    </>
  )

  const stats = (
    <div
      style={{
        marginTop: isMobile ? '2rem' : '4rem',
        display: 'grid',
        gridTemplateColumns: isMobile ? 'repeat(2, minmax(0, 1fr))' : 'repeat(4, 1fr)',
        gap: isMobile ? '1.25rem 1rem' : '0',
        borderTop: '1px solid rgba(196,135,42,0.2)',
        paddingTop: isMobile ? '1.35rem' : '1.75rem',
        maxWidth: 720,
        width: '100%',
      }}
    >
      {[
        { value: '8+', label: 'Service Disciplines' },
        { value: 'ASTM', label: 'Testing Standards' },
        { value: 'RW', label: 'Rwanda & Beyond' },
        { value: '100%', label: 'Technical Focus' },
      ].map((s) => (
        <div key={s.label} style={{ minWidth: 0, paddingRight: isMobile ? 0 : '1.5rem' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? 24 : 28, color: '#c4872a', lineHeight: 1, marginBottom: 4 }}>{s.value}</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: isMobile ? 8 : 9, color: '#7a92a8', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{s.label}</div>
        </div>
      ))}
    </div>
  )

  if (isMobile) {
    return (
      <section id="hero" style={{ backgroundColor: '#1a1208', width: '100%', overflow: 'hidden' }}>
        <div style={{ position: 'relative', width: '100%', backgroundColor: '#1a1208' }}>
          <Image
            src="/images/drill-rig-blue.png"
            alt="GEOSURVEY field team with drilling rig on site"
            width={1024}
            height={768}
            priority
            sizes="100vw"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, rgba(26,18,8,0.15) 0%, rgba(26,18,8,0.35) 55%, #1a1208 100%)',
              pointerEvents: 'none',
            }}
            aria-hidden
          />
        </div>
        <div style={{ position: 'relative', padding: '1.5rem 1.25rem 2.75rem', width: '100%', boxSizing: 'border-box' }}>
          {copy}
          {stats}
        </div>
      </section>
    )
  }

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        backgroundColor: '#1a1208',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingBottom: '5rem',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/images/drill-rig-blue.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          opacity: 0.28,
        }}
        aria-hidden
      />
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} aria-hidden>
        {[15, 28, 42, 58, 72, 88].map((top, i) => (
          <div key={i} style={{ position: 'absolute', top: `${top}%`, left: 0, right: 0, height: 1, background: `rgba(196,135,42,${0.04 + i * 0.02})` }} />
        ))}
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%', background: 'linear-gradient(to bottom, transparent, #1a1208)', pointerEvents: 'none' }} aria-hidden />

      <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '0 2rem', width: '100%', boxSizing: 'border-box' }}>
        {copy}
        {stats}
      </div>
    </section>
  )
}

// ─── Approach strip ───────────────────────────────────────────────────────────
function ApproachStrip() {
  const steps = ['Understand the Project', 'Investigate the Ground', 'Characterize the Materials', 'Evaluate Engineering Behavior', 'Identify Geotechnical Risks', 'Develop Recommendations', 'Communicate Findings']
  return (
    <div
      style={{
        backgroundColor: '#2c1f0e',
        padding: '1.25rem 0',
        overflowX: 'auto',
        maxWidth: '100%',
        WebkitOverflowScrolling: 'touch',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'nowrap',
          justifyContent: 'space-between',
          width: 'max-content',
          minWidth: '100%',
          boxSizing: 'border-box',
          padding: '0 1.25rem',
        }}
      >
        {steps.map((step, i) => (
          <div key={step} style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0 0.75rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: '#c4872a', letterSpacing: '0.04em' }}>{String(i + 1).padStart(2, '0')}</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: '#d4b08a', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>{step}</span>
            </div>
            {i < steps.length - 1 && <span style={{ color: '#5c4020', fontSize: 12 }}>›</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── About Gallery (sliding) ──────────────────────────────────────────────────
const GALLERY_IMAGES = [
  '/images/gallery/gallery-01.png',
  '/images/gallery/gallery-02.png',
  '/images/gallery/gallery-03.png',
  '/images/gallery/gallery-04.png',
  '/images/gallery/gallery-05.png',
  '/images/gallery/gallery-06.png',
  '/images/gallery/gallery-07.png',
  '/images/gallery/gallery-08.png',
  '/images/gallery/gallery-09.png',
  '/images/gallery/gallery-10.png',
  '/images/gallery/gallery-11.png',
  '/images/gallery/gallery-12.png',
]

function AboutGallery({ isMobile }: { isMobile: boolean }) {
  const [idx, setIdx] = useState(0)
  const total = GALLERY_IMAGES.length

  useEffect(() => {
    const timer = setInterval(() => setIdx((prev) => (prev + 1) % total), 5000)
    return () => clearInterval(timer)
  }, [total])

  const slideIn = {
    initial: { x: '100%', opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
    exit: { x: '-30%', opacity: 0, transition: { duration: 0.5, ease: 'easeIn' as const } },
  }

  return (
    <div>
      <div style={{ position: 'relative', marginBottom: '1.5rem', overflow: 'hidden' }}>
        <div style={{ position: 'relative', width: '100%', height: isMobile ? 220 : 300 }}>
          <AnimatePresence initial={false}>
            <motion.div
              key={`top-${idx}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.8, ease: 'easeOut' as const } }}
              exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeIn' as const } }}
              style={{ position: 'absolute', inset: 0 }}
            >
              <Image
                src={GALLERY_IMAGES[idx % total]}
                alt="Field work"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(to top, rgba(26,18,8,0.7), transparent)', pointerEvents: 'none', zIndex: 3 }} />
        <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', fontFamily: 'var(--font-mono)', fontSize: 9, color: '#e8d4b8', letterSpacing: '0.1em', textTransform: 'uppercase', zIndex: 4 }}>
          Field Investigation · Subsurface Characterization
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
        {[1, 2].map((offset) => (
          <div key={offset} style={{ position: 'relative', height: isMobile ? 120 : 140, overflow: 'hidden' }}>
            <AnimatePresence initial={false}>
              <motion.div
                key={`btm-${offset}-${idx}`}
                variants={slideIn}
                initial="initial"
                animate="animate"
                exit="exit"
                style={{ position: 'absolute', inset: 0 }}
              >
                <Image
                  src={GALLERY_IMAGES[(idx + offset) % total]}
                  alt="Field work"
                  fill
                  sizes="25vw"
                  style={{ objectFit: 'cover' }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        {[
          { label: 'Mission', text: 'Provide accurate, reliable, and technically defensible geotechnical and materials testing services — enabling clients to manage geotechnical risks and achieve reliable construction outcomes.' },
          { label: 'Vision', text: 'Become a leading Geotechnical Engineering and Materials Testing company worldwide, recognized for technical excellence, innovation, and practical solutions for the built environment.' },
        ].map((item) => (
          <div key={item.label} style={{ backgroundColor: '#1a1208', padding: '1.5rem' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: '#c4872a', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{item.label}</div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#d4b08a', lineHeight: 1.7, margin: 0 }}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── About ────────────────────────────────────────────────────────────────────
function AboutSection() {
  const w = useWindowWidth()
  const isMobile = w < 768

  return (
    <section id="about" style={{ backgroundColor: '#faf5ec', padding: isMobile ? '4rem 0' : '6rem 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '0 1.25rem' : '0 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '3rem' : '5rem', alignItems: 'start' }}>
          {/* Left */}
          <div>
            <SectionLabel>About the Firm</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.9rem, 4vw, 3.2rem)', color: '#2c1f0e', lineHeight: 1.1, margin: '0 0 1.75rem' }}>
              Every Structure Begins with an Understanding of the Ground.
            </h2>
            <div style={{ width: 48, height: 3, background: 'linear-gradient(to right, #c4872a, #e8d4b8)', marginBottom: '1.75rem' }} />
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: '#5c4020', lineHeight: 1.8, margin: '0 0 1.25rem' }}>
              GEOSURVEY ENGINEERING LTD was established to provide professional, dependable, and technically focused geotechnical and construction consultancy services to clients across Rwanda and beyond.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: '#5c4020', lineHeight: 1.8, margin: '0 0 1.75rem' }}>
              Our work is founded on the principle that engineering decisions should be supported by representative site data, appropriate testing, sound engineering judgment, and clearly documented technical evidence.
            </p>
            <blockquote style={{ margin: 0, padding: '1.25rem 1.5rem', borderLeft: '3px solid #c4872a', backgroundColor: '#f4ead8' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 17, color: '#3d2c14', lineHeight: 1.55, fontStyle: 'italic', margin: 0 }}>
                &ldquo;Soil and rock conditions can vary significantly over short distances — inadequate understanding of subsurface conditions can lead to inappropriate foundation selection, excessive settlement, instability, and cost overruns.&rdquo;
              </p>
            </blockquote>
          </div>

          {/* Right — sliding gallery */}
          <AboutGallery isMobile={isMobile} />
        </div>
      </div>
    </section>
  )
}

// ─── Services ─────────────────────────────────────────────────────────────────
function ServicesSection() {
  const [hovered, setHovered] = useState<number | null>(null)
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const w = useWindowWidth()
  const cols = w < 640 ? 1 : w < 1024 ? 2 : 4
  const isMobile = w < 640

  const whatsappMessage =
    selectedService &&
    `Hello!\n\nI would like to request the following service:\n\n${selectedService.title}\n\nDescription:\n${selectedService.summary}\n\nThank you.`

  const whatsappUrl = selectedService ? `https://wa.me/${WHATSAPP_PHONE_DIGITS}?text=${encodeURIComponent(whatsappMessage ?? '')}` : ''

  useEffect(() => {
    if (!selectedService) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedService(null)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [selectedService])

  return (
    <section id="services" style={{ backgroundColor: '#f4ead8', padding: isMobile ? '4rem 0' : '6rem 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '0 1.25rem' : '0 2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: isMobile ? '2.5rem' : '4rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <SectionLabel>Engineering Approach</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1a1208', lineHeight: 1.1, margin: 0 }}>Our Services</h2>
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#7a5530', lineHeight: 1.7, maxWidth: 420, margin: 0 }}>
            From initial site assessment through laboratory characterization, foundation engineering, and construction quality control — integrated technical services across the full project lifecycle.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: '0', border: '1px solid #e8d4b8' }}>
          {SERVICES.map((s, i) => {
            const isLastInRow = (i + 1) % cols === 0
            const isInLastRow = i >= SERVICES.length - cols
            return (
              <div
                key={s.number}
                role="button"
                tabIndex={0}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setSelectedService(s)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setSelectedService(s)
                  }
                }}
                style={{
                  padding: isMobile ? '1.5rem' : '2rem',
                  borderRight: !isLastInRow ? '1px solid #e8d4b8' : 'none',
                  borderBottom: !isInLastRow ? '1px solid #e8d4b8' : 'none',
                  backgroundColor: hovered === i ? '#1a1208' : 'transparent',
                  transition: 'background-color 0.25s',
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.1rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: hovered === i ? '#c4872a' : '#b88d62', letterSpacing: '0.1em', transition: 'color 0.25s' }}>{s.number}</span>
                  <span style={{ fontSize: 20 }}>{s.icon}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 16, color: hovered === i ? '#e8d4b8' : '#2c1f0e', lineHeight: 1.25, margin: '0 0 0.65rem', transition: 'color 0.25s' }}>{s.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: hovered === i ? '#a8bcc8' : '#7a5530', lineHeight: 1.7, margin: 0, transition: 'color 0.25s' }}>{s.summary}</p>
              </div>
            )
          })}
        </div>
      </div>

      {selectedService && (
        <div
          role="dialog"
          aria-modal="true"
          onMouseDown={(e) => {
            if (e.currentTarget === e.target) setSelectedService(null)
          }}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(26,18,8,0.62)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.25rem',
            zIndex: 1000,
          }}
        >
          <div
            onMouseDown={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: 560,
              backgroundColor: '#faf5ec',
              border: '1px solid #e8d4b8',
              borderRadius: 14,
              padding: isMobile ? '1.25rem' : '1.5rem',
              boxShadow: '0 18px 60px rgba(0,0,0,0.25)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: '#c4872a', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 10 }}>
                  Contact us
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? 20 : 22, color: '#1a1208', lineHeight: 1.2, margin: 0 }}>
                  {selectedService.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedService(null)}
                aria-label="Close popup"
                style={{
                  border: '1px solid rgba(196,135,42,0.35)',
                  backgroundColor: 'transparent',
                  width: 34,
                  height: 34,
                  borderRadius: 10,
                  cursor: 'pointer',
                  fontFamily: 'var(--font-body)',
                  fontSize: 18,
                  color: '#1a1208',
                  lineHeight: 1,
                }}
              >
                ×
              </button>
            </div>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#7a5530', lineHeight: 1.8, margin: '0 0 1.25rem' }}>
              Click the button below to WhatsApp us and request this service.
            </p>

            <div style={{ marginBottom: '1.25rem', padding: '0.95rem 1rem', border: '1px solid rgba(196,135,42,0.25)', backgroundColor: 'rgba(196,135,42,0.06)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: '#c4872a', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 10 }}>
                Service details
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#2c1f0e', lineHeight: 1.75, margin: 0 }}>
                {selectedService.summary}
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.7rem',
                width: '100%',
                fontFamily: 'var(--font-body)',
                fontSize: 13,
                fontWeight: 700,
                color: '#ffffff',
                backgroundColor: '#25D366',
                border: 'none',
                padding: isMobile ? '12px 16px' : '13px 18px',
                textDecoration: 'none',
                borderRadius: 12,
                cursor: 'pointer',
                transition: 'filter 0.15s',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.filter = 'brightness(0.95)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.filter = 'none'
              }}
            >
              <span style={{ display: 'inline-flex', width: 20, height: 20, color: '#ffffff' }} aria-hidden>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="currentColor">
                  <path d="M19.1 4.9A10 10 0 0 0 3 17.8L2 22l4.3-1.1A10 10 0 0 0 22 12a10 10 0 0 0-2.9-7.1Zm-7.1 15.3c-1.5 0-2.9-.4-4.1-1.2l-.3-.2-2 .5.5-2-.2-.3c-.8-1.2-1.2-2.6-1.2-4.1 0-4.5 3.7-8.2 8.2-8.2s8.2 3.7 8.2 8.2-3.7 8.3-8.1 8.3Zm8-5.9c-.3-.1-1.8-.9-2.1-1s-.5-.1-.7.1-.8 1-1 1.1c-.2.1-.4.1-.6 0-1-.5-1.8-1.1-2.4-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.4.1-.1.1-.3.1-.5s0-.4-.1-.5-.7-1.7-.9-1.8c-.2-.2-.4-.2-.6-.2h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.1.9 2.2c.1.1 1.6 2.5 3.9 3.4 2.3.9 2.3.6 2.7.6s1.1-.4 1.3-.8c.2-.4.2-.8.1-.9-.1-.2-.2-.3-.5-.4Z" />
                </svg>
              </span>
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </section>
  )
}

// ─── Sectors ──────────────────────────────────────────────────────────────────
function SectorsSection() {
  const w = useWindowWidth()
  const isMobile = w < 768

  return (
    <section id="sectors" style={{ backgroundColor: '#1a1208', padding: isMobile ? '4rem 0' : '6rem 0', position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/images/site-compaction.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: isMobile ? 'scroll' : 'fixed',
          backgroundRepeat: 'no-repeat',
          opacity: 0.12,
          pointerEvents: 'none',
        }}
        aria-hidden
      />
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '0 1.25rem' : '0 2rem', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 2fr', gap: isMobile ? '2.5rem' : '5rem', alignItems: 'start' }}>
          <div>
            <SectionLabel>Project Sectors</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', color: '#faf5ec', lineHeight: 1.1, margin: '0 0 1.25rem' }}>
              Multidisciplinary Expertise Across Civil Engineering
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: '#a8bcc8', lineHeight: 1.8, margin: '0 0 1.75rem' }}>
              Our approach enables us to adapt the investigation programme and testing requirements to the specific characteristics, risks, scale, and objectives of each project.
            </p>
            <div style={{ padding: '1.25rem', border: '1px solid rgba(196,135,42,0.3)', backgroundColor: 'rgba(196,135,42,0.08)' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#c4872a', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
                Project experience includes buildings, roads, bridges, pumping stations, canals, marshland developments, dams, fishponds, agricultural infrastructure, and other civil engineering works.
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', backgroundColor: 'rgba(196,135,42,0.2)' }}>
            {SECTORS.map((s) => (
              <div
                key={s.label}
                style={{ backgroundColor: '#1a1208', padding: isMobile ? '1.25rem' : '1.75rem', display: 'flex', alignItems: 'center', gap: '0.85rem', transition: 'background-color 0.2s', cursor: 'default' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#2c1f0e')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#1a1208')}
              >
                <span style={{ fontSize: 20, flexShrink: 0 }}>{s.icon}</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#d4b08a', lineHeight: 1.4 }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Why Us ───────────────────────────────────────────────────────────────────
function WhyUsSection() {
  const w = useWindowWidth()
  const isMobile = w < 640
  const cols = w < 640 ? 1 : w < 1024 ? 2 : 4

  return (
    <section style={{ backgroundColor: '#faf5ec', padding: isMobile ? '4rem 0' : '6rem 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '0 1.25rem' : '0 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '2.5rem' : '4rem' }}>
          <SectionLabel>Why Clients Choose Us</SectionLabel>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#1a1208', lineHeight: 1.1, margin: '0 auto', maxWidth: 620 }}>
            Engineering Knowledge, Field Experience, Laboratory Testing — One Integrated Solution.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: '2px', backgroundColor: '#e8d4b8' }}>
          {REASONS.map((r) => (
            <div key={r.title} style={{ backgroundColor: '#faf5ec', padding: isMobile ? '2rem 1.5rem' : '2.5rem 2rem' }}>
              <div style={{ width: 40, height: 3, background: '#c4872a', marginBottom: '1.5rem' }} />
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 19, color: '#2c1f0e', lineHeight: 1.2, margin: '0 0 0.9rem' }}>{r.title}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#7a5530', lineHeight: 1.8, margin: 0 }}>{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Team ─────────────────────────────────────────────────────────────────────
function TeamSection() {
  const w = useWindowWidth()
  const isMobile = w < 640
  const isTablet = w < 960
  const [contactOpen, setContactOpen] = useState<string | null>(null)

  const members: {
    name: string
    role: string
    credential: string
    bio: string
    photo: string
  }[] = [
    {
      name: 'Eng. Fulgence Iradukunda',
      role: 'Managing Director & Founder',
      credential: 'Certified Geotechnical Engineer',
      bio: 'Provides technical and strategic leadership for GEOSURVEY ENGINEERING LTD. Professional focus includes geotechnical investigation, subsurface characterization, field testing, laboratory interpretation, foundation assessment, earthworks, and engineering consultancy. Responsible for technical direction, project coordination, engineering quality, and client engagement.',
      photo: '/images/team-fulgence.png',
    },
    {
      name: 'MSc. Niragire Rosine',
      role: 'Quality Manager',
      credential: 'MSc. Quality Management',
      bio: "Supports the company's quality-management activities, technical documentation, quality-control procedures, and continuous improvement of field and laboratory operations. Contributes to maintaining consistency, traceability, and reliability throughout the company's engineering and testing activities.",
      photo: '/images/team-rosine.png',
    },
  ]

  return (
    <section id="team" style={{ backgroundColor: '#f4ead8', padding: isMobile ? '4rem 0' : '6rem 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '0 1.25rem' : '0 2rem' }}>
        <SectionLabel>Professional Team</SectionLabel>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1a1208', lineHeight: 1.1, margin: '0 0 3rem', maxWidth: 480 }}>
          Quality & Professional Practice
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: isTablet ? '1fr' : '1fr 1fr', gap: '1.5rem' }}>
          {members.map((member) => (
            <div
              key={member.name}
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '120px 1fr',
                gap: isMobile ? '1.25rem' : '1.75rem',
                backgroundColor: '#faf5ec',
                padding: isMobile ? '1.75rem' : '2.25rem',
              }}
            >
              <div style={{ display: 'flex', justifyContent: isMobile ? 'flex-start' : 'flex-start' }}>
                <div style={{ width: isMobile ? 80 : 120, height: isMobile ? 80 : 120, overflow: 'hidden', backgroundColor: '#e8d4b8', flexShrink: 0, position: 'relative' }}>
                  <Image src={member.photo} alt={member.name} fill sizes="120px" style={{ objectFit: 'cover', objectPosition: 'center top' }} />
                </div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: '#c4872a', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{member.credential}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? 19 : 21, color: '#1a1208', margin: '0 0 0.2rem', lineHeight: 1.2 }}>{member.name}</h3>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#9a6e42', marginBottom: '0.85rem', fontWeight: 500 }}>{member.role}</div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#5c4020', lineHeight: 1.75, margin: '0 0 1rem' }}>{member.bio}</p>
                {member.name !== 'MSc. Niragire Rosine' && <button
                  type="button"
                  onClick={() => setContactOpen(member.name)}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 11,
                    fontWeight: 600,
                    color: '#1a1208',
                    backgroundColor: '#c4872a',
                    border: 'none',
                    padding: '9px 20px',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s',
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#e8b554')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#c4872a')}
                >
                  Contact
                </button>}
              </div>
            </div>
          ))}
        </div>

        {contactOpen && (
          <div
            role="dialog"
            aria-modal="true"
            onMouseDown={(e) => { if (e.currentTarget === e.target) setContactOpen(null) }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(26,18,8,0.62)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.25rem',
              zIndex: 1000,
            }}
          >
            <div
              onMouseDown={(e) => e.stopPropagation()}
              style={{
                width: '100%',
                maxWidth: 420,
                backgroundColor: '#faf5ec',
                border: '1px solid #e8d4b8',
                borderRadius: 14,
                padding: isMobile ? '1.5rem' : '2rem',
                boxShadow: '0 18px 60px rgba(0,0,0,0.25)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: '#c4872a', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 8 }}>Get in touch</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? 18 : 20, color: '#1a1208', lineHeight: 1.2, margin: 0 }}>{contactOpen}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setContactOpen(null)}
                  aria-label="Close"
                  style={{ border: '1px solid rgba(196,135,42,0.35)', backgroundColor: 'transparent', width: 34, height: 34, borderRadius: 10, cursor: 'pointer', fontSize: 18, color: '#1a1208', lineHeight: 1 }}
                >
                  ×
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a
                  href="tel:+250788424508"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                    padding: '12px 16px', backgroundColor: '#1a1208', borderRadius: 10,
                    textDecoration: 'none', transition: 'opacity 0.15s',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.88' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
                >
                  <span style={{ fontSize: 18 }}>📞</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 8, color: '#c4872a', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 2 }}>Phone</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#e8d4b8', fontWeight: 500 }}>+250 788 424 508</div>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${WHATSAPP_PHONE_DIGITS}?text=${encodeURIComponent(`Hello! I would like to get in touch with ${contactOpen}. Thank you.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                    padding: '12px 16px', backgroundColor: '#25D366', borderRadius: 10,
                    textDecoration: 'none', transition: 'filter 0.15s',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.filter = 'brightness(0.93)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.filter = 'none' }}
                >
                  <span style={{ display: 'inline-flex', width: 20, height: 20, color: '#fff' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="currentColor">
                      <path d="M19.1 4.9A10 10 0 0 0 3 17.8L2 22l4.3-1.1A10 10 0 0 0 22 12a10 10 0 0 0-2.9-7.1Zm-7.1 15.3c-1.5 0-2.9-.4-4.1-1.2l-.3-.2-2 .5.5-2-.2-.3c-.8-1.2-1.2-2.6-1.2-4.1 0-4.5 3.7-8.2 8.2-8.2s8.2 3.7 8.2 8.2-3.7 8.3-8.1 8.3Zm8-5.9c-.3-.1-1.8-.9-2.1-1s-.5-.1-.7.1-.8 1-1 1.1c-.2.1-.4.1-.6 0-1-.5-1.8-1.1-2.4-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.4.1-.1.1-.3.1-.5s0-.4-.1-.5-.7-1.7-.9-1.8c-.2-.2-.4-.2-.6-.2h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.1.9 2.2c.1.1 1.6 2.5 3.9 3.4 2.3.9 2.3.6 2.7.6s1.1-.4 1.3-.8c.2-.4.2-.8.1-.9-.1-.2-.2-.3-.5-.4Z" />
                    </svg>
                  </span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 8, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 2 }}>WhatsApp</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#fff', fontWeight: 500 }}>+250 788 424 508</div>
                  </div>
                </a>

                <a
                  href="mailto:geosurveyltd3@gmail.com"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                    padding: '12px 16px', backgroundColor: '#2c1f0e', borderRadius: 10,
                    textDecoration: 'none', transition: 'opacity 0.15s',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.88' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
                >
                  <span style={{ fontSize: 18 }}>✉️</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 8, color: '#c4872a', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 2 }}>Email</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#e8d4b8', fontWeight: 500 }}>geosurveyltd3@gmail.com</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Quality note */}
        <div style={{ marginTop: '2rem', backgroundColor: '#2c1f0e', padding: isMobile ? '1.5rem' : '2rem 2.5rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
          {!isMobile && (
            <div style={{ flexShrink: 0, width: 48, height: 48, border: '1.5px solid #c4872a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>✓</div>
          )}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: '#c4872a', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Quality Assurance</div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#d4b08a', lineHeight: 1.75, margin: 0 }}>
              Quality in geotechnical engineering begins with the quality of the investigation itself. GEOSURVEY ENGINEERING LTD places strong emphasis on competent field execution, appropriate sampling, reliable laboratory procedures, data traceability, technical review, and clear engineering reporting. Specific testing standards are selected according to contractual requirements, applicable Rwanda standards (ISO/RS), and client technical specifications.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
function CtaSection() {
  const w = useWindowWidth()
  const isMobile = w < 640

  return (
    <section style={{ backgroundColor: '#1a1208', padding: isMobile ? '5rem 1.25rem' : '7rem 2rem', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(196,135,42,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} aria-hidden />
      <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}>
        <SectionLabel>Your Project. Our Engineering Expertise.</SectionLabel>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? 'clamp(2rem, 8vw, 2.8rem)' : 'clamp(2.5rem, 5vw, 4rem)', color: '#faf5ec', lineHeight: 1.08, margin: '0 0 1.25rem' }}>
          Don&apos;t Build on Assumptions.
          <br />
          <em style={{ color: '#c4872a' }}>Build on Reliable Ground Information.</em>
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: '#a8bcc8', lineHeight: 1.8, margin: '0 0 2.5rem' }}>
          Before investing in foundations, roads, bridges, buildings, dams, or other infrastructure, obtain a clear understanding of the ground conditions that will support your project.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { label: 'Request Geotechnical Investigation', primary: true },
            { label: 'Request Laboratory Testing', primary: false },
            { label: 'Talk to Our Engineers', primary: false },
          ].map((btn) => (
            <a
              key={btn.label}
              href="#contact"
              style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, color: btn.primary ? '#1a1208' : '#e8d4b8', backgroundColor: btn.primary ? '#c4872a' : 'transparent', border: btn.primary ? 'none' : '1px solid rgba(232,212,184,0.3)', padding: isMobile ? '12px 18px' : '13px 22px', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'inline-block', transition: 'all 0.2s' }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; if (btn.primary) el.style.backgroundColor = '#e8b554'; else el.style.borderColor = 'rgba(232,212,184,0.7)' }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; if (btn.primary) el.style.backgroundColor = '#c4872a'; else el.style.borderColor = 'rgba(232,212,184,0.3)' }}
            >
              {btn.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)
  const w = useWindowWidth()
  const isMobile = w < 768

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const msg = [
      `Hello, my name is ${form.name}.`,
      ``,
      `I am interested in requesting a quotation or consultation${form.service ? ` for ${form.service}` : ''}.`,
      ``,
      form.message,
      ``,
      `You can reach me at`,
      `  ${form.email}`,
      form.phone ? `  ${form.phone}` : '',
      ``,
      `Looking forward to hearing from you. Thank you.`,
    ].filter(Boolean).join('\n')
    window.open(`https://wa.me/${WHATSAPP_PHONE_DIGITS}?text=${encodeURIComponent(msg)}`, '_blank')
    setSent(true)
  }

  const inputStyle: CSSProperties = {
    width: '100%',
    fontFamily: 'var(--font-body)',
    fontSize: 14,
    color: '#2c1f0e',
    backgroundColor: '#faf5ec',
    border: '1px solid #d4b08a',
    padding: '12px 14px',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  return (
    <section id="contact" style={{ backgroundColor: '#f4ead8', padding: isMobile ? '4rem 0' : '6rem 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '0 1.25rem' : '0 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.4fr', gap: isMobile ? '3rem' : '5rem', alignItems: 'start' }}>
          {/* Info */}
          <div>
            <SectionLabel>Contact</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: '#1a1208', lineHeight: 1.1, margin: '0 0 2rem' }}>
              Get in Touch with Our Engineering Team
            </h2>
            {[
              { label: 'Company', value: 'GEOSURVEY ENGINEERING LTD', sub: 'Geotechnical Engineering · Laboratory Soil and Material Testing · Building Consultancy' },
              { label: 'Address', value: 'Rwanda – Kigali – Gasabo', sub: null },
              { label: 'Telephone', value: '+250 788 424 508', sub: null },
              { label: 'Email', value: 'geosurveyltd3@gmail.com', sub: null },
            ].map((item) => (
              <div key={item.label} style={{ paddingBottom: '1.1rem', marginBottom: '1.1rem', borderBottom: '1px solid #e8d4b8' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: '#c4872a', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>{item.label}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#2c1f0e', fontWeight: 500, marginBottom: item.sub ? 3 : 0 }}>{item.value}</div>
                {item.sub && <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: '#9a6e42', lineHeight: 1.5 }}>{item.sub}</div>}
              </div>
            ))}
            {!isMobile && (
              <div style={{ marginTop: '1.75rem', position: 'relative', overflow: 'hidden', height: 190 }}>
                <Image src="/images/field-instruments.png" alt="Field geotechnical instruments and data acquisition" fill sizes="(max-width: 768px) 100vw, 40vw" style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: '0.85rem', left: '0.85rem', fontFamily: 'var(--font-mono)', fontSize: 8, color: '#faf5ec', letterSpacing: '0.1em', textTransform: 'uppercase', backgroundColor: 'rgba(26,18,8,0.6)', padding: '4px 8px' }}>
                  Field Testing · Rwanda
                </div>
              </div>
            )}
          </div>

          {/* Form */}
          <div style={{ backgroundColor: '#faf5ec', padding: isMobile ? '1.75rem' : '2.5rem' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                <div style={{ width: 56, height: 56, border: '2px solid #c4872a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, margin: '0 auto 1.5rem' }}>✓</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 24, color: '#1a1208', margin: '0 0 1rem' }}>Enquiry Received</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: '#7a5530', lineHeight: 1.7 }}>
                  Thank you for contacting GEOSURVEY ENGINEERING LTD. Our engineering team will review your enquiry and respond promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <SectionLabel>Request a Quotation or Consultation</SectionLabel>
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: '#9a6e42', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>Full Name *</label>
                    <input required type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" style={inputStyle} onFocus={(e) => ((e.target as HTMLElement).style.borderColor = '#c4872a')} onBlur={(e) => ((e.target as HTMLElement).style.borderColor = '#d4b08a')} />
                  </div>
                  <div>
                    <label style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: '#9a6e42', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>Email *</label>
                    <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" style={inputStyle} onFocus={(e) => ((e.target as HTMLElement).style.borderColor = '#c4872a')} onBlur={(e) => ((e.target as HTMLElement).style.borderColor = '#d4b08a')} />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: '#9a6e42', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>Phone</label>
                    <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+250 ..." style={inputStyle} onFocus={(e) => ((e.target as HTMLElement).style.borderColor = '#c4872a')} onBlur={(e) => ((e.target as HTMLElement).style.borderColor = '#d4b08a')} />
                  </div>
                  <div>
                    <label style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: '#9a6e42', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>Service Required</label>
                    <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }} onFocus={(e) => ((e.target as HTMLElement).style.borderColor = '#c4872a')} onBlur={(e) => ((e.target as HTMLElement).style.borderColor = '#d4b08a')}>
                      <option value="">Select a service</option>
                      <option>Geotechnical Investigation</option>
                      <option>Laboratory Soil Testing</option>
                      <option>Construction Materials Testing</option>
                      <option>Foundation Engineering</option>
                      <option>Road & Pavement Geotechnics</option>
                      <option>Building Consultancy</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: '#9a6e42', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>Project Description *</label>
                  <textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Describe your project — type, location, scope, timeline, and any specific geotechnical or testing requirements..." rows={5} style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }} onFocus={(e) => ((e.target as HTMLElement).style.borderColor = '#c4872a')} onBlur={(e) => ((e.target as HTMLElement).style.borderColor = '#d4b08a')} />
                </div>
                <button
                  type="submit"
                  style={{ width: '100%', fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, color: '#faf5ec', backgroundColor: '#2c1f0e', border: 'none', padding: '15px 32px', cursor: 'pointer', letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'background-color 0.2s' }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.backgroundColor = '#c4872a')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.backgroundColor = '#2c1f0e')}
                >
                  Submit Enquiry →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const w = useWindowWidth()
  const isMobile = w < 640
  const isTablet = w < 900

  return (
    <footer style={{ backgroundColor: '#0e1208', padding: isMobile ? '2.5rem 1.25rem 1.5rem' : '3rem 2rem 2rem' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : '2fr 1fr 1fr',
            gap: isMobile ? '2rem' : '3rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid rgba(196,135,42,0.15)',
            marginBottom: '1.5rem',
          }}
        >
          <div>
            <div
              style={{
                backgroundColor: '#ffffff',
                padding: '0.75rem 1rem',
                display: 'inline-block',
                marginBottom: '1rem',
              }}
            >
              <Image
                src="/images/logo.png"
                alt="GEOSURVEY ENGINEERING Ltd"
                width={160}
                height={137}
                style={{ width: 140, height: 'auto', display: 'block' }}
              />
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#7a92a8', lineHeight: 1.8, margin: 0, maxWidth: 340 }}>
              Transforming subsurface uncertainty into reliable engineering decisions. Serving Rwanda and beyond with systematic investigation, representative testing, and sound engineering judgment.
            </p>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: '#c4872a', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '0.85rem' }}>Services</div>
            {['Geotechnical Investigation', 'Laboratory Testing', 'Construction Materials', 'Field Testing', 'Foundation Engineering', 'Road Geotechnics', 'Slope & Earthworks', 'Building Consultancy'].map((s) => (
              <div key={s} style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: '#7a92a8', lineHeight: 2 }}>{s}</div>
            ))}
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: '#c4872a', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '0.85rem' }}>Contact</div>
            {[
              { label: 'Location', val: 'Kigali – Gasabo, Rwanda' },
              { label: 'Phone', val: '+250 788 424 508' },
              { label: 'Email', val: 'geosurveyltd3@gmail.com' },
            ].map((c) => (
              <div key={c.label} style={{ marginBottom: '0.85rem' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 8, color: '#5c4020', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{c.label}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#a8bcc8', marginTop: 2 }}>{c.val}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: '#5c4020', letterSpacing: '0.08em' }}>© 2026 GEOSURVEY ENGINEERING LTD · All rights reserved · Kigali, Rwanda</div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'flex-start' : 'flex-end', gap: '0.45rem' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: '#5c4020', letterSpacing: '0.08em' }}>ASTM · ISO/RS · BS · Rwanda Standards</div>
            <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 12, color: '#7a92a8' }}>
              Designed &amp; built by{' '}
              <a
                href="https://www.gbma.tech/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#c4872a', fontWeight: 600, textDecoration: 'none' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#e8b554')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#c4872a')}
              >
                GBMA Digital Solutions
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────
export function LandingPage() {
  return (
    <div style={{ fontFamily: 'var(--font-body)', overflowX: 'hidden', maxWidth: '100%' }}>
      <NavBar />
      <main style={{ paddingTop: 72, overflowX: 'hidden', maxWidth: '100%' }}>
        <HeroSection />
        <ApproachStrip />
        <AboutSection />
        <ServicesSection />
        <SectorsSection />
        <WhyUsSection />
        <TeamSection />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
