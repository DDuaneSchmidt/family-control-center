(function () {
  const data = window.familyControlData;

  if (!data) {
    return;
  }

  const page = document.body.dataset.page;
  renderSiteChrome(data.site, page);
  initNavToggle();

  if (page === "dashboard") {
    renderDashboard(data.dashboard, data.site);
    return;
  }

  renderFolderPage(data[page], data.site);

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

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 1100) {
        document.body.classList.remove("nav-open");
        button.setAttribute("aria-expanded", "false");
      }
    });
  }

  function renderDashboard(section, site) {
    applyPageMeta(section.pageMeta);
    renderChrome(section.chrome);
    setText("readinessScore", section.readinessScore);
    setText("readinessText", section.readinessText);
    renderButtons("heroActions", section.heroActions);
    renderFolderTiles("dashboardCards", resolveFolders(section.folderIds, site), true);
    hideIfEmpty("heroMetrics", true);
    hideParentPanel("householdStatus", true);
  }

  function renderFolderPage(section, site) {
    if (!section) {
      return;
    }

    applyPageMeta(section.pageMeta);
    renderChrome(section.chrome);
    setText("pageAsideTitle", section.aside.title);
    setText("pageAsideText", section.aside.text);
    renderFolderTiles(pageFolderTarget(), resolveFolders(section.folderIds, site), false);
  }

  function resolveFolders(folderIds, site) {
    if (!folderIds || !site || !site.folders) {
      return [];
    }

    return folderIds.map(function (folderId) {
      return site.folders.find(function (folder) {
        return folder.id === folderId;
      });
    }).filter(Boolean);
  }

  function renderFolderTiles(id, folders, compact) {
    const target = document.getElementById(id);

    if (!target) {
      return;
    }

    target.innerHTML = folders.map(function (folder) {
      return [
        '<article class="folder-card' + (compact ? " folder-card-compact" : "") + '">',
        '<div class="folder-card-top">',
        '<span class="tag">' + escapeHtml(folder.category) + "</span>",
        folder.last_reviewed ? '<span class="tag">Reviewed ' + escapeHtml(folder.last_reviewed) + "</span>" : "",
        "</div>",
        '<h3 class="folder-title">' + escapeHtml(folder.title) + "</h3>",
        '<p class="folder-copy">' + escapeHtml(folder.description) + "</p>",
        '<div class="card-actions">',
        renderButtonMarkup([
          {
            label: folder.drive_link === "REPLACE_WITH_GOOGLE_DRIVE_LINK" ? "Add Drive link" : "Open folder",
            href: folder.drive_link === "REPLACE_WITH_GOOGLE_DRIVE_LINK" ? "documents.html" : folder.drive_link,
            variant: folder.drive_link === "REPLACE_WITH_GOOGLE_DRIVE_LINK" ? "ghost" : "primary",
            external: folder.drive_link !== "REPLACE_WITH_GOOGLE_DRIVE_LINK"
          }
        ]),
        "</div>",
        "</article>"
      ].join("");
    }).join("");
  }

  function pageFolderTarget() {
    return document.getElementById("folderGrid") ? "folderGrid" : "documentsTable";
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

  function hideParentPanel(id, shouldHide) {
    const element = document.getElementById(id);

    if (!element) {
      return;
    }

    const panel = element.closest(".panel");

    if (panel) {
      panel.hidden = shouldHide;
    }
  }

  function hideIfEmpty(id, shouldHide) {
    const element = document.getElementById(id);

    if (element) {
      element.hidden = shouldHide;
    }
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
