<script>
    import GoCalendar from 'svelte-icons/go/GoCalendar.svelte';
    import CalendarView from './After/CalendarView.svelte';
    import CaledarView from "./After/CalendarView.svelte";
    import EarningsView from './After/EarningsView.svelte';
//     import { getContext } from 'svelte';
//     import { LayerCake, Svg, calcExtents } from 'layercake';
//   import { timeFormat } from 'd3-time-format';
//   import { timeDay } from 'd3-time';

const debug = false;
let top = 0.0;
let bottom = 1;
let threshold = 0.5;

let width, height;

function changeWheelSpeed(container, speedY) {
    console.log(container, speedY)
    
    var removed = false;
    var scrollY = 0;
    var handleScrollReset = function() {
        scrollY = container.scrollTop;
    };
    var handleMouseWheel = function(e) {
        e.preventDefault();
        scrollY += speedY * e.deltaY
        if (scrollY < 0) {
            scrollY = 0;
        } else {
            var limitY = container.scrollHeight - container.clientHeight;
            if (scrollY > limitY) {
                scrollY = limitY;
            }
        }
        container.scrollTop = scrollY;
    };
    container.addEventListener('mouseup', handleScrollReset, false);
    container.addEventListener('mousedown', handleScrollReset, false);
    container.addEventListener('mousewheel', handleMouseWheel, false);
    return function() {
        if (removed) {
            return;
        }
        container.removeEventListener('mouseup', handleScrollReset, false);
        container.removeEventListener('mousedown', handleScrollReset, false);
        container.removeEventListener('mousewheel', handleMouseWheel, false);
        removed = true;
    };
}
let count, index, offset, progress;

let container0;

    // changeWheelSpeed(container0, 0.05);  // 0.05 * default_scroll_speed
    // changeWheelSpeed(container2, 0.5);   // 0.5  * default_scroll_speed
    // changeWheelSpeed(container3, 2.0);   // 1.5  * default_scroll_speed

    // https://dirask.com/posts/JavaScript-change-mouse-wheel-speed-13My9p

</script>
  
<div>
    <div class="vis-container">
        
        <EarningsView />
        <div class="source">source</div>
        <!-- <a href="https://www.census.gov/data/tables/2020/demo/foreign-born/cps-2020.html">Source (Table 3.11)</a> -->
    </div>
    <div class="transition-text" >
        <div>It may look like the differences here are small.</div>
        <div>Let's see the difference in Maria and Jose's <span class="orange">payback timeline</span> for their migration debt</div>
    </div>

    <div class="calendar-container">
        <h2>Time to pay off debt</h2>
        <CalendarView />
        <div class="calendar-text">
            <div>13 months</div>
            <div>7 months</div>
        </div>
    </div>

    <!-- <div>
        {#each days as day}
            <rect
                class="day"
                width="{cellSize}"
                height="{cellSize}"
                x="{rectX(day)}"
                y="{rectY(day)}"
                style="fill:{fillColor(day)};"
                on:mouseenter="{showCount(day)}"
            />
        {/each}

    </div> -->

    <!-- https://www.migrationpolicy.org/sites/default/files/publications/mpi-wfp-mit_migration-motivations-costs_final.pdf -->

    <!-- <section class="scroll-zone" data-scroll-speed="0.5" bind:this={container0} onscroll={changeWheelSpeed(container0, 0.05)}>
        It's
    </section>
    <section class="scroll-zone" data-scroll-speed="0.25">
        harder
    </section>
    <div class="scroll-zone" data-scroll-speed="0.1">
        for
    </div>
    <div class="scroll-zone" data-scroll-speed="0.05">
        women
    </div> -->

</div>

<style>

  .transition-text {
    font-size: 30px;
    padding: 50px;
    margin: 50px 0px;
  }

  .transition-text span {
    color: #ce2093;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0px 5px;
  }

  .transition-text .orange, .columns-container .orange {
    color: #fe872f;
  }

  .transition-text .purple {
    color: #4a0a70;
  }

.source {
  font-size: 10px;
  color: rgb(207, 184, 207);
  margin: 30px 0px;
}

.day {
    stroke: #000;
    stroke-width: 1;
    fill: #fff;
  }

  .cal-icon {
    width: 60px;
  }

    .vis-container {
        text-align: center;
        width: 80%;
        margin: 190px auto;
    }

    .earnings-container {
        display: flex;
        flex-direction: row;
        margin: auto;
        justify-content: space-around;
        font-size: 40px;
    }


    .calendar-text {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        font-size: 30px;
    }

    .calendar-icons {

    }

    .calendar-vis {
        display: flex;
        
    }

    .calendar-vis div {
        display: flex;
    }

    /* section {
        height: 100vh;
    } */

    .end-scroller {

    }

    .background {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        margin: 0;
        padding: 0;
        position: relative;
    }
    .debug-background {
        outline: green solid 3px;
    }

    .foreground {
        width: 100%;
        position: relative;
        left: 0%;
    }
    .debug-foreground {
        outline: red solid 3px;
    }

    .progress-bars {
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(170, 51, 120, 0.2) /*  40% opaque */;
        visibility: visible;
    }

    section {
        display: flex;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0); /* 20% opaque */
        color: white;
        justify-content: center;
    }
    .debug-section {
        outline: blue solid 3px;
    }

    .calendar-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
    }

</style>