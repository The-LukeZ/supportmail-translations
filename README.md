# Supportmail Locales (aka Translations)

Translations for SupportMail

## Contribute

If you want to add another language,

1. Fork this repository
2. Copy the `en.json` file and name it just with the two first letters of the locale.

   Example: `en-US` => `en.json` and `es-ES` => `es.json`

3. Translate the file and create a pull request and I will look at it and merge it.

The locale system we use is the [ISO-639-1 standard](https://www.loc.gov/standards/iso639-2/php/code_list.php).

<details>
<summary>If you don't know anything about JSON, please read this (Click to expand)</summary>

### JSON

JSON is a file format that is used to store data. It's a key-value pair system.

```json
{
  "key": "value"
}
```

In the example above, `key` is the key and `value` is the value.

In this project, we use JSON to store the translations.

### Strings

Strings are a sequence of characters. In JSON, one can not only store strings but also numbers, arrays, and objects.

However, in this project, we only store strings and use objects and arrays to store things.

### (Nested) Objects

Objects are a collection of key-value pairs, marked by curly braces `{}`. _Sidefact: JSON is just an object itself._

```json
{
  "key": {
    "subkey": "value"
  }
}
```

In the example above, `key` is the key and `subkey` is the subkey and `value` is the value.

We can nest JSON objects as much as we want but in this project, we only nest one level except for the `logs` key because it has a lot of subkeys.

</details>

### Variables

- Normal variables: `{variableName}`<br>
  Example: `{username}` will parse into `thelukez`.
- Command placeholders: `{command:commandname}`<br>
  Example: `{command:help}` will parse to a clickable `/help`.

Note that you can also write command placeholders with spaces like `{command:config tickets}` which parses to `/config tickets`.

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

| What is wanted later                                  | How to write it | Explanaition                                     |
| ----------------------------------------------------- | --------------- | ------------------------------------------------ |
| `"some text in qoutes"`                               | `\"some text\"` | Qoutes must be escaped because of JSON.          |
| A new line                                            | `\n`            | It's the common standard.                        |
| A backslash `\`                                       | `\\`            | Backslashes must be escaped because of JSON.     |
| A single asterisk `*`<br>(!NOT for Discord markdown!) | `\\*`           | Escaping the asterisk + the `\` because of JSON. |

For Discord Markdown, please refer to the following article: [Markdown Text 101 (Chat Formatting: Bold, Italic, Underline)](https://support.discord.com/hc/en-us/articles/210298617-Markdown-Text-101-Chat-Formatting-Bold-Italic-Underline)

## Rules

- Don't change variables
  Especially not the commands (`{command:help}`) - if a user clicks on a command placeholder, the localized version will be automatically used
- Don't change the JSON keys (`{ "key": "value" }`)

## Tips

- Use a program like [Visual Studio Code](https://code.visualstudio.com/download) to edit JSON files and have syntax highlighting to avoid mistakes.

  If you don't want to download that, you can change the Domain from `github.com` to `github.dev` in the URL of the file you want to edit. This will open the file in a web editor where you also have syntax highlighting and can commit and push the changes directly.

- If you have an issue or a question, please ask in the [Discord channel](https://ptb.discord.com/channels/1064594649668395128/1294623837614379069).

  _(You need the **Translator** role to have access to this channel which can be requested by sending a DM to @thelukez)_

## Currently needed translations

- [ ] `fr`
- [ ] `de`
- [ ] `it`
- [ ] `es`
