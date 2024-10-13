# Supportmail Locales (aka Translations)

Translations for SupportMail

## Contribute

If you want to add another language,

1. Fork this repository
2. Copy the `en.json` file and name it just with the two first letters of the locale.

   Example: `en-US` => `en.json` and `es-ES` => `es.json`

3. Translate the file and create a pull request and I will look at it and merge it.

The locale system we use is the [ISO-639-1 standard](https://www.loc.gov/standards/iso639-2/php/code_list.php).

### Variables

- Normal variables: `{placeholder}`
- Command placeholders: `{command:help}`

Command placeholders will eventually parse to a clickable `/help`.

Note that you can also write command placeholders with spaces like `{command:config tickets panel}` .

### Arrays / Lists

An Array is a list of items. In JSON, it looks like this:

```json
{
  "key": ["item1", "item2", "item3"]
}
```

Each item in the array is separated by a comma `,` and the last item doesn't have a comma.

Each item in the arrays in this project must be a string and it represents one line of text.

It's mostly used whenever a text has too many lines.

### Examples and important rules

| What is wanted later    | How to write it | Explanaition                                 |
| ----------------------- | --------------- | -------------------------------------------- |
| `"some text in qoutes"` | `\"some text\"` | Qoutes must be escaped because of JSON.      |
| A new line              | `\n`            | It's the common standard.                    |
| A backslash `\`         | `\\`            | Backslashes must be escaped because of JSON. |

| A single asterisk `*`
(!NOT for Discord markdown!) | `\\*` | Escaping the asterisk + the `\` because of JSON. |

For Discord Markdown, please refer to the following article: [Markdown Text 101 (Chat Formatting: Bold, Italic, Underline)](https://support.discord.com/hc/en-us/articles/210298617-Markdown-Text-101-Chat-Formatting-Bold-Italic-Underline)

## Rules

- Don't change variables
- Don't change the JSON keys (Example: `{ "key": "value" }`)

## Currently needed translations

- [ ] `fr`
- [ ] `de`
- [ ] `it`
- [ ] `es`
