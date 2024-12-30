let s = ["S", "W", "G"];
let random = Math.floor(Math.random() * s.length);
let cpu = s[random];
console.log(cpu);
// let runAg;
// while(runAg){
	let game = prompt("Choose one from S,W and G.");
// }
const swg = (user, cpu) => {
	if (user === cpu) {
		return "Draw";
	} else if (
		(user === "S" && cpu === "W") ||
		(user === "W" && cpu === "G") ||
		(user === "G" && cpu === "S")
	) {
		alert("You win!");

	} else {
		alert("CPU win!");

	}
};
// runAg= alert("play again!")
	let result = swg(game, cpu);
	console.log(result);

let aft = "Congratulations! you win the game."
document.write(aft)
