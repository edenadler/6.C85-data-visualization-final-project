<script>
    import GiBank from 'svelte-icons/gi/GiBank.svelte';
    import GiMoneyStack from 'svelte-icons/gi/GiMoneyStack.svelte';
    import FaMoneyBillWave from 'svelte-icons/fa/FaMoneyBillWave.svelte';
    import IoMdWoman from 'svelte-icons/io/IoMdWoman.svelte';
    import { onMount } from 'svelte';
    import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
    import 'mapbox-gl/dist/mapbox-gl.css';

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
  });

   
</script>

<div class="before">
    <div class="banner">
      <h1>Disparity in financial resources</h1>
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
        <h4>Only 6 out of every 100 women have taken out a mortgage.</h4>

    </div>
    <div>
    <div class="map-container" style="height: 500px;"></div>
        <div class="tooltip" style="display:none"></div>
    </div>
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
  