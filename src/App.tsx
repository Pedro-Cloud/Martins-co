import React from 'react';
import { motion } from 'motion/react';
import { 
  Globe, 
  Target, 
  TrendingUp, 
  ShieldCheck, 
  ChevronRight,
  MessageCircle,
  Award,
  ArrowDownRight,
  ArrowRight,
  Home,
  User,
  Briefcase,
  Mail,
  Menu,
  X
} from 'lucide-react';
import { HeroBackground } from './components/HeroBackground';
import { SpecialText } from './components/ui/special-text';

// --- Components ---

const Sidebar = () => (
  <aside className="hidden lg:block fixed left-6 top-1/2 -translate-y-1/2 z-30">
    <div className="flex flex-col gap-2 bg-white border-neutral-200 border rounded-full p-2 shadow-lg items-center">
      {[
        { icon: Home, label: 'Início', href: '#' },
        { icon: Briefcase, label: 'Projetos', href: '#services' },
        { icon: User, label: 'Sobre', href: '#about' },
        { icon: Mail, label: 'Contato', href: 'https://wa.me/5511983404617' }
      ].map((item, i) => (
        <a key={i} href={item.href} className="group grid place-items-center hover:text-black hover:bg-neutral-100 transition relative text-neutral-400 w-10 h-10 rounded-full cursor-pointer">
          <item.icon className="w-4 h-4" />
          <span className="absolute left-12 bg-neutral-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-mono">
            {item.label}
          </span>
        </a>
      ))}
    </div>
  </aside>
);

const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="relative w-full min-h-screen flex flex-col justify-between p-6 sm:p-12 z-10 overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 opacity-40">
        <HeroBackground />
      </div>
      
      <div className="flex justify-between items-center sm:items-start w-full max-w-[1400px] mx-auto z-50 relative">
        <div className="text-xl font-bold tracking-tight text-black font-geom z-50 relative">martins.co</div>
        
        {/* Desktop Nav */}
        <nav className="hidden sm:flex gap-8 text-xs font-medium text-neutral-500 uppercase tracking-wide font-mono">
          <a href="#about" className="hover:text-black transition-colors">sobre</a>
          <a href="#services" className="hover:text-black transition-colors">serviços</a>
          <a href="#why" className="hover:text-black transition-colors">diferenciais</a>
          <a href="https://wa.me/5511983404617" className="hover:text-black transition-colors">contato</a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="sm:hidden text-black z-50 relative p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Nav Overlay */}
        <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <nav className="flex flex-col items-center justify-center h-full gap-8 text-lg font-medium text-black uppercase tracking-widest font-mono">
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>sobre</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)}>serviços</a>
            <a href="#why" onClick={() => setMobileMenuOpen(false)}>diferenciais</a>
            <a href="https://wa.me/5511983404617" onClick={() => setMobileMenuOpen(false)}>contato</a>
          </nav>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center w-full z-10 relative mt-12 md:mt-0">
      <div className="text-center">
        <h1 className="text-[15vw] md:text-[18vw] lg:text-[22vh] font-geom font-[750] tracking-tighter leading-none mb-4">
          <span className="block text-black">i build</span>
          <span className="block text-neutral-400">websites.</span>
        </h1>
        <p className="text-xl md:text-2xl text-neutral-400 font-normal tracking-tight">Design de Performance</p>
      </div>
    </div>

    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 w-full max-w-[1400px] mx-auto z-10 relative">
      <SpecialText className="text-xs font-medium text-neutral-500 uppercase tracking-wide font-mono whitespace-nowrap overflow-hidden inline-block">
        Websites premium desenvolvidos para empresas que desejam crescer com estratégia.
      </SpecialText>
      <button 
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="group flex items-center gap-2 text-xs font-bold tracking-widest uppercase border-b border-black pb-1 hover:text-neutral-600 hover:border-neutral-400 transition-all font-mono whitespace-nowrap"
      >
        Explorar <span className="group-hover:translate-y-0.5 transition-transform duration-300">↓</span>
      </button>
    </div>
  </header>
  );
};

