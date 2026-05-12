import { useState } from 'react';

const faqs = [
    {
        q: 'Quanto custa um projeto?',
        a: 'Depende do escopo. Um site institucional começa a partir de R$ 1.500. Web apps e sistemas sob medida são orçados conforme as funcionalidades. Entre em contato para um orçamento gratuito e sem compromisso.',
    },
    {
        q: 'Quanto tempo leva para ficar pronto?',
        a: 'Sites simples: 1 a 2 semanas. Web apps e sistemas: de 3 semanas a 2 meses dependendo da complexidade. Prazos são sempre combinados antes do início e respeitados.',
    },
    {
        q: 'Você trabalha com empresas pequenas e MEIs?',
        a: 'Sim! Grande parte dos meus clientes são pequenas empresas, profissionais autônomos e startups iniciantes. O tamanho da empresa não importa — o que importa é ter um produto bem feito.',
    },
    {
        q: 'Preciso ter um designer para contratar você?',
        a: 'Não. Se você não tiver design pronto, posso criar o layout do zero ou trabalhar com referências que você enviar. Entrego o produto com visual profissional incluso.',
    },
    {
        q: 'Como funciona o processo de trabalho?',
        a: 'Conversa inicial → definição de escopo e prazo → proposta → aprovação → desenvolvimento com entregas parciais → ajustes → entrega final. Tudo com comunicação direta, sem intermediários.',
    },
    {
        q: 'Você faz manutenção depois de entregar?',
        a: 'Sim. Ofereço suporte pós-entrega para correções e posso fechar contrato de manutenção mensal para atualizações contínuas.',
    },
    {
        q: 'Trabalha com clientes fora do Brasil?',
        a: 'Sim. Atendo clientes internacionais em inglês e aceito pagamentos em dólar e euro. Já trabalhei com clientes nos EUA e Europa.',
    },
];

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section id="faq" className="py-20 md:py-28">
            <div className="container mx-auto px-6 max-w-3xl">

                <div className="mb-14 text-center md:text-left">
                    <span className="inline-block font-mono text-xs font-bold bg-neo-yellow text-ink border-2 border-ink px-3 py-1 rounded-md mb-4">
                        // duvidas.frequentes
                    </span>
                    <h2 className="font-display text-5xl md:text-6xl leading-none">
                        Perguntas{' '}
                        <span className="bg-neo-blue text-paper border-[3px] border-ink shadow-brut px-3 inline-block rotate-1">
                            Frequentes
                        </span>
                    </h2>
                </div>

                <div className="space-y-3">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="bg-paper border-[3px] border-ink shadow-brut-sm rounded-xl overflow-hidden"
                        >
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-black text-base md:text-lg hover:bg-neo transition-colors"
                            >
                                <span>{faq.q}</span>
                                <span
                                    className={`text-2xl font-display text-neo-blue flex-shrink-0 transition-transform duration-200 ${open === i ? 'rotate-45' : ''}`}
                                >
                                    +
                                </span>
                            </button>

                            {open === i && (
                                <div className="px-6 pb-5 border-t-[3px] border-ink bg-neo">
                                    <p className="pt-4 text-sm md:text-base font-semibold leading-relaxed text-ink-soft">
                                        {faq.a}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <p className="text-sm font-bold text-ink-soft mb-4">Não achou o que procurava?</p>
                    <a
                        href="https://wa.me/5548964896686"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex sm:inline-flex justify-center items-center gap-2 bg-neo-green border-[3px] border-ink shadow-brut px-6 py-3 rounded-xl font-black text-sm uppercase hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brut-lg transition-all no-underline text-ink w-full sm:w-auto"
                    >
                        Manda mensagem no WhatsApp →
                    </a>
                </div>
            </div>
        </section>
    );
}
