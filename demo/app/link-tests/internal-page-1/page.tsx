'use client';

import { SmartLink } from '@databuddy/nextless';

export default function InternalPage1() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Internal Page 1</h1>
        <p className="text-gray-600 dark:text-gray-400">
          This page demonstrates hash navigation and scrolling behavior with the SmartLink component.
        </p>
      </div>

      <div className="component-display">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">TEST INFO</span>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          This page contains several anchor points that can be targeted with hash fragments in URLs.
          When you arrive at this page via a link with a hash (e.g., <code>#section-hash</code>),
          your browser should automatically scroll to the corresponding section.
        </p>
        <div className="p-4 mb-6 bg-amber-50 border border-amber-200 rounded-md dark:bg-amber-900/20 dark:border-amber-800">
          <p className="text-amber-800 dark:text-amber-200">
            <strong>URL Data:</strong> {typeof window !== 'undefined' ? window.location.href : 'URL will show when client-side rendered'}
          </p>
        </div>
        <h2 className="text-xl font-semibold mb-4">Navigation Links</h2>
        <div className="flex flex-wrap gap-4 mb-8">
          <SmartLink 
            href="/link-tests" 
            className="px-4 py-2 bg-blue-100 text-blue-700 hover:bg-blue-200 rounded-md transition-colors dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-800/50"
          >
            ← Back to Link Tests
          </SmartLink>
          <SmartLink 
            href="/" 
            className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-md transition-colors dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            Go to Home
          </SmartLink>
        </div>
      </div>

      <div className="p-4 mb-8 bg-blue-50 border border-blue-200 rounded-md dark:bg-blue-900/20 dark:border-blue-800">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">HASH NAVIGATION TEST GUIDE</span>
        </div>
        <p className="text-sm mb-3">
          The sections below demonstrate hash navigation. There are three test anchor points on this page:
        </p>
        <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1 mb-3">
          <li><code>#section-hash</code> - The first target section</li>
          <li><code>#section-hash-no-scroll</code> - A second target section</li>
          <li><code>#another-hash</code> - A third target section</li>
        </ul>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          When testing hash navigation, observe if the page scrolls to the correct section after loading.
        </p>
      </div>

      <div style={{ height: '40vh' }} className="flex items-center justify-center text-gray-400 border border-dashed border-gray-300 dark:border-gray-700 rounded-md">
        <span className="px-4 py-2 bg-gray-100 rounded-md dark:bg-gray-800">Scroll down to see the anchor targets</span>
      </div>

      <div id="section-hash" className="component-display mt-12 pt-16">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">ANCHOR TARGET</span>
          <code className="bg-blue-50 px-2 py-0.5 rounded-md text-blue-800 dark:bg-blue-900/30 dark:text-blue-200">#section-hash</code>
        </div>
        <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-md border border-blue-200 dark:border-blue-800">
          <h2 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-300">Section Hash Target</h2>
          <p>This section is the target for links with the hash fragment <code>#section-hash</code>.</p>
          <p className="mt-2 text-sm text-blue-600 dark:text-blue-400">
            If you arrived here via a direct link with this hash, the page should have automatically scrolled to this section.
          </p>
        </div>
      </div>

      <div style={{ height: '40vh' }} className="flex items-center justify-center text-gray-400 border border-dashed border-gray-300 dark:border-gray-700 rounded-md mt-12">
        <span className="px-4 py-2 bg-gray-100 rounded-md dark:bg-gray-800">More scroll space</span>
      </div>

      <div id="section-hash-no-scroll" className="component-display mt-12 pt-16">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">ANCHOR TARGET</span>
          <code className="bg-green-50 px-2 py-0.5 rounded-md text-green-800 dark:bg-green-900/30 dark:text-green-200">#section-hash-no-scroll</code>
        </div>
        <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-md border border-green-200 dark:border-green-800">
          <h2 className="text-xl font-semibold mb-2 text-green-700 dark:text-green-300">Section Hash No-Scroll Target</h2>
          <p>This section is the target for links with the hash fragment <code>#section-hash-no-scroll</code>.</p>
          <p className="mt-2 text-sm text-green-600 dark:text-green-400">
            If your link uses the <code>scroll={"{false}"}</code> prop on SmartLink, the browser would not automatically scroll to this section.
          </p>
        </div>
      </div>

      <div style={{ height: '40vh' }} className="flex items-center justify-center text-gray-400 border border-dashed border-gray-300 dark:border-gray-700 rounded-md mt-12">
        <span className="px-4 py-2 bg-gray-100 rounded-md dark:bg-gray-800">Final scroll space</span>
      </div>

      <div id="another-hash" className="component-display mt-12 pt-16">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs">ANCHOR TARGET</span>
          <code className="bg-purple-50 px-2 py-0.5 rounded-md text-purple-800 dark:bg-purple-900/30 dark:text-purple-200">#another-hash</code>
        </div>
        <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-md border border-purple-200 dark:border-purple-800">
          <h2 className="text-xl font-semibold mb-2 text-purple-700 dark:text-purple-300">Another Hash Target</h2>
          <p>This section is the target for links with the hash fragment <code>#another-hash</code>.</p>
          <p className="mt-2 text-sm text-purple-600 dark:text-purple-400">
            This target demonstrates using hash fragments with query parameters, like in <code>/link-tests/internal-page-1?highlight=true#another-hash</code>.
          </p>
          <div className="mt-4 p-3 bg-white dark:bg-gray-800 rounded-md">
            <p className="text-sm font-medium mb-1">Current Query Parameters:</p>
            <code className="text-xs">{typeof window !== 'undefined' ? window.location.search : ''}</code>
          </div>
        </div>
      </div>
    </div>
  );
} 