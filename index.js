// Global variable because HQ building will never move
const hqStreet = 42
function distanceFromHqInBlocks(pickupStreet){
    return Math.abs(hqStreet - pickupStreet)
}
function distanceFromHqInFeet(pickupStreet){
    return distanceFromHqInBlocks(pickupStreet) * 264
}
function distanceTravelledInFeet(startStreet, endStreet){
    return Math.abs(startStreet - endStreet) * 264
}
function calculatesFarePrice(start, destination){
    const distFeet = distanceTravelledInFeet(start, destination)
    let fare
    switch (true) {
        case distFeet <= 400:
            fare = 0
            break
        case distFeet <= 2000:
            fare = (distFeet - 400) * 0.02 // Doesn't round to two decimal places
            break
        case distFeet <= 2500:
            fare = 25
            break
        case distFeet > 2500:
            fare = 'cannot travel that far'
            break
        default: 'wat'
    }
    return fare
}
