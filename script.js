/* ============================================
   MENU DATA
   Catatan: kategori Mie dipecah menjadi
   "Mie Kecil", "Mie Lebar", "Mie Yamin" agar
   masing-masing bisa punya switch kategori
   sendiri (sinkron dengan tampilan user).
============================================ */
var menuItems = [
    {name:"Paket A (Bubur Biasa + Minuman)",category:"Paket",isWeekend:false},
    {name:"Paket B (Bubur Telur + Pangsit Goreng)",category:"Paket",isWeekend:false},
    {name:"Paket C (Mie Kecil Komplit + Pangsit Goreng)",category:"Paket",isWeekend:false},
    {name:"Paket D (Mie Lebar Komplit + Pangsit Goreng)",category:"Paket",isWeekend:false},
    {name:"Paket E (Kwetiau Komplit + Pangsit Goreng)",category:"Paket",isWeekend:false},
    {name:"Paket F (Bihun Komplit + Pangsit Goreng)",category:"Paket",isWeekend:false},
    {name:"Bubur Ayam Biasa",category:"Bubur",isWeekend:false},
    {name:"Bubur + Telur Ayam Kampung",category:"Bubur",isWeekend:false},
    {name:"Bubur Polos / Putih",category:"Bubur",isWeekend:false},
    {name:"Extra Merah Telur Ayam Kampung",category:"Topping",isWeekend:false},
    {name:"Extra Ayam Rebus",category:"Topping",isWeekend:false},
    {name:"Extra Cakwe Iris",category:"Topping",isWeekend:false},
    {name:"Mie Ayam Biasa (Kecil)",category:"Mie Kecil",isWeekend:false},
    {name:"Mie Ayam Baso (Kecil)",category:"Mie Kecil",isWeekend:false},
    {name:"Mie Ayam Pangsit Rebus (Kecil)",category:"Mie Kecil",isWeekend:false},
    {name:"Mie Ayam Komplit (Kecil)",category:"Mie Kecil",isWeekend:false},
    {name:"Mie Ayam Biasa (Lebar)",category:"Mie Lebar",isWeekend:false},
    {name:"Mie Ayam Baso (Lebar)",category:"Mie Lebar",isWeekend:false},
    {name:"Mie Ayam Pangsit Rebus (Lebar)",category:"Mie Lebar",isWeekend:false},
    {name:"Mie Ayam Komplit (Lebar)",category:"Mie Lebar",isWeekend:false},
    {name:"Mie Yamin Biasa",category:"Mie Yamin",isWeekend:false},
    {name:"Mie Yamin Baso",category:"Mie Yamin",isWeekend:false},
    {name:"Mie Yamin Pangsit Rebus",category:"Mie Yamin",isWeekend:false},
    {name:"Mie Yamin Komplit",category:"Mie Yamin",isWeekend:false},
    {name:"Kwetiau Ayam Biasa",category:"Kwetiau",isWeekend:false},
    {name:"Kwetiau Baso",category:"Kwetiau",isWeekend:false},
    {name:"Kwetiau Pangsit Rebus",category:"Kwetiau",isWeekend:false},
    {name:"Kwetiau Komplit",category:"Kwetiau",isWeekend:false},
    {name:"Bihun Ayam Biasa",category:"Bihun",isWeekend:false},
    {name:"Bihun Baso",category:"Bihun",isWeekend:false},
    {name:"Bihun Pangsit Rebus",category:"Bihun",isWeekend:false},
    {name:"Bihun Komplit",category:"Bihun",isWeekend:false},
    {name:"Pangsit Rebus Ayam (5 Pcs)",category:"Baso",isWeekend:false},
    {name:"Baso Sapi (5 Pcs)",category:"Baso",isWeekend:false},
    {name:"Baso Ayam Sawi (5 Pcs)",category:"Baso",isWeekend:false},
    {name:"Baso Ayam Sawi & Sapi (5 Pcs)",category:"Baso",isWeekend:false},
    {name:"Baso Ayam Sawi & Pangsit Rebus (5 Pcs)",category:"Baso",isWeekend:false},
    {name:"Nasi Uduk + Ayam Goreng",category:"Nasi Uduk",isWeekend:true},
    {name:"Ayam Goreng",category:"Nasi Uduk",isWeekend:true},
    {name:"Nasi Uduk Polos",category:"Nasi Uduk",isWeekend:true},
    {name:"Nasi Uduk + Telur Dadar",category:"Nasi Uduk",isWeekend:true},
    {name:"Nasi Uduk + Telur Ceplok Balado",category:"Nasi Uduk",isWeekend:true},
    {name:"Sate Ayam Manis (3 Pcs)",category:"Sate",isWeekend:false},
    {name:"Sate Ayam Manis (5 Pcs)",category:"Sate",isWeekend:false},
    {name:"Sate Ayam Manis (10 Pcs)",category:"Sate",isWeekend:false},
    {name:"Bubur Kacang Ijo",category:"Bubur Manis",isWeekend:false},
    {name:"Bubur Ketan Item",category:"Bubur Manis",isWeekend:false},
    {name:"Bubur Mix",category:"Bubur Manis",isWeekend:false},
    {name:"Kacang Ijo Crispy",category:"Bubur Manis",isWeekend:false},
    {name:"Ketan Item Crispy",category:"Bubur Manis",isWeekend:false},
    {name:"Mix Crispy",category:"Bubur Manis",isWeekend:false},
    {name:"Dimsum Ayam Isi 3",category:"Dimsum",isWeekend:false},
    {name:"Dimsum Ayam Isi 5",category:"Dimsum",isWeekend:false},
    {name:"Dimsum Ayam Isi 10",category:"Dimsum",isWeekend:false},
    {name:"Dimsum Ayam Frozen Isi 15",category:"Dimsum",isWeekend:false},
    {name:"Cakwe Goreng",category:"Gorengan",isWeekend:false},
    {name:"Pangsit Goreng Isi Ayam (5 Pcs)",category:"Gorengan",isWeekend:false},
    {name:"Kulit Pangsit (3 Pcs)",category:"Gorengan",isWeekend:false},
    {name:"Kulit Pangsit Basah (10 Pcs)",category:"Gorengan",isWeekend:false},
    {name:"Sate Ati",category:"Jajanan",isWeekend:false},
    {name:"Sate Ampela",category:"Jajanan",isWeekend:false},
    {name:"Sate Usus",category:"Jajanan",isWeekend:false},
    {name:"Sate Telur Puyuh",category:"Jajanan",isWeekend:false},
    {name:"Sate Jantung",category:"Jajanan",isWeekend:false},
    {name:"Sate Jendil",category:"Jajanan",isWeekend:false},
    {name:"Kopi O",category:"Kopi",isWeekend:false},
    {name:"Kopi O + Gula",category:"Kopi",isWeekend:false},
    {name:"Kopi O + Susu",category:"Kopi",isWeekend:false},
    {name:"Kopi O + 2 Egg",category:"Kopi",isWeekend:false},
    {name:"Kopi O + 4 Egg",category:"Kopi",isWeekend:false},
    {name:"Telur Rebus",category:"Minuman",isWeekend:false},
    {name:"Sari Kacang Ijo",category:"Minuman",isWeekend:false},
    {name:"Susu Kacang Kedelai",category:"Minuman",isWeekend:false},
    {name:"Thai Tea",category:"Minuman",isWeekend:false},
    {name:"Koffie Susu GRace",category:"Minuman",isWeekend:false},
    {name:"Koffie Latte GRace",category:"Minuman",isWeekend:false},
    {name:"Jeruk Murni",category:"Minuman",isWeekend:false},
    {name:"Es Teh Tawar",category:"Minuman",isWeekend:false},
    {name:"Es Teh Manis",category:"Minuman",isWeekend:false},
    {name:"Teh Tawar Panas",category:"Minuman",isWeekend:false},
    {name:"Teh Manis Panas",category:"Minuman",isWeekend:false},
    {name:"Aqua Botol",category:"Minuman",isWeekend:false},
    {name:"S-tee",category:"Minuman",isWeekend:false},
    {name:"Extra Es Batu",category:"Minuman",isWeekend:false}
];

