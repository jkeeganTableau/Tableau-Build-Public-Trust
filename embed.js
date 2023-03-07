    function changeParam(param,value,workbooks)
      //send the parameter string, the new value, and an array of which workbooks the parameter needs to be changed on
      {
        for(var i=0; i<workbooks.length; i++) {
          // console.log(workbooks[i])
          // document.getElementById(workbooks[i]).workbook.changeParameterValueAsync(param, value)
          workbooks[i].workbook.changeParameterValueAsync(param, value)
          .then(function() {console.log('Changed '+param+' to '+value);})
        }
      }   




    function changeStateLabel(stateName) {
      //changes state label on Statistics Page
      document.getElementById('col_1_label').innerHTML = stateName;
    }
    
    function changeStateOption(stateName) {
      //Changes value selected on the state dropdown
      document.getElementById('changeState').value = stateName;
    }




    function firstInteract(event) {
      //initialized view
       let viz = document.getElementById('vizMap');
       console.log(viz)
       console.log('Initialized')
       console.log(event)
    }






    async function getSelectedMarks(event) {
        // console.log('testMarks')
        const marksSelected =  await event.detail.getMarksAsync();
        // Get the first DataTable for our selected marks (usually there is just one)
        console.log(marksSelected)
        // Map the data into a format for display, etc.
        marksState = marksSelected.data[1].data[0][1].value;
        //Change workbooks based on the selections
        console.log(marksState);
        changeStateLabel(marksState);
        changeStateOption(marksState); 
        changeParam('State Name', marksState, [colViz1,colViz2,columnViz3]);

    }


    function mobileChange () {
          let viz = document.getElementById('vizMap');
          viz.src='https://prod-useast-b.online.tableau.com/t/johnkeegan/views/USABreweryBeerProductionEmbedded/BreweriesPerStateSmall'
          viz.height='350px'
          viz.width='530px'
        }

        var onresize = function() {
           //your code here
           //this is just an example
           width = document.body.clientWidth;
           height = document.body.clientHeight;
           if (width < 800) {
            mobileChange()
           }
           window.addEventListener("resize", onresize);












    // let vizMap = document.getElementById("vizMap");
    let colViz1 = document.getElementById("columnViz1");
    let colViz2 = document.getElementById("columnViz2");
    let colViz3 = document.getElementById("columnViz3");
