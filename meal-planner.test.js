const {
    mealData,
    days,
    getMealForDay,
    getCookDays,
    getAllMealsForWeek,
    isValidWeek,
    isValidDay
} = require('./meal-planner');

describe('Meal Planner Data Structure', () => {
    test('should have 4 weeks of meal data', () => {
        expect(Object.keys(mealData)).toHaveLength(4);
        expect(mealData).toHaveProperty('1');
        expect(mealData).toHaveProperty('2');
        expect(mealData).toHaveProperty('3');
        expect(mealData).toHaveProperty('4');
    });

    test('should have 7 days per week', () => {
        for (let week = 1; week <= 4; week++) {
            expect(Object.keys(mealData[week])).toHaveLength(7);
        }
    });

    test('should include all expected days', () => {
        expect(days).toEqual(['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']);
    });
});

describe('getMealForDay function', () => {
    test('should return correct meal for valid week and day', () => {
        const meal = getMealForDay(1, 'Saturday');
        expect(meal).toEqual({
            lunch: "Chicken 🍗",
            dinner: "Dal 🍲",
            cook: true
        });
    });

    test('should return null for invalid week', () => {
        const meal = getMealForDay(5, 'Saturday');
        expect(meal).toBeNull();
    });

    test('should return null for invalid day', () => {
        const meal = getMealForDay(1, 'InvalidDay');
        expect(meal).toBeNull();
    });
});

describe('getCookDays function', () => {
    test('should return Saturday and Tuesday as cook days for week 1', () => {
        const cookDays = getCookDays(1);
        expect(cookDays).toEqual(['Saturday', 'Tuesday']);
    });

    test('should return exactly 2 cook days per week', () => {
        for (let week = 1; week <= 4; week++) {
            const cookDays = getCookDays(week);
            expect(cookDays).toHaveLength(2);
        }
    });

    test('should return empty array for invalid week', () => {
        const cookDays = getCookDays(5);
        expect(cookDays).toEqual([]);
    });
});

describe('getAllMealsForWeek function', () => {
    test('should return all meals for valid week', () => {
        const meals = getAllMealsForWeek(1);
        expect(meals).toBeDefined();
        expect(Object.keys(meals)).toHaveLength(7);
    });

    test('should return empty object for invalid week', () => {
        const meals = getAllMealsForWeek(5);
        expect(meals).toEqual({});
    });
});

describe('Validation functions', () => {
    test('isValidWeek should validate week numbers correctly', () => {
        expect(isValidWeek(1)).toBe(true);
        expect(isValidWeek(4)).toBe(true);
        expect(isValidWeek(0)).toBe(false);
        expect(isValidWeek(5)).toBe(false);
    });

    test('isValidDay should validate day names correctly', () => {
        expect(isValidDay('Saturday')).toBe(true);
        expect(isValidDay('Friday')).toBe(true);
        expect(isValidDay('InvalidDay')).toBe(false);
        expect(isValidDay('')).toBe(false);
    });
});

describe('Meal Plan Consistency', () => {
    test('should have consistent cook day pattern (Saturday and Tuesday)', () => {
        for (let week = 1; week <= 4; week++) {
            expect(mealData[week]['Saturday'].cook).toBe(true);
            expect(mealData[week]['Tuesday'].cook).toBe(true);
            expect(mealData[week]['Sunday'].cook).toBe(false);
            expect(mealData[week]['Monday'].cook).toBe(false);
            expect(mealData[week]['Wednesday'].cook).toBe(false);
            expect(mealData[week]['Thursday'].cook).toBe(false);
            expect(mealData[week]['Friday'].cook).toBe(false);
        }
    });

    test('should have lunch data for all days except Tuesday-Friday', () => {
        for (let week = 1; week <= 4; week++) {
            expect(mealData[week]['Saturday'].lunch).not.toBe('—');
            expect(mealData[week]['Sunday'].lunch).not.toBe('—');
            expect(mealData[week]['Monday'].lunch).not.toBe('—');
            expect(mealData[week]['Tuesday'].lunch).toBe('—');
            expect(mealData[week]['Wednesday'].lunch).toBe('—');
            expect(mealData[week]['Thursday'].lunch).toBe('—');
            expect(mealData[week]['Friday'].lunch).toBe('—');
        }
    });

    test('should have dinner data for all days', () => {
        for (let week = 1; week <= 4; week++) {
            days.forEach(day => {
                expect(mealData[week][day].dinner).toBeDefined();
                expect(mealData[week][day].dinner).not.toBe('');
            });
        }
    });
});