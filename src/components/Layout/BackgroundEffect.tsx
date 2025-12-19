export default function BackgroundEffect() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <div
                className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]"
            />
            <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,transparent_70%,black)]" />
            <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-accent/5 to-transparent blur-[120px]" />
        </div>
    );
}
