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

  if (page === "section-detail") {
    renderSectionDetail(data.site);
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

    const activePage = document.body.dataset.navActive || currentPage;

    nav.innerHTML = site.navigation.map(function (item) {
      const active = item.id === activePage ? " is-active" : "";

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

  function renderSectionDetail(site) {
    if (!site || !site.folders) {
      return;
    }

    const sectionId = document.body.dataset.sectionId;
    const folder = site.folders.find(function (item) {
      return item.id === sectionId;
    });

    if (!folder) {
      return;
    }

    applyPageMeta({
      title: folder.title + " | Family Control Center",
      description: folder.description
    });
    setText("sidebarEyebrow", folder.category + " section");
    setText("pageAsideTitle", folder.last_reviewed === "REPLACE_WITH_LAST_REVIEWED" ? "Review date pending" : "Reviewed " + folder.last_reviewed);
    setText("pageAsideText", "Read the guidance here before opening the Google Drive folder.");
    setText("pageEyebrow", folder.category);
    setText("pageTitle", folder.title);
    setText("pageCopy", folder.description);
    setText("whatThisIsFor", folder.what_this_is_for);
    setText("whatToDoFirst", folder.what_to_do_first);
    renderNotes("importantNotes", folder.important_notes || []);
    renderDriveAction(folder);
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
      const hasDetailPage = Boolean(folder.detail_page);
      const tag = '<span class="folder-category">' + escapeHtml(folder.category) + "</span>";
      const body = [
        '<div class="folder-card-top">',
        tag,
        "</div>",
        '<h3 class="folder-title">' + escapeHtml(folder.title) + "</h3>",
        '<p class="folder-copy">' + escapeHtml(folder.description) + "</p>"
      ].join("");

      if (hasDetailPage) {
        return [
          '<a class="folder-card folder-card-link folder-card-accent-' + categorySlug(folder.category) + (compact ? " folder-card-compact" : "") + '" href="' + escapeAttribute(folder.detail_page) + '">',
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

  function renderNotes(id, items) {
    const target = document.getElementById(id);

    if (!target) {
      return;
    }

    target.innerHTML = items.map(function (item) {
      return "<li>" + escapeHtml(item) + "</li>";
    }).join("");
  }

  function renderDriveAction(folder) {
    const target = document.getElementById("driveFolderLink");

    if (!target) {
      return;
    }

    if (folder.drive_link && folder.drive_link !== "REPLACE_WITH_GOOGLE_DRIVE_LINK") {
      target.href = folder.drive_link;
      target.hidden = false;
      return;
    }

    target.hidden = true;
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
