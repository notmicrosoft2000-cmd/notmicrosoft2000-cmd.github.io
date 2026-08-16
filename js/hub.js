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
    contact: '<path d="M12 20 v30 h40 V20"/><path d="M12 20 L32 8 L52 20"/><circle cx="26" cy="30" r="3.4"/><circle cx="38" cy="30" r="3.4"/><path d="M26 36 h12 v8 H26 Z"/>'
  };

  function svgIcon(k, cls) {
    return '<svg class="' + cls + '" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[k] || ICONS.home) + '</svg>';
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

  var NEWS_NAV = ["TOP", "TECH", "LOCAL", "TRAGEDY", "WEATHER", "BUSINESS", "SPORT"];

  var NEWS = [
    { cat: "TOP", time: "just now", title: "Webring reports no exit, says it 'never had one to begin with'", body: "Analysts who attempted to leave the hallway have repeatedly ended up at another page of the same hallway. The hallway says this is a feature. The hallway has not commented further because the hallway does not talk; it just is, at length." },
    { cat: "TECH", time: "3 min ago", title: "NeptuneOS 2.0 delayed after orb refuses to stop glowing", body: "Sources say the orb has entered a state of continuous glow and will not power down for the release build. Engineers are asking the orb nicely. The orb's response, according to one source, was to glow slightly harder." },
    { cat: "LOCAL", time: "9 min ago", title: "Floppy disk found humming the old songs at 3am", body: "Residents report a 1.44MB diskette in The Simpler Times folder producing faint amber audio long after boot. It denies everything. It also remembered your name, which residents describe as 'unsettling and flattering at once'." },
    { cat: "TRAGEDY", time: "12 min ago", title: "640K deemed 'not enough' for the fifth time this week", body: "NeptuneDOS has again been told that its base memory fails to satisfy modern requirements. It has responded by beeping. Analysts believe it is handling the news as well as can be expected of a box with the emotional range of a beep." },
    { cat: "BUSINESS", time: "18 min ago", title: "DropChat reports zero registered accounts, 'excellent vibes'", body: "In a surprise earnings call held inside a single python file, DropChat confirmed it has no accounts because it does not need them. 'You bring your own presence,' the file said. Shares of vibes are up across the LAN." },
    { cat: "WEATHER", time: "24 min ago", title: "Mostly retro. Chance of static. 87.7 FM with breaks of cold start.", body: "A warm front of nostalgia is moving in from the floppy era, followed by scattered noise after midnight. Cold starts will be chilly at first but reliable once they warm up. The static is thematic." },
    { cat: "SPORT", time: "31 min ago", title: "Bakugo's target observed moving at walking pace", body: "Analysts following the target describe its trajectory as 'deliberate but deeply suspicious'. Redacted coordinates showed no change for forty minutes, then a single deliberate step. Cameras remain rolling. The target knows." },
    { cat: "TECH", time: "44 min ago", title: "Normidian word for 'delete' located; no one can say it", body: "Linguists have confirmed the existence of the Normidian term for permanent removal. When asked to pronounce it, the dictionary page turned a slightly darker shade of parchment and the researchers agreed to move on." },
    { cat: "LOCAL", time: "1 hr ago", title: "Carrier pigeon union rejects same-day delivery, demands bread", body: "Talks broke down this morning over working conditions. The pigeon, a veteran of the webring's most urgent messages, said it would only carry correspondence 'at least three business days old'. Bread was offered. The pigeon accepted bread but will still be late." },
    { cat: "TRAGEDY", time: "2 hrs ago", title: "Network scan scheduled for the weekend takes the whole weekend", body: "SlowFuck Pro's flagship scan, estimated at one weekend, used the entire weekend and requested a second one. The tool has apologised in a series of extremely slow packets, each more sincere than the last." }
  ];

  var CONTACTS = [
    { label: "EMAIL", value: "productions@neptune.test", note: "checked hourly, answered rarely, read always.", href: "mailto:productions@neptune.test" },
    { label: "GITHUB", value: "notmicrosoft2000-cmd", note: "the whole source, the whole weirdness.", href: "https://github.com/notmicrosoft2000-cmd" },
    { label: "DISCORD", value: "the hallway", note: "the invite is posted somewhere in the hallway. the hallway forgets where." },
    { label: "RADIO", value: "87.7 FM", note: "the webring's frequency, allegedly. the static between songs is thematic." },
    { label: "CARRIER PIGEON", value: "the usual roof", note: "returns within 3\u20137 business days. requires bread." },
    { label: "SEANCE", value: "after dark, thursdays", note: "responds faster than support. do not ask how." }
  ];

  var HOME_NEWS = [
    ["LIVE", "the broadcast is live — read NEPTUNE NEWS, the webring's premier (only) newsroom. every story generated by TalkGPT. accuracy: alleged."],
    ["08.16.2026", "the hub grew a menu and a left-edge switcher. hover the left edge (or tap the dots) to hop between programs like a very quick hallway."],
    ["08.16.2026", "settings live under the NEPTUNE PRODUCTIONS wordmark: theme previews, sound, reduced motion, the works. the logo goes home."],
    ["08.16.2026", "neptuneos has a real pages site now. it is an operating system. it is also fake. both of these are true and the orb glows because of it."],
    ["08.16.2026", "the question game and the simpler times still swap into each other across the webring. nothing else to report. we are checking."],
    ["08.16.2026", "contact the productions by email, github, radio, or pigeon. the pigeon requires bread and will still be late."]
  ];

  var state = {
    theme: (function () { try { return localStorage.getItem("hub_theme") || "webring"; } catch (e) { return "webring"; } })(),
    match: (function () { try { return localStorage.getItem("hub_match") !== "off"; } catch (e) { return true; } })(),
    view: null
  };

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

  /* ---------------- views ---------------- */

  var stage = $("#stage");
  var views = {};

  function buildViews() {
    var html = "";

    html += '<section class="view" data-view="home" role="tabpanel">' +
      '<div class="hero">' +
        '<span class="hero-kicker">THE WEBRING</span>' +
        '<h2 class="hero-title">NEPTUNE<br>PRODUCTIONS</h2>' +
        '<p class="hero-sub">Every corner of this hallway is a different website wearing different clothes. Hit MENU to move around, hover the left edge (or tap the dots) to hop between programs, and click the NEPTUNE PRODUCTIONS wordmark to open settings. Or just pick a program below and let the whole site become it.</p>' +
      '</div>' +
      '<h3 class="section-title">THE PROGRAMS</h3>' +
      '<p class="section-tag">each one is a different aesthetic, a different room, a different promise.</p>' +
      '<div class="webring" id="homeGrid"></div>' +
      '<h3 class="section-title">NEWS FROM THE HALLWAY</h3>' +
      '<p class="section-tag">short dispatches, plus a full broadcast in the newsroom.</p>' +
      '<div class="news">' +
        HOME_NEWS.map(function (n) {
          return '<div class="nitem"><b>' + n[0] + '</b><p>' + n[1] + '</p></div>';
        }).join("") +
      '</div>' +
      '<button class="pv-launch news-go" id="newsGo" type="button" style="margin-top:18px">OPEN THE NEWSROOM \u25b8</button>' +
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

    html += buildNewsView();
    html += buildContactView();

    stage.innerHTML = html;

    $$(".view", stage).forEach(function (v) { views[v.getAttribute("data-view")] = v; });

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
        setView(k);
        SFX.select(k);
      });
    });

    $$("[data-launch]", stage).forEach(function (b) {
      b.addEventListener("click", function () { launch(b.getAttribute("data-launch")); });
    });

    $("#newsGo").addEventListener("click", function () { SFX.click(); setView("news"); });
  }

  function buildNewsView() {
    var tickerText = NEWS.map(function (n) { return n.title; }).join("  \u2022  ") + "  \u2022  the hallway continues to hallway  \u2022  ";
    var html = '<section class="view" data-view="news" role="tabpanel">' +
      '<div class="news-masthead">' +
        '<span class="news-logo">NEPTUNE <b>NEWS</b></span>' +
        '<span class="news-tag">THE HALLWAY\u2019S BROADCAST. NOTHING IS CONFIRMED. ALL STORIES GENERATED BY TALKGPT.</span>' +
      '</div>' +
      '<div class="news-nav">' + NEWS_NAV.map(function (c, i) {
        return '<span class="' + (i === 0 ? "on" : "") + '">' + c + '</span>';
      }).join("") + '</div>' +
      '<div class="ticker">' +
        '<span class="tick-live"><i class="live-dot"></i>LIVE</span>' +
        '<div class="tick-track"><span class="tt">' + tickerText + '</span></div>' +
      '</div>' +
      '<div class="breaking">BREAKING \u2014 the webring has a menu now. see the memo at the top of the hallway. more at eleven.</div>' +
      '<div class="news-feature">' +
        '<div class="nf-body">' +
          '<span class="ncat">' + NEWS[0].cat + '</span>' +
          '<h3>' + NEWS[0].title + '</h3>' +
          '<p>' + NEWS[0].body + '</p>' +
          '<span class="nmeta">by <b>TalkGPT</b> \u2022 ' + NEWS[0].time + '</span>' +
        '</div>' +
      '</div>' +
      '<div class="news-grid">' + NEWS.slice(1).map(function (n) {
        return '<article class="ncard"><span class="ncat">' + n.cat + '</span>' +
          '<h3>' + n.title + '</h3>' +
          '<p>' + n.body + '</p>' +
          '<span class="nmeta">by <b>TalkGPT</b> \u2022 ' + n.time + '</span></article>';
      }).join("") + '</div>' +
      '<p class="news-note">all stories generated by an AI that has never seen the hallway and is very sure about it. accuracy: alleged. do not act on any of this. especially the weather.</p>' +
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
      '<p class="news-note">responses take 3\u20137 business days, or roughly one pigeon. for urgent matters, the seance is faster and slightly less reliable.</p>' +
    '</section>';
    return html;
  }

  function factCell(label, val) {
    return '<div class="pcell"><span>' + label + '</span><b>' + val + '</b></div>';
  }

  function setView(k) {
    if (state.view === k) return;
    state.view = k;
    Object.keys(views).forEach(function (v) { views[v].classList.toggle("active", v === k); });
    homeBtn.classList.toggle("active", k === "home");
    updateRail();
    if (PROJECTS[k]) loadStats(k);
    applyTheme();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ---------------- menu ---------------- */

  var menuOverlay = $("#menuOverlay");
  var menuList = $("#menuList");

  function viewLabel(k) {
    if (k === "home") return "HOME";
    if (k === "news") return "NEPTUNE NEWS";
    if (k === "contact") return "CONTACT";
    return PROJECTS[k] ? PROJECTS[k].name : k;
  }

  function buildMenu() {
    var html = '<li class="menu-now">NOW: <b>' + viewLabel(state.view) + '</b></li>' +
      '<li><button class="m-item" type="button" data-view="home">' + svgIcon("home", "") +
        '<span><b>HOME</b><small>the webring, the news, the hallway</small></span></button></li>' +
      '<li><button class="m-item" type="button" data-view="news">' + svgIcon("news", "") +
        '<span><b>NEPTUNE NEWS</b><small>the broadcast. accuracy alleged.</small></span></button></li>' +
      '<li><button class="m-item" type="button" data-view="contact">' + svgIcon("contact", "") +
        '<span><b>CONTACT</b><small>email, radio, pigeon, seance</small></span></button></li>' +
      '<li class="m-sep"></li>';
    Object.keys(PROJECTS).forEach(function (k) {
      var p = PROJECTS[k];
      html += '<li><button class="m-item" type="button" data-view="' + k + '">' + svgIcon(k, "") +
        '<span><b>' + p.name + '</b><small>' + p.tag + '</small></span></button></li>';
    });
    html += '<li class="m-sep"></li>' +
      '<li><button class="m-item" type="button" data-action="settings">' + svgIcon("gear", "") +
        '<span><b>SETTINGS</b><small>themes, previews, sound, motion</small></span></button></li>' +
      '<li><button class="m-item" type="button" data-ext="https://github.com/notmicrosoft2000-cmd">' + svgIcon("contact", "") +
        '<span><b>GITHUB \u2197</b><small>all the source, all the weirdness</small></span></button></li>';
    menuList.innerHTML = html;

    $$(".m-item", menuList).forEach(function (it) {
      var v = it.getAttribute("data-view");
      it.classList.toggle("active", v === state.view);
    });
  }

  function openMenu() {
    buildMenu();
    menuOverlay.classList.add("open");
    menuOverlay.setAttribute("aria-hidden", "false");
    SFX.open();
  }

  function closeMenu() {
    menuOverlay.classList.remove("open");
    menuOverlay.setAttribute("aria-hidden", "true");
    SFX.close();
  }

  $("#menuBtn").addEventListener("click", function () {
    if (menuOverlay.classList.contains("open")) { closeMenu(); } else { openMenu(); }
    SFX.click();
  });
  $("#menuClose").addEventListener("click", function () { closeMenu(); SFX.click(); });

  menuList.addEventListener("click", function (e) {
    var it = e.target.closest(".m-item");
    if (!it) return;
    var ext = it.getAttribute("data-ext");
    if (ext) {
      closeMenu();
      SFX.click();
      window.open(ext, "_blank", "noopener");
      return;
    }
    if (it.getAttribute("data-action") === "settings") {
      closeMenu();
      openSettings();
      return;
    }
    var k = it.getAttribute("data-view");
    if (!k) return;
    closeMenu();
    setView(k);
    if (k === "home") SFX.click(); else SFX.select(k);
  });

  menuOverlay.addEventListener("click", function (e) {
    if (e.target === menuOverlay) closeMenu();
  });

  /* ---------------- rail ---------------- */

  var rail = $("#rail");
  var railList = $("#railList");

  function buildRail() {
    var html = '<button class="r-item" type="button" data-view="home">' + svgIcon("home", "") + '<b>HOME</b></button>' +
      '<button class="r-item" type="button" data-view="news">' + svgIcon("news", "") + '<b>NEWS</b></button>' +
      '<button class="r-item" type="button" data-view="contact">' + svgIcon("contact", "") + '<b>CONTACT</b></button>' +
      '<span class="r-sep"></span>';
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
  }

  function closeRail() {
    rail.classList.remove("open");
  }

  buildRail();
  updateRail();

  railList.addEventListener("click", function (e) {
    var it = e.target.closest(".r-item");
    if (!it) return;
    var k = it.getAttribute("data-view");
    closeRail();
    setView(k);
    if (k === "home") SFX.click(); else SFX.select(k);
  });

  $("#railTab").addEventListener("click", function () {
    rail.classList.toggle("open");
    SFX.click();
  });

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
    var checked = kind === "match" ? state.match : kind === "sound" ? SFX.isEnabled() : root.classList.contains("rm");
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
    $("#setRm").addEventListener("change", function (e) {
      root.classList.toggle("rm", e.target.checked);
      try { localStorage.setItem("hub_rm", e.target.checked ? "on" : "off"); } catch (err) {}
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

  var brandText = $("#brandText");
  var brandMark = $("#brandMark");
  brandText.addEventListener("click", function () { SFX.click(); openSettings(); });
  brandMark.addEventListener("click", function (e) { e.stopPropagation(); SFX.click(); setView("home"); });
  $("#settingsClose").addEventListener("click", function () { closeSettings(); SFX.click(); });

  var homeBtn = $("#homeBtn");
  homeBtn.addEventListener("click", function () { SFX.click(); setView("home"); });

  settingsOverlay.addEventListener("click", function (e) {
    if (e.target === settingsOverlay) closeSettings();
  });

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
      tqg: '<canvas class="sw-cv"></canvas><div class="sw-crt"></div><span class="sw-pct">0%</span><span class="sw-line">IT KNOWS YOU CLICKED</span>',
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
    var start = performance.now();
    swapPctTimer = setTimeout(function tick() {
      var pct = Math.min(100, Math.round(((performance.now() - start) / 2300) * 100));
      var el = $(".sw-pct", swapPiece);
      if (el) el.textContent = pct + "%";
      if (pct < 100) swapPctTimer = setTimeout(tick, 90);
    }, 90);
  }

  function swapClose() {
    if (!swap.classList.contains("open")) return;
    swap.classList.remove("open");
    swap.setAttribute("aria-hidden", "true");
    swapPiece.innerHTML = "";
    clearTimeout(swapTimer);
    if (swapIv) { clearInterval(swapIv); swapIv = null; }
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
      var isInter = !!t.closest("a,button,.wcard,[data-go],select,input,label,.tpreview,.m-item,.r-item,.ctl,.ov-close,.set-row,.chip");
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
    if (menuOverlay.classList.contains("open")) { closeMenu(); return; }
    if (settingsOverlay.classList.contains("open")) { closeSettings(); }
  });

  buildViews();
  setView("home");
  initCursor();
  applyTheme();
})();
