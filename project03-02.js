/*    JavaScript 7th Edition
      Chapter 3
      Project 03-02

      Application to generate a slide gallery
      Author: Jose Villa
      Date:   4/23/2025 

      Filename: project03-02.js
*/

let captions = new Array(14);
captions[0]="International Space Station fourth expansion [2009]";
captions[1]="Assembling the International Space Station [1998]";
captions[2]="The Atlantis docks with the ISS [2001]"; 
captions[3]="The Atlantis approaches the ISS [2000]"; 
captions[4]="The Atlantis approaches the ISS [2000]"; 
captions[5]="International Space Station over Earth [2002]";
captions[6]="The International Space Station first expansion [2002]";
captions[7]="Hurricane Ivan from the ISS [2008]";
captions[8]="The Soyuz spacecraft approaches the ISS [2005]";
captions[9]="The International Space Station from above [2006]";
captions[10]="Maneuvering in space with the Canadarm2 [2006]";
captions[11]="The International Space Station second expansion [2006]";
captions[12]="The International Space Station third expansion [2007]";
captions[13]="The ISS over the Ionian Sea [2007]";

// step 3 declaring htmlCode variable and setting it's initial value to empty string
let htmlCode = "";

// step 4 creating a for loop
for (let i=0; i<captions.length; i++){
      htmlCode += `<figure><img alt='' src='slide${i}.jpg' /><figcaption>caption[${i}]</figcaption></figure>`
};

// step 5 change inner htmlCode element by id="gallery" to value of htmlCode variable
document.getElementById("gallery").innerHTML=htmlCode ;