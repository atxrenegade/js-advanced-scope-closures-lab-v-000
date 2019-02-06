
function produceDrivingRange(blockRange){
	
	return function drivingRange(startingBlock, endingBlock){
		blockRange = Number.parseInt(blockRange, 10)
		endingBlock = Number.parseInt(endingBlock, 10)
		startingBlock = Number.parseInt(startingBlock, 10)

		let tripRange = endingBlock - startingBlock

		if (tripRange > blockRange) {
			let rangeOut = tripRange - blockRange;
			return `${rangeOut} blocks out of range`;
		} else {
			let rangeIn = blockRange - tripRange;
			return `within range by ${rangeIn}`;
		}
	}
}

function produceTipCalculator(percent){
	return function tipCalculator(fare) {
		return fare * percent
	}
}

function createDriver(){
	let driverId = 0
	return class Driver {
		constructor(name) {
			this.name = name;
			this.id = ++driverId;
		}
	}
}
