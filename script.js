/* ═══════════════════════════════════════════════════════════════
   ALIEN SOUND ENGINEERING - Terminal JavaScript
   Responsive & Mobile-Friendly with Real Terminal Scrolling
   ═══════════════════════════════════════════════════════════════ */

// ═══════════════════════════════════════════════════════════════
// CONTENT SECTIONS (Compact for mobile)
// ═══════════════════════════════════════════════════════════════

const content = {
    welcome: `
<div class="logo">
<pre>───────────  ::ασε~  ──
<span class="subtitle">alien sound engineering</span></pre>
</div>

<div class="section">
<div class="section-header">// WELCOME TO THE SIGNAL</div>
<p>You have accessed the <span class="hl">Alien Sound Engineering</span> terminal.</p>
<p>We craft <span class="hl">open-source sound tools</span> for the electronic music community. Our mission: push the boundaries of <span class="bold">sound design</span> and make high-quality synthesis accessible to <span class="bold">everyone</span>.</p>
</div>

<div class="box accent">
<div class="list-item"><span class="hl">ls</span> — list sections</div>
<div class="list-item"><span class="hl">cd [section]</span> — navigate</div>
<div class="list-item"><span class="hl">help</span> — all commands</div>
</div>
`,

    synth: `
<div class="section">
<div class="section-header">// SYNTH.01</div>

<pre class="ascii small">
╔════════════════════════════════════════════╗
║  SYNTH.01 ─────────────────── v1.0         ║
╠════════════════════════════════════════════╣
║  ┌─────────┐ ┌─────────┐ ┌─────────┐       ║
║  │   OSC   │ │   AMP   │ │ FILTER  │       ║
║  │  ∿∿∿∿  │ │   ████  │ │  /│\\    │       ║
║  │  [●][●] │ │  [●][●] │ │  [●][●] │       ║
║  └─────────┘ └─────────┘ └─────────┘       ║
║  ┌─────────┐ ┌─────────────────────┐       ║
║  │   LFO   │ │       EFFECTS       │       ║
║  │ ◠◡◠◡  │ │ [DLY][REV][DST][CH] │       ║
║  └─────────┘ └─────────────────────┘       ║
╚════════════════════════════════════════════╝
</pre>

<p><span class="hl">Synth.01</span> is an <span class="bold">open-source VST synthesizer</span>, designed for the <span class="bold">EDM producer</span>.</p>

<div class="section-header">// CORE MODULES</div>
<div class="list-item"><span class="hl">OSCILLATOR</span> — Multiple waveforms, analog warmth</div>
<div class="list-item"><span class="hl">AMPLIFIER</span> — ADSR envelope, velocity</div>
<div class="list-item"><span class="hl">FILTER</span> — Resonant LP/HP with modulation</div>
<div class="list-item"><span class="hl">LFO</span> — Tempo-synced modulation</div>
<div class="list-item"><span class="hl">EFFECTS</span> — Delay, Reverb, Distortion, Chorus</div>

<div class="progress-container">
<span class="dim">Development: 100%</span>
<div class="progress-bar"><div class="progress-fill" style="width:100%"></div></div>
</div>

<div class="box accent">
<div class="list-item"><span class="hl">GitHub</span> — <a href="https://github.com/aliensoundengineering/Synth.01" target="_blank" style="color:var(--accent-color)">github.com/aliensoundengineering/Synth.01</a></div>
</div>
</div>
`,

    specs: `
<div class="section">
<div class="section-header">// SYNTH.01 SPECS</div>

<div class="table-row header">
<div class="table-cell">COMPONENT</div>
<div class="table-cell">SPECIFICATION</div>
</div>
<div class="table-row">
<div class="table-cell">Format</div>
<div class="table-cell">VST3 / AU / Standalone</div>
</div>
<div class="table-row">
<div class="table-cell">Oscillators</div>
<div class="table-cell">Sine, Saw, Square, Tri, Noise</div>
</div>
<div class="table-row">
<div class="table-cell">Polyphony</div>
<div class="table-cell">16 voices</div>
</div>
<div class="table-row">
<div class="table-cell">Filters</div>
<div class="table-cell">LP12, LP24, HP12, HP24, BP</div>
</div>
<div class="table-row">
<div class="table-cell">Sample Rate</div>
<div class="table-cell">Up to 192kHz</div>
</div>
<div class="table-row">
<div class="table-cell">License</div>
<div class="table-cell"><span class="hl">GPL v3 (Open Source)</span></div>
</div>

<pre class="ascii small">
SIGNAL FLOW:
[OSC]──▶[AMP/ENV]──▶[FILTER]──▶[FX]──▶[OUT]
   ▲                    ▲
   └────────[LFO]───────┘
</pre>
</div>
`,

    tracks: `
<div class="section">
<div class="section-header">// TRACKS <span class="badge">COMING SOON</span></div>

<pre class="ascii">
┌────────────────────────────────────┐
│  ▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   │
│  ▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░   │
│  ▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░   │
│  ▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░   │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░   │
│                                    │
│  [ ▶ ]  [ ■ ]  ────●───────  0:00  │
└────────────────────────────────────┘
</pre>

<p>Tracks produced with <span class="hl">ASE technology</span> will be featured here.</p>

<div class="box">
<p class="dim">░▒▓█ NO TRACKS PUBLISHED YET █▓▒░</p>
</div>

<div class="list-item">Genre: <span class="hl">EDM, Techno, House, Experimental</span></div>
<div class="list-item">All tracks: <span class="hl">100% ASE-powered</span></div>
<div class="list-item">License: <span class="hl">Creative Commons</span></div>

<p class="dim">The frequency is building...</p>
</div>
`,

    manifesto: `
<div class="section">
<div class="section-header">// MANIFESTO</div>

<div class="box accent">
<p><span class="hl">"The signal belongs to everyone."</span></p>
</div>

<p><span class="bold">Sound engineering is an art.</span> The invisible thread connecting emotion to frequency, intention to waveform, <span class="hl">soul to signal</span>.</p>

<div class="section-header">// OPEN SOURCE</div>
<p>Every tool we create is released under <span class="hl">open-source licenses</span>. The code is yours. We contribute to the <span class="bold">global EDM community</span> not for profit, but for progress.</p>

<div class="section-header">// EMBRACING EVOLUTION</div>
<p>We welcome <span class="hl">high technology</span>, including <span class="bold">artificial intelligence</span>.</p>
<p>As humans, we evolve. Our tools evolve with us. AI is not a threat—it's an <span class="hl">amplifier</span>. Just as synth expanded what was possible with sound, AI expands what's possible with creation itself.</p>

<pre class="ascii small">
HUMAN──▶TECHNOLOGY──▶EVOLUTION
  ▲                      │
  └──────────────────────┘
      FEEDBACK LOOP
</pre>

<p>We evolve as <span class="hl">people</span>. We evolve as <span class="hl">technicians</span>. We evolve as <span class="hl">musicians</span>.</p>

<div class="section-header">// SOUND ENGINEERING</div>
<p>At the heart of ASE: the relentless <span class="hl">pursuit of sound</span>.</p>

<div class="list-item"><span class="hl">Waveform integrity</span> — Every oscillation matters</div>
<div class="list-item"><span class="hl">Filter warmth</span> — Analog soul in digital form</div>
<div class="list-item"><span class="hl">Harmonic richness</span> — Depth beyond fundamental</div>
<div class="list-item"><span class="hl">Sonic innovation</span> — Sounds never heard before</div>

<div class="box accent">
<p><span class="hl">"The future of music is open. The future of sound is alien."</span></p>
<p class="dim">— Alien Sound Engineering</p>
</div>
</div>
`,

    help: `
<div class="section">
<div class="section-header">// COMMANDS</div>

<div class="table-row header">
<div class="table-cell">CMD</div>
<div class="table-cell">DESCRIPTION</div>
</div>
<div class="table-row">
<div class="table-cell"><span class="hl">help</span></div>
<div class="table-cell">Show this help</div>
</div>
<div class="table-row">
<div class="table-cell"><span class="hl">ls</span></div>
<div class="table-cell">List sections</div>
</div>
<div class="table-row">
<div class="table-cell"><span class="hl">cd [dir]</span></div>
<div class="table-cell">Navigate to section</div>
</div>
<div class="table-row">
<div class="table-cell"><span class="hl">clear</span></div>
<div class="table-cell">Clear terminal</div>
</div>
<div class="table-row">
<div class="table-cell"><span class="hl">pwd</span></div>
<div class="table-cell">Current location</div>
</div>
<div class="table-row">
<div class="table-cell"><span class="hl">whoami</span></div>
<div class="table-cell">Current user</div>
</div>
<div class="table-row">
<div class="table-cell"><span class="hl">neofetch</span></div>
<div class="table-cell">System info</div>
</div>

<div class="section-header">// QUICK NAV</div>
<div class="list-item"><span class="hl">home</span> — Welcome page</div>
<div class="list-item"><span class="hl">synth</span> — Synth.01 info</div>
<div class="list-item"><span class="hl">tracks</span> — Browse tracks</div>
<div class="list-item"><span class="hl">manifesto</span> — Our philosophy</div>
</div>
`,

    ls: `
<div class="section">
<span class="hl">synth/</span>      <span class="hl">tracks/</span>      <span class="hl">manifesto/</span>
</div>
`,

    neofetch: `
<div class="section">
<pre class="ascii">
───────────  ::ασε~  ──      visitor@ase
alien sound engineering      ─────────────
                             OS: ASE-OS v1.0
                             Shell: ase-sh
                             Resolution: ∞ Hz
                             Theme: Cyberpunk
                             CPU: Neural Oscillator
                             Memory: 16TB Waveforms
</pre>
</div>
`
};