/* ============================================
   CATEGORY SWITCH CONFIG
   Key HARUS sama persis dengan CAT_SWITCH_MAP
   di file tampilan user (index.html), supaya
   admin panel benar-benar tersambung.
============================================ */
var CAT_SWITCH_CONFIG = [
    { key:"bubur",    label:"Bubur Ayam", sub:"Bubur Ayam & Topping (bukan Bubur Manis)", icon:"fa-bowl-food", categories:["Bubur","Topping"], tab:"daily" },
    { key:"mieKecil", label:"Mie Kecil",  sub:"Mie Ayam Kecil",   icon:"fa-utensils",  categories:["Mie Kecil"], tab:"daily" },
    { key:"mieLebar", label:"Mie Lebar",  sub:"Mie Ayam Lebar",   icon:"fa-utensils",  categories:["Mie Lebar"], tab:"daily" },
    { key:"mieYamin", label:"Mie Yamin",  sub:"Mie Yamin",        icon:"fa-utensils",  categories:["Mie Yamin"], tab:"daily" },
    { key:"kwetiau",  label:"Kwetiau",    sub:"Kwetiau Ayam",     icon:"fa-bowl-rice", categories:["Kwetiau"], tab:"daily" },
    { key:"bihun",    label:"Bihun",      sub:"Bihun Ayam",       icon:"fa-bowl-rice", categories:["Bihun"], tab:"daily" },
    { key:"baso",     label:"Baso",       sub:"Baso & Pangsit",   icon:"fa-circle-dot", categories:["Baso"], tab:"daily" },
    { key:"nasiUduk", label:"Nasi Uduk",  sub:"Menu Weekend",     icon:"fa-plate-wheat", categories:["Nasi Uduk"], tab:"weekend" }
];

/* ============================================
   STATE
============================================ */
var db = null;
var firebaseReady = false;
var storeMode = 'auto';
var scheduleData = null;
var stockData = {};
var weekendStockData = {};
var categorySwitches = { bubur: true, mieKecil: true, mieLebar: true, mieYamin: true, kwetiau: true, bihun: true, baso: true, nasiUduk: true };
var allOrders = {};

var DAYS = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

var DEFAULT_SCHED = {
    0: { isOpen: true, open: '06:00', close: '12:00' },
    1: { isOpen: false, open: '', close: '' },
    2: { isOpen: true, open: '06:00', close: '12:00' },
    3: { isOpen: true, open: '06:00', close: '12:00' },
    4: { isOpen: true, open: '06:00', close: '12:00' },
    5: { isOpen: true, open: '06:00', close: '12:00' },
    6: { isOpen: true, open: '06:00', close: '12:00' }
};

