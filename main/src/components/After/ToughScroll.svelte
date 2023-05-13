<script>
    import Scroller from "@sveltejs/svelte-scroller";
    import { fade, fly } from 'svelte/transition';

    const debug = false;
    let top = 0.0;
    let bottom = 1;
    let threshold = 0.5;
    let count, index, offset, progress;
    let width, height;

</script>

<div>
    <!-- <iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/edenadler/embed/qBJPNmb?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
        See the Pen <a href="https://codepen.io/edenadler/pen/qBJPNmb">
        Untitled</a> by Eden (<a href="https://codepen.io/edenadler">@edenadler</a>)
        on <a href="https://codepen.io">CodePen</a>.
      </iframe> -->
    <Scroller top={top} bottom={bottom} threshold={threshold} bind:count bind:index bind:offset bind:progress>
        <div class="background" slot="background" bind:clientWidth={width} bind:clientHeight={height}>
            <div class="end-scroller">
                {#if index >= 1}
                <div class="tough-text" transition:fade={{duration: 1000}}>
                    IT'S
                </div>
                {/if}
                {#if index >= 2}
                <div class="tough-text" transition:fade={{duration: 2000}}>
                    HARDER
                </div>
                {/if}
                {#if index >= 5}
                <div class="tough-text" transition:fade={{duration: 4000}}>
                    FOR
                </div>
                {/if}
                {#if index >= 8}
                <div class="tough-text" transition:fade={{duration: 6000}}>
                    WOMEN
                </div>
                {/if}
            </div>
            <!-- Optionally draw info for debugging -->
        {#if debug}
        <div class="progress-bars">
            <p>current section: <strong>{index + 1}/{count}</strong></p>
            <progress value={count ? (index + 1) / count : 0} />
        
            <p>offset in current section</p>
            <progress value={offset || 0} />
        
            <p>total progress</p>
            <progress value={progress || 0} />
        </div>
        {/if}
        </div>

        <div class={`foreground ${debug ? 'debug-foreground' : ''}`} slot="foreground">
            <section class={`${debug ? 'debug-section' : ''}`}></section> 
            <section class={`${debug ? 'debug-section' : ''}`}></section>
            <section class={`${debug ? 'debug-section' : ''}`}></section>
            <section class={`${debug ? 'debug-section' : ''}`}></section> 
            <section class={`${debug ? 'debug-section' : ''}`}></section>
            <section class={`${debug ? 'debug-section' : ''}`}></section>
            <section class={`${debug ? 'debug-section' : ''}`}></section>
            <section class={`${debug ? 'debug-section' : ''}`}></section>
            <section class={`${debug ? 'debug-section' : ''}`}></section>
            <section class={`${debug ? 'debug-section' : ''}`}></section>
        </div>
    </Scroller>
</div>

<style>

    .end-scroller {
        font-size: 50px;
    }

    .background {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 70vh;
        margin: 0;
        padding: 0;
        position: relative;
        margin-top: 200px;
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

    .tough-text {
        transition: fade
    }

</style>