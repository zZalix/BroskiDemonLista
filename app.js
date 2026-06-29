// ==========================================
// CONFIGURAZIONE ATTIVAZIONE LISTA FUTURA
// ==========================================
// Imposta su 'true' per sbloccare la lista Futura nella tendina.
// Imposta su 'false' per tenerla disattivata e semi-trasparente.
const isFuturaActive = false; 

// DIZIONARIO DI TRADUZIONE DINAMICO (ITALIANO / INGLESE)
let currentLang = 'it'; // Sostituire con 'en' se si vuole impostare l'inglese di default

const t = {
    it: {
        searchPlaceholder: "Cerca livello...",
        playerSearchPlaceholder: "Cerca giocatore...",
        mainListTitle: "Main List",
        backToList: "Torna alla lista",
        verifiedBy: "Verificato da",
        id: "ID Livello",
        clickToCopy: "Clicca per copiare",
        copied: "Copiato!",
        password: "Password",
        length: "Durata",
        objects: "Oggetti",
        version: "Versione",
        totalScore: "Punteggio Totale (100%)",
        listPercentScore: "Punteggio Minimo (66%)",
        song: "Canzone",
        gdBrowser: "GD Browser",
        positionHistory: "Cronologia Posizioni",
        placedAt: "Inserito al posto #",
        records: "Record Ricevuti",
        recordsSub: "0 record totali, di cui 0 sono al 100%",
        noRecords: "Nessun record registrato",
        recentUpdates: "Aggiornamenti Recenti",
        tuttiIPaesi: "Tutti i paesi",
        precedente: "Precedente",
        successivo: "Successivo",
        posizione: "Posizione",
        punteggio: "Punteggio",
        recordPiuDifficile: "Record più difficile",
        livelliCompletati: "Livelli Completati",
        livelloCorrente: "Livello Corrente",
        cronologiaLivelli: "Cronologia Livelli",
        nessunLivelloCompletato: "Nessun livello è stato completato ancora.",
        passoCompletato: "Step completato! Obiettivo alzato a ",
        rouletteResettata: "Roulette resettata con successo!",
        linguaImpostata: "Lingua impostata su Italiano.",
        lists: "Liste ▾",
        more: "Altro ▾",
        navStats: "Classifica Giocatori",
        social: "I nostri social ▾",
        socialDisabled: "Funzionalità non attiva al momento.",
        futureDisabled: "La lista Futura è disattivata. Modifica 'isFuturaActive' in app.js per attivarla!",
        footerSub: "La classifica definitiva dei livelli più difficili di Geometry Dash",
        footerDisclaimer: "demonlist.org non è in alcun modo affiliato con RobTop Games AB ®",
        presente: "Presente",
        futura: "Futura",
        futuraDisabledLabel: "Futura (Disattivata)",
        updatesTitle: "Aggiornamenti Recenti",
        pointsLabel: "punti",
        levelNotFound: "Livello non trovato nel database locale."
    },
    en: {
        searchPlaceholder: "Search level...",
        playerSearchPlaceholder: "Search player...",
        mainListTitle: "Main List",
        backToList: "Back to list",
        verifiedBy: "Verified by",
        id: "Level ID",
        clickToCopy: "Click to copy",
        copied: "Copied!",
        password: "Password",
        length: "Length",
        objects: "Objects",
        version: "Version",
        totalScore: "Total Score (100%)",
        listPercentScore: "List Percent Score (66%)",
        song: "Song",
        gdBrowser: "GD Browser",
        positionHistory: "Position History",
        placedAt: "Placed at position #",
        records: "Records Received",
        recordsSub: "0 records in total, of which 0 are 100%",
        noRecords: "No records yet",
        recentUpdates: "Recent Updates",
        tuttiIPaesi: "All countries",
        precedente: "Previous",
        successivo: "Next",
        posizione: "Rank",
        punteggio: "Score",
        recordPiuDifficile: "Hardest level",
        livelliCompletati: "Completed Levels",
        livelloCorrente: "Current Level",
        cronologiaLivelli: "Level History",
        nessunLivelloCompletato: "No levels have been completed yet.",
        passoCompletato: "Step completed! Target raised to ",
        rouletteResettata: "Roulette reset successful!",
        linguaImpostata: "Language set to English.",
        lists: "Lists ▾",
        more: "More ▾",
        navStats: "Stats Viewer",
        social: "Our social ▾",
        socialDisabled: "Feature currently deactivated.",
        futureDisabled: "Futura list is disabled. Edit 'isFuturaActive' in app.js to enable it!",
        footerSub: "The ultimate list of the hardest Geometry Dash levels",
        footerDisclaimer: "demonlist.org is in no way affiliated with RobTop Games AB ®",
        presente: "Present",
        futura: "Futura",
        futuraDisabledLabel: "Futura (Disabled)",
        updatesTitle: "Recent Updates",
        pointsLabel: "points",
        levelNotFound: "Level not found in local database."
    }
};

