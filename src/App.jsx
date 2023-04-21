import * as React from "react";
import DomPurify from "dompurify";
import Turndown from "turndown";

import { marked } from "marked";
import { initialMarkdown as tokenizedInitialMarkdown } from "./consts";

function App() {
  const turndownService = new Turndown({
    headingStyle: "atx",
    codeBlockStyle: "fenced",
  });

  /* Get the token for the initial Markdown and parse into valid Markdown */
  const tokens = marked.parser(tokenizedInitialMarkdown);
  const initialMarkdown = turndownService.turndown(tokens);

  /* Initialize the state with a placeholder Markdown content */
  const [value, setValue] = React.useState(initialMarkdown);

  /* Handles updating the preview content when Markdown editor content changes */
  const getMarkdownText = () => {
    /* The breaks options on marked makes sure that carriage returns are rendered as <br/> elements */
    const rawMarkdown = marked(value, { breaks: true });

    /* Sanitize the HTML output before returning it */
    const sanitized = DomPurify.sanitize(rawMarkdown);
    return { __html: sanitized };
  };

  return (
    <div className="wrapper">
      <div className="container">
        <textarea
          className="editor"
          id="editor"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </div>
      <div className="container">
        <div
          className="preview"
          id="preview"
          dangerouslySetInnerHTML={getMarkdownText()}
        />
      </div>
    </div>
  );
}

export default App;
