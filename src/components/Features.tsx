import { Brain, BookOpen, Users, Award, Lightbulb, TrendingUp } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Learning',
      description: 'Pembelajaran adaptif yang disesuaikan dengan kecepatan dan gaya belajar Anda',
      color: 'bg-blue-500',
    },
    {
      icon: BookOpen,
      title: 'Konten Berkualitas',
      description: 'Materi pembelajaran dari ahli pertanian dan teknologi terkini',
      color: 'bg-green-500',
    },
    {
      icon: Users,
      title: 'Komunitas Aktif',
      description: 'Bergabung dengan ribuan pelajar dan praktisi pertanian',
      color: 'bg-purple-500',
    },
    {
      icon: Award,
      title: 'Sertifikat Resmi',
      description: 'Dapatkan sertifikasi yang diakui industri setelah menyelesaikan kursus',
      color: 'bg-yellow-500',
    },
    {
      icon: Lightbulb,
      title: 'Praktik Langsung',
      description: 'Proyek nyata dan simulasi untuk pengalaman hands-on',
      color: 'bg-orange-500',
    },
    {
      icon: TrendingUp,
      title: 'Tracking Progress',
      description: 'Pantau perkembangan belajar Anda dengan analytics detail',
      color: 'bg-teal-500',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm mb-4">
            Fitur Unggulan
          </div>
          <h2 className="text-4xl text-slate-900 mb-4">
            Mengapa Memilih <span className="text-green-600">MERISTEM</span>?
          </h2>
          <p className="text-xl text-slate-600">
            Platform pembelajaran yang menggabungkan teknologi terkini dengan metode pengajaran terbaik
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 hover:border-green-300 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
