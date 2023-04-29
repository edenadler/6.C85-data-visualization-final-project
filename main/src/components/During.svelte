<script context="module">

</script>

<script>
</script>
  
<div class="During">
  <h1>During Migration</h1>
  
  <div class="container">
        <div class="heading">
          <h2>How much debt do people incur to migrate?</h2>
        </div>
        <div class="counter-container">
          <div class="counter">
            <!-- <img src="https://raw.githubusercontent.com/nemo0/animated-counter/29e12c0cb15e90c27faaef0d83fb2618126067db/icons/iconmonstr-time-19.svg" alt="timer" srcset="" class="icon"> -->
            <img src="images/latinaicon.jpeg" alt="timer" srcset="" class="icon">
            <h3 data-target="4425" class="count">0</h3>
            <h6>Women's Migratory Debt</h6>
          </div>
          <div class="counter">
            <!-- <img src="https://raw.githubusercontent.com/nemo0/animated-counter/29e12c0cb15e90c27faaef0d83fb2618126067db/icons/iconmonstr-coffee-11.svg" alt="Coffee" srcset="" class="icon"> -->
            <img src="images/latinoicon.jpeg" alt="timer" srcset="" class="icon">
            <h3 data-target="3575" class="count">0</h3>
            <h6>Men's Migratory Debt</h6>
          </div>
        </div>
      </div>
      <div class = "debt-button">
          <button onclick="animateDebt();">Find out the cost of debt.</button>
      </div>

      <div id="accompany">
        <h2>Who do people travel with on the migration journey?</h2>
        <script src = "src/accompany.js"></script>
      </div>
      
      <div class = "sexual-violence"> 
        <h2>80% of women experience sexual violence on the migrant journey to the US.</h2>
        <img class="violencechart" src="images/SexualViolenceChart.jpg" onmouseover="this.src='images/SexualViolenceChartNoLoop.gif';">
      </div>
</div>

<style>
    h1 {
    text-align: center;
}

.container {
    text-align: center;
}

.debt-button{
    text-align: center;
}

button {
    background-color: #4a0a70; /* Purple */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }

#accompany{
    text-align: center;
}

#migration-debt {
    text-align: center;
}

.sexual-violence {
    text-align: center;

}

.container {
    width: 80%;
    margin: auto;
  }
  
  .counter-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  
  .counter {
    text-align: center;
  }
  
  .counter h3 {
    padding: 0.5rem 0;
    font-size: 2.5rem;
    font-weight: 800;
  }
  
  .counter h6 {
    font-size: 2rem;
    padding-bottom: 1rem;
  }
  
  .icon {
    height: 5rem;
    width: auto;
  }
</style>
  
