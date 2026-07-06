export function estimateBudget(days = 3) {
    const hotelPerNight = 80;
    const foodPerDay = 30;
    const transportPerDay = 15;

    const hotel = hotelPerNight * days;
    const food = foodPerDay * days;
    const transport = transportPerDay * days;

    return {
        hotel,
        food,
        transport,
        total: hotel + food + transport,
    };
}