// DATABASE LOCALE DEI LIVELLI (PRESENTE)
const levels = [
    { rank: 1, name: "Template Level 1", creator: "Creator Name", verifier: "Verifier Name", pointsMin: "250.00", pointsMax: "1000.00", isNew: true, id: "12345678", password: "Free Copy", length: "2:15", objects: "150,000", version: "2.2", quote: "This is the first level quote.", youtubeId: "dQw4w9WgXcQ" },
    { rank: 2, name: "Template Level 2", creator: "Creator Name", verifier: "Verifier Name", pointsMin: "240.00", pointsMax: "960.00", isNew: false, id: "23456789", password: "No copy", length: "1:58", objects: "120,440", version: "2.1", quote: "Second level custom description.", youtubeId: "dQw4w9WgXcQ" },
    { rank: 3, name: "Template Level 3", creator: "Creator Name", verifier: "Verifier Name", pointsMin: "230.00", pointsMax: "920.00", isNew: false, id: "34567890", password: "Free Copy", length: "2:02", objects: "112,045", version: "2.1", quote: "Third level custom description.", youtubeId: "dQw4w9WgXcQ" },
    { rank: 4, name: "Template Level 4", creator: "Creator Name", verifier: "Verifier Name", pointsMin: "220.00", pointsMax: "880.00", isNew: false, id: "45678901", password: "1234", length: "2:31", objects: "281,004", version: "2.2", quote: "Fourth level custom description.", youtubeId: "dQw4w9WgXcQ" },
    { rank: 5, name: "Template Level 5", creator: "Creator Name", verifier: "Verifier Name", pointsMin: "210.00", pointsMax: "840.00", isNew: false, id: "56789012", password: "Free Copy", length: "2:45", objects: "138,409", version: "2.1", quote: "Fifth level custom description.", youtubeId: "dQw4w9WgXcQ" }
];

// DATABASE DEI LIVELLI (FUTURA)
const futuraLevels = [
    { rank: 1, name: "Futura Level 1", creator: "Creatore Futuro", verifier: "Verificatore Futuro", pointsMin: "300.00", pointsMax: "1200.00", isNew: true, id: "99999999", password: "Free Copy", length: "2:00", objects: "90,000", version: "2.2", quote: "Questo è un livello futuro sbloccato modificando la configurazione.", youtubeId: "dQw4w9WgXcQ" }
];

// DATABASE DEI GIOCATORI
const players = [
    { rank: 1, name: "Zoink", score: "20921.29", flag: "🇺🇸", hardest: "Template Level 1", completed: ["Template Level 1", "Template Level 2"] },
    { rank: 2, name: "wPopoff", score: "18571.81", flag: "🇺🇸", hardest: "Template Level 1", completed: ["Template Level 1", "Template Level 3"] },
    { rank: 3, name: "Netermind", score: "13192.90", flag: "🇺🇸", hardest: "Template Level 2", completed: ["Template Level 2", "Template Level 4"] }
];

