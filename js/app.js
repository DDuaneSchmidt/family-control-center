(function () {
  const data = window.familyControlData;

  if (!data) {
    return;
  }

  const page = document.body.dataset.page;
  renderSiteChrome(data.site, page);
  setActiveNav(page);
  initNavToggle();

  if (page === "dashboard") {
    renderDashboard(data.dashboard);
    return;
  }

  renderInnerPage(page, data[page]);

  function setActiveNav(currentPage) {
    document.querySelectorAll("[data-nav]").forEach(function (link) {
      if (link.dataset.nav === currentPage) {
        link.classList.add("is-active");
      }
    });
  }

  function renderSiteChrome(site, currentPage) {
    if (!site) {
      return;
    }

    setText("brandTitle", site.brandTitle);
    setText("brandSubtitle", site.brandSubtitle);

    const nav = document.getElementById("primary-nav");

    if (!nav || !site.navigation) {
      return;
    }

    nav.innerHTML = site.navigation.map(function (item) {
      const active = item.id === currentPage ? " is-active" : "";

      return '<a href="' + escapeAttribute(item.href) + '" data-nav="' + escapeAttribute(item.id) + '" class="' + active.trim() + '">' + escapeHtml(item.label) + "</a>";
    }).join("");
  }

  function initNavToggle() {
    const button = document.querySelector(".nav-toggle");
    const nav = document.getElementById("primary-nav");

    if (!button || !nav) {
      return;
    }

    button.addEventListener("click", function () {
      const isOpen = document.body.classList.toggle("nav-open");
      button.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        document.body.classList.remove("nav-open");
        button.setAttribute("aria-expanded", "false");
      });
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 1100) {
        document.body.classList.remove("nav-open");
        button.setAttribute("aria-expanded", "false");
      }
    });
  }

  function renderDashboard(dashboard) {
    applyPageMeta(dashboard.pageMeta);
    renderChrome(dashboard.chrome);
    setText("readinessScore", dashboard.readinessScore);
    setText("readinessText", dashboard.readinessText);
    renderButtons("heroActions", dashboard.heroActions);
    renderMetricCards("heroMetrics", dashboard.heroMetrics);
    renderStatCards("householdStatus", dashboard.householdStatus);
    renderDashboardCards("dashboardCards", dashboard.sections);
  }

  function renderInnerPage(currentPage, section) {
    if (!section) {
      return;
    }

    applyPageMeta(section.pageMeta);
    renderChrome(section.chrome);
    setText("pageAsideTitle", section.aside.title);
    setText("pageAsideText", section.aside.text);

    if (section.stats) {
      renderStatCards(currentPage + "Stats", section.stats);
    }

    if (section.records) {
      renderRecordCards(currentPage + "Table", section.records);
    }

    if (currentPage === "emergency") {
      renderActionCards("emergencyActions", section.actions);
      renderActionCards("emergencyPreparedness", section.preparedness);
    }
  }

  function renderMetricCards(id, items) {
    const target = document.getElementById(id);

    if (!target) {
      return;
    }

    target.innerHTML = items.map(function (item) {
      return [
        '<article class="metric-card">',
        '<p class="eyebrow">' + escapeHtml(item.label) + "</p>",
        '<strong class="metric-value">' + escapeHtml(item.value) + "</strong>",
        '<p class="muted">' + escapeHtml(item.note) + "</p>",
        "</article>"
      ].join("");
    }).join("");
  }

  function renderStatCards(id, items) {
    const target = document.getElementById(id);

    if (!target) {
      return;
    }

    target.innerHTML = items.map(function (item) {
      return [
        '<article class="stat-card">',
        '<p class="eyebrow">' + escapeHtml(item.label) + "</p>",
        '<strong class="stat-value">' + escapeHtml(item.value) + "</strong>",
        '<p class="muted">' + escapeHtml(item.note) + "</p>",
        "</article>"
      ].join("");
    }).join("");
  }

  function renderDashboardCards(id, items) {
    const target = document.getElementById(id);

    if (!target) {
      return;
    }

    target.innerHTML = items.map(function (item) {
      const facts = item.facts.map(function (fact) {
        return '<li>' + escapeHtml(fact) + "</li>";
      }).join("");

      const actions = item.actions ? renderButtonMarkup(item.actions) : "";

      return [
        '<article class="panel summary-card structured-card">',
        '<div class="card-header">',
        "<div>",
        '<p class="eyebrow">' + escapeHtml(item.eyebrow) + "</p>",
        '<h3 class="card-title">' + escapeHtml(item.title) + "</h3>",
        "</div>",
        "</div>",
        '<p class="card-copy">' + escapeHtml(item.description) + "</p>",
        '<ul class="bullet-list">' + facts + "</ul>",
        '<div class="card-actions">' + actions + "</div>",
        "</article>"
      ].join("");
    }).join("");
  }

  function renderRecordCards(id, items) {
    const target = document.getElementById(id);

    if (!target) {
      return;
    }

    target.innerHTML = items.map(function (item) {
      const fields = Object.keys(item.fields).map(function (key) {
        return [
          "<div>",
          "<strong>" + escapeHtml(key) + "</strong>",
          "<span>" + escapeHtml(item.fields[key]) + "</span>",
          "</div>"
        ].join("");
      }).join("");

      const tags = item.tags.filter(function (tag) {
        return tag !== item.category;
      }).map(function (tag) {
        return '<span class="tag">' + escapeHtml(tag) + "</span>";
      }).join("");

      const descriptor = item.description || item.subtitle || "";
      const categoryTag = item.category ? '<span class="tag">' + escapeHtml(item.category) + "</span>" : "";
      const driveAction = item.drive_link ? renderButtonMarkup([
        { label: "Open Drive", href: item.drive_link, variant: "secondary", external: true }
      ]) : "";
      const lastReviewed = item.last_reviewed ? '<span class="tag">Reviewed ' + escapeHtml(item.last_reviewed) + "</span>" : "";

      return [
        '<article class="record-card">',
        '<div class="record-header">',
        "<div>",
        '<h3 class="record-title">' + escapeHtml(item.title) + "</h3>",
        '<p class="muted">' + escapeHtml(descriptor) + "</p>",
        "</div>",
        "</div>",
        '<div class="record-meta">' + categoryTag + tags + lastReviewed + "</div>",
        '<div class="record-grid">' + fields + "</div>",
        driveAction ? '<div class="card-actions">' + driveAction + "</div>" : "",
        "</article>"
      ].join("");
    }).join("");
  }

  function renderActionCards(id, items) {
    const target = document.getElementById(id);

    if (!target) {
      return;
    }

    target.innerHTML = '<div class="action-list">' + items.map(function (item) {
      return [
        '<article class="action-card">',
        '<strong class="action-title">' + escapeHtml(item.title) + "</strong>",
        '<p class="muted">' + escapeHtml(item.note) + "</p>",
        "</article>"
      ].join("");
    }).join("") + "</div>";
  }

  function renderButtons(id, items) {
    const target = document.getElementById(id);

    if (!target || !items) {
      return;
    }

    target.innerHTML = renderButtonMarkup(items);
  }

  function renderButtonMarkup(items) {
    return items.map(function (item) {
      const externalAttrs = item.external ? ' target="_blank" rel="noreferrer"' : "";

      return [
        '<a class="button button-' + escapeHtml(item.variant || "secondary") + '" href="' + escapeAttribute(item.href) + '"' + externalAttrs + ">",
        escapeHtml(item.label),
        "</a>"
      ].join("");
    }).join("");
  }

  function setText(id, value) {
    const element = document.getElementById(id);

    if (element) {
      element.textContent = value;
    }
  }

  function renderChrome(chrome) {
    if (!chrome) {
      return;
    }

    Object.keys(chrome).forEach(function (key) {
      setText(key, chrome[key]);
    });
  }

  function applyPageMeta(pageMeta) {
    if (!pageMeta) {
      return;
    }

    if (pageMeta.title) {
      document.title = pageMeta.title;
    }

    if (pageMeta.description) {
      const description = document.querySelector('meta[name="description"]');

      if (description) {
        description.setAttribute("content", pageMeta.description);
      }
    }
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function escapeAttribute(value) {
    return escapeHtml(value);
  }
})();
