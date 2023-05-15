<script>
    import MigrationAccompanyWomen from "./During/MigrationAccompanyWomen.svelte";
    import MigrationAccompanyMen from "./During/MigrationAccompanyMen.svelte";
    import WomenCoins from "./During/MenCoins.svelte";
    import MenCoins from "./During/WomenCoins.svelte";
    import { animateDebt } from "./During/MigrationDebt.svelte";
    import BirthControl from "./During/BirthControl.svelte";
    import * as d3 from 'd3';
</script>
  
<div>
    <div class="DuringMigration" style="margin-top: 400px;">

        <div class="vis-container" id="accompany">
          <div class="transition-text" >
            <div>Now that both are able to fund their journey,</div>
            <div>let's look at their experiences <span class="pink">During</span> migration</div>
          </div>
          <div class="transition-text" >
            <div>Who do they <span class="pink">travel with</span>?</div>
          </div>
          <div class="columns-container">
            <div class="left-column">
              <div><div class="persona-name maria" ><span>Maria</span></div> travels with her <span class="pink">family</span></div>
            </div>
            <div class="right-column">
              <div><div class="persona-name jose" ><span>Jose</span></div> travels with a <span class="pink">coyote</span></div>
            </div>
          </div>
          <div class="transition-text" >
            <div>Women are 1.5 times more likely than men to travel with <span class="pink">family</span> </div>
            <div>and 2 times more likely than men to travel with <span class="pink">children</span></div>
          </div>

          <div class="column-container">
            <MigrationAccompanyWomen />
            <MigrationAccompanyMen />
          </div>
          <div class="source">source</div>
          <div class="transition-text">
            <div style="display: flex; justify-content: center; align-items: center;"><div class="persona-name maria" ><span>Maria</span></div> needs to care for more than just herself on the journey.</div>
            <div>This adds additional stress and leaves her especially vulnerable. </div>
            <!-- <div>Women may be traveling with their children, and they have to protect them during the dangerous migration journey.</div>  -->
          </div>
          <div class="quote">
          <blockquote>
            If there's a threat, I am going to find a way to save my life and the lives of my children... They are dependent on me... I am the one who looks out for them.... 
            I am going to take care of them, and it is for them that I am [migrating].
          </blockquote>
          </div>
          <div class="source"><a href="https://journals.sagepub.com/doi/full/10.1177/1077801221992875" target="_blank">source</a></div>
          <div class="transition-text" >
            <!-- <div style="display: flex; justify-content: center; align-items: center;"><div class="persona-name maria" ><span>Maria</span></div> needs to care for more than just herself on the journey.</div>
            <div>This adds additional stress and leaves her especially vulnerable. </div> -->
            <div>Doing the journey alone already comes with risks...</div>
          </div>
        
        </div>
    
        <div class="ViolenceMigrationNarrative vis-container">
            <div class="transition-text" >
              <div><span class="pink">80%</span>of women experience <span class="pink">sexual violence</span> on the migrant journey to the US.</div>
              <div class="source"><a  href="https://gwbcenter.imgix.net/Publications/Reports/gwbi_Immigration,_Security,_and_Gender-Based_Violence.pdf" target="_blank">source</a></div>
            </div>
            <div class="transition-text">
              <div><span class="pink">151,200</span> women experience sexual violence on the migration journey every year.</div> 
              <div>Sexual violence against women goes under reported, especially in the case of irregular migrants.</div>
              <div class="source"><a  href="https://gwbcenter.imgix.net/Publications/Reports/gwbi_Immigration,_Security,_and_Gender-Based_Violence.pdf" target="_blank">source</a></div>
            </div>
            <div class="transition-text">
              <div>Many women take contraception before the migration journey, 
                   knowing they face a high likelihood of assault
                   during the journey.</div> 
              <div class="source"><a href="https://www.pbs.org/newshour/nation/facing-risk-rape-migrant-women-prepare-birth-control" target="_blank">source</a></div>
              <div><BirthControl /></div> 
            </div>
          
                <div class="transition-text" >
                  <div style="display: flex; justify-content: center; align-items: center;"><div class="persona-name maria" ><span>Maria</span></div> is migrating with her mother and siblings to escape her abusive father</div>
                </div>
                <div class="quote">
                  <blockquote>
                  When I got here I was scared... took me a while to tell people what happened to me...
                  I told myself I wouldn't cry so that I can have the strength to keep going.
                  I have to fight for my mom and siblings. 
                  I feel shame because of what happened to me. 
                  But I need to keep moving forward.
                  </blockquote>
                </div>
                <div class="source"><a  href="https://www.jstor.org/stable/44861315" target="_blank">source</a></div>
        </div> 

        <div class="vis-container">
          <div class="transition-text">
            <!-- <div>Migrants are especially susceptible to being exploited for their vulnerabilities.</div> 
            <div>Many choose to fund their migration through debt.</div>
            <div>This exploitation manifests in the amount of debt people incur to fund their migration</div> -->
            <div>Many migrants feel pressure to successfully migrate to repay their debts</div>
            <div>If their journey is unsuccessful, they experience extreme financial vulnerability</div>
            <div>A salary in their home country is not enough to repay their debt within the loan period</div>
            <!-- <div>Their families' assets, such as their home and land, may be confiscated by lenders.</div> -->
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
              <div class="counter">
                <div class="money-counter"><h3>$</h3><h3 data-target="850" class="count">0</h3>&nbsp;&nbsp;&nbsp;<h3>million</h3></div>
                <h6>Women's Migratory Debt</h6>
              </div>
            </div>
            <div class="col">
              <div class="counter">
                <div class="money-counter"><h3>$</h3><h3 data-target="660" class="count">0</h3>&nbsp;&nbsp;&nbsp;<h3>million</h3></div>
                <h6>Men's Migratory Debt</h6>
              </div>
            </div>
          </div>
        
          <div class="transition-text">
            <div>Assuming they successfully migrate, they'll start <span class="pink">paying back this debt</span></div> 
            <div>The more <span class="pink">income</span> they receive from their employment, the faster they'll be able to pay back their debt</div> 
            <div class="source"><a href="https://www.migrationpolicy.org/sites/default/files/publications/mpi-wfp-mit_migration-motivations-costs_final.pdf" target="_blank">source</a></div>
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

  blockquote {
    font-size: 30px;
    font-style: italic;
    width: 500px;
    margin: 0.55em 0;
    padding: 0.35em 40px;
    line-height: 1.45;
    position: relative;
    color: #383838;
    display: inline-block;
    text-align: justify;
    text-align-last: left;
    }
    
    blockquote:before {
    display: block;
    padding-left: 10px;
    content: "\201C";
    font-size: 80px;
    position: absolute;
    left: -20px;
    top: -20px;
    color: #ce2093;
    }
    


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

    a {
      text-decoration: none;
    }
    
</style>
  
