"use client";

export function CinematicGrain({ opacity = 0.05 }) {
    return (
        <div className="absolute inset-0 pointer-events-none z-0" style={{ opacity }}>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat opacity-[0.4]" />
        </div>
    )
}

export function SubtleGrid({ opacity = 0.03, size = '40px' }) {
    return (
        <div className="absolute inset-0 pointer-events-none z-0"
            style={{
                opacity,
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
                backgroundSize: `${size} ${size}`
            }}
        />
    )
}

export function DotGrid({ opacity = 0.03, size = '30px' }) {
    return (
        <div className="absolute inset-0 pointer-events-none z-0"
            style={{
                opacity,
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
                backgroundSize: `${size} ${size}`
            }}
        />
    );
}
