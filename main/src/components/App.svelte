<script>
    import * as d3 from "d3";
    import { onMount } from "svelte";
    import Before from "./Before.svelte";
    import During from "./During.svelte";
    import After from "./After.svelte";
    import Scroller from "@sveltejs/svelte-scroller";
    import ToughScroll from "./After/ToughScroll.svelte";
    import { backInOut, linear } from 'svelte/easing';
	import {blur, fade, fly, scale, slide} from 'svelte/transition';

    let count, index, offset, progress;

    let node;
	$: containerHeight = node?.offsetHeight ?? 0;

    let migrationStep = 'before';

    $: if (index == 0) {
        migrationStep = 'before'
    } else if (index == 1) {
        console.log(count, index, offset, progress)
        migrationStep = 'during'
    } else {
        migrationStep = 'after'
    }
</script>

<main>

    <div on:scroll={() => console.log(progress, offset)}>
        <!-- <div class="sticky-divider-label {progress < 0.11 ? 'hide' : 'show'}">
            <div class="migration-step-header">
                <span class="step-name {migrationStep}">{migrationStep}</span> migration
            </div>
            <div class="men-and-women-header">
                <div class="column-container">
                    <div class="col">
                        <h2>Women</h2>
                    </div>
                    <div class="col">
                        <h2>Men</h2>
                    </div>
                </div>
            </div>
        </div> -->

        <Scroller top={0.0} bottom={0} threshold={0.9} bind:count bind:index bind:offset bind:progress>
            <div class="background" slot="background">
                <section></section>
                <section></section>
            </div>

            <div class="foreground" slot="foreground">
                <div class="heading bind:this={node} {progress >= 0.005 ? 'scrolling' : 'at-top'}" in:fly={{y: -containerHeight, duration: 2000, easing: linear}} out:fly={{y: -containerHeight, duration: 2000, easing: linear}}>
                    <div class="title">Do Central American men and women have the same migration experience?</div>
                    {#if progress <= 0.005}
                        <div class="name-credit" in:fly={{y: -containerHeight, duration: 500, easing: linear}} out:fly={{y: -containerHeight, duration: 500, easing: linear, delay: 500}}>Eden Adler, Prerna Ravi, Lelia Marie Hampton</div>
                    {/if}

                    {#if progress > 0.005}
                    <div class="sticky-divider-label" in:fly={{y: containerHeight, duration: 2000, easing: linear, delay: 1000}} out:fly={{y: containerHeight, duration: 500, easing: linear}}>
                        <div class="migration-step-header">
                            <span class="step-name {migrationStep}">{migrationStep}</span> migration
                        </div>
                        <div class="men-and-women-header">
                            <div class="column-container">
                                <div class="col">
                                    <h2>Women</h2>
                                </div>
                                <div class="col">
                                    <h2>Men</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/if}
                </div>
                <div class="credit">This data visualization was made with data contributed by the United Nations World Food Programme (WFP)</div>
                <section>
                    <Before />
                </section>
                <section>
                    <During />
                </section>
                <section>
                    <After />
                </section>
                
                
            </div>

        </Scroller>
        <ToughScroll />
    </div>

</main>

<style>
    /* https://codepen.io/parcon/pen/oxbLVd */
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    
    :root {
        --pink: #ce2093;
        --light-purple: #e6caf7;
        --dark-purple: #4a0a70;
        --yellow: #fdbb58;
        --orange: #fe872f;
    }


    body {
        margin: 0px;
        padding-top: 157.8px;
    }

    main {
        font-family: 'Roboto', sans-serif;
        margin: 0px;
        text-align: center;
    }

    .vis-container {
        text-align: center;
        width: 80%;
        margin: 190px auto;
    }

    .heading {
        margin: 0px;
        height: 30vh;
        padding-top: 50px;
        text-align: center;
        color: white;
        display: flex;
        flex-direction: column;
        background-color: var(--dark-purple);
        position: sticky;
        top: 0px;
        z-index: 100;
    }

    .heading .title {
        margin: 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        margin-bottom: 30px;
        transition: font-size 2s ease;
    }

    .heading.scrolling .title {
        font-size: 1.2em;
        animation: up 2s forwards;
    }

    .heading.at-top .title {
        font-size: 2em;
        animation: down 2s forwards;
    }

    /* @keyframes up {
        from {transform: translateY(0vh);}
        to {transform: translateY(-4vh);}
    }

    @keyframes down {
        from {transform: translateY(-4vh);}
        to {transform: translateY(0vh);}
    } */

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
        width: 80%;
        position: relative;
		min-height: 80vh;
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
        margin: 0 auto;
        height: auto;
        position: relative;
    }

    .hide {
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s linear 300ms, opacity 300ms;
        display: none;
    }

    .show {
        visibility: visible;
        opacity: 1;
        transition: visibility 0s linear 0s, opacity 300ms, color 300ms ease;
        display: block;
    }

    .sticky-divider-label {
        font-size: 35px;
        /* padding-top: 30px;
        position: sticky;
        top: 0px;
        background-color: #fff59d;
        z-index: 100; */
    }

    .step-name {
        font-weight: 800;
        transition: color 500ms ease;
        margin-right: 10px;
    }

    .before {
        color: var(--yellow);
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
        justify-content: center;
        text-transform: uppercase;
        font-size: 20px;
        margin: auto;
    }

    .migration-step-header {
        text-transform: uppercase;
    }

    .column-container {
        display: flex;
        width: 60%;
        gap: 30%;
    }

    .col {
        display: flex;
        flex: 1;
        justify-content: center;
    }

    .credit {
        margin: 50px auto;
        color: #4a0a70;
        font-size: 16px;
        font-style: italic;
    }
</style>
