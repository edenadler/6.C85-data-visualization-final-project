<script>

</script>

<div>
    <h2>Median earnings for Central American migrants in the US</h2>
    <svg width="960" height="400">
        <g>
            <g class="persona-name" transform="translate(-150,47)">
                <rect class="maria" width="133" height="70" rx="40"></rect>
                <text dy="0.32em" x="100" y="35" style="text-anchor: end; fill: white; font-size: 25px; font-weight: 700;">Maria</text>
            </g>

            <g class="persona-name" transform="translate(870,120)">
                <rect class="jose" width="113" height="70" rx="40"></rect>
                <text dy="0.32em" x="80" y="35" style="text-anchor: end; fill: white; font-size: 25px; font-weight: 700;">Jose</text>
            </g>

            <rect class="bar bar-negative women" x="23" y="57" width="207" height="49"></rect>
            <rect class="bar bar-negative men" x="69" y="130" width="161" height="49"></rect>
            
            <rect class="bar bar-positive women" x="230" y="57" width="509" height="49"></rect>
            <rect class="bar bar-positive men" x="230" y="130" width="600" height="49"></rect>
            <!-- <rect class="bar bar-negative" x="89" y="57" width="90" height="49"></rect>
            <rect class="bar bar-negative" x="109" y="117" width="70" height="49"></rect>
            <rect class="bar bar-positive" x="180" y="57" width="386" height="49"></rect>
            <rect class="bar bar-positive" x="180" y="117" width="455" height="49"></rect> -->
        </g>
        <g class="x axis" transform="translate(0, 250)">
            <g class="tick" transform="translate(180,-167)">
                <line x2="0" y2="0"></line>
                <text dy="0.32em" x="-6" style="text-anchor: end;">$4,425</text>
            </g>
            <g class="tick" transform="translate(180,-93)">
                <line x2="0" y2="0"></line>
                <text dy="0.32em" x="-6" style="text-anchor: end;">$3,575</text>
            </g>


            <g class="tick" transform="translate(0,0)">
                <line y2="6" x2="0"></line>
                <text dy="0.71em" x="30" y="12" style="text-anchor: end;">$5,000</text>
            </g>
            <g class="tick" transform="translate(46,0)">
                <line y2="6" x2="0"></line>
                <text dy="0.71em" x="30" y="12" style="text-anchor: end;"></text>
            </g>
            <g class="tick" transform="translate(92,0)">
                <line y2="6" x2="0"></line>
                <text dy="0.71em" x="30" y="12" style="text-anchor: end;">$3,000</text>
            </g>
            <g class="tick" transform="translate(138,0)">
                <line y2="6" x2="0"></line>
                <text dy="0.71em" x="30" y="12" style="text-anchor: end;"></text>
            </g>
            <g class="tick" transform="translate(184,0)">
                <line y2="6" x2="0"></line>
                <text dy="0.71em" x="30" y="12" style="text-anchor: end;">$1,000</text>
            </g>

            <g class="tick" transform="translate(92,80)">
                <text dy="0.71em" x="30" y="12" style="text-anchor: end;">Debt</text>
            </g>
            <g class="tick" transform="translate(162,100)">
                <text dy="0.71em" x="30" y="20" style="text-anchor: end; font-size: 15px">(for the cost of 1 migration)</text>
            </g>

            <path class="domain" d="M0,6V0H900V6"></path>
        </g>
        <g class="y axis" transform="translate(230, 0)">
            <g class="tick" transform="translate(230,80)">
                <line x2="0" y2="0"></line>
                <text dy="0.32em" x="-6" style="text-anchor: end; fill: white;">$38,673</text>
            </g>
            <g class="tick" transform="translate(230,155)">
                <line x2="0" y2="0"></line>
                <text dy="0.32em" x="-6" style="text-anchor: end; fill: white;">$45,588</text>
            </g>


            <g class="tick" transform="translate(670,250)">
                <line y2="6" x2="0"></line>
                <text dy="0.71em" x="30" y="12" style="text-anchor: end;">$50,000</text>
            </g>
            <g class="tick" transform="translate(536,250)">
                <line y2="6" x2="0"></line>
                <text dy="0.71em" x="30" y="12" style="text-anchor: end;"></text>
            </g>
            <g class="tick" transform="translate(402,250)">
                <line y2="6" x2="0"></line>
                <text dy="0.71em" x="30" y="12" style="text-anchor: end;">$30,000</text>
            </g>
            <g class="tick" transform="translate(268,250)">
                <line y2="6" x2="0"></line>
                <text dy="0.71em" x="30" y="12" style="text-anchor: end;"></text>
            </g>
            <g class="tick" transform="translate(134,250)">
                <line y2="6" x2="0"></line>
                <text dy="0.71em" x="30" y="12" style="text-anchor: end;">$10,000</text>
            </g>

            <g class="tick" transform="translate(402,330)">
                <text dy="0.71em" x="30" y="12" style="text-anchor: end;">Median Earnings per year</text>
            </g>

            <path class="domain" d="M0,0H0V250H0"></path>
        </g>
        <!-- <g class="x axis" transform="translate(0, 250)">
            <path class="domain" d="M0,6V0H900V6"></path>
        </g>
        <g class="y axis" transform="translate(180, 0)">
            <path class="domain" d="M0,0H0V250H0"></path>
        </g> -->
    </svg>
</div>

<style>
    svg {
        overflow: visible;
    }
    .bar-positive {
        fill: #4a0a70;
    }

    .bar-negative {
        fill: #e6caf7;
    }

    .axis text {
        font-size: 20px;
        fill: #000;
    }

    .axis path,
    .axis line {
        fill: none;
        stroke: #000;
        shape-rendering: crispEdges;
    }

    .bar-negative.women {
        stroke-dasharray: 464, 0;
        stroke: #ce2093;
        stroke-width: 4;
    }

    .bar-negative.men {
        stroke-dasharray: 372, 0 ;
        stroke: #fe872f;
        stroke-width: 4;
    }

    .bar-positive.women {
        stroke-dasharray: 49, 0, 510, 0, 510 ;
        stroke: #ce2093;
        stroke-width: 4;
    }

    .bar-positive.men {
        stroke-dasharray: 49, 0, 601, 0, 601;
        stroke: #fe872f;
        stroke-width: 4;
    }

    .maria {
        fill: #ce2093;
    }

    .jose {
        fill: #fe872f;
    }
</style>