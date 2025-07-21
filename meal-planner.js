// Extract JavaScript functions for testing
const mealData = {
    1: {
        "Saturday": { lunch: "🍗 Chicken", dinner: "🍲 Dal", cook: true },
        "Sunday": { lunch: "🍲 Dal", dinner: "🍗 Chicken", cook: false },
        "Monday": { lunch: "🍗 Chicken", dinner: "🍲 Dal", cook: false },
        "Tuesday": { lunch: "—", dinner: "🧀 Paneer Tikka", cook: true },
        "Wednesday": { lunch: "—", dinner: "🫓 Paneer Wrap", cook: false },
        "Thursday": { lunch: "—", dinner: "🥚 Boiled Eggs", cook: false },
        "Friday": { lunch: "—", dinner: "🥗 Salad Bowl", cook: false }
    },
    2: {
        "Saturday": { lunch: "🧀 Paneer Butter", dinner: "🥥 Veg Coconut Curry", cook: true },
        "Sunday": { lunch: "🥥 Veg Curry", dinner: "🧀 Paneer Butter", cook: false },
        "Monday": { lunch: "🧀 Paneer Butter", dinner: "🥥 Veg Curry", cook: false },
        "Tuesday": { lunch: "—", dinner: "🐟 Air-Fried Fish", cook: true },
        "Wednesday": { lunch: "—", dinner: "🫓 Fish Wrap", cook: false },
        "Thursday": { lunch: "—", dinner: "🍓 Yogurt + Fruit", cook: false },
        "Friday": { lunch: "—", dinner: "🥚 Boiled Eggs", cook: false }
    },
    3: {
        "Saturday": { lunch: "🫘 Kadala Curry", dinner: "🍗 Roasted Chicken", cook: true },
        "Sunday": { lunch: "🥗 Chicken Salad", dinner: "🫘 Kadala Curry", cook: false },
        "Monday": { lunch: "🥙 Chicken Wrap", dinner: "🥚 Boiled Eggs", cook: false },
        "Tuesday": { lunch: "—", dinner: "🧀 Paneer Tikka", cook: true },
        "Wednesday": { lunch: "—", dinner: "🫓 Paneer Wrap", cook: false },
        "Thursday": { lunch: "—", dinner: "🥚 Egg Bowl", cook: false },
        "Friday": { lunch: "—", dinner: "🥗 Salad Bowl", cook: false }
    },
    4: {
        "Saturday": { lunch: "🥔 AF Chicken + Mash", dinner: "🥚 Egg Bowl", cook: true },
        "Sunday": { lunch: "🥚 Egg Bowl", dinner: "🥦 AF Chicken + Veg", cook: false },
        "Monday": { lunch: "🥙 Chicken Wrap", dinner: "🥚 Egg Bowl", cook: false },
        "Tuesday": { lunch: "—", dinner: "🍤 Coconut Shrimp Curry", cook: true },
        "Wednesday": { lunch: "—", dinner: "🍛 Shrimp Rice Bowl", cook: false },
        "Thursday": { lunch: "—", dinner: "🥚 Boiled Egg Dinner", cook: false },
        "Friday": { lunch: "—", dinner: "🥗 Salad Bowl", cook: false }
    }
};

const days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

function getMealForDay(week, day) {
    return mealData[week] && mealData[week][day] ? mealData[week][day] : null;
}

function getCookDays(week) {
    if (!mealData[week]) return [];
    return days.filter(day => mealData[week][day] && mealData[week][day].cook);
}

function getAllMealsForWeek(week) {
    if (!mealData[week]) return {};
    return mealData[week];
}

function isValidWeek(week) {
    return week >= 1 && week <= 4;
}

function isValidDay(day) {
    return days.includes(day);
}

function renderGrid() {
    const grid = document.getElementById('main-grid');
    if (!grid) return;
    
    grid.innerHTML = '';

    // First row: empty cell + day headers
    const emptyCell = document.createElement('div');
    grid.appendChild(emptyCell);
    
    days.forEach((day, dayIndex) => {
        const header = document.createElement('div');
        header.className = 'day-header';
        
        // Check if this day is a cook day (Saturday=0, Tuesday=3)
        const isCookDay = dayIndex === 0 || dayIndex === 3;
        header.textContent = isCookDay ? `🧑‍🍳 ${day}` : day;
        
        grid.appendChild(header);
    });

    // Four rows: one for each week
    for (let week = 1; week <= 4; week++) {
        // Week header
        const weekHeader = document.createElement('div');
        weekHeader.className = 'week-header';
        weekHeader.textContent = `Week ${week}`;
        grid.appendChild(weekHeader);

        // Day cards for this week
        days.forEach(day => {
            const dayData = mealData[week][day];
            const card = document.createElement('div');
            card.className = 'day-card';
            if (dayData.cook) card.classList.add('cook-day');

            let content = '';

            if (dayData.lunch !== '—') {
                content += `<div class="meal-item lunch">${dayData.lunch}</div>`;
            }
            
            if (dayData.dinner !== '—') {
                content += `<div class="meal-item dinner">${dayData.dinner}</div>`;
            }

            card.innerHTML = content;
            grid.appendChild(card);
        });
    }
}

// Initialize when DOM is ready
if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderGrid);
    } else {
        renderGrid();
    }
}

// Export for Node.js testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        mealData,
        days,
        getMealForDay,
        getCookDays,
        getAllMealsForWeek,
        isValidWeek,
        isValidDay,
        renderGrid
    };
}