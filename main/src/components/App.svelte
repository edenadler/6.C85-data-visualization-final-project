<script>
    import * as d3 from "d3";
    import { onMount } from "svelte";
    // import Scrolly from "./Scrolly.svelte";
    import Before from "./Before.svelte";
    import During from "./During.svelte";
    import { animateDebt } from "./During/MigrationDebt.svelte";
    import MigrationAccompany from "./During/MigrationAccompany.svelte";
    import After from "./After.svelte";
    import Scroller from "@sveltejs/svelte-scroller";

    let count, index, offset, progress;

    onMount(() => {
        clump();
    })

    let width = 600;
    let height = 400;

    // const colorScale = ['#fe872f', '#ce2093', '#4a0a70'];
    const colorScale = ['#4a0a70'];
    let xCenter = [200, 300, 400];
    // let xCenter = [300];
    let xScale = d3.scaleLinear().domain([0, 1]).range([0, 600]);

    let numNodes = 600;
    let nodes = d3.range(numNodes).map(function(d, i) {
        return {
            radius: 5,
            category: i % 3,
            value: Math.random()
        }
    });

    function ticked() {
        let u = d3.select('#coins-1')
            .selectAll('circle')
            .data(nodes)
            .join('circle')
            .attr('r', function(d) {
                return d.radius;
            })
            .style('fill', function(d) {
                // return colorScale[d.category];
                return '#4a0a70';
            })
            .attr('cx', function(d) {
                return d.x;
            })
            .attr('cy', function(d) {
                return d.y + 80;
            });
    }

    function clump() {
        let simulation = d3.forceSimulation(nodes)
            .force('charge', d3.forceManyBody().strength(5))
            // .force('x', d3.forceX().x(function(d) {
            //     return 300;
            //     // return xCenter[d.category];
            // }))
            .force('center', d3.forceCenter(width/2, height/2))
            .force('collision', d3.forceCollide().radius(function(d) {
                return d.radius;
            }))
            .on('tick', ticked);
    }

    // function collide() {
    //     let forceSimulation =  d3.forceSimulation(nodes)
    //         .force('charge', d3.forceManyBody().strength(5))
    //         .force('center', d3.forceCenter(width/2, height/2))
    //         .force('collision', d3.forceCollide().radius(function(d) {
    //             return d.radius
    //         }))
    //         .on('tick', ticked);
    // }

    // function forceApart() {
    //     let simulationX = d3.forceSimulation(nodes)
    //         .force('charge', d3.forceManyBody().strength(-20))
    //         .force('x', d3.forceX().x(function(d) {
    //             return xScale(d.value);
    //         }))
    //         // .force('y', d3.forceY().y(function(d) {
    //         //     return 0;
    //         // }))

    // }

    let currentStep;

    $: if (currentStep == 0) {
        console.log(currentStep)
        clump();
    } else if (currentStep == 1) {
        console.log(currentStep)
        // collide();
        // forceApart();
        let simulationX = d3.forceSimulation(nodes)
            .force('charge', d3.forceManyBody().strength(-20))
            .force('x', d3.forceX().x(function(d) {
                return xScale(d.value);
            }))
            .on('tick', ticked);
            // .force('y', d3.forceY().y(function(d) {
            //     return 0;
            // }))
    }

    let migrationStep = 'before';

    $: if (index == 0) {
        migrationStep = 'before'
    } else if (index == 1) {
        migrationStep = 'during'
    } else {
        migrationStep = 'after'
    }
</script>

