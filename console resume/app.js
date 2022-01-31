var myName = "Theodore Harris";
console.log("Name: " + myName.toUpperCase());
console.log("Career: Stay at home son")
console.log("*Description: An Amateur software developer looking for gainful employment")

console.log("My Interests: ") 
function displayInterests(Interests){
    console.log("* " + Interests)

}
displayInterests("Cars")
displayInterests("Computers")
displayInterests("Basketball")
function displayPosition(companyName, jobTitle, description) {
    console.log("* " + companyName+ " - " + jobTitle + " - " + description);
}
console.log("");
console.log("My Previous Experience");
displayPosition("Pridestaff","Warehouse associate","safely pick and stock shelves");
displayPosition("L&O Greek specialties","shop assistant","various tasks around the store");
displayPosition("Squeeky Kleen","Detailer","detail and clean cars");
displayPosition("PapaJohns","Delivery Driver","deliver pizzas in a safe and timely manner");

console.log("")
console.log("My Skills")
function displaySkill(skill, isCool){
    if (isCool == true){
        console.log("*BAM: " + skill);
    } else {
        console.log("* " + skill)
    }
}
displaySkill("Tap Dancing", false);
displaySkill("Downloading", true);
displaySkill("can do wheelies", true);
displaySkill("Gran Turismo drifting", true);
displaySkill("Monogamy", false);