const fetchDataForCategory = async (categoryID) => {
  const mainUrl = `https://openapi.programming-hero.com/api/videos/category/${categoryID}`;
  const res = await fetch(mainUrl);
  return res.json();
};

// API Handler
const mainApi = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await response.json();
    const tabContainer = document.getElementById("tab-container");
    const apiData = data.data;
    const desiredCategoryId = "1005";
    apiData.forEach((category) => {
    const div = div_box(category.category, category.category_id, desiredCategoryId);
    tabContainer.appendChild(div);
    });
  };


// div
const div_box = (categoryName, categoryId, desiredCategoryId) => {
  const div = document.createElement("div");
  const onClickAction = (categoryId === desiredCategoryId) ? "handleLoadContentDraw" : "handleLoadContent";
  div.innerHTML = `
  <div class="tabs tabs-boxed">
  
      <a onclick="${onClickAction}('${categoryId}')" class="tab text-black  hover:bg-[#FF1F3D]  text-lg font-medium ">${categoryName}</a>
    </div>`;
  return div;
};

// Eta mainly sorting er kaj korbe 
function sorter(){

  cardData.sort((card1, card2) => 
  {
    const viewsA = parseInt(card1.others.views);
    const viewsB = parseInt(card2.others.views);
    return viewsB - viewsA;
  });
  renderCards(cardData);
}

let cardData = [];
const handleLoadContent = async (categoryID) => {
    const data = await fetchDataForCategory(categoryID);
    cardData = data.data;
    renderCards(cardData);
};


mainApi();
handleLoadContent("1000");