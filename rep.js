// Chart Initialization
document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("report-chart").getContext("2d");

    // Create the Chart
    const reportChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["January", "February", "March", "April", "May"],
            datasets: [
                {
                    label: "Bookings",
                    data: [12, 19, 3, 5, 2],
                    backgroundColor: "rgba(255, 0, 0, 0.6)",
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });

    // Download Report as Image
    document.getElementById("download-report").addEventListener("click", () => {
        const link = document.createElement("a");
        link.download = "report.png";
        link.href = document.getElementById("report-chart").toDataURL("image/png");
        link.click();
    });

    // Print Report
    document.getElementById("print-report").addEventListener("click", () => {
        const canvas = document.getElementById("report-chart");
        const win = window.open("", "_blank");
        win.document.write(`<img src="${canvas.toDataURL("image/png")}" alt="Report Chart">`);
        win.document.close();
        win.focus();
        win.print();
        win.close();
    });

    // Share via Email Modal
    const emailModal = document.getElementById("email-modal");
    const shareReportBtn = document.getElementById("share-report");
    const cancelEmailBtn = document.getElementById("cancel-email");
    const emailForm = document.getElementById("email-form");

    shareReportBtn.addEventListener("click", () => {
        emailModal.style.display = "block";
    });

    cancelEmailBtn.addEventListener("click", () => {
        emailModal.style.display = "none";
    });

    emailForm.addEventListener("submit", e => {
        e.preventDefault();
        const recipientEmail = document.getElementById("recipient-email").value;

        alert(`Report shared successfully with ${recipientEmail}`);
        emailModal.style.display = "none";

        // Simulated Email Sending
        console.log(`Email sent to: ${recipientEmail}`);
    });
});

