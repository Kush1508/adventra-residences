import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageSquare, Phone, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function InquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    project: 'Bhava Tower (Sita Kund Bypass)',
    budget: '55 Lacs - 1 Crore',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#17233b', '#f8bbcb', '#c5a880'],
    });
    setSubmitted(true);

    // Prepare WhatsApp Message
    const text = encodeURIComponent(
      `*New VIP Inquiry - AdVentra Residences*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email}\n` +
      `*Project of Interest:* ${formData.project}\n` +
      `*Budget Range:* ${formData.budget}\n` +
      `*Notes:* ${formData.message || 'Please send brochure & floor plans.'}`
    );

    // Open WhatsApp in new tab after 800ms
    setTimeout(() => {
      window.open(`https://wa.me/916207282057?text=${text}`, '_blank');
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-ink/70 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg bg-linen rounded-3xl p-6 sm:p-10 shadow-2xl border border-ink/15 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-ink/10 text-ink/70 hover:text-ink transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-ink/50 block mb-1">
                Private Consultation
              </span>
              <h3 className="font-editorial text-3xl sm:text-4xl text-ink font-light tracking-tight">
                Inquire & Book a Tour
              </h3>
              <p className="text-xs sm:text-sm text-ink/70 mt-2 font-light">
                Connect with our executive sales desk. Inquiries are handled with complete confidentiality and immediate priority.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-[11px] uppercase tracking-wider font-mono text-ink/60 block mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Shashank Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-ink/15 text-sm text-ink focus:outline-none focus:border-ink transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] uppercase tracking-wider font-mono text-ink/60 block mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-ink/15 text-sm text-ink focus:outline-none focus:border-ink transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider font-mono text-ink/60 block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="kushk1508@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-ink/15 text-sm text-ink focus:outline-none focus:border-ink transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] uppercase tracking-wider font-mono text-ink/60 block mb-1">
                    Project of Interest
                  </label>
                  <select
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-white border border-ink/15 text-sm text-ink focus:outline-none focus:border-ink transition-colors"
                  >
                    <option value="Bhava Tower (Sita Kund Bypass)">Bhava Tower (G+10)</option>
                    <option value="Nawal Shiv Bhava Tower (AP Colony)">Nawal Shiv Bhava (AP Colony)</option>
                    <option value="Both Projects">Both Projects</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider font-mono text-ink/60 block mb-1">
                    Budget Preference
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-white border border-ink/15 text-sm text-ink focus:outline-none focus:border-ink transition-colors"
                  >
                    <option value="55 Lacs - 75 Lacs">₹55 Lacs - ₹75 Lacs</option>
                    <option value="75 Lacs - 1.25 Crore">₹75 Lacs - ₹1.25 Cr</option>
                    <option value="1.25 Crore+">₹1.25 Crore+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-wider font-mono text-ink/60 block mb-1">
                  Specific Requirements (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="Floor preference, commercial space inquiries, or site visit request..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl bg-white border border-ink/15 text-sm text-ink focus:outline-none focus:border-ink transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-ink text-linen text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 transition-all hover:bg-ink/90 active:scale-95 shadow-md mt-4"
              >
                <Send className="w-4 h-4" />
                <span>Submit & Connect on WhatsApp</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-editorial text-3xl text-ink font-light tracking-tight mb-2">
              Inquiry Dispatched
            </h3>
            <p className="text-sm text-ink/70 max-w-sm mx-auto mb-6 leading-relaxed">
              Thank you, <strong>{formData.name}</strong>. Your details have been sent to our sales desk. We are also connecting you via WhatsApp (+91 6207282057).
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={`https://wa.me/916207282057?text=Hello%2C%20I%20just%20submitted%20an%20inquiry%20for%20${encodeURIComponent(
                  formData.project
                )}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs uppercase tracking-widest flex items-center justify-center gap-2 font-semibold"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open WhatsApp Chat Now</span>
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full py-2.5 text-xs uppercase tracking-wider text-ink/60 hover:text-ink font-mono"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
