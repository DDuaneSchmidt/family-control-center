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
    renderFolderTiles("dashboardCards", resolveFolders(section.folderIds, site), true);
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
      const isLinked = folder.drive_link && folder.drive_link !== "REPLACE_WITH_GOOGLE_DRIVE_LINK";
      const tag = '<span class="folder-category">' + escapeHtml(folder.category) + "</span>";
      const body = [
        '<div class="folder-card-top">',
        tag,
        "</div>",
        '<h3 class="folder-title">' + escapeHtml(folder.title) + "</h3>",
        '<p class="folder-copy">' + escapeHtml(folder.description) + "</p>"
      ].join("");

      if (isLinked) {
        return [
          '<a class="folder-card folder-card-link folder-card-accent-' + categorySlug(folder.category) + (compact ? " folder-card-compact" : "") + '" href="' + escapeAttribute(folder.drive_link) + '" target="_blank" rel="noreferrer">',
          body,
          "</a>"
        ].join("");
      }

      return [
        '<article class="folder-card folder-card-disabled folder-card-accent-' + categorySlug(folder.category) + (compact ? " folder-card-compact" : "") + '">',
        body,
        "</article>"
      ].join("");
    }).join("");
  }

  function pageFolderTarget() {
    return document.getElementById("folderGrid") ? "folderGrid" : "documentsTable";
  }

  function categorySlug(value) {
    return String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
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
