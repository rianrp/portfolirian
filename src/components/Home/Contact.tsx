export default function Contact() {
    return (
        <section id="contato" className="py-20 md:py-28">
            <div className="container mx-auto px-6 max-w-4xl">

                {/* Dark CTA block */}
                <div className="bg-ink text-paper border-[4px] border-ink shadow-brut-lg rounded-3xl p-10 md:p-16 relative overflow-hidden">
                    {/* dot grid decoration */}
                    <div
                        className="absolute inset-0 opacity-[0.07] pointer-events-none"
                        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
                    />

                    {/* decorative corners */}
                    <span className="absolute top-6 left-8 font-mono text-5xl font-black text-paper/10 select-none">&lt;/&gt;</span>
                    <span className="absolute bottom-6 right-8 font-mono text-5xl font-black text-paper/10 select-none">&#123; &#125;</span>

                    <div className="relative text-center md:text-left">
                        <span className="inline-block font-mono text-xs font-bold bg-neo-yellow text-ink border-2 border-neo-yellow px-3 py-1 rounded-md mb-6">
                            // bora.trabalhar.juntos
                        </span>

                        <h2 className="font-display text-4xl md:text-6xl leading-tight mb-4">
                            Tem uma ideia?<br />
                            <span className="text-neo-yellow">Bora tirar do papel.</span>
                        </h2>

                        <p className="text-paper/70 font-semibold text-lg max-w-xl mb-10 leading-relaxed">
                            Seja um site, um app, um sistema ou uma automação com IA — me conta o que você precisa e eu te digo como fazer acontecer.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <a
                                href="mailto:riansatro@gmail.com"
                                className="inline-flex justify-center items-center gap-2 bg-neo-blue text-paper border-2 border-neo-blue shadow-[4px_4px_0_#ffd84d] px-6 py-4 rounded-xl font-black text-sm uppercase hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_#ffd84d] transition-all no-underline w-full sm:w-auto"
                            >
                                ✉ riansatro@gmail.com
                            </a>
                            <a
                                href="https://wa.me/5548964896686?text=Oi%20Rian!%20Vi%20seu%20portf%C3%B3lio%20e%20quero%20conversar%20sobre%20um%20projeto."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex justify-center items-center gap-2 bg-paper text-ink border-2 border-paper shadow-[4px_4px_0_#4ade80] px-6 py-4 rounded-xl font-black text-sm uppercase hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_#4ade80] transition-all no-underline w-full sm:w-auto"
                            >
                                💬 WhatsApp
                            </a>
                        </div>

                        <p className="text-paper/40 font-mono text-xs">
                            Respondo em até 24h • Orçamento gratuito e sem compromisso
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
