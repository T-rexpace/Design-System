import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { twilight } from 'react-syntax-highlighter/dist/esm/styles/prism';

import ComponentLayout from '../../components/ComponentLayout'

import imgTypo from '../../images/typo.png'

const Typo = () => {
  return (
    <ComponentLayout
        title="Tipografía"
        underline={ true }
        details={
          <>
            <p>
                La tipografía de nuestra marca es <a href="https://fonts.google.com/specimen/Maven+Pro?query=maven+pro" target="_blank">Maven Pro</a>. 
                Esta nos brinda múltiples pesos tipográficos 
                para tener versatilidad en su uso. A su vez, 
                al ser una sans serif transmite modernidad.
            </p>
            <div className="mt-20 mb-50">
              <p className="h0">H0 / 56px</p>
              <SyntaxHighlighter style={ twilight }>
                .h0
              </SyntaxHighlighter>
              <h1 className="mt-20">h1 / 48px</h1>
              <SyntaxHighlighter style={ twilight }>
                &lt;h1&gt;&lt;/h1&gt;
              </SyntaxHighlighter>
              <h2 className="mt-20">h2 / 40px</h2>
              <SyntaxHighlighter style={ twilight }>
                &lt;h2&gt;&lt;/h2&gt;
              </SyntaxHighlighter>
              <h3 className="mt-20">h3 / 32px</h3>
              <SyntaxHighlighter style={ twilight }>
                &lt;h3&gt;&lt;/h3&gt;
              </SyntaxHighlighter>
              <p className="mt-20">p / 24px</p>
              <SyntaxHighlighter style={ twilight }>
                &lt;p&gt;&lt;/p&gt;
              </SyntaxHighlighter>
              <p className="mt-20">
                <small>small / 16px</small>
              </p>
              <SyntaxHighlighter style={ twilight }>
                &lt;small&gt;&lt;/small&gt;
              </SyntaxHighlighter>
            </div>
            <div className="mt-5 mb-5">
              <h2 className="h2--bb">Utilities</h2>
              <p className="text-left">
                <code>
                  .text-left
                </code>
                  Tu observatorio de asteroides
              </p>
              <p className="text-center">
                <code>
                  .text-center
                </code>
                  Tu observatorio de asteroides
              </p>
              <p className="text-right">
                <code>
                  .text-right
                </code>
                  Tu observatorio de asteroides
              </p>
              <p>
                <code>
                  .text-lowercase
                </code>
                <span className="text-lowercase">
                  Tu observatorio de asteroides
                </span>
              </p>
              <p>
                <code>
                  .text-uppercase
                </code>
                <span className="text-uppercase">
                  Tu observatorio de asteroides
                </span>
              </p>
            </div>
          </>
        }
    />
  )
}

export default Typo