<script>
import * as d3 from "d3";
import { onMount } from "svelte";
import { timeFormat } from 'd3-time-format';
import { timeDay } from 'd3-time';
    import { detach_before_dev } from "svelte/internal";

// onMount(() => {
//     render();
// })

const cellSize = 20;

const getDayOfWeek = timeFormat('%w');
const getWeekOfYear = timeFormat('%U');

$: rectX = day => getDayOfWeek(day) * cellSize;
$: rectY = day => {
    const startWeek = getWeekOfYear(new Date(day.getUTCFullYear(), day.getUTCMonth(), 1));
    const thisWeek = getWeekOfYear(day);
    const weekDiff = thisWeek - startWeek;
    return weekDiff * cellSize;
};

// women 4500 migration debt 
// men 3500 migration debt 

// 11.63 installments for women
// 7.67 installments for men

const numDays = function(year, month) {
    return new Date(year, month, 0).getDate()
}

let month = [
{
    weekday: 0,
    day: 0,
    week: 0
},
{
    weekday: 1,
    day: 1,
    week: 0
},
{
    weekday: 2,
    day: 2,
    week: 0
},
{
    weekday: 3,
    day: 3,
    week: 0
},
{
    weekday: 4,
    day: 4,
    week: 0
},
{
    weekday: 5,
    day: 5,
    week: 0
},
{
    weekday: 6,
    day: 6,
    week: 0
},
{
    weekday: 0,
    day: 7,
    week: 1
},
{
    weekday: 1,
    day: 8,
    week: 1
},
{
    weekday: 2,
    day: 9,
    week: 1
},
{
    weekday: 3,
    day: 10,
    week: 1
},
{
    weekday: 4,
    day: 11,
    week: 1
},
{
    weekday: 5,
    day: 12,
    week: 1
},
{
    weekday: 6,
    day: 13,
    week: 1
},
{
    weekday: 0,
    day: 14,
    week: 2
},
{
    weekday: 1,
    day: 15,
    week: 2
},
{
    weekday: 2,
    day: 16,
    week: 2
},
{
    weekday: 3,
    day: 17,
    week: 2
},
{
    weekday: 4,
    day: 18,
    week: 2
},
{
    weekday: 5,
    day: 19,
    week: 2
},
{
    weekday: 6,
    day: 20,
    week: 2
},
{
    weekday: 0,
    day: 21,
    week: 3
},
{
    weekday: 1,
    day: 22,
    week: 3
},
{
    weekday: 2,
    day: 23,
    week: 3
},
{
    weekday: 3,
    day: 24,
    week: 3
},
{
    weekday: 4,
    day: 25,
    week: 3
},
{
    weekday: 5,
    day: 26,
    week: 3
},
{
    weekday: 6,
    day: 27,
    week: 3
},
{
    weekday: 0,
    day: 28,
    week: 4
},
]


</script>

<div class="calendar-container">
    <!-- https://codepen.io/tornord/pen/Qzmbbg -->
    {#each Array(3) as _, i}
        <svg>
            <g>
                {#each month as date}
                    <rect
                    class="day"
                    width="{cellSize}"
                    height="{cellSize}"
                    x="{date.weekday * cellSize}"
                    y="{date.week * cellSize}"
                    style="stroke-width: 1; stroke: black; fill: #fe872f;"
                    />
                {/each} 
            </g>
        </svg>
    {/each}
    <!-- style="fill:{fillColor(day)};"
                on:mouseenter="{showCount(day)}" -->
</div>

<style>
    svg {
        max-width: 200px;
    }

    .calendar-container {
        display: flex;
    }
</style>