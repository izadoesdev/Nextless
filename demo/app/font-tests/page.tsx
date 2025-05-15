import { SmartLink } from '@databuddy/nextless';

export default function FontTestsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Font Component Tests</h1>
        <p className="text-gray-600 dark:text-gray-400">
          This page will be used to demonstrate the Font-related components from @databuddy/nextless.
        </p>
      </div>

      <div className="component-display bg-gray-50 dark:bg-gray-900 p-10 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-500 dark:text-gray-400">Component Coming Soon</h2>
        <p className="mb-6">The Font Component implementation is forthcoming.</p>
        <div className="flex justify-center">
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