// ═══════════════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════════════

let currentPath = '/';
let commandHistory = [];
let historyIndex = -1;

// ═══════════════════════════════════════════════════════════════
// DOM ELEMENTS
// ═══════════════════════════════════════════════════════════════

const outputArea = document.getElementById('outputArea');
const commandInput = document.getElementById('commandInput');
const menuToggle = document.getElementById('menuToggle');
const menuItems = document.getElementById('menuItems');
const glitchOverlay = document.getElementById('glitchOverlay');
const bootScreen = document.getElementById('bootScreen');
const bootText = document.getElementById('bootText');
const bootProgressBar = document.getElementById('bootProgressBar');

// ═══════════════════════════════════════════════════════════════
// BOOT SEQUENCE
// ═══════════════════════════════════════════════════════════════

const bootMessages = [
    'Initializing ASE Terminal...',
    'Loading sound processors...',
    'Calibrating frequencies...',
    'Establishing signal lock...',
    '[OK] System ready.'
];

function runBootSequence() {
    let messageIndex = 0;
    let progress = 0;

    const bootInterval = setInterval(() => {
        if (messageIndex < bootMessages.length) {
            bootText.innerHTML += bootMessages[messageIndex] + '<br>';
            progress = ((messageIndex + 1) / bootMessages.length) * 100;
            bootProgressBar.style.width = progress + '%';
            messageIndex++;
        } else {
            clearInterval(bootInterval);
            setTimeout(() => {
                bootScreen.classList.add('hidden');
                setTimeout(() => {
                    bootScreen.style.display = 'none';
                    showContent(content.welcome);
                    commandInput.focus();
                }, 500);
            }, 300);
        }
    }, 400);
}

