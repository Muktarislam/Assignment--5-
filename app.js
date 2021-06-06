const searchMeals = () => {
    const searchT = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchT}`
    fetch(url)
    .then(res => res.json())
    .then(meals => displayMeals(meals.meals))
}

const displayMeals = other => {
    const mealsDiv = document.getElementById('meal-container');
    mealsDiv.innerHTML = '';
    other.forEach(meal => {
        // console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.className = 'food';
        const mealInfo = `
        <img onClick="onclickMeals(${meal.idMeal})" class="food-btn" src="${meal.strMealThumb}">
        <h3 style="color: black">${meal.strMeal}</h3>
        `;
        mealDiv.innerHTML = mealInfo;
        mealsDiv.appendChild(mealDiv);
    })
}



let onclickMeals = mealId => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ mealId }`)
        .then(res => res.json())
        .then(data => {
            let foodData = document.getElementById('extraDiv');
            document.getElementById('extraDiv').innerHTML = ' ';
            document.getElementById('extraDiv').style.display = 'block';
            let foodDetails = document.createElement('div')
            foodDetails.innerHTML = `
            <img src="${ data.meals[0].strMealThumb }">
            <h1>${ data.meals[0].strMeal }</h1>
            <br>
            <h1>Category: ${ data.meals[0].strCategory }</h1>
            <br>
            <h3>* ${ data.meals[0].strIngredient1 }</h3>
            <h3>* ${ data.meals[0].strIngredient2 }</h3>
            <h3>* ${ data.meals[0].strIngredient3 }</h3>
            <h3>* ${ data.meals[0].strIngredient4 }</h3>
            <h3>* ${ data.meals[0].strIngredient5 }</h3>
            <h3>* ${ data.meals[0].strIngredient6 }</h3>
            `;
            foodDetails.className = "food-details";
            foodData.appendChild(foodDetails);
        })
} 




















// const onclickMeals = (id) => {
//     console.log(id);
//     const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
//     fetch(url)
//     .then(res => res.json())
//     .then(meals => showExtra(meals))
//     // .then(meals => console.log(meals))
// }
// const showExtra = (meal)  => {
//     console.log(meal);
//     const extra = document.getElementById("extraDiv");
//     extra.innerHTML = `
//     <img src="${strMealThumb}"/>
//     `;
// }