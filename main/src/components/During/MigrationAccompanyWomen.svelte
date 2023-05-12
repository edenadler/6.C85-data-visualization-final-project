<script> 
    import * as d3 from 'd3';
    import { onMount } from "svelte";

    let svg;
    let g;
    let height = 500;
    let radius = height/2;
    // arc path and angle generator
    let arcGenerator = d3.arc()
      .innerRadius(radius * 0.5)         // This is the size of the donut hole
      .outerRadius(radius * 0.8)
      .padAngle(0.02)
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
      
    })
// fill={index === hovered ? "pink": arc_color(d.data["value"])}
</script>

<div class="visualization">
	<svg width="600" height="700" bind:this={svg}>
		<g transform="translate(270, 300)" bind:this={g}>
			{#each arc_data as d, index}
      {console.log(d)}
	  <!-- svelte-ignore a11y-no-onchange -->
			<path 
				d={arcGenerator({
					startAngle: d.startAngle,
					endAngle: d.endAngle
				})}
				fill={arc_color(d.data["value"])}
        fill-opacity={index === hovered ? 0.3: 1}
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
			<text x="-265" y="-160">Alone: 21.5%</text>
			<text x="125" y="-160">Family: 43.7%</text>
			<text x="-235" y="215">Coyote: 27.5%</text>
			<text x="-190" y="-220">Other: 7.3%</text> 
			<polyline points="180,-80 220,-130 220, -150" style="fill:#fff295;stroke:black;stroke-width:2" />
			<polyline points="-30,-195 -37,-225, -55,-225" style="fill:#fff295;stroke:black;stroke-width:2" />
			<polyline points="-175,-95 -215,-125 -215,-150" style="fill:#fff295;stroke:black;stroke-width:2" />
			<polyline points="-150,130 -185,165 -185, 190" style="fill:#fff295;stroke:black;stroke-width:2" />
			{/each}
		</g>
	</svg>
	<div
		class={hovered === -1 ? "tooltip-hidden": "tooltip-visible"}	
		style="left: {160}px; top: {240}px"
	>
  {#if hovered !== -1}
  {#if hovered === 0}
			82,593 women travel with their family each year
			{/if}
			{#if hovered === 1}
			51,975 women travel with a coyote each year
			{/if}
			{#if hovered === 2}
			40,635 women travel alone each year
			{/if}
			{#if hovered === 3}
			13,797 women travel with other company each year
			{/if}
  {/if}
	</div>
</div>

<style>

  .visualization {
		font: 23px sans-serif;
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
		/* background-color: #f0dba8; */
		border-radius: 10px;
		width: 200px;
		color: black;
		position: absolute;
		padding: 10px;
	}
</style>
