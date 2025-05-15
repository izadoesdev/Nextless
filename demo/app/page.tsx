import { SmartLink } from '@databuddy/nextless';

export default function HomePage() {
  const testPages = [
    { 
      href: "/link-tests", 
      name: "SmartLink Component", 
      description: "Tests for the SmartLink component, showing internal/external link handling, hash navigation, router integration, and styling options."
    },
    { 
      href: "/og-tests", 
      name: "Open Graph Components", 
      description: "Tests for Open Graph meta tag generation components (coming soon)."
    },
    { 
      href: "/font-tests", 
      name: "Font Loading Components", 
      description: "Tests for optimized font loading components (coming soon)."
    },
    { 
      href: "/script-tests", 
      name: "Script Loading Components", 
      description: "Tests for script loading and execution components (coming soon)."
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 dark:text-white">
          @databuddy/nextless
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
          A collection of utility components for Next.js projects that can be used without direct 
          Next.js dependencies, making them suitable for non-Next.js React applications.
        </p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-8 text-center dark:text-gray-200">
          Component Test Pages
        </h2>
        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
          {testPages.map((page) => (
            <SmartLink
              key={page.href}
              href={page.href}
              className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{page.name}</h3>
                <span className="text-gray-500 dark:text-gray-400">→</span>
              </div>
              <p className="text-gray-600 mt-2 dark:text-gray-300">{page.description}</p>
            </SmartLink>
          ))}
        </div>
      </section>

      <section className="mt-16 max-w-4xl mx-auto">
        <div className="p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg">
          <h2 className="text-xl font-semibold mb-3 text-blue-800 dark:text-blue-300">About This Demo</h2>
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            This demonstration app shows the functionality of each component in the <code>@databuddy/nextless</code> package. 
            Each test page focuses on a specific component and shows its various features and usage options.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            The currently implemented component is <strong>SmartLink</strong>, which provides an enhanced link component 
            with automatic handling of external vs. internal links, support for client-side routing libraries, and consistent security features.
          </p>
        </div>
      </section>
    </div>
  );
}
