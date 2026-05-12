import { Globe, Layers, ShoppingCart, Database, Smartphone, Sparkles } from 'lucide-react';

const services = [
    {
        Icon: Globe,
        title: 'Sites Institucionais',
        desc: 'Landing pages, portfólios e sites corporativos que convertem visitante em cliente.',
        color: 'bg-neo-blue',
        textColor: 'text-paper',
        border: 'border-ink',
    },
    {
        Icon: Layers,
        title: 'Web Apps',
        desc: 'Dashboards, plataformas e SaaS com React e Next.js. Do MVP ao produto escalável.',
        color: 'bg-neo-yellow',
        textColor: 'text-ink',
        border: 'border-ink',
    },
    {
        Icon: ShoppingCart,
        title: 'E-commerce',
        desc: 'Lojas online completas com carrinho, checkout, gestão de produtos e integrações de pagamento.',
        color: 'bg-neo-pink',
        textColor: 'text-paper',
        border: 'border-ink',
    },
    {
        Icon: Database,
        title: 'Sistemas Internos',
        desc: 'CRMs, ERPs, painéis administrativos e ferramentas de gestão para equipes.',
        color: 'bg-neo-green',
        textColor: 'text-ink',
        border: 'border-ink',
    },
    {
        Icon: Smartphone,
        title: 'Apps Mobile',
        desc: 'Aplicativos iOS e Android com React Native. Um código, duas plataformas.',
        color: 'bg-paper',
        textColor: 'text-ink',
        border: 'border-ink',
    },
];

const stars = [
    { top: '12%', left: '8%',  size: 14, delay: '0s',    dur: '2.4s' },
    { top: '20%', left: '78%', size: 10, delay: '0.4s',  dur: '3s'   },
    { top: '55%', left: '88%', size: 16, delay: '0.8s',  dur: '2.8s' },
    { top: '75%', left: '15%', size: 10, delay: '1.2s',  dur: '2.2s' },
    { top: '40%', left: '50%', size: 8,  delay: '0.6s',  dur: '3.2s' },
    { top: '85%', left: '65%', size: 12, delay: '1.6s',  dur: '2.6s' },
    { top: '10%', left: '45%', size: 9,  delay: '0.2s',  dur: '2.9s' },
];

export default function Services() {
    return (
        <section id="servicos" className="py-20 md:py-28">
            <div className="container mx-auto px-6 max-w-6xl">

                <div className="mb-14 text-center md:text-left">
                    <span className="inline-block font-mono text-xs font-bold bg-neo-pink text-paper border-2 border-ink px-3 py-1 rounded-md mb-4">
                        // o que eu entrego
                    </span>
                    <h2 className="font-display text-5xl md:text-6xl leading-none">
                        Do que você{' '}
                        <span className="bg-neo-green border-[3px] border-ink shadow-brut px-3 inline-block rotate-1">
                            precisa?
                        </span>
                    </h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map(({ Icon, title, desc, color, textColor, border }, i) => (
                        <div
                            key={i}
                            className={`${color} ${textColor} border-[3px] ${border} shadow-brut rounded-2xl p-6 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brut-lg transition-all duration-200`}
                        >
                            <div className="mb-4">
                                <Icon size={36} strokeWidth={2.5} />
                            </div>
                            <h3 className="font-display text-2xl leading-tight mb-2">{title}</h3>
                            <p className="text-sm font-semibold leading-relaxed opacity-80">{desc}</p>
                        </div>
                    ))}

                    {/* IA card — destaque especial */}
                    <div className="relative overflow-hidden border-[3px] border-neo-yellow rounded-2xl p-6 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0_#ffd84d] shadow-[6px_6px_0_#ffd84d] transition-all duration-200"
                        style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 60%, #0a0a0a 100%)' }}
                    >
                        {/* Stars */}
                        {stars.map((s, i) => (
                            <span
                                key={i}
                                className="absolute pointer-events-none"
                                style={{
                                    top: s.top, left: s.left,
                                    width: s.size, height: s.size,
                                    animationName: 'twinkle',
                                    animationDuration: s.dur,
                                    animationDelay: s.delay,
                                    animationIterationCount: 'infinite',
                                    animationTimingFunction: 'ease-in-out',
                                }}
                            >
                                <svg viewBox="0 0 24 24" fill="#ffd84d" width={s.size} height={s.size}>
                                    <path d="M12 2 L13.5 9 L20 12 L13.5 15 L12 22 L10.5 15 L4 12 L10.5 9 Z" />
                                </svg>
                            </span>
                        ))}

                        {/* Badge */}
                        <span className="absolute top-4 right-4 font-mono text-[10px] font-black bg-neo-yellow text-ink px-2 py-0.5 rounded-md uppercase">
                            NEW
                        </span>

                        <div className="mb-4 text-neo-yellow">
                            <Sparkles size={36} strokeWidth={2.5} />
                        </div>
                        <h3 className="font-display text-2xl leading-tight mb-2 text-paper">Automação com IA</h3>
                        <p className="text-sm font-semibold leading-relaxed text-paper/70">
                            Chatbots, OCR, geração de conteúdo e integrações com OpenAI, Claude e modelos locais.
                        </p>

                        {/* glow */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-neo-yellow/10 blur-2xl pointer-events-none" />
                    </div>

                </div>

            </div>

            <style>{`
                @keyframes twinkle {
                    0%, 100% { opacity: 0.15; transform: scale(0.7) rotate(0deg); }
                    50%       { opacity: 1;    transform: scale(1.2) rotate(20deg); }
                }
            `}</style>
        </section>
    );
}

