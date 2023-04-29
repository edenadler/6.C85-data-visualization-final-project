<script> 
import * as d3 from 'd3';


(function womenaccompany(){
// set the dimensions and margins of the graph
 var pie_width = 450
 pie_height = 450
 pie_margin = 40

// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
var radius = Math.min(pie_width, pie_height) / 2 - pie_margin

// append the svg object to the div called 'debt-source-women'
var svg = d3.select("#accompany")
    .append("svg")
        .attr("width", pie_width)
        .attr("height", pie_height)
    .append("g")
        .attr("transform", "translate(" + pie_width / 2 + "," + pie_height / 2 + ")");  

var data = {"Family": .437, "Coyote": 0.275, "Alone": 0.215, "Other": 0.073}

// var data = [{"label": "Loans from Creditors", "percentage": 0.76}, 
//               {"label": "Loans from Family/Friends", "percentage": 0.24}]

// set the color scale
var color = d3.scaleOrdinal()
    .domain(data)
    .range(["#4a0a70", "#fdbb58", "#ce2093", "#fe872f"])

// Compute the position of each group on the pie:
var pie = d3.pie()
    .value(function(d) {return d.value; })
var data_ready = pie(d3.entries(data))

// Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
svg
    .selectAll('whatever')
    .data(data_ready)
    .enter()
    .append('path')
    .attr('d', d3.arc()
    .innerRadius(100)         // This is the size of the donut hole
    .outerRadius(radius)
    )
    .attr('fill', function(d){ return(color(d.data.key)) })
    .attr("stroke", "black")
    .style("stroke-width", "2px")
    //.style("opacity", 0.7)

    .on("mouseover", function() {
        tooltip.style("display", null);
      })
      .on("mousemove", function(d) {
        tooltip.transition().duration(200)
          .style("opacity", 0.9);
        tooltip.select("div").html(d.data.key + " <br><strong>" + d.data.value + "</strong>")
        //tooltip.select("#accompany-women").html(d.data.key + " <br><strong>" + d.data.value + "</strong>")
          .style("position", "fixed")
          .style("text-align", "center")
          .style("width", "120px")
          .style("height", "45px")
          .style("padding", "2px")
          .style("font", "12px sans-serif")
          //.style("background", "lightsteelblue")
          .style("background", "pink")
          .style("border", "0px")
          .style("border-radius", "8px")
          //.style("left", (d3.event.pageX + 15) + "px")
          .style("left", (d3.event.pageX) + "px")
          //.style("top", (d3.event.pageY - 28) + "px");
          .style("top", (d3.event.pageY - 100) + "px");
        d3.select(this.firstChild).transition()
          .attr("d", arcOver);
    
      })
      .on("mouseout", function() {
        tooltip.style("display", "none")
        d3.select(this.firstChild).transition()
          .attr("d", arc)
          .attr("stroke", "none");
      })

    var tooltip = d3.select("body").append("div")
    //var tooltip = d3.select("#accompany-women")
      .attr("class", "tooltip")
      .style("opacity", 0.5);
    
    tooltip.append("rect")
      .attr("width", 30)
      .attr("height", 20)
      .attr("fill", "#ffffff")
      .style("opacity", 0.5);
    
    tooltip.append("div")
      .attr("x", 15)
      .attr("dy", "1.2em")
      .style("text-anchor", "middle")
      .attr("font-size", "1.5em")
      .attr("font-weight", "bold");

      svg.append("g").append("text")
      //.attr("x", pie_width/6)
      .attr("y", -205)
      .attr("text-anchor", "middle")
      .style("font-size", "16px")
      .text("Who accompanies women on the migration journey?");
}());


(function menaccompany(){
    // set the dimensions and margins of the graph
     var pie_width = 450
     pie_height = 450
     pie_margin = 40
    
    // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
    var radius = Math.min(pie_width, pie_height) / 2 - pie_margin
    
    // append the svg object to the div called 'debt-source-women'
    var svg = d3.select("#accompany")
        .append("svg")
            .attr("width", pie_width)
            .attr("height", pie_height)
        .append("g")
            .attr("transform", "translate(" + pie_width / 2 + "," + pie_height / 2 + ")");  
    
    var data = {"Family": 0.28, "Coyote": 0.40, "Alone": 0.217, "Other": 0.103}
    
    // var data = [{"label": "Loans from Creditors", "percentage": 0.76}, 
    //               {"label": "Loans from Family/Friends", "percentage": 0.24}]
    
    // set the color scale
    var color = d3.scaleOrdinal()
        .domain(data)
        .range(["#4a0a70", "#fdbb58", "#ce2093", "#fe872f"])
    
    // Compute the position of each group on the pie:
    var pie = d3.pie()
        .value(function(d) {return d.value; })
    var data_ready = pie(d3.entries(data))
    
    // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
    svg
        .selectAll('whatever')
        .data(data_ready)
        .enter()
        .append('path')
        .attr('d', d3.arc()
        .innerRadius(100)         // This is the size of the donut hole
        .outerRadius(radius)
        )
        .attr('fill', function(d){ return(color(d.data.key)) })
        .attr("stroke", "black")
        .style("stroke-width", "2px")
        //.style("opacity", 0.7)
    
        .on("mouseover", function() {
            tooltip.style("display", null);
          })
          .on("mousemove", function(d) {
            tooltip.transition().duration(200)
              .style("opacity", 0.9);
            tooltip.select("div").html(d.data.key + " <br><strong>" + d.data.value + "</strong>")
            //tooltip.select("#accompany-women").html(d.data.key + " <br><strong>" + d.data.value + "</strong>")
              .style("position", "fixed")
              .style("text-align", "center")
              .style("width", "120px")
              .style("height", "45px")
              .style("padding", "2px")
              .style("font", "12px sans-serif")
              //.style("background", "lightsteelblue")
              .style("background", "pink")
              .style("border", "0px")
              .style("border-radius", "8px")
              .style("left", (d3.event.pageX + 15) + "px")
              .style("top", (d3.event.pageY - 100) + "px");
            d3.select(this.firstChild).transition()
              .attr("d", arcOver);
        
          })
          .on("mouseout", function() {
            tooltip.style("display", "none")
            d3.select(this.firstChild).transition()
              .attr("d", arc)
              .attr("stroke", "none");
          })
    
        var tooltip = d3.select("body").append("div")
        //var tooltip = d3.select("#accompany-women")
          .attr("class", "tooltip")
          .style("opacity", 0.5);
        
        tooltip.append("rect")
          .attr("width", 30)
          .attr("height", 20)
          .attr("fill", "#ffffff")
          .style("opacity", 0.5);
        
        tooltip.append("div")
          .attr("x", 15)
          .attr("dy", "1.2em")
          .style("text-anchor", "middle")
          .attr("font-size", "1.5em")
          .attr("font-weight", "bold");
        
          svg.append("g").append("text")
          //.attr("x", pie_width/6)
          .attr("y", -205)
          .attr("text-anchor", "middle")
          .style("font-size", "16px")
          .text("Who accompanies men on the migration journey?");
    }());


</script>

<style>

</style>