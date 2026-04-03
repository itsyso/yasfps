"use client"

import { motion } from "framer-motion"
import { Instagram, Star, Quote } from "lucide-react"
import { StarField } from "@/components/star-field"

const testimonials = [
  {
    name: "@79_x",
    review: "بكل امانه افضل تويكر ف الساحه",
    rating: 5
  },
  {
    name: "@luionm",
    review: "خددمهه جدا ممتازه وتشوف فرق البي سي عن قبل بشكل مو طبيعي",
    rating: 5
  },
  {
    name: "@6t0",
    review: "صراحه شغل جبار ماشاءالله",
    rating: 5
  },
  {
    name: "@7lug",
    review: "تويك مره قوي انصحكم فيه",
    rating: 5
  },
  {
    name: "@6nwr",
    review: "افضل خدمة",
    rating: 5
  },
  {
    name: "@ojnsr",
    review: "لو جهازك تقيل و يجيك كراشات في الالعاب وتعليق مثلي في كود انصحك تسوي تويك مع الرجال ذا ماراح تندم",
    rating: 5
  },
  {
    name: "@dhf",
    review: "سويت عنده اكثر من 3 مرات الرجال محترم جداً وعارف شغلته ويستاهل كل خير والله",
    rating: 5
  },
  {
    name: "@l8ug",
    review: "الصراحة وبدون مجاملات تعاملت معه والرجال م قصر ضبطلي البي سي وخلاه افضل من اول بكثير الاستجابة صارت اسرع واللعب صار سموث",
    rating: 5
  },
  {
    name: "@wfsl",
    review: "اكيت انسان عرفته سريع ويفهم بسرعه والتويك حقه اسطوره",
    rating: 5
  },
  {
    name: "@b.4fx_",
    review: "والله انه افضل تويكر يرفع الاداء بشكل كبير انصح التعامل معه مضمون وسواه بسرعة ماتاخر",
    rating: 5
  },
  {
    name: "@gxo0o",
    review: "فنان جهازي كان يعلق ويبطئ في اقل من ساعة رجعلي الجهاز جديد",
    rating: 5
  },
  {
    name: "@stuffat1am",
    review: "ما شاء الله تبارك الرحمن البي سي صارله معي سنتين ورجعه مثل ما اشتريته انصحكم وبقوه",
    rating: 5
  },
  {
    name: "@yq3n",
    review: "فريماتي قبل 18 بعد ثابت 144 ويوصلن فوق 200",
    rating: 5
  },
  {
    name: "@23e_e",
    review: "ما شاء الله شغله فوق التقييم",
    rating: 5
  }
]

const services = [
  {
    title: "Hardware Repair",
    en: "Fix all PC hardware issues",
    ar: "تصليح جميع مشاكل الهاردوير",
    borderColor: "hover:border-red-500"
  },
  {
    title: "FPS Boost",
    en: "Max FPS & performance tweaks",
    ar: "رفع الفريمات وتحسين الأداء",
    borderColor: "hover:border-green-400"
  },
  {
    title: "Software Fix",
    en: "Windows & software repair",
    ar: "حل مشاكل النظام والبرامج",
    borderColor: "hover:border-blue-400"
  }
]

export default function YasFPSWebsite() {
  return (
    <div className="min-h-screen bg-black text-white font-sans relative">
      <StarField />
      {/* Header */}
      <header className="flex justify-between items-center p-6 border-b border-gray-800/50 sticky top-0 bg-black/70 backdrop-blur-md z-50 relative">
        <h1 className="text-3xl font-extrabold tracking-widest text-red-500">YAS FPS</h1>
        <nav className="hidden md:flex gap-6 text-sm text-gray-300">
          <a href="#services" className="hover:text-red-500 transition">Services</a>
          <a href="#about" className="hover:text-red-500 transition">About</a>
          <a href="#testimonials" className="hover:text-red-500 transition">Reviews</a>
          <a href="#contact" className="hover:text-red-500 transition">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative text-center py-32 px-6 overflow-hidden">

        <div className="relative z-10 py-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 text-white drop-shadow-2xl"
          >
            YAS FPS
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-200 mb-2 font-medium"
          >
            Professional PC Repair & Optimization
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 mb-8 text-lg"
            dir="rtl"
          >
            صيانة احترافية ورفع أداء الكمبيوتر
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="https://instagram.com/dn_r"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-black font-bold px-8 py-4 rounded-xl shadow-lg hover:scale-110 transition-transform active:scale-95"
            >
              Visit Instagram
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6 py-20 relative z-10">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div
              className={`bg-gray-900/80 backdrop-blur-sm border-2 border-gray-800/50 rounded-2xl shadow-xl p-8 text-center transition-all duration-300 ${service.borderColor}`}
            >
              <h3 className="text-2xl font-bold text-red-500 mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-2 text-lg">{service.en}</p>
              <p className="text-gray-500 text-sm" dir="rtl">{service.ar}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* About Section */}
      <section id="about" className="bg-black/50 py-20 border-y border-gray-800/50 relative z-10 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center px-6"
        >
          <h2 className="text-4xl font-bold text-red-500 mb-6">About YAS FPS</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            We specialize in gaming optimization, PC repair, and unlocking maximum performance for your machine.
          </p>
          <p className="text-gray-500 text-xl" dir="rtl">
            نحن متخصصون في تحسين أجهزة الألعاب، صيانة الكمبيوتر، وفتح أقصى إمكانيات جهازك لضمان أفضل تجربة لعب.
          </p>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-red-500 mb-4">آراء العملاء</h2>
          <p className="text-gray-400 text-lg">Customer Reviews</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900/80 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-red-500/20" />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              
              <p className="text-gray-300 text-lg mb-4" dir="rtl">
                {`"${testimonial.review}"`}
              </p>
              
              <p className="text-red-500 font-bold" dir="rtl">
                - {testimonial.name}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="text-center py-24 px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-red-500 mb-8">Contact Us</h2>
          <div className="flex justify-center">
            <a
              href="https://instagram.com/dn_r"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gradient-to-r from-pink-600 to-purple-600 px-10 py-5 rounded-2xl text-white font-black text-xl hover:scale-105 transition-all shadow-2xl shadow-purple-500/20 active:scale-95"
            >
              <Instagram className="w-6 h-6" />
              DM @dn_r
            </a>
          </div>
          <p className="text-gray-500 mt-6 text-lg" dir="rtl">
            تواصل معنا عبر الانستقرام للحجز والاستفسار
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-600 text-sm py-10 border-t border-gray-800/50 relative z-10 bg-black/50">
        <p>© 2026 YAS FPS | All Rights Reserved</p>
      </footer>
    </div>
  )
}
