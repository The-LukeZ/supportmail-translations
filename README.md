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

-   Normal variables: `{placeholder}`
-   Command placeholders: `{command:help}`

Command placeholders will eventually parse to a clickable `/help`.

Note that you can also write command placeholders with spaces like `{command:config tickets panel}` .

## Rules

-   Don't change the index.js. I do that.
-   Don't change variables
-   Don't change the JSON keys (Example: `{ "key": "value" }`)
