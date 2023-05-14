<script>
  import GiBank from 'svelte-icons/gi/GiBank.svelte';
  import GiHouse from 'svelte-icons/gi/GiHouse.svelte'
  import GiMoneyStack from 'svelte-icons/gi/GiMoneyStack.svelte';
  import FaMoneyBillWave from 'svelte-icons/fa/FaMoneyBillWave.svelte';
  import IoMdWoman from 'svelte-icons/io/IoMdWoman.svelte';
  import { onMount } from 'svelte';
  import mapboxgl from 'mapbox-gl';
  import 'mapbox-gl/dist/mapbox-gl.css';
  import * as d3 from 'd3';
  import { backInOut, linear } from 'svelte/easing';
	import {blur, fade, fly, scale, slide} from 'svelte/transition';

let counterValue = 0;
let intervalId = null;

function startCounter() {
  if (intervalId === null) {
    intervalId = setInterval(() => {
      // counterValue++;
      if (counterValue >= 160000000) {
        clearInterval(intervalId);
      } else {
          counterValue += 1000000;
      }
    }, 6);
  }
}


  // let progress = 0;

  // const svgWidth = 200;
  // const svgHeight = 200;
  // const radius = 100;
  // const centerX = svgWidth / 2;
  // const centerY = svgHeight / 2;

  // const data = [51.4, 48.6];
  // const data_two = [57.4, 42.6]

  // const color = d3.scaleOrdinal()
  //   .domain(data)
  //   .range(['#5E4FA2', '#E5E5E5']);
  
  // const color_two = d3.scaleOrdinal()
  // .domain(data_two)
  // .range(['#5E4FA2', '#E5E5E5']);

  // const pie = d3.pie()
  //   .sort(null)
  //   .value(d => d);

  // const arc = d3.arc()
  //   .outerRadius(radius)
  //   .innerRadius(radius - 20);

  // let svg;
  // let svg_two;

