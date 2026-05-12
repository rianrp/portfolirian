import mePic from '../../assets/me.png';

export default function Hero() {
    const stats = [
        { num: '7+', label: 'Anos de Código' },
        { num: '50+', label: 'Projetos Entregues' },
        { num: 'C1', label: 'Inglês Fluente' },
    ];

    return (
        <section id="hero" className="py-16 md:py-24 relative">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">

                    {/* Left */}
                    <div className="text-center md:text-left">
                        <div className="reveal reveal-1 inline-flex items-center gap-2 bg-neo-yellow border-[3px] border-ink shadow-brut-sm rounded-full px-4 py-1.5 text-xs font-black uppercase mb-6">
                            <span className="w-2.5 h-2.5 bg-neo-green border-2 border-ink rounded-full animate-pulse-dot" />
                            Aceitando 2 projetos em Janeiro
                        </div>

                        <h1 className="reveal reveal-2 font-display text-[clamp(48px,7vw,96px)] leading-none mb-6">
                            Sites e apps
                            <span
                                className="inline-block bg-neo-blue text-paper px-4 py-1 border-[3px] border-ink shadow-brut mx-1 my-2 -rotate-2"
                            >FEITOS</span>
                            <br />
                            pra{' '}
                            <span style={{ WebkitTextStroke: '3px #0a0a0a', color: 'transparent' }}>
                                CONVERTER.
                            </span>
                        </h1>

                        <p className="reveal reveal-3 text-lg max-w-lg mb-8 text-ink-soft font-semibold leading-relaxed">
                            Desenvolvedor front-end sênior. React, Next.js, TypeScript e IA.
                            Transformo ideias confusas em produtos que funcionam — sem template,
                            sem gambiarra, sem enrolação.
                        </p>

                        <div className="reveal reveal-4 flex flex-col sm:flex-row gap-4 mb-10">
                            <a
                                href="#contato"
                                className="inline-flex justify-center items-center gap-2 px-7 py-4 bg-neo-blue text-paper border-[3px] border-ink shadow-brut rounded-xl font-black text-sm uppercase hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[9px_9px_0_#0a0a0a] transition-all active:translate-x-0.5 active:translate-y-0.5 no-underline w-full sm:w-auto"
                            >
                                Começar Projeto →
                            </a>
                            <a
                                href="#projetos"
                                className="inline-flex justify-center items-center gap-2 px-7 py-4 bg-paper text-ink border-[3px] border-ink shadow-brut rounded-xl font-black text-sm uppercase hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[9px_9px_0_#0a0a0a] transition-all no-underline w-full sm:w-auto"
                            >
                                Ver Trabalhos
                            </a>
                        </div>

                        <div className="reveal reveal-4 flex gap-8 flex-wrap justify-center md:justify-start">
                            {stats.map(s => (
                                <div key={s.label}>
                                    <div className="font-display text-4xl text-neo-blue">{s.num}</div>
                                    <div className="text-xs font-black uppercase text-ink-soft tracking-wide">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right — Mascot */}
                    <div className="relative flex justify-center items-center min-h-[480px]">
                        <div className="absolute top-5 left-0 z-10 bg-paper border-2 border-ink shadow-brut-sm px-3 py-2 rounded-xl font-mono text-sm font-bold animate-float-1">
                            &lt;React/&gt;
                        </div>
                        <div className="absolute top-20 right-0 z-10 bg-neo-yellow border-2 border-ink shadow-brut-sm px-3 py-2 rounded-xl font-mono text-sm font-bold animate-float-2">
                            ⚡ Fast
                        </div>
                        <div className="absolute bottom-24 left-0 z-10 bg-neo-blue text-paper border-2 border-ink shadow-brut-sm px-3 py-2 rounded-xl font-mono text-sm font-bold animate-float-3">
                            Next.js 15
                        </div>
                        <div className="absolute bottom-8 right-4 z-10 bg-neo-pink text-paper border-2 border-ink shadow-brut-sm px-3 py-2 rounded-xl font-mono text-sm font-bold animate-float-4">
                            + IA
                        </div>

                        <div className="border-[3px] border-ink shadow-brut-lg rounded-3xl overflow-hidden rotate-[2deg] relative z-[2] w-[280px]">
                            <img
                                src={mePic}
                                alt="Rian Rodrigues"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
