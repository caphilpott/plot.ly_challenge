// To run locally run "Python -m http.server" from gitbash at this folder level
//create function to manage and provide "id" feed all the plots
function getPlots(id) {
  // Use D3 fetch to read the JSON file
      d3.json("samples.json").then (sampledata =>{
        
        // view/confirm sample log 
          console.log(sampledata)

        // filter samples by entered/default id 
        let samples = sampledata.samples.filter(smpl => smpl.id.toString() === id)[0];
          
        // slice to first ten sample values and reverse to reset 
        // (Note: sample values already in sort order) 
          let sampleValues =  samples.sample_values.slice(0,10).reverse();

        // view/confirm sample values  
          console.log(sampleValues)
        
        // set lable list and limit to first ten by slicing
        // (Note: sample values already in sort order) 
          let label =  samples.otu_labels.slice(0,10);

        // view/confirm label values
          console.log (label)

        // slice to first ten otu ids values and reverse to reset 
        // (Note: sample values already in sort order)
          let otu_Ids = ( samples.otu_ids.slice(0, 10)).reverse();
      
	    	// view/confirm otu_Ids
			  console.log (otu_Ids)

        // map otu_Ids to plot form
          let otu_Id = otu_Ids.map(d => "Otu " + d);
          
        // view/confirm mapped otu Id  
          console.log(`Otu Id: ${otu_Id}`)

        //filter washing frequency value by entered/default id 
        wfreq = sampledata.metadata.filter(freq => freq.id.toString() === id)[0];
        
        // isolate washing frequency
        wfreq = wfreq.wfreq;
        
        // view/confirm washing frequency data
        console.log("Washing Freq: " + wfreq);
          
        // Create the trace for bar plot
          let trace = {
              x: sampleValues,
              y: otu_Id,
              text: label,
              marker: {
              color: 'green'},
              type:"bar",
              orientation: "h",
          };
          
          // Create the data array for our plot
          let data = [trace];
  
          // Define the plot layout
          var layout = {
              title: "Top 10 Otu's",
              yaxis:{
                  tickmode:"linear",
              },
              margin: {
                  l: 150,
                  r: 50,
                  t: 50,
                  b: 20
              }
          };
  
        // Plot the chart to a div tag with the id= "bar"
        Plotly.newPlot("bar", data, layout);

        // Bubble chart setup

        // Create the trace for bubble chart
          let trace_1 = {
              x: samples.otu_ids,
              y: samples.sample_values,
              mode: "markers",
              marker: {
                  size: samples.sample_values,
                  color: samples.otu_ids
              },
              text:  samples.otu_labels
          };
  
          // Create the data array for our bubble chart
          let data_1 = [trace_1];

          // Define the plot layout for the bubble chart
          let layout_1 = {
            xaxis:{title: "Otu ID"},
            height: 450,
            width: 1100
          };
          
          // Plot the chart to a div tag with the id= "bubble"
          Plotly.newPlot("bubble", data_1, layout_1); 

          // Guage chart setup

          // Create the trace for our guage chart
          let trace_2 = {
            domain: { x: [0, 1], y: [0, 1] },
            value: wfreq,
            title: {text:`Belly Button Washing Frequency<br>Scrubs per Week`},
            type: "indicator",
            mode: "gauge+number",
            gauge: { axis: { range: [null, 9] },
            }
          }

          // Create the data array for our guage chart
          let data_2 = [trace_2]
      
          // Define the plot layout for the guage chart
          let layout_2 = { 
          width: 700, 
          height: 600, 
          margin: { t: 30, b: 30, l:80, r:80 } 
          };
      
          // Plot the chart to a div tag with the id= "guage"
          Plotly.newPlot("gauge", data_2, layout_2);
          
      });
  }  



  // Establish function to get the necessary demographic data
  function getDemoData(id) {
  
    // Use D3 fetch to read the JSON file
      d3.json("samples.json").then((data)=> {
  
      // pull metadata info for the demographic Info list (panel)
          let metadata = data.metadata;
        
        // confirm/view metadata
          console.log(metadata)
  
        // filter meta data info by first id (index = 0)
         let result = metadata.filter(meta => meta.id.toString() === id)[0];
        
        // select demographic panel to post the data
         let demographicInfo = d3.select("#sample-metadata");
          
        // clear the demographic info panel each time prior to refresh
         demographicInfo.html("");
  
        // get the demographic data for the id and append the retrieved data 
          Object.entries(result).forEach((key) => {   
              demographicInfo.append("h5").text(key[0].toLowerCase() + ": " + key[1] + "\n");    
          });
      });
  }
  // create the change event function
  function optionChanged(id) {
      getPlots(id);
      getDemoData(id);
  }
  
  // create the function for the on-open render
  function initiate() {
      
      // select dropdown menu 
      let dropdown = d3.select("#selDataset");
  
      // Use D3 fetch to read the JSON file
      d3.json("samples.json").then((data)=> {
        
        // confirm data viewable
          console.log(data)
  
          // get the id data to the dropdown menu
          data.names.forEach(function(name) {
              dropdown.append("option").text(name).property("value");
          });
  
          // execute the functions to refresh the data and the plots
          getPlots(data.names[0]);
          getDemoData(data.names[0]);
      });
  }
  
  // initialize the dashboard
  initiate();