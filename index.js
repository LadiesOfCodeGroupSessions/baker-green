const bakery = {
    cakes(recipe, ingredients) {
        let maxCakes = 1;
        return maxCakes;
    },

    recipe(recipe) {
        return recipe;
    },

    ingredients(ingredients) {
        return ingredients;
    },

    recipeKeys(ingredients) {
        return Object.keys(ingredients)
    }
}

module.exports = bakery;