let activePlayerIndex = 0;
let displayMode = 'list'; // Impostata su 'list' (Visualizzazione Principale) di default
let activeList = 'presente'; // 'presente' o 'futura'
let activeLevelRank = null; // Memorizza l'ultimo livello aperto per le traduzioni in tempo reale

// Stato Level Roulette
let rouletteTarget = 1;
let rouletteHistory = [];
let currentRouletteLevel = null;

// Reindirizza al dettaglio di un livello cercandolo per nome
function goToLevelByName(levelName) {
    // Cerca prima nella lista Presente
    let lvl = levels.find(l => l.name === levelName);
    if (lvl) {
        activeList = 'presente';
        switchView('detail', lvl.rank);
        return;
    }

    // Cerca nella lista Futura se attiva
    if (isFuturaActive) {
        let futLvl = futuraLevels.find(l => l.name === levelName);
        if (futLvl) {
            activeList = 'futura';
            switchView('detail', futLvl.rank);
            return;
        }
    }

    // Segnala se il livello non esiste nel database locale
    triggerToast(t[currentLang].levelNotFound);
}

// Gestore Visualizzazione SPA con Fix transizione (void offsetWidth per ricaricare l'animazione)
function switchView(viewName, parameterId = null) {
    closeAllDropdowns();

    document.querySelectorAll('.view-section').forEach(section => {
        section.classList.remove('active');
    });
    document.querySelectorAll('.navbar-menu .nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    const activeSection = document.getElementById(`view-${viewName}`);
    if (activeSection) {
        // Reset transizione forzando il Reflow del browser
        activeSection.classList.remove('active');
        void activeSection.offsetWidth; 
        activeSection.classList.add('active');
    }

    if (viewName === 'grid') {
        document.getElementById('nav-classic').classList.add('active');
        renderDisplay();
    } else if (viewName === 'detail') {
        renderDetail(parameterId);
    } else if (viewName === 'stats') {
        document.getElementById('nav-stats').classList.add('active');
        renderPlayersList();
        renderPlayerDetail();
    } else if (viewName === 'roulette') {
        initRoulette();
    } else if (viewName === 'updates') {
        renderUpdatesPage();
    }
}

// Cambia la lingua dinamicamente senza ricaricare la pagina
function changeLanguage(lang) {
    currentLang = lang;
    updateLanguageDOM();
    
    // Aggiorna gli elementi attivi visibili
    renderDisplay();
    
    const activeSection = document.querySelector('.view-section.active');
    if (activeSection) {
        const id = activeSection.id;
        if (id === 'view-stats') {
            renderPlayersList();
            renderPlayerDetail();
        } else if (id === 'view-roulette') {
            renderRoulette();
        } else if (id === 'view-detail' && activeLevelRank !== null) {
            renderDetail(activeLevelRank);
        } else if (id === 'view-updates') {
            renderUpdatesPage();
        }
    }
    
    triggerToast(t[currentLang].linguaImpostata);
}

// Aggiorna le etichette di testo statiche nella pagina
function updateLanguageDOM() {
    const lang = currentLang;
    
    document.getElementById('nav-classic').innerHTML = t[lang].lists;
    document.getElementById('nav-more').innerHTML = t[lang].more;
    document.getElementById('nav-stats').innerHTML = t[lang].navStats;
    document.getElementById('nav-social').innerHTML = t[lang].social;
    
    const searchInputEl = document.getElementById('level-search');
    if (searchInputEl) searchInputEl.placeholder = t[lang].searchPlaceholder;
    
    const playerSearchInputEl = document.getElementById('player-search');
    if (playerSearchInputEl) playerSearchInputEl.placeholder = t[lang].playerSearchPlaceholder;
    
    const rangeTitle = document.querySelector('.category-header .title');
    if (rangeTitle) rangeTitle.innerText = t[lang].mainListTitle;
    
    document.querySelector('.footer-logo-sub').innerText = t[lang].footerSub;
    document.getElementById('footer-disclaimer-text').innerText = t[lang].footerDisclaimer;

    // Gestione pulsante Traduzione
    document.getElementById('btn-lang-it').innerHTML = (lang === 'it') ? '✓ Italiano' : 'Italiano';
    document.getElementById('btn-lang-en').innerHTML = (lang === 'en') ? '✓ English' : 'English';

    // Gestione traduzione dicitura classifica
    document.getElementById('country-dropdown-text').innerText = t[lang].tuttiIPaesi;
    document.getElementById('btn-stats-prev').innerText = `< ${t[lang].precedente}`;
    document.getElementById('btn-stats-next').innerText = `${t[lang].successivo} >`;

    // Roulette testo statico
    document.getElementById('roulette-title-text').innerText = t[lang].livelloCorrente;
    document.getElementById('history-title-text').innerText = t[lang].cronologiaLivelli;
    document.getElementById('btn-roulette-reset').innerText = "Reset";
    document.getElementById('btn-roulette-menu').innerText = t[lang].backToList;
}

// Inversione Colori (Tema Chiaro / Tema Scuro)
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const sunBtn = document.querySelector('.sun-toggle');
    if (document.body.classList.contains('light-mode')) {
        sunBtn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
        `;
        triggerToast(currentLang === 'it' ? 'Tema Chiaro attivato' : 'Light Mode activated');
    } else {
        sunBtn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="5"/>
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
            </svg>
        `;
        triggerToast(currentLang === 'it' ? 'Tema Scuro attivato' : 'Dark Mode activated');
    }
}

