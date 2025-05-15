'use client';

import { SmartLink } from '@databuddy/nextless';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function LinkTestsPage() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState('examples');
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return <div className="p-8 text-center">Loading client components...</div>;
  }

  const currentQuery = searchParams.toString();

  const renderTab = () => {
    switch (activeTab) {
      case 'documentation':
        return <DocumentationTab />;
      case 'examples':
        return <ExamplesTab pathname={pathname} currentQuery={currentQuery} />;
      default:
        return <ExamplesTab pathname={pathname} currentQuery={currentQuery} />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">SmartLink Component</h1>
        <p className="text-gray-600 dark:text-gray-400">
          A versatile link component that intelligently handles both internal and external URLs.
        </p>
      </div>

      <div className="tab-buttons">
        <button
          type="button"
          onClick={() => setActiveTab('examples')}
          className={`tab-button ${activeTab === 'examples' ? 'active' : ''}`}
        >
          Test Examples
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('documentation')}
          className={`tab-button ${activeTab === 'documentation' ? 'active' : ''}`}
        >
          Documentation
        </button>
      </div>

      {renderTab()}
    </div>
  );
}

function ExamplesTab({ pathname, currentQuery }: { pathname: string; currentQuery: string }) {
  return (
    <div>
      <div className="p-4 mb-6 bg-blue-50 border border-blue-200 rounded-md dark:bg-blue-900/20 dark:border-blue-800">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-blue-600 text-white px-2 py-0.5 rounded-full text-xs">TESTING GUIDE</span>
        </div>
        <p className="text-sm mb-2">Click on the various links below to test different features of the SmartLink component.</p>
        <div className="text-sm grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
          <div><strong>Current Location:</strong> <code className="bg-white/50 dark:bg-gray-800/50 px-2 py-0.5 rounded">{pathname}</code></div>
          {currentQuery && (
            <div><strong>Query Parameters:</strong> <code className="bg-white/50 dark:bg-gray-800/50 px-2 py-0.5 rounded">{currentQuery}</code></div>
          )}
        </div>
      </div>

      <section className="component-display">
        <div className="flex items-center gap-2 mb-4">
          <span className="font-semibold text-xl">Test Group 1:</span>
          <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-0.5 rounded-md text-sm">Basic Internal Navigation</span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">Tests basic functionality of SmartLink for navigating between internal pages.</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li>
            <SmartLink 
              href="/link-tests/internal-page-1" 
              className="block p-3 bg-gray-50 dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
            >
              Go to Internal Page 1
            </SmartLink>
          </li>
          <li>
            <SmartLink 
              href="/link-tests/internal-page-2" 
              className="block p-3 bg-gray-50 dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
            >
              Go to Internal Page 2
            </SmartLink>
          </li>
        </ul>
      </section>

      <section className="component-display">
        <div className="flex items-center gap-2 mb-4">
          <span className="font-semibold text-xl">Test Group 2:</span>
          <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-2 py-0.5 rounded-md text-sm">External URL Handling</span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Tests automatic detection of external URLs and application of security attributes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="font-medium mb-2">External Link (Auto-detected)</h3>
            <SmartLink 
              href="https://example.com" 
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              example.com (opens in new tab)
            </SmartLink>
            <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              <strong>Expected Behavior:</strong> Opens in new tab with <code>rel="noopener noreferrer"</code>
            </div>
          </div>
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="font-medium mb-2">External Link (Custom Target)</h3>
            <SmartLink 
              href="https://example.org" 
              target="_self"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              example.org (opens in same tab)
            </SmartLink>
            <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              <strong>Expected Behavior:</strong> Opens in same tab (<code>target="_self"</code>)
            </div>
          </div>
        </div>
      </section>

      <section className="component-display">
        <div className="flex items-center gap-2 mb-4">
          <span className="font-semibold text-xl">Test Group 3:</span>
          <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 px-2 py-0.5 rounded-md text-sm">Router Integration</span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Tests for router-specific features like <code>replace</code> and <code>state</code>.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="font-medium mb-2">Replace History Entry</h3>
            <SmartLink 
              href="/link-tests/internal-page-2?action=replace" 
              replace
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Go to Page 2 (replace history)
            </SmartLink>
            <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              <strong>Test Method:</strong> After clicking, press browser Back button. It should skip the previous page.
            </div>
          </div>
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="font-medium mb-2">With State (for routers)</h3>
            <SmartLink 
              href="/link-tests/internal-page-1" 
              state={{ from: "link-tests" }}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Go to Page 1 (with state)
            </SmartLink>
            <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              <strong>Note:</strong> State only works with custom router components like React Router's Link.
            </div>
          </div>
        </div>
      </section>

      <section className="component-display">
        <div className="flex items-center gap-2 mb-4">
          <span className="font-semibold text-xl">Test Group 4:</span>
          <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 px-2 py-0.5 rounded-md text-sm">Hash Navigation</span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Tests for hash fragment navigation and URL parameter handling.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="font-medium mb-2">Hash Fragment Navigation</h3>
            <SmartLink 
              href="/link-tests/internal-page-1#section-hash" 
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Go to #section-hash anchor
            </SmartLink>
            <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              <strong>Expected Behavior:</strong> Navigates to page and scrolls to section
            </div>
          </div>
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="font-medium mb-2">Query + Hash</h3>
            <SmartLink 
              href="/link-tests/internal-page-1?highlight=true#another-hash" 
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Go to anchor with query params
            </SmartLink>
            <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              <strong>Expected Behavior:</strong> Navigates to page with query parameters and scrolls to anchor
            </div>
          </div>
        </div>
      </section>

      <section className="component-display">
        <div className="flex items-center gap-2 mb-4">
          <span className="font-semibold text-xl">Test Group 5:</span>
          <span className="bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-200 px-2 py-0.5 rounded-md text-sm">Styling Options</span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Demonstrates different styling possibilities for the SmartLink component using Tailwind classes.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <h3 className="text-sm font-medium mb-2 text-gray-500">Primary Button Style</h3>
            <SmartLink
              href="/link-tests/internal-page-1?style=primary"
              className="block p-3 text-center bg-blue-600 hover:bg-blue-700 text-white font-medium rounded transition-colors"
            >
              Primary Button
            </SmartLink>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2 text-gray-500">Secondary Button Style</h3>
            <SmartLink
              href="/link-tests/internal-page-1?style=secondary"
              className="block p-3 text-center bg-white hover:bg-gray-50 border border-gray-300 text-gray-800 font-medium rounded transition-colors dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
            >
              Secondary Button
            </SmartLink>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2 text-gray-500">Outline Button Style</h3>
            <SmartLink
              href="/link-tests/internal-page-1?style=outline"
              className="block p-3 text-center border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded transition-colors dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/20"
            >
              Outline Button
            </SmartLink>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2 text-gray-500">Ghost Button Style</h3>
            <SmartLink
              href="/link-tests/internal-page-1?style=ghost"
              className="block p-3 text-center text-blue-600 hover:bg-blue-50 font-medium rounded transition-colors dark:text-blue-400 dark:hover:bg-blue-900/20"
            >
              Ghost Button
            </SmartLink>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2 text-gray-500">Text Link Style</h3>
            <SmartLink
              href="/link-tests/internal-page-1?style=text"
              className="block p-3 text-center text-blue-600 hover:underline dark:text-blue-400"
            >
              Text Link
            </SmartLink>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2 text-gray-500">Icon Button Style</h3>
            <SmartLink
              href="/link-tests/internal-page-1?style=icon"
              className="block p-3 text-center"
              aria-label="Icon Link"
            >
              <div className="bg-gray-100 hover:bg-gray-200 rounded-full h-12 w-12 flex items-center justify-center mx-auto dark:bg-gray-700 dark:hover:bg-gray-600">
                →
              </div>
            </SmartLink>
          </div>
        </div>
      </section>
    </div>
  );
}

