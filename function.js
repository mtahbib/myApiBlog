const apiHandler = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const myData = await res.json();
    const container = document.getElementById("tab-container");
    const apiData = myData.data;
    const desiredCategoryId = "1005";
    apiData.forEach((category) => {
      const mydiv = divBox(category.category, category.category_id, desiredCategoryId);
      container.appendChild(mydiv);
    });
  };

  // MAIN DIV
const divBox = (categoryName, categoryId, desiredCategoryId) => {
  const div = document.createElement("div");
  const onClickAction = (categoryId === desiredCategoryId) ? "drawOnLoadContent" : "handleLoadContent";
  div.innerHTML = `
  <div class="">
  <a onclick="${onClickAction}('${categoryId}')" class="tab text-black  hover:bg-[#FF1F3D]  text-lg font-medium ">${categoryName}</a>
    </div>`;
  return div;
};

// Eta mainly sorting er kaj korbe 
function sorter(){
 cardVal.sort((card1, card2) => 
  {
    const viewsA = parseInt(card1.others.views);
    const viewsB = parseInt(card2.others.views);
    return viewsB - viewsA;
  });

  renderCards(cardVal);
}

let cardVal = [];
const handleLoadContent = async (categoryID) => {
    const myData = await dataFetcher(categoryID);
    cardVal = myData.data;
    // console.log(cardVal)
    renderCards(cardVal);
};

const dataFetcher = async (categoryID) => {
  const urlApiCat = `https://openapi.programming-hero.com/api/videos/category/${categoryID}`;
  const res = await fetch(urlApiCat);
  return res.json();
};



apiHandler();
handleLoadContent("1000");