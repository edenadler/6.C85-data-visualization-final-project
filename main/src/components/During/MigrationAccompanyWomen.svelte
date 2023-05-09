<script> 
    import * as d3 from 'd3';
    import { onMount } from "svelte";

    let svg;
    let g;
    let height = 250;
    let radius = height/2;
    // arc path and angle generator
    let arcGenerator = d3.arc()
      .innerRadius(radius * 0.5)         // This is the size of the donut hole
      .outerRadius(radius * 0.8)
      .padAngle(0)
      .cornerRadius(0);
    let data = [{name: "Family", value: 0.437}, {name: "Coyote", value: 0.275}, {name: "Alone", value: 0.215}, {name: "Other", value: 0.073}];

    // color mapping function
    const arc_color = d3.scaleOrdinal()
      .range(["#4a0a70", "#fdbb58", "#ce2093", "#fe872f"])
      .domain(data);

    let pieAngleGenerator = d3.pie().value(function(d) {return d.value; });
    let arc_data = pieAngleGenerator(data);
    let label = d3.arc().outerRadius(radius).innerRadius(2*radius/3);


    // state trackers
    let hovered = -1; // index of the hovered arc, -1 when nothing is hovered
    let recorded_mouse_position = { x: 0, y: 0 };



    onMount(()=> {
      let svg_one = d3.select("svg g");
      console.log('here', svg_one.selectAll("path"))
      

      // d3.select("svg g")
      //   .selectAll("path")
      //   .data(arc_data)
      //   .append('text')
      //   .text(function(d){ 
      //     console.log('d', d.data.name)
      //     return "grp " + d.data.name})
      //   .attr("transform", function(d) { return "translate(" + arcGenerator.centroid(d) + ")";  })
      //   .style("text-anchor", "middle")
      //   .style("font-size", 17)
    })



    // onMount(() => {
    //   createChart();
    // })
    
    // let createChart = function() {
    //       // set the dimensions and margins of the graph
    //     let pie_width = 450;
    //     let pie_height = 450;
    //     let pie_margin = 40;

    //     // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
    //     let radius = Math.min(pie_width, pie_height) / 2 - pie_margin;
    //     // append the svg object to the div called 'debt-source-women'
    //     let svg = d3.select("div")
    //         .append("svg")
    //             .attr("width", pie_width)
    //             .attr("height", pie_height)
    //         .append("g")
    //             .attr("transform", "translate(" + pie_width / 2 + "," + pie_height / 2 + ")");  
        
    //     let data = {"Family": 0.437, "Coyote": 0.275, "Alone": 0.215, "Other": 0.073}
    //     // var data = [{"label": "Loans from Creditors", "percentage": 0.76}, 
    //     //               {"label": "Loans from Family/Friends", "percentage": 0.24}]
    //     // set the color scale
    //     let color = d3.scaleOrdinal()
    //         .domain([0.073, 0.215, 0.275, 0.437])
    //         .range(["#4a0a70", "#fdbb58", "#ce2093", "#fe872f"])
    //     // Compute the position of each group on the pie:
    //     let pie = d3.pie()
    //         .value(function(d) {return d.value; })
    //     let data_ready = pie(Object.entries(data))

    //     let tooltip = d3.select(".tooltip-container").append("div")
    //     //var tooltip = d3.select("#accompany-women")
    //       .attr("class", "tooltip")
    //       .style("opacity", 0.5);
            
    //     tooltip.append("rect")
    //       .attr("width", 30)
    //       .attr("height", 20)
    //       .attr("fill", "#ffffff")
    //       .style("opacity", 0.5);
        
    //     tooltip.append("div")
    //       .attr("x", 15)
    //       .attr("dy", "1.2em")
    //       .style("text-anchor", "middle")
    //       .attr("font-size", "1.5em")
    //       .attr("font-weight", "bold");
    //     // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
    //     svg
    //         .selectAll('whatever')
    //         .data(data_ready)
    //         .enter()
    //         .append('path')
    //         .attr('d', d3.arc()
    //         .innerRadius(100)         // This is the size of the donut hole
    //         .outerRadius(radius)
    //         )
    //         .attr('fill', function(d){ return(color(d.data.key)) })
    //         .attr("stroke", "black")
    //         .style("stroke-width", "2px")
    //         //.style("opacity", 0.7)
    //         .on("mouseover", function() {
    //             tooltip.style("display", null);
    //         })
    //         .on("mousemove", function(d) {
    //             tooltip.transition().duration(200)
    //               .style("opacity", 0.9);
    //             tooltip.select("div").html(d.data.key + " <br><strong>" + d.data.value + "</strong>")
    //             //tooltip.select("#accompany-women").html(d.data.key + " <br><strong>" + d.data.value + "</strong>")
    //               .style("position", "fixed")
    //               .style("text-align", "center")
    //               .style("width", "120px")
    //               .style("height", "45px")
    //               .style("padding", "2px")
    //               .style("font", "12px sans-serif")
    //               //.style("background", "lightsteelblue")
    //               .style("background", "pink")
    //               .style("border", "0px")
    //               .style("border-radius", "8px")
    //               //.style("left", (d3.event.pageX + 15) + "px")
    //               .style("left", (d3.event.pageX) + "px")
    //               //.style("top", (d3.event.pageY - 28) + "px");
    //               .style("top", (d3.event.pageY - 100) + "px");
    //             d3.select(this.firstChild).transition()
    //               .attr("d", arcOver);
            
    //         })
    //         .on("mouseout", function() {
    //             tooltip.style("display", "none")
    //             d3.select(this.firstChild).transition()
    //               .attr("d", arc)
    //               .attr("stroke", "none");
    //         })
        
    //     svg.append("g").append("text")
    //       //.attr("x", pie_width/6)
    //       .attr("y", -205)
    //       .attr("text-anchor", "middle")
    //       .style("font-size", "16px")
    //       .text("Who accompanies women on the migration journey?");
    // }
