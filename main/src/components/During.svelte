<script>
    import MigrationAccompanyWomen from "./During/MigrationAccompanyWomen.svelte";
    import MigrationAccompanyMen from "./During/MigrationAccompanyMen.svelte";
    import WomenCoins from "./During/WomenCoins.svelte";
    import MenCoins from "./During/MenCoins.svelte";
    import { animateDebt } from "./During/MigrationDebt.svelte";
    import IoMdWoman from 'svelte-icons/io/IoMdWoman.svelte';
    import * as d3 from 'd3';
</script>
  
<div>
    <div class="DuringMigration" style="margin-top: 400px;">
        <!-- <h1>During Migration</h1> -->
        <!-- <div class="DebtMigrationNarrative">
            <p>
              Debt is both a driver to migrate to repay debt and a means to pay for migration 
              (<a href="https://anthrosource.onlinelibrary.wiley.com/doi/10.1111/jlca.12385" target="_blank">Heidbrink, 2019</a>).
            </p>
    
            <p>
              Increasingly, migrants turn to high-interest loans from unregulated lenders 
              (i.e., individual lenders, notaries, cooperatives, and banks), 
              using land, homes, vehicles, or goods as collateral 
              (<a href="https://anthrosource.onlinelibrary.wiley.com/doi/10.1111/jlca.12385" target="_blank">Heidbrink, 2019</a>).
            </p>
    
            <p>
              Families face interest rates ranging from 2.5 to 15 percent, compounded monthly, 
            meaning remigration may be the only viable means of debt repayment
            (<a href="https://anthrosource.onlinelibrary.wiley.com/doi/10.1111/jlca.12385" target="_blank">Heidbrink, 2019</a>).
            </p>
    
    
            <p>
              This dynamic creates a cycle of migration and deportation
              (<a href="https://anthrosource.onlinelibrary.wiley.com/doi/10.1111/jlca.12385" target="_blank">Heidbrink, 2019</a>).
            </p>
    
            <p>
              "We begged from neighbors to loan us a few quetzales. 
              We sold our household furniture. We borrowed from the bank. 
              We didn't bury my father properly; we just couldn't afford it. 
              We used the money for me to travel over there." - 
              <a href="https://anthrosource.onlinelibrary.wiley.com/doi/10.1111/jlca.12385" target="_blank">Eulalia, Age 17, Guatamala, 2019</a>
            </p>
        </div> -->
    
        <!-- <div class="AccompanyMigrationNarrative">
            <p>
              Today, growing numbers of mothers and children are fleeing Central America. 
              Many mothers migrate with their children to escape economic suffering and cartel violence 
              (<a href="https://journals.sagepub.com/doi/full/10.1177/1077801221992875" target="_blank">Ricoy, Andrews, and Medina, 2021</a>).
            </p>
    
    
            <p>
              "If there's a threat, I am going to find a way to save my life and the lives of my children, 
              because I know that I need to fight for my children, I have to. They are dependent on me. 
              Imagine if something happened to me; I am the one who looks out for them. . . . 
              I am going to take care of them, and it is for them that I am doing this."
              -<a href="https://journals.sagepub.com/doi/full/10.1177/1077801221992875" target="_blank">Silvia, a 29-year-old single mother, fled Guatemala</a>
            </p>
    
            <p>
              <a href="https://journals.sagepub.com/doi/full/10.1177/1077801221992875" target="_blank">Elizabeth, a 33-year-old Salvadoran</a>, 
              joined the November 2018 caravan with her husband, 
              14-year-old daughter, and 10- and 1-year old sons:
              "In my neighborhood there are a lot of gangsters, 
              all these people involved in crime, and they wanted—one of those men wanted my 
              daughter to be his girlfriend, his woman. And that's what pushed me to leave there, 
              fleeing with my husband and my three children, because you get threats that if the girls 
              don't want anything with them, that they're going to kill you, the mother, or if not, 
              the father or another family member. So that made us afraid, with my husband, and we had to leave."
            </p>
    
            <p>
              Our analysis shows that women travel with family at a much higher rate than men. 
              In fact, they travel with children over twice as much as men.
            </p>
    
            </div>
     -->

        <div class="vis-container" id="accompany">
          <div class="transition-text" >
            <div>Now that both are able to fund their journey,</div>
            <div>let's look at their experiences <span class="orange">During</span> migration</div>
          </div>
          <div class="transition-text" >
            <div>Who do they <span class="orange">travel with</span>?</div>
          </div>
          <div class="columns-container">
            <div class="left-column">
              <div><div class="persona-name maria" ><span>Maria</span></div> travels with her <span class="orange">family</span></div>
            </div>
            <div class="right-column">
              <div><div class="persona-name jose" ><span>Jose</span></div> travels with a <span class="orange">coyote</span></div>
            </div>
          </div>
          <div class="transition-text" >
            <div>Women are 1.5 times more likely than men to travel with <span class="orange">family</span> </div>
            <div>and 2 times more likely than men to travel with <span class="orange">children</span></div>
            <div class="source">source</div>
          </div>

          <!-- <h2>Who do people travel with on the migration journey?</h2>
          <p> Women are 1.5x as likely to travel with family and 2x as likely to travel with children. </p> -->
          <div class="column-container">
            <MigrationAccompanyWomen />
            <MigrationAccompanyMen />
          </div>
          <div class="source">source</div>
          <div class="quote">
            "If there's a threat, I am going to find a way to save my life and the lives of my children... They are dependent on me... I am the one who looks out for them. . . . 
            I am going to take care of them, and it is for them that I am doing this [migrating]."
          </div>
          <div class="source"><a href="https://journals.sagepub.com/doi/full/10.1177/1077801221992875" target="_blank">Exerpt from a 29-year-old single mother who fled Guatemala</a></div>
          <div class="transition-text" >
            <div style="display: flex; justify-content: center; align-items: center;"><div class="persona-name maria" ><span>Maria</span></div> needs to care for more than just herself on the journey.</div>
            <div>This adds additional stress and leaves her especially vulnerable. </div>
            <div>Doing the journey alone already comes with risks...</div>
          </div>
        
        </div>
    
        <div class="ViolenceMigrationNarrative vis-container">
