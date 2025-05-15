import { Font, createLocalFont, SmartLink } from '@databuddy/nextless';

// Create a local font definition to mimic Next.js Font API usage pattern
const openSans = createLocalFont({
  fontFamily: 'Open Sans',
  src: {
    woff2: 'https://fonts.gstatic.com/s/opensans/v35/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-mu0SC55I.woff2'
  },
  weight: '400',
  variable: 'font-open-sans',
  fallback: ['Arial', 'sans-serif']
});

// Create another font for demonstration purposes
const roboto = createLocalFont({
  fontFamily: 'Roboto',
  src: {
    woff2: 'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2'
  },
  weight: '400',
  variable: 'font-roboto',
  fallback: ['Arial', 'sans-serif']
});

export default function FontTestsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Font Component Tests</h1>
        <p className="text-gray-600 dark:text-gray-400">
          This page demonstrates the Font component from @databuddy/nextless, which provides an API similar to Next.js Font.
        </p>
      </div>

      {/* Load the fonts using the Font component */}
      <Font options={[
        {
          fontFamily: 'Open Sans',
          src: { woff2: 'https://fonts.gstatic.com/s/opensans/v35/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-mu0SC55I.woff2' },
          weight: '400',
          variable: 'font-open-sans',
          fallback: ['Arial', 'sans-serif']
        },
        {
          fontFamily: 'Roboto',
          src: { woff2: 'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2' },
          weight: '400',
          variable: 'font-roboto',
          fallback: ['Arial', 'sans-serif']
        }
      ]} />

      <div className="component-display bg-gray-50 dark:bg-gray-900 p-10 space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-500 dark:text-gray-400">Font Usage Methods</h2>
          
          <div className="space-y-6">
            {/* Method 1: Using the style property from createLocalFont */}
            <div className="p-4 border rounded-md">
              <h3 className="font-medium mb-2">Method 1: Using createLocalFont and style attribute</h3>
              <p className="mb-2">
                This mimics Next.js Font's exported style usage pattern.
              </p>
              <div 
                style={openSans.style}
                className="p-4 bg-white dark:bg-gray-800 rounded"
              >
                This text is styled with Open Sans via the style attribute.
              </div>
            </div>
            
            {/* Method 2: Using CSS variables */}
            <div className="p-4 border rounded-md">
              <h3 className="font-medium mb-2">Method 2: Using CSS variables</h3>
              <p className="mb-2">
                This uses the CSS variables that Font component creates.
              </p>
              <div 
                style={{ fontFamily: 'var(--font-roboto)' }}
                className="p-4 bg-white dark:bg-gray-800 rounded"
              >
                This text is styled with Roboto via CSS variables.
              </div>
            </div>
            
            {/* Method 3: Using className */}
            <div className="p-4 border rounded-md">
              <h3 className="font-medium mb-2">Method 3: Using className from createLocalFont</h3>
              <p className="mb-2">
                This uses the className property returned from createLocalFont.
              </p>
              <div className={`${roboto.className} p-4 bg-white dark:bg-gray-800 rounded`}>
                This text is styled with Roboto via className (requires additional CSS setup).
              </div>
            </div>
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
      
      {/* For className method to work, we need to define the classes */}
      <style dangerouslySetInnerHTML={{ __html: `
        .font-open-sans {
          font-family: var(--font-open-sans);
        }
        .font-roboto {
          font-family: var(--font-roboto);
        }
      `}} />
    </div>
  );
} 