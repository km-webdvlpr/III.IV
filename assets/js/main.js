(function () {
  var root = document.documentElement;
  var body = document.body;
  var themeKey = 'km-iii-iv-theme';

  var motionQuery =
    typeof window.matchMedia === 'function'
      ? window.matchMedia('(prefers-reduced-motion: reduce)')
      : null;

  function prefersReducedMotion() {
    return !!(motionQuery && motionQuery.matches);
  }

  function forEachNode(nodes, callback) {
    Array.prototype.forEach.call(nodes || [], callback);
  }

  function runSafely(label, fn) {
    try {
      fn();
    } catch (error) {
      if (window.console && typeof window.console.warn === 'function') {
        window.console.warn(label + ' failed', error);
      }
    }
  }

  function readStorage(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function writeStorage(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (error) {
      // Ignore storage failures so they do not block page rendering.
    }
  }

  function getAllowedFilters() {
    return ['all', 'commercial', 'consumer', 'product', 'operations', 'culture'];
  }

  function normalizeFilter(value) {
    var filter = (value || '').toString().toLowerCase();
    return getAllowedFilters().indexOf(filter) >= 0 ? filter : 'all';
  }

  function buildFilterHref(baseHref, filter) {
    if (!baseHref) return '#';

    try {
      var url = new window.URL(baseHref, window.location.origin);
      if (normalizeFilter(filter) === 'all') {
        url.searchParams.delete('filter');
      } else {
        url.searchParams.set('filter', normalizeFilter(filter));
      }
      return url.pathname + url.search + url.hash;
    } catch (error) {
      return baseHref;
    }
  }

  function updateProjectLinks(filter) {
    forEachNode(document.querySelectorAll('[data-project-link]'), function (link) {
      var baseHref = link.getAttribute('data-base-href') || link.getAttribute('href');
      if (!baseHref) return;
      link.setAttribute('href', buildFilterHref(baseHref, filter));
    });
  }

  function updateIndexLinks(filter) {
    forEachNode(document.querySelectorAll('[data-project-index-link]'), function (link) {
      var baseHref = link.getAttribute('href');
      if (!baseHref) return;
      link.setAttribute('href', buildFilterHref(baseHref, filter));
    });
  }

  function applyTheme(theme) {
    body.classList.toggle('light', theme === 'light');
    forEachNode(document.querySelectorAll('[data-mode-toggle]'), function (button) {
      button.textContent = theme === 'light' ? '[ THEME: LIGHT ]' : '[ THEME: GREEN ]';
    });
  }

  function syncTheme() {
    var saved = readStorage(themeKey);
    if (saved === 'light' || saved === 'dark') {
      applyTheme(saved);
      return;
    }

    var prefersLight =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-color-scheme: light)').matches;
    applyTheme(prefersLight ? 'light' : 'dark');
  }

  function flashThemeSweep() {
    if (prefersReducedMotion()) return;

    var sweep = document.createElement('div');
    sweep.className = 'theme-sweep';
    sweep.setAttribute('aria-hidden', 'true');
    body.appendChild(sweep);

    function remove() {
      if (sweep.parentNode) sweep.parentNode.removeChild(sweep);
    }

    sweep.addEventListener('animationend', remove);
    window.setTimeout(remove, 700);
  }

  function initModeToggle() {
    syncTheme();

    forEachNode(document.querySelectorAll('[data-mode-toggle]'), function (button) {
      button.addEventListener('click', function () {
        var nextTheme = body.classList.contains('light') ? 'dark' : 'light';
        applyTheme(nextTheme);
        writeStorage(themeKey, nextTheme);
        flashThemeSweep();
      });
    });
  }

  function initClock() {
    function formatTime(now) {
      try {
        return now.toLocaleTimeString('en-ZA', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        });
      } catch (error) {
        return now.toTimeString().slice(0, 8);
      }
    }

    function tick() {
      var time = formatTime(new Date());
      forEachNode(document.querySelectorAll('[data-status-clock]'), function (node) {
        node.textContent = time + ' SAST';
      });
    }

    tick();
    window.setInterval(tick, 1000);
  }

  function initReveal() {
    var nodes = document.querySelectorAll('.reveal');
    if (!nodes.length || !('IntersectionObserver' in window)) {
      forEachNode(nodes, function (node) {
        node.classList.add('visible');
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      forEachNode(entries, function (entry, index) {
        if (entry.isIntersecting) {
          window.setTimeout(function () {
            entry.target.classList.add('visible');
          }, index * 90);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    forEachNode(nodes, function (node) {
      observer.observe(node);
    });
  }

  function initTypewriter() {
    var node = document.querySelector('[data-typewriter]');
    if (!node) return;

    var lines = (node.dataset.typewriter || '')
      .split('||')
      .map(function (line) { return line.trim(); })
      .filter(Boolean);

    if (!lines.length) return;

    if (prefersReducedMotion()) {
      node.textContent = lines[0];
      return;
    }

    var lineIndex = 0;
    var charIndex = 0;
    var deleting = false;

    function step() {
      var line = lines[lineIndex];
      if (!deleting) {
        charIndex += 1;
        node.textContent = line.slice(0, charIndex);
        if (charIndex === line.length) {
          deleting = true;
          window.setTimeout(step, 2800);
          return;
        }
      } else {
        charIndex -= 1;
        node.textContent = line.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          lineIndex = (lineIndex + 1) % lines.length;
        }
      }
      window.setTimeout(step, deleting ? 26 : 48);
    }

    window.setTimeout(step, 1200);
  }

  function initProjectFilters() {
    var filterButtons = document.querySelectorAll('[data-filter]');
    if (!filterButtons.length) return;

    var cards = document.querySelectorAll('[data-filterable]');
    var sections = document.querySelectorAll('[data-filter-section]');
    var visibleCountNode = document.querySelector('[data-project-visible-count]');

    function setFilter(target, options) {
      var normalizedTarget = normalizeFilter(target);
      var visibleCount = 0;
      var visibleCards = [];

      forEachNode(filterButtons, function (button) {
        button.classList.toggle('active', button.dataset.filter === normalizedTarget);
      });

      forEachNode(cards, function (card) {
        var filters = (card.dataset.filters || '').split(/\s+/).filter(Boolean);
        var visible = normalizedTarget === 'all' || filters.indexOf(normalizedTarget) >= 0;
        card.classList.toggle('is-hidden', !visible);
        if (visible) {
          visibleCount += 1;
          visibleCards.push(card);
        }
      });

      if (options && options.animate && !prefersReducedMotion()) {
        forEachNode(visibleCards, function (card, index) {
          card.classList.remove('filter-in');
          void card.offsetWidth;
          card.style.animationDelay = Math.min(index * 45, 400) + 'ms';
          card.classList.add('filter-in');
        });
      }

      forEachNode(sections, function (section) {
        var hasVisible = section.querySelector('[data-filterable]:not(.is-hidden)');
        section.classList.toggle('is-hidden', !hasVisible);
      });

      if (visibleCountNode) {
        visibleCountNode.textContent = String(visibleCount);
      }

      updateProjectLinks(normalizedTarget);

      if (options && options.skipHistory) return;

      try {
        var currentUrl = new window.URL(window.location.href);
        if (normalizedTarget === 'all') {
          currentUrl.searchParams.delete('filter');
        } else {
          currentUrl.searchParams.set('filter', normalizedTarget);
        }
        window.history.replaceState({}, '', currentUrl.pathname + currentUrl.search + currentUrl.hash);
      } catch (error) {
        // Ignore history update failures.
      }
    }

    forEachNode(filterButtons, function (button) {
      button.addEventListener('click', function () {
        setFilter(button.dataset.filter || 'all', { animate: true });
      });
    });

    var initialFilter = 'all';
    try {
      initialFilter = normalizeFilter(new window.URL(window.location.href).searchParams.get('filter'));
    } catch (error) {
      initialFilter = 'all';
    }

    setFilter(initialFilter, { skipHistory: true });
  }

  function initHeroOrb() {
    var canvas = document.querySelector('[data-hero-orb]');
    if (!canvas || typeof canvas.getContext !== 'function') return;

    var ctx = canvas.getContext('2d');
    if (!ctx) return;

    var POINTS = 220;
    var TILT = 0.4;
    var golden = Math.PI * (3 - Math.sqrt(5));
    var points = [];

    for (var i = 0; i < POINTS; i += 1) {
      var y = 1 - (i / (POINTS - 1)) * 2;
      var radius = Math.sqrt(Math.max(0, 1 - y * y));
      var angle = golden * i;
      points.push({
        x: Math.cos(angle) * radius,
        y: y,
        z: Math.sin(angle) * radius,
        node: i % 12 === 0
      });
    }

    var colors = { dim: '#1e5c3e', bright: '#52d68a' };

    function readColors() {
      try {
        var styles = window.getComputedStyle(body);
        var dim = styles.getPropertyValue('--green-dim').trim();
        var bright = styles.getPropertyValue('--green-bright').trim();
        if (dim) colors.dim = dim;
        if (bright) colors.bright = bright;
      } catch (error) {
        // Keep defaults.
      }
    }

    var dpr = 1;

    function resize() {
      var rect = canvas.getBoundingClientRect();
      if (!rect.width) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round((rect.height || rect.width) * dpr);
    }

    var rotation = 0;
    var running = false;
    var inView = true;
    var frameId = null;

    function draw(time) {
      if (!canvas.width) resize();

      var cx = canvas.width / 2;
      var cy = canvas.height / 2;
      var sphereRadius = Math.min(cx, cy) * 0.82;
      var cosT = Math.cos(TILT);
      var sinT = Math.sin(TILT);
      var cosR = Math.cos(rotation);
      var sinR = Math.sin(rotation);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (var i = 0; i < points.length; i += 1) {
        var p = points[i];
        var x = p.x * cosR + p.z * sinR;
        var z = p.z * cosR - p.x * sinR;
        var py3 = p.y * cosT - z * sinT;
        z = p.y * sinT + z * cosT;

        var depth = (z + 1) / 2;
        var scale = 2.2 / (2.2 - z * 0.9);
        var px = cx + x * sphereRadius * scale;
        var py = cy + py3 * sphereRadius * scale;

        var alpha = 0.12 + depth * 0.55;
        var size = (0.9 + depth * 1.3) * dpr;

        if (p.node) {
          var flicker = 0.5 + 0.5 * Math.sin(time * 0.0011 + i);
          alpha = Math.min(1, alpha + 0.25 * flicker);
          size += 0.7 * dpr * flicker;
          ctx.fillStyle = colors.bright;
        } else {
          ctx.fillStyle = colors.dim;
        }

        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
    }

    function loop(time) {
      frameId = null;
      if (!running) return;
      rotation += 0.0024;
      draw(time || 0);
      frameId = window.requestAnimationFrame(loop);
    }

    function start() {
      if (running || prefersReducedMotion()) return;
      running = true;
      if (frameId === null) frameId = window.requestAnimationFrame(loop);
    }

    function stop() {
      running = false;
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
        frameId = null;
      }
    }

    readColors();
    resize();

    if (prefersReducedMotion()) {
      draw(0);
    } else {
      start();
    }

    window.addEventListener('resize', function () {
      resize();
      if (!running) draw(0);
    });

    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        stop();
      } else if (inView) {
        start();
      }
    });

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        forEachNode(entries, function (entry) {
          inView = entry.isIntersecting;
          if (inView && !document.hidden) {
            start();
          } else {
            stop();
          }
        });
      }, { threshold: 0.05 });
      observer.observe(canvas);
    }

    forEachNode(document.querySelectorAll('[data-mode-toggle]'), function (button) {
      button.addEventListener('click', function () {
        readColors();
        if (!running) draw(0);
      });
    });
  }

  function initCountUp() {
    var nodes = document.querySelectorAll('[data-count-up]');
    if (!nodes.length || !('IntersectionObserver' in window)) return;

    function animate(node) {
      var match = (node.textContent || '').trim().match(/^(\d+)(.*)$/);
      if (!match) return;

      var target = parseInt(match[1], 10);
      var suffix = match[2] || '';
      if (prefersReducedMotion() || !target) return;

      var duration = 900;
      var start = null;

      function frame(timestamp) {
        if (start === null) start = timestamp;
        var progress = Math.min((timestamp - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        node.textContent = Math.round(eased * target) + suffix;
        if (progress < 1) window.requestAnimationFrame(frame);
      }

      node.textContent = '0' + suffix;
      window.requestAnimationFrame(frame);
    }

    var observer = new IntersectionObserver(function (entries) {
      forEachNode(entries, function (entry) {
        if (entry.isIntersecting) {
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    forEachNode(nodes, function (node) {
      observer.observe(node);
    });
  }

  function initReadProgress() {
    if (!document.querySelector('.site-main--project')) return;

    var nodes = document.querySelectorAll('[data-status-progress]');
    if (!nodes.length) return;

    var SEGMENTS = 10;
    var ticking = false;

    function render() {
      ticking = false;
      var doc = document.documentElement;
      var max = doc.scrollHeight - window.innerHeight;
      var ratio = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 1;
      var filled = Math.round(ratio * SEGMENTS);
      var bar = '';
      for (var i = 0; i < SEGMENTS; i += 1) {
        bar += i < filled ? '█' : '▒';
      }
      forEachNode(nodes, function (node) {
        node.textContent = 'READ [' + bar + '] ' + Math.round(ratio * 100) + '%';
        node.removeAttribute('hidden');
      });
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(render);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    render();
  }

  function initProjectNavigator() {
    var rootNode = document.querySelector('[data-project-nav]');
    if (!rootNode) return;

    var currentSlug = rootNode.getAttribute('data-current-slug');
    if (!currentSlug) return;

    var items = [];
    forEachNode(rootNode.querySelectorAll('[data-project-nav-item]'), function (node) {
      items.push({
        slug: node.getAttribute('data-slug'),
        title: node.getAttribute('data-title') || '',
        url: node.getAttribute('data-url') || '',
        log: node.getAttribute('data-log') || '',
        filters: (node.getAttribute('data-filters') || '').split(/\s+/).filter(Boolean)
      });
    });

    if (!items.length) return;

    var filter = 'all';
    try {
      filter = normalizeFilter(new window.URL(window.location.href).searchParams.get('filter'));
    } catch (error) {
      filter = 'all';
    }

    var filteredItems = filter === 'all'
      ? items.slice()
      : items.filter(function (item) {
          return item.filters.indexOf(filter) >= 0;
        });

    var currentIndex = filteredItems.findIndex(function (item) {
      return item.slug === currentSlug;
    });

    if (currentIndex < 0) {
      filter = 'all';
      filteredItems = items.slice();
      currentIndex = filteredItems.findIndex(function (item) {
        return item.slug === currentSlug;
      });
    }

    if (currentIndex < 0) return;

    updateIndexLinks(filter);

    var filterLabelNode = rootNode.querySelector('[data-project-nav-label]');
    if (filterLabelNode) {
      filterLabelNode.textContent = filter === 'all'
        ? 'All projects'
        : filter + ' filter';
    }

    function updateNavLink(selector, item, fallbackTitle) {
      var link = rootNode.querySelector(selector);
      if (!link) return;

      var logNode = link.querySelector('[data-project-nav-prev-log], [data-project-nav-next-log]');
      var titleNode = link.querySelector('[data-project-nav-prev-title], [data-project-nav-next-title]');

      if (!item) {
        link.classList.add('is-disabled');
        link.setAttribute('href', buildFilterHref(rootNode.getAttribute('data-projects-url') || '/projects/', filter));
        if (logNode) logNode.textContent = '';
        if (titleNode) titleNode.textContent = fallbackTitle;
        return;
      }

      link.classList.remove('is-disabled');
      link.setAttribute('href', buildFilterHref(item.url, filter));
      if (logNode) logNode.textContent = item.log ? 'LOG-' + item.log : '';
      if (titleNode) titleNode.textContent = item.title;
    }

    updateNavLink('[data-project-nav-prev]', filteredItems[currentIndex - 1], 'Start of filtered set');
    updateNavLink('[data-project-nav-next]', filteredItems[currentIndex + 1], 'End of filtered set');

    var progressRoot = rootNode.querySelector('[data-project-nav-progress]');
    if (!progressRoot) return;

    var progressInner = document.createElement('div');
    progressInner.className = 'project-nav-progress__inner';

    var pips = document.createElement('div');
    pips.className = 'project-nav-pips';

    filteredItems.forEach(function (item, index) {
      var pip = document.createElement('span');
      pip.className = 'project-nav-pip' + (index === currentIndex ? ' is-active' : '');
      pips.appendChild(pip);
    });

    var label = document.createElement('span');
    label.className = 'project-nav-progress__label';
    label.textContent = String(currentIndex + 1).padStart(2, '0') + ' / ' + String(filteredItems.length).padStart(2, '0');

    progressInner.appendChild(pips);
    progressInner.appendChild(label);
    progressRoot.innerHTML = '';
    progressRoot.appendChild(progressInner);
  }

  runSafely('reveal init', initReveal);
  runSafely('theme init', initModeToggle);
  runSafely('clock init', initClock);
  runSafely('typewriter init', initTypewriter);
  runSafely('project filters init', initProjectFilters);
  runSafely('project navigator init', initProjectNavigator);
  runSafely('count-up init', initCountUp);
  runSafely('read progress init', initReadProgress);
  runSafely('hero orb init', initHeroOrb);
})();
