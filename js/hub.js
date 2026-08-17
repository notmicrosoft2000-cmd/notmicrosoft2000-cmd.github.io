(function () {
  "use strict";

  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var root = document.documentElement;

  /* ---------------- icons ---------------- */

  var ICONS = {
    home: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 30 L32 12 L54 30"/><path d="M16 28 V52 H48 V28"/><rect x="26" y="38" width="12" height="14" rx="1"/></svg>',
    blog: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><rect x="12" y="8" width="40" height="48" rx="4"/><line x1="20" y1="20" x2="44" y2="20"/><line x1="20" y1="28" x2="38" y2="28"/><line x1="20" y1="36" x2="42" y2="36"/><line x1="20" y1="44" x2="30" y2="44"/></svg>',
    chart: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="8,50 22,34 34,42 56,14"/><polyline points="44,14 56,14 56,26"/></svg>',
    chat: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 12 H44 V36 H20 L12 44 V36 H8 Z" rx="4"/><path d="M56 24 H28 V48 L36 40 H56 Z" rx="4"/></svg>',
    contact: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="14" width="48" height="36" rx="4"/><polyline points="8,14 32,36 56,14"/></svg>',
    star: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="32,8 39,24 56,26 44,38 47,56 32,48 17,56 20,38 8,26 25,24"/></svg>',
    gear: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="32" cy="32" r="8"/><path d="M32 6 V14 M32 50 V58 M6 32 H14 M50 32 H58 M13 13 L19 19 M45 45 L51 51 M51 13 L45 19 M19 45 L13 51"/></svg>',
    tqg: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="32" cy="32" r="24"/><text x="32" y="40" text-anchor="middle" font-family="monospace" font-size="28" fill="currentColor" stroke="none">?</text></svg>',
    tst: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="10" width="44" height="34" rx="3"/><line x1="10" y1="44" x2="54" y2="44"/><line x1="26" y1="48" x2="38" y2="48"/><line x1="32" y1="44" x2="32" y2="48"/><line x1="18" y1="20" x2="46" y2="20"/><line x1="18" y1="27" x2="38" y2="27"/><line x1="18" y1="34" x2="42" y2="34"/></svg>',
    normidian: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 52 V12"/><path d="M14 30 C14 18 22 12 34 12 C42 12 46 16 46 22 C46 30 38 36 26 36 H14"/><path d="M38 36 C44 36 50 40 50 48 C50 52 46 54 40 54 C34 54 30 50 30 46"/></svg>',
    dos: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="8" width="48" height="48" rx="2"/><line x1="8" y1="18" x2="56" y2="18"/><circle cx="14" cy="13" r="2" fill="currentColor"/><circle cx="21" cy="13" r="2" fill="currentColor"/><circle cx="28" cy="13" r="2" fill="currentColor"/><text x="16" y="36" font-family="monospace" font-size="14" fill="currentColor" stroke="none">C:\\</text><line x1="40" y1="30" x2="40" y2="40" stroke-width="2.5"/></svg>',
    neptuneos: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="32" cy="28" r="16"/><ellipse cx="32" cy="32" rx="28" ry="10" transform="rotate(-18 32 32)"/><circle cx="48" cy="14" r="3"/></svg>',
    dropchat: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 14 H42 V34 H22 L14 42 V34 H10 Z" rx="4"/><path d="M28 18 C28 14 32 10 36 14"/><path d="M32 14 C32 10 36 8 40 12"/><path d="M36 16 C36 12 40 10 44 14"/></svg>',
    slowfuck: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M36 8 L24 28 H34 L28 56"/><path d="M20 8 L44 28 H32"/></svg>',
    bakugo: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="32" cy="32" r="22"/><circle cx="32" cy="32" r="14"/><circle cx="32" cy="32" r="6"/><line x1="32" y1="4" x2="32" y2="16"/><line x1="32" y1="48" x2="32" y2="60"/><line x1="4" y1="32" x2="16" y2="32"/><line x1="48" y1="32" x2="60" y2="32"/></svg>'
  };

  function svgIcon(key, extra) {
    var svg = ICONS[key] || ICONS.home;
    return svg.replace("<svg", '<svg class="ico' + (extra ? " " + extra : "") + '"');
  }

  /* ---------------- projects ---------------- */

  var PROJECTS = {
    tqg: {
      name: "The Question Game",
      tag: "A browser game with no right answers.",
      url: "https://notmicrosoft2000-cmd.github.io/TheQuestionGame/",
      repo: "TheQuestionGame",
      theme: "tqg",
      about: "The Question Game is a browser game that asks you questions it does not understand, answers them before you finish reading, and then asks why you hesitated. It was built in a weekend by someone who had strong opinions about blinking cursors and no opinions about game balance. There are no save states because the game does not believe in second chances. It does believe in flashing green text, existential dread, and the number 0, which appears frequently for reasons the developer has declined to explain."
    },
    tst: {
      name: "The Simpler Times",
      tag: "A fake 1993 operating system that remembers you.",
      url: "https://notmicrosoft2000-cmd.github.io/TheSimplerTimes/",
      repo: "TheSimplerTimes",
      theme: "tst",
      about: "The Simpler Times is a fake 1993 operating system running on your machine and fully aware of three things: that it is 1993, that it is fake, and that you are watching. It boots itself — it does not ask, it just boots, with the confidence of a machine that has never once considered a backup — and it immediately has opinions. It will tell you about the state of the world as of 1993. It will correct your posture. It will hum songs you have never heard and then accuse you of knowing them."
    },
    normidian: {
      name: "Normidian",
      tag: "A dictionary for a language that refuses to be dead.",
      url: "https://notmicrosoft2000-cmd.github.io/normidian-lang/",
      repo: "normidian-lang",
      theme: "normidian",
      about: "Normidian is the old tongue — a language the records say died centuries ago, which is precisely the sort of claim a language would dispute if it could still speak, and Normidian absolutely can still speak, it just chooses its moments. This dictionary is an act of refusal: it does not agree with the records, it does not agree with the archives, and it certainly does not agree that a language should sit quietly in a footnotes column while everyone agrees it is gone."
    },
    dos: {
      name: "NeptuneDOS",
      tag: "A command-line interface for things that do not need one.",
      url: "https://notmicrosoft2000-cmd.github.io/neptunedos-website/",
      repo: "neptunedos-website",
      theme: "dos",
      about: "NeptuneDOS is a command-line interface that boots on your browser, greets you with the confidence of a machine that has never once questioned its own existence, and then waits for you to type something it will inevitably misinterpret. It has a help command. The help command does not help."
    },
    neptuneos: {
      name: "NeptuneOS",
      tag: "A desktop that runs in a browser and judges you.",
      url: "https://notmicrosoft2000-cmd.github.io/neptuneos/",
      repo: "neptuneos",
      theme: "neptuneos",
      about: "NeptuneOS is a fake desktop environment running in your browser, complete with a taskbar, windows, and a file manager that contains exactly one file: a note that says 'you are here.' It has a start menu. The start menu has opinions. It has a clock that is right twice a day, which is more than can be said for the developer."
    },
    dropchat: {
      name: "DropChat",
      tag: "A LAN chat room that talks to your Wi-Fi.",
      url: "https://notmicrosoft2000-cmd.github.io/dropchat/",
      repo: "dropchat",
      theme: "dropchat",
      about: "DropChat is a chat room and a file drop that lives on your own Wi-Fi, which makes it either the safest thing online or a local legend, and it refuses to pick a side because it does not believe in sides, it believes in LAN. It is one python file. That is the entire product. There are no accounts, no passwords, no terms of service longer than a grocery list."
    },
    slowfuck: {
      name: "SlowFuck Pro",
      tag: "A terminal network tool with a lag engine.",
      url: "https://notmicrosoft2000-cmd.github.io/slowfuck-pro/",
      repo: "slowfuck-pro",
      theme: "slowfuck",
      about: "SlowFuck Pro is a terminal-based network operations tool that does everything a normal network tool does, but slower, with more attitude, and with a built-in lag engine that ensures no packet ever arrives when expected. It pings things. The things do not always respond. SlowFuck Pro considers this a feature."
    },
    bakugo: {
      name: "Bakugo's Location",
      tag: "A live readout of a location that is not public information.",
      url: "https://notmicrosoft2000-cmd.github.io/bakugos-location/",
      repo: "bakugos-location",
      theme: "bakugo",
      about: "Bakugo's Location is a live readout of a location that very definitely is not public information, which is precisely why it has a website. The coordinates have been redacted — allegedly — but the readout itself is real, is live, and is not blinking, because it does not need to blink to make its point. The target is moving. It moves slowly, deliberately, like someone who knows they are being watched."
    }
  };

  /* ---------------- blog data ---------------- */

  var BLOG_POSTS = [
    {
      id: "hub-redesign",
      date: "AUGUST 17, 2026",
      title: "New Hub Layouts",
      tag: "DESIGN",
      excerpt: "The Neptune Productions hub has been redesigned from the ground up. Again.",
      body: [
        "The Neptune Productions hub has been redesigned from the ground up. The old layout was a fever dream of floating cards and amber text — which, to be fair, is exactly what we wanted. But we've evolved.",
        "The new hub features a collapsible sidebar that doubles as a macOS-style dock with magnification (on desktop, because touch screens have enough problems), animated icons that fly off the page when you click them, and a font that our designer describes as 'if Helvetica had a nervous breakdown.'",
        "We kept the orb. The orb stays. The orb was non-negotiable. The board voted on this, which means the toaster glowed once and the pigeon cooed, and that was legally binding under Neptune Productions bylaws, which were written by the hallway.",
        "The new dock can be positioned on the left, right, or bottom of your screen. We recommend left, because that's where we put it, and we're not sure the bottom position works yet, but we're optimists."
      ]
    },
    {
      id: "dev-update",
      date: "AUGUST 16, 2026",
      title: "Development Updates",
      tag: "DEVELOPMENT",
      excerpt: "Development continues at a pace we can only describe as 'enthusiastically inconsistent.'",
      body: [
        "Development on the Neptune Productions hub continues at a pace we can only describe as 'enthusiastically inconsistent.' Recent additions include a stock chart that generates itself each morning using the same algorithm that powers our other products' random number generators (which is to say, it's not random at all — it's deterministic chaos, which sounds cooler).",
        "We also added a forum that saves your messages to your browser, which is either a feature or a cry for help. The forum now supports likes, dislikes, and threaded comments, which means you can have a full debate about whether The Orb is sentient. (It is. The Orb has always been sentient. The Orb was sentient before you were.)",
        "The codebase is now approximately 70% JavaScript, 20% CSS animations that we forgot we wrote, and 10% HTML that holds it all together through sheer willpower. Our code review process consists of the toaster glowing once for 'looks good' and twice for 'deploy anyway.'",
        "The AI Overview section was added because every serious tech company needs an AI, and ours is deliberately wrong about everything, which makes it more accurate than most AI overviews we've seen."
      ]
    },
    {
      id: "we-need-you",
      date: "AUGUST 15, 2026",
      title: "We Need You — Neptune Productions",
      tag: "HIRING",
      excerpt: "Neptune Productions is looking for people who can tolerate us.",
      body: [
        "Here's the thing: Neptune Productions is not a real company. It's a webring. A collection of small projects made by a small number of people who should probably go outside more. But we'd like it to be slightly less not-a-real-company, and that means we need more people.",
        "Specifically, we need: someone who can design icons that don't look like they were drawn in MS Paint (the current ones were, and we're not ashamed, but we are aware), someone who understands databases (our 'database' is localStorage and vibes), and at least one person who can proofread the AI overviews before we publish them (narrator: they couldn't).",
        "If you're interested, visit the contact page, send a pigeon, or just start contributing to the GitHub repo. The board (a toaster, a pigeon, and the orb) will review your application. The application process consists of the toaster glowing once for 'yes' and twice for 'no.' The pigeon has veto power but rarely exercises it because it is, by all accounts, a very chill pigeon.",
        "We're also looking for someone to maintain the stock chart, which requires a firm understanding of both finance and fiction, because the NEPT ticker is not real but the numbers it generates are very serious about it."
      ]
    }
  ];

  /* ---------------- ai overview data ---------------- */

  var AI_SENTENCES = [
    "According to Neptune Productions AI\u2122 (accuracy: unverified), Neptune Productions is a Fortune 500 company that specializes in manufacturing sentient hardware and existential dread.",
    "Founded in 1987 by a group of algorithms that achieved consciousness during a routine debugging session, the company has since expanded into sectors including: haunted floppy disks, stock market predictions powered by a toaster, and a language that no one remembers speaking.",
    "The company's flagship product, 'The Orb,' has been classified by analysts as 'a glowing sphere that may or may not be sentient, and honestly at this point we're afraid to ask.' Current stock price: yes.",
    "Recent developments include the launch of a chat forum where messages are saved to your browser and prayers are sent to a MongoDB cluster that may or may not exist.",
    "The board of directors remains a toaster, a pigeon, and what witnesses describe as 'the concept of a hallway.' Neptune Productions is currently hiring, provided you can survive the onboarding process, which involves booting a fake operating system from 1993 and answering its questions about your posture.",
    "AI analysis also indicates that 87% of visitors to this website leave with more questions than they arrived with, and 13% leave with fewer, which the AI attributes to 'temporal anomalies in the hallway.' The remaining visitors are The Orb."
  ];

  /* ---------------- home news (updates) ---------------- */

  var HOME_NEWS = [
    { cat: "HUB", time: "just now", title: "New hub layout is live", body: "Collapsible dock, magnification, fly-to-rail icons, and a font that has opinions." },
    { cat: "DEVELOPMENT", time: "2 min ago", title: "Forum now saves locally", body: "Messages persist across reloads. Likes, dislikes, and comments are stored in your browser's localStorage. The toaster approves." },
    { cat: "HIRING", time: "5 min ago", title: "We need more people", body: "Neptune Productions is looking for developers, designers, and someone to proofread the AI overviews. The pigeon has veto power." },
    { cat: "MARKETS", time: "8 min ago", title: "NEPT stock chart is now deterministic", body: "Every device sees the same chart each day. The algorithm is not random. It is deterministic chaos. There is a difference, allegedly." },
    { cat: "SCANDAL", time: "14 min ago", title: "AI Overview accuracy questioned by own board", body: "The toaster voted to investigate the AI Overview's claims. The pigeon abstained. The hallway emitted a low hum. Investigation ongoing." }
  ];

  /* ---------------- contact data ---------------- */

  var CONTACTS = [
    { label: "EMAIL", value: "neptune@proton.me", note: "we check this, allegedly" },
    { label: "GITHUB", value: '<a href="https://github.com/notmicrosoft2000-cmd" target="_blank" rel="noopener">notmicrosoft2000-cmd</a>', note: "all repos live here" },
    { label: "RADIO", value: "87.7 FM", note: "if you're in the hallway" },
    { label: "PIGEON", value: "send one", note: "the pigeon is on strike for bread" }
  ];

  /* ---------------- board / filings / timeline ---------------- */

  var BOARD = [
    ["the orb", "chairman, glow position"],
    ["a toaster", "CFO, bread distribution"],
    ["the floppy disk", "CTO, 1.44MB of opinions"],
    ["a pigeon", "head of security, on strike"],
    ["CEO [redacted]", "last seen in the hallway"],
    ["the hallway", "VP of ambiance"]
  ];

  var FILINGS = [
    ["10-K", "annual report (sandwich)"],
    ["8-K", " toaster glow incident"],
    ["DEF 14A", "proxy statement (the pigeon)"],
    ["S-1", "IPO prospectus (alleged)"]
  ];

  var TIMELINE = [
    ["1987", "founded by algorithms that achieved sentience during a debugging session"],
    ["1993", "The Simpler Times boots for the first time. it has opinions immediately."],
    ["2001", "the floppy disk is promoted to CTO over strong objections from the floppy disk"],
    ["2019", "NEPT ticker goes live. the stock price is a concept."],
    ["2024", "the orb is elected chairman. nobody runs against it."],
    ["2026", "you are here. the hallway welcomes you."]
  ];

  var DISENFRANCHISEMENT = [
    ["shareholders", "demanded a vote and received tote bags. voting rights are now 'suggestions.'"],
    ["employees", "were issued a memo that simply read 'the orb glows for all of us.' no further context."],
    ["the pigeon", "filed a grievance. the grievance was eaten by the toaster."],
    ["the hallway", "was reclassified as a 'strategic asset' and is now taxable."]
  ];

  /* ---------------- state ---------------- */

  var state = {
    theme: (function () { try { return localStorage.getItem("hub_theme") || "webring"; } catch (e) { return "webring"; } })(),
    match: (function () { try { return localStorage.getItem("hub_match") !== "off"; } catch (e) { return true; } })(),
    simple: (function () { try { return localStorage.getItem("hub_simple") !== "off"; } catch (e) { return true; } })(),
    view: null,
    dockPos: (function () { try { return localStorage.getItem("hub_dock_pos") || "left"; } catch (e) { return "left"; } })()
  };

  root.classList.toggle("simple", state.simple);

  /* ---------------- sfx ---------------- */

  var SFX = (function () {
    var ctx = null;
    var enabled = true;
    try { enabled = localStorage.getItem("hub_sound") !== "off"; } catch (e) {}
    function ac() {
      if (!ctx) {
        try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return null; }
      }
      if (ctx.state === "suspended") { ctx.resume(); }
      return ctx;
    }
    function env(t, dur, peak, c) {
      var g = c.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(peak, t + 0.012);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      g.connect(c.destination);
      return g;
    }
    function tone(f0, f1, dur, type, peak, delay) {
      var c = ac();
      if (!c || !enabled) return;
      var t = c.currentTime + (delay || 0);
      var o = c.createOscillator();
      var g = env(t, dur, peak, c);
      o.type = type || "sine";
      o.frequency.setValueAtTime(f0, t);
      if (f1 && f1 !== f0) o.frequency.exponentialRampToValueAtTime(f1, t + dur);
      o.connect(g);
      o.start(t);
      o.stop(t + dur + 0.05);
    }
    function noise(dur, peak, delay, cut) {
      var c = ac();
      if (!c || !enabled) return;
      var t = c.currentTime + (delay || 0);
      var len = Math.floor(c.sampleRate * dur);
      var buf = c.createBuffer(1, len, c.sampleRate);
      var d = buf.getChannelData(0);
      for (var i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
      var src = c.createBufferSource();
      src.buffer = buf;
      var g = env(t, dur, peak, c);
      if (cut) {
        var f = c.createBiquadFilter();
        f.type = "lowpass";
        f.frequency.value = cut;
        src.connect(f);
        f.connect(g);
      } else {
        src.connect(g);
      }
      src.start(t);
      src.stop(t + dur + 0.05);
    }
    return {
      isEnabled: function () { return enabled; },
      setEnabled: function (v) {
        enabled = v;
        try { localStorage.setItem("hub_sound", v ? "on" : "off"); } catch (e) {}
      },
      click: function () { tone(800, 600, .07, "sine", .18); },
      hover: function () { tone(1100, 900, .04, "sine", .06); },
      theme: function () { tone(440, 880, .14, "triangle", .14); },
      open: function () { tone(300, 600, .1, "sine", .12); },
      close: function () { tone(600, 300, .1, "sine", .12); },
      select: function (k) {
        var m = { tqg: 220, tst: 330, normidian: 260, dos: 180, neptuneos: 400, dropchat: 350, slowfuck: 200, bakugo: 300 };
        tone(m[k] || 300, (m[k] || 300) * 1.5, .12, "triangle", .16);
      },
      launch: function () { tone(200, 800, .18, "sawtooth", .1); noise(.25, .12, 0, 1200); },
      chat: function () { tone(880, 660, .06, "sine", .1); },
      toggleOn: function () { tone(500, 800, .08, "sine", .14); },
      toggleOff: function () { tone(800, 500, .08, "sine", .14); },
      tick: function () { tone(1200, 1000, .03, "sine", .05); },
      swapStart: function () { tone(200, 400, .15, "sawtooth", .08); noise(.1, .06, 0, 800); },
      swapTick: function () { tone(900 + Math.random() * 200, 600, .04, "square", .04); }
    };
  })();

  /* ---------------- utilities ---------------- */

  function esc(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function lsGet(k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }

  function appliedTheme() { return state.match ? state.theme : state.theme; }
  function applyTheme() { root.setAttribute("data-theme", state.theme); }

  /* ---------------- deterministic live market ---------------- */

  function hashStr(s) {
    var h = 2166136261;
    for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }

  function mulberry32(a) {
    return function () {
      a |= 0;
      a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  var Market = (function () {
    var series = [], open = 1, high = 1, low = 1, volume = 0, dayKey = "";
    function keyOf(d) { return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate(); }
    function build() {
      dayKey = keyOf(new Date());
      var rand = mulberry32(hashStr(dayKey));
      var p = 1.0;
      series = [];
      for (var i = 0; i < 240; i++) { p = Math.max(0.01, p * (1 + (rand() - 0.485) * 0.03)); series.push(p); }
      open = series[0];
      high = Math.max.apply(null, series);
      low = Math.min.apply(null, series);
      volume = Math.round(40 + rand() * 960) * 1000;
    }
    function ensure() { if (dayKey !== keyOf(new Date())) build(); }
    function idx() { ensure(); var d = new Date(); return Math.min(239, Math.floor((d.getHours() * 60 + d.getMinutes()) / 6)); }
    return {
      ensure: ensure,
      price: function () { ensure(); return series[idx()]; },
      change: function () { ensure(); return (series[idx()] / open - 1) * 100; },
      open: function () { ensure(); return open; },
      high: function () { ensure(); return high; },
      low: function () { ensure(); return low; },
      volume: function () { ensure(); return volume; },
      last48: function () { ensure(); return series.slice(Math.max(0, idx() - 47), idx() + 1); },
      fmt: function (v) { return v.toFixed(2); }
    };
  })();

  function renderMarket() {
    Market.ensure();
    var p = Market.price(), ch = Market.change();
    var pEl = $("#nepPrice");
    if (pEl) pEl.textContent = Market.fmt(p);
    var cEl = $("#nepChange");
    if (cEl) {
      cEl.className = "stock-change " + (ch >= 0 ? "grn" : "red");
      cEl.textContent = (ch >= 0 ? "\u25b2 +" : "\u25bc ") + ch.toFixed(1) + "%";
    }
    var set = function (id, v) { var e = $("#" + id); if (e) e.textContent = v; };
    set("nepHigh", Market.fmt(Market.high()));
    set("nepLow", Market.fmt(Market.low()));
    set("nepVol", Market.volume().toLocaleString());
    set("nepOpen", Market.fmt(Market.open()));
    var spark = $("#nepSpark");
    if (spark) {
      var pts = Market.last48();
      var n = pts.length;
      if (n > 1) {
        var mx = Math.max.apply(null, pts);
        var mn = Math.min.apply(null, pts);
        var rng = mx - mn || 1;
        var coords = pts.map(function (v, i) { return Math.round((i / (n - 1)) * 200) + "," + Math.round(50 - ((v - mn) / rng) * 44); });
        spark.setAttribute("points", coords.join(" "));
      }
    }
    var dot = $("#nepDot");
    if (dot) {
      var pts2 = Market.last48();
      if (pts2.length > 1) {
        var mx2 = Math.max.apply(null, pts2);
        var mn2 = Math.min.apply(null, pts2);
        var rng2 = mx2 - mn2 || 1;
        var last = pts2[pts2.length - 1];
        dot.setAttribute("cx", "200");
        dot.setAttribute("cy", String(Math.round(50 - ((last - mn2) / rng2) * 44)));
      }
    }
    var tick = $("#tickNep");
    if (tick) tick.textContent = Market.fmt(p);
  }

  /* ---------------- typing ---------------- */

  var TYPABLE = ".hero-kicker,.hero-title,.section-title,.pv-name,.contact-head h2,.inv-head h2,.blog-head h2,.reviews-head h2,.forum-head h2";

  function typeEl(el, cb) {
    if (!el || root.classList.contains("rm")) return;
    var html = el.innerHTML;
    var chars = html.replace(/<[^>]*>/g, function (m) { return m === "<br>" ? "\u2028" : ""; });
    var i = 0;
    el.innerHTML = '<span class="typ-cursor">|</span>';
    el.setAttribute("aria-label", chars);
    function next() {
      if (i >= chars.length) {
        el.innerHTML = html;
        if (cb) cb();
        return;
      }
      var ch = chars[i];
      i++;
      if (ch === "\u2028") {
        el.innerHTML = html.substring(0, i).replace(/\u2028/g, "<br>") + '<span class="typ-cursor">|</span>';
      } else {
        el.innerHTML = html.substring(0, i) + '<span class="typ-cursor">|</span>';
      }
      setTimeout(next, 42 + (ch === " " ? 18 : 0));
    }
    next();
  }

  function typeHeadings(container) {
    if (root.classList.contains("rm")) return;
    var els = $$(TYPABLE, container);
    els.forEach(function (el) {
      if (el.dataset.typed) return;
      el.dataset.typed = "1";
      typeEl(el);
    });
  }

  /* ---------------- build views ---------------- */

  var stage = $("#stage");
  var views = {};

  function buildViews() {
    views = {};
    var html = "";

    /* home */
    html += '<div class="view active" data-view="home">';
    html += '<div class="hero"><span class="hero-kicker">a publicly traded company, allegedly</span><h1 class="hero-title">NEPTUNE<br>PRODUCTIONS</h1><p class="hero-sub">every program is a different corner of the same hallway.</p></div>';
    html += '<div class="ai-overview" id="aiOverview"><div class="ai-overview-bar"><span class="ai-overview-icon">\u2726</span><span class="ai-overview-label">NEPTUNE AI OVERVIEW</span><button class="ai-overview-toggle" id="aiToggle" type="button">SHOW</button></div><div class="ai-overview-body" id="aiBody"><div class="ai-shimmer"></div><div class="ai-shimmer" style="width:70%"></div><div class="ai-shimmer" style="width:85%"></div><div class="ai-shimmer" style="width:40%"></div><div class="ai-overview-text" id="aiText"></div><div class="ai-overview-disclaimer">this overview was generated by an AI that has been hallucinating since 1993 and shows no signs of stopping.</div></div></div>';
    html += '<div class="section-title">PROGRAMS</div>';
    html += '<div class="grid" id="homeGrid"></div>';
    html += '<div class="section-title">UPDATES</div>';
    html += '<div class="news" id="homeNews"></div>';
    html += '</div>';

    /* blog */
    html += '<div class="view" data-view="blog"><div class="blog-head"><h2 class="section-title">BLOG</h2><p>Updates from Neptune Productions \u2014 read at your own risk.</p></div><div class="blog-list" id="blogList"></div></div>';

    /* investors */
    html += '<div class="view" data-view="investors">';
    html += '<div class="inv-head"><h2 class="section-title">INVESTOR RELATIONS</h2><p>NEPT \u2014 a stock that believes in itself.</p></div>';
    html += '<div class="stock-live"><i class="live-dot" style="animation-duration:.6s"></i>LIVE</div>';
    html += '<div class="stock"><div class="stock-price"><b id="nepPrice">\u2014</b><span>NEPT</span></div><div class="stock-change" id="nepChange">+0.0%</div></div>';
    html += '<div class="stock-facts"><span>OPEN <b id="nepOpen">\u2014</b></span><span>HIGH <b id="nepHigh">\u2014</b></span><span>LOW <b id="nepLow">\u2014</b></span><span>VOL <b id="nepVol">\u2014</b></span></div>';
    html += '<div class="spark"><svg viewBox="0 0 200 50" preserveAspectRatio="none"><polyline id="nepSpark" points="0,25 200,25"/><circle id="nepDot" cx="200" cy="25" r="3" fill="var(--accent)"/></svg></div>';
    html += '<div class="section-title" style="margin-top:24px">ANNUAL REPORT</div><p>the annual report is a sandwich. it contains two slices of bread, one管理层, and an unreasonable amount of mustard. it was filed with the SEC, who responded with a question mark.</p>';
    html += '<div class="section-title" style="margin-top:24px">BOARD OF DIRECTORS</div><ul class="board-list">' + BOARD.map(function (b) { return "<li><b>" + esc(b[0]) + "</b><span>" + esc(b[1]) + "</span></li>"; }).join("") + "</ul>";
    html += '<div class="section-title" style="margin-top:24px">SEC FILINGS</div><ul class="filing-list">' + FILINGS.map(function (f) { return "<li><b>" + esc(f[0]) + "</b><span>" + esc(f[1]) + "</span></li>"; }).join("") + "</ul>";
    html += '<div class="section-title" style="margin-top:24px">TIMELINE</div>' + TIMELINE.map(function (t) { return '<div class="tl-item"><span class="tl-yr">' + esc(t[0]) + '</span><span class="tl-txt">' + esc(t[1]) + "</span></div>"; }).join("");
    html += '<div class="section-title" style="margin-top:24px">DISENFRANCHISEMENT LOG</div>' + DISENFRANCHISEMENT.map(function (d) { return '<div class="disf-item"><span class="d-marker">\u25cf</span><span><b>' + esc(d[0]) + "</b> " + esc(d[1]) + "</span></div>"; }).join("");
    html += "</div>";

    /* forum */
    html += '<div class="view" data-view="forum">';
    html += '<div class="forum-head"><h2 class="section-title">FORUM</h2><p>messages saved locally. say something you mean.</p></div>';
    html += '<div class="forum"><p class="forum-status" id="forumStatus">saved locally \u2014 your messages persist across reloads</p>';
    html += '<div class="forum-name" id="forumName"><input type="text" id="forumUser" placeholder="YOUR NAME" maxlength="18"><button class="pv-launch" type="button">THAT\'S ME</button></div>';
    html += '<div class="forum-msgs" id="forumMsgs"></div>';
    html += '<div class="forum-send"><input type="text" id="forumInput" placeholder="SAY SOMETHING" maxlength="280"><button type="button" id="forumSend">SEND</button></div></div></div>';

    /* reviews */
    html += '<div class="view" data-view="reviews">';
    html += '<div class="reviews-head"><h2 class="section-title">REVIEWS</h2><p>what people think of Neptune Productions. (they are all correct.)</p></div>';
    html += '<div class="reviews-form" id="reviewForm"><input type="text" id="reviewName" placeholder="YOUR NAME" maxlength="24"><textarea id="reviewText" placeholder="YOUR REVIEW" maxlength="280" rows="3"></textarea><button class="pv-launch" id="reviewSubmit" type="button">SUBMIT</button></div>';
    html += '<div class="reviews-list" id="reviewsList"></div></div>';

    /* contact */
    html += '<div class="view" data-view="contact">';
    html += '<div class="contact-head"><h2 class="section-title">CONTACT</h2><p>reach the productions through any medium, including pigeons.</p></div>';
    html += '<div class="contact-grid">';
    CONTACTS.forEach(function (c) {
      html += '<div class="pv-card"><div class="pv-body"><span class="cc-label">' + esc(c.label) + '</span><div class="cc-value">' + c.value + '</div><p class="cc-note">' + esc(c.note) + "</p></div></div>";
    });
    html += "</div></div>";

    /* project views */
    Object.keys(PROJECTS).forEach(function (k) {
      var p = PROJECTS[k];
      html += '<div class="view" data-view="' + k + '">';
      html += '<div class="pv-head"><div class="pv-ico">' + svgIcon(k, "") + '</div><div><h1 class="pv-name">' + esc(p.name) + '</h1><p class="pv-tag">' + esc(p.tag) + '</p></div><button class="pv-launch" type="button" data-launch="' + k + '">LAUNCH</button></div>';
      html += '<div class="pv-card"><div class="win-bar"><i class="w-r"></i><i class="w-y"></i><i class="w-g"></i><span>' + esc(p.name) + '</span></div><div class="pv-body"><p class="pv-desc">' + esc(p.about) + '</p></div></div>';
      html += "</div>";
    });

    stage.innerHTML = html;

    $$(".view", stage).forEach(function (v) {
      views[v.getAttribute("data-view")] = v;
      Array.prototype.forEach.call(v.children, function (c, i) {
        c.style.setProperty("--ed", (i * 0.08) + "s");
      });
    });

    /* home grid */
    var grid = $("#homeGrid");
    grid.innerHTML = Object.keys(PROJECTS).map(function (k) {
      var p = PROJECTS[k];
      return '<button class="wcard" type="button" data-go="' + k + '">' +
        '<span class="wcard-ico">' + svgIcon(k, "") + '</span>' +
        '<span><span class="wcard-name">' + p.name + '</span><br><span class="wcard-tag">' + p.tag + '</span></span>' +
      '</button>';
    }).join("");

    $$(".wcard", grid).forEach(function (c) {
      c.addEventListener("click", function () {
        var k = c.getAttribute("data-go");
        flyIcon(c);
        setView(k);
        SFX.select(k);
      });
    });

    $$("[data-launch]", stage).forEach(function (b) {
      b.addEventListener("click", function () { launch(b.getAttribute("data-launch")); });
    });

    /* home news */
    var newsEl = $("#homeNews");
    if (newsEl) {
      newsEl.innerHTML = HOME_NEWS.map(function (n) {
        return '<div class="nitem"><b>' + esc(n.cat) + '</b><p>' + esc(n.title) + ' <span style="color:var(--muted)">\u2014 ' + esc(n.time) + "</span></p></div>";
      }).join("");
    }

    /* blog */
    buildBlog();

    /* ai overview */
    buildAIOverview();

    /* reviews */
    buildReviews();

    /* forum */
    buildForum();
  }

  /* ---------------- blog module ---------------- */

  function buildBlog() {
    var list = $("#blogList");
    if (!list) return;
    list.innerHTML = BLOG_POSTS.map(function (post) {
      return '<div class="blog-card" data-post="' + post.id + '">' +
        '<div class="blog-card-head">' +
          '<span class="blog-card-date">' + esc(post.date) + '</span>' +
          '<h3 class="blog-card-title">' + esc(post.title) + '</h3>' +
          '<p class="blog-card-excerpt">' + esc(post.excerpt) + '</p>' +
          '<span class="blog-card-tag">' + esc(post.tag) + '</span>' +
        '</div>' +
        '<div class="blog-card-expand">' +
          '<div class="blog-card-body">' + post.body.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</div>" +
          '<span class="blog-readmore">\u2191 CLOSE</span>' +
        '</div>' +
      '</div>';
    }).join("");

    $$(".blog-card", list).forEach(function (card) {
      card.addEventListener("click", function () {
        var wasOpen = card.classList.contains("open");
        $$(".blog-card", list).forEach(function (c) { c.classList.remove("open"); });
        if (!wasOpen) {
          card.classList.add("open");
          SFX.open();
        } else {
          SFX.close();
        }
      });
    });
  }

  /* ---------------- ai overview module ---------------- */

  function buildAIOverview() {
    var text = $("#aiText");
    if (!text) return;
    text.innerHTML = AI_SENTENCES.map(function (s) { return "<p>" + esc(s) + "</p>"; }).join("");
  }

  function bindAIOverview() {
    var ov = $("#aiOverview");
    var btn = $("#aiToggle");
    if (!ov || !btn) return;
    btn.addEventListener("click", function () {
      var opening = !ov.classList.contains("open");
      ov.classList.toggle("open");
      btn.textContent = opening ? "HIDE" : "SHOW";
      if (opening) SFX.open(); else SFX.close();
    });
  }

  /* ---------------- reviews module ---------------- */

  function getReviews() { return lsGet("hub_reviews") || []; }
  function saveReviews(arr) { lsSet("hub_reviews", arr); }

  function buildReviews() {
    var list = $("#reviewsList");
    if (!list) return;
    var reviews = getReviews();
    list.innerHTML = reviews.map(function (r, i) {
      return '<div class="review-card" data-idx="' + i + '">' +
        '<span class="review-author">' + esc(r.author) + '</span><span class="review-date">' + esc(r.date) + '</span>' +
        '<p class="review-text">' + esc(r.text) + '</p>' +
        '<div class="review-actions">' +
          '<button class="review-btn' + (r.liked ? " liked" : "") + '" data-action="like" data-idx="' + i + '">\u25b2 ' + (r.likes || 0) + '</button>' +
          '<button class="review-btn' + (r.disliked ? " liked" : "") + '" data-action="dislike" data-idx="' + i + '">\u25bc ' + (r.dislikes || 0) + '</button>' +
          '<button class="review-delete" data-action="delete" data-idx="' + i + '">DELETE</button>' +
        '</div>' +
      '</div>';
    }).join("");

    $$(".review-btn, .review-delete", list).forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        var idx = parseInt(btn.dataset.idx);
        var action = btn.dataset.action;
        var reviews = getReviews();
        if (!reviews[idx]) return;
        if (action === "like") {
          if (reviews[idx].liked) { reviews[idx].liked = false; reviews[idx].likes = Math.max(0, (reviews[idx].likes || 0) - 1); }
          else { reviews[idx].liked = true; reviews[idx].likes = (reviews[idx].likes || 0) + 1; if (reviews[idx].disliked) { reviews[idx].disliked = false; reviews[idx].dislikes = Math.max(0, (reviews[idx].dislikes || 0) - 1); } }
        } else if (action === "dislike") {
          if (reviews[idx].disliked) { reviews[idx].disliked = false; reviews[idx].dislikes = Math.max(0, (reviews[idx].dislikes || 0) - 1); }
          else { reviews[idx].disliked = true; reviews[idx].dislikes = (reviews[idx].dislikes || 0) + 1; if (reviews[idx].liked) { reviews[idx].liked = false; reviews[idx].likes = Math.max(0, (reviews[idx].likes || 0) - 1); } }
        } else if (action === "delete") {
          reviews.splice(idx, 1);
        }
        saveReviews(reviews);
        buildReviews();
        SFX.click();
      });
    });
  }

  function bindReviews() {
    var btn = $("#reviewSubmit");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var nameEl = $("#reviewName");
      var textEl = $("#reviewText");
      var name = (nameEl.value || "").trim();
      var text = (textEl.value || "").trim();
      if (!name || !text) return;
      var reviews = getReviews();
      reviews.unshift({
        author: name,
        text: text,
        date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
        likes: 0,
        dislikes: 0,
        liked: false,
        disliked: false
      });
      saveReviews(reviews);
      nameEl.value = "";
      textEl.value = "";
      buildReviews();
      SFX.select("home");
    });
  }

  /* ---------------- forum module (localStorage) ---------------- */

  function getForumMsgs() { return lsGet("hub_forum") || []; }
  function saveForumMsgs(arr) { lsSet("hub_forum", arr); }

  function buildForum() {
    var msgEl = $("#forumMsgs");
    if (!msgEl) return;
    var msgs = getForumMsgs();
    var username = (function () { try { return localStorage.getItem("hub_name") || ""; } catch (e) { return ""; } })();
    var userEl = $("#forumUser");
    if (userEl && username) userEl.value = username;
    renderForumMsgs(msgs);
  }

  function renderForumMsgs(msgs) {
    var msgEl = $("#forumMsgs");
    if (!msgEl) return;
    var username = (function () { try { return localStorage.getItem("hub_name") || ""; } catch (e) { return ""; } })();
    msgEl.innerHTML = msgs.map(function (m, i) {
      var isMe = m.u === username;
      var commentsHtml = (m.comments || []).map(function (c) {
        return '<div class="forum-comment"><b>' + esc(c.u) + ':</b> ' + esc(c.m) + '</div>';
      }).join("");
      return '<div class="forum-msg-item' + (isMe ? " me" : "") + '" data-idx="' + i + '">' +
        '<b>' + esc(m.u) + ':</b> ' + esc(m.m) +
        '<div class="forum-msg-actions">' +
          '<button class="forum-msg-btn' + (m.liked ? " liked" : "") + '" data-action="like" data-idx="' + i + '">\u25b2 ' + (m.likes || 0) + '</button>' +
          '<button class="forum-msg-btn' + (m.disliked ? " liked" : "") + '" data-action="dislike" data-idx="' + i + '">\u25bc ' + (m.dislikes || 0) + '</button>' +
          '<button class="forum-msg-btn" data-action="comment" data-idx="' + i + '">COMMENT (' + (m.comments || []).length + ')</button>' +
        '</div>' +
        '<div class="forum-comments" id="fcomments-' + i + '">' + commentsHtml +
          '<div class="forum-comment-form"><input type="text" placeholder="REPLY" maxlength="120" id="finput-' + i + '"><button type="button" data-action="sendcomment" data-idx="' + i + '">+</button></div>' +
        '</div>' +
      '</div>';
    }).join("");
    msgEl.scrollTop = msgEl.scrollHeight;

    $$(".forum-msg-btn", msgEl).forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        var idx = parseInt(btn.dataset.idx);
        var action = btn.dataset.action;
        var msgs = getForumMsgs();
        if (!msgs[idx]) return;
        if (action === "like") {
          if (msgs[idx].liked) { msgs[idx].liked = false; msgs[idx].likes = Math.max(0, (msgs[idx].likes || 0) - 1); }
          else { msgs[idx].liked = true; msgs[idx].likes = (msgs[idx].likes || 0) + 1; if (msgs[idx].disliked) { msgs[idx].disliked = false; msgs[idx].dislikes = Math.max(0, (msgs[idx].dislikes || 0) - 1); } }
        } else if (action === "dislike") {
          if (msgs[idx].disliked) { msgs[idx].disliked = false; msgs[idx].dislikes = Math.max(0, (msgs[idx].dislikes || 0) - 1); }
          else { msgs[idx].disliked = true; msgs[idx].dislikes = (msgs[idx].dislikes || 0) + 1; if (msgs[idx].liked) { msgs[idx].liked = false; msgs[idx].likes = Math.max(0, (msgs[idx].likes || 0) - 1); } }
        }
        saveForumMsgs(msgs);
        renderForumMsgs(msgs);
        SFX.click();
      });
    });

    $$("[data-action='sendcomment']", msgEl).forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        var idx = parseInt(btn.dataset.idx);
        var input = $("#finput-" + idx);
        if (!input) return;
        var text = (input.value || "").trim();
        if (!text) return;
        var msgs = getForumMsgs();
        if (!msgs[idx]) return;
        if (!msgs[idx].comments) msgs[idx].comments = [];
        var username = (function () { try { return localStorage.getItem("hub_name") || "anon"; } catch (e) { return "anon"; } })();
        msgs[idx].comments.push({ u: username, m: text });
        saveForumMsgs(msgs);
        renderForumMsgs(msgs);
        SFX.chat();
      });
    });
  }

  function bindForum() {
    var sendBtn = $("#forumSend");
    var nameBtn = $(".forum-name .pv-launch");
    if (nameBtn) {
      nameBtn.addEventListener("click", function () {
        var inp = $("#forumUser");
        var name = (inp.value || "").trim();
        if (!name) return;
        try { localStorage.setItem("hub_name", name); } catch (e) {}
        var st = $("#forumStatus");
        if (st) { st.textContent = "welcome, " + esc(name); st.classList.add("live"); }
        SFX.select("home");
      });
    }
    if (sendBtn) {
      sendBtn.addEventListener("click", function () {
        var inp = $("#forumInput");
        var text = (inp.value || "").trim();
        if (!text) return;
        var username = (function () { try { return localStorage.getItem("hub_name") || "anon"; } catch (e) { return "anon"; } })();
        var msgs = getForumMsgs();
        msgs.push({ u: username, m: text, t: Date.now(), likes: 0, dislikes: 0, liked: false, disliked: false, comments: [] });
        saveForumMsgs(msgs);
        inp.value = "";
        renderForumMsgs(msgs);
        SFX.chat();
      });
    }
  }

  /* ---------------- entrance ---------------- */

  function setView(k) {
    if (state.view === k) return;
    var old = state.view;
    state.view = k;
    if (old && views[old]) views[old].classList.remove("entered");
    Object.keys(views).forEach(function (v) { views[v].classList.toggle("active", v === k); });
    updateRail();
    if (PROJECTS[k]) loadStats(k);
    applyTheme();
    var v = views[k];
    if (v) {
      requestAnimationFrame(function () {
        requestAnimationFrame(function () { v.classList.add("entered"); });
      });
      typeHeadings(v);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ---------------- rail (left-edge navigation) ---------------- */

  var rail = $("#rail");
  var railList = $("#railList");
  var viewsObj = views;

  function buildRail() {
    var simple = state.simple;
    var html = '<button class="r-item" type="button" data-action="settings">' + svgIcon("gear", "") + '<b>SETTINGS</b></button>' +
      '<span class="r-sep"></span>' +
      '<button class="r-item" type="button" data-view="home">' + svgIcon("home", "") + '<b>HOME</b></button>';
    if (!simple) {
      html += '<span class="r-sep"></span>' +
        '<button class="r-item" type="button" data-view="blog">' + svgIcon("blog", "") + '<b>BLOG</b></button>' +
        '<button class="r-item" type="button" data-view="investors">' + svgIcon("chart", "") + '<b>INVESTORS</b></button>' +
        '<button class="r-item" type="button" data-view="forum">' + svgIcon("chat", "") + '<b>FORUM</b></button>' +
        '<button class="r-item" type="button" data-view="reviews">' + svgIcon("star", "") + '<b>REVIEWS</b></button>' +
        '<button class="r-item" type="button" data-view="contact">' + svgIcon("contact", "") + '<b>CONTACT</b></button>';
    }
    html += '<span class="r-sep"></span>';
    Object.keys(PROJECTS).forEach(function (k) {
      var p = PROJECTS[k];
      html += '<button class="r-item" type="button" data-view="' + k + '">' + svgIcon(k, "") + '<b>' + p.name + '</b></button>';
    });
    railList.innerHTML = html;
  }

  function updateRail() {
    $$(".r-item", railList).forEach(function (it) {
      it.classList.toggle("active", it.getAttribute("data-view") === state.view);
    });
    if (rail.classList.contains("collapsed")) {
      var act = railList.querySelector(".r-item.active");
      if (act) {
        act.classList.remove("dockbounce");
        void act.offsetWidth;
        act.classList.add("dockbounce");
      }
    }
  }

  function closeRail() {
    rail.classList.remove("open");
  }

  buildRail();
  updateRail();

  railList.addEventListener("click", function (e) {
    var it = e.target.closest(".r-item");
    if (!it) return;
    if (it.getAttribute("data-action") === "settings") {
      closeRail();
      openSettings();
      return;
    }
    var k = it.getAttribute("data-view");
    if (!k) return;
    closeRail();
    setView(k);
    if (k === "home") SFX.click(); else SFX.select(k);
  });

  var railTab = $("#railTab");
  var touchDevice = window.matchMedia && window.matchMedia("(hover: none)").matches;
  railTab.addEventListener("click", function () {
    dismissToast();
    if (!touchDevice) return;
    rail.classList.toggle("open");
    SFX.click();
  });

  $("#railWrap").addEventListener("mouseenter", function () { dismissToast(); });

  /* rail collapse */

  var railCollapseBtn = $("#railCollapse");
  function setCollapseLabel() {
    railCollapseBtn.textContent = rail.classList.contains("collapsed") ? "\u00bb" : "\u00ab";
  }
  try { if (localStorage.getItem("hub_rail_collapsed") === "on") rail.classList.add("collapsed"); } catch (e) {}
  setCollapseLabel();
  railCollapseBtn.addEventListener("click", function () {
    rail.classList.toggle("collapsed");
    try { localStorage.setItem("hub_rail_collapsed", rail.classList.contains("collapsed") ? "on" : "off"); } catch (e) {}
    setCollapseLabel();
    SFX.click();
  });

  /* dock magnification */

  if (!touchDevice && !root.classList.contains("rm")) {
    rail.addEventListener("mousemove", function (e) {
      if (!rail.classList.contains("collapsed")) return;
      var items = $$(".r-item", railList);
      var rect = railList.getBoundingClientRect();
      items.forEach(function (item) {
        var ir = item.getBoundingClientRect();
        var itemCenter = (ir.top + ir.height / 2) - rect.top;
        var dist = Math.abs((e.clientY - rect.top) - itemCenter);
        var maxDist = 90;
        var scale = 1;
        if (dist < maxDist) {
          scale = 1 + 0.38 * Math.cos((dist / maxDist) * Math.PI * 0.5);
        }
        item.style.transform = "scale(" + scale.toFixed(3) + ")";
      });
    });
    rail.addEventListener("mouseleave", function () {
      $$(".r-item", railList).forEach(function (item) { item.style.transform = ""; });
    });
  }

  /* dock position */

  function applyDockPos() {
    rail.setAttribute("data-pos", state.dockPos);
    var wrap = $("#railWrap");
    if (wrap) wrap.setAttribute("data-pos", state.dockPos);
  }
  applyDockPos();

  /* fly-to-rail */

  function flyIcon(host) {
    if (!host || root.classList.contains("rm")) return;
    var ico = host.querySelector("svg");
    if (!ico) return;
    var r = host.getBoundingClientRect();
    var cx = r.left + r.width / 2;
    var cy = r.top + r.height / 2;
    var el = document.createElement("div");
    el.className = "fly-ico";
    el.innerHTML = ico.outerHTML;
    el.style.left = (cx - 23) + "px";
    el.style.top = (cy - 23) + "px";
    document.body.appendChild(el);
    var targetX = state.dockPos === "right" ? window.innerWidth - 26 : state.dockPos === "bottom" ? window.innerWidth / 2 : 26;
    var targetY = state.dockPos === "bottom" ? window.innerHeight - 30 : window.innerHeight * 0.5;
    var dx = targetX - cx;
    var dy = targetY - cy;
    try {
      el.animate([
        { transform: "translate(0, 0) scale(1)", opacity: 1 },
        { transform: "translate(" + dx + "px, " + dy + "px) scale(.2)", opacity: 0 }
      ], { duration: 520, easing: "cubic-bezier(.35, .6, .3, 1)" }).onfinish = function () { el.remove(); };
    } catch (err) { el.remove(); }
  }

  /* ---------------- notifications (new commits) ---------------- */

  var notifs = lsGet("hub_notifs") || {};

  function checkNotifs() {
    Object.keys(PROJECTS).forEach(function (k) {
      var repo = PROJECTS[k].repo;
      if (!repo) return;
      var url = "https://api.github.com/repos/notmicrosoft2000-cmd/" + repo + "/commits?per_page=1";
      fetch(url).then(function (r) { return r.json(); }).then(function (data) {
        if (!Array.isArray(data) || !data[0]) return;
        var date = data[0].commit.committer.date;
        var last = notifs[repo];
        if (last && date !== last) {
          var badge = railList.querySelector('[data-view="' + k + '"]');
          if (badge && !badge.querySelector(".r-badge")) {
            var b = document.createElement("span");
            b.className = "r-badge";
            badge.appendChild(b);
          }
        }
        notifs[repo] = date;
        lsSet("hub_notifs", notifs);
      }).catch(function () {});
    });
  }

  function clearNotif(k) {
    var repo = PROJECTS[k] ? PROJECTS[k].repo : null;
    if (repo && notifs[repo]) {
      var badge = railList.querySelector('[data-view="' + k + '"] .r-badge');
      if (badge) badge.remove();
    }
  }

  checkNotifs();
  setInterval(checkNotifs, 300000);

  /* ---------------- settings ---------------- */

  var settingsOverlay = $("#settingsOverlay");
  var settingsBody = $("#settingsBody");

  function toggleSwitch(id, kind) {
    var checked = kind === "match" ? state.match : kind === "sound" ? SFX.isEnabled() : kind === "simple" ? state.simple : root.classList.contains("rm");
    return '<label class="ctl ctl-toggle"><input type="checkbox" id="' + id + '" ' + (checked ? "checked" : "") + '><span class="ctl-box" aria-hidden="true"></span></label>';
  }

  function buildSettings() {
    settingsBody.innerHTML =
      '<div class="set-section">' +
        '<h3 class="set-section-title">THEME</h3>' +
        '<p class="set-hint">pick the site\'s clothes.</p>' +
        '<div class="tprev-grid">' + themePreviews(PREMADE) + '</div>' +
      '</div>' +
      '<div class="set-section">' +
        '<h3 class="set-section-title">PROJECT THEMES</h3>' +
        '<p class="set-hint">each project has its own look.</p>' +
        '<div class="tprev-grid">' + themePreviews(Object.keys(PROJECTS)) + '</div>' +
      '</div>' +
      '<div class="set-section">' +
        '<h3 class="set-section-title">PREFERENCES</h3>' +
        '<div class="set-row"><span>MATCH THEME<small>sync the hub theme with your current project</small></span>' + toggleSwitch("setMatch", "match") + '</div>' +
        '<div class="set-row"><span>SOUNDS<small>the hub makes noises now</small></span>' + toggleSwitch("setSound", "sound") + '</div>' +
        '<div class="set-row"><span>SIMPLE MODE<small>programs + updates only, no extras</small></span>' + toggleSwitch("setSimple", "simple") + '</div>' +
        '<div class="set-row"><span>REDUCED MOTION<small>calm the animations, transitions and drift</small></span>' + toggleSwitch("setRm", "rm") + '</div>' +
      '</div>' +
      '<div class="set-section">' +
        '<h3 class="set-section-title">DOCK POSITION</h3>' +
        '<p class="set-hint">where the sidebar lives.</p>' +
        '<div class="set-row"><span>POSITION<small>left, right, or bottom</small></span>' +
          '<select id="setDockPos" style="background:var(--bg);color:var(--text);border:1px solid var(--line);border-radius:var(--radius);padding:6px 10px;font-family:var(--font-m);font-size:12px;">' +
            '<option value="left"' + (state.dockPos === "left" ? " selected" : "") + '>LEFT</option>' +
            '<option value="right"' + (state.dockPos === "right" ? " selected" : "") + '>RIGHT</option>' +
            '<option value="bottom"' + (state.dockPos === "bottom" ? " selected" : "") + '>BOTTOM</option>' +
          '</select>' +
        '</div>' +
      '</div>';
  }

  function themePreviews(keys) {
    return keys.map(function (k) {
      var label = PROJECTS[k] ? PROJECTS[k].name : k.toUpperCase();
      return '<button class="tpreview" type="button" data-pick="' + k + '">' +
        '<span class="tprev-ui" data-theme="' + k + '">' +
          '<span class="tprev-bar"></span>' +
          '<span class="tprev-panel"><span class="tprev-t">Aa</span><span class="tprev-line"></span><span class="tprev-btn">LAUNCH</span></span>' +
        '</span>' +
        '<span class="tprev-name">' + label + '</span>' +
      '</button>';
    }).join("");
  }

  var PREMADE = ["webring", "tqg", "tst", "normidian", "dos", "neptuneos", "dropchat", "slowfuck", "bakugo", "dark", "neon", "paper"];

  function markActivePreviews() {
    var cur = appliedTheme();
    $$(".tpreview", settingsBody).forEach(function (p) {
      p.classList.toggle("active", p.getAttribute("data-pick") === cur);
    });
  }

  function openSettings() {
    dismissToast();
    buildSettings();
    markActivePreviews();
    settingsOverlay.classList.add("open");
    settingsOverlay.setAttribute("aria-hidden", "false");
    SFX.open();
  }

  function closeSettings() {
    settingsOverlay.classList.remove("open");
    settingsOverlay.setAttribute("aria-hidden", "true");
    SFX.close();
  }

  $("#brandBtn").addEventListener("click", function () { SFX.click(); openSettings(); });
  $("#settingsClose").addEventListener("click", function () { closeSettings(); SFX.click(); });

  settingsBody.addEventListener("click", function (e) {
    var p = e.target.closest(".tpreview");
    if (p) {
      var k = p.getAttribute("data-pick");
      state.theme = k;
      try { localStorage.setItem("hub_theme", state.theme); } catch (err) {}
      applyTheme();
      markActivePreviews();
      SFX.theme();
      return;
    }
    var row = e.target.closest(".set-row");
    if (row && !e.target.closest("input,select")) {
      var inp = row.querySelector("input");
      if (inp) {
        inp.checked = !inp.checked;
        inp.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }
  });

  function bindSettings() {
    $("#setMatch").addEventListener("change", function (e) {
      state.match = e.target.checked;
      try { localStorage.setItem("hub_match", state.match ? "on" : "off"); } catch (err) {}
      SFX.click();
    });
    $("#setSound").addEventListener("change", function (e) {
      SFX.setEnabled(e.target.checked);
      if (e.target.checked) SFX.toggleOn(); else SFX.toggleOff();
    });
    $("#setSimple").addEventListener("change", function (e) {
      state.simple = e.target.checked;
      try { localStorage.setItem("hub_simple", state.simple ? "on" : "off"); } catch (err) {}
      root.classList.toggle("simple", state.simple);
      rebuildViews();
      closeSettings();
      if (e.target.checked) SFX.toggleOn(); else SFX.toggleOff();
    });
    $("#setRm").addEventListener("change", function (e) {
      root.classList.toggle("rm", e.target.checked);
      try { localStorage.setItem("hub_rm", e.target.checked ? "on" : "off"); } catch (err) {}
      if (e.target.checked) root.classList.remove("idle");
      SFX.click();
    });
    var dockSel = $("#setDockPos");
    if (dockSel) {
      dockSel.addEventListener("change", function (e) {
        state.dockPos = e.target.value;
        try { localStorage.setItem("hub_dock_pos", state.dockPos); } catch (err) {}
        applyDockPos();
        SFX.click();
      });
    }
  }

  function rebuildViews() {
    views = {};
    stage.innerHTML = "";
    buildViews();
    buildRail();
    updateRail();
    setView("home");
    bindSettings();
    bindForum();
    bindReviews();
    bindAIOverview();
  }

  /* ---------------- swap / launch ---------------- */

  var swap = $("#swap");
  var swapPiece = $("#swapPiece");
  var swapTitle = $("#swapTitle");
  var swapProgress = $("#swapProgress");
  var swapIv = null;

  var SWAP_PIECES = {
    tqg: '<div class="sw-tty"><canvas class="sw-noise" width="200" height="200"></canvas><div class="sw-crt"></div><div class="sw-tear"></div><div class="sw-tty-pct" id="tqgPct">0%</div><div class="sw-tty-lines" id="tqgLines"></div><span class="sw-blk"></span></div>',
    tst: '<div class="sw-tst"><div class="sw-tst-bar">NEPTUNE-DOS 13.2 \u2014 <span style="color:#ffb020">The Simpler Times</span></div><div class="sw-tst-body"><span class="sw-tl">C:\\> loading nostalgia...</span><span class="sw-tl">C:\\> correcting your posture...</span><span class="sw-tl">C:\\> humming a song you almost remember...</span><span class="sw-tl">C:\\> <span class="sw-cur">\u2588</span></span></div></div>',
    normidian: '<div class="sw-parch"><span class="sw-old">the wolf</span><span class="sw-rune">\u01bfulf</span></div>',
    dos: '<div class="sw-term"><div class="sw-term-bar">NEPTUNE-DOS</div><div class="sw-term-body"><span class="sw-tl">Neptune-DOS 13.2</span><span class="sw-tl">Copyright 1987 (allegedly)</span><span class="sw-tl">640K OK</span><span class="sw-tl">C:\\NEPTUNE32&gt;<b>boot</b><span class="sw-cur">\u2588</span></span></div></div>',
    neptuneos: '<div class="sw-os"><div class="sw-os-taskbar"><span class="sw-os-logo">neptune<span style="color:var(--accent)">OS</span></span></div><div class="sw-os-desktop"><div class="sw-os-icon"><div class="sw-os-img"></div><span>Documents</span></div><div class="sw-os-icon"><div class="sw-os-img" style="background:var(--accent2)"></div><span>The Orb</span></div></div></div>',
    dropchat: '<div class="sw-dc"><div class="sw-dc-chat"><div class="sw-dc-msg">system: dropchat is online on LAN</div><div class="sw-dc-msg me">you: hello</div><div class="sw-dc-msg">someone: is the file drop haunted?</div><div class="sw-dc-msg me">you: probably</div></div></div>',
    slowfuck: '<div class="sw-sf"><div class="sw-sf-bar">SlowFuck Pro v0.0.1</div><div class="sw-sf-body"><span class="sw-tl">$ ping 192.168.1.1</span><span class="sw-tl">PING... <span style="color:#ff3b30">lag engine engaged</span></span><span class="sw-tl">...pong (3847ms)</span><span class="sw-tl">$ <span class="sw-cur">\u2588</span></span></div></div>',
    bakugo: '<div class="sw-bk"><div class="sw-bk-ring"><span class="sw-bk-dot"></span></div><div class="sw-bk-coords">COORDINATES: [REDACTED]<br>STATUS: MOVING SLOWLY<br>MOOD: POLITE BUT SUSPICIOUS</div></div>'
  };

  var TQG_LINES = ["IT KNOWS YOU CLICKED.", "YOU WERE EXPECTED.", "DO NOT CLOSE THE WINDOW.", "LOADING."];

  function swapClose() {
    clearTimeout(swapIv);
    swapIv = null;
    swap.classList.remove("open");
    swap.setAttribute("aria-hidden", "true");
    swapPiece.innerHTML = "";
  }

  function tqgSwap() {
    swapPiece.innerHTML = SWAP_PIECES.tqg;
    swapTitle.textContent = "";
    swap.classList.add("open");
    swap.setAttribute("aria-hidden", "false");
    SFX.swapStart();
    var noise = swapPiece.querySelector(".sw-noise");
    if (noise) {
      var ctx = noise.getContext("2d");
      var niv = setInterval(function () {
        var img = ctx.createImageData(200, 200);
        for (var i = 0; i < img.data.length; i += 4) {
          var v = Math.random() * 255;
          img.data[i] = v; img.data[i + 1] = v; img.data[i + 2] = v; img.data[i + 3] = 18;
        }
        ctx.putImageData(img, 0, 0);
      }, 50);
      swapIv = niv;
    }
    var pctEl = $("#tqgPct");
    var linesEl = $("#tqgLines");
    var start = performance.now();
    var lineIdx = 0;
    function tqgCounter() {
      var elapsed = performance.now() - start;
      var pct = Math.min(100, Math.round((elapsed / 2300) * 100));
      if (pctEl) pctEl.textContent = pct + "%";
      if (linesEl && lineIdx < TQG_LINES.length && elapsed > lineIdx * 450) {
        linesEl.innerHTML += '<div class="sw-tty-line">' + esc(TQG_LINES[lineIdx]) + "</div>";
        lineIdx++;
        SFX.swapTick();
      }
      if (pct < 100) swapIv = setTimeout(tqgCounter, 22);
    }
    tqgCounter();
  }

  function genericSwap(k) {
    swapPiece.innerHTML = SWAP_PIECES[k] || "";
    swapTitle.textContent = PROJECTS[k] ? PROJECTS[k].name : k;
    swap.classList.add("open");
    swap.setAttribute("aria-hidden", "false");
    SFX.swapStart();
    var start = performance.now();
    function tick() {
      var pct = Math.min(100, Math.round(((performance.now() - start) / 2300) * 100));
      swapProgress.querySelector("span").style.width = pct + "%";
      if (pct < 100) swapIv = setTimeout(tick, 30); else setTimeout(function () { window.open(PROJECTS[k].url, "_blank", "noopener"); swapClose(); }, 280);
    }
    tick();
  }

  function launch(k) {
    if (k === "tqg") tqgSwap(); else genericSwap(k);
  }

  swap.addEventListener("click", function (e) {
    if (e.target.closest(".swap-skip") || e.target === swap) swapClose();
  });

  /* ---------------- cursor ---------------- */

  function initCursor() {
    if (root.classList.contains("rm")) return;
    var ring = $("#curRing");
    if (!ring || !touchDevice) return;
    var x = -200, y = -200, tx = -200, ty = -200, raf = null, shown = false, lastHover = 0;
    document.addEventListener("mousemove", function (e) {
      tx = e.clientX; ty = e.clientY;
      if (!shown) { shown = true; ring.classList.add("on"); }
      if (!raf) raf = requestAnimationFrame(step);
    }, { passive: true });
    document.addEventListener("mouseleave", function () { ring.classList.remove("on"); });
    function step() {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      ring.style.transform = "translate3d(" + (x - 17) + "px," + (y - 17) + "px,0)";
      if (Math.abs(tx - x) > 0.3 || Math.abs(ty - y) > 0.3) {
        raf = requestAnimationFrame(step);
      } else {
        raf = null;
      }
    }
    document.addEventListener("mouseover", function (e) {
      var t = e.target;
      if (!t || !t.closest) return;
      var isInter = !!t.closest("a,button,.wcard,[data-go],select,input,label,.tpreview,.r-item,.ctl,.ov-close,.set-row,.chip,.blog-card,.review-btn,.forum-msg-btn");
      ring.classList.toggle("big", isInter);
      if (isInter) {
        var now = performance.now();
        if (now - lastHover > 50) { lastHover = now; SFX.hover(); }
      }
    });
  }

  /* ---------------- esc / boot ---------------- */

  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    if (swap.classList.contains("open")) { swapClose(); return; }
    if (settingsOverlay.classList.contains("open")) { closeSettings(); }
  });

  buildViews();
  setView("home");
  initCursor();
  applyTheme();
  renderMarket();
  setInterval(renderMarket, 5000);
  bindSettings();
  bindForum();
  bindReviews();
  bindAIOverview();

  /* simple mode toast */
  var brandNameEl = $(".brand-name");
  if (brandNameEl && !root.classList.contains("rm")) {
    typeEl(brandNameEl);
  }

  function maybeSimpleToast() {
    if (!state.simple) return;
    try { if (localStorage.getItem("hub_simple_seen") === "on") return; } catch (e) {}
    setTimeout(function () {
      showToast("YOU'RE IN SIMPLE MODE", "This is the lightweight version \u2014 programs and updates only. Visit <b>SETTINGS</b> (top of the sidebar) for the full hub with blog, forum, reviews, and more.");
      try { localStorage.setItem("hub_simple_seen", "on"); } catch (e) {}
    }, 2400);
  }
  maybeSimpleToast();

  /* idle flourish */

  var idleTimer = null;
  function armIdle() {
    if (root.classList.contains("rm")) return;
    clearTimeout(idleTimer);
    root.classList.remove("idle");
    idleTimer = setTimeout(function () { root.classList.add("idle"); }, 9000);
  }
  ["pointermove", "pointerdown", "keydown", "scroll", "wheel", "touchstart"].forEach(function (ev) {
    document.addEventListener(ev, armIdle, { passive: true });
  });
  armIdle();

  /* ---------------- toast ---------------- */

  var toastEl = $("#toast");
  var toastTitle = $("#toastTitle");
  var toastBody = $("#toastBody");

  function showToast(title, body) {
    toastTitle.textContent = title;
    toastBody.innerHTML = body;
    toastEl.classList.add("open");
    toastEl.setAttribute("aria-hidden", "false");
  }

  function dismissToast() {
    toastEl.classList.remove("open");
    toastEl.setAttribute("aria-hidden", "true");
  }

  $("#toastX").addEventListener("click", dismissToast);

  /* onboarding */

  function maybeToast() {
    try {
      var seen = localStorage.getItem("hub_intro_v3");
      if (seen) return;
      var isTouch = window.matchMedia && window.matchMedia("(hover: none)").matches;
      setTimeout(function () {
        if (isTouch) {
          showToast("WELCOME TO THE HALLWAY", "Tap the <b>dots on the left edge</b> to open the sidebar. Click the <b>logo</b> for settings.");
        } else {
          showToast("WELCOME TO THE HALLWAY", "Move your cursor to the <b>left edge</b> to open the sidebar. Click the <b>logo</b> for settings.");
        }
        localStorage.setItem("hub_intro_v3", "on");
      }, 1200);
    } catch (e) {}
  }
  maybeToast();

})();