</script>

<div class="visualization">
	<svg width="500" height={height} bind:this={svg}>
		<g transform="translate(250, 120)" bind:this={g}>
			{#each arc_data as d, index}
      {console.log(d)}
			<path 
				d={arcGenerator({
					startAngle: d.startAngle,
					endAngle: d.endAngle
				})}
				fill={arc_color(d.data["value"])}
        fill-opacity={index === hovered ? 0.8: 1}
        text={d.data.name}
				on:mouseover={
				(event) => { 
					hovered = index; 
					recorded_mouse_position = {
							x: event.pageX,
							y: event.pageY
						}
				}}
				on:mouseout={(event) => { hovered = -1; }}
			/>
      <text text-anchor="middle" alignment-baseline="middle" transform="translate({label.centroid(d)})">{d.data.name}</text>
			{/each}
		</g>
	</svg>
	<div
		class={hovered === -1 ? "tooltip-hidden": "tooltip-visible"}	
		style="left: {recorded_mouse_position.x + 40}px; top: {recorded_mouse_position.y + 40}px"
	>
  {#if hovered !== -1}
  {arc_data[hovered].name}
  {/if}
	</div>
</div>

<style>

  .visualization {
		font: 25px sans-serif;
		margin-top: 1px;
		text-align: middle;
    position: relative;
    display: flex;
	}

  svg {
    position: relative;
  }

	/* dynamic classes for the tooltip */
	.tooltip-hidden {
		visibility: hidden;
		font-family: "Nunito", sans-serif;
		width: 200px;
		position: absolute;
	}

	.tooltip-visible {
		font: 25px sans-serif;
		font-family: "Nunito", sans-serif;
		visibility: visible;
		background-color: #f0dba8;
		border-radius: 10px;
		width: 200px;
		color: black;
		position: absolute;
		padding: 10px;
	}
</style>
