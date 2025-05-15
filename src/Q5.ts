abstract class Animal {
	constructor(public name: string, public animalID: number,  public feedingMechanism: string) {}
}
interface feedingStrategy {
	feedingLogic(feedinglogic: string): void;
}
class Human {
	constructor(public name: string, public role: string, protected id: number) {}
}
class Habitat extends Animal  {
	constructor(
		name: string,
		animalID: number,
		feedingMechanism: string,
		public temperature: number,
		public isClean: boolean,
		public firstfeed: Date,
		public secondfeed: Date,
		public thirdfeed: Date
	) {
		super(name, animalID, feedingMechanism);
	}

	feedingSchedule(): number {
		const feedone = this.firstfeed;
		const feedtwo = this.secondfeed;
		const feedthree = this.thirdfeed;
		// Calculate intervals in days
		const msPerDay = 1000 * 60;
		const feedInterval1 = (feedtwo.getTime() - feedone.getTime()) / msPerDay;
		const feedInterval2 = (feedthree.getTime() - feedtwo.getTime()) / msPerDay;

		console.log("Interval 1 (minutes):", feedInterval1);
		console.log("Interval 2 (minutes):", feedInterval2);
		const feedSummary = (feedInterval1 + feedInterval2) / 2;
		return feedSummary;
	}
	habitatMonitor(): string {
		const roomtemp = 35;
		const currenttemp = this.temperature;
		const clean = this.isClean;
		if (currenttemp <= roomtemp && clean) {
			return `${
				this.name
			}'s habibat is clean \ntemperature of ${currenttemp} degrees is good \nFeed them after ${this.feedingSchedule()} minutes`;
		} else {
			return `${this.name} habitat is not clean and the current temperature of ${currenttemp} is not healthy for animal`;
		}
	}
}

class Birds extends Animal implements feedingStrategy {
	constructor(name: string, animalID: number, feedingMechanism: string) {
		super(name, animalID, feedingMechanism);
	}
	feedingLogic(): string {
		return this.feedingMechanism;
	}
}
function todayAt(time: string): Date {
	const today = new Date();
	const [hours, minutes, seconds] = time.split(":").map(Number);
	today.setHours(hours, minutes, seconds, 0); // this sets the time to the specified hours, minutes, and seconds
    console.log(today)
	return today;
}
const jungle = new Habitat(
	"eagle",
	34,
	"herbivore",
	35,
	true,
	todayAt("08:30:00"), // firstfeed at 8:30 AM today
	todayAt("12:00:00"), // secondfeed at 12:00 PM today
	todayAt("18:15:00")
);
console.log(jungle.habitatMonitor());

const gazzelle = new Birds("gazzelle", 12, "herbivore");
console.log(gazzelle.feedingLogic());
