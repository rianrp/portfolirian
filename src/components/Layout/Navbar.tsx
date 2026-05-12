import { useState } from 'react';

const links = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Stack', href: '#stack' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="sticky top-4 z-50 mx-auto max-w-5xl px-4 mt-4">
            <div className="bg-paper border-[4px] border-ink shadow-brut rounded-full px-5 py-2.5 flex items-center justify-between gap-4">
                {/* Logo */}
                <a href="#" className="font-display text-xl flex items-center gap-2 no-underline">
                    <span className="w-3.5 h-3.5 rounded-full bg-neo-blue border-2 border-ink inline-block" />
                    riandevince<span className="text-neo-blue">.dev</span>
                </a>

                {/* Desktop links */}
                <div className="hidden md:flex gap-5">
                    {links.map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-ink font-black text-[13px] uppercase tracking-wide hover:text-neo-blue transition-colors no-underline"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    <a
                        href="#contato"
                        className="bg-ink text-paper rounded-full px-4 py-2 font-black text-[13px] uppercase border-2 border-ink hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0_#2563ff] transition-all no-underline"
                    >
                        Bora Conversar →
                    </a>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden flex flex-col gap-[5px] w-7 h-7 justify-center"
                        aria-label="Menu"
                    >
                        <span className={`block h-[2.5px] bg-ink transition-all duration-300 ${open ? 'rotate-45 translate-y-[7.5px] w-7' : 'w-7'}`} />
                        <span className={`block h-[2.5px] bg-ink transition-all duration-300 ${open ? 'opacity-0' : 'w-5'}`} />
                        <span className={`block h-[2.5px] bg-ink transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7.5px] w-7' : 'w-3'}`} />
                    </button>
                </div>
            </div>

            {/* Mobile dropdown */}
            {open && (
                <div className="md:hidden mt-3 bg-paper border-[3px] border-ink shadow-brut rounded-2xl overflow-hidden">
                    {links.map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="block px-6 py-4 font-black text-sm uppercase border-b-2 border-ink last:border-0 hover:bg-neo-yellow transition-colors no-underline text-ink"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}

