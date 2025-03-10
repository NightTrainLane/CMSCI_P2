var toggleBtn = document.querySelector('.toggleBtn'); 
var iframeContainer = document.getElementById('iframeContainer'); 
let isVisible = false;

toggleBtn.addEventListener('click', function () {
    if (isVisible) {
        // Hide the heatmap and show the static content
        iframeContainer.innerHTML = ``;
        toggleBtn.textContent = "Toggle Heatmap"; // Reset button text
        isVisible = false;
    } else {
        // Show the heatmap
        iframeContainer.innerHTML = `
            <iframe src="https://nahmad0.shinyapps.io/heatmap/" width="100%" height="600" frameborder="0"></iframe>
        `;
        toggleBtn.textContent = "Toggle off Heatmap"; // Change button text
        isVisible = true;
    }
});
