
fetch("https://api.github.com/users").then((data)=>
 {
 return data.json();
  }).then((objectdata) => {
    console.log(objectdata[0].title);
    let tabledata="";
    objectdata.map((values)=>{
        tabledata+=` 
          <div class="card" style="width: 28rem;">
          
        <img class="rounded-circle"src="${values.avatar_url}" alt="Card image cap"class="rounded-circle" alt="Cinque Terre" width="204" height="136">
        <div class="card-body">
          <h4 class="card-title">${values.login}</h4><br>
          
          <a href="#" class="btn btn-primary">Add</a>
          <a href="#" class="btn btn-primary">Message</a>
        </div>
      </div>   `;
    });
    document.getElementById("cards"). innerHTML=tabledata;
   }).catch((err)=>{
    console.log(err);
   })



           