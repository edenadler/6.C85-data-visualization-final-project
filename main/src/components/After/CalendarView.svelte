<script>
import { timeFormat } from 'd3-time-format';
import { backInOut, linear } from 'svelte/easing';
import {blur, fade, fly, scale, slide} from 'svelte/transition';

let clicked = false;

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

function revealTimeline() {
    clicked = true;
}

function getMonthName(monthIndex) {
    const date = new Date(2023, monthIndex);
    return date.toLocaleString('default', { month: 'long' });
}

function numDays(month) {
    return new Date(2023, month, 0).getDate()
}

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
    <button on:click={revealTimeline}>How many months?</button>
    <div class="calendar-container">
        <div class="calendar-count">
            <div class="calendar-title">
                <div class="persona-name maria" ><span>Maria</span></div>
                <div class="calendar-result-text">{clicked ? '11 months, 18 days' : '0 months'}</div>
            </div>
        </div>
        <div class="calendar-count">
            <div class="calendar-title">
                <div class="persona-name jose" ><span>José</span></div>
                <div class="calendar-result-text">{clicked ? '7 months, 19 days' : '0 months'}</div>
            </div>
        </div>
    </div>
    {#if clicked}
    <div class="calendar-container" in:fade={{duration: 500, easing: linear}}>
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
    <div class="transition-text" >
        <div>It takes women <span class="pink">4 months longer than men</span>to repay their migration debt</div>
    </div>
    <div class="transition-text" >
        <div>And this is a <span class="pink">conservative estimate</span>. This calculation only takes into account migration debt, not total debt. This also assumes that installments are paid monthly and most noteably doesn't take into account accured interest over time...</div>
    </div>
    {/if}
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

    button {
        background-color: #4a0a70;
        color: white;
        font-size: 36px;
        padding: 20px 40px;
        border-radius: 4px;
        border: none;
        cursor: pointer;
        margin-top: 16px;
        transition: background-color 0.2s;
        width: fit-content;
        align-self: center;
        text-transform: uppercase;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease 0s;
        cursor: pointer;
        outline: none;
    }

    button:hover {
        background-color: #7d13bb;
        box-shadow: 0px 15px 20px rgba(74, 10, 112, 0.4);
        color: #fff;
        transform: translateY(-7px);
    }

    .transition-text {
    font-size: 30px;
    padding: 50px;
    margin: 50px 0px;
  }

  .transition-text span {
    color: #ce2093;
    text-transform: uppercase;
    font-weight: 700;
    /* margin: 0px 5px; */
  }

  .transition-text .orange, .columns-container .orange {
    color: #fe872f;
  }

  .transition-text .purple {
    color: #4a0a70;
  }
</style>