<main>

    <div on:scroll={() => console.log(progress, offset)}>

        <Scroller top={0.0} bottom={0} threshold={0.5} bind:count bind:index bind:offset bind:progress>
            <div class="background" slot="background">
                <div class="sticky-divider-label {progress < 0.11 ? 'hide' : 'show'}">
                    <div class="migration-step-header">
                        <span class="step-name {migrationStep}">{migrationStep}</span> migration
                    </div>
                    <div class="men-and-women-header">
                        <h2>Women</h2>
                        <h2>Men</h2>
                    </div>
                </div>
            </div>

            <div class="foreground" slot="foreground">
                <div class="heading">
                    <h1>Differences in the migration experience between men and women</h1>
                    <h1>in Central America</h1>
                </div>
                <section>
                    1
                    {index}
                    <Before />
                </section>
                <section>2</section>
                <section>3 </section>
                <Before />
                <During />
                <After />
            </div>

        </Scroller>

        <!-- <section>
                <span>Women who migrated externally have $600 more debt on average than men</span>
                    <div class="dots">
                        <svg id="coins-1" width="600" height="400">
                            <g></g>
                        </svg>
                    </div>
        </section> -->

        <!-- <Scroller> -->

            <!-- <div class="coin">
                <div class="front"></div>
                <div class="front_b"></div>
                <div class="back"></div>
                <div class="back_b"></div>
            </div> -->

            <!-- <div slot="background" id="content">
                <p>this is the background</p> -->
                <!-- <svg width="600" height="400">
                    <g transform="translate(50, 200)">
                        {#each nodes as node}
                            <circle r={node.radius} style={'fill: ' + colorScale[node.category]} cx={xCenter[node.category]} cy={node.y}></circle>
                        {/each}
                    </g>
                </svg> -->
                <!-- <svg id="coins-1" width="600" height="400">
                    <g transform="translate(50, 200)">

                    </g>
                </svg>
            </div> -->

            <!-- <div slot="foreground">
                <section style="position: relative;"> -->
                    <!-- <svg id="coins-1" width="600" height="400">
                        <g transform="translate(50, 200)">

                        </g>
                    </svg> -->
                <!-- </section>
                <section>section 2</section>
            </div>

            <button on:click={() => collide()}>tick</button>
        </Scroller> -->
    </div>
    <div class="DuringMigration">
	<h1>During Migration</h1>
	<div class="container">
	    <div class="heading">
	      <h2>How much debt do people incur to migrate?</h2>
	    </div>
	    <div class="counter-container">
	      <div class="counter">
		<!-- <img src="https://raw.githubusercontent.com/nemo0/animated-counter/29e12c0cb15e90c27faaef0d83fb2618126067db/icons/iconmonstr-time-19.svg" alt="timer" srcset="" class="icon"> -->
		<img src="images/latinaicon.jpeg" alt="timer" srcset="" class="icon">
		<h3 data-target="4425" class="count">0</h3>
		<h6>Women's Migratory Debt</h6>
	      </div>
	      <div class="counter">
		<!-- <img src="https://raw.githubusercontent.com/nemo0/animated-counter/29e12c0cb15e90c27faaef0d83fb2618126067db/icons/iconmonstr-coffee-11.svg" alt="Coffee" srcset="" class="icon"> -->
		<img src="images/latinoicon.jpeg" alt="timer" srcset="" class="icon">
		<h3 data-target="3575" class="count">0</h3>
		<h6>Men's Migratory Debt</h6>
	      </div>
	    </div>
	  </div>
	  <div class = "debt-button">
	      <button on:click={animateDebt}>Find out the cost of debt.</button>
	  </div>
	    
	<div class = "sexual-violence"> 
          <h2>80% of women experience sexual violence on the migrant journey to the US.</h2>
          <img class="violencechart" src="images/SexualViolenceChart.jpg" onmouseover="this.src='images/SexualViolenceChartNoLoop.gif';">
        </div>
     </div>

</main>

<style>
    /* https://codepen.io/parcon/pen/oxbLVd */
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap');
    
    :root {
        --pink: #ce2093;
        --light-purple: #e6caf7;
        --dark-purple: #4a0a70;
        --yellow: #fdbb58;
        --orange: #fe872f;
    }


    body {
        margin: 0px;
    }

    main {
        font-family: 'Lato', sans-serif;
        margin: 0px;
        text-align: center;
    }

    .heading {
        margin: 0px;
        padding: 40px;
        text-align: center;
        color: var(--pink);
    }

    .heading h1 {
        margin: 0px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .dots {
        position: sticky;
        top: 10%;
        width: 600px;
        height: 400px;
        margin: auto;
    }

    .section {
        height: 200vh;
        display: flex;
        justify-content: center;
        place-items: center;
        align-items: center;
        text-align: center;
    }

    section {
        position: relative;
		height: 80vh;
		/* background-color: rgba(0,0,0,0.5);
		color: white;
		padding: 1em;
		margin: 0 0 2em 0; */
        margin: 0 auto;
	}

    .background {
        width: 100%;
        height: 100vh;
        position: relative;
    }

    .foreground {
        width: 80%;
        margin: 0 auto;
        height: auto;
        position: relative;
    }

    .hide {
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s linear 300ms, opacity 300ms;
    }

    .show {
        visibility: visible;
        opacity: 1;
        transition: visibility 0s linear 0s, opacity 300ms, color 300ms ease;
    }

    .sticky-divider-label {
        padding-top: 30px;
        font-size: 35px;
        position: sticky;
        top: 0px;
    }

    .step-name {
        font-weight: 800;
        transition: 50ms ease;
    }

    .before {
        color: var(--dark-purple);
    }

    .during {
        color: var(--pink);
    }

    .after {
        color: var(--orange);
    }

    .men-and-women-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        text-transform: uppercase;
        font-size: 20px;
        width: 60%;
        margin: auto;
    }

    .migration-step-header {
        text-transform: uppercase;
    }

    .coin {
        margin: -50px 0 0 -50px;
        width: 100px;
        height: 100px;
        position: absolute;
        top: 50%;
        left: 50%;
    }

    .coin .front {
    width: 100%;
    height: 100%;
    
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    }

    .coin .back {
    width: 100%;
    height: 100%;
    background: #f7941e;
    border-radius: 50%;
    transform: rotateY(180deg) translateZ(10px);
    -webkit-transform: rotateY(180deg) translateZ(10px);
    -ms-transform: rotateY(180deg) translateZ(10px);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    }

    .coin .front_b {
    width: 100%;
    height: 100%;
    background: #f7941e;
    border-radius: 50%;
    transform: translateZ(-1px);
    -webkit-transform: translateZ(-1px);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    }

    .coin .back_b {
    width: 100%;
    height: 100%;
    background: #f7941e;
    border-radius: 50%;
    transform: translateZ(-9px);
    -webkit-transform: translateZ(-9px);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    }

    .coin:before {
    content: "";
    margin-left: -5px;
    width: 10px;
    height: 100%;
    background: #f7941e;
    position: absolute;
    top: 0;
    left: 50%;
    z-index: 1;
    -webkit-transform: rotateY(-90deg);
    -webkit-transform-origin: 100% 50%;
    transform: rotateY(-90deg);
    transform-origin: 100% 50%;
    }

    .coin .front_b:before {
    content: "";
    width: 100%;
    height: 100%;
    border: 10px solid #fbb041;
    border-radius: 50%;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    }

    .coin .front_b:after {
    content: "$";
    padding: 12px 0 0 0;
    width: 100%;
    height: 100%;
    font-size: 5em;
    font-weight: bold;
    color: #fbb041;
    line-height: 1;
    text-align: center;
    box-sizing: border-box;
    position: absolute;  
    top: 0;
    left: 0;
    z-index: 4;
    }

    .coin .back:before {
    content: "";
    width: 100%;
    height: 100%;
    border: 10px solid #fbb041;
    border-radius: 50%;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -3;
    }

    .coin .back:after {
    content: "100";
    padding: 27px 0 0 0;
    width: 100%;
    height: 100%;
    font-size: 3em;
    font-weight: bold;
    color: #fbb041;
    line-height: 1;
    text-align: center;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -4;
    }

    @keyframes coin {
    0% {
        transform: rotateY(0);
    }
    100% {
        transform: rotateY(360deg);
    }
    }
	
h2 {
    text-align: center;
}

.container {
    text-align: center;
}
.debt-button{
    text-align: center;
}
button {
    background-color: #4a0a70; /* Purple */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }

.container {
    width: 80%;
    margin: auto;
  }
  
  .counter-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  
  .counter {
    text-align: center;
  }
  
  .counter h3 {
    padding: 0.5rem 0;
    font-size: 2.5rem;
    font-weight: 800;
  }
  
  .counter h6 {
    font-size: 2rem;
    padding-bottom: 1rem;
  }
  
  .icon {
    height: 5rem;
    width: auto;
  }

    /* :root {
        --color-bg: #ffffff;
        --color-outline: #c2c2c2;
        --color-shadow: hsl(0, 0%, 0%, 0.1);
        --color-text: #3f4252;
        --color-bg-1: hsla(0, 0%, 0%, 0.2);
        --color-shadow-1: hsl(0, 0%, 96%);
    }

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    main {
        text-align: center;
        font-family: "Nunito", sans-serif;
        font-weight: 300;
        line-height: 2;
        font-size: 24px;
        color: var(--color-text);
        margin-top: 100px;
    }

    label,
    input,
    button {
        font-family: inherit;
        font-weight: inherit;
        line-height: inherit;
        font-size: 24px;
        width: 100%;
    }

    input {
        padding-left: 40px;
        line-height: 72px;
        font-style: italic;
        border: none;
    }

    ::placeholder {
        color: #9e9e9e;
    }

    
	{
        font-size: 72px;
        font-weight: 300;
        line-height: 2;
    }

    h2 {
        font-size: 30px;
        font-weight: 300;
        line-height: 1.5;
    }

    .todos {
        display: inline-block;
        vertical-align:top;
        width: 500px;
        background-color: var(--color-bg);
        border-radius: 5px;
        border: 1px solid var(--color-outline);
        box-shadow: 0 0 4px var(--color-shadow);
    }

    .graph {
        display: inline-block;
        margin-left: 50px;
    }

    .actions {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .actions:before {
        content: "";
        height: 40px;
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        box-shadow: 0 1px 1px var(--color-shadow-1), 0 8px 0 -3px var(--color-shadow-1),
            0 9px 1px -3px var(--color-bg-1), 0 16px 0 -6px var(--color-shadow-1),
            0 17px 2px -6px var(--color-bg-1);
        z-index: -1;
    } */
</style>
