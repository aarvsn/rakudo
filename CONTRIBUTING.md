# Contributing to Rakudo

Thanks for helping keep this reference accurate. A few ground rules keep the book consistent and trustworthy.

## What belongs here

- Verifiable hardware specifications (CPU/GPU/memory/storage/IO), sourced from official documentation, service manuals, teardowns, or established reverse-engineering references.
- Model-revision data (region, model number, what changed).
- Emulator status updates: accuracy tier, BIOS/firmware requirement, realistic host requirements, known issues.

## What doesn't

- Unverified rumors presented as fact. If a figure is disputed or was never officially confirmed, mark it `UNCONFIRMED` in the text rather than omitting the caveat.
- Links to or instructions for obtaining pre-dumped BIOS, firmware, or ROM files. The BIOS/firmware section describes *methods* for dumping your own files from hardware you own — it does not, and should not, link to file repositories.
- Marketing language. Describe what hardware does, not how impressive it is.

## Style

- Each console/chapter is its own file under `docs/`, following the existing pattern: overview → core architecture spec table → notable model variants → emulation guide panel.
- Shared CSS lives in `assets/style.css` and the active-link script in `assets/nav.js` — don't duplicate styles into individual pages.
- The sidebar nav markup is duplicated at the top of every page (this is a plain static site with no template includes). If you add, remove, or rename a page, update the sidebar in **every** `docs/*.html` file and `index.html`, and update the prev/next `.chapter-nav` links on the two chapters adjacent to your change.
- Spec tables use `<table class="spec-table">` with a `<th>` label column and `<td>` value column.
- Emulator guidance uses the `.emu-panel` / `.emu-row` structure with a `.status` badge (`full`, `high`, `mid`, `early`, or `none`).
- Keep prose factual and specific — real numbers, real model numbers, real dates — rather than generic description.

## Submitting a change

1. Fork the repository.
2. Edit `index.html` (or `README.md` for documentation changes).
3. In your pull request description, cite the source for any new or changed figures.
4. Open the pull request against `main`. A maintainer will review for accuracy and consistency.

## Reporting an inaccuracy without submitting a fix

Open an issue describing the section, the figure in question, and (if possible) a source that supports the correction.
