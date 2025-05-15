import { Script, SmartLink } from '@databuddy/nextless';

export default function ScriptTestsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Script Component Tests</h1>
        <p className="text-gray-600 dark:text-gray-400">
          This page demonstrates the Script component from @databuddy/nextless, which provides an API similar to Next.js Script component.
        </p>
      </div>

      {/* Load scripts using different strategies */}
      <Script
        id="console-log-script"
        strategy="beforeInteractive"
        content="console.log('This script runs eagerly (immediately)')"
        onLoad={() => {
          console.log('Eager script loaded');
          if (typeof window !== 'undefined') {
            const element = document.getElementById('eager-status');
            if (element) element.textContent = 'Loaded!';
          }
        }}
      />

      <Script
        id="delayed-script"
        strategy="delayed"
        delayValue={3000}
        content="console.log('This script runs after a 3 second delay')"
        onLoad={() => {
          console.log('Delayed script loaded after 3 seconds');
          if (typeof window !== 'undefined') {
            const element = document.getElementById('delayed-status');
            if (element) element.textContent = 'Loaded!';
          }
        }}
      />

      <Script
        id="lazy-script"
        strategy="afterInteractive"
        content="console.log('This script runs after the page loads')"
        onLoad={() => {
          console.log('Lazy script loaded after page load');
          if (typeof window !== 'undefined') {
            const element = document.getElementById('lazy-status');
            if (element) element.textContent = 'Loaded!';
          }
        }}
      />

      <Script
        id="viewport-script"
        strategy="viewport"
        content="console.log('This script runs when the element is in the viewport')"
        onLoad={() => {
          console.log('Viewport script loaded when visible');
          if (typeof window !== 'undefined') {
            const element = document.getElementById('viewport-status');
            if (element) element.textContent = 'Loaded!';
          }
        }}
      />

      <div className="component-display bg-gray-50 dark:bg-gray-900 p-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-500 dark:text-gray-400">Script Component Strategies</h2>
        
        <div className="space-y-6">
          <div className="p-4 border rounded-md bg-white dark:bg-gray-800">
            <h3 className="font-medium mb-2">Eager Loading (Default)</h3>
            <p className="mb-2">
              This script loads immediately without waiting. Check the console to see its output.
            </p>
            <div className="bg-gray-100 dark:bg-gray-900 p-2 rounded">
              Status: <span id="eager-status" className="font-semibold text-green-600">Checking...</span>
            </div>
          </div>
          
          <div className="p-4 border rounded-md bg-white dark:bg-gray-800">
            <h3 className="font-medium mb-2">Delayed Loading</h3>
            <p className="mb-2">
              This script loads after a 3-second delay. Watch the status change.
            </p>
            <div className="bg-gray-100 dark:bg-gray-900 p-2 rounded">
              Status: <span id="delayed-status" className="font-semibold text-yellow-600">Waiting...</span>
            </div>
          </div>
          
          <div className="p-4 border rounded-md bg-white dark:bg-gray-800">
            <h3 className="font-medium mb-2">Lazy Loading (After Page Load)</h3>
            <p className="mb-2">
              This script loads after the page completes loading.
            </p>
            <div className="bg-gray-100 dark:bg-gray-900 p-2 rounded">
              Status: <span id="lazy-status" className="font-semibold text-yellow-600">Waiting...</span>
            </div>
          </div>
          
          <div className="p-4 border rounded-md bg-white dark:bg-gray-800">
            <h3 className="font-medium mb-2">Viewport Loading</h3>
            <p className="mb-2">
              This script loads when this section is visible in the viewport.
            </p>
            <div className="bg-gray-100 dark:bg-gray-900 p-2 rounded">
              Status: <span id="viewport-status" className="font-semibold text-yellow-600">Waiting...</span>
            </div>
          </div>
          
          <div className="p-4 border rounded-md bg-white dark:bg-gray-800">
            <h3 className="font-medium mb-2">Next.js Compatibility</h3>
            <p>
              The Script component supports Next.js Script API strategies:
              <ul className="list-disc ml-6 mt-2">
                <li><code>beforeInteractive</code> (maps to eager)</li>
                <li><code>afterInteractive</code> (maps to lazy)</li>
                <li><code>lazyOnload</code> (maps to idle/afterLoad)</li>
              </ul>
            </p>
          </div>
        </div>
        
        <div className="flex justify-center mt-6">
          <SmartLink 
            href="/" 
            className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md transition-colors"
          >
            Return to Home
          </SmartLink>
        </div>
      </div>
    </div>
  );
} 