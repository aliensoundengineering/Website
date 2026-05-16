const routes = {
    home: {
        title: "00 / home",
        subtitle: "entry frequency",
        template: "page-home"
    },
    technology: {
        title: "01 / technology",
        subtitle: "systems, signal, engineering",
        template: "page-technology"
    },
    "technology/synth-01": {
        title: "01.a / synth.01",
        subtitle: "instrument anatomy",
        template: "page-synth"
    },
    "technology/progsynth": {
        title: "01.b / progsynth",
        subtitle: "instrument as language",
        template: "page-progsynth"
    },
    music: {
        title: "02 / music",
        subtitle: "release branch",
        template: "page-music"
    },
    "music/album-01": {
        title: "02.a / album.01",
        subtitle: "release object",
        template: "page-album"
    }
};

const routeAliases = {
    synth: "technology/synth-01",
    "synth.01": "technology/synth-01",
    progsynth: "technology/progsynth",
    "prog.synth": "technology/progsynth",
    album: "music/album-01",
    "album.01": "music/album-01"
};

const tickerPhrases = [
    "Last coordinates:  Σ-88.1 / β-07 / ψ-441",
    "Target coordinates:  Π-11 / α-95 / ξ-470",
    "Inside temperature: 133 °µW",
    "Outside temperature: -4129 °µW",
    "Air flow: NORMAL",
    "Signal flow: NORMAL",
    "Aspatial matrix connection: HIGH",
    "Speed: 2489 Mkt/h",
];

const pageContent = document.getElementById("pageContent");
const pageMeta = document.getElementById("pageMeta");
const tickerTrack = document.getElementById("tickerTrack");
const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");

const heroStrip = document.querySelector(".hero-strip");

function buildTicker() {
    const loop = [...tickerPhrases, ...tickerPhrases]
        .map((phrase) => `<span>${phrase}</span>`)
        .join("");
    tickerTrack.innerHTML = loop;
}

function normalizeRoute(route) {
    if (!route) return "home";

    const cleaned = route
        .replace(/^#/, "")
        .replace(/^\/+/, "")
        .replace(/\/+$/, "")
        .toLowerCase();

    if (!cleaned) return "home";
    if (routes[cleaned]) return cleaned;
    if (routeAliases[cleaned]) return routeAliases[cleaned];

    return "home";
}

function setMeta(route) {
    const current = routes[route];

    pageMeta.innerHTML = `
        <span class="meta-chip"><strong>${current.title}</strong></span>
    `;
}

function setActiveNavigation(route) {
    const parentRoute = route.includes("/") ? route.split("/")[0] : route;

    document.querySelectorAll("[data-route]").forEach((link) => {
        const linkRoute = link.dataset.route;
        const isExact = linkRoute === route;
        const isParent = !linkRoute.includes("/") && linkRoute === parentRoute;
        link.classList.toggle("is-active", isExact || isParent);
    });

    document.querySelectorAll("[data-nav-group]").forEach((group) => {
        group.classList.toggle("is-open", group.dataset.navGroup === parentRoute && route.includes("/"));
    });
}

function renderRoute(route) {
    const current = routes[route] || routes.home;
    const template = document.getElementById(current.template);

    pageContent.classList.add("is-entering");
    heroStrip.classList.toggle("is-hidden", route !== "home");
    setMeta(route);
    setActiveNavigation(route);

    window.setTimeout(() => {
        pageContent.innerHTML = template.innerHTML;
        pageContent.classList.remove("is-entering");
    }, 110);
}

function navigateTo(route) {
    const target = normalizeRoute(route);
    const hash = `#${target}`;

    if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
    }

    if (window.location.hash !== hash) {
        window.location.hash = hash;
        return;
    }

    renderRoute(target);
}

function handleHashChange() {
    const route = normalizeRoute(window.location.hash);
    renderRoute(route);
}

function openNav() {
    siteNav.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("nav-locked");
}

function closeNav() {
    siteNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-locked");
}

function toggleNav() {
    if (siteNav.classList.contains("is-open")) {
        closeNav();
    } else {
        openNav();
    }
}

document.addEventListener("click", (event) => {
    const routeLink = event.target.closest(".site-nav a");
    if (routeLink) {
        window.requestAnimationFrame(() => {
            if (document.activeElement instanceof HTMLElement) {
                document.activeElement.blur();
            }
        });
        closeNav();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && siteNav.classList.contains("is-open")) {
        closeNav();
        navToggle.focus();
    }
});

navToggle.addEventListener("click", toggleNav);

window.addEventListener("hashchange", handleHashChange);

document.addEventListener("DOMContentLoaded", () => {
    buildTicker();
    handleHashChange();
});
