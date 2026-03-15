// ─────────────────────────────────────────────────────────────────
//  TORAH CONNECTIONS — Weekly Puzzle Data
//  Replace this file each week with the new puzzle.
//  The index.html game engine will read from this automatically.
// ─────────────────────────────────────────────────────────────────

const PUZZLE = {

  // ── Header info ──────────────────────────────────────────────────
  week:       "Parashat Vayikra",
  hebrewWeek: "פָּרָשַׁת וַיִּקְרָא",
  date:       "21 Adar 5786  ·  March 21, 2026",
  parasha:    "Leviticus 1:1–5:26",
  haftarah:   "Isaiah 43:21–44:23",

  // ── Four categories ───────────────────────────────────────────────
  // • color must be exactly: "yellow", "green", "blue", or "purple"
  // • words: array of exactly 4 strings (Hebrew with or without nikud)
  // • explanation: shown in the solved row after that group is found
  categories: [
    {
      name: "Types of Offerings",
      color: "yellow",
      words: ["עוֹלָה", "מִנְחָה", "שְׁלָמִים", "חַטָּאת"],
      explanation: "The four core korban types introduced in Vayikra 1–4: the burnt offering (עוֹלָה, wholly consumed by fire), grain offering (מִנְחָה), peace offering (שְׁלָמִים), and sin offering (חַטָּאת)."
    },
    {
      name: "Animals for the Olah (Vayikra 1)",
      color: "green",
      words: ["שׁוֹר", "כֶּבֶשׂ", "עֵז", "תּוֹר"],
      explanation: "Vayikra 1 offers a sliding scale: cattle (שׁוֹר) for the wealthy, sheep (כֶּבֶשׂ) or goat (עֵז) for the middling, and turtledove (תּוֹר) for those of limited means — reflecting the Torah's insistence that all Israelites can draw near."
    },
    {
      name: "Priestly Actions at the Altar",
      color: "blue",
      words: ["זָרַק", "הִקְטִיר", "הִפְשִׁיט", "שָׁחַט"],
      explanation: "The physical rites of the kohanim: dashing blood on the altar (זָרַק), turning fat to smoke (הִקְטִיר), flaying the animal (הִפְשִׁיט), and slaughtering (שָׁחַט). Each gesture had precise halakhic requirements, engaging the entire body in the act of worship."
    },
    {
      name: "From the Root ק-ר-ב  (Draw Near)",
      color: "purple",
      words: ["קָרַב", "קָרְבָּן", "לְהַקְרִיב", "קָרוֹב"],
      explanation: "The root ק-ר-ב saturates this parasha. קָרְבָּן (offering) means literally 'that which draws near.' The entire sacrificial system is a structured theology of approach — and the call to nearness does not end with the Temple."
    }
  ],

  // ── Dvar Torah ────────────────────────────────────────────────────
  dvarTorah: {
    hebrewTitle: "לְהַקְרִיב — עַל פֵּירוּשׁ הַקִּרְבָּה",
    title: "The Grammar of Approach",
    text: `
<p>The book of Vayikra begins with a whisper. God calls to Moses — <span class="heb">וַיִּקְרָא אֶל-מֹשֶׁה</span> — before issuing a single command. The rabbis note the diminutive <em>alef</em> written small at the end of <span class="heb">וַיִּקְרָא</span>: something intimate, nearly inaudible, is happening. Relationship precedes ritual.</p>

<p>What is a <span class="heb">קָרְבָּן</span>? The English word <em>sacrifice</em> — from <em>sacer facere</em>, to make sacred — points toward the object surrendered. The Hebrew word points toward the person. From the root <span class="heb">ק-ר-ב</span>, "to draw near," a <span class="heb">קָרְבָּן</span> is the act and instrument of approach itself. You are not giving something up; you are moving toward something.</p>

<p>The Netziv, in <em>Ha'emek Davar</em>, emphasizes that the precise gestures of the korban service — the sequence of blood, fire, and smoke — were not incidental to the spiritual experience but were its very medium. The body enacts what the soul intends. There is no shortcut to transcendence.</p>

<p>In an age without the Temple, this parasha asks: what does it mean to draw near? The Talmud teaches that prayer stands in the place of korbanot. But perhaps the deeper lesson is structural: genuine approach requires discipline, preparation, and the courage to show up — not just once, but again and again, through the full grammar of a life.</p>
`
  }

};
