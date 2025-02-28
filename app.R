library(shiny)
library(fpp3)


ui <- fluidPage(
  "hello world",
  sliderInput("n1","number of points", min = 10, max = 1000, value = 100),
  sliderInput("y3", "y3", min = 2, max = 144, value = 48),
  plotOutput("x3")
)

sever <- function(input,output) {
  # attach the histogram to the output
  # call renderPlot on any plot
  # give curly brackets inside function call
  output$x3 <- renderPlot({ 
    vic_elec |> slice(1:500) |>
      model(STL(Demand ~ trend(window = input$y3) + season(window = "periodic"),
                robust = TRUE)) |>
      components() |>
    autoplot()
    })
}

shinyApp(ui, sever)