import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Calendar, Clock, Users, Mail, User } from 'lucide-react';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '2'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate booking reservation
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        guests: '2'
      });
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-12 lg:px-24 bg-[#24142E] relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute left-[-10%] bottom-[-10%] w-[45%] h-[45%] rounded-full bg-[#63327D]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch justify-between gap-16">
        
        {/* Left Column: Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-[45%] flex flex-col justify-center text-left"
        >
          <span className="text-[#D4AF37] text-xs font-semibold tracking-[0.3em] uppercase block mb-4">
            Book Your Table
          </span>
          
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-light text-[#F5F5F5] mb-6 leading-tight">
            RESERVE YOUR <br />
            <span className="italic font-normal text-[#D4AF37]">SPOTLIGHT</span>
          </h2>
          
          <p className="text-[#F5F5F5]/70 text-base md:text-lg font-light leading-relaxed mb-12 max-w-md">
            Great experiences are meant to be shared. Book your table now and be part of the Drama at Connaught Place.
          </p>

          <div className="space-y-8">
            {/* Phone */}
            <a
              href="tel:09560999779"
              className="flex items-center space-x-4 group text-[#F5F5F5]/85 hover:text-[#D4AF37] transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:border-[#D4AF37] group-hover:bg-[#63327D]/20 transition-all duration-300">
                <Phone size={18} className="text-[#D4AF37]" />
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest text-[#F5F5F5]/40 mb-0.5">Phone Number</span>
                <span className="text-base sm:text-lg font-medium">095609 99779</span>
              </div>
            </a>

            {/* Address */}
            <div className="flex items-start space-x-4 text-[#F5F5F5]/85">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 mt-1">
                <MapPin size={18} className="text-[#D4AF37]" />
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest text-[#F5F5F5]/40 mb-0.5">Location Address</span>
                <span className="text-base font-light leading-relaxed">
                  Scindia House, 14 KG Marg, <br />
                  Atul Grove Road, Janpath, <br />
                  Connaught Place, New Delhi, Delhi 110001
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Luxury Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-[50%] bg-[#1A1023]/60 backdrop-blur-md border border-white/5 p-8 sm:p-10 rounded-sm relative"
        >
          {isSubmitted ? (
            <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-16 h-16 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] bg-[#63327D]/20 mb-6"
              >
                ✓
              </motion.div>
              <h3 className="font-playfair text-2xl text-[#F5F5F5] mb-3">Reservation Requested</h3>
              <p className="text-sm text-[#F5F5F5]/60 max-w-sm leading-relaxed">
                Thank you, {formData.name}. We have received your request for {formData.guests} guests on {formData.date} at {formData.time}. A host will confirm your booking shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Full Name */}
                <div className="relative group">
                  <span className="absolute left-0 bottom-3 text-white/30 group-focus-within:text-[#D4AF37] transition-colors">
                    <User size={16} />
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Full Name"
                    className="bg-transparent border-b border-white/20 focus:border-[#D4AF37] py-3 pl-7 pr-2 text-sm focus:outline-none w-full transition-colors font-light text-[#F5F5F5] placeholder:text-white/30"
                  />
                </div>

                {/* Phone Number */}
                <div className="relative group">
                  <span className="absolute left-0 bottom-3 text-white/30 group-focus-within:text-[#D4AF37] transition-colors">
                    <Phone size={16} />
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Phone Number"
                    className="bg-transparent border-b border-white/20 focus:border-[#D4AF37] py-3 pl-7 pr-2 text-sm focus:outline-none w-full transition-colors font-light text-[#F5F5F5] placeholder:text-white/30"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="relative group">
                <span className="absolute left-0 bottom-3 text-white/30 group-focus-within:text-[#D4AF37] transition-colors">
                  <Mail size={16} />
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email Address"
                  className="bg-transparent border-b border-white/20 focus:border-[#D4AF37] py-3 pl-7 pr-2 text-sm focus:outline-none w-full transition-colors font-light text-[#F5F5F5] placeholder:text-white/30"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Select Date */}
                <div className="relative group">
                  <span className="absolute left-0 bottom-3 text-white/30 group-focus-within:text-[#D4AF37] transition-colors z-10">
                    <Calendar size={16} />
                  </span>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="bg-transparent border-b border-white/20 focus:border-[#D4AF37] py-3 pl-7 pr-2 text-sm focus:outline-none w-full transition-colors font-light text-[#F5F5F5] placeholder:text-white/30 relative z-2"
                  />
                </div>

                {/* Select Time */}
                <div className="relative group">
                  <span className="absolute left-0 bottom-3 text-white/30 group-focus-within:text-[#D4AF37] transition-colors">
                    <Clock size={16} />
                  </span>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="bg-transparent border-b border-white/20 focus:border-[#D4AF37] py-3 pl-7 pr-2 text-sm focus:outline-none w-full transition-colors font-light text-[#F5F5F5] placeholder:text-white/30"
                  >
                    <option value="" disabled className="bg-[#1A1023] text-white/30">Select Time</option>
                    <option value="12:00 PM" className="bg-[#1A1023] text-white">12:00 PM</option>
                    <option value="1:30 PM" className="bg-[#1A1023] text-white">1:30 PM</option>
                    <option value="3:00 PM" className="bg-[#1A1023] text-white">3:00 PM</option>
                    <option value="6:00 PM" className="bg-[#1A1023] text-white">6:00 PM</option>
                    <option value="7:30 PM" className="bg-[#1A1023] text-white">7:30 PM</option>
                    <option value="9:00 PM" className="bg-[#1A1023] text-white">9:00 PM</option>
                    <option value="10:30 PM" className="bg-[#1A1023] text-white">10:30 PM</option>
                    <option value="11:30 PM" className="bg-[#1A1023] text-white">11:30 PM</option>
                  </select>
                </div>
              </div>

              {/* No. of Guests */}
              <div className="relative group">
                <span className="absolute left-0 bottom-3 text-white/30 group-focus-within:text-[#D4AF37] transition-colors">
                  <Users size={16} />
                </span>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-b border-white/20 focus:border-[#D4AF37] py-3 pl-7 pr-2 text-sm focus:outline-none w-full transition-colors font-light text-[#F5F5F5] placeholder:text-white/30"
                >
                  <option value="1" className="bg-[#1A1023] text-white">1 Guest</option>
                  <option value="2" className="bg-[#1A1023] text-white">2 Guests</option>
                  <option value="3" className="bg-[#1A1023] text-white">3 Guests</option>
                  <option value="4" className="bg-[#1A1023] text-white">4 Guests</option>
                  <option value="5" className="bg-[#1A1023] text-white">5 Guests</option>
                  <option value="6" className="bg-[#1A1023] text-white">6 Guests</option>
                  <option value="8" className="bg-[#1A1023] text-white">8 Guests</option>
                  <option value="10+" className="bg-[#1A1023] text-white">10+ Guests</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-[#F6F2EB] text-[#1A1023] hover:bg-[#D4AF37] hover:text-[#1A1023] text-xs font-semibold uppercase tracking-widest transition-all duration-300 btn-glow-gold rounded-none mt-8"
              >
                Reserve Now
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
