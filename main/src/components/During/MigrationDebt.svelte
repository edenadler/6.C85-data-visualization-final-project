<script context="module">
    export function animateDebt() {
    const counters = document.querySelectorAll(".count");
    const speed = 150;
        counters.forEach((counter) => {
            const updateCount = () => {
                const target = parseInt(+counter.getAttribute("data-target"));
                const count = parseInt(+counter.innerText);
                const increment = Math.trunc(target / speed);
                console.log(increment);
                if (count < target) {
                    counter.innerText = count + increment;
                    setTimeout(updateCount, 1);
                } else {
                    count.innerText = target.toLocaleString();
                }
            };
            updateCount();
        });
    }
</script>


<style>
</style>
