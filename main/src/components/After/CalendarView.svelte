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

function getMonthName(monthIndex) {
    const date = new Date(2023, monthIndex);
    return date.toLocaleString('default', { month: 'long' });
}

function numDays(month) {
    return new Date(2023, month, 0).getDate()
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

function getDateMonthsFromNow(months) {
    let date = new Date(2023, 0, 1);
    date.setMonth(date.getMonth() + months)
    return date 
}

const paybackPeriod = {
    women: {
        months: 11,
        remainder: 0.63,
        color: '#ce2093'
    },
    men: {
        months: 7,
        remainder: 0.637,
        color: '#fe872f'
    }
}


function allDates(monthsToPayback) {
    const now = new Date(2023, 0, 1);
    const future = getDateMonthsFromNow(monthsToPayback);;
    var daysOfYear = [];
    for (var d = now; d <= future; d.setDate(d.getDate() + 1)) {
        daysOfYear.push(new Date(d));
    }

    return daysOfYear;
}

function getFillByDate(paybackDetails, date) {
    const month = date.getMonth();
    const day = date.getDate()
    const daysInMonth = numDays(month);
    const fillToDate = daysInMonth * paybackDetails.remainder;
    console.log(month, day, daysInMonth, typeof fillToDate)

    if (month === paybackDetails.months) {
        console.log(month, day, daysInMonth, typeof fillToDate)
        if (day <= fillToDate) {
            return paybackDetails.color;
        } else {
            return 'white';
        }
    } else {
        return paybackDetails.color;
    }
}

</script>

<div>
    <div class="calendar-container">
        <div class="calendar-count">
            <div class="calendar-title">
                <div class="persona-name maria" ><span>Maria</span></div>
                <div class="calendar-result-text">11 months, 18 days</div>
            </div>
        </div>
        <div class="calendar-count">
            <div class="calendar-title">
                <div class="persona-name jose" ><span>Jose</span></div>
                <div class="calendar-result-text">7 months, 19 days</div>
            </div>
        </div>
    </div>
    <div class="calendar-container">
        <!-- https://codepen.io/tornord/pen/Qzmbbg -->
        <div class="calendar-column">
            {#each Array(paybackPeriod.women.months + 1) as _, i}
                <svg>
                    <g transform="translate(0, 20)">
                        {#each allDates(paybackPeriod.women.months + 1) as date}
                            {#if date.getMonth() === i}
                                <rect
                                class="day"
                                width="{cellSize}"
                                height="{cellSize}"
                                x="{rectX(date)}"
                                y="{rectY(date)}"
                                style="stroke-width: 1; stroke: black; fill: {getFillByDate(paybackPeriod.women, date)};"
                                data={getFillByDate(paybackPeriod.women, date)}
                                />
                            {/if}
                        {/each} 
                    </g>
                    <text x="35" y="0" style="color: black; font-size: 20px;" >{getMonthName(i)}</text>
                </svg>
            {/each}
        </div>
        <div class="calendar-column">
            {#each Array(paybackPeriod.men.months + 1) as _, i}
                <svg>
                    <g transform="translate(0, 20)">
                        {#each allDates(paybackPeriod.men.months + 1) as date}
                            {#if date.getMonth() === i}
                                <rect
                                class="day"
                                width="{cellSize}"
                                height="{cellSize}"
                                x="{rectX(date)}"
                                y="{rectY(date)}"
                                style="stroke-width: 1; stroke: black; fill: {getFillByDate(paybackPeriod.men, date)};"
                                data={getFillByDate(paybackPeriod.men, date)}
                                />
                            {/if}
                        {/each} 
                    </g>
                    <text x="35" y="0" style="color: black; font-size: 20px;" >{getMonthName(i)}</text>
                </svg>
            {/each}
        </div>
    </div>    
</div>

<style>
    svg {
        max-width: 180px;
        margin: 15px 0px;
        overflow: visible;
    }

    .calendar-container {
        display: flex;
        justify-content: center;
    }

    .calendar-column {
        max-width: 800px;
    }

    .calendar-count {
        display: flex;
        justify-content: center;
        flex-basis: 50%;
    }

    .calendar-result-text {
        font-size: 30px;
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

    .calendar-title {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        margin: 20px auto 50px;
    }
</style>