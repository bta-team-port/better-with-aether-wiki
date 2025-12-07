function toggleTable(id) {
    const table = document.getElementById(id);
    if (table.style.display === "none") {
        table.style.display = "table";
    } else {
        table.style.display = "none";  
    }
}