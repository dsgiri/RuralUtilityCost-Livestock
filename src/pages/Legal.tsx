import { Helmet } from 'react-helmet-async';

export function Legal() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Helmet>
        <title>Legal | Livestock Hub</title>
        <meta name="description" content="Legal terminology and disclaimers for the Livestock Hub application." />
      </Helmet>
      <div className="prose prose-slate lg:prose-lg max-w-none">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Legal & Disclaimer</h1>
        <p className="text-slate-500 mb-8 border-b border-slate-200 pb-8">Shared governance under the Rural Utility Cost master site ecosystem.</p>

        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">Estimates and Decision Support Only</h2>
        <p className="text-slate-700 mb-6">
          All calculators, charts, growth tracking tools, and estimators provided on this Livestock Hub are intended for <strong>decision support purposes only</strong>. The values produced by these tools are estimates based on standard industry averages and theoretical models.
        </p>

        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">Independent Verification Required</h2>
        <p className="text-slate-700 mb-6">
          Biological realities (such as animal health, genetics, precise feed quality, and local climate) introduce significant variable factors. You must verify all important agricultural decisions independently through customized veterinary consultation or certified livestock nutritionists.
        </p>

        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">Privacy & Terms of Service</h2>
        <p className="text-slate-700 mb-6">
          By using this sub-application, you agree to the overarching Privacy Policy and Terms of Service maintained by the Rural Utility Cost master website. Data provided within local tools (such as "Favorites") is stored strictly in your browser's local storage and is not transmitted to our servers unless part of an explicitly specified account service.
        </p>
      </div>
    </div>
  );
}
