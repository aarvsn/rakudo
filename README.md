# Rakudo (楽土)

**A single-file, offline-readable reference for PlayStation hardware and emulation.**

Rakudo documents the architecture of every PlayStation console — PS1, PS2, PSP, PS3, PS Vita, PS4, PS VR / VR2, and PS5 — down to CPU/GPU silicon, memory subsystems, storage media, and regional model revisions. Each generation is paired with a practical emulation guide: which emulator to use, its current accuracy, whether a BIOS/firmware file is required, and realistic host hardware requirements.

There is no build step and no server-side code. It's a static multi-page HTML site — clone it, open `index.html` in a browser, and click through the chapters. Every page carries its own copy of the sidebar nav (a plain static site has no includes), so any page also works fine opened directly.

## Read it

Open [`index.html`](index.html) as the cover page, or view it rendered via GitHub Pages once enabled for this repo (see [Publishing](#publishing-with-github-pages) below).

## Structure

```
index.html                    Cover, introduction, how to read this book
assets/style.css               Shared styles for every page
assets/nav.js                  Active-link highlighting for the sidebar
docs/ps1.html                  PlayStation (PS1)
docs/ps2.html                  PlayStation 2
docs/psp.html                  PSP
docs/ps3.html                  PlayStation 3
docs/vita.html                 PS Vita
docs/ps4.html                  PlayStation 4
docs/psvr.html                 PS VR / VR2
docs/ps5.html                  PlayStation 5
docs/compat-matrix.html        Emulator compatibility matrix (all platforms, one page)
docs/bios.html                 BIOS & firmware dumping methods
docs/legal.html                Legal notes
docs/glossary.html             Glossary
```

| Chapter | Covers |
|---|---|
| PlayStation (PS1) | CoreWare CW33300, GTE, SPU, model revisions SCPH-1000 → PS-One |
| PlayStation 2 | Emotion Engine, Graphics Synthesizer, VU0/VU1, fat → slim revisions |
| PSP | Allegrex CPU, Media Engine, PSP-1000 → PSP Go |
| PlayStation 3 | Cell Broadband Engine, RSX, Phat → Super Slim |
| PS Vita | Cortex-A9, PowerVR SGX543MP4+, OLED vs. LCD models |
| PlayStation 4 | Jaguar CPU, GCN GPU, base vs. Pro |
| PS VR / VR2 | Display, tracking, and processing differences |
| PlayStation 5 | Zen 2 / RDNA 2, base vs. Pro (PSSR, bandwidth, clocks) |
| Emulator compatibility matrix | One-page summary across all platforms |
| BIOS & firmware dumping | Legal, hardware-based dumping method per generation |
| Legal notes | Emulation and personal-backup case law and caveats |

## Sourcing and accuracy

Specification figures are drawn from Sony technical documentation, official service manuals, teardown reports, and long-standing reverse-engineering references (psx-spx, PSDevWiki, Vita Nubis, the RPCS3 and PCSX2 wikis). Where a figure was never officially confirmed by Sony, it is labelled `UNCONFIRMED` in the text rather than presented as fact.

If you spot an inaccuracy, please open an issue or a pull request — see [Contributing](#contributing).

## Contributing

Corrections, additional model-revision data, and emulator-status updates are welcome.

1. Fork the repo and edit the relevant page under `docs/` (one file per console/chapter) — the sidebar nav is duplicated at the top of every page and must be updated in every file if you add or rename a page.
2. Keep the existing spec-table / emulation-panel structure for consistency.
3. Cite your source in the pull request description (service manual, teardown, official Sony documentation, or a named reverse-engineering wiki).
4. Open a pull request against `main`.

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## License

Content and code are released under the [MIT License](LICENSE). PlayStation, PS1–PS5, DualShock, DualSense, and related marks are trademarks of Sony Interactive Entertainment. This project is not affiliated with, endorsed by, or sponsored by Sony Interactive Entertainment.
