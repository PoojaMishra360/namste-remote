 // core react element , We have to create html element insdie the react using createElement
 
/* {} - where you will give attributes to your tags okay this object is the place where you will give

attributes to your tags what is the attribute to a tag suppose if my h1 if my h1 tag needs to have */
/* <div id="parent">
   <div id="child">
      <h1></h1>
           <h2></h2>
   </div>
   <div id="child">
      <h1></h1>
           <h2></h2>
   </div>
</div> */

// parent is the object not a element tag 
const parent = React.createElement("div" , {id:"parent"} , [React.createElement("div" ,{id:"child"} ,[React.createElement("h1",{},"I am h1 tag") , React.createElement("h2",{},"I am h1 tag")] ) , React.createElement("div" ,{id:"child"} ,[React.createElement("h1",{},"I am h1 tag") , React.createElement("h2",{},"I am h1 tag")] )] )

    //const heading = React.createElement("h1",{id:"heading" , xyz: "abc"},"Hello World From React");

    // but for randering the html element we nee dom or root dom so we will used createRoot but using dom 

   const root =  ReactDOM.createRoot(document.getElementById("root"));

   root.render(parent);