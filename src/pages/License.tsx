import { SEO } from '../components/seo/SEO';

export function License() {
  return (
    <div className="w-full flex-1">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <SEO 
          title="Software License" 
          description="Review the software licensing arrangement for the Livestock estimating tools ecosystem." 
          canonicalPath="/license"
        />
        <h1 className="text-3xl font-bold text-slate-900 mb-6">License</h1>
      
      <div className="bg-slate-50 rounded-lg p-6 font-mono text-sm text-slate-700 border border-slate-200 whitespace-pre-wrap">
{`MIT License

Copyright (c) ${new Date().getFullYear()} Rural Utility Cost ecosystem

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}
        </div>
      </div>
    </div>
  );
}
