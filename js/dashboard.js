document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("donationChart").getContext("2d");

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May"],
            datasets: [{
                label: "Donations (₹)",
                data: [5000, 8000, 12000, 15000, 20000],
                backgroundColor: "rgba(30, 155, 149, 0.7)"
            }]
        }
    });
});
