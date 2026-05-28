export default function GraciasPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-2xl w-full bg-zinc-900 border border-yellow-500/20 rounded-[40px] p-10 text-center">

        <div className="text-6xl mb-6">🎉</div>

        <h1 className="text-5xl font-black mb-6 text-yellow-400">
          ¡Gracias por tu compra!
        </h1>

        <p className="text-zinc-300 text-xl mb-10 leading-relaxed">
          Ya puedes acceder al Sistema Completo de Armonía Musical.
        </p>

        <a
          href="https://drive.google.com/drive/folders/1QMgwlt25gbQjFzZ_akRbGaY3LK7WIpMe?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-black text-xl px-10 py-5 rounded-2xl transition-all duration-300"
        >
          DESCARGAR MATERIAL
        </a>

        <div className="mt-10">
          <a
            href="https://wa.me/573006116047"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 text-lg"
          >
            ¿Necesitas ayuda? Escríbenos por WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
}