import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'

const WA_NUMBER = '6283134931256'
const WA_ADMIN = 'Aquelino'
const WA_LINK = (msg: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`

// ─── Icons ────────────────────────────────────────────────────────────────────
function FlameIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.66 11.2C17.43 10.9 17.15 10.64 16.89 10.38C16.22 9.78 15.46 9.35 14.82 8.72C13.33 7.26 13 4.85 13.95 3C13 3.23 12.17 3.75 11.46 4.32C8.87 6.4 7.85 10.07 9.07 13.22C9.11 13.32 9.15 13.42 9.15 13.55C9.15 13.77 9 13.97 8.8 14.05C8.57 14.15 8.33 14.09 8.14 13.93C8.08 13.88 8.04 13.83 8 13.76C6.87 12.33 6.69 10.28 7.45 8.64C5.78 10 4.87 12.3 5 14.47C5.06 14.97 5.12 15.47 5.29 15.97C5.43 16.57 5.7 17.17 6 17.7C7.08 19.43 8.95 20.67 10.96 20.92C13.1 21.19 15.39 20.8 17.03 19.32C18.86 17.66 19.5 15 18.56 12.72L18.43 12.46C18.22 12 17.66 11.2 17.66 11.2Z" />
    </svg>
  )
}
function WAIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}
function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
  )
}
function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}
function MenuHamIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}
function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}
function LocationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12,2A8,8 0 0,0 4,10C4,14.03 7.4,17.31 11,21.46C11.5,22.05 12.5,22.05 13,21.46C16.6,17.31 20,14.03 20,10A8,8 0 0,0 12,2M12,12.5A2.5,2.5 0 0,1 9.5,10A2.5,2.5 0 0,1 12,7.5A2.5,2.5 0 0,1 14.5,10A2.5,2.5 0 0,1 12,12.5Z" />
    </svg>
  )
}
function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2M16.75 16.04L11 13V7H12.5V12.15L17.5 15.04L16.75 16.04Z" />
    </svg>
  )
}
function GrillSvg({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 60" fill="none">
      <rect x="5" y="8" width="70" height="6" rx="3" fill="currentColor" opacity="0.7"/>
      <rect x="5" y="20" width="70" height="6" rx="3" fill="currentColor" opacity="0.7"/>
      <rect x="5" y="32" width="70" height="6" rx="3" fill="currentColor" opacity="0.7"/>
      <rect x="5" y="44" width="70" height="6" rx="3" fill="currentColor" opacity="0.7"/>
      <ellipse cx="40" cy="30" rx="22" ry="14" fill="currentColor" opacity="0.15"/>
    </svg>
  )
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  const links = [
    { label: 'Menu', href: '#menu' },
    { label: 'Promo', href: '#promo' },
    { label: 'Testimoni', href: '#testimoni' },
    { label: 'FAQ', href: '#faq' },
  ]
  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'bg-coal/96 backdrop-blur-md' : 'bg-transparent'}`}
      style={{ boxShadow: scrolled ? '0 1px 0 rgba(234,88,12,0.15)' : 'none' }}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <FlameIcon className="w-7 h-7 text-fire-bright transition-transform group-hover:scale-110" />
          <span className="font-display text-lg font-bold text-cream tracking-tight">Ikan Bakar Fresh</span>
        </a>
        <div className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <a key={l.label} href={l.href} className="text-sm font-medium text-ash hover:text-cream transition-colors duration-200 relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1.5px] after:bg-fire-mid hover:after:w-full after:transition-all after:duration-300">
              {l.label}
            </a>
          ))}
        </div>
        <a href={WA_LINK('Halo, saya mau pesan Ikan Bakar Fresh!')} target="_blank" rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 bg-fire-mid hover:bg-fire-bright text-white text-sm font-bold rounded-full transition-all duration-200 hover:scale-105 shadow-fire-sm">
          <FlameIcon className="w-4 h-4" /> Pesan Sekarang
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden text-cream p-1">
          {open ? <CloseIcon className="w-6 h-6" /> : <MenuHamIcon className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-coal-mid border-t border-coal-light px-6 py-5 space-y-3">
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="block text-cream font-medium py-1.5 border-b border-coal-light/50 last:border-0">
              {l.label}
            </a>
          ))}
          <a href={WA_LINK('Halo, saya mau pesan Ikan Bakar Fresh!')} target="_blank" rel="noopener noreferrer"
            className="block w-full text-center mt-2 px-4 py-3 bg-fire-mid text-white font-bold rounded-xl">
            Pesan Sekarang via WhatsApp
          </a>
        </div>
      )}
    </nav>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-coal">
      <div className="absolute inset-0 bg-gradient-to-br from-coal via-coal-mid to-[#3d1505]" />
      <div className="absolute bottom-0 inset-x-0 h-80 bg-gradient-to-t from-fire-dark/20 to-transparent pointer-events-none" />
      <div className="absolute inset-0 grill-pattern opacity-[0.04]" />
      {Array.from({ length: 14 }).map((_, i) => (
        <div key={i} className="ember" style={{ '--delay': `${(i * 0.38).toFixed(2)}s`, '--x': `${8 + i * 6.3}%` } as React.CSSProperties} />
      ))}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-fire-mid/40 bg-fire-dark/20 text-fire-bright text-xs font-bold tracking-widest uppercase mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-fire-bright" style={{ animation: 'pulse-slow 2s infinite' }} />
            Fresh dari Pasar, Dibakar Saat Dipesan
          </div>
          <h1 className="font-display text-5xl md:text-[68px] font-black leading-[1.0] tracking-tight text-cream mb-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Aroma Bakaran<br />
            <span style={{ background: 'linear-gradient(135deg, #ea580c 0%, #fb923c 60%, #fbbf24 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Menggoda,
            </span>
            <br />Rasa yang Bikin<br />Nagih.
          </h1>
          <p className="text-base md:text-lg text-ash leading-relaxed max-w-lg mb-10 animate-fade-up" style={{ animationDelay: '0.35s' }}>
            Ikan segar pilihan, dibalut bumbu rempah khas, dibakar di atas bara api hingga meresap ke dalam dagingnya. Sekali coba, langsung jatuh cinta.
          </p>
          <div className="flex flex-wrap gap-4 mb-10 animate-fade-up" style={{ animationDelay: '0.45s' }}>
            <a href={WA_LINK('Halo Admin Aquelino, saya mau pesan Ikan Bakar Fresh sekarang!')} target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-7 py-4 bg-fire-mid hover:bg-fire-bright text-white font-bold rounded-xl transition-all duration-300 hover:scale-[1.04] shadow-fire text-base">
              <FlameIcon className="w-5 h-5" />
              Pesan Sekarang via WhatsApp
            </a>
            <a href="#menu"
              className="inline-flex items-center gap-2 px-7 py-4 border border-fire-mid/40 text-cream hover:border-fire-mid hover:bg-fire-dark/20 font-semibold rounded-xl transition-all duration-300 text-base">
              Lihat Menu
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-5 animate-fade-up" style={{ animationDelay: '0.55s' }}>
            <div className="flex items-center gap-2 text-sm text-ash">
              <span className="w-2 h-2 rounded-full bg-red-400" style={{ animation: 'pulse-slow 1.5s infinite' }} />
              Stok Terbatas Hari Ini
            </div>
            <div className="px-4 py-1.5 bg-fire-dark/30 border border-fire-mid/30 rounded-full text-fire-bright text-sm font-bold">
              Promo Spesial — Diskon hingga 25%
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-coal to-transparent pointer-events-none" />
    </section>
  )
}

