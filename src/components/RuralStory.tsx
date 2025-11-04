import { Sprout, Users, Heart, TrendingUp } from 'lucide-react';

export function RuralStory() {
  const ruralImage = "https://images.unsplash.com/photo-1632741878777-464bc17d0923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGZhcm1sYW5kJTIwY291bnRyeXNpZGV8ZW58MXx8fHwxNzU5NjY0NDAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  const stories = [
    {
      icon: Sprout,
      title: "Berakar dari Tradisi",
      description: "Menghormati kebijaksanaan nenek moyang sambil merangkul inovasi teknologi modern"
    },
    {
      icon: Users,
      title: "Memberdayakan Komunitas",
      description: "Membangun jaringan petani yang saling mendukung dan berbagi pengetahuan"
    },
    {
      icon: Heart,
      title: "Peduli Lingkungan",
      description: "Praktik berkelanjutan untuk menjaga kesuburan tanah dan kelestarian alam"
    },
    {
      icon: TrendingUp,
      title: "Meningkatkan Hasil",
      description: "Memaksimalkan produktivitas dengan pendekatan berbasis data dan sains"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-green-50 to-emerald-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-600/10 text-green-700 rounded-full text-sm mb-4">
            Cerita Kami
          </div>
          <h2 className="text-4xl text-slate-900 mb-4">
            Dari Pedesaan, <span className="text-green-600">Untuk Indonesia</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Perjalanan kami dimulai dari sawah yang menghijau, di mana setiap benih yang ditanam 
            adalah harapan untuk masa depan yang lebih baik
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={ruralImage} 
                alt="Suasana Pedesaan Indonesia" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-green-100">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center">
                  <span className="text-3xl">🌱</span>
                </div>
                <div>
                  <div className="text-2xl text-green-600">1000+</div>
                  <div className="text-sm text-slate-600">Hektar Lahan</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <div className="prose prose-lg">
              <p className="text-slate-700">
                Di hamparan sawah yang membentang hijau, di bawah langit biru Indonesia, 
                kami membangun jembatan antara kearifan lokal dan teknologi global. 
              </p>
              <p className="text-slate-700">
                Setiap pagi, petani Indonesia bangun dengan harapan untuk panen yang lebih baik. 
                MERISTEM hadir untuk mewujudkan harapan itu melalui edukasi, teknologi, dan kolaborasi.
              </p>
              <p className="text-slate-700">
                Dari desa ke desa, dari sawah ke sawah, kami percaya bahwa masa depan pertanian 
                Indonesia berada di tangan mereka yang berani belajar dan berinovasi.
              </p>
            </div>
          </div>
        </div>

        {/* Story Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stories.map((story, index) => {
            const Icon = story.icon;
            return (
              <div 
                key={index}
                className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-green-200 hover:border-green-400 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg text-slate-900 mb-2">{story.title}</h3>
                <p className="text-sm text-slate-600">{story.description}</p>
              </div>
            );
          })}
        </div>

        {/* Quote Section */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto p-8 bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl text-white shadow-2xl">
            <div className="text-6xl mb-4 opacity-50">"</div>
            <blockquote className="text-2xl mb-6 italic">
              Teknologi tanpa kebijaksanaan adalah hampa, 
              tetapi tradisi tanpa inovasi adalah stagnan.
              Kami menggabungkan keduanya untuk Indonesia yang lebih hijau.
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full" />
              <div className="text-left">
                <div>Tim MERISTEM</div>
                <div className="text-sm opacity-80">Platform Pembelajaran Pertanian</div>
              </div>
            </div>
          </div>
        </div>

        {/* Teaser to Youth Enterprise */}
        <div className="mt-16 text-center">
          <div className="inline-block px-4 py-2 bg-slate-900/10 text-slate-700 rounded-full text-sm mb-4">
            ✨ Cerita Selanjutnya
          </div>
          <h3 className="text-3xl text-slate-900 mb-4">
            Bagaimana Kami Memberdayakan <span className="text-green-600">Generasi Muda?</span>
          </h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Lihat bagaimana MERISTEM mengubah mimpi pemuda Indonesia menjadi bisnis pertanian yang menguntungkan
          </p>
        </div>
      </div>
    </section>
  );
}
