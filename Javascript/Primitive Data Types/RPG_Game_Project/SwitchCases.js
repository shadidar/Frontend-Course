//1.Quest Days of the Week
const dayOfWeek = 5;
switch(dayOfWeek){
    case 1:
        console.log("Sunday: Weekly Raid");
        break;
    case 2:
        console.log("Monday: Characters Upgrade Materials");
        break;
    case 3:
        console.log("Tuesday: Weapons Upgrade Materials");
        break;
    case 4:
        console.log("Wednesday: Weekly PVP Tournament");
        break;
    case 5:
        console.log("Thursday: Talents Upgrade Materials");
        break;
    case 6:
        console.log("Friday: Weekly Boss Challenge!");
        break;
    case 7:
        console.log("Saturday: Exotic Items Vendor");
        break;
    default:
        console.log("Invalid day of the week!!!");
}

//2.Game Theme Color Setting
const themeColor = "dungeon"
switch(themeColor){
    case "light":
        console.log("This is Light theme color");
        break;
    case "dark":
        console.log("This is Dark theme color");
        break;
    case "dungeon":
        console.log("This is Dungeon theme color");
        break;
    default:
        console.log("This theme is unsupported!!!")  
}

//3.Quest Notification Status:
const questStatus = "new"
switch(questStatus){
    case "new":
    case "unread":
    case "unopened":
        console.log("You have new quests awaiting!");
        break;
    default:
        console.log("Quests completed");
}

//4.Player Level Classification:
const playerLevel = 'Master';
switch(playerLevel) {
    case 'Beginner':
        console.log("Your current level is : Beginner");
        break;
    case 'Intermediate':
        console.log("Your current level is : Intermediate");
        break;
    case 'Advanced':
        console.log("Your current level is : Advanced");
        break;
    case 'Expert':
        console.log("Your current level is : Expert");
        break;
    case 'Master':
       console.log("Your current level is : Master");
        break;
    default:
        console.log("Character Level not found: Please Create new character!!!");
  }

//5.Inventory Item Selection:
const inventoryItem = 'Sword';
switch(inventoryItem) {
    case 'Potion':
        console.log("Selected Potion");
    case 'Sword':
        console.log("Selected Sword");
    case 'Shield':
        console.log("Selected Shield");
        break;
    default:
        console.log("Unknown item!!!");
}

//6.Player Score Ranges:
const playerScore = 95;

switch (true) {
    case (playerScore >= 90):
        console.log("Legend");
        break;
    case (playerScore >= 70 && playerScore <= 89):
        console.log("Champion");
        break;
    case (playerScore < 70):
        console.log("Rookie");
        break;
    default:
        console.log("Invalid score.");
}    

//7.Seasonal Quests:
const questMonth = 10;
switch(questMonth) {
    case 1:
        console.log("Ice Kingdom Adventure");
        break;
    case 2:
        console.log("Valentine's Day Special");
        break;
    case 3:
        console.log("Spring Blossom Hunt");
        break;
    case 4:
        console.log("Easter Egg Hunt");
        break;
    case 5:
        console.log("Flower Festival Celebration");
        break;
    case 6:
        console.log("Summer Solstice Quest");
        break;
    case 7:
        console.log("Beach Party Bonanza");
        break;
    case 8:
        console.log("Underwater Expedition");
        break;
    case 9:
        console.log("Harvest Festival Quest");
        break;
    case 10:
        console.log("Haunted Mansion Mystery");
        break;
    case 11:
        console.log("Turkey Trot Adventure");
        break;
    case 12:
        console.log("Frosty Festivities");
        break;
    default:
        console.log("Invalid month for quest.");
}

//8.Player Input Handling:
const playerInput = 55;
switch (typeof playerInput) {
    case 'string':
        console.log("Player input is a string.");
        break;
    case 'number':
        console.log("Player input is a number.");
        break;
    case 'boolean':
    console.log("Player input is a boolean.");
        break;
    default:
    console.log("Unknown input type.");
}

//9.Game Update Release Schedule:
const updateMonth = 10;

switch (true) {
  case (updateMonth >= 1 && updateMonth <= 3):
    console.log("Update is scheduled for Q1.");
    break;
  case (updateMonth >= 4 && updateMonth <= 6):
    console.log("Update is scheduled for Q2.");
    break;
  case (updateMonth >= 7 && updateMonth <= 9):
    console.log("Update is scheduled for Q3.");
    break;
  case (updateMonth >= 10 && updateMonth <= 12):
    console.log("Update is scheduled for Q4.");
    break;
  default:
    console.log("Invalid month.");
}