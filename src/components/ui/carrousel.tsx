import React, { useState, useMemo } from 'react';
import type { PromoSection, PromoItem } from '../../types';

interface CarouselProps {
    cardData: PromoSection[] | PromoItem[];
}

const Carousel = ({ cardData }: CarouselProps) => {
    const [stopScroll, setStopScroll] = useState(false);

    const items = useMemo(() => {
        if (!cardData || cardData.length === 0) return [];
        if ('promos' in cardData[0]) {
            return (cardData as PromoSection[]).flatMap(section => section.promos);
        }
        return cardData as PromoItem[];
    }, [cardData]);

    const handleMouseEnter = () => setStopScroll(true);
    const handleMouseLeave = () => setStopScroll(false);

    return (
        <>
            <style>{`
                .marquee-inner {
                    animation: marqueeScroll linear infinite;
                }

                @keyframes marqueeScroll {
                    0% {
                        transform: translateX(0%);
                    }

                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>

            <div
                className="overflow-hidden w-full relative max-w-6xl mx-auto"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleMouseEnter}
                onTouchEnd={handleMouseLeave}
            >
                <div className="absolute left-0 top-0 h-full w-8 md:w-20 z-10 pointer-events-none bg-gradient-to-r from-moto-dark to-transparent" />
                <div className="marquee-inner flex w-fit" style={{ animationPlayState: stopScroll ? "paused" : "running", animationDuration: Math.max(items.length * 5, 20) + "s" }}>
                    <div className="flex">
                        {[...items, ...items].map((card, index) => (
                            <div key={index} className="w-56 mx-4 h-[20rem] relative group hover:scale-95 transition-all duration-300 rounded-xl overflow-hidden shadow-lg border border-moto-white/10">
                                {card.tag && (
                                    <div className="absolute top-2 left-2 w-16 h-16 flex items-center justify-center transform rotate-12 drop-shadow-lg">
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-yellow-500 animate-pulse">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                        <span className="absolute text-[0.65rem] font-bold text-black uppercase tracking-tighter text-center leading-none transform -rotate-12 w-full px-1">{card.tag}</span>
                                    </div>
                                )}
                                <img
                                    src={card.src && typeof card.src === 'object' ? card.src.src : card.src}
                                    alt={card.alt || card.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="flex flex-col items-center justify-end pb-6 px-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                                    <p className="text-moto-white text-xl font-bold text-center italic uppercase tracking-tighter transform -skew-x-12">{card.title}</p>
                                    <p className="text-moto-white text-lg font-bold text-center italic uppercase tracking-tighter transform -skew-x-12">{card.description}</p>
                                    <p className="text-moto-red font-bold text-lg mt-1">${card.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute right-0 top-0 h-full w-8 md:w-20 z-10 pointer-events-none bg-gradient-to-l from-moto-dark to-transparent" />
            </div>
        </>
    );
};

export default Carousel;