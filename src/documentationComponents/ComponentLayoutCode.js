import React, { Fragment } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { twilight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ComponentLayoutCode = (props) => {
    return (
        <Fragment>
            <h3 className="mt-5">Codigo JSX de { props.title }</h3>
            <SyntaxHighlighter language="jsx" style={ twilight }>
                { props.jsx }
            </SyntaxHighlighter>
            <h3 className="mt-5">Codigo SCSS de { props.title }</h3>
            <SyntaxHighlighter language="sass" style={ twilight }>
                { props.sass }
            </SyntaxHighlighter>
        </Fragment>
    )
}

export default ComponentLayoutCode