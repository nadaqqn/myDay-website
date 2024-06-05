// Konten "Introspeksi dan Keberhasilan"
function simpanCatatan(num) {
    var textareaId = "catatan" + num;
    var catatan = document.getElementById(textareaId).value;
    var catatanTerakhirId = "catatan-terakhir" + num;
    localStorage.setItem(catatanTerakhirId, catatan);
    document.getElementById(catatanTerakhirId).textContent = "Catatan: " + catatan;
     // Mengosongkan textarea catatan setelah disimpan
    document.getElementById(textareaId).value = "";
    }

// Memuat saran
function simpanSaran() {
    var saran = document.getElementById("saran").value;
    localStorage.setItem("saran-terakhir", saran);
    document.getElementById("saran-terakhir").textContent = "Catatan / Saran: " + saran;
    // Mengosongkan textarea catatan setelah disimpan
    document.getElementById(saran).value = "";
}

// Menampilkan catatan terakhir saat halaman dimuat ulang
for (var i = 1; i <= 2; i++) {
    var catatanTerakhirId = "catatan-terakhir" + i;
    var textareaId = "catatan" + i;
    var catatanTerakhir = localStorage.getItem(catatanTerakhirId);
    if (catatanTerakhir) {
        document.getElementById(catatanTerakhirId).textContent = "Catatan: " + catatanTerakhir;
        document.getElementById(textareaId).value = catatanTerakhir;
    }
}

//menampilkan saran
var saranTerakhir = localStorage.getItem("saran-terakhir");
if (saranTerakhir) {
    document.getElementById("saran-terakhir").textContent = "Catatan/ Saran: " + saranTerakhir;
}

// Konten: Kebutuhan air harian
let gelas = document.querySelector(".glass");
let tinggiAir = 0;
let tinggiMax = 200; // Tinggi maksimum untuk elemen gelas
let biruAwal = 0; // Posisi awal warna biru

function minumAir() {
    tinggiAir += 25; // Menambah tinggi air saat tombol "Minum Air" ditekan
    if (tinggiAir >= tinggiMax) {
        tinggiAir = 0; // Kembali ke awal ketika sudah penuh
        biruAwal = 0; // Kembali ke posisi awal warna biru
    }

    let tinggiAirPersen = (tinggiAir / tinggiMax) * 100;
    let biru = biruAwal + 25; // Menambah warna biru sebesar 10px
    let transparansi = 100 - biru; // Menghitung transparansi
    let biruAtas = 100 - tinggiAirPersen; // Menghitung posisi atas warna biru
    gelas.style.background = `linear-gradient(transparent 0%, transparent ${transparansi}%, rgba(0, 240, 255, 0.5) ${biruAtas}%`;

    biruAwal += 25; // Menambah posisi awal warna biru sebesar 10px
}
function resetGelas() {
    tinggiAir = 0; // Mengatur tinggi air ke 0%
    biruAwal = 0; // Mengatur posisi awal warna biru ke 0
    naik = true; // Mengatur arah menjadi naik
    jumlahTombolMinumAir = 0; // Mengatur jumlah tombol minum air ke 0

    // Mengatur background ke transparan 100%
    gelas.style.background = `linear-gradient(transparent 0%, transparent 100%)`;
}


//KOnten: Tugas Harian
document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const taskItem = document.createElement("li");
            taskItem.innerHTML = `
                <input type="checkbox" class="completeTask">
                <span class="taskText">${taskText}</span>
                <button class="deleteTask">Hapus</button>
            `;
            taskList.appendChild(taskItem);
            taskInput.value = "";
            // Tambah notifikasi ketika tugas ditambahkan
            alert(`Tugas "${taskText}" telah ditambahkan!`);

            const deleteButton = taskItem.querySelector(".deleteTask");
            deleteButton.addEventListener("click", function () {
                taskList.removeChild(taskItem);
                // Tambah notifikasi ketika tugas dihapus
                alert(`Tugas "${taskText}" telah dihapus!`);
            });

            const completeCheckbox = taskItem.querySelector(".completeTask");
            completeCheckbox.addEventListener("change", function () {
                if (completeCheckbox.checked) {
                    taskItem.querySelector(".taskText").classList.add("complete");
                     // Tambah notifikasi ketika tugas selesai
                     alert(`Tugas "${taskText}" telah selesai!`);
                } else {
                    taskItem.querySelector(".taskText").classList.remove("complete");
                }
            });
        }
    });

    taskInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            addTaskButton.click();
        }
    });
});











