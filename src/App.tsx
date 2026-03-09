import React, { useState, createContext, useContext } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, Instagram, Twitter, Linkedin, CheckCircle2, Globe, Sparkles, Zap, MousePointer2, Menu, X, Layers, ExternalLink, Mail } from 'lucide-react';
import ChatBot from './components/ChatBot';

// Translations
const translations = {
  en: {
    nav: {
      about: "About",
      services: "Services",
      works: "Works",
      book: "Contact"
    },
    hero: {
      subtitle: "AI Visual Content Production",
      title: "Premium visuals for",
      titleAccent: "brands",
      titleEnd: "that inspire",
      desc: "Shatter the limits of traditional photography. We engineer editorial-grade visual systems that scale instantly—empowering you to test faster, convert higher, and build unshakeable brand authority.",
      emailPlaceholder: "Enter your email",
      cta: "Let's Talk"
    },
    about: {
      label: "About Me",
      bio: "I am Benjamin Vertnik, a visual architect redefining the boundaries of digital storytelling. By fusing high-end artistic direction with cutting-edge generative AI, I grant your brand a distinct competitive edge: editorial-grade aesthetics delivered at the speed of the internet.",
      title: "I am a next-generation AI creator bridging visionary creativity and technical precision.",
      desc1: "With over a decade of experience in digital media and a deep understanding of brand psychology, I empower forward-thinking companies to transcend the limitations of traditional production. My approach leverages advanced generative protocols to create scalable, high-impact visual assets that drive engagement and conversion.",
      desc2: "I specialize in transforming complex, high-cost production workflows into agile digital pipelines. This allows ambitious brands to maintain a high-frequency market presence, test creative concepts rapidly, and scale their visual identity without the logistical overhead of physical shoots.",
      advantageTitle: "My Advantage",
      adv1_title: "Strategic Optimization",
      adv1_desc: "I reduce variable production costs—such as locations, logistics, and personnel—by up to 80%, reallocating budget to strategy and distribution.",
      adv2_title: "Rapid Market Entry",
      adv2_desc: "I eliminate the weeks of waiting associated with traditional photography, moving from concept to 4K-ready assets in under 48 hours.",
      adv3_title: "Architectural Brand Consistency",
      adv3_desc: "My process ensures absolute visual coherence across all communication channels, regardless of environmental complexity or campaign scale.",
      adv4_title: "Limitless Scalability",
      adv4_desc: "I provide high-resolution digital assets that are unconstrained by physical reality, turning your brand's imagination into a financial and competitive asset.",
      quote: "I don't just create images; I build the future of brand identity through strategy-led AI synthesis.",
      footer: "GLOBAL OPERATIONS · STRATEGICALLY HEADQUARTERED IN SLOVENIA."
    },
    stats: {
      desc: "Leveraging cutting-edge AI tools to deliver results that were previously impossible at this speed and budget.",
      consistency: "Visual Consistency",
      speed: "Production Speed",
      scenery: "Global Scenery",
      focus: "Conversion Focus",
      val_consistency: "100%",
      val_speed: "10X",
      val_scenery: "∞",
      val_focus: "High"
    },
    services: {
      title: "Smart visual content solutions for you",
      s1_title: "AI Content Generation",
      s1_desc: "Create high-quality, on-brand content at scale. From social media posts to website visuals, our AI engines generate assets that resonate with your audience.",
      s1_f1: "Multi-format Output",
      s1_f2: "Brand Voice Tuning",
      s1_f3: "Rapid Production",
      s1_benefits: ["Reduce production costs by 70%", "Unlimited creative variations", "Brand-safe content filtering"],
      s1_cta: "Start Generating",
      s2_title: "Visual Consistency Engine",
      s2_desc: "Maintain a unified brand aesthetic across all channels. Our proprietary engine ensures every pixel aligns with your brand guidelines.",
      s2_f1: "Style Guardrails",
      s2_f2: "Color Matching",
      s2_f3: "Theme Continuity",
      s2_benefits: ["100% on-brand guarantee", "Automated quality control", "Cross-platform uniformity"],
      s2_cta: "Ensure Consistency",
      s3_title: "A/B Testing at Scale",
      s3_desc: "Test hundreds of creative variations simultaneously to identify high-performing assets and optimize your marketing spend.",
      s3_f1: "Data-Driven Insights",
      s3_f2: "Automated Iteration",
      s3_f3: "Performance Analytics",
      s3_benefits: ["Increase CTR by up to 40%", "Real-time performance tracking", "Automated winner selection"],
      s3_cta: "Optimize Now",
      s4_title: "AI Commercials",
      s4_desc: "Produce broadcast-quality commercials at a fraction of the cost and time. AI-driven video generation for TV and digital platforms.",
      s4_f1: "Script to Video",
      s4_f2: "Realistic Avatars",
      s4_f3: "Dynamic Editing",
      s4_benefits: ["TV-ready in 48 hours", "Multilingual adaptation", "Fraction of traditional cost"],
      s4_cta: "Create Video",
      s5_title: "Web & AI-powered Experiences",
      s5_desc: "Build immersive, interactive web experiences powered by AI. Engage users with personalized content and intelligent interfaces.",
      s5_f1: "Interactive UI",
      s5_f2: "Personalization",
      s5_f3: "Smart Integrations",
      s5_benefits: ["Higher user engagement", "Personalized customer journeys", "Next-gen web standards"],
      s5_cta: "Build Experience",
      learnMore: "Learn more"
    },
    portfolio: {
      title: "Our Works",
      desc: "Here are some of our latest AI-generated premium campaigns.",
      cta: "View All Works"
    },
    testimonials: {
      desc: "Hear from the brands that scaled their visuals with us.",
      quote: "\"Few creators can match Benjamin's invigorating and insightful style. What makes him stand out for hire is his exclusive focus on premium lifestyle aesthetics and rapid A/B testing delivery.\""
    },
    footer: {
      title: "Let's grow together",
      desc: "Stop competing on price. Start winning on perception. We engineer editorial-grade visual systems that position your brand as the undisputed authority.",
      emailPlaceholder: "Enter your email",
      cta: "Let's Talk",
      quickLinks: "Quick Links",
      home: "Home",
      about: "About Us",
      works: "Our Works",
      services: "Services",
      info: "Info Pages",
      faq: "FAQ",
      pricing: "Pricing",
      contact: "Contact",
      socials: "Socials",
      rights: "All rights reserved."
    },
    transformation: {
      title: "From Smartphone to Studio Quality",
      desc: "Don't have professional assets? No problem. We transform basic smartphone photos into high-end, editorial visuals that align perfectly with your brand identity.",
      label_phone: "Smartphone Shot",
      label_ai: "AI Visual"
    }
  },
  sl: {
    nav: {
      about: "O meni",
      services: "Storitve",
      works: "Dela",
      book: "Kontakt"
    },
    hero: {
      subtitle: "AI Vizualna Produkcija",
      title: "Premium vizualije za",
      titleAccent: "znamke",
      titleEnd: ", ki navdihujejo",
      desc: "Presezite omejitve tradicionalne fotografije. Ustvarjamo uredniško dovršene vizualne sisteme, ki se skalirajo v trenutku – za hitrejše testiranje, višje konverzije in gradnjo neomajne avtoritete znamke.",
      emailPlaceholder: "Vpišite vaš email",
      cta: "Kontakt"
    },
    about: {
      label: "O meni",
      bio: "Sem Benjamin Vertnik, vizualni arhitekt, ki na novo opredeljuje meje digitalnega pripovedovanja. S združevanjem vrhunskega umetniškega vodenja in najnaprednejše generativne umetne inteligence vaši znamki zagotavljam izrazito konkurenčno prednost: estetiko uredniške kakovosti, dostavljeno s hitrostjo interneta.",
      title: "Sem ustvarjalec naslednje generacije, ki združuje vizionarsko ustvarjalnost in tehnično natančnost.",
      desc1: "Z več kot desetletjem izkušenj v digitalnih medijih in globokim razumevanjem psihologije blagovnih znamk opolnomočim napredna podjetja, da presežejo omejitve tradicionalne produkcije. Moj pristop uporablja napredne generativne protokole za ustvarjanje skalabilnih vizualnih sredstev z velikim učinkom, ki spodbujajo vpletenost in konverzijo.",
      desc2: "Specializiran sem za preoblikovanje kompleksnih, dragih produkcijskih delovnih tokov v agilne digitalne procese. To ambicioznim znamkam omogoča ohranjanje visoke frekvence prisotnosti na trgu, hitro testiranje kreativnih konceptov in skaliranje vizualne identitete brez logističnih bremen fizičnih snemanj.",
      advantageTitle: "Moja prednost",
      adv1_title: "Strateška optimizacija",
      adv1_desc: "Zmanjšujem variabilne stroške produkcije – kot so lokacije, logistika in osebje – za do 80 %, s čimer preusmerjam proračun v strategijo in distribucijo.",
      adv2_title: "Hiter vstop na trg",
      adv2_desc: "Odpravljam tedne čakanja, povezane s tradicionalno fotografijo, in preidem od koncepta do sredstev, pripravljenih za 4K, v manj kot 48 urah.",
      adv3_title: "Arhitekturna konsistenca znamke",
      adv3_desc: "Moj proces zagotavlja absolutno vizualno skladnost na vseh komunikacijskih kanalih, ne glede na okoljsko kompleksnost ali obseg kampanje.",
      adv4_title: "Neomejena skalabilnost",
      adv4_desc: "Zagotavljam digitalna sredstva visoke ločljivosti, ki niso omejena s fizično realnostjo, in spreminjam domišljijo vaše znamke v finančno in konkurenčno prednost.",
      quote: "Ne ustvarjam le slik; gradim prihodnost identitete blagovnih znamk s strateško vodenim AI sintezo.",
      footer: "GLOBALNE OPERACIJE · STRATEŠKI SEDEŽ V SLOVENIJI."
    },
    stats: {
      desc: "Uporaba najsodobnejših orodij umetne inteligence za doseganje rezultatov, ki so bili prej nemogoči pri tej hitrosti in proračunu.",
      consistency: "Vizualna konsistenca",
      speed: "Hitrost produkcije",
      scenery: "Globalna scenografija",
      focus: "Fokus na konverzijo",
      val_consistency: "100%",
      val_speed: "10X",
      val_scenery: "∞",
      val_focus: "Visok"
    },
    services: {
      title: "Pametne rešitve vizualnih vsebin za vas",
      s1_title: "Generiranje AI vsebin",
      s1_desc: "Ustvarite visokokakovostne vsebine v skladu z blagovno znamko na veliki skali. Od objav na družbenih omrežjih do vizualij za spletne strani.",
      s1_f1: "Večformatni izhod",
      s1_f2: "Prilagoditev glasu znamke",
      s1_f3: "Hitra produkcija",
      s1_benefits: ["Zmanjšajte stroške produkcije za 70%", "Neomejene kreativne variacije", "Filtriranje varnih vsebin"],
      s1_cta: "Začni generirati",
      s2_title: "Motor vizualne konsistence",
      s2_desc: "Ohranite enotno estetiko blagovne znamke na vseh kanalih. Naš lastniški motor zagotavlja, da se vsak piksel ujema z vašimi smernicami.",
      s2_f1: "Slogovne varovalke",
      s2_f2: "Barvno ujemanje",
      s2_f3: "Tematska kontinuiteta",
      s2_benefits: ["100% garancija skladnosti", "Avtomatiziran nadzor kakovosti", "Enotnost med platformami"],
      s2_cta: "Zagotovi konsistenco",
      s3_title: "A/B testiranje na skali",
      s3_desc: "Testirajte na stotine kreativnih variacij hkrati, da prepoznate najuspešnejša sredstva in optimizirate svojo marketinško porabo.",
      s3_f1: "Podatkovno vodeni vpogledi",
      s3_f2: "Avtomatizirana iteracija",
      s3_f3: "Analitika uspešnosti",
      s3_benefits: ["Povečajte CTR do 40%", "Sledenje uspešnosti v realnem času", "Avtomatiziran izbor zmagovalca"],
      s3_cta: "Optimiziraj zdaj",
      s4_title: "AI reklame",
      s4_desc: "Producirajte reklame televizijske kakovosti za delček stroškov in časa. AI-generiran video za TV in digitalne platforme.",
      s4_f1: "Od scenarija do videa",
      s4_f2: "Realistični avatarji",
      s4_f3: "Dinamično urejanje",
      s4_benefits: ["TV-pripravljeno v 48 urah", "Večjezična adaptacija", "Delček tradicionalnih stroškov"],
      s4_cta: "Ustvari video",
      s5_title: "Spletne in AI izkušnje",
      s5_desc: "Gradite poglobljene, interaktivne spletne izkušnje, ki jih poganja AI. Angažirajte uporabnike s personalizirano vsebino.",
      s5_f1: "Interaktivni UI",
      s5_f2: "Personalizacija",
      s5_f3: "Pametne integracije",
      s5_benefits: ["Večja vpletenost uporabnikov", "Personalizirane poti kupcev", "Standardi spleta naslednje generacije"],
      s5_cta: "Zgradi izkušnjo",
      learnMore: "Več o tem"
    },
    portfolio: {
      title: "Naša dela",
      desc: "Tukaj je nekaj naših najnovejših AI-generiranih premium kampanj.",
      cta: "Poglej vsa dela"
    },
    testimonials: {
      desc: "Mnenja znamk, ki so z nami skalirale svoje vizualije.",
      quote: "\"Le redki ustvarjalci se lahko kosajo z Benjaminovim poživljajočim in pronicljivim slogom. Kar ga dela izjemnega za najem, je njegov ekskluzivni fokus na premium lifestyle estetiko in hitro dostavo za A/B testiranje.\""
    },
    footer: {
      title: "Rastimo skupaj",
      desc: "Ne tekmujte s ceno. Zmagujte s percepcijo. Ustvarjamo vizualne sisteme uredniške kakovosti, ki vašo znamko pozicionirajo kot nesporno avtoriteto.",
      emailPlaceholder: "Vpišite vaš email",
      cta: "Kontakt",
      quickLinks: "Hitre povezave",
      home: "Domov",
      about: "O nas",
      works: "Naša dela",
      services: "Storitve",
      info: "Informacije",
      faq: "FAQ",
      pricing: "Cenik",
      contact: "Kontakt",
      socials: "Družbena omrežja",
      rights: "Vse pravice pridržane."
    },
    transformation: {
      title: "Od telefona do studijske kakovosti",
      desc: "Nimate profesionalnih materialov? Ni problema. Osnovne fotografije s telefona preoblikujemo v vrhunske, uredniške vizualije, ki se popolnoma ujemajo z identiteto vaše znamke.",
      label_phone: "Posnetek s telefonom",
      label_ai: "AI Vizualija"
    }
  }
};

