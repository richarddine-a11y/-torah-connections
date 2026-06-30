// ─────────────────────────────────────────────────────────────────
//  TORAH CONNECTIONS — Special Edition
//  Fourth of July · Semiquincentennial · July 4, 2026 - Tammuz 19, 5786
// ─────────────────────────────────────────────────────────────────
 
const PUZZLE = {
 
  week:       "Fourth of July — Semiquincentennial Edition",
  hebrewWeek: "יוֹם הָעַצְמָאוּת הָאָמֶרִיקָנִי",
  date:       "18 Tammuz 5786  ·  July 4, 2026",
  parasha:    "250 Years of American Independence",
  haftarah:   "Declaration of Independence 
 
  reflectionQuestion: "Claude drafted the Al HaNissim prayer below for this occasion. Do you like it? Would you make any changes?",
 
  categories: [
    {
      name:  "Cookout Foods That Stand In for Seder Symbols",
      color: "yellow",
      words: ["CORN", "HOT DOG", "MUSTARD", "WATERMELON"],
      explanation: "In the Fourth of July Haggadah, the classic seder plate is reimagined with cookout foods: watermelon for karpas (the fresh vegetable of springtime and freedom), corn for the harvest abundance of the new land, hot dog for the shank bone (an all-American stand-in for the Paschal offering), and mustard for maror — the sharp condiment that still carries a hint of sting. Same structure, new symbols, same question: what does it mean to be free?"
    },
    {
      name:  "Words from Micah 4:4 — The Verse Washington Quoted at Newport",
      color: "green",
      words: ["FIG TREE", "MICAH", "SAFETY", "VINE"],
      explanation: "When George Washington wrote to the Hebrew Congregation of Newport in 1790 — promising that the new government gives \"to bigotry no sanction, to persecution no assistance\" — he sealed the letter by quoting Micah 4:4: \"Every one shall sit in safety under his own vine and fig tree.\" The prophet's vision of peaceful sovereignty became the founding promise to American Jews. The Al HaNissim quotes this verse directly: וְיָשְׁבוּ אִישׁ תַּחַת גַּפְנוֹ וְתַחַת תְּאֵנָתוֹ."
    },
    {
      name:  "Songwriters of the American Standards in the Hallel",
      color: "blue",
      words: ["BATES", "BERLIN", "NORWORTH", "VON TILZER"],
      explanation: "The Fourth of July Haggadah replaces the traditional Hallel with American songs of hope and belonging — each composed by a Jewish immigrant or child of immigrants: Irving Berlin (\"God Bless America\"), Jack Norworth (\"Take Me Out to the Ballgame\"), Harry Von Tilzer (\"Take Me Out to the Ballgame\" — he wrote the music to Norworth's lyrics), and Katharine Lee Bates (\"America the Beautiful\" — not Jewish, but her vision of America as a moral project resonates throughout the Haggadah)."
    },
    {
      name:  "Words Quoted from the Founding Texts of Liberty",
      color: "purple",
      words: ["DROR", "EQUAL", "LIBERTY", "UNALIENABLE"],
      explanation: "The Fourth of July Haggadah draws from two founding texts that speak the same language across centuries: the Declaration of Independence declares all people EQUAL, endowed with UNALIENABLE rights and LIBERTY; and Leviticus 25:10 — the verse inscribed on the Liberty Bell — proclaims DROR (דְּרוֹר, freedom) throughout the land to all its inhabitants. The Al HaNissim closes with that very verse: וּקְרָא דְרוֹר בָּאָרֶץ לְכָל יוֹשְׁבֶיהָ."
    }
  ],
 
  dvarTorah: {
    hebrewTitle: "עַל הַחֵרוּת — אַל הַנִּסִּים לְיוֹם הָעַצְמָאוּת",
    title: "עַל הַחֵרוּת — An Al HaNissim for the Fourth of July",
    text: `
<p style="font-size:0.82rem;color:var(--ink-soft);font-style:italic;margin-bottom:1rem;">Added in the הוֹדָאָה (thanksgiving) section of Birkat HaMazon, before וְעַל הַכֹּל, on the Fourth of July.</p>
 
<p style="font-family:'Frank Ruhl Libre',serif;font-size:1.15rem;line-height:2;direction:rtl;text-align:right;margin-bottom:1.2rem;">
עַל הַנִּסִּים, וְעַל הַפֻּרְקָן, וְעַל הַגְּבוּרוֹת, וְעַל הַתְּשׁוּעוֹת, וְעַל הַחֵרוּת, וְעַל הַמָּנוֹחַ שֶׁנָּתַתָּ לַאֲבוֹתֵינוּ וְלָנוּ בָּאָרֶץ הַזֹּאת בַּיָּמִים הָהֵם וּבַזְּמַן הַזֶּה.
<br><br>
בִּימֵי הָאָבוֹת הַמְיַסְּדִים אֲשֶׁר קָמוּ בְּאֶרֶץ חֲדָשָׁה, כְּשֶׁעָמְדוּ עַמִּים לִדְרֹשׁ חֵרוּת מִתַּחַת יַד מַלְכוּת רָמָה, וַיִּכְתְּבוּ וַיַּכְרִיזוּ כִּי כָל הָאָדָם נִבְרָא בְּצֶלֶם וְשָׁוֶה בְּעֵינֵי בּוֹרְאוֹ, וְכִי חִלֵּק לָהֶם נוֹתֵן הַחַיִּים זְכֻיּוֹת אֲשֶׁר לֹא יוּכַל אִישׁ לְהָסִיר — חַיִּים, חֵרוּת, וּרְדִיפַת הָאֹשֶׁר. וְאַתָּה בְּרַחֲמֶיךָ הָרַבִּים נָתַתָּ בְּלִבָּם לְכוֹנֵן מֶמְשָׁלָה הַיּוֹנֶקֶת כֹּחָהּ מִן הָעָם, וְלֹא לִתֵּן לִרְשָׁעוּת מָקוֹם וְלֹא לִרְדִיפָה יָד.
<br><br>
וּלְעַמְּךָ בֵּית יִשְׂרָאֵל הֱיִיתָ מַחֲסֶה בָּאָרֶץ הַזֹּאת, אֲשֶׁר פָּתְחָה שְׁעָרֶיהָ לַנִּמְלָטִים מֵרֶדֶף וּמִגֵּרוּשׁ, וַתָּשֶׂם קֵץ "לִסְבֹלֶת" אֲשֶׁר אֻמּוֹת חָסֹד יַחְסֹדוּ, וַתִּתֵּן תַּחְתֶּיהָ זְכוּת מִלֵּדָה לְכָל יוֹשְׁבֶיהָ. וַתְּקַיֵּם בָּנוּ דְּבַר נְבִיאֶךָ: וְיָשְׁבוּ אִישׁ תַּחַת גַּפְנוֹ וְתַחַת תְּאֵנָתוֹ וְאֵין מַחֲרִיד.
<br><br>
עַל כֵּן, יְיָ אֱלֹהֵינוּ וֵאלֹהֵי אֲבוֹתֵינוּ, מוֹדִים אֲנַחְנוּ לָךְ עַל הַחֵרוּת אֲשֶׁר חוֹנַנְתָּנוּ, וּמִתְפַּלְּלִים לְפָנֶיךָ שֶׁתַּעֲמֹד לָנוּ עוֹד לִשְׁמֹר אֶת מַתְּנוֹתֶיךָ. תֵּן בְּלֵב יוֹשְׁבֵי הָאָרֶץ הַזֹּאת לִרְדֹּף צֶדֶק וּמִשְׁפָּט, לְהָגֵן עַל הַחַלָּשׁ, לְקַבֵּל אֶת הַגֵּר, וְלִשְׁמֹר עַל חֵרוּתָם שֶׁל אֲחֵרִים כְּחֵרוּתָם שֶׁלָּהֶם. וּקְרָא דְּרוֹר בָּאָרֶץ לְכָל יוֹשְׁבֶיהָ, וְנֹאמַר אָמֵן.
</p>
 
<hr style="border:none;border-top:1px solid var(--parchment-dark);margin:1.4rem 0;">
 
<p style="font-family:'Cinzel',serif;font-size:0.78rem;letter-spacing:0.1em;text-transform:uppercase;color:var(--wine);opacity:0.75;margin-bottom:0.8rem;">English Translation</p>
 
<p>For the miracles, and for the redemption, and for the mighty deeds, and for the deliverances, and for the freedom, and for the refuge that You granted to our ancestors and to us in this land, in those days and in this season:</p>
 
<p>In the days of the Founders who arose in a new land — when peoples stood up to demand freedom from beneath the hand of a mighty kingdom, and wrote and proclaimed that all humanity is created in the divine image and equal in the eyes of its Creator, and that the Giver of Life had endowed them with rights that no one may take away — life, liberty, and the pursuit of happiness. And You, in Your abundant mercy, placed it in their hearts to establish a government that draws its strength from the people, giving to wickedness no place and to persecution no hand.</p>
 
<p>And for Your people, the House of Israel, You were a shelter in this land — which opened its gates to those fleeing persecution and expulsion, and put an end to the "mere toleration" by which nations had condescended to them, granting instead a birthright to all its inhabitants. And You fulfilled in us the word of Your prophet: "And they shall sit, every one under his vine and under his fig tree, and none shall make them afraid."</p>
 
<p>Therefore, L—RD our God and God of our ancestors, we give thanks to You for the freedom You have graced us with, and we pray before You that You stand by us still, to guard Your gifts. Place in the hearts of the inhabitants of this land to pursue justice and righteousness, to protect the weak, to welcome the stranger, and to guard the freedom of others as their own. "And proclaim liberty throughout the land to all its inhabitants" — and let us say, Amen.</p>
`
  }
 
};
 
