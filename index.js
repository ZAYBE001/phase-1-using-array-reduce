const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
function sumBatteries(total, batch) {
    return total + batch;
}

const totalBatteries = batteryBatches.reduce(sumBatteries, 0);

console.log(totalBatteries);
