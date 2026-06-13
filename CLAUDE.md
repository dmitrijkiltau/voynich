## General instructions

The quotations might be in the wrong format when given to you. Make sure to always correct quotation marks for the respective language (e.g., „Deutsche Zitate“ and “English quotes”).

## Update instructions

These are the instructions for updating the various sections of the project when the user asks for updates. Follow these steps carefully to ensure that all updates are made correctly and consistently across the project.

### Updating the summary section

When the user asks to update the summary section, follow these steps:

1. Update the `content` array in `voynich-svelte/src/lib/components/sections/SummarySection.svelte` with any new summary points or corrections to existing summary points.

### Updating the folio progress

When the user asks to update the folio progress, follow these steps:

1. Check the folder `voynich-svelte/src/lib/folios/` whether the new folio already exists:
  - If it does, update the existing `fXXX[r|v].json` file with the new metadata and content structure.
  - If it does not exist, create a new `fXXX[r|v].json` file for the new folio with the appropriate metadata and content structure.
2. In `voynich-svelte/src/lib/folio-data.js`, update the `FOLIO_DATA` array:
  - Set the correct status for the new folio (e.g., 'confirmed', 'partial', etc.) and add a comment next to it.

### Updating the translator tool

When the user asks to update the translator tool, follow these steps:

1. Update the `EXAMPLES` array in `voynich-svelte/src/lib/components/sections/TranslatorSection.svelte` with any new examples or corrections to existing examples.
2. Make sure the translator tool is still up to date and implement the grammar rules and lexicon correctly.

### Updating the lexicon

When the user asks to update the lexicon, follow these steps:

1. Update the corresponding array in `voynich-svelte/src/lib/lexicon-data.js` with any new terms or corrections to existing terms.
2. If there are aliases, update the `LEXICON_ALIASES` object in the same file to ensure that all relevant terms are properly linked.

### Updating the grammar rules

When the user asks to update the grammar rules, follow these steps:

1. Update the `RULES` array in `voynich-svelte/src/lib/grammar-rules-data.js` with any new rules or corrections to existing rules.
2. Update the `RULES_CHANGELOG` array in the same file with a summary of the changes made to the grammar rules.

### Updating the backtest

When the user asks to update the backtest, follow these steps:

1. Update the `TESTED` array in `voynich-svelte/src/lib/backtest-data.js` with any new test cases or corrections to existing test cases. Except type `I` tests, which are frozen.
2. Update the `STATS` object in the same file with any new statistics or corrections to existing statistics, such as the total number of tested words, etc.

### Updating the references

When the user asks to update the references, follow these steps:

1. Update the `REFS` array in `voynich-svelte/src/lib/references-data.js` with any new references or corrections to existing references.

### Updating the gibberish test

When the user asks to update the gibberish test, follow these steps:

1. Update the `TESTS` array in `voynich-svelte/src/lib/components/sections/GibberishSection.svelte` with any new test cases or corrections to existing test cases.

### Updating the open problems

When the user asks to update the open problems, follow these steps:

1. Update the `OPEN_PROBLEMS` array in `voynich-svelte/src/lib/open-problems-data.js` with any new open problems or corrections to existing open problems.

### Updating the version

When the user asks to update the version, follow these steps:

1. Update the `version` field in `voynich-svelte/src/lib/index.js` to the new version number, as well as the `version` field in `voynich-svelte/package.json`.
2. Look through the recent changes (uncommitted or committed) and summarize the key changes in the `changelog` array in `voynich-svelte/src/lib/index.js`, keeping only the new changes since the last version. Each change should be on a new line.