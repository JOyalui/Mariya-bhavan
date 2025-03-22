document.getElementById("toggleView").addEventListener("click", function() {
    document.getElementById("inmateList").classList.toggle("grid-view");
    document.getElementById("inmateList").classList.toggle("list-view");
});

function showDetails(name, age, condition, date) {
    document.getElementById("inmateName").innerText = name;
    document.getElementById("inmateAge").innerText = age;
    document.getElementById("inmateCondition").innerText = condition;
    document.getElementById("inmateAdmission").innerText = date;
    document.getElementById("inmateModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("inmateModal").style.display = "none";
}
