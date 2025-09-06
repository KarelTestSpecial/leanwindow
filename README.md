# Lean Window Chrome Extensie

Dit is een eenvoudige Chrome-extensie die het huidige browservenster omzet in een "lean window" (een venster zonder werkbalk of adresbalk) met één enkele klik op het extensie-icoon.

## Bestanden

*   `manifest.json`: Het configuratiebestand van de extensie.
*   `background.js`: Bevat de JavaScript-logica voor het omzetten van het venster.
*   `icons/`: De map waar de iconen voor de extensie geplaatst moeten worden.

## Installatie

Omdat deze extensie niet in de Chrome Web Store staat, moet je deze handmatig laden.

1.  **Download of clone de bestanden** naar een map op je computer.
2.  **Maak de iconen aan:** Je moet handmatig drie iconen aanmaken en in de `icons` map plaatsen:
    *   `icon16.png` (16x16 pixels)
    *   `icon48.png` (48x48 pixels)
    *   `icon128.png` (128x128 pixels)
3.  **Laad de extensie in Chrome:**
    *   Open Google Chrome en navigeer naar `chrome://extensions`.
    *   Activeer rechtsboven de **Developer mode** (Ontwikkelaarsmodus).
    *   Klik op de knop **Load unpacked** (Uitgepakte extensie laden).
    *   Selecteer de volledige map waarin je de bestanden hebt opgeslagen (de map die `manifest.json` bevat).

## Gebruik

Na installatie verschijnt het icoon van de extensie in de werkbalk van Chrome. Klik op dit icoon om het actieve venster om te zetten naar een lean window.