// Seleziona se mostrare la lista Presente o Futura
function selectList(listName) {
    if (listName === 'futura') {
        if (!isFuturaActive) {
            triggerToast(t[currentLang].futureDisabled);
            return;
        }
    }
    activeList = listName;
    switchView('grid');
}

// Gestore delle tendine menu (Dropdowns)
function toggleDropdown(event, containerId) {
    event.stopPropagation();
    const container = document.getElementById(containerId);
    const isOpen = container.classList.contains('open');
    
    closeAllDropdowns();
    
    if (!isOpen) {
        container.classList.add('open');
    }
}

function closeAllDropdowns() {
    document.querySelectorAll('.dropdown').forEach(d => {
        d.classList.remove('open');
    });
}

// Chiudi le tendine cliccando fuori
window.addEventListener('click', () => {
    closeAllDropdowns();
});

// --- SCHERMATA PRINCIPALE (LISTA / GRIGLIA) ---
const displayContainer = document.getElementById('levels-display-container');
const gridRange = document.getElementById('grid-range');
const searchInput = document.getElementById('level-search');

function setDisplayMode(mode) {
    displayMode = mode;
    document.getElementById('toggle-list').classList.remove('active');
    document.getElementById('toggle-grid').classList.remove('active');
    if (mode === 'list') {
        document.getElementById('toggle-list').classList.add('active');
    } else {
        document.getElementById('toggle-grid').classList.add('active');
    }
    renderDisplay();
}

