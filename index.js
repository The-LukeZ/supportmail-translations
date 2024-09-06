const { Collection } = require("discord.js");

const supportedLocales = ["en"];

const LOCALES = {
    en: require("./en.json"),
};

/**
 *
 * @param {string} commandName The command name to parse
 * @param commands The Collection of application commands of the client
 */
function getCommandId(commandName, commands) {
    return (
        commands.find((c) => c.name == commandName.split(" ")[0])?.id || null
    );
}

const placeholderRegex = /\{([^{}]+)\}/g;

/**
 *
 * @param {String} key The key of the locale to get
 * @enum {supportedLocales} language The target language
 * @param {object?} data The optional data to parse the locale string with
 * @param {*} commands The commands (only needed if you know that there are commands displayed)
 */
module.exports = function getLocale(
    key,
    language = "en",
    data = {},
    commands = null
) {
    const lang = language.slice(0, 2);
    language = supportedLocales.includes(lang) ? lang : "en";
    const [module, _key] = key.split(".");
    /** @type {string} */
    let locale = LOCALES[lang]?.module?._key || "undefined";

    return locale?.replace(placeholderRegex, (_, vName) => {
        if (vName.startsWith("command") && commands) {
            const commandName = vName.split(":")[1];
            console.log(commandName);
            const commandId = getCommandId(commandName, commands);
            return `</${commandName}:${commandId}>`;
        } else {
            return `${data[vName]}`;
        }
    });
};
