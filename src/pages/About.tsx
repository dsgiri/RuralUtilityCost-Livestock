import { Helmet } from 'react-helmet-async';

export function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Helmet>
        <title>About | Livestock Hub</title>
        <meta name="description" content="Learn about the Livestock Hub, part of the Rural Utility Cost ecosystem for clear agricultural planning tools." />
      </Helmet>
      <div className="prose prose-slate lg:prose-lg max-w-none">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">About Livestock Hub</h1>
        
        <p className="text-lg text-slate-700 leading-relaxed mb-6">
          The Livestock Hub is a dedicated application within the broader <strong>Rural Utility Cost</strong> ecosystem. Our focus here is entirely on animal-related planning and agricultural estimates.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Our Goal</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          We aim to help rural users, ranchers, and agricultural producers make practical livestock decisions through clear, simple tools. Whether you're projecting the weight of a cattle herd, optimizing a breeding schedule, or determining the monthly feed requirements for a sheep flock, this hub provides the decision support you need.
        </p>
        
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-8 rounded-r-md">
          <p className="text-amber-800 text-sm font-medium m-0">
            <strong>Note:</strong> This application leverages the shared brand, visual identity, and legal framework of the Rural Utility Cost master site to ensure a consistent, trustworthy experience across the entire ecosystem.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Values</h2>
        <ul className="list-disc pl-6 space-y-3 text-slate-700 mb-8">
          <li><strong>Practicality:</strong> Calculators that reflect real-world farming constraints.</li>
          <li><strong>Clarity:</strong> Easy-to-read charts and straightforward outcomes.</li>
          <li><strong>Reliability:</strong> Consistent experiences connected to the Rural Utility Cost family.</li>
        </ul>
      </div>
    </div>
  );
}