onMount(() => {

  // svg = d3.select('#chart')
  //     .append('svg')
  //     .attr('width', svgWidth)
  //     .attr('height', svgHeight)
  //     .append('g')
  //     .attr('transform', `translate(${centerX}, ${centerY})`);

  // svg_two = d3.select('#chart_two')
  //   .append('svg')
  //   .attr('width', svgWidth)
  //   .attr('height', svgHeight)
  //   .append('g')
  //   .attr('transform', `translate(${centerX}, ${centerY})`);


  //   const path = svg.selectAll('path')
  //     .data(pie(data))
  //     .enter()
  //     .append('path')
  //     .attr('fill', d => color(d.data))
  //     .attr('d', arc);
    
  //   const path_two = svg.selectAll('path')
  //   .data(pie(data_two))
  //   .enter()
  //   .append('path')
  //   .attr('fill', d => color(d.data_two))
  //   .attr('d', arc);

  //   path.transition()
  //     .duration(2000)
  //     .attrTween('d', d => {
  //       const interpolate = d3.interpolate(progress, d.endAngle);
  //       return t => {
  //         progress = interpolate(t);
  //         return arc({ ...d, endAngle: progress });
  //       };
  //     });
  //   path_two.transition()
  //   .duration(2000)
  //   .attrTween('d', d => {
  //     const interpolate = d3.interpolate(progress, d.endAngle);
  //     return t => {
  //       progress = interpolate(t);
  //       return arc({ ...d, endAngle: progress });
  //     };
  //   });
  //   const text = svg
  //     .append("text")
  //     .attr("text-anchor", "middle")
  //     .attr("font-size", "2.5rem")
  //     .attr("font-weight", "bold")
  //     .attr("fill", "black")
  //     .text("51.4%");

  //   const text_two = svg
  //   .append("text")
  //   .attr("text-anchor", "middle")
  //   .attr("font-size", "2.5rem")
  //   .attr("font-weight", "bold")
  //   .attr("fill", "black")
  //   .text("57.4%");

  //   const textNode = text.node();
  //   const textNodeTwo = text_two.node();
  //   const bbox = textNode.getBBox();
  //   const bbox_two = textNodeTwo.getBBox();
  //   const padding = 0;

  //   text.attr("transform", `translate(0, ${padding - bbox.y})`);
  //   text_two.attr("transform", `translate(0, ${padding - bbox_two.y})`);

  mapboxgl.accessToken = 'pk.eyJ1IjoicHJlcm5hcmF2aSIsImEiOiJjbGdjczM4b3AweGpvM29vNzhobW54dWk5In0.qlkTYoVUAKmhuMMGWUrGGg';
  // Create a new map with the container and options
  const map = new mapboxgl.Map({
    container: document.querySelector('.map-container'),
    style: 'mapbox://styles/mapbox/light-v10',
    center: [-90.23, 15.79],
    zoom: 6,
    maxBounds: [[-95.95, 11.97], [-104.62, 18.85]]
  });

  // Add the data to the map
  map.on('load', function() {
    // Add the countries layer
    map.addSource('places', {
      'type': 'geojson',
      'data': {
        'type': 'FeatureCollection',
        'features': [
          {
            'type': 'Feature',
            'properties': {
              'description':
                "<p>7.3% women underemployed</p>"
            },
            'geometry': {
              'type': 'Point',
              'coordinates': 
                // [
                  [-90.229, 15.350]
                  // [-92.087, 14.451],
                  // [-91.905, 14.445],
                  // [-91.71, 14.566],
                  // [-91.635, 14.787],
                  // [-91.939, 15.026],
                  // [-92.229, 14.538]
                // ]
              
            }
          },
          {
            'type': 'Feature',
            'properties': {
              'description':
                "<p>80% women underemployed</p>"
            },
            'geometry': {
              'type': 'Point',
              'coordinates': 
                
                  // [-88.231, 14.134]
                  [-86.819, 14.558],
                  // [-87.376, 13.887],
                  // [-87.583, 13.727],
                  // [-87.836, 13.263],
                  // [-88.063, 13.164],
                  // [-88.239, 13.264],
                  // [-88.357, 13.458],
                  // [-88.231, 14.134]
                
              
            }
          },
          {
            'type': 'Feature',
            'properties': {
              'description':
                "<p>37.4% women underemployed</p>"
            },
            'geometry': {
              'type': 'Point',
              'coordinates': 
                
                  [-89.030, 13.585]
                  // [-89.859, 14.045],
                  // [-89.056, 13.927],
                  // [-88.844, 13.676],
                  // [-89.057, 13.422],
                  // [-89.353, 13.23],
                  // [-89.821, 13.153],
                  // [-90.075, 13.735]
                
              
            }
          }
        ]
      }
    });
    map.addLayer({
      'id': 'places',
      'type': 'circle',
      'source': 'places',
      'paint': {
          'circle-color': '#6F52ED',
          'circle-radius': 10,
          'circle-stroke-width': 2,
          'circle-stroke-color': '#ffffff'
      },
    });
    map.addLayer({
      'id': 'places-fill',
      'type': 'fill',
      'source': {
        'type': 'vector',
        'url': 'mapbox://mapbox.country-boundaries-v1'
      },
      'source-layer': 'country_boundaries',
      // 'source': 'places',
      'paint': {
          'fill-color': '#6F52ED',
          'fill-opacity': 0.5,
          'fill-outline-color': 'black'
      },
      'filter': ['in', 'iso_3166_1_alpha_3', 'GTM', 'HND', 'SLV']
    });
  });

  const popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
  });

  map.on('mouseenter', 'places', (e) => {
  // Change the cursor style as a UI indicator.
    console.log("entered");
    map.getCanvas().style.cursor = 'pointer';
    
    // Copy coordinates array.
    const coordinates = e.features[0].geometry.coordinates.slice();
    const description = e.features[0].properties.description;
    
    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }
    
    // Populate the popup and set its coordinates
    // based on the feature found.
    popup.setLngLat(coordinates).setHTML(description).addTo(map);
    });
    
    map.on('mouseleave', 'places', () => {
    map.getCanvas().style.cursor = '';
    popup.remove();
  });

});

 
</script>

