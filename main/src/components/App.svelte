<script>
    import * as d3 from "d3";
    import { onMount } from "svelte";

    onMount(() => {
        let simulation = d3.forceSimulation(nodes)
            .force('charge', d3.forceManyBody().strength(5))
            .force('x', d3.forceX().x(function(d) {
                return xCenter[d.category];
            }))
            .force('collision', d3.forceCollide().radius(function(d) {
                return d.radius;
            }))
            .on('tick', ticked);
    })

    let width = 600;
    let height = 400;

    const colorScale = ['orange', 'lightblue', '#B19CD9'];
    let xCenter = [100, 300, 500];

    let numNodes = 100;
    let nodes = d3.range(numNodes).map(function(d, i) {
        return {
            radius: Math.random() * 25,
            category: i % 3
        }
    });

    function ticked() {
        let u = d3.select('svg g')
            .selectAll('circle')
            .data(nodes)
            .join('circle')
            .attr('r', function(d) {
                return d.radius;
            })
            .style('fill', function(d) {
                return colorScale[d.category];
            })
            .attr('cx', function(d) {
                return d.x;
            })
            .attr('cy', function(d) {
                return d.y;
            });
    }

    function collide() {
        let forceSimulation =  d3.forceSimulation(nodes)
            .force('charge', d3.forceManyBody().strength(5))
            .force('center', d3.forceCenter(200, 50))
            .force('collision', d3.forceCollide().radius(function(d) {
                return d.radius
            }))
            .on('tick', ticked);
    }
</script>

<main>

    <div>
        <h1>Title</h1>

        <div class="coin">
            <div class="front"></div>
            <div class="front_b"></div>
            <div class="back"></div>
            <div class="back_b"></div>
        </div>

        <div id="content">
            <svg width="600" height="400">
              <g transform="translate(50, 200)">
                  {#each nodes as node}
                    <circle r={node.radius} style={'fill: ' + colorScale[node.category]} cx={xCenter[node.category]} cy={node.y}></circle>
                  {/each}
              </g>
            </svg>
        </div>

        <button on:click={() => collide()}>tick</button>
    </div>

</main>

<style>
    /* https://codepen.io/parcon/pen/oxbLVd */
    @import url("https://fonts.googleapis.com/css?family=Ek+Mukta:400,300,500,700,800");
    
    main {
        font-family: 'Ek Mukta', sans-serif;
        background: #fff59d;
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