// ─── Problem ──────────────────────────────────────────────────────────────────
const problems = [
  { emoji: '😔', title: 'Ikan Tidak Segar', desc: 'Beli ikan bakar di tempat lain, dagingnya sudah lembek dan berbau amis. Kecewa setelah nunggu lama.' },
  { emoji: '😑', title: 'Bumbu Nggak Meresap', desc: 'Bumbu cuma di luar, dalamnya hambar. Rasanya biasa saja, tidak ada yang istimewa.' },
  { emoji: '😤', title: 'Tunggu Terlalu Lama', desc: 'Sudah lapar, eh antrinya panjang. Makanan datang sudah dingin dan tidak fresh lagi.' },
  { emoji: '😤', title: 'Porsi Kecil, Harga Mahal', desc: 'Bayar mahal tapi porsi pas-pasan. Belum kenyang sudah harus bayar lagi.' },
]

function Problem() {
  return (
    <section className="bg-coal py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-fire-mid text-xs font-bold uppercase tracking-widest">Pernah Ngalamin?</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mt-3 mb-4 leading-tight">
            Cari Ikan Bakar Enak Itu Susah.
          </h2>
          <p className="text-ash max-w-lg mx-auto leading-relaxed">
            Kita tahu rasanya kecewa setelah ngidam ikan bakar tapi yang datang malah mengecewakan.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {problems.map((p) => (
            <div key={p.title} className="flex gap-4 p-6 rounded-2xl bg-coal-mid border border-coal-light hover:border-fire-dark/60 transition-colors duration-300 group">
              <span className="text-3xl leading-none mt-0.5 flex-shrink-0 grayscale group-hover:grayscale-0 transition-all duration-300">{p.emoji}</span>
              <div>
                <h3 className="font-display font-bold text-base text-cream mb-1">{p.title}</h3>
                <p className="text-ash text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Solution ─────────────────────────────────────────────────────────────────
const benefits = [
  {
    svg: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M7.5,4A5.5,5.5 0 0,0 2,9.5C2,10 2.09,10.5 2.22,11H6.3L7.57,7.63C7.87,6.83 9.05,6.75 9.43,7.63L11.5,13L12.09,11.58C12.22,11.25 12.57,11 12.92,11H21.78C21.91,10.5 22,10 22,9.5A5.5,5.5 0 0,0 16.5,4C15,4 13.65,4.62 12.67,5.63C12.3,6.04 11.7,6.04 11.33,5.63C10.35,4.62 9,4 7.5,4M2.42,13C3,15.5 5.25,19 12,19C18.75,19 21,15.5 21.58,13H13.3L12.5,15C12.13,15.87 10.87,15.87 10.5,15L8.5,10L7.92,11.38C7.79,11.75 7.44,12 7.08,12H2.42Z"/></svg>,
    title: 'Ikan Super Fresh',
    desc: 'Ikan diambil langsung dari pasar setiap pagi. Dipilih yang terbaik, tidak ada kompromi soal kesegaran.',
  },
  {
    svg: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L8 6H10V10L6 14H4C2.9 14 2 14.9 2 16V20H22V16C22 14.9 21.1 14 20 14H18L14 10V6H16L12 2M9 16H15V18H9V16Z"/></svg>,
    title: 'Bumbu Meresap 4 Jam',
    desc: 'Dimarinasi minimal 4 jam dengan racikan bumbu rempah asli. Rasa meresap hingga ke tulang.',
  },
  {
    svg: <FlameIcon className="w-5 h-5" />,
    title: 'Dibakar Saat Dipesan',
    desc: 'Tidak ada ikan bakar yang duduk menunggu. Setiap pesanan dibakar fresh di atas arang pilihan.',
  },
  {
    svg: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M21 16.5C21 16.88 20.79 17.21 20.47 17.38L12.57 21.82C12.41 21.94 12.21 22 12 22C11.79 22 11.59 21.94 11.43 21.82L3.53 17.38C3.21 17.21 3 16.88 3 16.5V7.5C3 7.12 3.21 6.79 3.53 6.62L11.43 2.18C11.59 2.06 11.79 2 12 2C12.21 2 12.41 2.06 12.57 2.18L20.47 6.62C20.79 6.79 21 7.12 21 7.5V16.5Z"/></svg>,
    title: 'Porsi Puas, Harga Sahabat',
    desc: 'Porsi jumbo yang bikin kenyang tanpa bikin dompet menangis. Nilai terbaik untuk uang Anda.',
  },
  {
    svg: <ClockIcon className="w-5 h-5" />,
    title: 'Respon Cepat 15 Menit',
    desc: 'Pesan via WhatsApp, admin langsung konfirmasi. Proses cepat, tidak ada drama.',
  },
  {
    svg: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18 18.5C18.83 18.5 19.5 17.83 19.5 17C19.5 16.17 18.83 15.5 18 15.5C17.17 15.5 16.5 16.17 16.5 17C16.5 17.83 17.17 18.5 18 18.5M19.5 9.5L21.46 12H17V9.5M6 18.5C6.83 18.5 7.5 17.83 7.5 17C7.5 16.17 6.83 15.5 6 15.5C5.17 15.5 4.5 16.17 4.5 17C4.5 17.83 5.17 18.5 6 18.5M20 8H17V4H3C1.89 4 1 4.89 1 6V17H3C3 18.66 4.34 20 6 20C7.66 20 9 18.66 9 17H15C15 18.66 16.34 20 18 20C19.66 20 21 18.66 21 17H23V12L20 8Z"/></svg>,
    title: 'Diantar Selagi Panas',
    desc: 'Dikemas khusus agar tetap panas dan beraroma sampai di tangan Anda.',
  },
]

function Solution() {
  return (
    <section className="bg-coal-mid py-20 px-6 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(234,88,12,0.3), transparent)' }} />
      <div className="absolute bottom-0 inset-x-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(234,88,12,0.3), transparent)' }} />
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-fire-mid text-xs font-bold uppercase tracking-widest">Solusi Dari Kami</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mt-3 mb-4 leading-tight">
            Ikan Bakar Yang Sebenarnya.
          </h2>
          <p className="text-ash max-w-lg mx-auto leading-relaxed">
            Kami nggak cuma jualan ikan bakar — kami sajikan pengalaman makan yang bikin Anda balik lagi.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b) => (
            <div key={b.title} className="group p-6 rounded-2xl bg-coal border border-coal-light hover:border-fire-mid/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-fire-sm">
              <div className="w-11 h-11 rounded-xl bg-fire-dark/40 flex items-center justify-center text-fire-bright mb-4 group-hover:bg-fire-dark/70 transition-colors">
                {b.svg}
              </div>
              <h3 className="font-display font-bold text-base text-cream mb-2">{b.title}</h3>
              <p className="text-ash text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Menu ─────────────────────────────────────────────────────────────────────
const menuItems = [
  { name: 'Ikan Gurame Bakar', desc: 'Gurame segar 500g, bumbu kecap pedas manis, dibakar sempurna di arang. Daging lembut, kulit crispy.', price: 'Rp 45.000', tag: 'Bestseller', gradient: 'from-[#7c2d12] via-[#5c1a00] to-[#1c1209]' },
  { name: 'Ikan Nila Bakar', desc: 'Nila segar pilihan, bumbu kuning rempah lengkuas-jahe-kunyit. Aromanya menggugah selera.', price: 'Rp 35.000', tag: null, gradient: 'from-[#78350f] via-[#451a03] to-[#1c1209]' },
  { name: 'Ikan Patin Bakar', desc: 'Patin lokal yang empuk, dimarinasi bumbu rica-rica khas. Pedas gurih sampai ke tulang.', price: 'Rp 38.000', tag: null, gradient: 'from-[#9a3412] via-[#5c1a00] to-[#1c1209]' },
  { name: 'Ikan Kakap Bakar', desc: 'Kakap merah premium, bumbu taliwang special. Tekstur daging padat, cocok untuk acara spesial.', price: 'Rp 65.000', tag: 'Premium', gradient: 'from-[#b45309] via-[#78350f] to-[#1c1209]' },
  { name: 'Udang Bakar Jumbo', desc: 'Udang jumbo segar, bumbu mentega bawang putih. Dijamin bikin nambah terus.', price: 'Rp 55.000', tag: 'Favorit', gradient: 'from-[#c2410c] via-[#7c2d12] to-[#1c1209]' },
  { name: 'Paket Hemat Keluarga', desc: '2 ekor ikan pilihan + 5 nasi + 4 es teh manis. Sempurna untuk makan siang keluarga.', price: 'Rp 120.000', tag: 'Hemat', gradient: 'from-[#92400e] via-[#5c1a00] to-[#1c1209]' },
]

function Menu() {
  return (
    <section id="menu" className="bg-coal py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-fire-mid text-xs font-bold uppercase tracking-widest">Menu Andalan</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mt-3 mb-4 leading-tight">
            Pilih Favoritmu
          </h2>
          <p className="text-ash max-w-md mx-auto leading-relaxed">
            Setiap menu dibakar fresh dengan bumbu rempah pilihan. Dijamin bikin lidah bergoyang.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {menuItems.map((item) => (
            <div key={item.name} className="group flex flex-col rounded-2xl bg-coal-mid border border-coal-light hover:border-fire-mid/40 transition-all duration-300 overflow-hidden hover:-translate-y-1">
              <div className={`h-40 bg-gradient-to-br ${item.gradient} relative overflow-hidden flex-shrink-0`}>
                <div className="absolute inset-0 grill-pattern opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <GrillSvg className="w-24 h-20 text-fire-bright/40 group-hover:text-fire-bright/60 transition-colors duration-300" />
                </div>
                {item.tag && (
                  <span className="absolute top-3 right-3 px-2.5 py-1 bg-fire-mid text-white text-xs font-bold rounded-full tracking-wide">
                    {item.tag}
                  </span>
                )}
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display font-bold text-base text-cream mb-1.5">{item.name}</h3>
                <p className="text-ash text-sm leading-relaxed flex-1 mb-4">{item.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-fire-bright text-lg">{item.price}</span>
                  <a href={WA_LINK(`Halo Admin Aquelino, saya mau pesan ${item.name} (${item.price})`)} target="_blank" rel="noopener noreferrer"
                    className="px-4 py-1.5 bg-fire-dark/60 hover:bg-fire-mid text-fire-bright hover:text-white text-sm font-bold rounded-full border border-fire-mid/30 hover:border-fire-mid transition-all duration-200">
                    Pesan
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Gallery ──────────────────────────────────────────────────────────────────
const galleryItems = [
  { label: 'Gurame Bakar Kecap', color: 'from-[#7c2d12] to-[#431407]', size: 'md:col-span-2 md:row-span-2' },
  { label: 'Nila Bumbu Kuning', color: 'from-[#78350f] to-[#451a03]', size: '' },
  { label: 'Udang Jumbo Bakar', color: 'from-[#92400e] to-[#3b0764]', size: '' },
  { label: 'Kakap Taliwang', color: 'from-[#9a3412] to-[#431407]', size: '' },
  { label: 'Proses Pembakaran', color: 'from-[#c2410c] to-[#7c2d12]', size: '' },
  { label: 'Paket Keluarga', color: 'from-[#b45309] to-[#431407]', size: '' },
]

function Gallery() {
  return (
    <section className="bg-coal-mid py-20 px-6 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(234,88,12,0.3), transparent)' }} />
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-fire-mid text-xs font-bold uppercase tracking-widest">Galeri</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mt-3 leading-tight">
            Lihat Sendiri Kesegarannya
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3" style={{ gridTemplateRows: 'auto' }}>
          {galleryItems.map((g, i) => (
            <div key={i} className={`relative aspect-square rounded-2xl bg-gradient-to-br ${g.color} overflow-hidden group cursor-pointer ${g.size}`}>
              <div className="absolute inset-0 grill-pattern opacity-10" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4">
                <GrillSvg className="w-16 h-12 text-fire-bright/40 group-hover:scale-110 group-hover:text-fire-bright/60 transition-all duration-300" />
                <span className="text-cream/60 text-xs font-semibold text-center group-hover:text-cream transition-colors duration-200">{g.label}</span>
              </div>
              <div className="absolute inset-0 bg-fire-dark/0 group-hover:bg-fire-dark/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
const testimonials = [
  { initials: 'DR', name: 'Dita Rahayu', role: 'Pelanggan Setia, Jakarta', quote: 'Ikan gurame bakarnya juara banget! Bumbunya meresap, dagingnya moist tidak kering. Sudah pesan lebih dari 10 kali dan tidak pernah kecewa.' },
  { initials: 'BW', name: 'Budi Wicaksono', role: 'Food Blogger, Depok', quote: 'Sebagai food blogger yang sudah coba ratusan tempat makan, Ikan Bakar Fresh masuk top 5 saya. Kesegaran ikannya terasa banget di setiap gigitan.' },
  { initials: 'SR', name: 'Siti Rohani', role: 'Ibu Rumah Tangga, Bekasi', quote: 'Pesan untuk arisan keluarga, semua pada nambah. Admin Aquelino juga responsif banget, pesanan datang tepat waktu dan masih panas.' },
  { initials: 'FH', name: 'Fajar Hidayat', role: 'Karyawan Swasta, Tangerang', quote: 'Paket hemat keluarganya worth it banget! Porsinya besar, cukup untuk 4 orang. Harga terjangkau tapi kualitas tidak murahan.' },
  { initials: 'NA', name: 'Nadia Amelia', role: 'Mahasiswi, Bogor', quote: 'Ikan nilanya yang paling saya suka! Bumbu kuningnya khas banget, mengingatkan masakan nenek. Langsung jadi favorit rutin tiap minggu.' },
  { initials: 'RK', name: 'Rudi Kurniawan', role: 'Pengusaha, Jakarta Selatan', quote: 'Sering order untuk makan siang kantor. Teman-teman selalu happy kalau saya yang bawa Ikan Bakar Fresh. Sudah jadi langganan tetap!' },
]

function Testimonials() {
  return (
    <section id="testimoni" className="bg-coal py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-fire-mid text-xs font-bold uppercase tracking-widest">Apa Kata Mereka</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mt-3 leading-tight">
            Ribuan Lidah Sudah Membuktikan
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="p-6 rounded-2xl bg-coal-mid border border-coal-light hover:border-fire-dark/60 transition-colors duration-300 flex flex-col">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <StarIcon key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-ash text-sm leading-relaxed mb-5 italic flex-1">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-fire-dark flex items-center justify-center text-fire-bright text-xs font-bold flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-cream text-sm">{t.name}</div>
                  <div className="text-xs text-ash">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Promo + Countdown ────────────────────────────────────────────────────────
function useCountdown(target: number) {
  const calc = () => {
    const d = target - Date.now()
    if (d <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    return {
      days: Math.floor(d / 86400000),
      hours: Math.floor((d % 86400000) / 3600000),
      minutes: Math.floor((d % 3600000) / 60000),
      seconds: Math.floor((d % 60000) / 1000),
    }
  }
  const [t, setT] = useState(calc)
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000)
    return () => clearInterval(id)
  })
  return t
}

const offers = [
  { title: 'Diskon 25% Semua Menu', desc: 'Berlaku untuk semua menu ikan bakar. Minimal order 2 porsi.', icon: '🔥' },
  { title: 'Free Nasi & Lalapan', desc: 'Setiap order 2 porsi, gratis 2 nasi putih + lalapan segar.', icon: '🍚' },
  { title: 'Gratis Ongkir Radius 3km', desc: 'Antar gratis tanpa minimal order untuk radius 3km dari outlet.', icon: '🚚' },
]

function Promo() {
  const endTs = Date.now() + (5 * 86400 + 14 * 3600 + 27 * 60) * 1000
  const { days, hours, minutes, seconds } = useCountdown(endTs)
  const pad = (n: number) => String(n).padStart(2, '0')
  const units = [
    { label: 'Hari', val: pad(days) },
    { label: 'Jam', val: pad(hours) },
    { label: 'Menit', val: pad(minutes) },
    { label: 'Detik', val: pad(seconds) },
  ]
  return (
    <section id="promo" className="bg-coal-mid py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-fire-dark/15 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(234,88,12,0.3), transparent)' }} />
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-fire-mid text-xs font-bold uppercase tracking-widest">Promo Spesial</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mt-3 mb-4 leading-tight">
            Lebih Hemat, Lebih Kenyang!
          </h2>
          <p className="text-ash max-w-md mx-auto leading-relaxed">
            Cuma minggu ini — jangan sampai kelewat momen makan enak dengan harga miring.
          </p>
        </div>
        {/* Countdown */}
        <div className="flex justify-center gap-3 md:gap-4 mb-12">
          {units.map(({ label, val }) => (
            <div key={label} className="text-center">
              <div className="w-16 md:w-20 h-16 md:h-20 rounded-2xl bg-coal border border-fire-mid/30 flex items-center justify-center font-display text-3xl md:text-4xl font-black text-fire-bright tabular-nums" style={{ fontVariantNumeric: 'tabular-nums' }}>
                {val}
              </div>
              <div className="text-xs text-ash mt-2 font-medium uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {offers.map((o) => (
            <div key={o.title} className="flex flex-col items-center text-center p-6 rounded-2xl bg-coal border border-coal-light hover:border-fire-mid/40 transition-colors">
              <span className="text-3xl mb-3">{o.icon}</span>
              <h3 className="font-display font-bold text-cream mb-1.5">{o.title}</h3>
              <p className="text-ash text-sm">{o.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a href={WA_LINK('Halo Admin Aquelino, saya mau klaim promo spesial Ikan Bakar Fresh!')} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-fire-mid hover:bg-fire-bright text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-fire text-lg">
            <FlameIcon className="w-5 h-5" />
            Klaim Promo Sekarang
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Location & Hours ─────────────────────────────────────────────────────────
function LocationHours() {
  const schedule = [
    { day: 'Senin – Jumat', hours: '10.00 – 21.00 WIB' },
    { day: 'Sabtu', hours: '09.00 – 22.00 WIB' },
    { day: 'Minggu & Libur', hours: '09.00 – 21.00 WIB' },
  ]
  return (
    <section className="bg-coal py-20 px-6 relative">
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(234,88,12,0.3), transparent)' }} />
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-fire-mid text-xs font-bold uppercase tracking-widest">Temukan Kami</span>
          <h2 className="font-display text-4xl font-bold text-cream mt-3 leading-tight">Lokasi & Jam Buka</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-7 rounded-2xl bg-coal-mid border border-coal-light">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-fire-dark/40 flex items-center justify-center text-fire-bright flex-shrink-0">
                <LocationIcon className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl text-cream">Lokasi Kami</h3>
            </div>
            <p className="text-ash leading-relaxed mb-4">
              Jl. Rempah Bakar No. 12<br />
              Komplek Kuliner Nusantara<br />
              Jakarta Selatan, DKI Jakarta 12560
            </p>
            <p className="text-ash text-sm mb-5">Tersedia parkir luas. Bisa makan di tempat atau bawa pulang.</p>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-fire-bright hover:text-fire-mid text-sm font-semibold transition-colors">
              <LocationIcon className="w-4 h-4" />
              Buka di Google Maps
            </a>
          </div>
          <div className="p-7 rounded-2xl bg-coal-mid border border-coal-light">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-fire-dark/40 flex items-center justify-center text-fire-bright flex-shrink-0">
                <ClockIcon className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl text-cream">Jam Buka</h3>
            </div>
            <div className="space-y-1 mb-5">
              {schedule.map(({ day, hours }) => (
                <div key={day} className="flex justify-between items-center py-2.5 border-b border-coal-light last:border-0">
                  <span className="text-ash text-sm">{day}</span>
                  <span className="text-cream text-sm font-semibold">{hours}</span>
                </div>
              ))}
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-900/30 border border-green-700/30 rounded-full text-green-400 text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" style={{ animation: 'pulse-slow 2s infinite' }} />
              Buka Sekarang
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Order Form ───────────────────────────────────────────────────────────────
function OrderForm() {
  const [form, setForm] = useState({ name: '', phone: '', address: '', menu: '', qty: '1', level: 'Original', notes: '' })
  const [done, setDone] = useState(false)
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [k]: e.target.value }))

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = [
      `Halo Admin ${WA_ADMIN}!`,
      ``,
      `Saya mau pesan Ikan Bakar Fresh:`,
      ``,
      `👤 Nama: ${form.name}`,
      `📱 HP: ${form.phone}`,
      `📍 Alamat: ${form.address}`,
      `🐟 Menu: ${form.menu}`,
      `🔢 Porsi: ${form.qty}`,
      `🌶️ Kepedasan: ${form.level}`,
      `📝 Catatan: ${form.notes || '-'}`,
      ``,
      `Mohon konfirmasi pesanan saya. Terima kasih!`,
    ].join('\n')
    window.open(WA_LINK(msg), '_blank')
    setDone(true)
  }

  const inputCls = "w-full px-4 py-3 rounded-xl bg-coal-mid border border-coal-light text-cream placeholder-ash/40 text-sm focus:outline-none focus:border-fire-mid transition-colors"

  return (
    <section id="pesan" className="bg-coal-mid py-20 px-6 relative">
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(234,88,12,0.3), transparent)' }} />
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-fire-mid text-xs font-bold uppercase tracking-widest">Order Sekarang</span>
          <h2 className="font-display text-4xl font-bold text-cream mt-3 mb-3 leading-tight">Form Pemesanan</h2>
          <p className="text-ash text-sm">Isi form, lanjut konfirmasi via WhatsApp Admin {WA_ADMIN}.</p>
        </div>
        {done ? (
          <div className="text-center p-10 rounded-2xl bg-coal border border-fire-mid/30">
            <div className="w-16 h-16 rounded-full bg-fire-dark/40 flex items-center justify-center mx-auto mb-4">
              <FlameIcon className="w-8 h-8 text-fire-bright" />
            </div>
            <h3 className="font-display text-2xl font-bold text-cream mb-2">Pesanan Dikirim!</h3>
            <p className="text-ash mb-5 text-sm">WhatsApp sudah terbuka. Lanjutkan konfirmasi dengan Admin {WA_ADMIN}.</p>
            <button onClick={() => setDone(false)} className="text-fire-bright hover:text-fire-mid text-sm font-semibold transition-colors underline underline-offset-2">
              Buat pesanan baru
            </button>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-4 p-7 rounded-2xl bg-coal border border-coal-light">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-ash text-xs font-bold uppercase tracking-wider mb-1.5">Nama Lengkap *</label>
                <input required value={form.name} onChange={set('name')} placeholder="Budi Santoso" className={inputCls} />
              </div>
              <div>
                <label className="block text-ash text-xs font-bold uppercase tracking-wider mb-1.5">No. HP *</label>
                <input required value={form.phone} onChange={set('phone')} placeholder="0812-xxxx-xxxx" className={inputCls} />
              </div>
            </div>
            <div>
              <label className="block text-ash text-xs font-bold uppercase tracking-wider mb-1.5">Alamat Pengiriman *</label>
              <input required value={form.address} onChange={set('address')} placeholder="Jl. Contoh No. 1, Kel., Kec., Kota" className={inputCls} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-1">
                <label className="block text-ash text-xs font-bold uppercase tracking-wider mb-1.5">Menu *</label>
                <select required value={form.menu} onChange={set('menu')} className={inputCls}>
                  <option value="">Pilih menu...</option>
                  {menuItems.map(m => <option key={m.name} value={m.name}>{m.name}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-ash text-xs font-bold uppercase tracking-wider mb-1.5">Porsi *</label>
                <input type="number" min="1" max="50" required value={form.qty} onChange={set('qty')} className={inputCls} />
              </div>
              <div>
                <label className="block text-ash text-xs font-bold uppercase tracking-wider mb-1.5">Kepedasan</label>
                <select value={form.level} onChange={set('level')} className={inputCls}>
                  <option>Original</option>
                  <option>Pedas Sedang</option>
                  <option>Pedas Maksimal</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-ash text-xs font-bold uppercase tracking-wider mb-1.5">Catatan Tambahan</label>
              <textarea value={form.notes} onChange={set('notes')} placeholder="Alergi, request khusus..." rows={3} className={`${inputCls} resize-none`} />
            </div>
            <button type="submit"
              className="w-full flex items-center justify-center gap-3 py-4 bg-fire-mid hover:bg-fire-bright text-white font-bold rounded-xl transition-all duration-200 hover:scale-[1.01] shadow-fire text-base">
              <WAIcon className="w-5 h-5" />
              Lanjut Pesan via WhatsApp
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const faqs = [
  { q: 'Berapa lama waktu tunggu setelah pesan?', a: 'Ikan dibakar fresh setelah pesanan masuk. Estimasi waktu 15-25 menit tergantung antrian. Admin akan konfirmasi waktu pasti saat Anda order via WhatsApp.' },
  { q: 'Apakah bisa pesan untuk acara/gathering?', a: 'Bisa! Kami melayani pesanan dalam jumlah besar untuk acara keluarga, gathering kantor, hingga arisan. Hubungi admin untuk harga special catering.' },
  { q: 'Area pengiriman sampai mana?', a: 'Kami melayani pengiriman radius 0-3km gratis ongkir. Radius 3-7km dikenakan biaya pengiriman sesuai jarak. Di luar area bisa diskusi dengan admin.' },
  { q: 'Apakah bisa request tingkat kepedasan?', a: 'Tentu! Kami menyediakan 3 level kepedasan: Original (tidak pedas), Pedas Sedang, dan Pedas Maksimal. Beritahu preferensi Anda saat order.' },
  { q: 'Bagaimana cara pembayaran?', a: 'Kami menerima transfer bank (BCA, Mandiri, BRI), GoPay, OVO, QRIS, dan cash on delivery untuk area tertentu. Konfirmasi via WhatsApp setelah transfer.' },
  { q: 'Apakah ada jaminan kalau ikan tidak segar?', a: '100% jaminan uang kembali jika ikan tidak segar. Kami berkomitmen penuh terhadap kualitas. Belum pernah ada komplain soal kesegaran dalam 3 tahun berjualan.' },
]

function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section id="faq" className="bg-coal py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-fire-mid text-xs font-bold uppercase tracking-widest">FAQ</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mt-3 leading-tight">
            Pertanyaan Sering Ditanya
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className={`rounded-xl border transition-all duration-200 overflow-hidden ${open === i ? 'border-fire-mid/50 bg-coal-mid' : 'border-coal-light bg-coal-mid hover:border-fire-dark/60'}`}>
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left gap-3">
                <span className={`font-semibold text-sm md:text-base transition-colors ${open === i ? 'text-fire-bright' : 'text-cream'}`}>{f.q}</span>
                <ChevronIcon className={`w-4 h-4 flex-shrink-0 text-ash transition-transform duration-300 ${open === i ? 'rotate-180 text-fire-bright' : ''}`} />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-ash text-sm leading-relaxed">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Final CTA ────────────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section className="bg-coal-mid py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(234,88,12,0.3), transparent)' }} />
      <div className="absolute inset-0 bg-gradient-to-br from-fire-dark/20 via-transparent to-transparent pointer-events-none" />
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="ember" style={{ '--delay': `${(i * 0.5).toFixed(1)}s`, '--x': `${5 + i * 9.5}%` } as React.CSSProperties} />
      ))}
      <div className="relative max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-fire-mid/40 bg-fire-dark/20 text-fire-bright text-xs font-bold tracking-widest uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-fire-bright" style={{ animation: 'pulse-slow 1.5s infinite' }} />
          Stok Hari Ini Terbatas
        </div>
        <h2 className="font-display text-4xl md:text-6xl font-black text-cream leading-[1.05] mb-6">
          Jangan Tunggu Lapar —<br />
          <span style={{ background: 'linear-gradient(135deg, #ea580c 0%, #fb923c 60%, #fbbf24 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Pesan Sekarang
          </span>
          <br />Sebelum Habis!
        </h2>
        <p className="text-ash text-lg mb-10 leading-relaxed">
          Tinggal satu klik. Admin {WA_ADMIN} siap melayani pesanan Anda.
        </p>
        <a href={WA_LINK(`Halo Admin ${WA_ADMIN}! Saya mau pesan Ikan Bakar Fresh sekarang. Mohon info menu dan estimasi waktu ya!`)} target="_blank" rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 px-8 py-5 bg-fire-mid hover:bg-fire-bright text-white font-bold rounded-2xl transition-all duration-300 hover:scale-[1.04] shadow-fire text-base md:text-lg">
          <WAIcon className="w-6 h-6" />
          Order via WhatsApp — Admin {WA_ADMIN} 0831-3493-1256
        </a>
        <p className="mt-8 text-ash text-sm">
          Respon cepat &nbsp;&middot;&nbsp; Dibakar fresh setelah pesanan masuk &nbsp;&middot;&nbsp; Diantar selagi panas
        </p>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-coal border-t border-coal-light py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <FlameIcon className="w-6 h-6 text-fire-bright" />
          <span className="font-display font-bold text-cream">Ikan Bakar Fresh</span>
        </div>
        <div className="text-ash text-sm text-center">
          Admin {WA_ADMIN}&nbsp;&middot;&nbsp;WhatsApp 0831-3493-1256
        </div>
        <div className="text-ash text-sm">
          &copy; {new Date().getFullYear()} Ikan Bakar Fresh. Dibakar dengan cinta.
        </div>
      </div>
    </footer>
  )
}

// ─── Floating WA ──────────────────────────────────────────────────────────────
function FloatingWA() {
  return (
    <a href={WA_LINK(`Halo Admin ${WA_ADMIN}, saya mau tanya tentang Ikan Bakar Fresh!`)} target="_blank" rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
      style={{ background: '#25d366', boxShadow: '0 4px 20px rgba(37,211,102,0.4)' }}
      title="Chat WhatsApp">
      <WAIcon className="w-7 h-7 text-white" />
    </a>
  )
}

// ─── Route ────────────────────────────────────────────────────────────────────
export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Ikan Bakar Fresh — Pesan Sekarang, Dibakar Saat Itu Juga' },
      { name: 'description', content: 'Ikan bakar segar dengan bumbu rempah khas, dibakar saat dipesan. Porsi puas, harga sahabat. Pesan via WhatsApp Admin Aquelino sekarang!' },
      { property: 'og:title', content: 'Ikan Bakar Fresh — Aroma & Rasa Yang Bikin Nagih' },
      { property: 'og:description', content: 'Ikan segar pilihan, bumbu rempah meresap, dibakar fresh on order. Pesan via WhatsApp.' },
      { property: 'og:type', content: 'website' },
    ],
  }),
  component: Index,
})

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Menu />
      <Gallery />
      <Testimonials />
      <Promo />
      <LocationHours />
      <OrderForm />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingWA />
    </div>
  )
}