type Language = 'en' | 'sl';
const LanguageContext = createContext<{ lang: Language; toggleLang: () => void; t: typeof translations['en'] } | null>(null);

function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
}

function Navbar({ isMenuOpen, toggleMenu }: { isMenuOpen: boolean; toggleMenu: () => void }) {
  const { t, lang, toggleLang } = useLanguage();
  
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100/50 transition-all duration-300">
      <nav className="flex items-center justify-between px-6 py-6 md:px-12 max-w-7xl mx-auto relative">
        <div className="font-serif text-xl font-bold tracking-tight">Benjamin Vertnik</div>
        
        {/* Center Logo (Replaces Desktop Nav) */}
        <div className="hidden md:flex flex-col items-center leading-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mt-1">
          <div className="text-3xl font-bold tracking-tight mb-1">Webino</div>
          <div className="font-script text-3xl -mt-2 mb-2">AI Creative</div>
          <div className="w-full h-px bg-black mb-1"></div>
          <div className="text-[10px] tracking-[0.2em] uppercase font-bold">AI SOLUTIONS FOR BRANDS</div>
        </div>

        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleLang}
            className="flex items-center gap-1 text-sm font-medium hover:text-purple-600 transition-colors px-2 py-1 rounded-md hover:bg-gray-100"
          >
            <Globe className="w-4 h-4" />
            <span className="flex items-center gap-0.5">
              <span className={lang === 'sl' ? 'text-black font-bold' : 'text-gray-400'}>sl</span>
              <span className="text-gray-300">/</span>
              <span className={lang === 'en' ? 'text-black font-bold' : 'text-gray-400'}>en</span>
            </span>
          </button>
          
          <a 
            href="https://www.instagram.com/webino_ai_creative/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center space-x-2 text-sm font-medium hover:text-purple-600 transition-colors"
          >
            <Instagram className="w-4 h-4" />
            <span>Instagram</span>
          </a>

          <a 
            href="mailto:vertnikbenjamin@gmail.com"
            className="hidden md:flex items-center space-x-2 text-sm font-medium hover:text-purple-600 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Contact Me</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  const { t } = useLanguage();
  return (
    <section className="px-6 md:px-12 pt-12 pb-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-sm font-medium text-purple-600 mb-4 uppercase tracking-wider">{t.hero.subtitle}</p>
          <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] tracking-tight">
            {t.hero.title} <span className="text-purple-600 italic">{t.hero.titleAccent}</span> {t.hero.titleEnd}
          </h1>
        </div>
        <div className="lg:pt-12">
          <p className="text-lg text-gray-600 mb-8 max-w-md leading-relaxed">
            {t.hero.desc}
          </p>
        </div>
      </div>
    </section>
  );
}

