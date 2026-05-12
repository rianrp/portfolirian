const items = [
    'REACT', 'NEXT.JS', 'TYPESCRIPT', '.NET', 'AZURE', 'AWS', 'AI INTEGRATION', 'MICROFRONTENDS',
];

export default function Marquee() {
    const doubled = [...items, ...items];

    return (
        <div className="relative overflow-hidden my-10">
            <div
                className="bg-ink text-paper border-y-[3px] border-ink py-4 overflow-hidden -rotate-[1.5deg]"
                style={{ width: '110vw', marginLeft: '-5vw' }}
            >
                <div className="flex gap-12 whitespace-nowrap animate-marquee font-display text-3xl">
                    {doubled.map((item, i) => (
                        <span key={i} className="inline-flex items-center gap-10 shrink-0">
                            {item}
                            <span className="text-neo-blue">★</span>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
