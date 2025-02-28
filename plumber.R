library(plumber)
library(shiny)

# Define the Plumber API
pr <- plumber$new()

# Serve the HTML file
pr$handle("GET", "index.html", function(res) {
  res$headers$`Content-Type` <- "text/html"
  readLines("")
})

# Endpoint to run the Shiny app
pr$handle("GET", "app.R", function() {
  shiny::runGadget(shinyApp(ui = ui, server = server), launch.browser = FALSE)
})

# Run the API
pr$run(port = 8000)