// ═══════════════════════════════════════════════════════════════
// OUTPUT FUNCTIONS
// ═══════════════════════════════════════════════════════════════

function showContent(html) {
    const div = document.createElement('div');
    div.className = 'output-line';
    div.innerHTML = html;
    outputArea.appendChild(div);
    scrollToBottom();
}

function appendLine(text, className = '') {
    const div = document.createElement('div');
    div.className = `output-line ${className}`;
    div.textContent = text;
    outputArea.appendChild(div);
    scrollToBottom();
}

function appendHTML(html, className = '') {
    const div = document.createElement('div');
    div.className = `output-line ${className}`;
    div.innerHTML = html;
    outputArea.appendChild(div);
    scrollToBottom();
}

function showCommand(cmd) {
    appendHTML(`<span class="dim">$</span> <span class="cmd-text">${cmd}</span>`, 'command');
}

function scrollToBottom() {
    // Use requestAnimationFrame for smooth scrolling
    requestAnimationFrame(() => {
        outputArea.scrollTop = outputArea.scrollHeight;
    });
}

function clearOutput() {
    outputArea.innerHTML = '';
}

function triggerGlitch() {
    glitchOverlay.classList.add('active');
    setTimeout(() => glitchOverlay.classList.remove('active'), 200);
}

// ═══════════════════════════════════════════════════════════════
// COMMAND PROCESSING
// ═══════════════════════════════════════════════════════════════

