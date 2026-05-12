export default function Footer() {
    return (
        <footer className="border-t-[3px] border-dashed border-ink mt-16 py-10">
            <div className="container mx-auto px-6">
                <div className="flex flex-wrap justify-between items-center gap-5">
                    <div className="font-display text-2xl flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-neo-blue border-2 border-ink inline-block" />
                        riandevince<span className="text-neo-blue">.dev</span>
                    </div>

                    <div className="flex gap-5">
                        <a href="https://github.com/rianrp" target="_blank" rel="noopener noreferrer"
                            className="text-ink font-black text-sm uppercase hover:text-neo-blue transition-colors no-underline">
                            GitHub
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                            className="text-ink font-black text-sm uppercase hover:text-neo-blue transition-colors no-underline">
                            LinkedIn
                        </a>
                        <a href="#contato"
                            className="text-ink font-black text-sm uppercase hover:text-neo-blue transition-colors no-underline">
                            Contato
                        </a>
                    </div>

                    <p className="text-sm font-bold opacity-60 m-0">
                        © {new Date().getFullYear()} Rian Dev Network. Feito com café ☕
                    </p>
                </div>
            </div>
        </footer>
    );
}

