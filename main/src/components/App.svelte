<script>
    import * as d3 from "d3";
    import { onMount } from "svelte";
    import Scrolly from "./Scrolly.svelte";
    import Before from "./Before.svelte";
    import During from "./During.svelte";
    import After from "./After.svelte";
    // import Scroller from "@sveltejs/svelte-scroller";

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
</script>

<main>

    <div>
        <h1 class="heading">Migration, Debt, and Gender</h1>

        <section>
            <!-- <div class="part-1"> -->
                <span>Women who migrated externally have $600 more debt on average than men</span>
                    <div class="dots">
                        <svg id="coins-1" width="600" height="400">
                            <g></g>
                        </svg>
                    </div>
            <!-- </div> -->

            <Scrolly bind:value={currentStep}>
                <div class="section" class:active={currentStep == 1}>
                    <Before/>
                </div>
                <div class="section" class:active={currentStep == 2}>
                    <During/>
                </div>
                <div class="section" class:active={currentStep == 3}>
                    <After/>
                </div>
            </Scrolly>
        </section>

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

</main>

<style>
    /* https://codepen.io/parcon/pen/oxbLVd */
    /* light purple #e6caf7
    dark purple #4a0a70
    pink #ce2093
    yellow #fdbb58
    orange #fe872f */
    @import url("https://fonts.googleapis.com/css?family=Ek+Mukta:400,300,500,700,800");
    
    body {
        margin: 0px;
    }

    main {
        font-family: 'Ek Mukta', sans-serif;
        margin: 0px;
        text-align: center;
    }

    .heading {
        margin: 0px;
        padding: 20px;
        text-align: center;
        color: #c32093;
    }

    .part-1 {

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
        /* position: relative;
		height: 80vh;
		background-color: rgba(0,0,0,0.5);
		color: white;
		padding: 1em;
		margin: 0 0 2em 0; */
        margin: 0 auto;
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

    h1 {
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
