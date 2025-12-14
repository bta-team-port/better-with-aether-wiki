document.addEventListener("DOMContentLoaded", function () {
    const element = document.getElementById('last-updated');
    if (!element) return;

    const lastModified = new Date(document.lastModified);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    element.textContent = lastModified.toLocaleDateString(undefined, options);
});