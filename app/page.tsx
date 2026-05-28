'use client';
import { useEffect, useState } from 'react';

export default function LandingMusicaPremium() {
  const [upsellSelected, setUpsellSelected] = useState(false);

  const basePrice = 19900;
  const upsellPrice = 14900;
  const total = upsellSelected ? basePrice + upsellPrice : basePrice;

  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 14,
    seconds: 33,
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Carlos M.',
      text: 'Por fin entendí armonía sin sentirme perdido. Todo está mucho más organizado.',
    },
    {
      name: 'Laura G.',
      text: 'Los ejercicios y ejemplos prácticos ayudan muchísimo para avanzar rápido.',
    },
    {
      name: 'Andrés P.',
      text: 'El contenido vale muchísimo más de lo que cuesta. Excelente material.',
    },
  ];

  const recentSales = [
    'Juan de Bogotá acaba de comprar',
    'Laura de Medellín acaba de comprar',
    'Andrés de Cali acaba de comprar',
  ];

  const [salePopup, setSalePopup] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;

          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;

            if (hours > 0) {
              hours--;
            }
          }
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(testimonialInterval);
  }, []);

  useEffect(() => {
    const popupInterval = setInterval(() => {
      setSalePopup((prev) =>
        prev === recentSales.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(popupInterval);
  }, []);

  const handleCheckout = async () => {
    alert('Aquí se conectará Wompi Checkout + automatización email + backend');

    // META PIXEL
    if (typeof window !== 'undefined' && (window as any).fbq) {
  (window as any).fbq('track', 'InitiateCheckout', {
    value: total,
    currency: 'COP',
  });
}

    // TIKTOK PIXEL
    if (typeof window !== 'undefined' && (window as any).ttq) {
  (window as any).ttq.track('InitiateCheckout', {
    value: total,
    currency: 'COP',
  });
}
  };
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-black to-black"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm mb-6">
              🎵 Oferta especial termina en:

              <span className="font-black text-white ml-2">
                {String(timeLeft.hours).padStart(2, '0')}:
                {String(timeLeft.minutes).padStart(2, '0')}:
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
              Aprende Música
              <span className="text-yellow-400 block">
                Entendiendo
              </span>
              Lo Que Tocas
            </h1>

            <p className="text-xl text-zinc-300 leading-relaxed mb-8 max-w-2xl">
              Domina armonía, acordes, progresiones y composición con el
              Sistema Completo de Armonía Musical.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                ✅ 44 libros digitales
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                ✅ Método paso a paso
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                ✅ Compatible con piano y guitarra
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                ✅ Acceso inmediato
              </div>
            </div>

            <div className="flex items-end gap-4 mb-8">
              <div>
                <p className="text-zinc-400 line-through text-xl">
                  $89.900 COP
                </p>
                <h2 className="text-5xl font-black text-yellow-400">
                  $19.900
                </h2>
              </div>

              <div className="bg-red-500 text-white px-4 py-2 rounded-xl font-bold mb-2">
                -78%
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a
                href="#checkout"
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-black text-lg px-8 py-5 rounded-2xl transition-all duration-300 text-center shadow-2xl shadow-yellow-500/20"
              >
                QUIERO ACCESO INMEDIATO
              </a>

              <a
                href="#contenido"
                className="border border-white/20 hover:border-yellow-400 hover:text-yellow-400 px-8 py-5 rounded-2xl font-semibold text-center transition-all duration-300"
              >
                VER TODO EL CONTENIDO
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400">
              <span>🔒 Pago 100% seguro</span>
              <span>⚡ Entrega automática</span>
              <span>📱 Compatible con celular</span>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-yellow-500/20 blur-3xl rounded-full"></div>

            <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-950 border border-yellow-500/20 rounded-3xl p-8 shadow-2xl shadow-yellow-500/10 rotate-2 hover:rotate-0 transition-all duration-500">
              <img
                src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop"
                alt="Musica"
                className="rounded-2xl mb-6 h-[420px] object-cover"
              />

              <div className="space-y-3">
                <div className="flex justify-between items-center bg-white/5 rounded-xl p-3">
                  <span>🎼 Armonía Musical</span>
                  <span className="text-green-400">Incluido</span>
                </div>

                <div className="flex justify-between items-center bg-white/5 rounded-xl p-3">
                  <span>🎹 Piano</span>
                  <span className="text-yellow-400">Upsell</span>
                </div>

                <div className="flex justify-between items-center bg-white/5 rounded-xl p-3">
                  <span>🎸 Guitarra</span>
                  <span className="text-yellow-400">Upsell</span>
                </div>

                <div className="flex justify-between items-center bg-white/5 rounded-xl p-3">
                  <span>🎤 Técnica Vocal</span>
                  <span className="text-yellow-400">Upsell</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOLORES */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            ¿Te pasa esto cuando intentas aprender música?
          </h2>

          <p className="text-zinc-400 text-xl mb-14 max-w-3xl mx-auto">
            La mayoría de personas abandona porque aprende de forma desordenada.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Ves tutoriales y terminas confundido',
              'Aprendes canciones pero no entiendes la teoría',
              'Memorizas acordes sin comprenderlos',
              'Sientes que avanzar toma demasiado tiempo',
            ].map((item, index) => (
              <div
                key={index}
                className="bg-black border border-red-500/20 rounded-3xl p-8"
              >
                <div className="text-5xl mb-4">❌</div>
                <p className="text-lg text-zinc-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUCION */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1514119412350-e174d90d280e?q=80&w=1200&auto=format&fit=crop"
              alt="Piano"
              className="rounded-3xl shadow-2xl"
            />
          </div>

          <div>
            <div className="inline-block bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 px-4 py-2 rounded-full mb-6">
              SISTEMA COMPLETO
            </div>

            <h2 className="text-5xl font-black mb-8 leading-tight">
              Aprende armonía de forma clara y organizada
            </h2>

            <div className="space-y-5 text-lg text-zinc-300">
              <div className="flex gap-4">
                <span className="text-green-400 text-2xl">✓</span>
                <p>Entiende progresiones, escalas y acordes desde cero.</p>
              </div>

              <div className="flex gap-4">
                <span className="text-green-400 text-2xl">✓</span>
                <p>Aprende teoría aplicada al piano, guitarra y composición.</p>
              </div>

              <div className="flex gap-4">
                <span className="text-green-400 text-2xl">✓</span>
                <p>Estudia a tu ritmo desde celular, computador o tablet.</p>
              </div>

              <div className="flex gap-4">
                <span className="text-green-400 text-2xl">✓</span>
                <p>Accede al contenido inmediatamente después de pagar.</p>
              </div>
            </div>

            <a
              href="#checkout"
              className="inline-block mt-10 bg-yellow-400 hover:bg-yellow-300 text-black font-black text-lg px-8 py-5 rounded-2xl transition-all duration-300"
            >
              QUIERO APRENDER MÚSICA
            </a>
          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <section id="contenido" className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6">
              Todo lo que incluye el sistema
            </h2>

            <p className="text-zinc-400 text-xl max-w-3xl mx-auto">
              Más de 44 libros digitales organizados desde nivel básico hasta avanzado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Armonía Moderna',
              'Escalas Musicales',
              'Acordes y Progresiones',
              'Improvisación',
              'Composición Musical',
              'Entrenamiento Auditivo',
              'Técnicas de Arreglo',
              'Teoría Musical',
              'Aplicación Práctica',
            ].map((item, index) => (
              <div
                key={index}
                className="bg-black border border-white/10 rounded-3xl p-8 hover:border-yellow-500/30 transition-all duration-300"
              >
                <div className="text-4xl mb-5">🎼</div>
                <h3 className="text-2xl font-bold mb-3">{item}</h3>
                <p className="text-zinc-400">
                  Material organizado paso a paso para aprender de manera práctica.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UPSELL */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-br from-yellow-500/10 to-black border border-yellow-500/20 rounded-[40px] p-10 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-red-500 text-white px-4 py-2 rounded-full font-bold mb-6">
                  OFERTA ESPECIAL
                </div>

                <h2 className="text-5xl font-black mb-6 leading-tight">
                  Completa tu formación musical
                </h2>

                <p className="text-zinc-300 text-xl mb-8">
                  Agrega los packs de Piano, Guitarra y Técnica Vocal por un precio exclusivo.
                </p>

                <div className="space-y-4 text-lg">
                  <div>🎹 Piano práctico desde cero</div>
                  <div>🎸 Guitarra moderna</div>
                  <div>🎤 Técnica vocal y canto</div>
                </div>
              </div>

              <div className="bg-black border border-yellow-500/20 rounded-3xl p-10 text-center">
                <p className="text-zinc-400 line-through text-2xl mb-2">
                  $49.900 COP
                </p>

                <h3 className="text-6xl font-black text-yellow-400 mb-4">
                  $14.900
                </h3>

                <p className="text-zinc-300 mb-8 text-lg">
                  Solo disponible al comprar el Sistema Completo.
                </p>

                <button
                  onClick={() => setUpsellSelected(!upsellSelected)}
                  className={`w-full font-black text-lg py-5 rounded-2xl transition-all duration-300 ${
                    upsellSelected
                      ? 'bg-green-500 hover:bg-green-400 text-white'
                      : 'bg-yellow-400 hover:bg-yellow-300 text-black'
                  }`}
                >
                  {upsellSelected
                    ? '✓ PACK AGREGADO AL CARRITO'
                    : 'AGREGAR A MI COMPRA'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6">
              Lo que dicen nuestros estudiantes
            </h2>

            <p className="text-zinc-400 text-xl">
              Miles de personas ya están aprendiendo música con este sistema.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-black border border-white/10 rounded-[40px] p-10 text-center transition-all duration-500">
              <div className="text-yellow-400 text-4xl mb-6">★★★★★</div>

              <p className="text-2xl text-zinc-300 leading-relaxed mb-8">
                “{testimonials[currentTestimonial].text}”
              </p>

              <div className="text-xl font-bold mb-8">
                {testimonials[currentTestimonial].name}
              </div>

              <div className="flex justify-center gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentTestimonial === index
                        ? 'bg-yellow-400'
                        : 'bg-white/20'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHECKOUT */}
      <section id="checkout" className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-zinc-900 to-black border border-yellow-500/20 rounded-[40px] p-10 lg:p-16 text-center">
            <div className="inline-block bg-green-500/10 border border-green-500/20 text-green-400 px-5 py-2 rounded-full mb-6">
              🔒 Pago seguro y acceso inmediato
            </div>

            <h2 className="text-5xl font-black mb-6">
              Empieza Hoy Tu Formación Musical
            </h2>

            <p className="text-zinc-300 text-xl max-w-2xl mx-auto mb-10">
              Obtén acceso completo inmediatamente después de realizar tu pago.
            </p>

            <div className="bg-black border border-white/10 rounded-3xl p-8 mb-10 max-w-2xl mx-auto text-left">
              <div className="flex justify-between py-4 border-b border-white/10">
                <span>Sistema Completo de Armonía Musical</span>
                <span>$19.900</span>
              </div>

              {upsellSelected && (
                <div className="flex justify-between py-4 border-b border-white/10">
                  <span>Upsell Piano + Guitarra + Canto</span>
                  <span>$14.900</span>
                </div>
              )}

              <div className="flex justify-between py-5 text-2xl font-black text-yellow-400">
                <span>Total</span>
                <span>
                  ${total.toLocaleString('es-CO')} COP
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
              {['PSE', 'WOMPI', 'NEQUI', 'BANCOLOMBIA', 'TARJETAS'].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-2xl py-4 font-bold"
                >
                  {item}
                </div>
              ))}
            </div>

            <button
              onClick={handleCheckout}
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-black text-xl px-12 py-6 rounded-2xl transition-all duration-300 shadow-2xl shadow-yellow-500/20"
            >
              PAGAR AHORA
            </button>

            <p className="text-zinc-500 mt-6 text-sm">
              Al completar tu pago recibirás automáticamente el acceso en tu correo electrónico.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6">
              Preguntas Frecuentes
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: '¿Cómo recibo el material?',
                a: 'Recibirás automáticamente un correo con los links privados después de realizar el pago.',
              },
              {
                q: '¿Sirve para principiantes?',
                a: 'Sí. El contenido está organizado desde nivel básico hasta avanzado.',
              },
              {
                q: '¿Puedo verlo desde el celular?',
                a: 'Sí. Todo el material es compatible con celular, tablet y computador.',
              },
              {
                q: '¿El acceso es inmediato?',
                a: 'Sí. El sistema entrega automáticamente el acceso después de aprobarse el pago.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-black border border-white/10 rounded-3xl p-8"
              >
                <h3 className="text-2xl font-bold mb-4">{item.q}</h3>
                <p className="text-zinc-400 text-lg">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      {/* POPUP VENTAS */}
      <div className="fixed bottom-24 left-4 z-50 bg-zinc-900 border border-yellow-500/20 rounded-2xl px-5 py-4 shadow-2xl animate-pulse max-w-xs">
        <p className="text-sm text-white">
          🔥 {recentSales[salePopup]}
        </p>
      </div>

      {/* WHATSAPP FLOAT BUTTON */}
      <a
        href="https://wa.me/573006116047?text=Hola%20quiero%20informaci%C3%B3n%20sobre%20el%20Sistema%20Completo%20de%20Armon%C3%ADa%20Musical"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-4 z-50 bg-green-500 hover:bg-green-400 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-8 h-8 fill-current"
        >
          <path d="M16.002 3C8.821 3 3 8.821 3 16c0 2.822.902 5.432 2.434 7.559L3 29l5.602-2.359A12.94 12.94 0 0016.002 29C23.18 29 29 23.179 29 16S23.18 3 16.002 3zm0 23.625a10.57 10.57 0 01-5.391-1.484l-.387-.23-3.324 1.398.707-3.238-.25-.398A10.58 10.58 0 015.375 16c0-5.859 4.766-10.625 10.627-10.625 5.855 0 10.623 4.766 10.623 10.625S21.857 26.625 16.002 26.625zm5.82-7.953c-.32-.16-1.891-.934-2.184-1.039-.293-.105-.508-.16-.723.16-.215.32-.828 1.039-1.016 1.254-.188.215-.375.242-.695.082-.32-.16-1.352-.5-2.574-1.594-.949-.848-1.59-1.895-1.777-2.215-.188-.32-.02-.492.141-.652.145-.145.32-.375.48-.563.16-.188.215-.32.32-.535.105-.215.055-.402-.027-.563-.082-.16-.723-1.742-.992-2.387-.262-.629-.527-.543-.723-.555l-.617-.012c-.215 0-.563.082-.855.402-.293.32-1.121 1.094-1.121 2.668 0 1.574 1.148 3.094 1.309 3.309.16.215 2.258 3.449 5.473 4.836.766.332 1.363.531 1.828.68.77.246 1.469.211 2.023.129.617-.094 1.891-.773 2.156-1.52.266-.746.266-1.387.188-1.52-.078-.133-.293-.215-.613-.375z" />
        </svg>
      </a>

      {/* STICKY CTA MOBILE */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 border-t border-yellow-500/20 p-4 md:hidden backdrop-blur-xl">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-zinc-400 text-xs">Oferta HOY</p>
            <p className="text-yellow-400 text-2xl font-black">
              ${total.toLocaleString('es-CO')}
            </p>
          </div>

          <button
            onClick={handleCheckout}
            className="bg-yellow-400 text-black font-black px-6 py-4 rounded-2xl text-sm"
          >
            COMPRAR
          </button>
        </div>
      </div>

      <footer className="border-t border-white/10 py-10 text-center text-zinc-500 px-6">
        <p>
          © 2026 Sistema Completo de Armonía Musical • Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
