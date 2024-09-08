//1.Player Health Check:
const playerHealth = 15;
if (playerHealth > 10) {
    console.log("Player is Strong");
} else {
    console.log("Player is Weak");
}

//2.Player Gold Range Check:
const playerGold = 50;
if (playerGold >=1 && playerGold <=100){
    console.log("Rich Player");
} else {
    console.log("Poor Player");
}

//3.Nested If-Else fror Weather and Time:
const weather = "snowy";
const timeOfDay = "night";
if (weather === "snowy") {
    if (timeOfDay === "night") {
        console.log("Seek shelter");
    } else {
        console.log("Continue the adventure");
    }
} else {
    console.log("Continue The Adventure");
}


//4.Comparing Weapon Strength:
const playerWeapon = "sword";
const enemyWeapon = "axe";
if (playerWeapon === enemyWeapon){
    console.log("Weapons Clashing")    
} else {
    console.log("Advantage")
}

//5.Check Player Age for Game Content:
const playerAge = 30;
if (playerAge >= 13 && playerAge <= 19) {
    console.log("Player is a Teenager")
} else {
    console.log("Player is not a Teenager");
}

//6.Game Score Evaluation with Ternary Operator:
const gameScore = 70;
console.log(gameScore >= 50 ? "High score" : "Low score");

//7.Check Number of Enemies (Even or Odd) with Ternary Operator:
const numOfEnemies = 10;
console.log(numOfEnemies % 2 === 0 ? "Even number of enemies" : "Odd number of enemies");

//8.Character Age Group Classification:
const characterAge = 15;
console.log(characterAge < 12 ? "Youngling" : (characterAge <= 19 ? "Adolescent" : "Adult"));

// 9. Player's Battle Skill Evaluation
const battleSkill = 90;
console.log(battleSkill > 70 ? "Skilled warrior" : "Train harder");

// 10. Game Session Duration Category
const sessionDuration = 140;
if (sessionDuration < 90) {
    console.log("Short");
} else if (sessionDuration <= 150) {
    console.log("Moderate");
} else {
    console.log("Marathon");
}

// 11. Check Potion Availability in Inventory
const totalPotions = 5;
const usedPotions = 3;
if (totalPotions > usedPotions) {
    console.log("Potions available");
} else {
    console.log("Out of potions");
}

// 12. Validate Player Age for Restricted Quest ==>>Player age here is 30 because I used const playerAge in NO.5 
const questAgeRestriction = 18;
if (playerAge >= questAgeRestriction) {
    console.log("You can take on the quest");
} else {
    console.log("Restricted quest for players 18 or older");
}

// 13. Special Weekend Events
const dayOfTheWeek = "Saturday";
if (dayOfTheWeek === "Saturday" || dayOfTheWeek === "Sunday") {
    console.log("Special event happening!");
} else {
    console.log("Regular gameplay");
}

// 14. Identify Era of Game Setting
const gameSettingYear = 1300;
if (gameSettingYear >= 900 && gameSettingYear <= 1500) {
    console.log("Medieval era setting");
} else {
    console.log("Different historical era");
}

// 15. Evaluate Character Class and Attributes
const characterClass = "Warrior";
const characterLevel = 15;
if (characterClass === "Warrior" && characterLevel >= 10) {
    console.log("Powerful warrior");
} else {
    console.log("Average character");
}

// 16. Determine Battle Readiness
const enemyCount = 2;
if (playerHealth > 50 && enemyCount < 3) {
    console.log("Ready for battle");
} else {
    console.log("Proceed with caution");
}

// 17. Assess Quest Completion Status
const questProgress = 100;
const questDifficulty = 3;
if (questProgress === 100 && questDifficulty <= 5) {
    console.log("Quest completed");
} else {
    console.log("Quest in progress");
}

// 18. Check Player's Inventory
const inventorySize = 80;
if (inventorySize >= 90) {
    console.log("Inventory almost full");
} else {
    console.log("Plenty of space in the inventory");
}