function renderDisplay() {
    const currentList = (activeList === 'futura') ? futuraLevels : levels;
    
    gridRange.innerText = `#1 - #${currentList.length}`;
    displayContainer.innerHTML = '';

    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const filteredLevels = currentList.filter(lvl => lvl.name.toLowerCase().includes(query));

    if (displayMode === 'grid') {
        const gridDiv = document.createElement('div');
        gridDiv.className = 'levels-grid';
        filteredLevels.forEach(lvl => {
            const cell = document.createElement('div');
            cell.className = 'grid-cell';
            cell.innerHTML = `
                ${lvl.isNew ? '<span class="grid-badge-new">NEW</span>' : ''}
                <div class="grid-rank-box">${lvl.rank}</div>
                <div class="grid-name">${lvl.name}</div>
            `;
            cell.addEventListener('click', () => switchView('detail', lvl.rank));
            gridDiv.appendChild(cell);
        });
        displayContainer.appendChild(gridDiv);
    } else {
        const listDiv = document.createElement('div');
        listDiv.className = 'levels-list-vertical';
        filteredLevels.forEach(lvl => {
            const card = document.createElement('div');
            card.className = 'level-card';
            card.innerHTML = `
                <div class="level-thumbnail-container">
                    ${lvl.isNew ? '<span class="badge-new">NEW</span>' : ''}
                    <img class="level-thumbnail" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=300&auto=format&fit=crop" alt="${lvl.name}">
                </div>
                <div class="level-details-main">
                    <div class="level-title-row">
                        <span class="level-rank-num">#${lvl.rank}</span>
                        <span class="level-name-txt">${lvl.name}</span>
                    </div>
                    <div class="level-meta-row">
                        ${lvl.creator} | <span class="verifier">${lvl.verifier}</span> · ${lvl.pointsMin} — <span class="points-val">${lvl.pointsMax}</span> ${t[currentLang].pointsLabel}
                    </div>
                </div>
            `;
            card.addEventListener('click', () => switchView('detail', lvl.rank));
            listDiv.appendChild(card);
        });
        displayContainer.appendChild(listDiv);
    }
}

if (searchInput) {
    searchInput.addEventListener('input', () => {
        renderDisplay();
    });
}

// --- SCHERMATA DETTAGLIO ---
const detailContent = document.getElementById('level-detail-content');

function renderDetail(rankId) {
    activeLevelRank = rankId;
    const currentList = (activeList === 'futura') ? futuraLevels : levels;
    const level = currentList.find(l => l.rank == rankId);
    if (!level) return;

    detailContent.innerHTML = `
        <button class="back-link" style="background: none; border: none; font-family: inherit; font-size: inherit; cursor: pointer;" onclick="switchView('grid')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
            </svg>
            ${t[currentLang].backToList}
        </button>
        <div class="detail-top">
            <h1 class="detail-title-row"><span>#${level.rank}</span> ${level.name}</h1>
            <div class="detail-creator-row">creato da <strong>${level.creator}</strong></div>
        </div>
        <div class="verified-badge"><span>✓ ${t[currentLang].verifiedBy} <strong>${level.verifier}</strong></span></div>
        <div class="detail-quote">// ${level.quote} //</div>
        <div class="detail-video-wrapper">
            <iframe src="https://www.youtube.com/embed/${level.youtubeId}" title="YouTube video player" allowfullscreen></iframe>
        </div>
        <div class="stats-grid-row-1">
            <div class="stat-card" onclick="copyId('${level.id}', 'id-val')">
                <span class="lbl">${t[currentLang].id}</span>
                <span class="val" id="id-val">${level.id}</span>
                <span class="sub-click">${t[currentLang].clickToCopy}</span>
            </div>
            <div class="stat-card">
                <span class="lbl">${t[currentLang].password}</span>
                <span class="val">${level.password}</span>
            </div>
        </div>
        <div class="stats-grid-row-2">
            <div class="stat-card">
                <span class="lbl">${t[currentLang].length}</span><span class="val">${level.length}</span>
            </div>
            <div class="stat-card">
                <span class="lbl">${t[currentLang].objects}</span><span class="val">${level.objects}</span>
            </div>
            <div class="stat-card">
                <span class="lbl">${t[currentLang].version}</span><span class="val">${level.version}</span>
            </div>
        </div>
        <div class="stats-grid-row-3">
            <div class="stat-card">
                <span class="lbl">${t[currentLang].totalScore}</span><span class="val" style="color: var(--accent-blue);">${level.pointsMax}</span>
            </div>
            <div class="stat-card">
                <span class="lbl">${t[currentLang].listPercentScore}</span><span class="val">${level.pointsMin}</span>
            </div>
        </div>
        <div class="action-buttons-row">
            <a class="action-btn" onclick="triggerToast('Audio track is not configured')">🎵 ${t[currentLang].song}</a>
            <a class="action-btn" onclick="triggerToast('GD Browser mirror is unavailable')">🔗 ${t[currentLang].gdBrowser}</a>
        </div>
        <div class="position-history-accordion">
            <div class="accordion-header" onclick="toggleAccordion()">
                <span>${t[currentLang].positionHistory}</span><span>▼</span>
            </div>
            <div class="accordion-content" id="accordion-body">
                ${t[currentLang].placedAt}${level.rank}.
            </div>
        </div>
        <div class="records-container">
            <div class="records-header">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                <span>${t[currentLang].records}</span>
            </div>
            <div class="records-sub">${t[currentLang].recordsSub}</div>
            <div class="no-records-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
                </svg>
                ${t[currentLang].noRecords}
            </div>
        </div>
    `;
}

