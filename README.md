# Plot.ly Homework - Belly Button Biodiversity 

## My Belly Button Story

This exercise proved significantly more daunting that the previous. Though samples of the work necessary to complete the assignment were interspersed here and there thoroughout our 3 days covering the material, it did not gel with me. 

In my view, there was not enough time spent connecting the dots and practicing enough variants to have some level of proficiency. 

Each step was a painful series of "now how and when did we do this". I ended up using about half external sources to help point me in the right direction then went back to our course activities to find "like" material apply to the given scenario. 

The order of the file is pretty much how it was built. I worked plots first starting with basic data capture then built the bar and moved on to build the bubble plot. I circled back after the other sections were complete and threw in the guage chart as it just made sense to keep it in one file. 

I probably over/console-logged if anything. I just wanted to make sure each step was being captured and captured correctly. 

I still struggle with capturing data within JSON structures, It doesn't come easy for me and probably only pratice is going to make it get any better. 

Once the data capture is done, it makes sense. It's just hard for me to see. 

The "getPlots" function focused on the "Samples" section of the json file. With that section isolated and focused on the entered or default ID, capturing and slicing the sample_values, otu_labels, and otu_ids was pretty straight forward. Sorting was not required as the data was presorted to meet our needs. I still had to reverse the results due to how slicing works. 

The plots themselves were the easiest section to tie back to our class work. Even the gauge plot, after referencing the D3 gauge plot link, was pretty straght forward when it comes down to building a basic gauge.

Creating a two line title in the gauge chart was managed just by throwing in a "br" in the middle of the line.

The get demographic data section was next. This was essentially another round of data-mining with a focus on metadata section of the json file. It was pretty straight forward as I simply gathered all metadata for the id selected and used a forEach to store and append the retrieved data. 

The change event function worked to pass on the newly inputted id into the charts and demo data.

The initiate fuction established an opening render of the first id available in the JSON data. 

As with most of our assignments, I felt better and more accomplished after completing it. This was, however, a bear to get through. 

Watch out for those pesky bacteria!

![alt text](http://robdunnlab.com/wp-content/uploads/microbes-sem.jpg)

