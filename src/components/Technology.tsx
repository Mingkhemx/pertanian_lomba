import { Smartphone, Cloud, Database, Cpu, Wifi, Zap } from 'lucide-react';

export function Technology() {
  const technologies = [
    {
      icon: Cpu,
      title: 'Machine Learning',
      description: 'Prediksi hasil panen dan deteksi penyakit tanaman',
    },
    {
      icon: Wifi,
      title: 'IoT Sensors',
      description: 'Monitoring real-time kelembaban, suhu, dan nutrisi',
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Akses data dan analisis dari mana saja',
    },
    {
      icon: Database,
      title: 'Big Data Analytics',
      description: 'Analisis data untuk optimalisasi hasil',
    },
    {
      icon: Smartphone,
      title: 'Mobile App',
      description: 'Kontrol dan monitoring lewat smartphone',
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Sistem otomasi untuk efisiensi maksimal',
    },
  ];

  return (
    <section id="teknologi" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-green-600/20 text-green-400 rounded-full text-sm mb-4">
            Teknologi Kami
          </div>
          <h2 className="text-4xl mb-4">
            Didukung oleh <span className="text-green-400">Teknologi Terkini</span>
          </h2>
          <p className="text-xl text-slate-300">
            Memanfaatkan teknologi canggih untuk pengalaman pembelajaran yang optimal
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-green-500 hover:bg-slate-800 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-green-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600/30 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-7 h-7 text-green-400" />
                </div>
                <h3 className="text-xl mb-3 text-white">{tech.title}</h3>
                <p className="text-slate-400">{tech.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-4 gap-8 p-8 bg-green-600/10 backdrop-blur-sm rounded-2xl border border-green-600/20">
          <div className="text-center">
            <div className="text-4xl text-green-400 mb-2">99.9%</div>
            <div className="text-slate-300">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-green-400 mb-2">24/7</div>
            <div className="text-slate-300">Support</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-green-400 mb-2">1M+</div>
            <div className="text-slate-300">Data Points</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-green-400 mb-2">50+</div>
            <div className="text-slate-300">Integrations</div>
          </div>
        </div>
      </div>
    </section>
  );
}
