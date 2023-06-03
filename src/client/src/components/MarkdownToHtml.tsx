import React from 'react'
import ReactMarkdown from 'react-markdown'

interface MarkdownToHtmlProps{
    code: string
}

function MarkdownToHtml(props: MarkdownToHtmlProps){
    const { code } = props;

    return(
        <ReactMarkdown>{code}</ReactMarkdown>
    )
}

export default MarkdownToHtml;