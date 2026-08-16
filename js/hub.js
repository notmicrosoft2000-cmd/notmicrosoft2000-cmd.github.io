(function () {
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  var THEMES = ["webring", "dark", "neon", "paper"];

  var ICONS = {
    tqg: '<path d="M32 10 L58 52 L6 52 Z"/><path d="M32 27 c0-7-13-8-13 1 0 5 6 7 9 10 v5"/><circle cx="32" cy="50" r="2.6"/>',
    tst: '<rect x="14" y="10" width="36" height="44" rx="3"/><rect x="26" y="12" width="12" height="11"/><path d="M20 36 h24"/><path d="M20 44 h12"/>',
    normidian: '<path d="M22 6 v52"/><path d="M22 30 c0-13 8-20 19-20 8 0 13 5 13 12 0 9-7 16-18 16 H22"/>',
    dos: '<rect x="8" y="16" width="48" height="32" rx="2"/><path d="M8 26 h48"/><circle cx="17" cy="21" r="2"/><circle cx="25" cy="21" r="2"/><circle cx="33" cy="21" r="2"/><path d="M18 36 h20"/><path d="M18 42 h12"/><path d="M44 33 l8 7 -8 7"/>',
    neptuneos: '<circle cx="32" cy="30" r="18"/><ellipse cx="32" cy="34" rx="27" ry="9" transform="rotate(-18 32 34)"/><circle cx="52" cy="18" r="2.6"/>',
    dropchat: '<circle cx="23" cy="27" r="10"/><circle cx="42" cy="37" r="10"/><path d="M15 34 l-6 9 10-3"/><path d="M34 45 l3 8 6-8"/>',
    slowfuck: '<path d="M8 46 a24 24 0 1 1 48 0"/><path d="M32 46 L32 24"/><path d="M32 46 L46 41"/><circle cx="32" cy="46" r="3.2"/>',
    bakugo: '<circle cx="32" cy="32" r="21"/><path d="M32 4 v14 M32 46 v14 M4 32 h14 M46 32 h14"/><circle cx="32" cy="32" r="3.4"/>'
  };

  function svgIcon(k, cls) {
    return '<svg class="' + cls + '" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICONS[k] + '</svg>';
  }

  var PROJECTS = {
    tqg: {
      name: "THE QUESTION GAME",
      tag: "It asks. You answer. It waits.",
      kicker: "A text-based horror experience. The questions have always been here.",
      url: "https://notmicrosoft2000-cmd.github.io/TheQuestionGame/",
      repo: "TheQuestionGame",
      theme: "tqg",
      icon: "tqg.svg"
    },
    tst: {
      name: "THE SIMPLER TIMES",
      tag: "A 1993 floppy disk that is very aware it is running on your machine.",
      kicker: "Amber phosphor, old iron, cold start. It boots itself. It remembers.",
      url: "https://notmicrosoft2000-cmd.github.io/TheSimplerTimes/",
      repo: "TheSimplerTimes",
      theme: "tst",
      icon: "tst.svg"
    },
    normidian: {
      name: "NORMIDIAN",
      tag: "The old tongue. Spoken again.",
      kicker: "A dictionary for a language the records say died. The records are not entirely right.",
      url: "https://notmicrosoft2000-cmd.github.io/normidian-lang/",
      repo: "normidian-lang",
      theme: "normidian",
      icon: "normidian.svg"
    },
    dos: {
      name: "NEPTUNEDOS",
      tag: "The operating system. Well. An operating system.",
      kicker: "640K should be enough. Copyright 1987 (allegedly). It beeps when it wants to.",
      url: "https://notmicrosoft2000-cmd.github.io/neptunedos-website/",
      repo: "neptunedos-website",
      theme: "dos",
      icon: "dos.svg"
    },
    neptuneos: {
      name: "NEPTUNEOS",
      tag: "The new operating system. Very new. Very real (fake).",
      kicker: "Fresh out of the repo and ready to boot. Ignore the glow around the orb.",
      url: "https://notmicrosoft2000-cmd.github.io/neptuneos/",
      repo: "neptuneos",
      theme: "neptuneos",
      icon: "neptuneos.svg"
    },
    dropchat: {
      name: "DROPCHAT",
      tag: "A chat room and file drop that lives on your Wi-Fi.",
      kicker: "LAN chat and drag-and-drop file sharing in one python file. 2400 baud of pure trust.",
      url: "https://notmicrosoft2000-cmd.github.io/dropchat/",
      repo: "dropchat",
      theme: "dropchat",
      icon: "dropchat.svg"
    },
    slowfuck: {
      name: "SLOWFUCK PRO",
      tag: "A terminal network operations tool with a lag engine.",
      kicker: "Scan your LAN, label devices, probe ports. Then slow everything down on purpose.",
      url: "https://notmicrosoft2000-cmd.github.io/slowfuck-pro/",
      repo: "slowfuck-pro",
      theme: "slowfuck",
      icon: "slowfuck.svg"
    },
    bakugo: {
      name: "BAKUGO'S LOCATION",
      tag: "It knows where you are. It will not say how.",
      kicker: "A live target readout for a location that should not be public. Coordinates redacted (allegedly).",
      url: "https://notmicrosoft2000-cmd.github.io/bakugos-location/",
      repo: "bakugos-location",
      theme: "bakugo",
      icon: "bakugo.svg"
    }
  };

  var HOME_NEWS = [
    ["08.16.2026", "THE HUB IS REBUILT. Tab around. Each program re-dresses the whole site in its own clothes. Flip MATCH PROJECT off and the site stays how you left it. The webring continues."],
    ["08.16.2026", "NEPTUNEOS has a real pages site now. It is an operating system. It is also fake. Both true."],
    ["08.16.2026", "The Question Game and The Simpler Times still swap into each other when you cross the webring. Nothing else to report. We are checking."]
  ];

  var state = {
    theme: (function () { try { return localStorage.getItem("hub_theme") || "webring"; } catch (e) { return "webring"; } })(),
    match: (function () { try { return localStorage.getItem("hub_match") !== "off"; } catch (e) { return true; } })(),
    view: null
  };

  /* ---------------- theme engine ---------------- */

  var root = document.documentElement;
  var themeSelect = $("#themeSelect");
  var matchInput = $("#matchTheme");
  var metaTheme = $("meta[name=theme-color]");

  function appliedTheme() {
    if (state.match && state.view !== "home" && PROJECTS[state.view]) {
      return PROJECTS[state.view].theme;
    }
    return state.theme;
  }

  function syncControls() {
    var cur = appliedTheme();
    var opt = $("#themeOptionProject");
    if (THEMES.indexOf(cur) === -1) {
      if (!opt) {
        opt = document.createElement("option");
        opt.value = "project";
        opt.id = "themeOptionProject";
        opt.disabled = true;
        opt.textContent = "PROJECT THEME";
        themeSelect.appendChild(opt);
      }
      themeSelect.value = "project";
    } else {
      if (opt) opt.remove();
      themeSelect.value = cur;
    }
    matchInput.checked = state.match;
  }

  function applyTheme() {
    var cur = appliedTheme();
    root.setAttribute("data-theme", cur);
    if (metaTheme) metaTheme.setAttribute("content", cur === "webring" ? "#8a2b2b" : "");
    syncControls();
  }

  themeSelect.addEventListener("change", function () {
    state.theme = themeSelect.value;
    try { localStorage.setItem("hub_theme", state.theme); } catch (e) {}
    applyTheme();
  });

  matchInput.addEventListener("change", function () {
    state.match = matchInput.checked;
    try { localStorage.setItem("hub_match", state.match ? "on" : "off"); } catch (e) {}
    applyTheme();
  });

  /* ---------------- views ---------------- */

  var stage = $("#stage");
  var tabs = $("#tabs");
  var views = {};

  function iconTag(k) {
    return svgIcon(k, "tab-ico");
  }

  function buildTabs() {
    var keys = ["home"].concat(Object.keys(PROJECTS));
    var html = "";
    keys.forEach(function (k) {
      if (k === "home") {
        html += '<button class="tab" role="tab" data-view="home" type="button">HOME</button>';
      } else {
        var p = PROJECTS[k];
        html += '<button class="tab" role="tab" data-view="' + k + '" type="button">' + iconTag(k) + p.name + '</button>';
      }
    });
    tabs.innerHTML = html;
  }

  function buildViews() {
    var html = "";
    html += '<section class="view" data-view="home" role="tabpanel">' +
      '<div class="hero">' +
        '<span class="hero-kicker">THE WEBRING</span>' +
        '<h2 class="hero-title">NEPTUNE<br>PRODUCTIONS</h2>' +
        '<p class="hero-sub">Every corner of this hallway is a different website wearing different clothes. Pick a program below and the whole page becomes it — pick HOME (or flip MATCH PROJECT off) to take your own clothes back.</p>' +
      '</div>' +
      '<h3 class="section-title">THE PROGRAMS</h3>' +
      '<p class="section-tag">each one is a different aesthetic, a different room, a different promise.</p>' +
      '<div class="webring" id="homeGrid"></div>' +
      '<h3 class="section-title">NEWS FROM THE HALLWAY</h3>' +
      '<div class="news">' +
        HOME_NEWS.map(function (n) {
          return '<div class="nitem"><b>' + n[0] + '</b><p>' + n[1] + '</p></div>';
        }).join("") +
      '</div>' +
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
        '<div class="pv-desc">' + p.kicker + '</div>' +
        '<div class="pv-grid" id="facts-' + k + '">' +
          factCell("LANGUAGE", "\u2014") + factCell("LICENSE", "\u2014") + factCell("STARS", "\u2014") +
          factCell("FORKS", "\u2014") + factCell("OPEN ISSUES", "\u2014") + factCell("UPDATED", "\u2014") +
        '</div>' +
        '<div class="pv-release" id="rel-' + k + '">' +
          '<div><span class="rl-title">LATEST RELEASE</span><br><b>\u2026</b></div>' +
          '<a href="https://github.com/notmicrosoft2000-cmd/' + p.repo + '/releases" target="_blank" rel="noopener">RELEASES \u2197</a>' +
        '</div>' +
        '<div class="pv-links">' +
          '<a class="plink" href="' + p.url + '" target="_blank" rel="noopener">WEBSITE \u2197</a>' +
          '<a class="plink" href="https://github.com/notmicrosoft2000-cmd/' + p.repo + '" target="_blank" rel="noopener">REPOSITORY \u2197</a>' +
          '<a class="plink" href="https://github.com/notmicrosoft2000-cmd/' + p.repo + '/issues" target="_blank" rel="noopener">ISSUES \u2197</a>' +
        '</div>' +
      '</section>';
    });

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
      c.addEventListener("click", function () { setView(c.getAttribute("data-go")); });
    });

    $$("[data-launch]", stage).forEach(function (b) {
      b.addEventListener("click", function () { launch(b.getAttribute("data-launch")); });
    });
  }

  function factCell(label, val) {
    return '<div class="pcell"><span>' + label + '</span><b>' + val + '</b></div>';
  }

  function setView(k) {
    if (state.view === k) return;
    state.view = k;
    $$(".tab", tabs).forEach(function (t) { t.classList.toggle("active", t.getAttribute("data-view") === k); });
    Object.keys(views).forEach(function (v) { views[v].classList.toggle("active", v === k); });
    if (k !== "home") loadStats(k);
    applyTheme();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  tabs.addEventListener("click", function (e) {
    var t = e.target.closest(".tab");
    if (t) setView(t.getAttribute("data-view"));
  });

  /* ---------------- github stats ---------------- */

  var cache = {};
  try {
    var raw = localStorage.getItem("hub_ghcache");
    if (raw) { cache = JSON.parse(raw); }
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

  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    if (swap.classList.contains("open")) { swapClose(); return; }
  });

  /* ---------------- boot ---------------- */

  buildTabs();
  buildViews();
  setView("home");
})();
