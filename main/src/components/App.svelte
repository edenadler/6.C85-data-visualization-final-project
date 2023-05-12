<script>
    import * as d3 from "d3";
    import { onMount } from "svelte";
    import Before from "./Before.svelte";
    import During from "./During.svelte";
    import After from "./After.svelte";
    import Scroller from "@sveltejs/svelte-scroller";

    let count, index, offset, progress;

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
        <div class="sticky-divider-label {progress < 0.11 ? 'hide' : 'show'}">
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

        <Scroller top={0.0} bottom={0} threshold={0.2} bind:count bind:index bind:offset bind:progress>
            <div class="background" slot="background">
                <section>1</section>
                <section>2</section>
            </div>

            <div class="foreground" slot="foreground">
                <div class="heading">
                    <h1>Do Central American men and women have the same migration experience?</h1>
                </div>
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
        padding-top: 157.8px;
    }

    main {
        font-family: 'Lato', sans-serif;
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
        height: 50vh;
        padding: 40px;
        text-align: center;
        color: var(--pink);
        display: flex;
        justify-content: center;
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
        width: 80%;
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
        padding-top: 30px;
        font-size: 35px;
        position: sticky;
        top: 0px;
        background-color: #fff59d;
        z-index: 100;
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

</style>
