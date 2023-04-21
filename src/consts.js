/* This is the tokenized version of the initially rendered Markdown.
* See: https://marked.js.org/using_pro#lexer
* */
export const initialMarkdown = [
  {
    "type": "heading",
    "raw": "# This is the demo for a markdown parser\n\n",
    "depth": 1,
    "text": "This is the demo for a markdown parser",
    "tokens": [
      {
        "type": "text",
        "raw": "This is the demo for a markdown parser",
        "text": "This is the demo for a markdown parser"
      }
    ]
  },
  {
    "type": "paragraph",
    "raw": "This is a **Markdown parser**. You write Markdown on one side, the preview shows up in real time on the other side. ",
    "text": "This is a **Markdown parser**. You write Markdown on one side, the preview shows up in real time on the other side. ",
    "tokens": [
      {
        "type": "text",
        "raw": "This is a ",
        "text": "This is a "
      },
      {
        "type": "strong",
        "raw": "**Markdown parser**",
        "text": "Markdown parser",
        "tokens": [
          {
            "type": "text",
            "raw": "Markdown parser",
            "text": "Markdown parser"
          }
        ]
      },
      {
        "type": "text",
        "raw": ". You write Markdown on one side, the preview shows up in real time on the other side. ",
        "text": ". You write Markdown on one side, the preview shows up in real time on the other side. "
      }
    ]
  },
  {
    "type": "space",
    "raw": "\n\n"
  },
  {
    "type": "heading",
    "raw": "## How to use it\n\n",
    "depth": 2,
    "text": "How to use it",
    "tokens": [
      {
        "type": "text",
        "raw": "How to use it",
        "text": "How to use it"
      }
    ]
  },
  {
    "type": "list",
    "raw": "1. You write Markdown on one side.\n2. It appears on the other side.\n3. Profit?",
    "ordered": true,
    "start": 1,
    "loose": false,
    "items": [
      {
        "type": "list_item",
        "raw": "1. You write Markdown on one side.\n",
        "task": false,
        "loose": false,
        "text": "You write Markdown on one side.",
        "tokens": [
          {
            "type": "text",
            "raw": "You write Markdown on one side.",
            "text": "You write Markdown on one side.",
            "tokens": [
              {
                "type": "text",
                "raw": "You write Markdown on one side.",
                "text": "You write Markdown on one side."
              }
            ]
          }
        ]
      },
      {
        "type": "list_item",
        "raw": "2. It appears on the other side.\n",
        "task": false,
        "loose": false,
        "text": "It appears on the other side.",
        "tokens": [
          {
            "type": "text",
            "raw": "It appears on the other side.",
            "text": "It appears on the other side.",
            "tokens": [
              {
                "type": "text",
                "raw": "It appears on the other side.",
                "text": "It appears on the other side."
              }
            ]
          }
        ]
      },
      {
        "type": "list_item",
        "raw": "3. Profit?",
        "task": false,
        "loose": false,
        "text": "Profit?",
        "tokens": [
          {
            "type": "text",
            "raw": "Profit?",
            "text": "Profit?",
            "tokens": [
              {
                "type": "text",
                "raw": "Profit?",
                "text": "Profit?"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "type": "space",
    "raw": "\n\n"
  },
  {
    "type": "paragraph",
    "raw": "Don´t know how to write Markdown. No worries. Take a look [here](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).",
    "text": "Don´t know how to write Markdown. No worries. Take a look [here](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).",
    "tokens": [
      {
        "type": "text",
        "raw": "Don´t know how to write Markdown. No worries. Take a look ",
        "text": "Don´t know how to write Markdown. No worries. Take a look "
      },
      {
        "type": "link",
        "raw": "[here](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)",
        "href": "https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax",
        "title": null,
        "text": "here",
        "tokens": [
          {
            "type": "text",
            "raw": "here",
            "text": "here"
          }
        ]
      },
      {
        "type": "text",
        "raw": ".",
        "text": "."
      }
    ]
  },
  {
    "type": "space",
    "raw": "\n\n"
  },
  {
    "type": "heading",
    "raw": "## What can I do with it?\n\n",
    "depth": 2,
    "text": "What can I do with it?",
    "tokens": [
      {
        "type": "text",
        "raw": "What can I do with it?",
        "text": "What can I do with it?"
      }
    ]
  },
  {
    "type": "paragraph",
    "raw": "All kinds of cool stuff.",
    "text": "All kinds of cool stuff.",
    "tokens": [
      {
        "type": "text",
        "raw": "All kinds of cool stuff.",
        "text": "All kinds of cool stuff."
      }
    ]
  },
  {
    "type": "space",
    "raw": "\n\n"
  },
  {
    "type": "paragraph",
    "raw": "Like this `look at this inline code`.",
    "text": "Like this `look at this inline code`.",
    "tokens": [
      {
        "type": "text",
        "raw": "Like this ",
        "text": "Like this "
      },
      {
        "type": "codespan",
        "raw": "`look at this inline code`",
        "text": "look at this inline code"
      },
      {
        "type": "text",
        "raw": ".",
        "text": "."
      }
    ]
  },
  {
    "type": "space",
    "raw": "\n\n"
  },
  {
    "type": "paragraph",
    "raw": "And this:",
    "text": "And this:",
    "tokens": [
      {
        "type": "text",
        "raw": "And this:",
        "text": "And this:"
      }
    ]
  },
  {
    "type": "space",
    "raw": "\n\n"
  },
  {
    "type": "code",
    "raw": "```\n# NEVER DO THIS\nsudo rm -rf /\n```",
    "lang": "",
    "text": "# NEVER DO THIS\nsudo rm -rf /"
  },
  {
    "type": "space",
    "raw": "\n\n"
  },
  {
    "type": "paragraph",
    "raw": "You can also add images like this:",
    "text": "You can also add images like this:",
    "tokens": [
      {
        "type": "text",
        "raw": "You can also add images like this:",
        "text": "You can also add images like this:"
      }
    ]
  },
  {
    "type": "space",
    "raw": "\n\n"
  },
  {
    "type": "paragraph",
    "raw": "![Octocat smiling and raising a tentacle.](https://myoctocat.com/assets/images/base-octocat.svg)",
    "text": "![Octocat smiling and raising a tentacle.](https://myoctocat.com/assets/images/base-octocat.svg)",
    "tokens": [
      {
        "type": "image",
        "raw": "![Octocat smiling and raising a tentacle.](https://myoctocat.com/assets/images/base-octocat.svg)",
        "href": "https://myoctocat.com/assets/images/base-octocat.svg",
        "title": null,
        "text": "Octocat smiling and raising a tentacle."
      }
    ]
  },
  {
    "type": "space",
    "raw": "\n\n"
  },
  {
    "type": "paragraph",
    "raw": "And quote something important:",
    "text": "And quote something important:",
    "tokens": [
      {
        "type": "text",
        "raw": "And quote something important:",
        "text": "And quote something important:"
      }
    ]
  },
  {
    "type": "space",
    "raw": "\n\n"
  },
  {
    "type": "blockquote",
    "raw": "> Something important someone once said... Probably.",
    "tokens": [
      {
        "type": "paragraph",
        "raw": "Something important someone once said... Probably.",
        "text": "Something important someone once said... Probably.",
        "tokens": [
          {
            "type": "text",
            "raw": "Something important someone once said... Probably.",
            "text": "Something important someone once said... Probably."
          }
        ]
      }
    ],
    "text": "Something important someone once said... Probably."
  }
]
