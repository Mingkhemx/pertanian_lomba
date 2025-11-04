import { Clock, Users, Star, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Courses() {
  const courses = [
    {
      title: 'Agripreneur Bootcamp',
      description: 'Program intensif untuk membangun startup agritech dari nol hingga profit pertama',
      duration: '12 Minggu',
      students: '3,450',
      rating: '4.9',
      level: 'Beginner',
      category: 'Enterprise',
      badge: '🚀 Popular',
    },
    {
      title: 'Smart Farming & IoT',
      description: 'Pelajari teknologi sensor, monitoring otomatis, dan IoT untuk pertanian modern',
      duration: '8 Minggu',
      students: '2,450',
      rating: '4.9',
      level: 'Intermediate',
      category: 'Teknologi',
    },
    {
      title: 'Business Model Pertanian',
      description: 'Merancang model bisnis pertanian yang profitable dan scalable',
      duration: '6 Minggu',
      students: '2,890',
      rating: '4.8',
      level: 'Intermediate',
      category: 'Enterprise',
      badge: '💡 New',
    },
    {
      title: 'Hidroponik Modern',
      description: 'Sistem hidroponik untuk urban farming dengan teknologi otomasi dan analisis ROI',
      duration: '5 Minggu',
      students: '3,120',
      rating: '4.9',
      level: 'Beginner',
      category: 'Praktik',
    },
    {
      title: 'AI dalam Pertanian',
      description: 'Implementasi artificial intelligence untuk prediksi hasil panen dan deteksi penyakit',
      duration: '10 Minggu',
      students: '1,560',
      rating: '4.7',
      level: 'Advanced',
      category: 'AI & Data',
    },
    {
      title: 'Marketing & Branding Produk Pertanian',
      description: 'Strategi pemasaran digital dan branding untuk produk pertanian modern',
      duration: '6 Minggu',
      students: '1,980',
      rating: '4.8',
      level: 'Intermediate',
      category: 'Enterprise',
      badge: '💼 Trending',
    },
  ];

  return (
    <section id="kursus" className="py-24 bg-gradient-to-br from-slate-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm mb-4">
            Kursus Populer
          </div>
          <h2 className="text-4xl text-slate-900 mb-4">
            Jelajahi Kursus <span className="text-green-600">Terbaik</span>
          </h2>
          <p className="text-xl text-slate-600">
            Pilih dari berbagai kursus yang dirancang untuk mengembangkan skill pertanian modern
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-green-300 hover:shadow-2xl transition-all duration-300"
            >
              <div className={`relative h-48 bg-gradient-to-br ${course.category === 'Enterprise' ? 'from-blue-400 to-indigo-600' : 'from-green-400 to-green-600'} overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20">{course.category === 'Enterprise' ? '💼' : '🌾'}</div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 bg-white/90 backdrop-blur-sm ${course.category === 'Enterprise' ? 'text-blue-700' : 'text-green-700'} rounded-full text-sm`}>
                    {course.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-700 rounded-full text-sm">
                    {course.level}
                  </span>
                </div>
                {course.badge && (
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-yellow-400 text-slate-900 rounded-full text-sm shadow-lg">
                      {course.badge}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl text-slate-900 mb-2 group-hover:text-green-600 transition-colors">
                  {course.title}
                </h3>
                <p className="text-slate-600 mb-6">{course.description}</p>

                <div className="flex items-center gap-4 mb-6 text-sm text-slate-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all duration-200 group-hover:shadow-lg">
                  Pelajari Lebih Lanjut
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-white text-green-600 border-2 border-green-600 rounded-xl hover:bg-green-50 transition-all duration-200">
            Lihat Semua Kursus
          </button>
        </div>
      </div>
    </section>
  );
}
