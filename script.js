var toggleBtn = document.querySelector('.toggleBtn'); 
var iframeContainer = document.getElementById('iframeContainer'); 
let isVisible = false;

toggleBtn.addEventListener('click', function () {
    if (isVisible) {
        // Hide the heatmap and show the static content
        iframeContainer.innerHTML = `
            <div class="heatmap-wrapper" id="heatmapWrapper">
                <div class="heatmapImg">
                    <img src="img/image.png" alt="No image found">
                </div>
                <div class="descriptionofHeatmap">
                    <div class="description">
                        <h2>Heatmap Project</h2>
                        <p>One of the awesome projects done in the Data Club was a heatmap using Shiny. 
                        Shiny is great for creating web apps. This heatmap visualization will allow you to 
                        upload real-time data trends using Shiny.io, like the picture. Toggle it on to explore!</p>
                    </div>
                </div>
            </div>
        `;
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
