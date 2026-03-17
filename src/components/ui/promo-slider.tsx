import React, { useState, useRef, useEffect } from 'react';
import type { PromoSection, PromoItem } from '../../types';

interface PromoSliderProps {
    promos: PromoSection[] | PromoItem[];
}

const PromoSlider = ({ promos }: PromoSliderProps) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const items = React.useMemo(() => {
        if (!promos || promos.length === 0) return [];
        if ('promos' in promos[0]) {
            return (promos as PromoSection[]).flatMap(section => section.promos);
        }
        return promos as PromoItem[];
    }, [promos]);

    const scrollNext = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            const maxScroll = scrollWidth - clientWidth;
            if (scrollLeft >= maxScroll - 10) {
                scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
            }
        }
    };

    const scrollPrev = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            if (scrollLeft <= 10) {
                const maxScroll = scrollWidth - clientWidth;
                scrollContainerRef.current.scrollTo({ left: maxScroll, behavior: 'smooth' });
            } else {
                scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
            }
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            scrollNext();
        }, 4000);
        return () => clearInterval(interval);
    }, [items]);

    if (items.length === 0) return null;

    return (
        <div className="relative group w-full max-w-6xl mx-auto">
            {/* Botón Izquierda */}
            <button
                onClick={scrollPrev}
                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 bg-moto-red text-moto-white p-3 md:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none`}
                aria-label="Anterior promoción"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>

            {/* Contenedor del Slider */}
            <div
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 pt-4 px-4 scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {items.map((promo, index) => (
                    <div
                        key={index}
                        className="snap-center shrink-0 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[800px] aspect-square sm:aspect-[4/3] md:aspect-[21/9] relative group/card rounded-3xl overflow-hidden shadow-2xl border border-moto-white/10 transition-transform duration-300 hover:scale-[1.02]"
                    >
                        {promo.tag && (
                            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 py-1.5 px-4 bg-yellow-500 text-black font-black text-xs sm:text-sm uppercase tracking-widest transform -skew-x-12 drop-shadow-lg">
                                {promo.tag}
                            </div>
                        )}
                        <img
                            src={promo.src && typeof promo.src === 'object' ? promo.src.src : promo.src}
                            alt={promo.alt || promo.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-90 group-hover/card:opacity-100 transition-opacity duration-300" />
                        
                        <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 flex flex-col sm:flex-row sm:items-end justify-end sm:justify-between gap-3 sm:gap-4 h-full sm:h-auto">
                            <div className="flex-1 flex flex-col justify-end transform translate-y-2 group-hover/card:translate-y-0 transition-transform duration-300">
                                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-moto-white italic uppercase tracking-tighter drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] mb-2 leading-none">{promo.title}</h3>
                                <p className="text-moto-white/90 text-sm sm:text-base md:text-lg font-medium max-w-lg mb-2 sm:mb-0 line-clamp-3 sm:line-clamp-2">{promo.description}</p>
                            </div>
                            <div className="shrink-0 sm:text-right transform translate-y-2 group-hover/card:translate-y-0 transition-transform duration-300 delay-75">
                                <div className="text-moto-red font-black text-4xl sm:text-5xl md:text-6xl tracking-tighter drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">${promo.price}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Botón Derecha */}
            <button
                onClick={scrollNext}
                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 bg-moto-red text-moto-white p-3 md:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none`}
                aria-label="Siguiente promoción"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>

            <style>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
};

export default PromoSlider;
