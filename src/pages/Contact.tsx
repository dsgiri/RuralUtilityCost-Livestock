import { useState } from 'react';
import { SEO } from '../components/seo/SEO';

export function Contact() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', topic: 'Tool Support & Formulas', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'click', { element: 'contact_submit_button' });
    }

    if (validate()) {
      setSubmitted(true);
      setFormData({ firstName: '', lastName: '', email: '', topic: 'Tool Support & Formulas', message: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
    if (errors[e.target.id]) {
      setErrors(prev => ({ ...prev, [e.target.id]: undefined } as any));
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 w-full">
      <SEO 
        title="Contact Support" 
        description="Get help with the Livestock Hub calculators, request features, or ask about the Rural Utility Cost ecosystem." 
        canonicalPath="/contact"
      />
      <h1 className="text-3xl font-bold text-slate-900 mb-6">Contact Us</h1>
      <p className="text-lg text-slate-600 mb-8">
        Have questions about the Livestock tools or the Rural Utility Cost ecosystem? We're here to help.
      </p>

      {submitted ? (
        <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-8 text-center" role="alert">
          <h2 className="text-xl font-bold mb-2">Message Sent!</h2>
          <p>Thank you for reaching out. We will get back to you shortly.</p>
          <button 
            type="button" 
            onClick={() => setSubmitted(false)}
            className="mt-6 inline-flex bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 min-h-[48px] rounded-md transition-colors w-full sm:w-auto items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 shadow-sm">
          <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">First Name <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  id="firstName" 
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full min-h-[48px] rounded-md shadow-sm border p-3 text-slate-900 focus:outline-none focus:ring-2 ${errors.firstName ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-500'}`} 
                  placeholder="Jane"
                  aria-invalid={!!errors.firstName}
                  aria-describedby={errors.firstName ? "firstName-error" : undefined}
                />
                {errors.firstName && <p className="mt-1 text-sm text-red-500 font-medium" id="firstName-error">{errors.firstName}</p>}
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">Last Name <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  id="lastName" 
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full min-h-[48px] rounded-md shadow-sm border p-3 text-slate-900 focus:outline-none focus:ring-2 ${errors.lastName ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-500'}`} 
                  placeholder="Doe"
                  aria-invalid={!!errors.lastName}
                  aria-describedby={errors.lastName ? "lastName-error" : undefined}
                />
                {errors.lastName && <p className="mt-1 text-sm text-red-500 font-medium" id="lastName-error">{errors.lastName}</p>}
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address <span className="text-red-500">*</span></label>
              <input 
                type="email" 
                id="email" 
                value={formData.email}
                onChange={handleChange}
                className={`w-full min-h-[48px] rounded-md shadow-sm border p-3 text-slate-900 focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-500'}`} 
                placeholder="jane@example.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && <p className="mt-1 text-sm text-red-500 font-medium" id="email-error">{errors.email}</p>}
            </div>
            
            <div>
              <label htmlFor="topic" className="block text-sm font-medium text-slate-700 mb-1">Topic</label>
              <select 
                id="topic" 
                value={formData.topic}
                onChange={handleChange}
                className="w-full min-h-[48px] rounded-md shadow-sm border-slate-300 border p-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="Tool Support & Formulas">Tool Support & Formulas</option>
                <option value="Feature Request">Feature Request</option>
                <option value="Ecosystem Inquiry">Ecosystem Inquiry</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message <span className="text-red-500">*</span></label>
              <textarea 
                id="message" 
                rows={4} 
                value={formData.message}
                onChange={handleChange}
                className={`w-full rounded-md shadow-sm border p-3 text-slate-900 focus:outline-none focus:ring-2 ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-500'}`}
                placeholder="How can we help you?"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              ></textarea>
              {errors.message && <p className="mt-1 text-sm text-red-500 font-medium" id="message-error">{errors.message}</p>}
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 min-h-[48px] rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
