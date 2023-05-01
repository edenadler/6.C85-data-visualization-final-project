<script>
    import GiBank from 'svelte-icons/gi/GiBank.svelte';
    import GiMoneyStack from 'svelte-icons/gi/GiMoneyStack.svelte';
    import FaMoneyBillWave from 'svelte-icons/fa/FaMoneyBillWave.svelte';
    import IoMdWoman from 'svelte-icons/io/IoMdWoman.svelte';
    import { onMount } from 'svelte';
    import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
    import 'mapbox-gl/dist/mapbox-gl.css';
    import * as d3 from 'd3';

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
      }, 7);
    }
  }

//   let progress = 0;

//   const svgWidth = 200;
//   const svgHeight = 200;
//   const radius = 80;
//   const centerX = svgWidth / 2;
//   const centerY = svgHeight / 2;

//   const data = [80, 20];

//   const color = d3.scaleOrdinal()
//     .domain(data)
//     .range(['#5E4FA2', '#E5E5E5']);

//   const pie = d3.pie()
//     .sort(null)
//     .value(d => d);

//   const arc = d3.arc()
//     .outerRadius(radius)
//     .innerRadius(radius - 20);

//   let svg;

  onMount(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoicHJlcm5hcmF2aSIsImEiOiJjbGdjczM4b3AweGpvM29vNzhobW54dWk5In0.qlkTYoVUAKmhuMMGWUrGGg';
    // Create a new map with the container and options
    const map = new mapboxgl.Map({
      container: document.querySelector('.map-container'),
      style: 'mapbox://styles/mapbox/light-v10',
      center: [-90.23, 15.79],
      zoom: 5,
      maxBounds: [[-95.95, 12.97], [-84.62, 17.85]]
    });

    // Add the data to the map
    map.on('load', function() {
      // Add the countries layer
      map.addLayer({
        'id': 'countries',
        'type': 'fill',
        'source': {
          'type': 'vector',
          'url': 'mapbox://mapbox.country-boundaries-v1'
        },
        'source-layer': 'country_boundaries',
        'paint': {
            'fill-color': '#6F52ED',
            'fill-opacity': 0.5,
            'fill-outline-color': 'black'
        },
        'filter': ['in', 'iso_3166_1_alpha_3', 'GTM', 'HND', 'SLV']
      });
    });

    // svg = d3.select('#chart')
    //   .append('svg')
    //   .attr('width', svgWidth)
    //   .attr('height', svgHeight)
    //   .append('g')
    //   .attr('transform', `translate(${centerX}, ${centerY})`);

    // const path = svg.selectAll('path')
    //   .data(pie(data))
    //   .enter()
    //   .append('path')
    //   .attr('fill', d => color(d.data))
    //   .attr('d', arc);

    // path.transition()
    //   .duration(2000)
    //   .attrTween('d', d => {
    //     const interpolate = d3.interpolate(progress, d.endAngle);
    //     return t => {
    //       progress = interpolate(t);
    //       return arc({ ...d, endAngle: progress });
    //     };
    //   });
  });

   
</script>

<div class="before">
    <div class="banner">
      <h1>There is a significant disparity in the distribution of financial resource between women and men</h1>
    </div>
    <div class="columns-container">
      <div class="left-column">
        <!-- <h2>Women</h2> -->
        <!-- <p>This is the content for the left column.</p> -->
        <div class="icon-container">
            {#each Array.from({ length: 100 }) as _, index}
                <div class={index < 51 ? "icon purple" : "icon"}>
                <FaMoneyBillWave/>
            </div>
            {/each}
        </div>
        <br/>
        <div class="circle">
            <span>51.4%</span>
        </div>
        <br/>
        <h2>women own bank accounts</h2>
      </div>
      <div class="right-column">
        <!-- <h2>Men</h2> -->
        <div class="icon-container">
            {#each Array.from({ length: 100 }) as _, index}
            <div class={index < 57 ? "icon purple" : "icon"}>
                <FaMoneyBillWave/>
            </div>
            {/each}
        </div>
        <br/>
        <div class="circle">
            <span>57.4%</span>
        </div>
        <br/>
        <h2>men own bank accounts</h2>
      </div>
    </div>
    <button on:click={startCounter}>Calculate difference</button>
    <div class="counter">
        <h3>{counterValue.toLocaleString()}</h3>
    </div>
    <div>
        <h4>women in Latin America do not have access to a bank account!</h4>
        <h4>Furthermore, only 6 out of every 100 women have taken out a mortgage.</h4>

    </div>
    <div class="women-icon-container">
        {#each Array.from({ length: 100 }) as _, index}
            <div class={index < 6 ? "women-icon purple" : "women-icon"}>
            <IoMdWoman/>
        </div>
        {/each}
    </div>
    <br/><br/><br/><br/>
    <div>
        <div class="para-female">Female home ownership in the developing world is a critical issue: it not only has ramifications on living conditions, but in women’s ability to build and grow their own businesses. Accessing formal credit relies heavily on collateral, namely large assets—a house or an apartment—that women often lack but which are essential to building their credit history. In many cases, women also use their homes as the base for their business. </div>

    </div>
    <br/><br/>
    <div class="para-female-triangle">The Northern Triangle countries of Guatemala, Honduras, and El Salvador face numerous political and economic issues that further exacerbate this gender gap. 
    Underemployment rates go as high as 80% within women in some of these countries!

    </div>
    <div>
    <div class="map-container" style="height: 500px;"></div>
    </div>
    <br/>
    <!-- <div id="chart"></div> -->
</div>

  
  <style>
    /* Set the margin and padding of the body to 0 */
    body {
      margin: 0;
      padding: 0;
    }

    .before {
        width: 90%;
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
  
    /* Set the display property of the columns-container to flex, and make it span the whole page */
    .columns-container {
      display: flex;
      width: 100%;
    }
  
    /* Set the width and padding of the left and right columns */
    .left-column {
      flex-basis: 50%;
      padding: 20px;
    }
  
    .right-column {
      flex-basis: 50%;
      padding: 20px;
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
  }

  /* Style the icons */
  /* .icon {
    width: 50px;
    margin: 5px;
    color: #ce2093; 
  }

  .purple {
    color: #4a0a70;
  } */
  .icon {
    width: 50px;
    margin: 5px;
    color: #fdbb58; 
  }
  .women-icon {
    width: 80px;
    padding: 0px;
    margin: 0px;
    color: #fdbb58; 
  }
  .women-icon::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    padding: 0px;
    margin: 0px;
  }

  .purple {
    color: black;
  }

  .icon::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
  }
  .circle {
    width: 250px;
    height: 250px;
    background-color: #4a0a70;
    border-radius: 50%;
    margin: 20px auto 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .circle span {
    font-size: 68px;
    color: white;
    text-align: center;
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
    padding: 16px 32px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    margin-top: 16px;
    transition: background-color 0.2s;
  }

  button:hover {
    background-color: #ce2093;
  }
  h4 {
    font-size: 40px;
    font-weight: bold;
    color: purple;
    margin: 0;
  }
  .para-female {
    font-size: 30px;
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
    justify-content: center;
  }
  .map-container {
    width: 100%;
    background-color: #5e5d5d;
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
  }

  .tooltip:hover {
    opacity: 1;
  } */
  </style>
  