<div class="before">
  <div class="transition-text">
    <div>Let's compare Maria and Jose's experiences migrating to the U.S. Imagine that they have the same job, family situation, age, and education. <span>The only difference is their gender</span> </div>
  </div>
  <div class="column-container">
      <div class="col">
          <div class="persona-name maria"><span>Maria</span></div>
          <img src="Woman.png" class="persona-img" />
      </div>
      <div class="col">
          <div class="persona-name jose"><span>Jose</span></div>
          <img src="Man.png" class="persona-img" />
      </div>
  </div>
  <div class="transition-text">
    <div>Migration is costly. Let's compare their <span class="orange">financial inclusion</span></div>
  </div>
  <div class="columns-container">
    <div class="left-column">
      <div class="icon-container">
          {#each Array.from({ length: 100 }) as _, index}
              <div class={index < 51 ? "icon emphasized" : "icon"}>
              <GiBank/>
          </div>
          {/each}
      </div>
      <div class="statistic">
        <span class="orange">51%</span>
      </div>
      <h2>of women own bank accounts</h2>
    </div>
    <div class="right-column">
      <div class="icon-container">
          {#each Array.from({ length: 100 }) as _, index}
          <div class={index < 57 ? "icon emphasized" : "icon"}>
              <GiBank/>
          </div>
          {/each}
      </div>
      <div class="statistic">
        <span class="orange">57%</span>
      </div>
      <h2>of men own bank accounts</h2>
    </div>
  </div>
  <div class="source">SOURCE</div>
  <div class="transition-text">
    <div>This may not seem very different. But...</div>
  </div>
  <div class="columns-container column">
      <button on:click={startCounter}>click to See how many</button>
      {#if counterValue > 0}
      <div class="counter" transition:slide>
          <h3>{counterValue.toLocaleString()}</h3>
      </div>
      {/if}
      <div class="statistic">
          <h2>women in Latin America don't have access to a bank account</h2>
      </div>
      <div class="source">SOURCE</div>
  </div>
  <div class="transition-text" >
    <div style="display: flex; justify-content: center; align-items: center;"><div class="persona-name maria" ><span>Maria</span></div> doesn't have access to a 
      <span class="burden bank">
        <div class="bank-burden-icon"><GiBank /></div>
        bank account
      </span>
    </div>
    
  </div>
  <div class="transition-text" >
    <div>To fund her migration she'll have to utilize other means of funding her migration ____________. Many people use assets such as property as collateral to fund their migration</div>
  </div>
  <div class="source">SOURCE</div>
  <div class="transition-text" >
    <div style="display: flex; justify-content: center; align-items: center;"><div class="persona-name maria" ><span>Maria</span></div> doesn't own any 
    <span class="burden house">
      <div class="house-burden-icon"><GiHouse /></div>
      property
    </span>
     either
  </div>
    <div>and she's not alone...</div>
  </div>
  <div class="transition-text" >
    <div><span class="orange">Only 6</span> out of every 100 women have taken out a mortgage</div>
  </div>
  <div class="columns-container column">
      <div class="women-icon-container">
          {#each Array.from({ length: 100 }) as _, index}
              <div class={index < 6 ? "women-icon emphasized" : "women-icon"}>
                <GiHouse/>
              </div>
          {/each}
      </div>
  </div>
  <div class="source">SOURCE</div>
  <!-- <div>
      <div class="para-female">Female home ownership not only has ramifications on living conditions, but in women’s ability to build and grow their own businesses. 
        Accessing formal credit relies heavily on collateral, namely large assets—a house or an apartment—that women often lack but which are essential to building their credit history.  </div>

  </div>
  <br/><br/> -->
  <div class="transition-text" >
    <div style="display: flex; justify-content: center; align-items: center;"><div class="persona-name maria" ><span>Maria</span></div> doesn't have access to a bank account and doesn't have a mortgage,</div>
    <div>but maybe she can fund her migration through <span class="orange">employment</span>?</div>
  </div>
  <div class="transition-text" >
    <div><span class="orange">underemployment</span> rates are high in The Northern Triangle</div>
    <div>especially for women</div>
  </div>
  <!-- <div class="para-female-triangle">The Northern Triangle countries of Guatemala, Honduras, and El Salvador face numerous political and economic issues that further exacerbate this gender gap. 
  Underemployment rates for women in these countries are shown below.</div> -->
  <div>
    <div class="map-container" style="height: 600px;"></div>
  </div>
  <div class="source">SOURCE</div>
  <div class="transition-text" >
    <div style="display: flex; justify-content: center; align-items: center;"> <div class="persona-name maria" ><span>Maria</span></div> was able to fund her migration through a bank loan.</div>
    <div>The loan, however, comes with very high interest rates</div>
  </div>
</div>

  
  <style>
    /* Set the margin and padding of the body to 0 */
    body {
      margin: 0;
      padding: 0;
      font-size: 36px;
    }

    /* .before {
        width: 90%;
    } */
/*   
    /* Set the display property of the columns-container to flex, and make it span the whole page */
    .columns-container {
      display: flex;
      width: 100%;
    }

    .columns-container.column {
      flex-direction: column;
    }
  
    /* Set the width and padding of the left and right columns */
    .left-column {
      flex-basis: 50%;
      margin-right: 30px;
    }
  
    .right-column {
      flex-basis: 50%;
      margin-left: 30px;
    } 

    .column-container {
        display: flex;
        width: 60%;
        gap: 30%;
        justify-content: center;
        margin: 50px auto 100px auto;
    }

    .col {
        display: flex;
        flex: 0 0 50%;
        justify-content: center;
        max-width: 50%;
        flex-direction: column;
    }

    .persona-name {
      font-size: 25px;
      font-weight: 600;
      padding: 20px;
      margin: 20px 0px;
    }

    .persona-name.maria span {
      background-color: #ce2093;
      color: white;
    }

    .persona-name.jose span {
      background-color: #fe872f;
      color: white;
    }

    .persona-name span {
      background-color: #ce2093;
      padding: 20px 30px;
      border-radius: 100px;
    }
  
    /* Add some styles to the headings and paragraphs */
    h2 {
      margin: 0;
      font-size: 24px;
    }
  
    p {
      margin: 0;
    }

    /* Center the icon container */
  .icon-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 40px;
  }

  .vis-container {
      text-align: center;
      width: 100%;
      margin: 190px auto;
  }

  /* Set the width of the banner to 100% */
  .banner {
      background-color: purple;
      color: white;
      padding: 20px;
      text-align: center;
      width: 100%;
      margin-top: 100px;
  }
  h1 {
  margin: 0;
  font-size: 36px;
  }

  /* Style the counter */
  .counter {
    text-align: center;
    margin-top: 50px;
  }

  /* Add some styles to the headings and paragraphs */
  h2 {
    margin: 0;
    font-size: 24px;
  }

  p {
    margin: 0;
  }

.icon {
  width: 25px;
  margin: 3px;
  color: rgb(207, 184, 207); 
  opacity: 0.5;
}

.women-icon {
  width: 35px;
  margin: 3px;
  color: rgb(207, 184, 207); 
  opacity: 0.5;
}

.emphasized {
  color: #fe872f;
  opacity: 1;
}

.source {
  font-size: 10px;
  color: rgb(207, 184, 207);
  margin: 30px 0px;
}

.statistic {
  justify-content: center;
}

.statistic span {
  font-size: 80px;
  text-align: center;
  font-weight: 600;
}

.statistic h2 {
  margin: 30px 0px;
}

.orange {
  color: #fe872f;
}

/* Style the counter */
.counter {
  text-align: center;
  margin-top: 50px;
}

h3 {
  font-size: 150px;
  font-weight: bold;
  color: purple;
  margin: 0;
}
button {
  background-color: #4a0a70;
  color: white;
  font-size: 36px;
  padding: 20px 40px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  margin-top: 16px;
  transition: background-color 0.2s;
  width: fit-content;
  align-self: center;
  text-transform: uppercase;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}

button:hover {
  background-color: #7d13bb;
  box-shadow: 0px 15px 20px rgba(74, 10, 112, 0.4);
  color: #fff;
  transform: translateY(-7px);
}
h4 {
  font-size: 40px;
  font-weight: bold;
  color: purple;
  margin: 0;
}
.para-female {
  font-size: 25px;
  font-weight: bold;
  color: purple;
  margin: 0;
}
.para-female-triangle {
  font-size: 25px;
  font-weight: bold;
  color: #4a0a70;
  margin: 0;
}
.women-icon-container {
  display: flex;
  flex-wrap: wrap;
  width: 72%;
  margin: auto;
  justify-content: center;
  margin-bottom: 40px;
}
.map-container {
  width: 50%;
  margin: 30px auto;
  background-color: #5e5d5d;
}
.mapboxgl-popup {
  max-width: 400px;
  font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
}

.chart {
  position: relative;
  width: 100%;
  height: 200px;
  margin: 0 auto;
  font-size: 12px;
  text-align: center;
}

.transition-text {
  font-size: 30px;
  padding: 50px;
  margin: 50px 0px;
}

.transition-text span {
  color: #ce2093;
}

.transition-text .orange {
  color: #fe872f;
  text-transform: uppercase;
  font-weight: 700;
  margin: 0px 3px;
}

.transition-text .purple {
  color: #4a0a70;
}

span.burden {
  font-weight: 750;
  margin: 9px;
  color: #4a0a70;
  position: relative;
}

.bank-burden-icon {
  z-index: -1;
  width: 150px;
  position: absolute;
  top: -150%;
  left: 10%;
  opacity: 0.4;
  color:rgb(207, 184, 207);
}

.house-burden-icon {
  z-index: -1;
  width: 120px;
  position: absolute;
  top: -150%;
  left: 4%;
  opacity: 0.4;
  color:rgb(207, 184, 207);
}
/* .chart svg {
  width: 100%;
  height: 100%;
}

.chart .circle {
  fill: none;
  stroke: #ddd;
  stroke-width: 8;
}

.chart .bar {
  fill: #6a2c70;
}

.chart .percent {
  fill: #6a2c70;
  font-weight: bold;
  font-size: 24px;
}

.chart_two {
  position: relative;
  width: 100%;
  height: 200px;
  margin: 0 auto;
  font-size: 12px;
  text-align: center;
}

.chart_two svg {
  width: 100%;
  height: 100%;
}

.chart_two .circle {
  fill: none;
  stroke: #ddd;
  stroke-width: 8;
}

.chart_two .bar {
  fill: #6a2c70;
}

.chart-two .percent {
  fill: #6a2c70;
  font-weight: bold;
  font-size: 24px;
} */


/* .tooltip {
  position: absolute;
  background-color: #6f42c1;
  color: white;
  padding: 5px;
  border-radius: 5px;
  font-weight: bold;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.tooltip:hover {
  opacity: 1;
} */
  .persona-img {
    max-width: 100%; 
    height: auto;
  }

  
  /* .tooltip {
    position: absolute;
    background-color: #6f42c1;
    color: white;
    padding: 5px;
    border-radius: 5px;
    font-weight: bold;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease;
  } */
</style>
