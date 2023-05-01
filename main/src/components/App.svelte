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

        <Scroller top={0.0} bottom={0} threshold={0.2} bind:count bind:index bind:offset bind:progress>
            <div class="background" slot="background">
                <div class="sticky-divider-label {progress < 0.11 ? 'hide' : 'show'}">
                    <div class="migration-step-header">
                        <span class="step-name {migrationStep}">{migrationStep}</span> migration
                    </div>
                    <div class="men-and-women-header">
                        <h2>Women</h2>
                        <h2>Men</h2>
                    </div>
                </div>
            </div>

            <div class="foreground" slot="foreground">
                <div class="heading">
                    <h1>Differences in the migration experience between men and women</h1>
                    <h1>in Central America</h1>
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
        padding: 40px;
        text-align: center;
        color: var(--pink);
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
    }

    .show {
        visibility: visible;
        opacity: 1;
        transition: visibility 0s linear 0s, opacity 300ms, color 300ms ease;
    }

    .sticky-divider-label {
        padding-top: 30px;
        font-size: 35px;
        position: sticky;
        top: 0px;
        background-color: #fff59d;
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
        justify-content: space-between;
        text-transform: uppercase;
        font-size: 20px;
        width: 60%;
        margin: auto;
    }

    .migration-step-header {
        text-transform: uppercase;
    }

</style>
