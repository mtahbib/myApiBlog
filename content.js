function handleLoadContentDraw() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="flex flex-col items-center  h-screen mx-auto">
    <img src="./Images/Icon.png" alt="" class="mb-3 lg:mx-[600px]" >
    <h3 class="text-4xl font-bold text-center">Oops!! Sorry, There is no <br> content here</h3>
</div>
`;
    cardContainer.appendChild(div);
  }
  

const renderCards = (data) => {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    data.forEach((content) => {
      const time = +content.others.posted_date;
      const totalSeconds = time;
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const fin = time ? `${hours} hrs ${minutes} min ago` : " ";
      console.log(fin);
      const div = document.createElement("div");
      div.innerHTML = `
    <img class="w-full lg:w-72 mb-3 rounded-md h-44" 
    src="${content.thumbnail}"/>
    <p class="absolute bottom-3 right-3 lg:right-10 text-white bg-black p-2 rounded-lg text-xs lg:text-base">${fin}
    </p>
   <div class="flex gap-2 mt-5 mb-10">
      <div class="flex ">
      <img class="w-8 h-8 rounded-full"  src=${
        content.authors[0].profile_picture
      } alt="Shoes" />
      </div>
      <div class="flex flex-col">
      <h2 class="text-xl font-bold">${content.title}</h2>
      <h2 class="flex items-center">${content.authors[0].profile_name}<span>${
        content.authors[0].verified
          ? '<img src="./../Images/fi_10629607.svg" />': " "
      } </span>
      </h2>
      <h2>${content.others.views} views</h2>
  
      </div>
      </div>`;
      cardContainer.appendChild(div);
    });
  };
  
 