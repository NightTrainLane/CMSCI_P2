const toggleBtn = document.querySelector('.toggleBtn');
const contentArea = document.getElementById('contentArea');
let isVisible = false;

toggleBtn.addEventListener('click', function() {
    if (isVisible) {
        contentArea.innerHTML = ''; // Hide the heatmap
        isVisible = false;
    } else {
        contentArea.innerHTML = `
            <iframe src="https://nahmad0.shinyapps.io/heatmap/" width="100%" height="600" frameborder="0" onload ="<h1>Loading</h1>"></iframe>
        `; // Show the heatmap
        isVisible = true;
    }
});