const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    },
    get appetizers(){
      return this._courses.appetizers;
    },
    get mains(){
      return this._courses.mains;
    },
    get desserts(){
      return this._courses.desserts;
    },
    set appetizers(appetizersIn){
      this._courses.appetizers = appetizersIn;
    },
    set mains(mainsIn){
      this._courses.mains = mainsIn;
    },
    set desserts(dessertsIn){
      this._courses.desserts = dessertsIn;
    },
    get courses(){
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      };
    },
    addDishToCourse(courseName, dishName, dishPrice){
      const dish = {
        name: dishName, 
        price: dishPrice
        };
      return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName){
      const dishes = this._courses[courseName];
      const index = Math.floor(Math.random()*dishes.length);
      return dishes[index];
    },
    generateRandomMeal(){
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      let totalPrice = appetizer.price + main.price + dessert.price;
      totalPrice = totalPrice.toFixed(2);
      return `You should order ${appetizer.name}, ${main.name}, and ${dessert.name} for a total of ${totalPrice}`;
    }
  };
  
  menu.addDishToCourse('appetizers', 'Egg Rolls', 5.99);
  menu.addDishToCourse('appetizers', 'Wings', 4.99);
  menu.addDishToCourse('appetizers', 'Edemame', 6.99);
  menu.addDishToCourse('appetizers', 'Chips and Dip', 5.99);
  menu.addDishToCourse('mains', 'Salmon Filet', 17.99);
  menu.addDishToCourse('mains', 'Poke Bowl', 14.99);
  menu.addDishToCourse('mains', 'Sea Bass', 24.99);
  menu.addDishToCourse('mains', 'Fish and Chips', 13.99);
  menu.addDishToCourse('desserts', 'Chocolate Cake', 5.75);
  menu.addDishToCourse('desserts', 'Cheesecake', 6.50);
  menu.addDishToCourse('desserts', 'Espresso', 6.95);
  
  const meal = menu.generateRandomMeal();
  console.log(meal);
  