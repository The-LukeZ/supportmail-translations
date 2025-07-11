import { existsSync, readFileSync } from "fs";
import { join } from "path";

function parseJsonLocale(filePath) {
  const content = readFileSync(filePath, "utf8");
  return JSON.parse(content);
}

function flattenObject(obj, prefix = "") {
  const flattened = {};

  for (const [key, value] of Object.entries(obj)) {
    const newKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      Object.assign(flattened, flattenObject(value, newKey));
    } else {
      flattened[newKey] = value;
    }
  }

  return flattened;
}

function validateLocales() {
  const localeDir = join(import.meta.dirname);
  const locales = ["en", "de", "fr"];
  const localeData = {};
  const flattenedData = {};

  console.log("🔍 Starting locale validation...\n");

  // Load all locale files
  for (const locale of locales) {
    const localePath = join(localeDir, `${locale}.json`);

    if (!existsSync(localePath)) {
      console.error(`::error::Locale file not found: ${locale}.json`);
      process.exit(1);
    }

    try {
      localeData[locale] = parseJsonLocale(localePath);
      flattenedData[locale] = flattenObject(localeData[locale]);
      console.log(`✅ Loaded ${locale}.json (${Object.keys(flattenedData[locale]).length} keys)`);
    } catch (error) {
      console.error(`::error::Failed to parse ${locale}.json: ${error.message}`);
      process.exit(1);
    }
  }

  const enKeys = new Set(Object.keys(flattenedData.en));
  let hasErrors = false;
  let totalMissing = 0;
  let totalExtra = 0;

  console.log("\n📊 Validation Results:");
  console.log("=".repeat(50));

  // Check for missing keys in other locales
  for (const locale of locales) {
    if (locale === "en") continue;

    const localeKeys = new Set(Object.keys(flattenedData[locale]));
    const missingKeys = [...enKeys].filter((key) => !localeKeys.has(key));
    const extraKeys = [...localeKeys].filter((key) => !enKeys.has(key));

    if (missingKeys.length > 0) {
      console.log(`\n::error::Missing keys in ${locale}.json:`);
      missingKeys.forEach((key) => console.log(`  - ${key}`));
      hasErrors = true;
      totalMissing += missingKeys.length;
    }

    if (extraKeys.length > 0) {
      console.log(`\n::warning::Extra keys in ${locale}.json (not in en.json):`);
      extraKeys.forEach((key) => console.log(`  + ${key}`));
      hasErrors = true;
      totalExtra += extraKeys.length;
    }

    if (missingKeys.length === 0 && extraKeys.length === 0) {
      console.log(`\n✅ ${locale}.json is in sync with en.json`);
    }
  }

  console.log("\n" + "=".repeat(50));
  console.log("📈 Summary:");
  locales.forEach((locale) => {
    console.log(`Total keys in ${locale}.json: ${Object.keys(flattenedData[locale]).length}`);
  });

  if (hasErrors) {
    console.log(
      `\n::error::Validation failed with ${totalMissing} missing keys and ${totalExtra} extra keys`,
    );
    console.log("💡 Please update the locale files to fix the inconsistencies.");
    process.exit(1);
  } else {
    console.log("\n🎉 All locale files are properly synchronized!");
    process.exit(0);
  }
}

validateLocales();