function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
        {/* Image Column - Sticky on Desktop */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-5 hidden lg:block sticky top-32"
        >
          <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-200 shadow-xl">
             <img 
               src="https://assets.cdn.filesafe.space/LmRju12PxUO6jLCYYWXB/media/699b19684c8da29e148895a4.webp" 
               alt="Benjamin Vertnik Portrait" 
               className="w-full h-full object-cover"
               referrerPolicy="no-referrer"
             />
          </div>
        </motion.div>

        {/* Content Column */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
            {/* Mobile Image (visible only on small screens) */}
            <div className="lg:hidden aspect-[4/5] rounded-2xl overflow-hidden bg-gray-200 mb-8 shadow-md">
                 <img 
                   src="https://assets.cdn.filesafe.space/LmRju12PxUO6jLCYYWXB/media/699b19684c8da29e148895a4.webp" 
                   alt="Benjamin Vertnik Portrait" 
                   className="w-full h-full object-cover"
                   referrerPolicy="no-referrer"
                 />
            </div>

            <p id="biography" className="text-xl font-medium text-purple-900 mb-6 italic leading-relaxed scroll-mt-32">
              {t.about.bio}
            </p>
            <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-8">
              {t.about.title}
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-12">
              <p>{t.about.desc1}</p>
              <p>{t.about.desc2}</p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-12">
              <h3 className="text-2xl font-serif mb-8">{t.about.advantageTitle}</h3>
              <ul className="space-y-6">
                <li className="flex gap-3">
                  <span className="text-purple-600 font-bold text-xl">•</span>
                  <p><span className="font-bold text-gray-900">{t.about.adv1_title}:</span> <span className="text-gray-700">{t.about.adv1_desc}</span></p>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-600 font-bold text-xl">•</span>
                  <p><span className="font-bold text-gray-900">{t.about.adv2_title}:</span> <span className="text-gray-700">{t.about.adv2_desc}</span></p>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-600 font-bold text-xl">•</span>
                  <p><span className="font-bold text-gray-900">{t.about.adv3_title}:</span> <span className="text-gray-700">{t.about.adv3_desc}</span></p>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-600 font-bold text-xl">•</span>
                  <p><span className="font-bold text-gray-900">{t.about.adv4_title}:</span> <span className="text-gray-700">{t.about.adv4_desc}</span></p>
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-200 pl-6 py-2 mb-12">
              <p className="text-xl md:text-2xl font-serif italic text-gray-800">
                "{t.about.quote}"
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-purple-600 uppercase">
              <div className="w-2 h-2 rounded-full bg-purple-600"></div>
              {t.about.footer}
            </div>
        </motion.div>
      </div>
    </section>
  );
}

