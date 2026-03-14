(function () {
  const data = window.familyControlData;

  if (!data) {
    return;
  }

  const page = document.body.dataset.page;
  setActiveNav(page);

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

  function renderDashboard(dashboard) {
    setText("readinessScore", dashboard.readinessScore);
    setText("readinessText", dashboard.readinessText);
    renderMetricCards("heroMetrics", dashboard.heroMetrics);
    renderStatCards("householdStatus", dashboard.householdStatus);
    renderSummaryList("accountsSummary", dashboard.accountsSummary);
    renderSummaryList("insuranceSummary", dashboard.insuranceSummary);
    renderSummaryList("contactsSummary", dashboard.contactsSummary);
    renderSummaryList("documentsSummary", dashboard.documentsSummary);
    renderSummaryList("emergencySummary", dashboard.emergencySummary);
  }

  function renderInnerPage(currentPage, section) {
    if (!section) {
      return;
    }

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

  function renderSummaryList(id, items) {
    const target = document.getElementById(id);

    if (!target) {
      return;
    }

    target.innerHTML = '<div class="summary-list">' + items.map(function (item) {
      return [
        '<div class="summary-list-item">',
        "<strong>" + escapeHtml(item.title) + "</strong>",
        '<p class="muted">' + escapeHtml(item.note) + "</p>",
        "</div>"
      ].join("");
    }).join("") + "</div>";
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

      const tags = item.tags.map(function (tag) {
        return '<span class="tag">' + escapeHtml(tag) + "</span>";
      }).join("");

      return [
        '<article class="record-card">',
        '<div class="record-header">',
        "<div>",
        '<h3 class="record-title">' + escapeHtml(item.title) + "</h3>",
        '<p class="muted">' + escapeHtml(item.subtitle) + "</p>",
        "</div>",
        "</div>",
        '<div class="record-meta">' + tags + "</div>",
        '<div class="record-grid">' + fields + "</div>",
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

  function setText(id, value) {
    const element = document.getElementById(id);

    if (element) {
      element.textContent = value;
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
})();
