function renderRecipesMarcup(recipes) {
    const marcup = recipes.map(({ image, name,  }) => `<li>
    <a href="">
      <img src="${image}" alt="">
      <p>Name</p>
      <p>Type</p>
      <p>Kuhnya</p>
    </a>
  </li>`).join("");
}