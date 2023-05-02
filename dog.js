export class Dog{

    constructor(name, breed, age, gender, colors, foodName){
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.gender = gender;
        this.colors = colors;
        this.favoriteFood = new Food(foodName, dietType);
    }

    sayHello(){
        console.log('bau');
    }
}

class Food{
    constructor(name, diet);

}