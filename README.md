# Torah Connections | קשרי תורה

A weekly Jewish learning game in the style of NYT Connections,
featuring Torah and Haftarah readings with category explanations
and a Dvar Torah.

---

## Files

| File | Purpose |
|---|---|
| `index.html` | The game engine — **never needs to change** |
| `current-puzzle.js` | This week's puzzle — **replace every week** |

---

## Hosting on GitHub Pages (free, one-time setup)

1. Create a free account at [github.com](https://github.com) if you don't have one.
2. Create a new repository (e.g. `torah-connections`). Make it **Public**.
3. Upload both `index.html` and `current-puzzle.js`.
4. Go to **Settings → Pages**, set source to **Deploy from branch → main → / (root)**.
5. Your site will be live at `https://YOUR-USERNAME.github.io/torah-connections/`

---

## Updating the puzzle each week

Only `current-puzzle.js` needs to change. Either:

**Option A — Edit on GitHub.com directly**
1. Open `current-puzzle.js` in your repository.
2. Click the pencil (Edit) icon.
3. Replace the contents with the new puzzle (generated with Claude).
4. Click **Commit changes**. The site updates in ~30 seconds.

**Option B — Generate with Claude, then paste**
1. Ask Claude to generate `current-puzzle.js` for the week's parasha.
2. Copy the output, paste it into the GitHub editor, commit.

---

## Puzzle data format reference

```javascript
const PUZZLE = {

  // Header
  week:       "Parashat Name",          // English parasha name
  hebrewWeek: "פָּרָשַׁת שֵׁם",             // Hebrew with nikud
  date:       "DD Month YYYY",          // Jewish + Gregorian date
  parasha:    "Book chapter:verse–…",   // Chumash reference
  haftarah:   "Book chapter:verse–…",   // Haftarah reference

  categories: [
    {
      name:        "Category Title",           // shown in solved row
      color:       "yellow",                   // yellow | green | blue | purple
      words:       ["word1","word2","word3","word4"],  // exactly 4 words
      explanation: "Educational note shown after the group is solved."
    },
    // ... 3 more categories
  ],

  dvarTorah: {
    hebrewTitle: "כּוֹתֶרֶת בְּעִבְרִית",  // Hebrew title (optional)
    title:       "English subtitle",         // English subtitle (optional)
    text: `<p>Paragraph text. Use <span class="heb">עִבְרִית</span>
            for inline Hebrew.</p>`
  }
};
```

### Color convention (by difficulty)
- **yellow** — easiest / most straightforward
- **green**  — moderate
- **blue**   — harder
- **purple** — most challenging / most nuanced

---

## Inline Hebrew in the Dvar Torah

Wrap any Hebrew text in `<span class="heb">…</span>` to apply
the correct font and right-to-left rendering:

```html
<p>The root <span class="heb">ק-ר-ב</span> means "to draw near."</p>
```

---

*Built with Claude · Anthropic*
