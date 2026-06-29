const levels = [
    { 
        rank: 1, 
        name: "Template Level 1", 
        creator: "Creator Name", 
        verifier: "Verifier Name", 
        pointsMin: "250.00", 
        pointsMax: "1000.00", 
        isNew: true, 
        id: "12345678", 
        password: "Free Copy", 
        length: "2:15", 
        objects: "150,000", 
        version: "2.2", 
        quote: "This is the first level quote.", 
        youtubeId: "dQw4w9WgXcQ" 
    },
    { 
        rank: 2, 
        name: "Template Level 2", 
        creator: "Creator Name", 
        verifier: "Verifier Name", 
        pointsMin: "240.00", 
        pointsMax: "960.00", 
        isNew: false, 
        id: "23456789", 
        password: "No copy", 
        length: "1:58", 
        objects: "120,440", 
        version: "2.1", 
        quote: "Second level custom description.", 
        youtubeId: "dQw4w9WgXcQ" 
    },
    { 
        rank: 3, 
        name: "Template Level 3", 
        creator: "Creator Name", 
        verifier: "Verifier Name", 
        pointsMin: "230.00", 
        pointsMax: "920.00", 
        isNew: false, 
        id: "34567890", 
        password: "Free Copy", 
        length: "2:02", 
        objects: "112,045", 
        version: "2.1", 
        quote: "Third level custom description.", 
        youtubeId: "dQw4w9WgXcQ" 
    },
    { 
        rank: 4, 
        name: "Template Level 4", 
        creator: "Creator Name", 
        verifier: "Verifier Name", 
        pointsMin: "220.00", 
        pointsMax: "880.00", 
        isNew: false, 
        id: "45678901", 
        password: "1234", 
        length: "2:31", 
        objects: "281,004", 
        version: "2.2", 
        quote: "Fourth level custom description.", 
        youtubeId: "dQw4w9WgXcQ" 
    },
    { 
        rank: 5, 
        name: "Template Level 5", 
        creator: "Creator Name", 
        verifier: "Verifier Name", 
        pointsMin: "210.00", 
        pointsMax: "840.00", 
        isNew: false, 
        id: "56789012", 
        password: "Free Copy", 
        length: "2:45", 
        objects: "138,409", 
        version: "2.1", 
        quote: "Fifth level custom description.", 
        youtubeId: "dQw4w9WgXcQ" 
    }
];

// DATABASE DEI GIOCATORI
const players = [
    { rank: 1, name: "Zoink", score: "20921.29", flag: "🇺🇸", hardest: "Template Level 1", completed: ["Template Level 1", "Template Level 2"] },
    { rank: 2, name: "wPopoff", score: "18571.81", flag: "🇺🇸", hardest: "Template Level 1", completed: ["Template Level 1", "Template Level 3"] },
    { rank: 3, name: "Netermind", score: "13192.90", flag: "🇺🇸", hardest: "Template Level 2", completed: ["Template Level 2", "Template Level 4"] }
];

let activePlayerIndex = 0;
let displayMode = 'list'; // Impostata su 'list' (Visualizzazione Principale) di default

// Stato Level Roulette
let rouletteTarget = 1;
let rouletteHistory = [];
let currentRouletteLevel = null;