var firebaseConfig = {
    apiKey: "AIzaSyCj__JH5w__RdSEqtR59Cr7ctEOyl6lzUg",
    authDomain: "buburgrace.firebaseapp.com",
    databaseURL: "https://buburgrace-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "buburgrace"
};

/* ============================================
   UTILITY
============================================ */
function fmtRp(n) {
    return 'Rp ' + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function showToast(msg) {
    var t = document.getElementById('toast');
    t.textContent = msg;
    t.className = 'show';
    clearTimeout(t._timer);
    t._timer = setTimeout(function() { t.className = ''; }, 2500);
}

function parseTime(str) {
    if (!str || str.indexOf(':') === -1) return null;
    var p = str.split(':');
    return parseInt(p[0]) * 60 + parseInt(p[1]);
}

function fmtDate(ts) {
    var d = new Date(ts);
    return d.toLocaleDateString('id-ID', { day:'2-digit', month:'short', year:'numeric' }) + ' ' + d.toLocaleTimeString('id-ID', { hour:'2-digit', minute:'2-digit' });
}

/* Kunci tanggal untuk statistik harian — HARUS identik dengan
   cara tampilan user menyimpan (new Date().toISOString().slice(0,10)),
   supaya admin panel membaca node yang benar. */
function getTodayKey() {
    return new Date().toISOString().slice(0, 10);
}

/* Label nama pemesan — data pesanan menyimpan field "meja" atau "nama",
   BUKAN "customerName" (itu bug lama yang menyebabkan Dashboard selalu
   menampilkan "Pelanggan" generik). */
function getOrderLabel(o) {
    if (o.meja) return 'Meja ' + o.meja;
    if (o.nama) return o.nama;
    return 'Pelanggan';
}

/* Label tipe pesanan dihitung dari status tiap item (dine/away),
   menggantikan field "paymentMethod" lama yang sebenarnya tidak
   pernah disimpan oleh tampilan user. */
function getOrderModeLabel(o) {
    if (!o.items || !o.items.length) return '-';
    var hasDine = false, hasAway = false;
    o.items.forEach(function(it) {
        if (it.status === 'away') hasAway = true; else hasDine = true;
    });
    if (hasDine && hasAway) return 'Campur';
    if (hasAway) return 'Bawa Pulang';
    return 'Dine In';
}

/* ============================================
   LOGIN
============================================ */
var ADMIN_PASSWORD = 'buburgrace123';
var loginInput = document.getElementById('adminPassword');
var loginBtn = document.getElementById('btnLogin');
var loginError = document.getElementById('loginError');

function doLogin() {
    var val = loginInput.value.trim();
    if (val === ADMIN_PASSWORD) {
        loginError.innerHTML = '&nbsp;';
        loginBtn.disabled = true;
        loginBtn.textContent = 'MENGHUBUNGKAN...';
        var loginScreen = document.getElementById('loginScreen');
        var dashScreen = document.getElementById('dashboardScreen');
        var loadingOverlay = document.getElementById('loadingOverlay');
        loginScreen.style.opacity = '0';
        setTimeout(function() {
            loginScreen.style.display = 'none';
            dashScreen.style.display = 'flex';
            loadingOverlay.classList.add('show');
            try { initFirebase(); } catch (err) {
                console.error('Init Firebase error:', err);
                loadingOverlay.classList.remove('show');
                showError('Gagal inisialisasi Firebase.', err.message || String(err));
            }
        }, 500);
    } else {
        loginError.textContent = 'Password Salah! Coba lagi.';
        loginInput.value = '';
        loginInput.focus();
    }
}

loginBtn.addEventListener('click', function(e) { e.preventDefault(); doLogin(); });
loginInput.addEventListener('keydown', function(e) { if (e.key === 'Enter') { e.preventDefault(); doLogin(); } });
loginInput.addEventListener('input', function() { loginError.innerHTML = '&nbsp;'; });
document.getElementById('btnLogout').addEventListener('click', function() { location.reload(); });

/* ============================================
   TAB SWITCHING
============================================ */
document.getElementById('navTabs').addEventListener('click', function(e) {
    var tab = e.target.closest('.nav-tab');
    if (!tab) return;
    var name = tab.getAttribute('data-tab');
    if (!name) return;
    document.querySelectorAll('.tab-content').forEach(function(t) { t.style.display = 'none'; });
    document.querySelectorAll('.nav-tab').forEach(function(t) { t.classList.remove('active'); });
    tab.classList.add('active');
    var el = document.getElementById('tab-' + name);
    if (el) el.style.display = '';
});

/* ============================================
   FIREBASE INIT
============================================ */
function initFirebase() {
    var errorPanel = document.getElementById('errorPanel');
    var loadingOverlay = document.getElementById('loadingOverlay');
    errorPanel.classList.remove('show');
    if (typeof firebase === 'undefined') {
        loadingOverlay.classList.remove('show');
        showError('Firebase SDK tidak berhasil dimuat.', 'Pastikan ada koneksi internet dan coba reload halaman.');
        return;
    }
    try {
        var existing = firebase.apps.find(function(a) { return a.name === '[DEFAULT]'; });
        if (existing) { db = existing.database(); testConnection(); return; }
    } catch (e) {}
    try { firebase.initializeApp(firebaseConfig); } catch (e) {
        loadingOverlay.classList.remove('show');
        showError('Gagal inisialisasi Firebase App.', e.message || String(e));
        return;
    }
    try { db = firebase.database(); testConnection(); } catch (e) {
        loadingOverlay.classList.remove('show');
        showError('Gagal membuat koneksi database.', e.message || String(e));
    }
}

/* ============================================
   TEST CONNECTION
============================================ */
function testConnection() {
    var errorPanel = document.getElementById('errorPanel');
    var errorDetail = document.getElementById('errorDetail');
    var retryBtn = document.getElementById('btnRetry');
    var loadingOverlay = document.getElementById('loadingOverlay');
    errorDetail.textContent = 'Sedang menghubungkan ke Firebase...';
    errorPanel.classList.add('show');
    retryBtn.disabled = true;
    retryBtn.innerHTML = '<span class="spinner-icon"><i class="fa-solid fa-spinner fa-spin"></i></span><i class="fa-solid fa-rotate-right"></i> Menghubungkan...';
    var timeout = setTimeout(function() {
        retryBtn.disabled = false;
        retryBtn.innerHTML = '<i class="fa-solid fa-rotate-right"></i> Coba Lagi';
        loadingOverlay.classList.remove('show');
        showError('Timeout — Firebase tidak merespons dalam 10 detik.', 'Kemungkinan:\n1. Koneksi internet lambat\n2. Firebase RTDB belum dibuat di Console\n3. Database URL salah\n\nURL: ' + firebaseConfig.databaseURL);
    }, 10000);
    var testRef = db.ref('bubur_grace/status');
    testRef.once('value', function(snapshot) {
        clearTimeout(timeout);
        retryBtn.disabled = false;
        retryBtn.innerHTML = '<i class="fa-solid fa-rotate-right"></i> Coba Lagi';
        firebaseReady = true;
        errorPanel.classList.remove('show');
        loadingOverlay.classList.remove('show');
        startListeners();
    }, function(error) {
        clearTimeout(timeout);
        retryBtn.disabled = false;
        retryBtn.innerHTML = '<i class="fa-solid fa-rotate-right"></i> Coba Lagi';
        loadingOverlay.classList.remove('show');
        var errorCode = error.code || '';
        var errorMessage = error.message || String(error);
        console.error('[Firebase Error]', errorCode, errorMessage);
        if (errorCode.indexOf('permission') !== -1) {
            showError('AKSES DITOLAK — Firebase Rules belum diatur!', 'SOLUSI:\n\n1. Buka console.firebase.google.com\n2. Pilih project "buburgrace"\n3. Klik "Realtime Database"\n4. Klik tab "Rules"\n5. Ganti isi rules dengan:\n\n{\n  "rules": {\n    "bubur_grace": {\n      ".read": true,\n      ".write": true\n    }\n  }\n}\n\n6. Klik "Publish"\n7. Kembali ke sini, klik "Coba Lagi"\n\nError: ' + errorMessage);
        } else {
            showError('Gagal terhubung ke Firebase.', 'Error: ' + errorCode + '\n' + errorMessage + '\n\nURL: ' + firebaseConfig.databaseURL + '\n\nPastikan:\n1. Internet aktif\n2. Realtime Database sudah dibuat di Firebase Console\n3. Rules sudah diatur');
        }
    });
}

function showError(title, detail) {
    document.getElementById('errorDetail').textContent = title + '\n\n' + (detail || '');
    document.getElementById('errorPanel').classList.add('show');
}

document.getElementById('btnRetry').addEventListener('click', function() {
    var btn = this;
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner-icon"><i class="fa-solid fa-spinner fa-spin"></i></span><i class="fa-solid fa-rotate-right"></i> Menghubungkan...';
    setTimeout(function() {
        btn.disabled = false;
        btn.innerHTML = '<i class="fa-solid fa-rotate-right"></i> Coba Lagi';
        if (!db) { initFirebase(); } else { testConnection(); }
    }, 1000);
});

/* ============================================
   MIGRATE OLD STOCK FORMAT
============================================ */
function migrateStock(path, callback) {
    if (!db) return;
    db.ref(path).once('value', function(snapshot) {
        var raw = snapshot.val() || {};
        var needsMigrate = false;
        for (var k in raw) { if (typeof raw[k] === 'number') { needsMigrate = true; break; } }
        if (needsMigrate) {
            var migrated = {};
            for (var k in raw) { migrated[k] = (typeof raw[k] === 'number') ? (raw[k] > 0) : !!raw[k]; }
            db.ref(path).set(migrated).then(function() { callback(migrated); });
        } else { callback(raw); }
    });
}

/* ============================================
   START ALL LISTENERS
============================================ */
function startListeners() {
    document.getElementById('errorPanel').classList.remove('show');
    document.getElementById('loadingOverlay').classList.remove('show');

    migrateStock('bubur_grace/stock', function(data) {
        stockData = {};
        for (var k in data) stockData[k] = !!data[k];
        renderDailyStock();
    });

    migrateStock('bubur_grace/weekendStock', function(data) {
        weekendStockData = {};
        for (var k in data) weekendStockData[k] = !!data[k];
        renderWeekendStock();
    });

    db.ref('bubur_grace/status').on('value', function(snapshot) {
        storeMode = snapshot.val() || 'auto';
        refreshModeUI();
        tickStatus();
    });

    db.ref('bubur_grace/config/schedule').on('value', function(snapshot) {
        var raw = snapshot.val();
        if (raw && typeof raw === 'object') {
            scheduleData = {};
            for (var i = 0; i < 7; i++) {
                var entry = raw[i] !== undefined ? raw[i] : (raw[String(i)] !== undefined ? raw[String(i)] : null);
                if (entry && typeof entry === 'object') {
                    scheduleData[i] = { isOpen: !!entry.isOpen, open: entry.open || '', close: entry.close || '' };
                } else {
                    scheduleData[i] = { isOpen: false, open: '', close: '' };
                }
            }
        } else {
            scheduleData = JSON.parse(JSON.stringify(DEFAULT_SCHED));
            db.ref('bubur_grace/config').set({ schedule: scheduleData });
        }
        renderScheduleUI(scheduleData);
        tickStatus();
    });

    db.ref('bubur_grace/stock').on('value', function(snapshot) {
        var raw = snapshot.val() || {};
        stockData = {};
        for (var k in raw) { var v = raw[k]; stockData[k] = (typeof v === 'number') ? (v > 0) : !!v; }
        renderDailyStock();
    });

    db.ref('bubur_grace/weekendStock').on('value', function(snapshot) {
        var raw = snapshot.val() || {};
        weekendStockData = {};
        for (var k in raw) { var v = raw[k]; weekendStockData[k] = (typeof v === 'number') ? (v > 0) : !!v; }
        renderWeekendStock();
    });

    db.ref('bubur_grace/categorySwitches').on('value', function(snapshot) {
        var raw = snapshot.val();
        if (raw && typeof raw === 'object') {
            for (var k in categorySwitches) { if (raw[k] !== undefined) categorySwitches[k] = !!raw[k]; }
        }
        renderCategorySwitches();
        renderDailyStock();
        renderWeekendStock();
    });

    /* FIX: statistik harian disimpan per-tanggal oleh tampilan user
       (bubur_grace/daily_stats/{tanggal}), jadi admin harus mendengarkan
       node tanggal hari ini, bukan seluruh node daily_stats. */
    db.ref('bubur_grace/daily_stats/' + getTodayKey()).on('value', function(snapshot) {
        var d = snapshot.val();
        document.getElementById('statOmset').innerText = d ? fmtRp(d.total || 0) : 'Rp 0';
        document.getElementById('statOrders').innerText = d ? (d.count || 0) : '0';
    });

    db.ref('bubur_grace/orders').limitToLast(100).on('value', function(snapshot) {
        allOrders = snapshot.val() || {};
        refreshActivity();
        refreshTopMenu();
        renderHistory();
    });

    renderCategorySwitches();
    renderDailyStock();
    renderWeekendStock();
}

/* ============================================
   RENDER: CATEGORY SWITCHES
============================================ */
function renderCategorySwitches() {
    CAT_SWITCH_CONFIG.forEach(function(cfg) {
        var gridId = cfg.tab === 'daily' ? 'dailyCatSwitchGrid' : 'weekendCatSwitchGrid';
        var grid = document.getElementById(gridId);
        if (!grid) return;
        var isOn = !!categorySwitches[cfg.key];
        var html = '<div class="cat-switch-item ' + (isOn ? 'is-on' : 'is-off') + '" data-sw-key="' + cfg.key + '">';
        html += '<div class="cat-switch-left"><div class="cat-switch-icon"><i class="fa-solid ' + cfg.icon + '"></i></div>';
        html += '<div><div class="cat-switch-name">' + cfg.label + '</div><div class="cat-switch-sub">' + cfg.sub + '</div></div></div>';
        html += '<label class="switch"><input type="checkbox" ' + (isOn ? 'checked' : '') + ' data-sw-key="' + cfg.key + '"><span class="slider"></span></label>';
        html += '</div>';
        grid.innerHTML = html;

        grid.querySelector('input[type="checkbox"]').addEventListener('change', function() {
            var key = this.getAttribute('data-sw-key');
            var val = this.checked;
            db.ref('bubur_grace/categorySwitches/' + key).set(val);
            categorySwitches[key] = val;
            renderCategorySwitches();
            renderDailyStock();
            renderWeekendStock();
        });
    });
}

/* ============================================
   RENDER: SCHEDULE UI
============================================ */
function renderScheduleUI(data) {
    if (!data) return;
    var container = document.getElementById('schedContainer');
    var todayIdx = new Date().getDay();
    var html = '';
    for (var i = 0; i < 7; i++) {
        var d = data[i] || { isOpen: false, open: '', close: '' };
        var isToday = (i === todayIdx);
        var rowClass = 'sched-row';
        if (isToday) rowClass += ' is-today';
        if (!d.isOpen) rowClass += ' is-closed-row';

        html += '<div class="' + rowClass + '">';
        html += '<div class="sched-day">' + DAYS[i] + '<span class="today-badge">HARI INI</span></div>';
        html += '<div class="sched-times' + (d.isOpen ? '' : ' tg-off') + '">';
        html += '<input type="time" class="sched-open" value="' + (d.open || '') + '" ' + (d.isOpen ? '' : 'disabled') + ' data-day="' + i + '">';
        html += '<span class="time-dash">—</span>';
        html += '<input type="time" class="sched-close" value="' + (d.close || '') + '" ' + (d.isOpen ? '' : 'disabled') + ' data-day="' + i + '">';
        html += '</div>';
        html += '<div class="sched-closed-text' + (d.isOpen ? '' : ' show') + '">Tutup</div>';
        html += '<div class="sched-sw">';
        html += '<label class="switch"><input type="checkbox" class="sched-toggle" ' + (d.isOpen ? 'checked' : '') + ' data-day="' + i + '"><span class="slider"></span></label>';
        html += '<span class="sw-label">' + (d.isOpen ? 'ON' : 'OFF') + '</span>';
        html += '</div>';
        html += '</div>';
    }
    container.innerHTML = html;

    container.querySelectorAll('.sched-toggle').forEach(function(toggle) {
        toggle.addEventListener('change', function() {
            var dayIdx = parseInt(this.getAttribute('data-day'));
            var row = this.closest('.sched-row');
            var timesDiv = row.querySelector('.sched-times');
            var closedText = row.querySelector('.sched-closed-text');
            var swLabel = row.querySelector('.sw-label');
            if (this.checked) {
                timesDiv.classList.remove('tg-off');
                timesDiv.querySelectorAll('input[type="time"]').forEach(function(inp) { inp.disabled = false; });
                closedText.classList.remove('show');
                row.classList.remove('is-closed-row');
                if (swLabel) swLabel.textContent = 'ON';
            } else {
                timesDiv.classList.add('tg-off');
                timesDiv.querySelectorAll('input[type="time"]').forEach(function(inp) { inp.disabled = true; });
                closedText.classList.add('show');
                row.classList.add('is-closed-row');
                if (swLabel) swLabel.textContent = 'OFF';
            }
        });
    });
}

/* ============================================
   SAVE SCHEDULE
============================================ */
document.getElementById('btnSaveSched').addEventListener('click', function() {
    if (!db || !scheduleData) return;
    var container = document.getElementById('schedContainer');
    var newSched = {};
    for (var i = 0; i < 7; i++) {
        var row = container.querySelectorAll('.sched-row')[i];
        var toggle = row.querySelector('.sched-toggle');
        var openInput = row.querySelector('.sched-open');
        var closeInput = row.querySelector('.sched-close');
        newSched[i] = {
            isOpen: toggle.checked,
            open: openInput.value,
            close: closeInput.value
        };
    }
    db.ref('bubur_grace/config/schedule').set(newSched).then(function() {
        showToast('Jadwal berhasil disimpan!');
    }).catch(function(err) {
        showToast('Gagal menyimpan: ' + err.message);
    });
});

/* ============================================
   STATUS TICK
============================================ */
function tickStatus() {
    if (!scheduleData) return;
    var now = new Date();
    var dayIdx = now.getDay();
    var minutes = now.getHours() * 60 + now.getMinutes();
    var sched = scheduleData[dayIdx] || { isOpen: false, open: '', close: '' };

    var status, detail;
    if (storeMode === 'open') {
        status = 'open'; detail = 'Mode darurat: DIPAKSA BUKA';
    } else if (storeMode === 'close') {
        status = 'closed'; detail = 'Mode darurat: DIPAKSA TUTUP';
    } else {
        if (!sched.isOpen) {
            status = 'closed'; detail = DAYS[dayIdx] + ' — Jadwal: Tutup';
        } else {
            var oT = parseTime(sched.open), cT = parseTime(sched.close);
            if (oT === null || cT === null) {
                status = 'closed'; detail = DAYS[dayIdx] + ' — Jam belum diatur';
            } else if (minutes < oT) {
                status = 'waiting'; detail = DAYS[dayIdx] + ' — Buka pukul ' + sched.open;
            } else if (minutes >= oT && minutes < cT) {
                status = 'open'; detail = DAYS[dayIdx] + ' — ' + sched.open + ' s/d ' + sched.close;
            } else {
                status = 'closed'; detail = DAYS[dayIdx] + ' — Sudah tutup sejak ' + sched.close;
            }
        }
    }

    var card = document.getElementById('liveCard');
    card.className = 'live-card card-' + status;

    var iconBox = document.getElementById('liveIcon');
    iconBox.className = 'live-icon-box ic-' + status;
    iconBox.innerHTML = status === 'open' ? '<i class="fa-solid fa-store"></i>' : status === 'waiting' ? '<i class="fa-solid fa-hourglass-half"></i>' : '<i class="fa-solid fa-store-slash"></i>';

    var statusText = document.getElementById('liveStatusText');
    statusText.className = 'live-status s-' + status;
    statusText.textContent = status === 'open' ? 'BUKA' : status === 'waiting' ? 'MENUNGGU JAM BUKA' : 'TUTUP';

    var dot = document.getElementById('liveDot');
    dot.className = 'live-dot d-' + status;

    document.getElementById('liveDetailText').textContent = detail;
}

setInterval(function() {
    var now = new Date();
    document.getElementById('liveClock').textContent = now.toLocaleTimeString('id-ID', { hour:'2-digit', minute:'2-digit', second:'2-digit' });
    tickStatus();
}, 1000);

/* ============================================
   OVERRIDE MODE UI
============================================ */
function refreshModeUI() {
    document.querySelectorAll('.mode-opt').forEach(function(opt) {
        var m = opt.getAttribute('data-mode');
        opt.className = 'mode-opt' + (m === storeMode ? ' sel-' + m : '');
    });
}

document.querySelectorAll('.mode-opt').forEach(function(opt) {
    opt.addEventListener('click', function() {
        if (!db) return;
        var mode = this.getAttribute('data-mode');
        var updates = {};
        updates['bubur_grace/status'] = mode;
        if (mode === 'open') {
            /* Saat Paksa Buka diaktifkan, otomatis nyalakan juga switch
               kategori Nasi Uduk supaya stok Nasi Uduk langsung terbuka
               tanpa perlu dinyalakan manual di tab Stok Weekend. */
            updates['bubur_grace/categorySwitches/nasiUduk'] = true;
        }
        db.ref().update(updates).then(function() {
            showToast('Mode diubah: ' + (mode === 'auto' ? 'Otomatis' : mode === 'open' ? 'Paksa Buka' : 'Paksa Tutup'));
        });
    });
});

/* ============================================
   RENDER: DAILY STOCK
============================================ */
function renderDailyStock() {
    var container = document.getElementById('dailyStockList');
    var searchVal = (document.getElementById('dailySearch').value || '').toLowerCase();
    var groups = {};
    menuItems.filter(function(m) { return !m.isWeekend; }).forEach(function(m) {
        if (searchVal && m.name.toLowerCase().indexOf(searchVal) === -1) return;
        if (!groups[m.category]) groups[m.category] = [];
        groups[m.category].push(m);
    });

    var html = '';
    var catOrder = ['Paket','Bubur','Topping','Mie Kecil','Mie Lebar','Mie Yamin','Kwetiau','Bihun','Baso','Sate','Bubur Manis','Dimsum','Gorengan','Jajanan','Kopi','Minuman'];
    catOrder.forEach(function(cat) {
        if (!groups[cat]) return;
        html += '<div class="stock-category-group"><div class="category-label">' + cat + '</div>';
        groups[cat].forEach(function(m) {
            var isOn = stockData[m.name] !== false;
            var isLocked = false;
            CAT_SWITCH_CONFIG.forEach(function(cfg) {
                if (cfg.tab === 'daily' && cfg.categories.indexOf(cat) !== -1 && !categorySwitches[cfg.key]) isLocked = true;
            });
            var cls = 'stock-item';
            if (isLocked) cls += ' is-disabled';
            else if (!isOn) cls += ' is-off';
            html += '<div class="' + cls + '">';
            html += '<div class="item-info"><h4>' + m.name + '</h4>';
            if (isLocked) html += '<span class="disabled-tag">Kategori OFF</span>';
            else if (!isOn) html += '<span class="off-tag">Habis</span>';
            html += '</div>';
            html += '<label class="switch"><input type="checkbox" ' + (isOn ? 'checked' : '') + ' ' + (isLocked ? 'disabled' : '') + ' data-stock-key="' + m.name + '" data-stock-tab="daily"><span class="slider"></span></label>';
            html += '</div>';
        });
        html += '</div>';
    });
    container.innerHTML = html || '<div style="text-align:center;padding:30px;color:#999;">Tidak ada menu ditemukan</div>';

    container.querySelectorAll('input[type="checkbox"][data-stock-tab="daily"]').forEach(function(cb) {
        cb.addEventListener('change', function() {
            if (this.disabled) return;
            var key = this.getAttribute('data-stock-key');
            stockData[key] = this.checked;
            db.ref('bubur_grace/stock/' + key).set(this.checked);
            renderDailyStock();
        });
    });
}

document.getElementById('dailySearch').addEventListener('input', function() { renderDailyStock(); });

/* ============================================
   RENDER: WEEKEND STOCK
============================================ */
function renderWeekendStock() {
    var container = document.getElementById('weekendStockList');
    var searchVal = (document.getElementById('weekendSearch').value || '').toLowerCase();
    var items = menuItems.filter(function(m) { return m.isWeekend; });
    if (searchVal) items = items.filter(function(m) { return m.name.toLowerCase().indexOf(searchVal) !== -1; });

    var html = '<div class="stock-category-group"><div class="category-label">Nasi Uduk</div>';
    items.forEach(function(m) {
        var isOn = weekendStockData[m.name] !== false;
        var isLocked = !categorySwitches['nasiUduk'];
        var cls = 'stock-item';
        if (isLocked) cls += ' is-disabled';
        else if (!isOn) cls += ' is-off';
        html += '<div class="' + cls + '">';
        html += '<div class="item-info"><h4>' + m.name + '</h4>';
        if (isLocked) html += '<span class="disabled-tag">Kategori OFF</span>';
        else if (!isOn) html += '<span class="off-tag">Habis</span>';
        html += '</div>';
        html += '<label class="switch"><input type="checkbox" ' + (isOn ? 'checked' : '') + ' ' + (isLocked ? 'disabled' : '') + ' data-stock-key="' + m.name + '" data-stock-tab="weekend"><span class="slider"></span></label>';
        html += '</div>';
    });
    html += '</div>';
    container.innerHTML = html || '<div style="text-align:center;padding:30px;color:#999;">Tidak ada menu ditemukan</div>';

    container.querySelectorAll('input[type="checkbox"][data-stock-tab="weekend"]').forEach(function(cb) {
        cb.addEventListener('change', function() {
            if (this.disabled) return;
            var key = this.getAttribute('data-stock-key');
            weekendStockData[key] = this.checked;
            db.ref('bubur_grace/weekendStock/' + key).set(this.checked);
            renderWeekendStock();
        });
    });
}

document.getElementById('weekendSearch').addEventListener('input', function() { renderWeekendStock(); });

/* ============================================
   REFRESH: ACTIVITY
============================================ */
function refreshActivity() {
    var list = document.getElementById('recentActivityList');
    var entries = [];
    for (var k in allOrders) {
        var o = allOrders[k];
        if (o && o.timestamp) entries.push(o);
    }
    entries.sort(function(a, b) { return (b.timestamp || 0) - (a.timestamp || 0); });
    entries = entries.slice(0, 15);

    if (entries.length === 0) {
        list.innerHTML = '<div style="text-align:center;padding:20px;color:#999;font-size:.9rem;">Belum ada aktivitas</div>';
        return;
    }
    var html = '';
    entries.forEach(function(o) {
        var timeStr = o.timestamp ? fmtDate(o.timestamp) : '-';
        var totalStr = o.total ? fmtRp(o.total) : '-';
        html += '<div class="activity-item"><strong>' + timeStr + '</strong> — ' + getOrderLabel(o) + ' <span style="float:right;color:var(--primary);font-weight:700;">' + totalStr + '</span></div>';
    });
    list.innerHTML = html;
}

/* ============================================
   REFRESH: TOP MENU
============================================ */
function refreshTopMenu() {
    var counts = {};
    for (var k in allOrders) {
        var o = allOrders[k];
        if (!o || !o.items) continue;
        o.items.forEach(function(it) {
            var name = it.name || it.menu || '';
            if (!name) return;
            counts[name] = (counts[name] || 0) + (it.qty || 1);
        });
    }
    var top = '-', topCount = 0;
    for (var n in counts) { if (counts[n] > topCount) { topCount = counts[n]; top = n; } }
    document.getElementById('statTop').textContent = topCount > 0 ? top + ' (' + topCount + 'x)' : '-';
}

/* ============================================
   RENDER: HISTORY
============================================ */
function renderHistory() {
    var container = document.getElementById('ordersList');
    var entries = [];
    for (var k in allOrders) {
        var o = allOrders[k];
        if (o && o.timestamp) entries.push({ id: k, data: o });
    }
    entries.sort(function(a, b) { return (b.data.timestamp || 0) - (a.data.timestamp || 0); });

    if (entries.length === 0) {
        container.innerHTML = '<div style="text-align:center;padding:30px;color:#999;">Belum ada riwayat pesanan</div>';
        return;
    }
    var html = '';
    entries.forEach(function(e) {
        var o = e.data;
        var timeStr = o.timestamp ? fmtDate(o.timestamp) : '-';
        var totalStr = o.total ? fmtRp(o.total) : '-';
        var itemsStr = '';
        if (o.items) {
            o.items.forEach(function(it) { itemsStr += (it.name || it.menu || '?') + ' x' + (it.qty || 1) + ', '; });
            itemsStr = itemsStr.slice(0, -2);
        }
        html += '<div class="order-card">';
        html += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;"><strong style="font-size:.85rem;">' + getOrderLabel(o) + '</strong><span style="font-size:.75rem;color:#999;">' + timeStr + '</span></div>';
        html += '<div style="font-size:.82rem;color:#555;margin-bottom:6px;">' + (itemsStr || '-') + '</div>';
        html += '<div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:.75rem;color:#999;">' + getOrderModeLabel(o) + '</span><strong style="color:var(--primary);font-size:.95rem;">' + totalStr + '</strong></div>';
        html += '</div>';
    });
    container.innerHTML = html;
}

/* ============================================
   EXPORT CSV
============================================ */
document.getElementById('btnExport').addEventListener('click', function() {
    var entries = [];
    for (var k in allOrders) {
        var o = allOrders[k];
        if (o && o.timestamp) entries.push(o);
    }
    entries.sort(function(a, b) { return (a.timestamp || 0) - (b.timestamp || 0); });
    if (entries.length === 0) { showToast('Tidak ada data untuk diexport'); return; }

    var csv = 'Tanggal,Waktu,Pelanggan,Menu,Total,Tipe Pesanan\n';
    entries.forEach(function(o) {
        var d = o.timestamp ? new Date(o.timestamp) : null;
        var dateStr = d ? d.toLocaleDateString('id-ID') : '';
        var timeStr = d ? d.toLocaleTimeString('id-ID', { hour:'2-digit', minute:'2-digit' }) : '';
        var itemsStr = '';
        if (o.items) o.items.forEach(function(it) { itemsStr += (it.name || it.menu || '') + ' x' + (it.qty || 1) + '; '; });
        itemsStr = itemsStr.slice(0, -2).replace(/,/g, ' ').replace(/"/g, '""');
        var name = getOrderLabel(o).replace(/,/g, ' ').replace(/"/g, '""');
        var mode = getOrderModeLabel(o).replace(/,/g, ' ');
        csv += dateStr + ',' + timeStr + ',"' + name + '","' + itemsStr + '",' + (o.total || 0) + ',' + mode + '\n';
    });

    var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'laporan_bubur_grace_' + new Date().toISOString().slice(0, 10) + '.csv';
    a.click();
    URL.revokeObjectURL(url);
    showToast('File CSV berhasil diunduh');
});

/* ============================================
   RESET STATS
============================================ */
document.getElementById('btnResetStats').addEventListener('click', function() {
    if (!db) return;
    if (!confirm('Reset omset hari ini dan bersihkan list order?')) return;
    /* FIX: hanya reset statistik hari ini, bukan seluruh riwayat
       daily_stats semua tanggal. */
    db.ref('bubur_grace/daily_stats/' + getTodayKey()).set({ total: 0, count: 0 });
    db.ref('bubur_grace/orders').remove();
    showToast('Data berhasil direset');
});

/* ============================================
   RECEIPT MODAL
============================================ */
document.getElementById('btnCloseReceipt').addEventListener('click', function() {
    document.getElementById('receiptModal').style.display = 'none';
});
document.getElementById('receiptModal').addEventListener('click', function(e) {
    if (e.target === this) this.style.display = 'none';
});