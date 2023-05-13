<script>
    import GoCalendar from 'svelte-icons/go/GoCalendar.svelte';
    import Scroller from "@sveltejs/svelte-scroller";
//     import { getContext } from 'svelte';
//     import { LayerCake, Svg, calcExtents } from 'layercake';
//   import { timeFormat } from 'd3-time-format';
//   import { timeDay } from 'd3-time';

const debug = false;
let top = 0.0;
let bottom = 1;
let threshold = 0.5;

let width, height;

//   https://layercake.graphics/components/CalendarMonth.svelte
//   console.log(getContext('LayerCake'))
// //   const { data, x, z, zScale, extents } = getContext('LayerCake');

//   /** @type {Function} [calcCellSize=(w, h) => Math.min(w / 7, h / 5)] - A function givn the canvas width and height as arguments and expects a return number that will be used as the width and height for each cell. The default will choose a size that fits seven cells across and five rows top to bottom. */
//   export let calcCellSize = (w, h) => Math.min(w / 7, h / 5);

//   const getDayOfWeek = timeFormat('%w');
//   const getWeekOfYear = timeFormat('%U');

//   const width = 50;
//   const height = 50;

//   $: count = date => {
//     const stringDate = date.toISOString().split('T')[0];
//     const days = $data.filter(d => $x(d) === stringDate)[0];
//     if (days) {
//       return $z(days);
//     }
//     return 0;
//   };

//   $: fillColor = day => {
//     const n = count(day);
//     return n ? $zScale(n) : '#fff';
//   };

//   $: cellSize = calcCellSize(width, height);

//   let days;

//   /* --------------------------------------------
//    * Calculate what month we're in and generate the full days of that month
//    */
//   $: {
//     const minDate = calcExtents.x[0];
//     const parts = minDate.split('-').map(d => +d);

//     days = timeDay.range(new Date(Date.UTC(parts[0], parts[1] - 1, 1)), new Date(Date.UTC(parts[0], parts[1], 1)));
//   }

//   $: rectX = day => getDayOfWeek(day) * cellSize;
//   $: rectY = day => {
//     const startWeek = getWeekOfYear(new Date(day.getUTCFullYear(), day.getUTCMonth(), 1));
//     const thisWeek = getWeekOfYear(day);
//     const weekDiff = thisWeek - startWeek;
//     return weekDiff * cellSize;
//   };

//   function showCount(day) {
//     console.log(day, count(day));
//   }

// CHANGING SPEED HERE

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
        <h2>Median earnings for Central American migrants in the US</h2>
        <div class="earnings-container">
            <div class="women">$38,673</div>
            <div class="men">$45,588</div>
        </div>
        <!-- <a href="https://www.census.gov/data/tables/2020/demo/foreign-born/cps-2020.html">Source (Table 3.11)</a> -->
    </div>

    <div>
        <h2>Time to pay off debt</h2>
        <div class="calendar-text">
            <div>13 months</div>
            <div>7 months</div>
        </div>
        <div class="calendar-vis">
            <div>
                <div class="cal-icon">
                    <div class="calendar-icons">
                        <GoCalendar />
                    </div>
                </div>
                <div class="cal-icon">
                    <div class="calendar-icons">
                        <GoCalendar />
                    </div>
                </div>
                <div class="cal-icon">
                    <div class="calendar-icons">
                        <GoCalendar />
                    </div>
                </div>
                <div class="cal-icon">
                    <div class="calendar-icons">
                        <GoCalendar />
                    </div>
                </div>
                <div class="cal-icon">
                    <div class="calendar-icons">
                        <GoCalendar />
                    </div>
                </div>
                <div class="cal-icon">
                    <div class="calendar-icons">
                        <GoCalendar />
                    </div>
                </div>
                <div class="cal-icon">
                    <div class="calendar-icons">
                        <GoCalendar />
                    </div>
                </div>
                <div class="cal-icon">
                    <div class="calendar-icons">
                        <GoCalendar />
                    </div>
                </div>
                <div class="cal-icon">
                    <div class="calendar-icons">
                        <GoCalendar />
                    </div>
                </div>
                <div class="cal-icon">
                    <div class="calendar-icons">
                        <GoCalendar />
                    </div>
                </div>
                <div class="cal-icon">
                    <div class="calendar-icons">
                        <GoCalendar />
                    </div>
                </div>
                <div class="cal-icon">
                    <div class="calendar-icons">
                        <GoCalendar />
                    </div>
                </div>
                <div class="cal-icon">
                    <div class="calendar-icons">
                        <GoCalendar />
                    </div>
                </div>
            </div>
            <div>
                <div class="cal-icon">
                    <div class="calendar-icons">
                        <GoCalendar />
                    </div>
                </div>
                <div class="cal-icon">
                    <div class="calendar-icons">
                        <GoCalendar />
                    </div>
                </div>
                <div class="cal-icon">
                    <div class="calendar-icons">
                        <GoCalendar />
                    </div>
                </div>
                <div class="cal-icon">
                    <div class="calendar-icons">
                        <GoCalendar />
                    </div>
                </div>
                <div class="cal-icon">
                    <div class="calendar-icons">
                        <GoCalendar />
                    </div>
                </div>
                <div class="cal-icon">
                    <div class="calendar-icons">
                        <GoCalendar />
                    </div>
                </div>
                <div class="cal-icon">
                    <div class="calendar-icons">
                        <GoCalendar />
                    </div>
                </div>
            </div>
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

</style>