// Gestore Visualizzazione SPA
function switchView(viewName, parameterId = null) {
    // Chiudi tutte le tendine dropdown quando cambi pagina
    closeAllDropdowns();

    document.querySelectorAll('.view-section').forEach(section => {
        section.classList.remove('active');
    });
    document.querySelectorAll('.navbar-menu .nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    if (viewName === 'grid') {
        document.getElementById('view-grid').classList.add('active');
        document.getElementById('nav-classic').classList.add('active');
        renderDisplay();
    } else if (viewName === 'detail') {
        document.getElementById('view-detail').classList.add('active');
        renderDetail(parameterId);
    } else if (viewName === 'stats') {
        document.getElementById('view-stats').classList.add('active');
        document.getElementById('nav-stats').classList.add('active');
        renderPlayersList();
        renderPlayerDetail();
    } else if (viewName === 'roulette') {
        document.getElementById('view-roulette').classList.add('active');
        initRoulette();
    } else if (viewName === 'updates') {
        document.getElementById('view-updates').classList.add('active');
    }
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
        triggerToast('Light Mode attivata');
    } else {
        sunBtn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="5"/>
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
            </svg>
        `;
        triggerToast('Dark Mode attivata');
    }
}

// Gestore Toast (Sostituto non invasivo dei Popup)
function triggerToast(message) {
    const toast = document.getElementById('toast-notify');
    toast.innerText = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
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

function renderDisplay(filteredLevels = levels) {
    gridRange.innerText = `#1 - #${levels.length}`;
    displayContainer.innerHTML = '';

    if (displayMode === 'grid') {
        const gridDiv = document.createElement('div');
        gridDiv.className = 'levels-grid';
        filteredLevels.forEach(lvl => {
            const cell = document.createElement('div');
            cell.className = 'grid-cell';
            cell.innerHTML = `
                ${lvl.isNew ? '<span class="grid-badge-new">New</span>' : ''}
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
                    ${lvl.isNew ? '<span class="badge-new">New</span>' : ''}
                    <img class="level-thumbnail" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=300&auto=format&fit=crop" alt="${lvl.name}">
                </div>
                <div class="level-details-main">
                    <div class="level-title-row">
                        <span class="level-rank-num">#${lvl.rank}</span>
                        <span class="level-name-txt">${lvl.name}</span>
                    </div>
                    <div class="level-meta-row">
                        ${lvl.creator} | <span class="verifier">${lvl.verifier}</span> · ${lvl.pointsMin} — <span class="points-val">${lvl.pointsMax}</span> points
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
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const filtered = levels.filter(lvl => lvl.name.toLowerCase().includes(query));
        renderDisplay(filtered);
    });
}

// --- SCHERMATA DETTAGLIO ---
const detailContent = document.getElementById('level-detail-content');

function renderDetail(rankId) {
    const level = levels.find(l => l.rank == rankId);
    if (!level) return;

    detailContent.innerHTML = `
        <button class="back-link" style="background: none; border: none; font-family: inherit; font-size: inherit; cursor: pointer;" onclick="switchView('grid')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to list
        </button>
        <div class="detail-top">
            <h1 class="detail-title-row"><span>#${level.rank}</span> ${level.name}</h1>
            <div class="detail-creator-row">created by <strong>${level.creator}</strong></div>
        </div>
        <div class="verified-badge"><span>✓ Verified by <strong>${level.verifier}</strong></span></div>
        <div class="detail-quote">// ${level.quote} //</div>
        <div class="detail-video-wrapper">
            <iframe src="https://www.youtube.com/embed/${level.youtubeId}" title="YouTube video player" allowfullscreen></iframe>
        </div>
        <div class="stats-grid-row-1">
            <div class="stat-card" onclick="copyId('${level.id}', 'id-val')">
                <span class="lbl">ID</span>
                <span class="val" id="id-val">${level.id}</span>
                <span class="sub-click">Click to copy</span>
            </div>
            <div class="stat-card">
                <span class="lbl">Password</span>
                <span class="val">${level.password}</span>
            </div>
        </div>
        <div class="stats-grid-row-2">
            <div class="stat-card">
                <span class="lbl">Length</span><span class="val">${level.length}</span>
            </div>
            <div class="stat-card">
                <span class="lbl">Objects</span><span class="val">${level.objects}</span>
            </div>
            <div class="stat-card">
                <span class="lbl">Version</span><span class="val">${level.version}</span>
            </div>
        </div>
        <div class="stats-grid-row-3">
            <div class="stat-card">
                <span class="lbl">Total Score (100%)</span><span class="val" style="color: var(--accent-blue);">${level.pointsMax}</span>
            </div>
            <div class="stat-card">
                <span class="lbl">List Percent Score (66%)</span><span class="val">${level.pointsMin}</span>
            </div>
        </div>
        <div class="action-buttons-row">
            <a class="action-btn" onclick="triggerToast('Audio track is not configured')">🎵 Song</a>
            <a class="action-btn" onclick="triggerToast('GD Browser mirror is unavailable')">🔗 GD Browser</a>
        </div>
        <div class="position-history-accordion">
            <div class="accordion-header" onclick="toggleAccordion()">
                <span>Position history</span><span>▼</span>
            </div>
            <div class="accordion-content" id="accordion-body">
                Placed #${level.rank} on demonlist.
            </div>
        </div>
        <div class="records-container">
            <div class="records-header">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                <span>Records</span>
            </div>
            <div class="records-sub">0 records in total, 0 of which are 100%</div>
            <div class="no-records-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
                </svg>
                No records yet
            </div>
        </div>
    `;
}

function copyId(id, elementId) {
    navigator.clipboard.writeText(id).then(() => {
        const el = document.getElementById(elementId);
        el.innerText = "Copied!";
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
    const randomIndex = Math.floor(Math.random() * levels.length);
    currentRouletteLevel = levels[randomIndex];
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
            <div class="roulette-published">Published by:<br><span>${currentRouletteLevel.creator}</span></div>
        </div>
        <div class="roulette-target-action">
            <div class="roulette-target-badge">AT LEAST ${rouletteTarget}%</div>
            <button class="roulette-done-btn" onclick="completeStep()">Done</button>
        </div>
    `;

    if (rouletteHistory.length === 0) {
        rouletteHistoryContainer.innerHTML = `<div class="history-empty">No levels have been completed yet.</div>`;
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
    triggerToast(`Step completed! Target raised to ${rouletteTarget}%`);
}

function resetRoulette() {
    rouletteTarget = 1;
    rouletteHistory = [];
    currentRouletteLevel = null;
    rollNextLevel();
    renderRoulette();
    triggerToast("Roulette reset successful!");
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
                    <span class="p-stat-val">#${player.rank}</span><span class="p-stat-lbl">Rank</span>
                </div>
            </div>
            <div class="p-stat-box">
                <div class="p-stat-icon">✨</div>
                <div class="p-stat-details">
                    <span class="p-stat-val">${player.score}</span><span class="p-stat-lbl">Score</span>
                </div>
            </div>
        </div>
        <div class="hardest-banner" onclick="triggerToast('Selected hardest level detail')">
            <div class="hardest-left">
                <span class="hardest-icon">🔥</span>
                <div class="hardest-title-group">
                    <span class="hardest-lbl">Hardest level</span>
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
                    <span>Main levels</span>
                </div>
                <span class="box-counter">${player.completed.length}</span>
            </div>
            <div class="tags-container">
                ${player.completed.map(levelName => `
                    <span class="level-tag" onclick="triggerToast('Tags clicked: ${levelName}')">${levelName}</span>
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

// Esecuzione al caricamento iniziale
document.addEventListener('DOMContentLoaded', () => {
    renderDisplay();
});
