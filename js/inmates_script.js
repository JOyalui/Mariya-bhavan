document.addEventListener("DOMContentLoaded", function () {
    const inmateList = document.getElementById("inmateList");
    const searchInput = document.getElementById("search");
    const toggleViewBtn = document.getElementById("toggleView");
    const inmateModal = document.getElementById("inmateModal");
    const inmateFileBtn = document.getElementById("inmateFileBtn");

    // Restore Scroll Position
    if (localStorage.getItem("scrollPosition")) {
        setTimeout(() => {
            window.scrollTo(0, localStorage.getItem("scrollPosition"));
        }, 100);
    }

    // Restore Search Input
    if (localStorage.getItem("searchQuery")) {
        searchInput.value = localStorage.getItem("searchQuery");
        filterInmates(searchInput.value);
    }

    // Restore View Mode
    const savedView = localStorage.getItem("viewMode") || "grid-view";
    inmateList.classList.add(savedView);

    // Save Scroll Position on Scroll
    window.addEventListener("scroll", function () {
        localStorage.setItem("scrollPosition", window.scrollY);
    });

    // Save Search Query on Input
    searchInput.addEventListener("input", function () {
        localStorage.setItem("searchQuery", searchInput.value);
        filterInmates(searchInput.value);
    });

    // Toggle View Mode (Grid <--> List) & Save State
    toggleViewBtn.addEventListener("click", function () {
        if (inmateList.classList.contains("grid-view")) {
            inmateList.classList.remove("grid-view");
            inmateList.classList.add("list-view");
            localStorage.setItem("viewMode", "list-view");
        } else {
            inmateList.classList.remove("list-view");
            inmateList.classList.add("grid-view");
            localStorage.setItem("viewMode", "grid-view");
        }
    });

    // Filter Inmates Based on Search Input
    function filterInmates(query) {
        const inmates = document.querySelectorAll(".inmate-card");
        inmates.forEach(inmate => {
            const name = inmate.querySelector("h3").innerText.toLowerCase();
            if (name.includes(query.toLowerCase())) {
                inmate.style.display = "flex"; // Fix for list view alignment
            } else {
                inmate.style.display = "none";
            }
        });
    }

    // ✅ OPEN INMATE MODAL FUNCTION (FIXED)
    window.showDetails = function(name, age, condition, date) {
        console.log("Opening modal for:", name); // Debugging log

        document.getElementById("inmateName").innerText = name;
        document.getElementById("inmateAge").innerText = age;
        document.getElementById("inmateCondition").innerText = condition;
        document.getElementById("inmateAdmission").innerText = date;

        inmateFileBtn.href = `inmate_details.html?name=${name}`; // Ensure file button works

        inmateModal.style.display = "flex";  
        setTimeout(() => {
            inmateModal.classList.add("show");  // Add animation class after slight delay
        }, 10);
    };

    // ✅ CLOSE MODAL FUNCTION (FIXED)
    window.closeModal = function(event) {
        if (!event || event.target === inmateModal || event.target.classList.contains("close-btn")) {
            inmateModal.classList.remove("show");

            setTimeout(() => {
                inmateModal.style.display = "none";
            }, 300);  // Match transition duration
        }
    };

    // ✅ ATTACH EVENT LISTENERS TO ALL INMATE CARDS
    document.querySelectorAll(".inmate-card").forEach(card => {
        card.addEventListener("click", function() {
            const name = this.querySelector("h3").innerText;
            const age = this.dataset.age || "Unknown";
            const condition = this.dataset.condition || "Unknown";
            const date = this.dataset.date || "Unknown";
            showDetails(name, age, condition, date);
        });
    });

    // ✅ ENSURE CLICKING OUTSIDE MODAL CLOSES IT
    inmateModal.addEventListener("click", function(event) {
        if (event.target === inmateModal) {
            closeModal();
        }
    });
});
