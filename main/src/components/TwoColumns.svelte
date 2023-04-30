<script>
    export let column1;
    export let column2;
  </script>
  
  <div class="columns">
    <div class="column1">
      {column1}
    </div>
    <div class="column2">
      {column2}
    </div>
  </div>
  
  <style>
    .columns {
      display: flex;
      flex-direction: row;
    }
    .column1, .column2 {
      flex-basis: 50%;
      padding: 10px;
    }
    .column1 {
      background-color: #eee;
    }
    .column2 {
      background-color: #ddd;
    }
  </style>
  