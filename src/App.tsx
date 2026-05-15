/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  TrendingUp, 
  Layout, 
  ChevronRight, 
  MessageCircle, 
  ShieldCheck, 
  Target, 
  Users,
  Globe,
  Award
} from "lucide-react";

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-offwhite/80 backdrop-blur-md border-b border-brand-gold/10">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-serif font-bold tracking-tighter">
          MARTINS<span className="text-brand-gold">.</span>CO
        </span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
        <a href="#services" className="hover:text-brand-gold transition-colors">Serviços</a>
        <a href="#about" className="hover:text-brand-gold transition-colors">Sobre</a>
        <a href="#why" className="hover:text-brand-gold transition-colors">Diferenciais</a>
        <a 
          href="https://wa.me/5511983404617" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-brand-gold border border-brand-gold px-4 py-2 hover:bg-brand-gold hover:text-brand-black transition-all"
        >
          Falar no WhatsApp
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-black text-brand-offwhite">
    {/* Subtle Background Pattern */}
    <div className="absolute inset-0 opacity-20 pointer-events-none">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-gold/5 blur-[80px] rounded-full" />
    </div>

    <div className="section-container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-[0.2em] mb-6">
          <Globe className="w-3 h-3" /> • Brasil •
        </div>
        <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-8">
          Escala <span className="italic text-brand-gold">Nacional</span>, Resiliência <span className="text-brand-gold">Brasileira</span>.
        </h1>
        <p className="text-lg md:text-xl text-brand-offwhite/70 max-w-xl mb-10 leading-relaxed font-light">
          A força do empreendedorismo local para transformar marcas em máquinas de faturamento.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://wa.me/5511983404617" className="btn-primary">
            Escalar meu Negócio <MessageCircle className="w-5 h-5" />
          </a>
          <button className="px-8 py-4 border border-brand-offwhite/20 hover:border-brand-gold/50 transition-all font-medium">
            Conhecer Metodologia
          </button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative lg:block hidden"
      >
        <div className="relative aspect-[4/5] max-w-md mx-auto">
          {/* Placeholder for "PM Dourado" Logo or Backdrop Photo */}
          <div className="absolute inset-0 border border-brand-gold/20 -m-4 -z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2301&auto=format&fit=crop')] bg-cover bg-center grayscale contrast-125 opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-48 h-48 border-2 border-brand-gold flex items-center justify-center rotate-45">
                <span className="text-7xl font-serif text-brand-gold -rotate-45 leading-none">PM</span>
             </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Authority = () => (
  <section id="about" className="bg-brand-offwhite">
    <div className="section-container">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative aspect-video lg:aspect-square bg-gray-200 overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop" 
            alt="Pedro Martins" 
            className="w-full h-full object-cover grayscale"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-sm font-bold text-brand-gold uppercase tracking-[0.3em] mb-4">A Ponte entre dois mundos</h2>
          <h3 className="text-4xl md:text-5xl font-serif mb-8">Da disciplina de Londres à força do Brasil.</h3>
          <p className="text-lg text-brand-black/70 mb-6 italic">
            "A performance não é apenas um número, é um design de cada ponto de contato."
          </p>
          <p className="text-brand-black/80 leading-relaxed mb-8">
            Minha jornada começou na Universidade de Mogi das Cruzes, onde mergulhei no Design Gráfico. Ali, entendi que a imagem de uma empresa não pode ser apenas "bonita" — ela precisa ser funcional, atrair o olhar e comunicar autoridade instantânea.
Mas eu sabia que o design sozinho era apenas metade da equação. Por isso, fui buscar o que há de mais avançado em estratégia de mercado no Reino Unido, graduando-me em Business Management pela Bath Spa University.
Lá, entendi como os grandes negócios escalam: através de processos, métricas e gestão eficiente.

O Elo Perfeito
Ao retornar, percebi um padrao comum no mercado brasileiro: agências que fazem artes lindas, mas não entendem de negócios, ou gestores que olham números, mas negligenciam o marketing da empresa.

A Martins & Co nasceu para ser o elo perfeito que faltava.
Unimos a precisão do design brasileiro que converge com a experiência de gestão britânica. Não entregamos apenas anúncios no Google ou um site administrado; entregamos uma <strong>Engrenagem de Vendas</strong> completa, onde cada pixel e cada centavo investido têm um único propósito: fazer sua empresa crescer. 
          </p>
          <div className="flex items-center gap-6">
            <div>
               <p className="text-3xl font-serif text-brand-gold">10M+</p>
               <p className="text-xs uppercase font-bold tracking-widest text-brand-black/40">Gerados para Clientes</p>
            </div>
            <div className="w-px h-12 bg-brand-gold/20" />
            <div>
               <p className="text-3xl font-serif text-brand-gold">50+</p>
               <p className="text-xs uppercase font-bold tracking-widest text-brand-black/40">Marcas Escaladas</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="bg-brand-black text-brand-offwhite">
    <div className="section-container">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-sm font-bold text-brand-gold uppercase tracking-[0.3em] mb-4">O que fazemos</h2>
        <h3 className="text-4xl md:text-5xl font-serif">Soluções de vendas para quem busca o Próximo Nível.</h3>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: Target,
            title: "Gestão de Google Ads",
            desc: "Dominamos o tráfego de intenção. Posicionamos sua marca onde o dinheiro está pronto para ser gasto, com foco em retorno real.",
            benefit: "Escalabilidade e Previsibilidade"
          },
          {
            icon: Layout,
            title: "Performance Landing Pages",
            desc: "Páginas que não apenas informam, mas convertem. Design focado em guiar o olhar para a decisão de compra.",
            benefit: "Aumento Imediato de Conversão"
          },
          {
            icon: TrendingUp,
            title: "Consultoria de Escala",
            desc: "Diagnóstico completo de gargalos. Atuamos como seu braço direito estratégico para romper o teto de crescimento.",
            benefit: "Liberdade e Lucratividade"
          }
        ].map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-8 border border-brand-offwhite/10 hover:border-brand-gold/40 transition-all group"
          >
            <service.icon className="w-10 h-10 text-brand-gold mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="text-2xl font-serif mb-4">{service.title}</h4>
            <p className="text-brand-offwhite/60 mb-6 font-light leading-relaxed">
              {service.desc}
            </p>
            <div className="pt-6 border-t border-brand-offwhite/10 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">{service.benefit}</span>
              <ChevronRight className="w-4 h-4 text-brand-gold" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const WhyUs = () => (
  <section id="why" className="bg-brand-offwhite border-y border-brand-gold/10">
    <div className="section-container">
      <div className="grid lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif mb-8">Por que a Martins & Co.<br/><span className="text-brand-gold">é o seu destino final?</span></h2>
          <p className="text-brand-black/70 text-lg mb-12">
            Não somos uma agência de volume. Somos uma agencia que faz entrega de resultados. Selecionamos nossos parceiros para garantir que cada um tenha o vigor técnico que merece.
          </p>
          <div className="space-y-8">
            {[
              { icon: Users, title: "Pessoas acima de Dashboards", desc: "Sua marca é cuidada por quem entende de negócios, não apenas por estagiários de anúncios." },
              { icon: ShieldCheck, title: "Transparência Absoluta", desc: "Você sabe exatamente para onde vai cada centavo. Sem métricas de vaidade, apenas lucro." },
              { icon: Award, title: "Rigor Técnico Europeu", desc: "Fomos forjados na exigência. Nosso padrão de entrega é padrão ouro'." }
            ].map((pillar, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center">
                  <pillar.icon className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{pillar.title}</h4>
                  <p className="text-brand-black/60 font-light">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 gold-gradient opacity-10 -m-8 -z-10 rounded-full blur-3xl" />
          <div className="bg-brand-black p-12 text-brand-offwhite border-t-4 border-brand-gold shadow-2xl">
             <h4 className="text-2xl font-serif mb-6 text-center italic">O Método "Lado a Lado"</h4>
             <p className="text-brand-offwhite/70 mb-8 leading-relaxed">
               Não somos um fornecedor estático. Nos tornamos seu braço direito. Atuamos na estratégia, na criação e na análise, como se o negócio fosse nosso.
             </p>
             <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-1.5 h-1.5 bg-brand-gold rounded-full" /> Reuniões quinzenais de alinhamento
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-1.5 h-1.5 bg-brand-gold rounded-full" /> Dashboard em tempo real 24/7
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-1.5 h-1.5 bg-brand-gold rounded-full" /> Acesso direto ao estrategista via WhatsApp
                </div>
             </div>
             <a href="https://wa.me/5511983404617" className="btn-primary w-full mt-12 group">
               Garantir Minha Vaga <ChevronRight className="group-hover:translate-x-1 transition-transform" />
             </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-brand-black text-brand-offwhite pt-24 pb-12 border-t border-brand-gold/20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-2">
           <span className="text-3xl font-serif font-bold tracking-tighter mb-6 block">
            MARTINS<span className="text-brand-gold">.</span>CO
          </span>
          <p className="text-brand-offwhite/50 max-w-sm mb-8">
            Consultoria de marketing digital para marcas que não aceitam o mediano.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-brand-gold/20 flex items-center justify-center hover:bg-brand-gold transition-all group">
              <span className="text-xs font-bold group-hover:text-brand-black">IN</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-brand-gold/20 flex items-center justify-center hover:bg-brand-gold transition-all group">
              <span className="text-xs font-bold group-hover:text-brand-black">IG</span>
            </a>
          </div>
        </div>
        
        <div>
          <h5 className="font-bold uppercase tracking-widest text-xs text-brand-gold mb-6">Links</h5>
          <ul className="space-y-4 text-sm text-brand-offwhite/60">
            <li><a href="#" className="hover:text-brand-gold transition-colors">Início</a></li>
            <li><a href="#services" className="hover:text-brand-gold transition-colors">Serviços</a></li>
            <li><a href="#about" className="hover:text-brand-gold transition-colors">Pedro Martins</a></li>
            <li><a href="#why" className="hover:text-brand-gold transition-colors">Diferenciais</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold uppercase tracking-widest text-xs text-brand-gold mb-6">Contato</h5>
          <ul className="space-y-4 text-sm text-brand-offwhite/60">
            <li>contato@martinsco.com.br</li>
            <li>@martins.co_</li>
            <li>São Paulo • Londres</li>
          </ul>
        </div>
      </div>
      
      <div className="pt-12 border-t border-brand-offwhite/5 flex flex-col md:row items-center justify-between gap-6 text-xs text-brand-offwhite/30 uppercase tracking-[0.2em]">
        <p>© {new Date().getFullYear()} MARTINS & CO. Todos os direitos reservados.</p>
        <p>Design de Performance por Pedro Martins</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="overflow-x-hidden selection:bg-brand-gold selection:text-brand-black">
      <Navbar />
      <Hero />
      <Authority />
      <Services />
      <WhyUs />
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/5511983404617" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 flex items-center justify-center"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
      </a>
    </div>
  );
}
