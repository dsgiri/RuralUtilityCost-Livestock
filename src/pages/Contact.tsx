import { Helmet } from 'react-helmet-async';

export function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Helmet>
        <title>Contact | Livestock Hub</title>
        <meta name="description" content="Contact support for the Livestock Hub and Rural Utility Cost ecosystem." />
      </Helmet>
      <h1 className="text-3xl font-bold text-slate-900 mb-6">Contact Us</h1>
      <p className="text-lg text-slate-600 mb-8">
        Have questions about the Livestock tools or the Rural Utility Cost ecosystem? We're here to help.
      </p>

      <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
              <input 
                type="text" 
                id="firstName" 
                className="w-full border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 border p-2 text-slate-900" 
                placeholder="Jane"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
              <input 
                type="text" 
                id="lastName" 
                className="w-full border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 border p-2 text-slate-900" 
                placeholder="Doe"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
            <input 
              type="email" 
              id="email" 
              className="w-full border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 border p-2 text-slate-900" 
              placeholder="jane@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="topic" className="block text-sm font-medium text-slate-700 mb-1">Topic</label>
            <select id="topic" className="w-full border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 border p-2 text-slate-900">
              <option>Tool Support & Formulas</option>
              <option>Feature Request</option>
              <option>Ecosystem Inquiry</option>
              <option>Other</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
            <textarea 
              id="message" 
              rows={4} 
              className="w-full border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 border p-2 text-slate-900"
              placeholder="How can we help you?"
            ></textarea>
          </div>
          
          <button 
            type="button" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