<!--     
            <p>
              Many women migrants take birth control as a protective strategy because they expect to be raped in transit through Mexico 
              (<a href="https://www.pbs.org/newshour/nation/facing-risk-rape-migrant-women-prepare-birth-control" target="_blank">Joffe-Block, 2014)</a>.
            </p>
    
            <p>
              Lupita is a 19-year-old Honduran woman 
              who left home because she wanted to help her mother and her four siblings 
              escape her abusive father.
              On experiencing sexual violence, she says: 
              "When I got here I was scared, 
              mostly because of what had happened took me a while to tell people what happened to me. 
              The first few days I had a knot in my throat where all my tears were held. 
              I told myself I wouldn't cry so that I can have the strength to keep going. 
              I am going to keep going and nothing will stop me. 
              I have to continue because I have to, I have to fight for my family. 
              I have to fight for my mom and siblings. 
              I feel shame because of what happened to me. 
              But I need to keep moving forward 
              (<a  href="" target="_blank">Interview with Lupita, 21 July 2014</a>)."
            </p> -->
            <div class="transition-text" >
              <div><span class="pink">80%</span>of women experience <span class="pink">sexual violence</span> on the migrant journey to the US.</div>
              <div class="source">source</div>
            </div>
            <div class="transition-text">
              <div><span class="pink">151,200</span> women experience sexual violence on the migration journey every year.</div> 
              <div>Sexual violence against women goes under reported, especially in the case of irregular migrants.</div>
              <div class="source">source</div>
            </div>
            <div class="transition-text">
              <div>[birth control description/stats]</div> 
              <div>[birth control vis]</div> 
              <div class="source">source</div>
            </div>
          
            <!-- <div class = "sexual-violence">  -->
                <!-- <div class="women-icon-container">
                  {#each Array.from({ length: 1100 }) as _, index}
                      <div class={index < 220 ? "women-icon purple" : "women-icon"}>
                      <IoMdWoman/>
                  </div>
                  {/each}
                </div> -->
                <div class="transition-text" >
                  <div style="display: flex; justify-content: center; align-items: center;"><div class="persona-name maria" ><span>Maria</span></div> is migrating with her mother and siblings to escape her abusive father</div>
                </div>
                <div class="quote">
                  "When I got here I was scared... took me a while to tell people what happened to me...
                  I told myself I wouldn't cry so that I can have the strength to keep going.
                  I have to fight for my mom and siblings. 
                  I feel shame because of what happened to me. 
                  But I need to keep moving forward."
                </div>
                <div class="source"><a  href="" target="_blank">Interview with Lupita, 21 July 2014</a></div>
                <!-- <img class="violencechart" src="SexualViolenceChart.png" onmouseover="this.src='SexualViolenceChartNoLoop.gif';"> -->
            <!-- </div> -->
        </div> 

        <div class="vis-container">
          <div class="transition-text">
            <div>Migrants are esspecially succeptible to being exploited for their vulnerabilities.</div> 
            <div>Many choose to fund their migration through debt.</div>
            <div>This exploitation manifests in the amount of debt people incur to fund their migration</div>
            <div class="source">source</div>
          </div>
          <div class="transition-text">
            <div>How much debt do migrants incur?</div>
          </div>
          <div class = "debt-button">
            <button on:click={animateDebt}>Find out the cost of debt</button>
        </div>
          <div class="column-container">
            <div class="col">
              <WomenCoins />
            </div>
            <div class="col">
              <MenCoins />
            </div>
          </div>
          <div class="column-container">
            <div class="col">
              <!-- <img src="https://raw.githubusercontent.com/nemo0/animated-counter/29e12c0cb15e90c27faaef0d83fb2618126067db/icons/iconmonstr-time-19.svg" alt="timer" srcset="" class="icon"> -->
              <!-- <img src="images/latinaicon.jpeg" alt="timer" srcset="" class="icon"> -->
              <div class="counter">
                <div class="money-counter"><h3>$</h3><h3 data-target="850" class="count">0</h3>&nbsp;&nbsp;&nbsp;<h3>million</h3></div>
                <h6>Women's Migratory Debt</h6>
              </div>
            </div>
            <div class="col">
              <!-- <img src="https://raw.githubusercontent.com/nemo0/animated-counter/29e12c0cb15e90c27faaef0d83fb2618126067db/icons/iconmonstr-coffee-11.svg" alt="Coffee" srcset="" class="icon"> -->
              <!-- <img src="images/latinoicon.jpeg" alt="timer" srcset="" class="icon"> -->
              <div class="counter">
                <div class="money-counter"><h3>$</h3><h3 data-target="661" class="count">0</h3>&nbsp;&nbsp;&nbsp;<h3>million</h3></div>
                <h6>Men's Migratory Debt</h6>
              </div>
            </div>
          </div>
          <!-- <div class="quote">
              "We begged from neighbors to loan us a few quetzales. 
              We sold our household furniture. We borrowed from the bank. 
              We didn't bury my father properly; we just couldn't afford it. 
              We used the money for me to travel over there." - 
              <a href="https://anthrosource.onlinelibrary.wiley.com/doi/10.1111/jlca.12385" target="_blank">Eulalia, Age 17, Guatamala, 2019</a>
          </div> -->
          <div class="transition-text">
            <div>Assuming they successfully migrate, they'll start <span class="pink">paying back this debt</span></div> 
            <div>The more <span class="pink">income</span> they receive from their employment, the faster they'll be able to pay back their debt</div> 
            <div class="source">source</div>
          </div>

          <div class="transition-text">
            <div>Women <span style="font-size: 20px; color: green;">earn less</span> and have <span style="font-size: 40px; color: red;">more debt</span> </div>
            <div>Men <span style="font-size: 40px; color: green;">earn more</span> and have <span style="font-size: 20px; color: red;">less debt</span> </div> 
          </div>
      </div>
    </div>  
</div>

<style>
  .quote {
    font-size: 30px;
    font-style: italic;

  }

  .source {
    font-size: 10px;
    color: rgb(207, 184, 207);
    margin: 30px 0px;
  }

  .source a {
    color: inherit;
    text-decoration: none;
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
    margin: 0px 5px;
  }

  .transition-text .orange, .columns-container .orange {
    color: #fe872f;
  }

  .transition-text .purple {
    color: #4a0a70;
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

  .columns-container {
    display: flex;
    width: 100%;
    font-size: 25px;
  }

  .columns-container.column {
    flex-direction: column;
  }

  /* Set the width and padding of the left and right columns */
  .left-column {
    flex-basis: 50%;
    margin-right: 30px;
  }

  .right-column {
    flex-basis: 50%;
    margin-left: 30px;
  } 



    .accompany-pie-charts {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    h2 {
        text-align: center;
        font-size: 45px;
    }

    /* .column-container {
        display: flex;
        width: 60%;
        gap: 30%;
        justify-content: center;
        margin: auto;
    }

    .col {
      display: flex;
        flex: 0 0 50%;
        justify-content: center;
        max-width: 50%;
    } */

    .column-container {
        display: flex;
        width: 60%;
        gap: 30%;
        justify-content: center;
        margin: 50px auto 100px auto;
    }

    .col {
        display: flex;
        flex: 0 0 50%;
        justify-content: center;
        max-width: 50%;
        flex-direction: column;
    }

    .vis-container {
        text-align: center;
        margin: 190px auto;
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

    .money-counter {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    
    .counter {
        text-align: center;
        display: flex;
        flex-direction: column;
    }
    
    .counter h3 {
        padding: 0.5rem 0;
        font-size: 2.5rem;
        font-weight: 800;
    }
    
    .counter h6 {
        font-size: 2rem;
        padding-bottom: 1rem;
        margin: 20px auto;
    }
    
    .women-icon {
    width: 25px;
    padding: 0px;
    margin: 0px;
    color: #ce2093; 
  }
  .women-icon::DuringMigration {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    padding: 0px;
    margin: 0px;
  }

  .women-icon-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .purple {
    color: black;
  }
</style>
  