function copyId(id, elementId) {
    navigator.clipboard.writeText(id).then(() => {
        const el = document.getElementById(elementId);
        el.innerText = t[currentLang].copied;
        setTimeout(() => { el.innerText = id; }, 1500);
    });
}

function toggleAccordion() {
    document.getElementById('accordion-body').classList.toggle('open');
}

// --- LEVEL ROULETTE LOGIC ---
const rouletteCardContainer = document.getElementById('roulette-card-container');
const rouletteHistoryContainer = document.getElementById('roulette-history-container');

function initRoulette() {
    if (!currentRouletteLevel) {
        rollNextLevel();
    }
    renderRoulette();
}

function rollNextLevel() {
    const currentList = (activeList === 'futura') ? futuraLevels : levels;
    const randomIndex = Math.floor(Math.random() * currentList.length);
    currentRouletteLevel = currentList[randomIndex];
}

function renderRoulette() {
    if (!currentRouletteLevel) return;

    rouletteCardContainer.innerHTML = `
        <div class="roulette-video">
            <iframe src="https://www.youtube.com/embed/${currentRouletteLevel.youtubeId}" allowfullscreen></iframe>
        </div>
        <div class="roulette-info">
            <div class="roulette-rank">#${currentRouletteLevel.rank}</div>
            <div class="roulette-name">${currentRouletteLevel.name}</div>
            <div class="roulette-id">(${currentRouletteLevel.id})</div>
            <div class="roulette-published">${t[currentLang].verifiedBy.replace('Verificato da', 'Pubblicato da').replace('Verified by', 'Published by')}:<br><span>${currentRouletteLevel.creator}</span></div>
        </div>
        <div class="roulette-target-action">
            <div class="roulette-target-badge">${t[currentLang].livelloCorrente.replace('Livello Corrente', 'ALMENO').replace('Current Level', 'AT LEAST')} ${rouletteTarget}%</div>
            <button class="roulette-done-btn" onclick="completeStep()">Done</button>
        </div>
    `;

    if (rouletteHistory.length === 0) {
        rouletteHistoryContainer.innerHTML = `<div class="history-empty">${t[currentLang].nessunLivelloCompletato}</div>`;
    } else {
        rouletteHistoryContainer.innerHTML = `
            <ul class="history-list">
                ${rouletteHistory.map((h, i) => `
                    <li class="history-item">
                        <span><strong>${i + 1}.</strong> #${h.level.rank} ${h.level.name}</span>
                        <span style="color: var(--accent-orange); font-weight: 700;">${h.percentage}%</span>
                    </li>
                `).join('')}
            </ul>
        `;
    }
}

function completeStep() {
    rouletteHistory.push({
        level: currentRouletteLevel,
        percentage: rouletteTarget
    });

    rouletteTarget++;
    rollNextLevel();
    renderRoulette();
    triggerToast(`${t[currentLang].passoCompletato}${rouletteTarget}%`);
}