function DocumentationTab() {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h2>About SmartLink</h2>
      <p>
        The <code>SmartLink</code> component is a versatile link component designed to work seamlessly with both 
        internal and external links. It provides consistent behavior and security best practices, while being 
        framework-agnostic.
      </p>

      <h3>Key Features</h3>
      <ul>
        <li><strong>Automatic External Link Detection</strong> - Automatically detects external links and adds appropriate security attributes.</li>
        <li><strong>Router Support</strong> - Integrates with client-side routing libraries by accepting a custom component via <code>linkAs</code>.</li>
        <li><strong>Security Best Practices</strong> - Automatically adds <code>rel="noopener noreferrer"</code> to external links that open in a new tab.</li>
        <li><strong>Flexible</strong> - Supports all standard anchor attributes and passes through additional props to the underlying link component.</li>
      </ul>

      <h3>Basic Usage</h3>
      <pre className="code-block">
{`// Internal Link
<SmartLink href="/about">About Us</SmartLink>

// External Link (automatically opens in new tab)
<SmartLink href="https://example.com">Visit Example</SmartLink>

// External Link with custom target
<SmartLink href="https://example.org" target="_self">
  Example.org (same tab)
</SmartLink>`}
      </pre>

      <h3>Integration with React Router</h3>
      <pre className="code-block">
{`import { SmartLink } from '@databuddy/nextless';
import { Link as RouterLink } from 'react-router-dom';

// Using SmartLink with React Router
<SmartLink href="/profile" linkAs={RouterLink}>Profile</SmartLink>

// With router-specific props
<SmartLink 
  href="/dashboard" 
  linkAs={RouterLink}
  replace
  state={{ from: 'navigation' }}
>
  Dashboard
</SmartLink>`}
      </pre>

      <h3>Props Reference</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="text-left py-2">Prop</th>
              <th className="text-left py-2">Type</th>
              <th className="text-left py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="py-2 font-mono text-sm">href</td>
              <td className="py-2">string</td>
              <td className="py-2">Required. The URL or path for the link.</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 font-mono text-sm">isExternal</td>
              <td className="py-2">boolean</td>
              <td className="py-2">Optional. Explicitly mark the link as external. Auto-detected by default.</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 font-mono text-sm">linkAs</td>
              <td className="py-2">ElementType</td>
              <td className="py-2">Optional. Component to use for rendering internal links (e.g., from a router library).</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 font-mono text-sm">target</td>
              <td className="py-2">string</td>
              <td className="py-2">Optional. The target attribute (defaults to "_blank" for external links).</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 font-mono text-sm">rel</td>
              <td className="py-2">string</td>
              <td className="py-2">Optional. The rel attribute. For external links opening in new tabs, "noopener noreferrer" is automatically added.</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 font-mono text-sm">replace</td>
              <td className="py-2">boolean</td>
              <td className="py-2">Optional. If true and using a router, replaces current history entry instead of adding a new one.</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 font-mono text-sm">state</td>
              <td className="py-2">any</td>
              <td className="py-2">Optional. State to associate with the navigation (for routers that support it).</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
} 