function processCommand(input) {
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    // Add to history
    commandHistory.push(cmd);
    historyIndex = commandHistory.length;

    // Show command
    showCommand(cmd);
    triggerGlitch();

    // Parse
    const parts = cmd.split(/\s+/);
    const command = parts[0];
    const args = parts.slice(1);

    switch (command) {
        case 'help':
        case '?':
            showContent(content.help);
            break;

        case 'ls':
        case 'dir':
            showContent(content.ls);
            break;

        case 'cd':
            handleCd(args[0]);
            break;

        case 'clear':
        case 'cls':
            clearOutput();
            break;

        case 'pwd':
            appendLine(currentPath);
            break;

        case 'whoami':
            appendLine('visitor@alien-sound-engineering');
            break;

        case 'date':
            appendLine(new Date().toLocaleString());
            break;

        case 'echo':
            appendLine(args.join(' '));
            break;

        case 'uname':
        case 'neofetch':
        case 'screenfetch':
            showContent(content.neofetch);
            break;

        case 'home':
        case 'welcome':
            currentPath = '/';
            showContent(content.welcome);
            break;

        case 'synth':
        case '.01synth':
            currentPath = '/synth';
            showContent(content.synth);
            break;

        case 'specs':
            showContent(content.specs);
            break;

        case 'tracks':
        case 'music':
            currentPath = '/tracks';
            showContent(content.tracks);
            break;

        case 'manifesto':
        case 'philosophy':
            currentPath = '/manifesto';
            showContent(content.manifesto);
            break;

        case 'matrix':
            runMatrixEffect();
            break;

        case 'ping':
            runPingEffect();
            break;

        case 'exit':
        case 'logout':
        case 'quit':
            appendLine('The signal never ends.', 'dim');
            break;

        case 'sudo':
            appendLine('Access denied. You are not root.', 'error');
            break;

        case 'rm':
        case 'delete':
            appendLine('Cannot delete the signal.', 'error');
            break;

        case 'cat':
            handleCat(args[0]);
            break;

        default:
            appendLine(`Command not found: ${command}`, 'error');
            appendLine("Type 'help' for available commands.", 'dim');
    }
}

function handleCd(dir) {
    if (!dir || dir === '~' || dir === '/') {
        currentPath = '/';
        showContent(content.welcome);
        return;
    }

    const target = dir.replace(/^\//, '').replace(/\/$/, '');

    switch (target) {
        case 'synth':
        case '.01synth':
            currentPath = '/synth';
            showContent(content.synth);
            break;
        case 'tracks':
            currentPath = '/tracks';
            showContent(content.tracks);
            break;
        case 'manifesto':
            currentPath = '/manifesto';
            showContent(content.manifesto);
            break;
        case '..':
            currentPath = '/';
            showContent(content.welcome);
            break;
        default:
            appendLine(`Directory not found: ${dir}`, 'error');
    }
}

function handleCat(file) {
    if (!file) {
        appendLine('Usage: cat <filename>', 'error');
        return;
    }

    const name = file.replace(/\.txt$/, '').toLowerCase();

    if (name === 'specs' || name === 'specifications') {
        showContent(content.specs);
    } else if (name === 'synth' || name === '.01synth') {
        showContent(content.synth);
    } else if (name === 'tracks' || name === 'releases') {
        showContent(content.tracks);
    } else if (name === 'manifesto' || name === 'philosophy') {
        showContent(content.manifesto);
    } else {
        appendLine(`File not found: ${file}`, 'error');
    }
}

// ═══════════════════════════════════════════════════════════════
// SPECIAL EFFECTS
// ═══════════════════════════════════════════════════════════════

function runMatrixEffect() {
    appendLine('Initiating matrix protocol...', 'success');
    const chars = 'アイウエオカキクケコ0123456789';
    let count = 0;

    const interval = setInterval(() => {
        let line = '';
        const width = Math.min(40, Math.floor(window.innerWidth / 12));
        for (let i = 0; i < width; i++) {
            line += chars[Math.floor(Math.random() * chars.length)];
        }
        appendHTML(`<span style="color:#0f0;opacity:${0.3 + Math.random() * 0.7}">${line}</span>`);
        count++;
        if (count > 10) {
            clearInterval(interval);
            appendLine('Matrix terminated.', 'success');
        }
    }, 80);
}

function runPingEffect() {
    appendLine('Pinging signal.ase.underground...', 'dim');
    let count = 0;

    const interval = setInterval(() => {
        const time = Math.floor(Math.random() * 15) + 1;
        appendLine(`Reply from signal.ase: time=${time}ms`, 'success');
        count++;
        if (count >= 4) {
            clearInterval(interval);
            appendLine('4 packets sent, 4 received, 0% loss', 'dim');
        }
    }, 400);
}

// ═══════════════════════════════════════════════════════════════
// INPUT HANDLING
// ═══════════════════════════════════════════════════════════════

commandInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const value = commandInput.value;
        commandInput.value = '';
        processCommand(value);
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (historyIndex > 0) {
            historyIndex--;
            commandInput.value = commandHistory[historyIndex] || '';
        }
    } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex < commandHistory.length - 1) {
            historyIndex++;
            commandInput.value = commandHistory[historyIndex] || '';
        } else {
            historyIndex = commandHistory.length;
            commandInput.value = '';
        }
    } else if (e.key === 'Tab') {
        e.preventDefault();
        autocomplete();
    }
});

