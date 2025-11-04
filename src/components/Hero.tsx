import { ArrowRight, Play } from 'lucide-react';
import logoImage from 'figma:asset/bd99da92dd9f5ac7a180da855b18f1afa56eac0a.png';

export function Hero() {
  const ruralBgImage = "https://images.unsplash.com/photo-1670922757779-9472463fe234?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMHJpY2UlMjBmaWVsZHxlbnwxfHx8fDE3NTk2NjQ0MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  return (
    <section id="beranda" className="relative overflow-hidden pt-12 pb-32">
      {/* Background Image - Rural Scene */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${ruralBgImage})`,
          }}
        />
        {/* Overlay Gradient - untuk readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-green-50/95" />
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Brand Logo Showcase */}
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-block">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-green-400/20 blur-3xl rounded-full transform scale-150" />
              {/* Logo */}
              <img 
                src={logoImage} 
                alt="MERISTEM - Where the Future Grows, Technology Leads" 
                className="h-24 sm:h-28 lg:h-32 w-auto mx-auto relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
            Platform Pembelajaran Pertanian Modern Berbasis Teknologi
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm">Platform Pembelajaran Terdepan</span>
            </div>

            <h1 className="text-4xl lg:text-5xl text-slate-900">
              Masa Depan Pertanian Dimulai dari <span className="text-green-600">Ilmu Pengetahuan</span> dan <span className="text-green-600">Teknologi</span>
            </h1>

            <p className="text-xl text-slate-600 max-w-xl">
              Pelajari teknologi pertanian modern dengan metode pembelajaran interaktif, 
              didukung AI dan konten berkualitas tinggi dari para ahli.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 px-8 py-4 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl group">
                Mulai Sekarang
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center gap-2 px-8 py-4 bg-white text-slate-700 rounded-xl hover:bg-slate-50 transition-all duration-200 shadow-md border border-slate-200">
                <Play className="w-5 h-5" />
                Tonton Demo
              </button>
            </div>

            {/* Stats with Rural Theme */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-green-200 shadow-sm">
                <div className="text-3xl text-green-600">10K+</div>
                <div className="text-sm text-slate-600">Petani Mitra</div>
              </div>
              <div className="p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-green-200 shadow-sm">
                <div className="text-3xl text-green-600">50+</div>
                <div className="text-sm text-slate-600">Desa Binaan</div>
              </div>
              <div className="p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-green-200 shadow-sm">
                <div className="text-3xl text-green-600">95%</div>
                <div className="text-sm text-slate-600">Hasil Meningkat</div>
              </div>
            </div>

            {/* Rural Story Elements */}
            <div className="mt-8 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-green-200 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🌾</div>
                <div>
                  <h3 className="text-slate-900 mb-2">Dari Sawah ke Teknologi</h3>
                  <p className="text-sm text-slate-600">
                    Kami memahami tantangan petani Indonesia. Platform ini dirancang untuk membawa 
                    teknologi modern ke setiap sudut pedesaan, memberdayakan petani dengan pengetahuan 
                    dan alat yang tepat untuk masa depan pertanian yang lebih baik.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white rounded-2xl p-6 space-y-4 transform -rotate-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">Kursus Aktif</div>
                      <div className="text-slate-900">Smart Farming</div>
                    </div>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '75%' }} />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Progress</span>
                    <span className="text-green-600">75%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-10 -right-10 bg-white rounded-2xl p-4 shadow-xl animate-bounce">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500 rounded-lg" />
                <div className="text-sm text-slate-700">AI Learning</div>
              </div>
            </div>

            <div className="absolute -bottom-5 left-10 bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-2">
                <div className="text-2xl">🌱</div>
                <div className="text-sm text-slate-700">Smart Agriculture</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
