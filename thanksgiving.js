const thanksgivingMeal = {
    starter : { 
        fruit: "honeydew melon",
        wine: "moscato",
        calories: 180
    },
    entree : {
        meat: "Turkey",
        alt: "Stuffed green peppers",
        vegetables : {
            potatoes: "Creamed mashed potatoes",
            greens: "French beans",
            salad: "Radacchio"
            },
        sides : {
            bread: "garlic bread rolls",
            pasta: "Macaroni and Cheese"
            },
        calories: 450
        },
    dessert : {
        ice_cream: "pumpkin-vanilla",
        cake: "frosted pumpkin pie",
        calories: 300
    },

    total_cost : 25.0,
    senior_discount: 10,

    greeting : function() {
        let greet = document.querySelector(".greeting");
        greet.textContent = "Enjoy Your Thanksgiving This Year!";
    },

    prettyPrint : function() {
        // Collate the menu here
       // display the content of the starter, the entree and the dessert
       let menuStr = document.querySelector(".fullMeal");
       menuStr.textContent = "Start your meal with "+thanksgivingMeal.starter.fruit+", a glass of "+thanksgivingMeal.starter.wine+". Help yourself to "+thanksgivingMeal.entree.meat+" or "+thanksgivingMeal.entree.alt+" with "+thanksgivingMeal.entree.vegetables.salad+", "+thanksgivingMeal.entree.vegetables.greens+" and "+thanksgivingMeal.entree.vegetables.potatoes+".";
       menuStr.textContent += " Have a side! Plenty of "+thanksgivingMeal.entree.sides.bread+" and "+thanksgivingMeal.entree.sides.pasta+". Finish your meal with a sweet - "+thanksgivingMeal.dessert.ice_cream+", "+thanksgivingMeal.dessert.cake;
    },

    totalPrice(isSenior) {
        // display the total price, given indicator isSenior - true or false
        let priInfo = document.querySelector(".priceInfo");
        isSenior = prompt("Are you a senior, yes or no");
        if (isSenior=="yes") {
            priInfo.textContent = "Seniors get a 10% discount to the total cost of their meal. Your price is "+this.total_cost*(1-(this.senior_discount/100));
        } else {
            priInfo.textContent = "Seniors get a 10% discount to the total cost of their meal. Your price is $"+this.total_cost+", seniors would pay $"+(this.total_cost*(1-(this.senior_discount/100)));
        }
    },

    totalCalories : function() {
        // Add the total calories
        let totCalInfo = document.querySelector(".calorieInfo");
        totCalInfo.textContent = "Total Calories: ";
        totCalInfo.textContent += thanksgivingMeal.starter.calories + thanksgivingMeal.entree.calories + thanksgivingMeal.dessert.calories;
    },

    caloriesFrom: function(indicator) {
        // get the total calories for the indicator
        // 1 - starter, 2 - entree, 3 - dessert
        let calFromInfo = document.querySelector(".calorieInfo");
        calFromInfo.textContent += ", starter: "+thanksgivingMeal.starter.calories;
        calFromInfo.textContent += ", entree: "+thanksgivingMeal.entree.calories;
        calFromInfo.textContent += ", dessert: "+thanksgivingMeal.dessert.calories;
    }
};

thanksgivingMeal.greeting();
thanksgivingMeal.prettyPrint();
thanksgivingMeal.totalPrice();
thanksgivingMeal.totalCalories();
thanksgivingMeal.caloriesFrom(1);