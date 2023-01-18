const bakery = require("./index.js");

describe("index", () => {
    it("maxCakes for recipe1 is 1", ()=> {
       recipe1 = {flour: 1};
       ingredients = {flour: 1};

       let maxCakes = bakery.cakes(recipe1, ingredients);
       expect(maxCakes).toBe(1);
    });

    it("get recipe return recipe1 for recipe1", ()=> {
        recipe1 = {flour: 1};
 
        expect(bakery.recipe(recipe1)).toBe(recipe1);
     });
});