const Authority = () => (
  <section id="about" className="sm:px-8 px-6 pt-20 pb-16 border-t border-neutral-100 bg-white">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-5">
          <div className="relative overflow-hidden bg-neutral-100 rounded-2xl aspect-[4/5]">
            <img src="/hero.png" alt="Pedro Martins" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 -scale-x-100" />
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="flex flex-col justify-center h-full">
            <div className="flex items-center gap-3 mb-6">
              <ArrowDownRight className="w-4 h-4 text-neutral-400" />
              <div className="h-px flex-1 bg-neutral-200"></div>
            </div>
            <h2 className="text-3xl font-semibold text-neutral-900 mb-6 tracking-tight">A Ponte entre dois mundos</h2>
            <p className="text-lg leading-relaxed text-neutral-600 mb-8 font-mono">
              Pedro trouxe na bagagem a cultura de excelência das grandes agências europeias. Na Martins & Co., não entregamos apenas "anúncios". Entregamos Design de Performance: a união entre análise granular de dados e estética de boutique.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-neutral-900 font-mono uppercase tracking-wide">IMPACTO</h3>
                <ul className="text-sm text-neutral-500 space-y-2 font-mono">
                  <li>• 10M+ Gerados</li>
                  <li>• 50+ Marcas Escaladas</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-neutral-900 font-mono uppercase tracking-wide">FOCO</h3>
                <ul className="text-sm text-neutral-500 space-y-2 font-mono">
                  <li>• Conversão</li>
                  <li>• Retenção</li>
                  <li>• Escala</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="#services" className="px-6 py-3 rounded-lg bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-colors font-mono text-sm">Nossos Serviços</a>
              <a href="https://wa.me/5511983404617" className="px-6 py-3 rounded-lg border border-neutral-200 text-neutral-900 font-medium hover:bg-neutral-50 transition-colors font-mono text-sm">Falar no WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="sm:px-8 px-6 bg-neutral-50 border-t border-neutral-200">
    <div className="py-24 max-w-6xl mx-auto">
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest font-mono">Serviços</span>
          <div className="h-px flex-1 bg-neutral-200"></div>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">O que fazemos</h2>
        <p className="text-lg text-neutral-500 font-mono max-w-2xl">Soluções de Elite para quem busca o Próximo Nível.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {[
          {
            icon: Target,
            title: "Tráfego de Elite",
            desc: "Gestão avançada de mídia paga focada em ROAS e LTV. Dominamos Meta, Google e TikTok Ads com precisão cirúrgica.",
            tag: "Performance"
          },
          {
            icon: TrendingUp,
            title: "Growth & CRO",
            desc: "Otimização contínua de taxas de conversão. Analisamos cada etapa do seu funil para reduzir atrito e maximizar lucro.",
            tag: "Growth"
          },
          {
            icon: ShieldCheck,
            title: "Estratégia Full-Stack",
            desc: "Da criação da oferta à retenção do cliente. Desenhamos a arquitetura completa do seu ecossistema de vendas.",
            tag: "Strategy"
          }
        ].map((service, i) => (
          <div key={i} className="group bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
            <div className="h-48 mb-6 bg-neutral-100 rounded-xl overflow-hidden relative border border-neutral-100 flex items-center justify-center">
               <service.icon className="w-12 h-12 text-neutral-400 group-hover:text-neutral-900 transition-colors duration-500 group-hover:scale-110" />
            </div>
            <div className="inline-flex gap-2 bg-neutral-100 text-neutral-600 px-3 py-1 rounded-full text-xs font-medium font-mono mb-4 border border-neutral-200">
              <service.icon className="w-3 h-3" /> {service.tag}
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-3">{service.title}</h3>
            <p className="text-neutral-500 text-sm leading-relaxed font-mono">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WhyUs = () => (
  <section id="why" className="px-6 sm:px-8 bg-white border-t border-neutral-200">
    <div className="mx-auto max-w-6xl py-24">
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest font-mono">Diferenciais</span>
          <div className="h-px flex-1 bg-neutral-200"></div>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">Por que a Martins & Co.?</h2>
        <p className="text-lg text-neutral-500 max-w-2xl font-mono">Não somos uma agência de volume. Somos uma boutique de resultado.</p>
      </div>
      
      <div className="space-y-12">
        <div className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs text-neutral-500 font-mono font-medium">Método</span>
              <div className="h-1 w-1 rounded-full bg-neutral-300"></div>
              <span className="text-xs text-neutral-500 font-mono font-medium">Lado a Lado</span>
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Transparência e Rigor</h3>
            <p className="text-neutral-600 mb-6 leading-relaxed font-mono">
              Você sabe exatamente para onde vai cada centavo. Sem métricas de vaidade, apenas lucro. Fomos forjados na exigência de Londres. Nosso padrão de entrega é o 'Padrão Ouro'.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 text-xs bg-neutral-100 text-neutral-600 border border-neutral-200 rounded-full font-mono">Dashboard 24/7</span>
              <span className="px-3 py-1 text-xs bg-neutral-100 text-neutral-600 border border-neutral-200 rounded-full font-mono">Reuniões Quinzenais</span>
              <span className="px-3 py-1 text-xs bg-neutral-100 text-neutral-600 border border-neutral-200 rounded-full font-mono">Acesso Direto</span>
            </div>
            <a href="https://wa.me/5511983404617" className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 hover:text-black transition-colors border-b border-transparent hover:border-black pb-0.5">
              Garantir Minha Vaga <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="order-1 lg:order-2">
            <div className="rounded-xl overflow-hidden border border-neutral-200 shadow-xl bg-neutral-50 group-hover:-translate-y-2 transition-transform duration-500 p-12 flex items-center justify-center aspect-video">
              <Award className="w-32 h-32 text-neutral-300 group-hover:text-neutral-900 transition-colors duration-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white border-t border-neutral-200 px-6 sm:px-8">
    <div className="mx-auto max-w-6xl py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-between items-center">
        <div>
          <div className="font-bold text-lg tracking-tight mb-2 font-glassure">MARTINS.CO</div>
          <p className="text-neutral-500 text-sm font-mono">© {new Date().getFullYear()} Todos os direitos reservados.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:justify-end items-start md:items-center text-sm font-medium text-neutral-600">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-50 text-neutral-700 border border-neutral-200 text-xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-500"></span>
            </span>
            Aceitando novos clientes
          </div>
          <nav className="flex gap-6 font-mono">
            <a href="#" className="hover:text-black transition">Instagram</a>
            <a href="#" className="hover:text-black transition">LinkedIn</a>
          </nav>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="w-full relative bg-white min-h-screen text-neutral-900 font-sans selection:bg-neutral-200 selection:text-black">
      <Sidebar />
      <Hero />
      <div id="main-content">
        <Authority />
        <Services />
        <WhyUs />
        <Footer />
      </div>
    </div>
  );
}
