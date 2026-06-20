let defaultUser = [
  {
    id: Date.now() + Math.floor(Math.random() * 1000),
    name: "amisha rathore",
    pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
    bio: "silent chaos in a loud world 🌑🖤 | not for everyone"
  },

  {
    id: Date.now() + Math.floor(Math.random() * 1000),
    name: "kiara mehta",
    pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
    bio: "main character energy 🎬 | coffee > everything ☕✨"
  },

  {
    id: Date.now() + Math.floor(Math.random() * 1000),
    name: "isha oberoi",
    pic: "https://images.unsplash.com/photo-1777863073932-a4b8b68732fd?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "walking through dreams in doc martens ☁🖤 | late night thinker"
  },

  {
    id: Date.now() + Math.floor(Math.random() * 1000),
    name: "Ojin Oklawa",
    pic: "https://i.pinimg.com/736x/01/be/94/01be94b0b5bf03a50b5d6c4bfec78063.jpg",
    bio: "too glam to give a damn 💅 | filter free soul"
  },

  {
    id: Date.now() + Math.floor(Math.random() * 1000),
    name: "Emma Wilson",
    pic: "https://images.unsplash.com/photo-1773332598289-ed0444ad1d6f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
    bio: "living slowly, dreaming loudly ✨"
  },

  {
    id: Date.now() + Math.floor(Math.random() * 1000),
    name: "Sophia Carter",
    pic: "https://images.unsplash.com/photo-1781456651358-9b627372d6cf?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "coffee, books and rainy evenings ☕📚"
  },

  {
    id: Date.now() + Math.floor(Math.random() * 1000),
    name: "Olivia Bennett",
    pic: "https://images.unsplash.com/photo-1780789594812-7828eae1ea07?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
    bio: "finding beauty in ordinary moments 🌸"
  },

  {
    id: Date.now() + Math.floor(Math.random() * 1000),
    name: "Ava Thompson",
    pic: "https://images.unsplash.com/photo-1781543387210-5b4ef8943431?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D",
    bio: "sunsets, music and endless curiosity 🎵🌅"
  },

  {
    id: Date.now() + Math.floor(Math.random() * 1000),
    name: "Jane Doe",
    pic: "https://images.unsplash.com/photo-1602582190093-dcd4a4ff809b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFuZSUyMGRvZXxlbnwwfHwwfHx8MA%3D%3D",
    bio: "creating memories one adventure at a time 🌍"
  },

  {
    id: Date.now() + Math.floor(Math.random() * 1000),
    name: "Mia Anderson",
    pic: "https://images.unsplash.com/photo-1777502371973-433e6746bb51?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D",
    bio: "wild heart, calm mind 🌿"
  }
];

let users=JSON.parse(localStorage.getItem("users"))||defaultUser ;


function showUser(arr){

    let container = document.querySelector(".cards-container");

    arr.forEach(function(user){

        let card = document.createElement("div");
        card.classList.add("card");

        let img = document.createElement("img");
        img.src = user.pic;
        img.classList.add("bg-img");

        let blurredLayer = document.createElement("div");
        blurredLayer.style.backgroundImage = `url(${user.pic})`;
        blurredLayer.classList.add("blurred-layer");

        let content = document.createElement("div");
        content.classList.add("content");

        let heading = document.createElement("h3");
        heading.textContent = user.name;

        let para = document.createElement("p");
        para.textContent = user.bio;

        //making delete button 
        let delBtn=document.createElement("button");
        delBtn.textContent="x";
        delBtn.classList.add("del-btn" );
        delBtn.addEventListener("click", function(){
            console.log(`deleted user id: ${user.id}`);
            users=users.filter(currUser=>{
               return currUser.id!==user.id;
            });
            localStorage.setItem("users", JSON.stringify(users));
            document.querySelector(".cards-container").innerHTML = "";
            showUser(users);
        });
        

        content.appendChild(heading);
        content.appendChild(para);

        
        card.appendChild(img);  
        card.appendChild(blurredLayer);
        card.appendChild(content);
        card.appendChild(delBtn);

        container.appendChild(card);
    });
}

//input karne pr user ko filter karna 
// show karna filter user ko 
let inp = document.querySelector(".search");

inp.addEventListener("input", function(){

    let filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(inp.value.toLowerCase())
    );

    document.querySelector(".cards-container").innerHTML = "";

    showUser(filteredUsers);
});
showUser(users);
console.log(users.length);

let form = document.querySelector("form");

let nameInput = document.querySelector("#name");
let urlInput = document.querySelector("#url");
let bioInput = document.querySelector("#bio");


//add card by submitting form (by adding data on users[array])
form.addEventListener("submit", function(dets){

    dets.preventDefault();

    users.push({
        id: Date.now() + Math.floor(Math.random() * 1000),
        name: nameInput.value,
        pic: urlInput.value,
        bio: bioInput.value
    });

    localStorage.setItem("users",JSON.stringify(users));

    document.querySelector(".cards-container").innerHTML = "";

    showUser(users);

    nameInput.value = "";
    urlInput.value = "";
    bioInput.value = "";
});


//restore the page if all the user get deleted 
let resetBtn=document.querySelector("#reset-btn");
resetBtn.addEventListener("click",function(){
    localStorage.clear();
    location.reload();
});