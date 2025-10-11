export default function Hero() {
  return (
    <section className="bg-brand-lightgreen text-brand-darkblue py-20 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Build your own AI Assistant — no code, just power
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
        Evolvian AI helps you turn documents into intelligent support. Launch your custom RAG assistant in minutes — for clients, users, or internal teams.
      </p>
      <a href="#contact">
        <button className="bg-brand-orange text-white px-6 py-3 rounded-lg text-lg font-medium hover:opacity-90 transition">
          Get Started
        </button>
      </a>
    </section>
  );
}
