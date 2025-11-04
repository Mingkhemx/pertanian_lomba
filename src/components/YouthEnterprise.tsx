import { Lightbulb, TrendingUp, Users, Rocket, Target, Briefcase, Award, ArrowRight } from 'lucide-react';

export function YouthEnterprise() {
  const entrepreneurImage = "https://images.unsplash.com/photo-1702468049239-49fd1cf99d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwYnVzaW5lc3MlMjB0ZWFtd29ya3xlbnwxfHx8fDE3NTk2NjUwOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  const youthFarmingImage = "https://images.unsplash.com/photo-1708794666324-85ad91989d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGZhcm1pbmclMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1OTY2NTA5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  const pillars = [
    {
      icon: Lightbulb,
      title: "Inovasi & Kreativitas",
      description: "Mendorong ide-ide segar yang menggabungkan tradisi dengan teknologi modern",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Briefcase,
      title: "Enterprise Learning",
      description: "Pembelajaran berbasis proyek nyata dengan pendekatan bisnis yang menguntungkan",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: TrendingUp,
      title: "Profit & Sustainability",
      description: "Menciptakan model bisnis yang profitable sekaligus berkelanjutan",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Komunitas Entrepreneur",
      description: "Jaringan pemuda yang saling mendukung dalam perjalanan wirausaha",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const successStories = [
    {
      name: "Budi Santoso, 24",
      achievement: "Membangun agritech startup dengan omzet 500jt/tahun",
      growth: "+350%",
      location: "Bandung, Jawa Barat"
    },
    {
      name: "Siti Nurhaliza, 22",
      achievement: "Mengembangkan hidroponik urban dengan 50+ mitra",
      growth: "+280%",
      location: "Yogyakarta"
    },
    {
      name: "Ahmad Rizky, 26",
      achievement: "Ekspor produk organik ke 5 negara Asia",
      growth: "+420%",
      location: "Malang, Jawa Timur"
    }
  ];

  return (
    <section id="enterprise" className="py-24 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 backdrop-blur-sm text-green-300 rounded-full text-sm mb-4 border border-green-500/30">
            <Rocket className="w-4 h-4" />
            <span>Pemberdayaan Generasi Muda</span>
          </div>
          <h2 className="text-4xl lg:text-5xl mb-6">
            Dari <span className="text-green-400">Petani Muda</span> Menjadi <span className="text-green-400">Entrepreneur Sukses</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            MERISTEM percaya bahwa masa depan pertanian Indonesia ada di tangan generasi muda yang berani berinovasi, 
            berwirausaha, dan menciptakan dampak ekonomi yang nyata
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img src={entrepreneurImage} alt="Young Entrepreneurs" className="w-full h-full object-cover" />
                </div>
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 shadow-2xl">
                  <div className="text-4xl mb-2">💡</div>
                  <div className="text-2xl">500+</div>
                  <div className="text-sm text-green-100">Startup Agritech</div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 shadow-2xl">
                  <div className="text-4xl mb-2">🚀</div>
                  <div className="text-2xl">85%</div>
                  <div className="text-sm text-blue-100">Success Rate</div>
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img src={youthFarmingImage} alt="Youth Farming" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white text-slate-900 rounded-2xl px-6 py-4 shadow-2xl">
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-green-600" />
                <div>
                  <div className="text-sm text-slate-600">Total Funding</div>
                  <div className="text-xl text-green-600">Rp 50+ Miliar</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl mb-4">Enterprise Learning: Belajar Sambil Berbisnis</h3>
              <p className="text-lg text-slate-300 mb-6">
                Kami tidak hanya mengajarkan teori, tetapi membimbing generasi muda untuk membangun bisnis pertanian 
                yang nyata, menguntungkan, dan berkelanjutan.
              </p>
            </div>

            {/* Pillars */}
            <div className="grid sm:grid-cols-2 gap-4">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <div 
                    key={index}
                    className="p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
                  >
                    <div className={`w-10 h-10 bg-gradient-to-br ${pillar.color} rounded-lg flex items-center justify-center mb-3`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg mb-2">{pillar.title}</h4>
                    <p className="text-sm text-slate-300">{pillar.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl mb-2">Misi Kami</h4>
                  <p className="text-slate-200">
                    Memberdayakan 10,000 pemuda Indonesia untuk menjadi agripreneur sukses pada tahun 2030, 
                    menciptakan lapangan kerja baru, dan meningkatkan kesejahteraan masyarakat pedesaan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl mb-4">Kisah Sukses <span className="text-green-400">Generasi Muda</span></h3>
            <p className="text-lg text-slate-300">Mereka membuktikan bahwa pertanian bisa menjadi bisnis yang menguntungkan</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center text-2xl">
                    👨‍🌾
                  </div>
                  <div className="px-3 py-1 bg-green-500 rounded-full text-sm">
                    {story.growth}
                  </div>
                </div>
                <h4 className="text-xl mb-2">{story.name}</h4>
                <p className="text-green-300 mb-3">{story.achievement}</p>
                <p className="text-sm text-slate-400">📍 {story.location}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-center shadow-2xl">
          <h3 className="text-3xl lg:text-4xl mb-4">Siap Menjadi Agripreneur Sukses?</h3>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan pemuda Indonesia yang telah mengubah hidup mereka melalui enterprise learning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-600 rounded-xl hover:bg-green-50 transition-all duration-200 shadow-lg hover:shadow-xl group">
              Mulai Program Enterprise
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white/10 transition-all duration-200">
              Lihat Success Stories
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/20">
            <div>
              <div className="text-3xl mb-1">3,200+</div>
              <div className="text-sm text-green-100">Alumni Entrepreneur</div>
            </div>
            <div>
              <div className="text-3xl mb-1">Rp 2.5M</div>
              <div className="text-sm text-green-100">Rata-rata Profit/bulan</div>
            </div>
            <div>
              <div className="text-3xl mb-1">150+</div>
              <div className="text-sm text-green-100">Kemitraan Perusahaan</div>
            </div>
            <div>
              <div className="text-3xl mb-1">95%</div>
              <div className="text-sm text-green-100">Tingkat Kepuasan</div>
            </div>
          </div>
        </div>

        {/* Bottom Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-4">
              <Lightbulb className="w-6 h-6 text-yellow-400" />
            </div>
            <h4 className="text-xl mb-3">Inkubator Bisnis</h4>
            <p className="text-slate-300">
              Pendampingan intensif dari mentor berpengalaman untuk mengembangkan ide menjadi bisnis yang profitable
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
              <Briefcase className="w-6 h-6 text-blue-400" />
            </div>
            <h4 className="text-xl mb-3">Akses Permodalan</h4>
            <p className="text-slate-300">
              Koneksi ke investor dan lembaga keuangan untuk mendukung pertumbuhan bisnis Anda
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-green-400" />
            </div>
            <h4 className="text-xl mb-3">Network & Kolaborasi</h4>
            <p className="text-slate-300">
              Bergabung dengan ekosistem entrepreneur yang saling mendukung dan membuka peluang baru
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
