'use client';

import { SmartLink } from '@databuddy/nextless';
import { useEffect, useState } from 'react';

export default function InternalPage2() {
  const [entryCount, setEntryCount] = useState<number | null>(null);
  
  useEffect(() => {
    // This is just an estimation - not 100% reliable but helps illustrate the concept
    if (window.history && 'length' in window.history) {
      setEntryCount(window.history.length);
    }
  }, []);

  // Get any URL parameters from the query string
  const urlParams = new URLSearchParams(window.location.search);
  const hasReplaceParam = urlParams.has('action') && urlParams.get('action') === 'replace';

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Internal Page 2</h1>
        <p className="text-gray-600 dark:text-gray-400">
          This page demonstrates router integration features like <code>replace</code>.
        </p>
      </div>

      <div className="component-display">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">TEST INFO</span>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          This page is used to test router-specific functionality in SmartLink, 
          particularly the <code>replace</code> prop which modifies browser history.
        </p>

        <div className="p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-md border border-yellow-200 dark:border-yellow-800 mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-yellow-600 text-white px-2 py-0.5 rounded-full text-xs">HISTORY REPLACE TEST</span>
            {hasReplaceParam && (
              <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-md text-xs dark:bg-green-900/30 dark:text-green-200">
                Arrived via replace link!
              </span>
            )}
          </div>
          <h3 className="font-medium text-yellow-800 dark:text-yellow-200 mb-3">
            Testing the <code>replace</code> Prop
          </h3>
          <p className="mb-3">
            When you navigate to this page using a link with the <code>replace</code> prop,
            it <strong>replaces</strong> the current entry in your browser history instead
            of adding a new entry.
          </p>
          <div className="p-4 bg-white dark:bg-gray-800 rounded-md mb-4">
            <p className="text-sm font-medium mb-1">Current URL Parameters:</p>
            <code className="text-xs">{window.location.search || '(none)'}</code>
            {entryCount !== null && (
              <p className="mt-2 text-sm">
                Estimated history length: <strong>{entryCount}</strong>
              </p>
            )}
          </div>
          <div className="bg-yellow-100 dark:bg-yellow-900/50 p-3 rounded-md">
            <h4 className="font-medium text-sm mb-1">How to test:</h4>
            <ol className="list-decimal list-inside text-sm space-y-1">
              <li>If you arrived via a link with <code>replace=true</code>, click the browser's back button</li>
              <li>You should go back <strong>two steps</strong> instead of just one</li>
              <li>This is because the history entry for the previous page was replaced with this one</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="component-display">
        <h2 className="text-xl font-semibold mb-4">Navigation Options</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <SmartLink 
            href="/link-tests" 
            className="p-3 text-center bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            ← Back to Link Tests
          </SmartLink>
          <SmartLink 
            href="/" 
            className="p-3 text-center bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-colors dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            Go to Home
          </SmartLink>
          <SmartLink 
            href="/link-tests/internal-page-1" 
            className="p-3 text-center bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Go to Internal Page 1
          </SmartLink>
        </div>
      </div>

      <div className="component-display mt-8">
        <h2 className="text-xl font-semibold mb-4">Test Navigation with replace</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="font-medium mb-2">Standard Navigation</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Normal link that adds a new history entry
            </p>
            <SmartLink 
              href="/link-tests/internal-page-1?mode=standard" 
              className="block p-2 text-center bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-colors dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              Go to Page 1 (Standard)
            </SmartLink>
          </div>
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="font-medium mb-2">Replace Navigation</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Link with <code>replace</code> that replaces current history entry
            </p>
            <SmartLink 
              href="/link-tests/internal-page-1?mode=replace" 
              replace
              className="block p-2 text-center bg-amber-100 text-amber-800 rounded-md hover:bg-amber-200 transition-colors dark:bg-amber-900/30 dark:text-amber-200 dark:hover:bg-amber-900/50"
            >
              Go to Page 1 (with replace)
            </SmartLink>
          </div>
        </div>
      </div>
    </div>
  );
} 