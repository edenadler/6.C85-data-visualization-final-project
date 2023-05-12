<script>
    import MigrationAccompanyWomen from "./During/MigrationAccompanyWomen.svelte";
    import MigrationAccompanyMen from "./During/MigrationAccompanyMen.svelte";
    import { animateDebt } from "./During/MigrationDebt.svelte";
</script>
  
<div>
    <div class="DuringMigration">
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
    
        <div class="vis-container">
            <div class="heading">
              <h2>How much debt do people incur to migrate?</h2>
            </div>
            <div class="counter-container">
              <div class="counter">
                <!-- <img src="https://raw.githubusercontent.com/nemo0/animated-counter/29e12c0cb15e90c27faaef0d83fb2618126067db/icons/iconmonstr-time-19.svg" alt="timer" srcset="" class="icon"> -->
                <!-- <img src="images/latinaicon.jpeg" alt="timer" srcset="" class="icon"> -->
                <div class="money-counter"><h3>$</h3><h3 data-target="850500000" class="count">0</h3></div>
                <h6>Women's Migratory Debt</h6>
              </div>
              <div class="counter">
                <!-- <img src="https://raw.githubusercontent.com/nemo0/animated-counter/29e12c0cb15e90c27faaef0d83fb2618126067db/icons/iconmonstr-coffee-11.svg" alt="Coffee" srcset="" class="icon"> -->
                <!-- <img src="images/latinoicon.jpeg" alt="timer" srcset="" class="icon"> -->
                <div class="money-counter"><h3>$</h3><h3 data-target="661500000" class="count">0</h3></div>
                <h6>Men's Migratory Debt</h6>
              </div>
            </div>
            <div class = "debt-button">
                <button on:click={animateDebt}>Find out the cost of debt</button>
            </div>
            <div>
              <p>
                "We begged from neighbors to loan us a few quetzales. 
                We sold our household furniture. We borrowed from the bank. 
                We didn't bury my father properly; we just couldn't afford it. 
                We used the money for me to travel over there." - 
                <a href="https://anthrosource.onlinelibrary.wiley.com/doi/10.1111/jlca.12385" target="_blank">Eulalia, Age 17, Guatamala, 2019</a>
              </p>
            </div>
        </div>
    
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
          <h2>Who do people travel with on the migration journey?</h2>
          <p> Women are 1.5x as likely to travel with family and 2x as likely to travel with children. </p>
          <p>
            "If there's a threat, I am going to find a way to save my life and the lives of my children, 
            because I know that I need to fight for my children, I have to. They are dependent on me. 
            Imagine if something happened to me; I am the one who looks out for them. . . . 
            I am going to take care of them, and it is for them that I am doing this."
            -<a href="https://journals.sagepub.com/doi/full/10.1177/1077801221992875" target="_blank">Silvia, a 29-year-old single mother, fled Guatemala</a>
          </p>
          <div class="accompany-pie-charts">
            <MigrationAccompanyWomen />
            <MigrationAccompanyMen />
          </div>
        </div>
    
        <div class="ViolenceMigrationNarrative vis-container">
            <p>
              Women experience violence more often on the migration journey (Schmidt and Buechler, 2017).
              Sexual violence against women goes under reported, 
              especially in the case of irregular migrants (Schmidt and Buechler, 2017).
            </p>
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
    
            <div class = "sexual-violence"> 
                <h2>80% of women experience sexual violence on the migrant journey to the US.</h2>
                <p>
                    151,200 women experience violence on the migration journey every year. 
                    Sexual violence against women goes under reported, especially in the case of irregular migrants.
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
                </p>
                <!-- <img class="violencechart" src="SexualViolenceChart.png" onmouseover="this.src='SexualViolenceChartNoLoop.gif';"> -->
            </div>
        </div> 
    </div>  
</div>

<style>
    .accompany-pie-charts {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    h2 {
        text-align: center;
        font-size: 45px;
    }
    .vis-container {
        text-align: center;
        width: 80%;
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
    
    .counter-container {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .money-counter {
        display: flex;
        flex-direction: row;
        justify-content: center;
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
  
