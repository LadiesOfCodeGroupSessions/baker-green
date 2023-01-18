const bakery = require("./index.js");

describe("index", () => {
    it("", ()=> {
       recipe1 = {flour: 1};
       ingredients = {flour: 1};

       let maxCakes = bakery.cakes(recipe1, ingredients);
       expect(maxCakes).to.be(1);
    });
});