function autocomplete() {
    const val = commandInput.value.toLowerCase();
    const commands = ['help', 'ls', 'cd', 'clear', 'pwd', 'whoami', 'neofetch',
                     'home', 'synth', 'tracks', 'manifesto', 'specs', 'matrix', 'ping'];
    const match = commands.find(c => c.startsWith(val));
    if (match) commandInput.value = match;
}

// ═══════════════════════════════════════════════════════════════
// MENU HANDLING
// ═══════════════════════════════════════════════════════════════

menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    menuToggle.classList.toggle('active');
    menuItems.classList.toggle('active');
});

document.querySelectorAll('.menu-items a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const section = e.target.dataset.section;

        // Close menu
        menuToggle.classList.remove('active');
        menuItems.classList.remove('active');

        // Navigate
        triggerGlitch();
        showCommand(section);

        switch (section) {
            case 'home':
                currentPath = '/';
                showContent(content.welcome);
                break;
            case 'synth':
                currentPath = '/synth';
                showContent(content.synth);
                break;
            case 'tracks':
                currentPath = '/tracks';
                showContent(content.tracks);
                break;
            case 'manifesto':
                currentPath = '/manifesto';
                showContent(content.manifesto);
                break;
        }

        commandInput.focus();
    });
});

// Close menu on outside click
document.addEventListener('click', (e) => {
    if (!e.target.closest('.floating-menu')) {
        menuToggle.classList.remove('active');
        menuItems.classList.remove('active');
    }
});

// ═══════════════════════════════════════════════════════════════
// FOCUS MANAGEMENT
// ═══════════════════════════════════════════════════════════════

// Focus input on any key press
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        menuToggle.classList.remove('active');
        menuItems.classList.remove('active');
        commandInput.focus();
        return;
    }

    // Focus input for printable chars
    if (!e.ctrlKey && !e.altKey && !e.metaKey &&
        e.key.length === 1 &&
        document.activeElement !== commandInput) {
        commandInput.focus();
    }
});

// Click to focus (desktop)
outputArea.addEventListener('click', () => {
    commandInput.focus();
});

// ═══════════════════════════════════════════════════════════════
// MOBILE HANDLING
// ═══════════════════════════════════════════════════════════════

// Handle mobile keyboard
function handleResize() {
    // Scroll to bottom when keyboard appears
    setTimeout(scrollToBottom, 100);
}

window.addEventListener('resize', handleResize);

// Handle visual viewport for mobile keyboards
if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', () => {
        scrollToBottom();
    });
}

// Prevent pull-to-refresh on mobile
document.body.addEventListener('touchmove', (e) => {
    if (e.target === document.body) {
        e.preventDefault();
    }
}, { passive: false });

// ═══════════════════════════════════════════════════════════════
// INITIALIZATION
// ═══════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
    runBootSequence();
});
