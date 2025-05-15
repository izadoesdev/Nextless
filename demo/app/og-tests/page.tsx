import { OpenGraph, SmartLink } from '@databuddy/nextless';

export default function OGTestsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">OpenGraph Component Tests</h1>
        <p className="text-gray-600 dark:text-gray-400">
          This page demonstrates the OpenGraph component from @databuddy/nextless, which provides an API similar to Next.js metadata API.
        </p>
      </div>

      {/* Add OpenGraph metadata to the page */}
      <OpenGraph
        basic={{
          title: 'OpenGraph Demo Page',
          description: 'This is a demonstration of the OpenGraph component from @databuddy/nextless',
          canonical: 'https://example.com/og-tests',
          type: 'article',
          siteName: 'Nextless Demo',
          locale: 'en_US',
          alternateLocales: ['fr_FR', 'es_ES'],
        }}
        images={{
          url: 'https://example.com/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'OpenGraph Demo Image',
        }}
        twitter={{
          card: 'summary_large_image',
          site: '@nextless',
          creator: '@databuddy',
          title: 'Twitter-specific title for this page',
          description: 'Twitter-specific description for this page',
        }}
        article={{
          publishedTime: '2023-10-01T00:00:00Z',
          modifiedTime: '2023-10-15T00:00:00Z',
          authors: ['Jane Doe', 'John Smith'],
          tags: ['nextless', 'opengraph', 'react'],
        }}
        robots={{
          index: true,
          follow: true,
          maxImagePreview: 'large',
        }}
        verification={{
          google: 'google-verification-code',
          bing: 'bing-verification-code',
        }}
      />

      <div className="component-display bg-gray-50 dark:bg-gray-900 p-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-500 dark:text-gray-400">OpenGraph Component</h2>
        
        <div className="space-y-6">
          <div className="p-4 border rounded-md bg-white dark:bg-gray-800">
            <h3 className="font-medium mb-2">How It Works</h3>
            <p className="mb-2">
              The OpenGraph component is rendering metadata in the document head. View the page source to see the rendered tags.
            </p>
            
            <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md overflow-auto">
              <pre className="text-sm">
                {`<OpenGraph
  basic={{
    title: 'OpenGraph Demo Page',
    description: 'This is a demonstration of the OpenGraph component...',
    canonical: 'https://example.com/og-tests',
    type: 'article',
    siteName: 'Nextless Demo',
    locale: 'en_US',
    alternateLocales: ['fr_FR', 'es_ES'],
  }}
  images={{
    url: 'https://example.com/og-image.jpg',
    width: 1200,
    height: 630,
    alt: 'OpenGraph Demo Image',
  }}
  twitter={{
    card: 'summary_large_image',
    site: '@nextless',
    creator: '@databuddy',
    title: 'Twitter-specific title for this page',
    description: 'Twitter-specific description for this page',
  }}
  article={{
    publishedTime: '2023-10-01T00:00:00Z',
    modifiedTime: '2023-10-15T00:00:00Z',
    authors: ['Jane Doe', 'John Smith'],
    tags: ['nextless', 'opengraph', 'react'],
  }}
  robots={{...}}
  verification={{...}}
/>`}
              </pre>
            </div>
          </div>
          
          <div className="p-4 border rounded-md bg-white dark:bg-gray-800">
            <h3 className="font-medium mb-2">Compatibility</h3>
            <p>
              The component is designed to be API-compatible with Next.js metadata API but implemented for client-side React applications. It can be used in any React application, not just Next.js projects.
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