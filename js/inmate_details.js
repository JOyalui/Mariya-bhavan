const inmatesData = {
    "John Doe": { age: 65, condition: "Diabetes", admission: "2023-10-15", form: "medical_forms/john_doe.pdf" },
    "Jane Smith": { age: 72, condition: "Hypertension", admission: "2022-05-20", form: "medical_forms/jane_smith.pdf" }
};

// Get URL parameter
const urlParams = new URLSearchParams(window.location.search);
const inmateName = urlParams.get("name");

// Load inmate data dynamically
if (inmateName && inmatesData[inmateName]) {
    document.getElementById("inmateName").textContent = inmateName;
    document.getElementById("inmateAge").textContent = inmatesData[inmateName].age;
    document.getElementById("inmateCondition").textContent = inmatesData[inmateName].condition;
    document.getElementById("inmateAdmission").textContent = inmatesData[inmateName].admission;
    document.getElementById("medicalForm").src = inmatesData[inmateName].form;
} else {
    document.body.innerHTML = "<h2>Inmate Not Found</h2>";
}   