function resetRoulette() {
    rouletteTarget = 1;
    rouletteHistory = [];
    currentRouletteLevel = null;
    rollNextLevel();
    renderRoulette();
    triggerToast(t[currentLang].rouletteResettata);
}

// --- STATS VIEWER ---
const playersListContainer = document.getElementById('players-list-container');
const playerDetailContainer = document.getElementById('player-detail-container');
const playerSearchInput = document.getElementById('player-search');

function renderPlayersList(filteredPlayers = players) {
    playersListContainer.innerHTML = '';
    filteredPlayers.forEach((player) => {
        const globalIndex = players.findIndex(p => p.name === player.name);
        const li = document.createElement('li');
        li.className = `player-item ${globalIndex === activePlayerIndex ? 'active' : ''}`;
        li.innerHTML = `
            <div class="player-item-left">
                <span class="player-item-rank">#${player.rank}</span>
                <span class="player-item-name">${player.name}</span>
            </div>
            <div class="player-item-right">
                <span class="player-item-score">${parseFloat(player.score).toFixed(2)}</span>
                <span class="flag-icon">${player.flag}</span>
            </div>
        `;
        li.addEventListener('click', () => {
            activePlayerIndex = globalIndex;
            renderPlayersList(filteredPlayers);
            renderPlayerDetail();
        });
        playersListContainer.appendChild(li);
    });
}

function renderPlayerDetail() {
    const player = players[activePlayerIndex];
    if (!player) return;

    playerDetailContainer.innerHTML = `
        <div class="player-detail-header">
            <span class="player-detail-flag">${player.flag}</span>
            <h2 class="player-detail-name">
                ${player.name}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
            </h2>
        </div>
        <div class="player-stats-grid">
            <div class="p-stat-box">
                <div class="p-stat-icon">🏆</div>
                <div class="p-stat-details">
                    <span class="p-stat-val">#${player.rank}</span><span class="p-stat-lbl">${t[currentLang].posizione}</span>
                </div>
            </div>
            <div class="p-stat-box">
                <div class="p-stat-icon">✨</div>
                <div class="p-stat-details">
                    <span class="p-stat-val">${player.score}</span><span class="p-stat-lbl">${t[currentLang].punteggio}</span>
                </div>
            </div>
        </div>
        <!-- Clicking hardest level banner redirects directly to that level -->
        <div class="hardest-banner" onclick="goToLevelByName('${player.hardest}')">
            <div class="hardest-left">
                <span class="hardest-icon">🔥</span>
                <div class="hardest-title-group">
                    <span class="hardest-lbl">${t[currentLang].recordPiuDifficile}</span>
                    <span class="hardest-name">${player.hardest}</span>
                </div>
            </div>
            <span class="hardest-right">❯</span>
        </div>
        <div class="main-levels-box">
            <div class="box-title-row">
                <div class="box-title-left">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                    <span>${t[currentLang].livelliCompletati}</span>
                </div>
                <span class="box-counter">${player.completed.length}</span>
            </div>
            <div class="tags-container">
                ${player.completed.map(levelName => `
                    <span class="level-tag" onclick="goToLevelByName('${levelName}')">${levelName}</span>
                `).join('')}
            </div>
        </div>
    `;
}

if (playerSearchInput) {
    playerSearchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const filtered = players.filter(p => p.name.toLowerCase().includes(query));
        renderPlayersList(filtered);
    });
}

// --- PAGINA DEGLI AGGIORNAMENTI RECENTI (NOTIFICHE) ---
const updatesContainer = document.getElementById('updates-content-container');

