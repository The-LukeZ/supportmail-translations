# Supportmail Locales (aka Translations)

Translations for SupportMail

## Contribute

If you want to add another language,

1. Fork this repository
2. Copy the `en.json` file and name it just with the two first letters of the locale.

    Example: `en-US` => `en.json` and `es-ES` => `es.json`

3. Translate the file and create a pull request and I will look at it and merge it.

The list of locales can be found [here](https://discord.com/developers/docs/reference#locales).

### Variables

Variables look like this:

```txt
This is a {placeholder}.
```

## Rules

-   Don't change the index.js. I do that.
-   Don't change variables
-   Don't change the JSON keys (Example: `{ "key": "value" }`)