// Stats section matching the first image design
function Stats() {
  const { t } = useLanguage();
  const stats = [
    { value: t.stats.val_consistency, label: t.stats.consistency, icon: Sparkles },
    { value: t.stats.val_speed, label: t.stats.speed, icon: Zap },
    { value: t.stats.val_scenery, label: t.stats.scenery, icon: Globe },
    { value: t.stats.val_focus, label: t.stats.focus, icon: MousePointer2 },
  ];

  return (
    <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <p className="text-xl text-gray-600 leading-relaxed">
          {t.stats.desc}
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center justify-center text-center group">
            <div className="w-24 h-24 rounded-full border border-gray-200 flex items-center justify-center mb-8 group-hover:border-purple-300 transition-colors">
              <stat.icon className="w-8 h-8 text-gray-700 group-hover:text-purple-600 transition-colors" strokeWidth={1.5} />
            </div>
            <div className="text-4xl md:text-5xl font-serif mb-3">{stat.value}</div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Transformation() {
  const { t } = useLanguage();
  return (
    <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto bg-gray-50 rounded-3xl my-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-serif mb-6">{t.transformation.title}</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          {t.transformation.desc}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
        {/* Smartphone Shot */}
        <div className="flex flex-col items-center">
          <span className="font-serif italic text-xl mb-4">{t.transformation.label_phone}</span>
          <div className="aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-sm border-4 border-white bg-white rotate-[-2deg]">
            <img 
              src="https://assets.cdn.filesafe.space/LmRju12PxUO6jLCYYWXB/media/699b1b62df9bdf0733f8917e.png" 
              alt="Smartphone shot" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* AI Visual 1 */}
        <div className="flex flex-col items-center md:-translate-y-8">
          <span className="font-serif italic text-xl mb-4">{t.transformation.label_ai}</span>
          <div className="aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-xl bg-black">
            <img 
              src="https://assets.cdn.filesafe.space/LmRju12PxUO6jLCYYWXB/media/699b1b62df9bdf3d4df8917f.jpg" 
              alt="AI Visual 1" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* AI Visual 2 */}
        <div className="flex flex-col items-center">
          <span className="font-serif italic text-xl mb-4">{t.transformation.label_ai}</span>
          <div className="aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-lg bg-gray-900 rotate-[2deg]">
            <img 
              src="https://assets.cdn.filesafe.space/LmRju12PxUO6jLCYYWXB/media/699b1b62df9bdfb50ef89180.jpg" 
              alt="AI Visual 2" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const { t } = useLanguage();
  const services = [
    {
      title: t.services.s1_title,
      desc: t.services.s1_desc,
      features: [t.services.s1_f1, t.services.s1_f2, t.services.s1_f3],
      benefits: t.services.s1_benefits,
      cta: t.services.s1_cta,
      img: "https://assets.cdn.filesafe.space/LmRju12PxUO6jLCYYWXB/media/699b1d82f714ee60dbc9e587.webp"
    },
    {
      title: t.services.s2_title,
      desc: t.services.s2_desc,
      features: [t.services.s2_f1, t.services.s2_f2, t.services.s2_f3],
      benefits: t.services.s2_benefits,
      cta: t.services.s2_cta,
      img: "https://assets.cdn.filesafe.space/LmRju12PxUO6jLCYYWXB/media/699b1d824c8da2c85189555d.webp"
    },
    {
      title: t.services.s3_title,
      desc: t.services.s3_desc,
      features: [t.services.s3_f1, t.services.s3_f2, t.services.s3_f3],
      benefits: t.services.s3_benefits,
      cta: t.services.s3_cta,
      img: "https://assets.cdn.filesafe.space/LmRju12PxUO6jLCYYWXB/media/699b1d8220c035ec0df78496.webp"
    },
    {
      title: t.services.s4_title,
      desc: t.services.s4_desc,
      features: [t.services.s4_f1, t.services.s4_f2, t.services.s4_f3],
      benefits: t.services.s4_benefits,
      cta: t.services.s4_cta,
      img: "https://assets.cdn.filesafe.space/LmRju12PxUO6jLCYYWXB/media/699b1d824c8da25ee689555e.webp"
    },
    {
      title: t.services.s5_title,
      desc: t.services.s5_desc,
      features: [t.services.s5_f1, t.services.s5_f2, t.services.s5_f3],
      benefits: t.services.s5_benefits,
      cta: t.services.s5_cta,
      img: "https://assets.cdn.filesafe.space/LmRju12PxUO6jLCYYWXB/media/699b1d82f714eec731c9e588.webp"
    }
  ];

  return (
    <section id="services" className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <p className="text-sm font-medium text-purple-600 mb-4 uppercase tracking-wider">{t.nav.services}</p>
        <h2 className="text-4xl md:text-5xl font-serif mb-6">{t.services.title}</h2>
      </div>

      <div className="space-y-24">
        {services.map((service, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-gray-200 pb-24 last:border-0 last:pb-0"
          >
            <div className={`lg:col-span-5 ${i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
              <h3 className="text-2xl font-serif mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">{service.desc}</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {service.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-purple-600" />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="mb-8">
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">Key Benefits</h4>
                <ul className="space-y-2">
                  {service.benefits?.map((benefit, k) => (
                    <li key={k} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-purple-600 mt-1">•</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={`lg:col-span-7 ${i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Portfolio() {
  const { t } = useLanguage();
  const works = [
    { 
      title: "The 2.0 Brand", 
      category: "Product Campaign", 
      img: "https://assets.cdn.filesafe.space/LmRju12PxUO6jLCYYWXB/media/69a5fae5c1cc2f17f1989bcf.webp",
      link: "https://www.instagram.com/p/DVZTECYiLDr/"
    },
    { 
      title: "Dolce & Gabbana", 
      category: "Luxury Fragrance Campaign", 
      img: "https://assets.cdn.filesafe.space/LmRju12PxUO6jLCYYWXB/media/69a0c3bce545dd7ba5f5624f.webp",
      link: "https://www.instagram.com/p/DVbbCjKCNjz/"
    },
    { 
      title: "Corteiz", 
      category: "Streetwear Campaign", 
      img: "https://assets.cdn.filesafe.space/LmRju12PxUO6jLCYYWXB/media/69a8a160edd0872e1820ce75.webp",
      link: "https://www.instagram.com/p/DVgoOGUCFJ6/"
    },
  ];

  return (
    <section id="portfolio" className="px-6 md:px-12 py-24 max-w-7xl mx-auto bg-purple-50/50 rounded-3xl my-12">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif mb-4">{t.portfolio.title}</h2>
        <p className="text-gray-600">{t.portfolio.desc}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {works.map((work, i) => (
          <div key={i} className="group cursor-pointer">
            {work.link ? (
              <a href={work.link} target="_blank" rel="noopener noreferrer" className="block">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-gray-200 relative">
                  <img 
                    src={work.img} 
                    alt={work.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <ExternalLink className="text-white w-8 h-8 drop-shadow-md" />
                  </div>
                </div>
                <h4 className="text-lg font-medium group-hover:text-purple-700 transition-colors">{work.title}</h4>
                <p className="text-sm text-gray-500">{work.category}</p>
              </a>
            ) : (
              <>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-gray-200">
                  <img 
                    src={work.img} 
                    alt={work.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-lg font-medium">{work.title}</h4>
                <p className="text-sm text-gray-500">{work.category}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}



function Footer() {
  const { t } = useLanguage();
  return (
    <footer id="contact" className="bg-[#111] text-white pt-24 pb-12 px-6 md:px-12 mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto mb-24">
          <div className="bg-purple-200 text-purple-950 p-8 md:p-12 rounded-3xl">
            <h3 className="text-3xl md:text-4xl font-serif mb-4">{t.footer.title}</h3>
            <p className="mb-8 max-w-lg opacity-80 text-lg">
              {t.footer.desc}
            </p>
            <a 
              href="mailto:vertnikbenjamin@gmail.com" 
              className="text-xl md:text-3xl font-bold border-b-2 border-purple-950/20 hover:border-purple-950 transition-all inline-flex items-center gap-2 hover:gap-4"
            >
              vertnikbenjamin@gmail.com <ArrowUpRight className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="flex justify-center mb-12">
          <a 
            href="https://www.instagram.com/webino_ai_creative/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-400 transition-colors p-3 rounded-full hover:bg-white/10"
          >
            <Instagram className="w-8 h-8" />
          </a>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col items-center justify-center gap-6">
          <div className="text-sm text-gray-500">
            © 2025 Webino AI creative. {t.footer.rights}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'sl' : 'en');
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t: translations[lang] }}>
      <div className="min-h-screen font-sans selection:bg-purple-200 relative">
        <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        
        {/* Menu Overlay (Lifted from Navbar) */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-40 pt-32 px-6 md:px-12 flex flex-col items-center"
          >
            <div className="flex flex-col space-y-8 text-3xl md:text-5xl font-serif text-center">
              <a href="#biography" onClick={toggleMenu} className="hover:text-purple-600 transition-colors">{translations[lang].about.label}</a>
              <a href="#services" onClick={toggleMenu} className="hover:text-purple-600 transition-colors">{translations[lang].nav.services}</a>
              <a href="#portfolio" onClick={toggleMenu} className="hover:text-purple-600 transition-colors">{translations[lang].nav.works}</a>
              <a href="#contact" onClick={toggleMenu} className="hover:text-purple-600 transition-colors">{translations[lang].nav.book}</a>
            </div>
            
            <div className="mt-16 flex gap-6">
               <a 
                href="https://www.instagram.com/webino_ai_creative/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-lg font-medium hover:text-purple-600 transition-colors"
              >
                <Instagram className="w-6 h-6" />
                <span>Instagram</span>
              </a>

              <a 
                href="mailto:vertnikbenjamin@gmail.com"
                className="flex items-center gap-2 text-lg font-medium hover:text-purple-600 transition-colors"
              >
                <Mail className="w-6 h-6" />
                <span>Contact Me</span>
              </a>
            </div>
          </motion.div>
        )}

        <main>
          <Hero />
          <About />
          <Stats />
          <Transformation />
          <Services />
          <Portfolio />
        </main>
        <Footer />
        <ChatBot />

        {/* Floating Preview Pages Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="fixed bottom-8 left-8 z-50"
        >
          <button 
            onClick={toggleMenu}
            className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-shadow border border-gray-100"
          >
            <Layers className="w-5 h-5 text-gray-800" />
            <span className="font-serif text-gray-800 text-base">Preview Pages</span>
          </button>
        </motion.div>
      </div>
    </LanguageContext.Provider>
  );
}