function renderUpdatesPage() {
    updatesContainer.innerHTML = `
        <button class="back-link" style="background: none; border: none; font-family: inherit; font-size: inherit; cursor: pointer; color: var(--text-secondary);" onclick="switchView('grid')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="19" y1="12" x2="5" y2="12"/>
                <polyline points="12 19 5 12 12 5"/>
            </svg>
            ${t[currentLang].backToList}
        </button>
        <div class="detail-top">
            <h1 class="detail-title-row" style="margin-bottom: 20px;">${t[currentLang].updatesTitle}</h1>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 16px; margin-top: 10px;">
            <div class="records-container">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; border-bottom: 1px solid var(--panel-border); padding-bottom: 8px;">
                    <span style="font-weight: 800; color: var(--accent-blue);">Versione 1.3.0</span>
                    <span style="font-size: 0.8rem; color: var(--text-secondary);">${currentLang === 'it' ? 'Giugno 2026' : 'June 2026'}</span>
                </div>
                <ul style="list-style-type: none; display: flex; flex-direction: column; gap: 8px; font-size: 0.9rem; color: var(--text-secondary);">
                    ${currentLang === 'it' ? `
                        <li>• Sostituiti tutti i link di navigazione con pulsanti reali per prevenire la selezione del testo accidentale.</li>
                        <li>• Rimosso l'avatar del profilo e semplificato l'angolo destro della barra di navigazione.</li>
                        <li>• La modalità di visualizzazione predefinita all'avvio è stata impostata su quella principale (lista con anteprime).</li>
                        <li>• Implementata la pagina interattiva dei Changelog direttamente cliccando sulla campanella delle notifiche.</li>
                        <li>• Aggiunto il toggle del sole per invertire elegantemente i colori dell'intera pagina (Tema Chiaro / Tema Scuro).</li>
                    ` : `
                        <li>• Swapped all navigation links to native buttons to fully prevent accidental text selection cursor.</li>
                        <li>• Slashed the profile avatar and streamlined the navbar right corner.</li>
                        <li>• Set list view (thumbnails) as the default active display mode on load.</li>
                        <li>• Fully integrated recent updates page directly connected to the bell icon.</li>
                        <li>• Handled light/dark mode color inversion using variables instead of blunt styling filters.</li>
                    `}
                </ul>
            </div>

            <div class="records-container">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; border-bottom: 1px solid var(--panel-border); padding-bottom: 8px;">
                    <span style="font-weight: 800; color: var(--accent-orange);">Versione 1.2.0</span>
                    <span style="font-size: 0.8rem; color: var(--text-secondary);">${currentLang === 'it' ? 'Maggio 2026' : 'May 2026'}</span>
                </div>
                <ul style="list-style-type: none; display: flex; flex-direction: column; gap: 8px; font-size: 0.9rem; color: var(--text-secondary);">
                    ${currentLang === 'it' ? `
                        <li>• Introdotta la modalità di gioco "Level Roulette" con progressione dinamica dei target percentuali (1% + ogni turno).</li>
                        <li>• Aggiunto il menu a discesa (dropdown) interattivo sulla voce "More".</li>
                        <li>• Sostituiti tutti i popup di sistema (alert) con eleganti notifiche toast a scorrimento.</li>
                    ` : `
                        <li>• Deployed Level Roulette gameplay with dynamic target percentage steps.</li>
                        <li>• Added fully interactive menu dropdown under 'More' navigation element.</li>
                        <li>• Erased native browser alert popups, replacing them with sliding toasts.</li>
                    `}
                </ul>
            </div>
        </div>
    `;
}

// Configura dinamicamente la navbar in base alle variabili
function initNavbar() {
    const lang = currentLang;
    const futuraBtn = document.getElementById('btn-futura');
    if (futuraBtn) {
        if (isFuturaActive) {
            futuraBtn.classList.remove('disabled-item');
            futuraBtn.innerText = t[lang].futura;
        } else {
            futuraBtn.classList.add('disabled-item');
            futuraBtn.innerText = t[lang].futuraDisabledLabel;
        }
    }
}

// Esecuzione al caricamento iniziale
document.addEventListener('DOMContentLoaded', () => {
    updateLanguageDOM();
    initNavbar();
    renderDisplay();
});
