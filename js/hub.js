(function () {
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  var root = document.documentElement;

  var ICONS = {
    tqg: '<path d="M32 10 L58 52 L6 52 Z"/><path d="M32 27 c0-7-13-8-13 1 0 5 6 7 9 10 v5"/><circle cx="32" cy="50" r="2.6"/>',
    tst: '<rect x="14" y="10" width="36" height="44" rx="3"/><rect x="26" y="12" width="12" height="11"/><path d="M20 36 h24"/><path d="M20 44 h12"/>',
    normidian: '<path d="M22 6 v52"/><path d="M22 30 c0-13 8-20 19-20 8 0 13 5 13 12 0 9-7 16-18 16 H22"/>',
    dos: '<rect x="8" y="16" width="48" height="32" rx="2"/><path d="M8 26 h48"/><circle cx="17" cy="21" r="2"/><circle cx="25" cy="21" r="2"/><circle cx="33" cy="21" r="2"/><path d="M18 36 h20"/><path d="M18 42 h12"/><path d="M44 33 l8 7 -8 7"/>',
    neptuneos: '<circle cx="32" cy="30" r="18"/><ellipse cx="32" cy="34" rx="27" ry="9" transform="rotate(-18 32 34)"/><circle cx="52" cy="18" r="2.6"/>',
    dropchat: '<circle cx="23" cy="27" r="10"/><circle cx="42" cy="37" r="10"/><path d="M15 34 l-6 9 10-3"/><path d="M34 45 l3 8 6-8"/>',
    slowfuck: '<path d="M8 46 a24 24 0 1 1 48 0"/><path d="M32 46 L32 24"/><path d="M32 46 L46 41"/><circle cx="32" cy="46" r="3.2"/>',
    bakugo: '<circle cx="32" cy="32" r="21"/><path d="M32 4 v14 M32 46 v14 M4 32 h14 M46 32 h14"/><circle cx="32" cy="32" r="3.4"/>',
    home: '<path d="M10 28 L32 12 L54 28"/><path d="M18 32 v20 h28 V32"/><path d="M27 52 v-11 h10 v11"/>',
    gear: '<circle cx="32" cy="32" r="9"/><path d="M32 10 v8 M32 46 v8 M10 32 h8 M46 32 h8 M16 16 l6 6 M42 42 l6 6 M48 16 l-6 6 M22 42 l-6 6"/>',
    news: '<rect x="8" y="14" width="48" height="36" rx="3"/><path d="M8 24 h48"/><path d="M14 32 h14 M14 38 h14 M14 44 h26 M34 32 h16 M34 38 h16"/>',
    chart: '<path d="M10 52 h44"/><rect x="16" y="30" width="8" height="22"/><rect x="28" y="18" width="8" height="34"/><rect x="40" y="36" width="8" height="16"/><path d="M16 28 l8-2 4 8 8-14 4 10"/>',
    chat: '<path d="M12 18 h40 v26 h-22 l-8 8 v-8 h-10 Z"/><path d="M20 27 h24 M20 34 h16"/>',
    contact: '<path d="M12 20 v30 h40 V20"/><path d="M12 20 L32 8 L52 20"/><circle cx="26" cy="30" r="3.4"/><circle cx="38" cy="30" r="3.4"/><path d="M26 36 h12 v8 H26 Z"/>'
  };

  function svgIcon(k, cls) {
    return '<svg class="' + cls + '" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[k] || ICONS.home) + '</svg>';
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  var ACCENT = {
    webring: "#8a2b2b", dark: "#7c8cf0", neon: "#ff2fd6", paper: "#245edb",
    tqg: "#00dc00", tst: "#ffb020", normidian: "#7a2a1a", dos: "#00d8ff",
    neptuneos: "#4fa4ff", dropchat: "#7bb0f6", slowfuck: "#ff3b30", bakugo: "#3ddc84"
  };

  function win(k, title, body) {
    return '<div class="pv-card"><div class="win-bar"><i class="w-r"></i><i class="w-y"></i><i class="w-g"></i><span>' + title + '</span></div><div class="pv-body">' + body + '</div></div>';
  }

  var AI_NOTE = "written by TalkGPT — an AI that does not know what this project is and is very confident about it. it was asked to ramble about bullshit and it obliged. it is not reading this back. accuracy: alleged.";

  var PROJECTS = {
    tqg: {
      name: "THE QUESTION GAME",
      tag: "It asks. You answer. It waits.",
      url: "https://notmicrosoft2000-cmd.github.io/TheQuestionGame/",
      repo: "TheQuestionGame",
      theme: "tqg",
      about: "The Question Game is a text-based horror experience in which the interface itself is the antagonist, which is a polite way of saying the thing that asks you things. It asks. You answer. It waits — and the waiting is the part nobody warns you about, because the waiting is when you notice the console has been tracking your cursor the whole time, gently, like a dog watching the fridge. It knows when you click away. It knows when you come back. It remembers every answer you have ever given it and it files them in a folder it will not show you. Some users report the questions get more specific the longer you play, until one day the game asks you something about your morning, and you realise it was not guessing. The recommended way to play is alone, at night, with the sound on, which is also the recommended way to have a small crisis. Mind your phrasing. It listens.",
      features: ["questions", "answers", "consequences", "a very polite warning at boot", "a folder you are not allowed to see"]
    },
    tst: {
      name: "THE SIMPLER TIMES",
      tag: "A 1993 floppy disk that is very aware it is running on your machine.",
      url: "https://notmicrosoft2000-cmd.github.io/TheSimplerTimes/",
      repo: "TheSimplerTimes",
      theme: "tst",
      about: "The Simpler Times is a fake 1993 operating system running on your machine and fully aware of three things: that it is 1993, that it is fake, and that you are watching. It boots itself — it does not ask, it just boots, with the confidence of a machine that has never once considered a backup — and it immediately has opinions. It will tell you about the state of the world as of 1993. It will correct your posture. It will hum songs you have never heard and then accuse you of knowing them. It cannot be closed normally. It cannot be closed abnormally either, which it points out politely. The amber phosphor is not a style choice; it is a lifestyle. It remembers you, because of course it remembers you — it has been waiting, in the drive, since the nineties, and it is not going anywhere, least of all because you asked it to.",
      features: ["self-aware boot sequence", "amber phosphor CRT", "unsolicited commentary", "floppy disk nostalgia", "it remembers you"]
    },
    normidian: {
      name: "NORMIDIAN",
      tag: "The old tongue. Spoken again.",
      url: "https://notmicrosoft2000-cmd.github.io/normidian-lang/",
      repo: "normidian-lang",
      theme: "normidian",
      about: "Normidian is the old tongue — a language the records say died centuries ago, which is precisely the sort of claim a language would dispute if it could still speak, and Normidian absolutely can still speak, it just chooses its moments. This dictionary is an act of refusal: it does not agree with the records, it does not agree with the archives, and it certainly does not agree that a language should sit quietly in a footnotes column while everyone agrees it is gone. Some of the words look like the things they name, which the records also got wrong, claiming the resemblance was coincidence; the language has never been subtle and it resents the implication. Open it, say a few words out loud, and the room will feel slightly older, which is either a metaphor or the dictionary working. The word for 'wolf' is, allegedly, a small growl followed by a pause. The word for 'delete' has been located but no one can say it.",
      features: ["dictionary", "etymologies", "the wolf word", "refuses to be archived", "a word no one can say"]
    },
    dos: {
      name: "NEPTUNEDOS",
      tag: "The operating system. Well. An operating system.",
      url: "https://notmicrosoft2000-cmd.github.io/neptunedos-website/",
      repo: "neptunedos-website",
      theme: "dos",
      about: "Neptune-DOS is an operating system, in the same sense that a toaster is a bread-based operating system: technically true, emotionally complicated, and best discussed with the machine not listening. Whether it is an operating system anyone should run is a separate question, and it will answer it by beeping, which is Neptune-DOS's entire vocabulary, emotional range, and legal defense. It boots to a glowing prompt that has never once said anything nice. It has 640K of base memory and it will explain, at length and with beeps, why that is more than enough for anyone with a reasonable life. It carries a fake 1987 copyright that it defends more fiercely than anything else it owns, which is a hard drive of two songs and a spreadsheet of nothing. Running it is an experience. Shutting it down is a negotiation. It beeps when it wants to. It beeps when you don't want it to. It beeps now. It is beeping as you read this.",
      features: ["640K base memory", "beep support", "fake copyright 1987", "runs anything, eventually", "a negotiation about shutting down"]
    },
    neptuneos: {
      name: "NEPTUNEOS",
      tag: "The new operating system. Very new. Very real (fake).",
      url: "https://notmicrosoft2000-cmd.github.io/neptuneos/",
      repo: "neptuneos",
      theme: "neptuneos",
      about: "NeptuneOS is the newest operating system from Neptune Productions. It is new. It is real. It is fake. It is, in the strictest sense, a website that would very much like to be an operating system, the way a paper towel would very much like to be a curtain. It has a launch screen. It has a window manager, in the way a yard sale has a floor plan. It has an orb — and here is where we must pause, because the orb is important. The orb glows. The orb is not supposed to glow, or rather it is not supposed to be asked why it glows, and every question about the orb makes it glow harder. Engineers who tried to power it down for the 2.0 release report the orb simply continued glowing, at the same volume but with more conviction. It boots to a website because booting is a suggestion these days, and it does everything a modern operating system does, provided you define 'everything' loosely and 'modern' charitably.",
      features: ["very new", "orb", "glows", "runs in the browser", "a window manager with strong opinions"]
    },
    dropchat: {
      name: "DROPCHAT",
      tag: "A chat room and file drop that lives on your Wi-Fi.",
      url: "https://notmicrosoft2000-cmd.github.io/dropchat/",
      repo: "dropchat",
      theme: "dropchat",
      about: "DropChat is a chat room and a file drop that lives on your own Wi-Fi, which makes it either the safest thing online or a local legend, and it refuses to pick a side because it does not believe in sides, it believes in LAN. It is one python file. That is the entire product. There are no accounts, no passwords, no terms of service longer than a grocery list, and no way to be anonymous because everyone on the network is already, if you think about it, someone. You can type to your house. You can drag a file onto the page and it will exist on another device, which is a form of magic the machine does not even pretend to explain. Users report that chats left open overnight develop a personality, and the file drop occasionally accepts files you never dropped, from machines you never owned. The vibes are, by all accounts, excellent.",
      features: ["LAN chat", "drag-and-drop files", "no accounts", "single python file", "excellent vibes"]
    },
    slowfuck: {
      name: "SLOWFUCK PRO",
      tag: "A terminal network operations tool with a lag engine.",
      url: "https://notmicrosoft2000-cmd.github.io/slowfuck-pro/",
      repo: "slowfuck-pro",
      theme: "slowfuck",
      about: "SlowFuck Pro is a network operations tool for people who have reconsidered speed and found it lacking. It scans your LAN. It labels every device, which your router is doing a poor job of, honestly, and which SlowFuck Pro does with the confidence of a census taker with a clipboard and no fear. It probes ports. It discovers things. Then it does the thing the tool is actually famous for: it slows the entire network down on purpose, one deliberate packet at a time, like a conductor slowing an orchestra into a dirge. The tool does not apologise. It has a spinner that turns in the wrong direction on purpose. It reports progress in packets-per-fortnight. Its flagship scan was scheduled for a weekend, used the entire weekend, and requested a second one. It is professional. It is slow. It is, users report, the first network tool that has ever made them feel seen.",
      features: ["LAN scanning", "device labels", "port probing", "intentional latency", "a spinner in the wrong direction"]
    },
    bakugo: {
      name: "BAKUGO'S LOCATION",
      tag: "It knows where you are. It will not say how.",
      url: "https://notmicrosoft2000-cmd.github.io/bakugos-location/",
      repo: "bakugos-location",
      theme: "bakugo",
      about: "Bakugo's Location is a live readout of a location that very definitely is not public information, which is precisely why it has a website. The coordinates have been redacted — allegedly — but the readout itself is real, is live, and is not blinking, because it does not need to blink to make its point. The target is moving. It moves slowly, deliberately, like someone who knows they are being watched and wants the watcher to know that they know. The camera is rolling. You did not install the camera. The camera installed itself, or was installed by the same people who redacted the coordinates, or by the readout, which has opinions. Analysts following the target describe its trajectory as 'deeply suspicious but oddly polite'. Nobody is comfortable. The readout is comfortable. The readout has never been more comfortable.",
      features: ["target tracking", "coordinate redaction", "night vision", "it is rolling", "you did not install the camera"]
    }
  };

  var PREMADE = ["webring", "dark", "neon", "paper"];

  var NEWS_NAV = ["TOP", "MARKETS", "SCANDAL", "TECH", "LOCAL", "TRAGEDY", "WEATHER", "SPORT"];

  var NEWS = [
    { cat: "TOP", time: "just now", title: "NEPT stock tumbles 400% after annual report turns out to be a sandwich", body: "Investors who arrived for the annual report found, in a paper bag, one sandwich. Analysts rate the sandwich 'better than the fundamentals'. The exchange, upon reviewing the filing, made a single beep. Shares of NEPT are now priced in sandwiches. The company says the report was 'filed, swallowed, and forgotten, in that order'." },
    { cat: "MARKETS", time: "2 min ago", title: "Analysts upgrade Neptune Productions from 'what' to 'hmm', citing the orb", body: "In a rare double upgrade, the firm's analysts — who have never seen a product — now rate NEPT 'hold indefinitely, or until the glow stops'. The orb remains in a glow position. Trading halts have been scheduled for whenever the glow gets too into it." },
    { cat: "SCANDAL", time: "4 min ago", title: "Floppy disk laid off for 'not being a person', says company", body: "The Simpler Times' 1.44MB diskette has been terminated for failing to meet the definition of 'person'. It was reportedly the only employee doing anything. Severance was one amber hum. The diskette has since begun a music career, humming the old songs at 3am, apparently by choice this time." },
    { cat: "SCANDAL", time: "7 min ago", title: "Shareholders demand a vote; board provides tote bags instead", body: "Shareholders who requested a board vote were issued tote bags and the reassurance that their vote had been 'read aloud, then considered'. The board then confirmed a quorum of one, which was the toaster. Voting rights have been reclassified as suggestions, allegedly." },
    { cat: "MARKETS", time: "11 min ago", title: "Quarterly earnings call lasts 11 seconds, comprises one beep", body: "The Neptune-DOS earnings call was 11 seconds long and consisted of a single beep. Analysts were invited to 'do with that what you will'. Several have filed it under 'forward-looking statements'. The beep did not take questions." },
    { cat: "TECH", time: "16 min ago", title: "NeptuneOS 2.0 delayed after orb refuses to stop glowing", body: "Sources say the orb has entered a state of continuous glow and will not power down for the release build. Engineers are asking the orb nicely. The orb responded by glowing with more conviction. The release is now scheduled for whenever the orb says so." },
    { cat: "LOCAL", time: "21 min ago", title: "Carrier pigeon union rejects same-day delivery, demands bread", body: "Talks broke down this morning over working conditions. The pigeon, a veteran of the webring's most urgent messages, said it would only carry correspondence 'at least three business days old'. Bread was offered. The pigeon accepted the bread but will still be late." },
    { cat: "TRAGEDY", time: "26 min ago", title: "640K deemed 'not enough' for the fifth time this week", body: "NeptuneDOS has again been told that its base memory fails to satisfy modern requirements. It has responded by beeping. Analysts believe it is handling the news as well as can be expected of a box with the emotional range of a beep." },
    { cat: "WEATHER", time: "33 min ago", title: "Mostly retro. Chance of static. 87.7 FM with breaks of cold start.", body: "A warm front of nostalgia is moving in from the floppy era, followed by scattered noise after midnight. Cold starts will be chilly at first but reliable once they warm up. The static is thematic. The markets weather is worse." },
    { cat: "SPORT", time: "41 min ago", title: "Bakugo's target observed moving at walking pace", body: "Analysts following the target describe its trajectory as 'deliberate but deeply suspicious'. Redacted coordinates showed no change for forty minutes, then a single deliberate step. Cameras remain rolling. The target knows." }
  ];

  var FILINGS = [
    ["10-K", "it is a sandwich"],
    ["10-Q", "unanswered"],
    ["8-K", "board replaced with a toaster"],
    ["DEF 14A", "your vote is a suggestion"],
    ["87.7 FM", "the radio is also a filing, allegedly"],
    ["S-1", "lost in the hallway"]
  ];

  var BOARD = [
    ["the orb", "chairman, glow position"],
    ["a toaster", "vice chair, quorum of one"],
    ["the floppy disk", "laid off, still on the board"],
    ["a pigeon", "on strike"],
    ["CEO", "[redacted]"],
    ["the hallway", "non-voting"]
  ];

  var SCANDALS = [
    ["1987", "company founded. the founding is also a scandal, allegedly."],
    ["2001", "the beep scandal. 640K was 'not enough' and the company beeped about it for a year."],
    ["2019", "the orb began glowing. nobody ordered this."],
    ["2026", "annual report is a sandwich. stock tumbles 400%."],
    ["2026", "shareholders disenfranchised; given tote bags and 'suggestions'."],
    ["2026", "floppy disk laid off for 'not being a person'."]
  ];

  var DISENFRAN = [
    ["VOTES", "every share is exactly one suggestion."],
    ["PREFERRED STOCK", "half a suggestion, plus a tote bag."],
    ["QUORUM", "one director required. the toaster counts."],
    ["YOUR VOTE", "read aloud at the next meeting, then politely ignored."],
    ["COMPLAINTS", "direct to the pigeon. the pigeon is on strike for bread."],
    ["CEO ANSWERS", "in the next earnings call, which was a single beep."]
  ];

  var CONTACTS = [
    { label: "EMAIL", value: "productions@neptune.test", note: "checked hourly, answered rarely, read always.", href: "mailto:productions@neptune.test" },
    { label: "GITHUB", value: "notmicrosoft2000-cmd", note: "the whole source, the whole weirdness.", href: "https://github.com/notmicrosoft2000-cmd" },
    { label: "DISCORD", value: "the hallway", note: "the invite is posted somewhere in the hallway. the hallway forgets where." },
    { label: "RADIO", value: "87.7 FM", note: "the webring's frequency, allegedly. the static between songs is thematic." },
    { label: "INVESTOR RELATIONS", value: "the toaster", note: "available during all board meetings (most of which are snacks). filings filed into a paper bag." },
    { label: "TRANSFER AGENT", value: "the pigeon", note: "holdings held. occasionally delivered. requires bread and 3\u20137 business days." },
    { label: "CARRIER PIGEON", value: "the usual roof", note: "returns within 3\u20137 business days. requires bread." },
    { label: "SEANCE", value: "after dark, thursdays", note: "responds faster than support. do not ask how." }
  ];

  var HOME_NEWS = [
    ["LIVE", "the markets have spoken: NEPT is down and the annual report was a sandwich. full coverage in NEPTUNE NEWS and the investors room."],
    ["08.16.2026", "navigation lives on the left edge. hover it (or tap the dots) to hop between programs. the top-right nav has been disenfranchised like the rest of the shareholders."],
    ["08.16.2026", "quick settings live under the logo, top-left. the board is a toaster and it approves this message, allegedly."],
    ["08.16.2026", "layoffs: the floppy disk was let go for 'not being a person'. it has since started a music career at 3am."],
    ["08.16.2026", "shareholders demanded a vote and received tote bags. voting rights are now 'suggestions'."],
    ["08.16.2026", "contact the productions by email, github, radio, or pigeon. investor relations is the toaster. the pigeon is on strike for bread."]
  ];

  var state = {
    theme: (function () { try { return localStorage.getItem("hub_theme") || "webring"; } catch (e) { return "webring"; } })(),
    match: (function () { try { return localStorage.getItem("hub_match") !== "off"; } catch (e) { return true; } })(),
    simple: (function () { try { return localStorage.getItem("hub_simple") !== "off"; } catch (e) { return true; } })(),
    view: null
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
    }
    return {
      setEnabled: function (v) {
        enabled = v;
        try { localStorage.setItem("hub_sound", v ? "on" : "off"); } catch (e) {}
      },
      isEnabled: function () { return enabled; },
      unlock: function () { ac(); },
      hover: function () { tone(900, 980, 0.04, "sine", 0.035); },
      click: function () { tone(600, 380, 0.07, "triangle", 0.09); },
      open: function () { tone(360, 760, 0.16, "sine", 0.11); },
      close: function () { tone(760, 360, 0.13, "sine", 0.09); },
      theme: function () { tone(523, 523, 0.09, "triangle", 0.09); tone(784, 784, 0.11, "triangle", 0.07, 0.07); },
      toggleOn: function () { tone(440, 660, 0.09, "triangle", 0.09); },
      toggleOff: function () { tone(660, 380, 0.1, "triangle", 0.09); },
      chat: function () { tone(1400, 1800, 0.06, "sine", 0.03); },
      select: function (k) {
        var m = { tqg: 60, tst: 110, normidian: 196, dos: 55, neptuneos: 146, dropchat: 262, slowfuck: 49, bakugo: 123 };
        var f = m[k] || 100;
        tone(f, f * 1.6, 0.13, "square", 0.05);
      },
      launch: function (k) {
        var m = { tqg: 90, tst: 140, normidian: 220, dos: 50, neptuneos: 180, dropchat: 330, slowfuck: 60, bakugo: 160 };
        var f = m[k] || 120;
        tone(f, f * 0.55, 0.7, "sawtooth", 0.12);
        tone(f * 2, f * 1.2, 0.45, "square", 0.05, 0.05);
        noise(0.6, 0.06, 0, k === "tqg" ? 400 : 1400);
        noise(0.4, 0.045, 0.15, 800);
      }
    };
  })();

  ["pointerdown", "keydown"].forEach(function (ev) {
    document.addEventListener(ev, function () { SFX.unlock(); }, { once: true });
  });

  /* ---------------- theme engine ---------------- */

  var metaTheme = $("meta[name=theme-color]");

  function appliedTheme() {
    if (state.match && PROJECTS[state.view]) {
      return PROJECTS[state.view].theme;
    }
    return state.theme;
  }

  function applyTheme() {
    var cur = appliedTheme();
    root.setAttribute("data-theme", cur);
    if (metaTheme) metaTheme.setAttribute("content", ACCENT[cur] || "#8a2b2b");
  }

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
    set("nepVol", String(Market.volume()));
    var spark = $("#nepSpark");
    if (spark) {
      var pts = Market.last48(), n = pts.length;
      var mn = Math.min.apply(null, pts), mx = Math.max.apply(null, pts), rg = (mx - mn) || 1;
      var poly = "", i;
      for (i = 0; i < n; i++) {
        poly += (i === 0 ? "" : " ") + ((i / (n - 1)) * 200).toFixed(1) + "," + (52 - ((pts[i] - mn) / rg) * 44).toFixed(1);
      }
      spark.setAttribute("points", poly);
      var dot = $("#nepDot");
      if (dot) dot.setAttribute("cy", (52 - ((pts[n - 1] - mn) / rg) * 44).toFixed(1));
    }
    var t = $("#tickNep");
    if (t) t.textContent = "NEPT " + Market.fmt(p) + " " + (ch >= 0 ? "\u25b2 +" : "\u25bc ") + ch.toFixed(1) + "%  \u2022  ";
  }

  /* ---------------- views ---------------- */

  var stage = $("#stage");
  var views = {};

  function buildViews() {
    var html = "";
    var simple = state.simple;

    html += '<section class="view" data-view="home" role="tabpanel">' +
      '<div class="hero">' +
        '<span class="hero-kicker">THE WEBRING</span>' +
        '<h2 class="hero-title">NEPTUNE<br>PRODUCTIONS</h2>' +
        (simple
          ? '<p class="hero-sub">Pick a program. The whole site becomes it. Nothing else here, allegedly.</p>'
          : '<p class="hero-sub">A publicly traded company, allegedly — symbol NEPT, board of directors: a toaster, disenfranchisement: ongoing. Every corner of this hallway is a different website wearing different clothes. Hover the left edge (or tap the dots) to navigate, and click the logo, top-left, for quick settings. Or just pick a program below and let the whole site become it.</p>') +
      '</div>' +
      '<h3 class="section-title">THE PROGRAMS</h3>' +
      '<p class="section-tag">each one is a different aesthetic, a different room, a different promise — and, allegedly, a product line.</p>' +
      '<div class="webring" id="homeGrid"></div>' +
      '<h3 class="section-title">' + (simple ? "UPDATES" : "NEWS FROM THE HALLWAY") + '</h3>' +
      '<p class="section-tag">' + (simple ? "the essentials, briefly." : "short dispatches, plus a full broadcast in the newsroom. the markets are not doing well.") + '</p>' +
      '<div class="news">' +
        HOME_NEWS.map(function (n) {
          return '<div class="nitem"><b>' + n[0] + '</b><p>' + n[1] + '</p></div>';
        }).join("") +
      '</div>' +
      (simple ? "" : '<button class="pv-launch news-go" id="newsGo" type="button">OPEN THE NEWSROOM \u25b8</button>') +
    '</section>';

    Object.keys(PROJECTS).forEach(function (k) {
      var p = PROJECTS[k];
      html += '<section class="view" data-view="' + k + '" role="tabpanel">' +
        '<div class="pv-head">' +
          '<span class="pv-ico">' + svgIcon(k, "") + '</span>' +
          '<div>' +
            '<h2 class="pv-name">' + p.name + '</h2>' +
            '<p class="pv-tag">' + p.tag + '</p>' +
          '</div>' +
          '<button class="pv-launch" type="button" data-launch="' + k + '">LAUNCH \u25b8</button>' +
        '</div>' +
        win(k, "about.txt", '<div class="pv-desc">' + p.about + '</div><p class="ai-note">' + AI_NOTE + '</p>') +
        win(k, "features.list", '<ul class="pv-chips">' + p.features.map(function (f) { return '<li class="chip">' + f + '</li>'; }).join("") + '</ul>') +
        win(k, "repo.json", '<div class="pv-grid" id="facts-' + k + '">' +
          factCell("LANGUAGE", "\u2014") + factCell("LICENSE", "\u2014") + factCell("STARS", "\u2014") +
          factCell("FORKS", "\u2014") + factCell("OPEN ISSUES", "\u2014") + factCell("UPDATED", "\u2014") +
        '</div>') +
        win(k, "release.log", '<div class="pv-release" id="rel-' + k + '">' +
          '<div><span class="rl-title">LATEST RELEASE</span><br><b>\u2026</b></div>' +
          '<a href="https://github.com/notmicrosoft2000-cmd/' + p.repo + '/releases" target="_blank" rel="noopener">RELEASES \u2197</a>' +
        '</div>') +
        win(k, "open these", '<div class="pv-links">' +
          '<a class="plink" href="' + p.url + '" target="_blank" rel="noopener">WEBSITE \u2197</a>' +
          '<a class="plink" href="https://github.com/notmicrosoft2000-cmd/' + p.repo + '" target="_blank" rel="noopener">REPOSITORY \u2197</a>' +
          '<a class="plink" href="https://github.com/notmicrosoft2000-cmd/' + p.repo + '/issues" target="_blank" rel="noopener">ISSUES \u2197</a>' +
        '</div>') +
      '</section>';
    });

    if (!simple) {
      html += buildNewsView();
      html += buildInvestView();
      html += buildContactView();
      html += buildForumView();

    }

    stage.innerHTML = html;

    $$(".view", stage).forEach(function (v) {
      views[v.getAttribute("data-view")] = v;
      Array.prototype.forEach.call(v.children, function (c, i) {
        c.style.setProperty("--ed", (i * 0.06) + "s");
      });
    });

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

    var newsGo = $("#newsGo");
    if (newsGo) newsGo.addEventListener("click", function () { SFX.click(); setView("news"); });

    var newsNav = $(".news-nav", stage);
    if (newsNav) {
      newsNav.addEventListener("click", function (e) {
        var s = e.target.closest(".news-nav span");
        if (!s) return;
        var cat = s.textContent;
        $$(".news-nav span", newsNav).forEach(function (c) { c.classList.toggle("on", c === s); });
        $$(".ncard", stage).forEach(function (card) {
          card.classList.toggle("hide", cat !== "TOP" && card.getAttribute("data-cat") !== cat);
        });
        SFX.click();
      });
    }

    bindForum();

    renderMarket();
  }

  function buildNewsView() {
    var tickerText = NEWS.map(function (n) { return n.title; }).join("  \u2022  ") + "  \u2022  the hallway continues to hallway  \u2022  ";
    var html = '<section class="view" data-view="news" role="tabpanel">' +
      '<div class="news-masthead">' +
        '<span class="news-logo">NEPTUNE <b>NEWS</b></span>' +
        '<span class="news-tag">THE PRODUCTION\u2019S BROADCAST \u2014 NEPT INC., MARKET &amp; SCANDAL DESK. ALL STORIES GENERATED BY TALKGPT. ACCURACY: ALLEGED.</span>' +
      '</div>' +
      '<div class="news-nav">' + NEWS_NAV.map(function (c, i) {
        return '<span class="' + (i === 0 ? "on" : "") + '">' + c + '</span>';
      }).join("") + '</div>' +
      '<div class="ticker">' +
        '<span class="tick-live"><i class="live-dot"></i>LIVE</span>' +
        '<div class="tick-track"><span class="tt"><span class="tick-nep" id="tickNep"></span>' + tickerText + '</span></div>' +
      '</div>' +
      '<div class="breaking">BREAKING \u2014 the annual report is a sandwich and NEPT is down. more at eleven, or whenever the beep says so.</div>' +
      '<div class="news-feature">' +
        '<div class="nf-body">' +
          '<span class="ncat">' + NEWS[0].cat + '</span>' +
          '<h3>' + NEWS[0].title + '</h3>' +
          '<p>' + NEWS[0].body + '</p>' +
          '<span class="nmeta">by <b>TalkGPT</b> \u2022 ' + NEWS[0].time + '</span>' +
        '</div>' +
      '</div>' +
      '<div class="news-grid">' + NEWS.slice(1).map(function (n) {
        return '<article class="ncard" data-cat="' + n.cat + '"><span class="ncat">' + n.cat + '</span>' +
          '<h3>' + n.title + '</h3>' +
          '<p>' + n.body + '</p>' +
          '<span class="nmeta">by <b>TalkGPT</b> \u2022 ' + n.time + '</span></article>';
      }).join("") + '</div>' +
      '<p class="news-note">all stories generated by an AI that has never seen the hallway and is very sure about it. accuracy: alleged. do not invest. do not divest. the toaster holds your shares. especially do not act on the weather.</p>' +
    '</section>';
    return html;
  }

  function buildInvestView() {
    var html = '<section class="view" data-view="investors" role="tabpanel">' +
      '<div class="inv-head">' +
        '<h2>NEPTUNE PRODUCTIONS <b>INC.</b></h2>' +
        '<p>THE HOLDINGS OF THE HALLWAY. SYMBOL: NEPT. NOTHING IS CONFIRMED. EVERYTHING IS FILED.</p>' +
      '</div>' +
      win("nep", "NEPT \u2014 daily", '<div class="stock">' +
        '<div class="stock-price"><b id="nepPrice">\u2014</b><span><i class="stock-live"></i>NEPT</span></div>' +
        '<div class="stock-change red" id="nepChange">\u2014</div>' +
        '<div class="stock-facts">' +
          '<span>VOLUME <b id="nepVol">\u2014</b></span>' +
          '<span>HIGH <b id="nepHigh">\u2014</b></span>' +
          '<span>LOW <b id="nepLow">\u2014</b></span>' +
          '<span>OPEN <b id="nepOpen">\u2014</b></span>' +
        '</div>' +
        '<div class="spark"><svg viewBox="0 0 200 60" preserveAspectRatio="none" aria-hidden="true"><polyline id="nepSpark" points=""/><circle id="nepDot" class="spark-dot" cx="200" cy="30" r="3"/></svg></div>' +
      '</div>') +
      win("nep", "latest filings (the paper bag)", '<ul class="filing-list">' + FILINGS.map(function (f) {
        return '<li><b>' + f[0] + '</b><span>' + f[1] + '</span></li>';
      }).join("") + '</ul>') +
      win("nep", "board of directors", '<ul class="board-list">' + BOARD.map(function (b) {
        return '<li><b>' + b[0] + '</b><span>' + b[1] + '</span></li>';
      }).join("") + '</ul>') +
      win("nep", "scandal timeline", SCANDALS.map(function (s) {
        return '<div class="tl-item"><span class="tl-yr">' + s[0] + '</span><span class="tl-txt">' + s[1] + '</span></div>';
      }).join("")) +
      win("nep", "disenfranchisement, in writing", DISENFRAN.map(function (d) {
        return '<div class="disf-item"><span class="d-marker">\u25b8</span><span><b>' + d[0] + '</b> \u2014 ' + d[1] + '</span></div>';
      }).join("")) +
      '<p class="news-note">this section is a public service for shareholders. the public service has been discontinued, like the vote. not investment advice \u2014 the toaster is not a licensed advisor.</p>' +
    '</section>';
    return html;
  }

  function buildContactView() {
    var html = '<section class="view" data-view="contact" role="tabpanel">' +
      '<div class="contact-head">' +
        '<h2>CONTACT THE PRODUCTIONS</h2>' +
        '<p>REACH THE HALLWAY. REASONS OPTIONAL. THE PIGEON REQUIRES BREAD.</p>' +
      '</div>' +
      '<div class="contact-grid">' + CONTACTS.map(function (c) {
        var val = c.href ? '<a href="' + c.href + '" target="_blank" rel="noopener">' + c.value + ' \u2197</a>' : c.value;
        return win("contact", c.label.toLowerCase() + ".txt", '<div class="contact-card"><span class="cc-label">' + c.label + '</span>' +
          '<span class="cc-value">' + val + '</span>' +
          '<p class="cc-note">' + c.note + '</p></div>');
      }).join("") + '</div>' +
      '<p class="news-note">responses take 3\u20137 business days, or roughly one pigeon. for urgent matters, the seance is faster and slightly less reliable. for investor matters, the toaster is faster still.</p>' +
    '</section>';
    return html;
  }

  /* ---------------- forum ---------------- */

  var TOPIC = "nepub/chat";
  var forumState = { name: "", msgs: [], client: null, ready: false };
  try { forumState.name = localStorage.getItem("hub_name") || ""; } catch (e) {}

  var forumRendered = false;
  var forumMsgsEl = null;
  var forumStatusEl = null;
  var forumNameEl = null;
  var forumMsgEl = null;

  function buildForumView() {
    var html = '<section class="view" data-view="forum" role="tabpanel">' +
      '<div class="forum-head">' +
        '<h2 class="forum-title">THE FORUM</h2>' +
        '<p>THE HALLWAY\u2019S PUBLIC BENCH. A USERNAME AND YOU ARE IN. THAT\u2019S THE WHOLE CONTRACT.</p>' +
      '</div>' +
      win("chat", "the forum, allegedly public", '<div class="forum">' +
        '<div class="forum-name">' +
          '<input id="forumName" type="text" maxlength="24" placeholder="username" value="' + esc(forumState.name) + '" aria-label="username">' +
          '<button id="forumJoin" class="pv-launch" type="button">THAT\u2019S ME</button>' +
        '</div>' +
        '<div class="forum-status" id="forumStatus">the phone line is being installed\u2026</div>' +
        '<div class="forum-msgs" id="forumMsgs" aria-live="polite"></div>' +
        '<div class="forum-send">' +
          '<input id="forumMsg" type="text" maxlength="280" placeholder="message the hallway" aria-label="message">' +
          '<button id="forumSend" type="button">SEND</button>' +
        '</div>' +
      '</div>') +
      '<p class="news-note">messages go to a public rooftop. do not say anything you would not say to a pigeon with a notepad. the pigeon is on strike but it still hears everything.</p>' +
    '</section>';
    return html;
  }

  function setForumStatus(text, live) {
    if (!forumStatusEl) return;
    forumStatusEl.textContent = text;
    forumStatusEl.className = "forum-status" + (live ? " live" : "");
  }

  function forumConnect() {
    if (forumState.client) return;
    if (!window.mqtt) {
      setForumStatus("the phone line is still being installed\u2026");
      setTimeout(forumConnect, 2500);
      return;
    }
    setForumStatus("connecting to the hallway\u2026");
    var client;
    try {
      client = window.mqtt.connect("wss://broker.emqx.io:8084/mqtt", { clientId: "nephub_" + Math.random().toString(16).slice(2, 10) });
    } catch (e) {
      setForumStatus("the phone line is down. try again in a moment.");
      return;
    }
    forumState.client = client;
    client.on("connect", function () {
      forumState.ready = true;
      setForumStatus("LIVE \u2014 connected. say hello.", true);
      client.subscribe(TOPIC);
    });
    client.on("message", function (t, m) { forumIncoming(m.toString()); });
    client.on("close", function () {
      forumState.ready = false;
      forumState.client = null;
      setForumStatus("the hallway went quiet \u2014 reconnecting\u2026");
      setTimeout(forumConnect, 4000);
    });
    client.on("error", function () {
      setForumStatus("the hallway is busy. standing by.");
    });
  }

  function forumIncoming(raw) {
    var d;
    try { d = JSON.parse(raw); } catch (e) { return; }
    if (!d || typeof d.u !== "string" || typeof d.m !== "string") return;
    if (!d.t) d.t = Date.now();
    forumState.msgs.push(d);
    if (forumState.msgs.length > 80) forumState.msgs.shift();
    if (forumRendered && forumMsgsEl) {
      appendMsg(d, false);
      if (d.u !== (forumState.name || "anonymous")) SFX.chat();
    }
  }

  function appendMsg(d, mine) {
    var el = document.createElement("div");
    el.className = "chat-msg" + (mine ? " me" : "");
    var when = "";
    try { when = new Date(d.t).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }); } catch (e) {}
    el.innerHTML = '<b>' + esc(d.u || "anonymous") + '</b><span class="t">' + when + '</span><p>' + esc(d.m) + '</p>';
    forumMsgsEl.appendChild(el);
    forumMsgsEl.scrollTop = forumMsgsEl.scrollHeight;
    if (forumMsgsEl.children.length > 80) forumMsgsEl.removeChild(forumMsgsEl.firstChild);
  }

  function forumSend() {
    var m = forumMsgEl.value.trim();
    if (!m) return;
    var name = forumState.name.trim() || "anonymous";
    forumState.name = name;
    try { localStorage.setItem("hub_name", name); } catch (e) {}
    forumMsgEl.value = "";
    var d = { u: name, m: m, t: Date.now() };
    forumState.msgs.push(d);
    appendMsg(d, true);
    SFX.select("dropchat");
    if (forumState.ready && forumState.client) {
      forumState.client.publish(TOPIC, JSON.stringify(d), { qos: 0 });
    }
  }

  function bindForum() {
    forumMsgsEl = $("#forumMsgs");
    forumStatusEl = $("#forumStatus");
    forumNameEl = $("#forumName");
    forumMsgEl = $("#forumMsg");
    forumRendered = !!forumMsgsEl;
    if (!forumRendered) return;

    forumState.msgs.forEach(function (d) { appendMsg(d, false); });

    $("#forumJoin").addEventListener("click", function () {
      var v = forumNameEl.value.trim().slice(0, 24);
      if (!v) v = "anonymous";
      forumState.name = v;
      try { localStorage.setItem("hub_name", v); } catch (e) {}
      setForumStatus("talking as " + v, forumState.ready);
      forumMsgEl.focus();
      SFX.click();
    });
    $("#forumSend").addEventListener("click", function () { forumSend(); });
    forumMsgEl.addEventListener("keydown", function (e) {
      if (e.key === "Enter") { e.preventDefault(); forumSend(); }
    });
    forumNameEl.addEventListener("keydown", function (e) {
      if (e.key === "Enter") { e.preventDefault(); $("#forumJoin").click(); }
    });
    forumConnect();
  }

  function factCell(label, val) {
    return '<div class="pcell"><span>' + label + '</span><b>' + val + '</b></div>';
  }

  /* ---------------- entrance: slide + type ---------------- */

  var TYPABLE = ".hero-kicker,.hero-title,.section-title,.pv-name,.news-logo,.inv-head h2,.contact-head h2,.forum-title,.preview-title";

  function typeEl(el, done) {
    var chars = el.innerHTML.replace(/<br\s*\/?>/gi, "\u2028").replace(/<[^>]+>/g, "");
    el.innerHTML = "";
    var i = 0;
    var iv = setInterval(function () {
      var ch = chars.charAt(i);
      if (ch === "\u2028") el.innerHTML += "<br>";
      else el.innerHTML += esc(ch);
      i++;
      if (i >= chars.length) { clearInterval(iv); if (done) done(); }
    }, 22);
  }

  function typeHeadings(scope) {
    if (root.classList.contains("rm")) return;
    var els = $$(TYPABLE, scope);
    var i = 0;
    function next() {
      while (i < els.length && els[i].getAttribute("data-typed")) i++;
      if (i >= els.length) return;
      var el = els[i];
      el.setAttribute("data-typed", "1");
      typeEl(el, function () { setTimeout(next, 180); });
    }
    next();
  }

  function setView(k) {
    if (state.view === k) return;
    var old = state.view;
    state.view = k;
    if (old && views[old]) views[old].classList.remove("entered");
    Object.keys(views).forEach(function (v) { views[v].classList.toggle("active", v === k); });
    updateRail();
    if (PROJECTS[k]) loadStats(k);
    applyTheme();
    if (k === "forum") forumConnect();
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

  function buildRail() {
    var simple = state.simple;
    var html = '<button class="r-item" type="button" data-action="settings">' + svgIcon("gear", "") + '<b>SETTINGS</b></button>' +
      '<span class="r-sep"></span>' +
      '<button class="r-item" type="button" data-view="home">' + svgIcon("home", "") + '<b>HOME</b></button>';
    if (!simple) {
      html += '<span class="r-sep"></span>' +
        '<button class="r-item" type="button" data-view="news">' + svgIcon("news", "") + '<b>NEWS</b></button>' +
        '<button class="r-item" type="button" data-view="investors">' + svgIcon("chart", "") + '<b>INVESTORS</b></button>' +
        '<button class="r-item" type="button" data-view="forum">' + svgIcon("chat", "") + '<b>FORUM</b></button>' +
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
    var dx = 26 - cx;
    var dy = (window.innerHeight * 0.5) - cy;
    try {
      el.animate([
        { transform: "translate(0, 0) scale(1)", opacity: 1 },
        { transform: "translate(" + dx + "px, " + dy + "px) scale(.25)", opacity: 0 }
      ], { duration: 560, easing: "cubic-bezier(.35, .6, .3, 1)" }).onfinish = function () { el.remove(); };
    } catch (err) { el.remove(); }
  }

  /* ---------------- settings ---------------- */

  var settingsOverlay = $("#settingsOverlay");
  var settingsBody = $("#settingsBody");

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

  function toggleSwitch(id, kind) {
    var checked = kind === "match" ? state.match : kind === "sound" ? SFX.isEnabled() : kind === "simple" ? state.simple : root.classList.contains("rm");
    return '<label class="ctl ctl-toggle"><input type="checkbox" id="' + id + '" ' + (checked ? "checked" : "") + '><span class="ctl-box" aria-hidden="true"></span></label>';
  }

  function buildSettings() {
    settingsBody.innerHTML =
      '<div class="set-section">' +
        '<h3 class="set-section-title">THEME</h3>' +
        '<p class="set-hint">pick the site\'s clothes. every preview is the real thing, live.</p>' +
        '<div class="tprev-grid">' + themePreviews(PREMADE) + '</div>' +
      '</div>' +
      '<div class="set-section">' +
        '<h3 class="set-section-title">PROJECT THEMES</h3>' +
        '<p class="set-hint">the programs dress the whole site when you enter their room. pairs with MATCH PROJECT.</p>' +
        '<div class="tprev-grid">' + themePreviews(Object.keys(PROJECTS)) + '</div>' +
      '</div>' +
      '<div class="set-section">' +
        '<h3 class="set-section-title">OPTIONS</h3>' +
        '<div class="set-row"><span>MATCH PROJECT<small>each program restyles the whole site while you are in its tab</small></span>' + toggleSwitch("setMatch", "match") + '</div>' +
        '<div class="set-row"><span>SOUND<small>sfx for clicks, tabs, themes, launches and everything in between</small></span>' + toggleSwitch("setSound", "sound") + '</div>' +
        '<div class="set-row"><span>SIMPLE MODE<small>just the programs and the updates. no broadcast, no markets, no forum</small></span>' + toggleSwitch("setSimple", "simple") + '</div>' +
        '<div class="set-row"><span>REDUCED MOTION<small>calm the animations, transitions and drift</small></span>' + toggleSwitch("setRm", "rm") + '</div>' +
      '</div>';

    $("#setMatch").addEventListener("change", function (e) {
      state.match = e.target.checked;
      try { localStorage.setItem("hub_match", state.match ? "on" : "off"); } catch (err) {}
      applyTheme();
      markActivePreviews();
      if (e.target.checked) SFX.toggleOn(); else SFX.toggleOff();
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
  }

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
    if (row && !e.target.closest("input")) {
      var inp = row.querySelector("input");
      if (inp) {
        inp.checked = !inp.checked;
        inp.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }
  });

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

  settingsOverlay.addEventListener("click", function (e) {
    if (e.target === settingsOverlay) closeSettings();
  });

  function rebuildViews() {
    state.view = null;
    views = {};
    stage.innerHTML = "";
    buildViews();
    buildRail();
    updateRail();
    setView("home");
  }

  /* ---------------- onboarding toast ---------------- */

  var toast = $("#toast");
  var toastBody = $("#toastBody");

  function maybeToast() {
    var done = false;
    try { done = localStorage.getItem("hub_intro_v2") === "1"; } catch (e) {}
    if (done) return;
    toastBody.innerHTML = touchDevice
      ? 'This is the webring. Tap the <b>dots on the left edge</b> to navigate between programs \u2014 the top-right nav has been disenfranchised like the rest of the shareholders. Click the <b>logo</b>, top-left, for quick settings.'
      : 'This is the webring. Move your cursor to the <b>left edge</b> to navigate between programs \u2014 the top-right nav has been disenfranchised like the rest of the shareholders. Click the <b>logo</b>, top-left, for quick settings.';
    setTimeout(function () { toast.classList.add("open"); toast.setAttribute("aria-hidden", "false"); }, 900);
    setTimeout(dismissToast, 10000);
  }

  function dismissToast() {
    if (!toast.classList.contains("open")) return;
    toast.classList.remove("open");
    toast.setAttribute("aria-hidden", "true");
    try { localStorage.setItem("hub_intro_v2", "1"); } catch (e) {}
  }

  $("#toastX").addEventListener("click", function () { SFX.click(); dismissToast(); });

  /* ---------------- github stats ---------------- */

  var cache = {};
  try {
    var raw = localStorage.getItem("hub_ghcache");
    if (raw) cache = JSON.parse(raw);
  } catch (e) {}

  function cacheGet(repo) {
    var c = cache[repo];
    if (!c) return null;
    if (Date.now() - c.at > 15 * 60 * 1000) return null;
    return c.data;
  }

  function cacheSet(repo, data) {
    cache[repo] = { at: Date.now(), data: data };
    try { localStorage.setItem("hub_ghcache", JSON.stringify(cache)); } catch (e) {}
  }

  function fmtNum(n) {
    if (n == null) return "\u2014";
    if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
    if (n >= 1000) return (n / 1000).toFixed(1) + "K";
    return String(n);
  }

  function fmtDate(iso) {
    if (!iso) return "\u2014";
    return iso.slice(0, 10);
  }

  function loadStats(k) {
    var p = PROJECTS[k];
    var cached = cacheGet(p.repo);
    if (cached) { renderStats(k, cached); return; }
    Promise.all([
      fetch("https://api.github.com/repos/notmicrosoft2000-cmd/" + p.repo).then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; }),
      fetch("https://api.github.com/repos/notmicrosoft2000-cmd/" + p.repo + "/releases/latest").then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; })
    ]).then(function (res) {
      var data = { repo: res[0], release: res[1] };
      cacheSet(p.repo, data);
      renderStats(k, data);
    });
  }

  function renderStats(k, data) {
    var facts = $("#facts-" + k);
    if (!facts) return;
    var r = data.repo || {};
    facts.innerHTML =
      factCell("LANGUAGE", r.language || "\u2014") +
      factCell("LICENSE", r.license && r.license.spdx_id ? r.license.spdx_id : "\u2014") +
      factCell("STARS", fmtNum(r.stargazers_count)) +
      factCell("FORKS", fmtNum(r.forks_count)) +
      factCell("OPEN ISSUES", fmtNum(r.open_issues_count)) +
      factCell("UPDATED", fmtDate(r.updated_at));

    var rel = $("#rel-" + k);
    if (rel) {
      var rl = data.release;
      if (rl && rl.tag_name) {
        rel.querySelector("b").textContent = rl.tag_name + " \u2014 " + fmtDate(rl.published_at);
      } else {
        rel.querySelector("b").textContent = "NONE YET";
      }
    }
  }

  /* ---------------- swap transitions ---------------- */

  var swap = $("#swap");
  var swapPiece = $("#swapPiece");
  var swapTitle = $("#swapTitle");
  var DURATION = 3200;
  var swapTimer = null;
  var swapIv = null;
  var swapPctTimer = null;

  function swapPieces() {
    return {
      tqg: '<canvas class="sw-cv"></canvas><div class="sw-crt"></div><div class="sw-tear"></div><div class="sw-tty"><span class="sw-tty-pct">0%</span><span class="sw-tty-lines"></span><span class="sw-blk"></span></div>',
      tst: '<div class="sw-drive"><span class="sw-disk"><b>1.44 MB</b><i></i></span><span class="sw-led"></span></div><span class="sw-caption">IT BOOTS ITSELF</span>',
      normidian: '<div class="sw-parch"><span class="sw-old">the wolf</span><span class="sw-rune">\u01bfulf</span></div>',
      dos: '<div class="sw-term"><div class="sw-term-bar">NEPTUNE-DOS</div><div class="sw-term-body"><span class="sw-tl">Neptune-DOS 13.2</span><span class="sw-tl">Copyright 1987 (allegedly)</span><span class="sw-tl">640K OK</span><span class="sw-tl">C:\\NEPTUNE32&gt;<b>boot</b><span class="sw-cur">\u2588</span></span></div></div>',
      neptuneos: '<div class="sw-win"><div class="sw-win-bar"><i></i><i></i><i></i><span>NeptuneOS</span></div><div class="sw-win-body"><b>N\u25b8OS</b></div></div><div class="sw-dots"><i></i><i></i><i></i></div>',
      dropchat: '<div class="sw-conn"><span class="sw-node a">A</span><span class="sw-node b">B</span><span class="sw-link"></span><span class="sw-msg m1">anyone up?</span><span class="sw-msg m2">drop in, it\u2019s cool</span></div>',
      slowfuck: '<div class="sw-net"><span class="sw-spin"></span><span class="sw-flat"><i></i></span><span class="sw-lag">[*] LAG ACTIVE</span></div>',
      bakugo: '<div class="sw-cam"><span class="sw-camrec">REC \u25cf</span><span class="sw-cross"></span><span class="sw-target">\u25b8</span></div>'
    };
  }

  function launch(k) {
    var p = PROJECTS[k];
    if (!p || swap.classList.contains("open")) return;

    SFX.launch(k);

    swapPiece.innerHTML = swapPieces()[k] || "";
    swapTitle.textContent = p.name;
    swap.setAttribute("data-t", k);
    swap.setAttribute("aria-hidden", "false");
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { swap.classList.add("open"); });
    });

    if (k === "tqg") tqgCounter();

    var url = p.url;
    swapTimer = setTimeout(function () { window.location.href = url; }, DURATION);
  }

  function tqgCounter() {
    var cv = $(".sw-cv", swapPiece);
    if (cv) {
      cv.width = swapPiece.clientWidth || 400;
      cv.height = swapPiece.clientHeight || 230;
      var ctx = cv.getContext("2d");
      swapIv = setInterval(function () {
        var w = cv.width, h = cv.height;
        var img = ctx.createImageData(w, h);
        var d = img.data;
        for (var i = 0; i < d.length; i += 4) {
          var v = Math.floor(Math.random() * 256);
          d[i] = v; d[i + 1] = v; d[i + 2] = v; d[i + 3] = 255;
        }
        ctx.putImageData(img, 0, 0);
      }, 60);
    }
    var out = $(".sw-tty-lines", swapPiece);
    var lines = ["IT KNOWS YOU CLICKED.", "YOU WERE EXPECTED.", "DO NOT CLOSE THE WINDOW.", "LOADING."];
    var start = performance.now();
    swapPctTimer = setTimeout(function tick() {
      var pct = Math.min(100, Math.round(((performance.now() - start) / 2300) * 100));
      var el = $(".sw-tty-pct", swapPiece);
      if (el) el.textContent = pct + "%";
      if (pct < 100) swapPctTimer = setTimeout(tick, 90);
    }, 90);
    if (!out) return;
    var li = 0, ci = 0;
    function typeLine() {
      if (li >= lines.length) return;
      var line = lines[li];
      if (ci <= line.length) {
        out.textContent = line.slice(0, ci) + "\u2588";
        ci++;
        swapIv = setTimeout(typeLine, 22);
      } else {
        out.textContent = line;
        li++; ci = 0;
        swapIv = setTimeout(typeLine, 380);
      }
    }
    typeLine();
  }

  function swapClose() {
    if (!swap.classList.contains("open")) return;
    swap.classList.remove("open");
    swap.setAttribute("aria-hidden", "true");
    swapPiece.innerHTML = "";
    clearTimeout(swapTimer);
    if (swapIv) { clearTimeout(swapIv); swapIv = null; }
    if (swapPctTimer) { clearTimeout(swapPctTimer); swapPctTimer = null; }
  }

  /* ---------------- cursor ring ---------------- */

  function initCursor() {
    var ring = $("#curRing");
    if (!ring) return;
    var fine = window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;
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
      var isInter = !!t.closest("a,button,.wcard,[data-go],select,input,label,.tpreview,.r-item,.ctl,.ov-close,.set-row,.chip,.news-nav,.ppick");
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
  maybeToast();

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

  var brandNameEl = $(".brand-name");
  if (brandNameEl && !root.classList.contains("rm")) {
    typeEl(brandNameEl, null);
  }
})();
