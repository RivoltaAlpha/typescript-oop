class Animal {
	constructor(public name: string, public animalID: number) {}
}
interface feedingStrategy {
	feedingLogic(feedinglogic: string): void;
}
class Human {
	constructor(public name: string, public role: string, protected id: number) {}
}
class Habitat extends Animal implements feedingStrategy {
	constructor(
		name: string,
		animalID: number,
		public firstfeed: Date,
		public secondfeed: Date,
		public thirdfeed: Date
	) {
		super(name, animalID);
	}

	feedingLogic(): number {
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
}

class Birds extends Animal {
	constructor(name: string, animalID: number) {
		super(name, animalID);
	}
	feedingSchedule(feedingLogic: string): void {
		return;
	}
}
function todayAt(time: string): Date {
	const today = new Date();
	const [hours, minutes, seconds] = time.split(":").map(Number);
	today.setHours(hours, minutes, seconds, 0);
    console.log(today)
	return today;
}
const jungle = new Habitat(
	"eagle",
	34,
	todayAt("08:30:00"), // firstfeed at 8:30 AM today
	todayAt("12:00:00"), // secondfeed at 12:00 PM today
	todayAt("18:15:00")
);
console.log(jungle.feedingLogic());
