// Extract JavaScript functions for testing

// Detailed meal information for popups
const mealDetails = {
    "🍗 Chicken": {
        ingredients: ["Chicken (2 lbs)", "Onions", "Tomatoes", "Ginger-garlic paste", "Spices", "Oil"],
        cookTime: "45 minutes",
        instructions: "Marinate chicken with spices. Sauté onions until golden. Add chicken and cook until done.",
        notes: "Can be prepared ahead and reheated"
    },
    "🍲 Dal": {
        ingredients: ["Toor/moong dal", "Onions", "Tomatoes", "Turmeric", "Cumin seeds", "Ghee"],
        cookTime: "30 minutes", 
        instructions: "Pressure cook dal. Make tadka with cumin seeds, onions, tomatoes. Mix together.",
        notes: "Pairs well with rice"
    },
    "🧀 Paneer Tikka": {
        ingredients: ["Paneer block", "Bell peppers", "Yogurt", "Spices", "Oil"],
        cookTime: "25 minutes",
        instructions: "Marinate paneer in yogurt and spices. Grill or air fry until golden.",
        notes: "Great for meal prep"
    },
    "🫓 Paneer Wrap": {
        ingredients: ["Whole wheat wraps", "Leftover paneer", "Salad mix", "Onions", "Yogurt sauce"],
        cookTime: "10 minutes",
        instructions: "Warm wrap, add paneer and vegetables, roll tightly.",
        notes: "Use leftover paneer from Tuesday"
    },
    "🥚 Boiled Eggs": {
        ingredients: ["Eggs", "Salt", "Pepper", "Optional: salad mix"],
        cookTime: "15 minutes",
        instructions: "Boil eggs for 10-12 minutes. Serve with salt, pepper, and sides.",
        notes: "Quick protein option"
    },
    "🥗 Salad Bowl": {
        ingredients: ["Salad mix", "Cherry tomatoes", "Cucumber", "Avocado", "Dressing"],
        cookTime: "5 minutes",
        instructions: "Mix all fresh ingredients. Add dressing just before serving.",
        notes: "Light and refreshing"
    },
    "🧀 Paneer Butter": {
        ingredients: ["Paneer block", "Tomatoes", "Cream/yogurt", "Butter", "Spices"],
        cookTime: "35 minutes",
        instructions: "Make rich tomato gravy with butter and spices. Add paneer cubes.",
        notes: "Rich and creamy curry"
    },
    "🥥 Veg Coconut Curry": {
        ingredients: ["Mixed vegetables", "Coconut milk", "Curry leaves", "Spices", "Oil"],
        cookTime: "30 minutes",
        instructions: "Sauté vegetables with spices. Add coconut milk and simmer.",
        notes: "Mild and creamy"
    },
    "🐟 Air-Fried Fish": {
        ingredients: ["Fish fillets (1-1.5 lbs)", "Spices", "Oil", "Lemon"],
        cookTime: "20 minutes",
        instructions: "Marinate fish with spices. Air fry at 400°F for 12-15 minutes.",
        notes: "Crispy exterior, flaky interior"
    },
    "🫓 Fish Wrap": {
        ingredients: ["Whole wheat wraps", "Leftover fish", "Salad mix", "Yogurt sauce"],
        cookTime: "8 minutes",
        instructions: "Flake leftover fish, warm wrap, add vegetables and fish.",
        notes: "Use leftover fish from Tuesday"
    },
    "🍓 Yogurt + Fruit": {
        ingredients: ["Greek yogurt", "Fresh berries/banana", "Honey", "Optional nuts"],
        cookTime: "5 minutes",
        instructions: "Mix yogurt with fresh fruit. Drizzle with honey if desired.",
        notes: "Light and healthy"
    },
    "🫘 Kadala Curry": {
        ingredients: ["Black chickpeas", "Coconut milk", "Curry leaves", "Spices"],
        cookTime: "40 minutes",
        instructions: "Pressure cook chickpeas. Make coconut curry base and combine.",
        notes: "Kerala-style curry"
    },
    "🍗 Roasted Chicken": {
        ingredients: ["Chicken pieces", "Spices", "Oil", "Herbs"],
        cookTime: "50 minutes",
        instructions: "Season chicken well. Roast at 425°F until golden and cooked through.",
        notes: "Makes great leftovers"
    },
    "🥗 Chicken Salad": {
        ingredients: ["Leftover roasted chicken", "Salad mix", "Vegetables", "Dressing"],
        cookTime: "10 minutes",
        instructions: "Shred leftover chicken, mix with fresh salad ingredients.",
        notes: "Use leftover roasted chicken"
    },
    "🥙 Chicken Wrap": {
        ingredients: ["Whole wheat wraps", "Leftover chicken", "Vegetables", "Sauce"],
        cookTime: "8 minutes",
        instructions: "Warm wrap, add chicken and vegetables, roll tightly.",
        notes: "Versatile with any leftover chicken"
    },
    "🥚 Egg Bowl": {
        ingredients: ["Eggs", "Vegetables", "Rice", "Spices", "Oil"],
        cookTime: "15 minutes",
        instructions: "Scramble eggs with vegetables. Serve over rice.",
        notes: "Protein-packed meal"
    },
    "🥔 AF Chicken + Mash": {
        ingredients: ["Chicken pieces", "Potatoes", "Butter", "Milk", "Spices"],
        cookTime: "45 minutes",
        instructions: "Air fry seasoned chicken. Make creamy mashed potatoes as side.",
        notes: "Comfort food combination"
    },
    "🥦 AF Chicken + Veg": {
        ingredients: ["Chicken pieces", "Mixed vegetables", "Spices", "Oil"],
        cookTime: "30 minutes",
        instructions: "Air fry chicken and vegetables together with seasonings.",
        notes: "One-pan healthy meal"
    },
    "🍤 Coconut Shrimp Curry": {
        ingredients: ["Shrimp (1-1.5 lbs)", "Coconut milk", "Curry leaves", "Spices"],
        cookTime: "25 minutes",
        instructions: "Make coconut curry base. Add shrimp and cook until pink.",
        notes: "Quick-cooking seafood curry"
    },
    "🍛 Shrimp Rice Bowl": {
        ingredients: ["Leftover shrimp curry", "Rice", "Vegetables", "Herbs"],
        cookTime: "10 minutes",
        instructions: "Serve leftover shrimp curry over fresh rice with vegetables.",
        notes: "Use leftover curry from Tuesday"
    },
    "🥚 Boiled Egg Dinner": {
        ingredients: ["Eggs", "Vegetables", "Spices", "Bread or rice"],
        cookTime: "20 minutes",
        instructions: "Boil eggs, sauté vegetables, combine with spices.",
        notes: "Simple protein dinner"
    }
};

// Grocery list data based on weekly meal requirements
const groceryData = {
    alwaysStocked: {
        nonPerishables: [
            "Rice",
            "Dry toor/moong/masoor dal", 
            "Black chickpeas (kala chana)",
            "Whole spices: cumin, coriander, mustard seeds",
            "Ground spices: turmeric, chili powder, garam masala",
            "Salt, pepper, oil",
            "Ghee or butter",
            "Sriracha, soy sauce",
            "Ginger-garlic paste"
        ],
        commonPerishables: [
            "Onions",
            "Tomatoes", 
            "Garlic",
            "Ginger",
            "Eggs",
            "Yogurt",
            "Whole wheat wraps",
            "Salad mix 🥗"
        ]
    },
    weeklyAddOns: {
        1: [
            "Chicken (~2 lbs)",
            "Paneer (1 block)", 
            "Bell pepper",
            "Avocados",
            "Fruit (banana, berries, etc.)"
        ],
        2: [
            "Paneer (1 block)",
            "Fish / Shrimp (~1–1.5 lbs)",
            "Zucchini", 
            "Spinach / frozen greens",
            "Coconut milk (1 can)",
            "Avocados",
            "Fruit (banana, berries, etc.)"
        ],
        3: [
            "Chicken (~2 lbs)",
            "Paneer (1 block)",
            "Bell pepper",
            "Cucumber / cherry tomatoes", 
            "Fruit (banana, berries, etc.)"
        ],
        4: [
            "Chicken (~2 lbs)",
            "Fish / Shrimp (~1–1.5 lbs)",
            "Bell pepper",
            "Zucchini",
            "Spinach / frozen greens", 
            "Coconut milk (1 can)",
            "Potatoes (for mash)",
            "Avocados",
            "Fruit (banana, berries, etc.)"
        ]
    }
};

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

function showMealDetails(mealName) {
    const details = mealDetails[mealName];
    if (!details) {
        console.warn(`No details found for meal: ${mealName}`);
        return;
    }

    const modal = document.getElementById('meal-modal');
    const title = document.getElementById('modal-meal-title');
    const cookTime = document.getElementById('modal-cook-time');
    const ingredients = document.getElementById('modal-ingredients');
    const instructions = document.getElementById('modal-instructions');
    const notes = document.getElementById('modal-notes');

    if (!modal) {
        console.error('Modal not found in DOM');
        return;
    }

    title.textContent = mealName;
    cookTime.textContent = details.cookTime;
    ingredients.innerHTML = details.ingredients.map(ing => `<li>${ing}</li>`).join('');
    instructions.textContent = details.instructions;
    notes.textContent = details.notes;

    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeMealDetails() {
    const modal = document.getElementById('meal-modal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

function getGroceryListForWeek(week) {
    if (!groceryData.weeklyAddOns[week]) {
        return [];
    }
    return groceryData.weeklyAddOns[week];
}

function getAllGroceryCategories() {
    return groceryData.alwaysStocked;
}

function showGroceryList() {
    const modal = document.getElementById('grocery-modal');
    if (!modal) {
        console.error('Grocery modal not found in DOM');
        return;
    }

    const alwaysStockedContainer = document.getElementById('always-stocked');
    const weeklyContainer = document.getElementById('weekly-addons');

    // Always stocked items
    const alwaysStocked = getAllGroceryCategories();
    alwaysStockedContainer.innerHTML = `
        <div class="grocery-category">
            <h4>🧵 Non-Perishables</h4>
            <ul class="grocery-list">
                ${alwaysStocked.nonPerishables.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
        <div class="grocery-category">
            <h4>🍅 Common Perishables</h4>
            <ul class="grocery-list">
                ${alwaysStocked.commonPerishables.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
    `;

    // Weekly add-ons
    let weeklyHTML = '';
    for (let week = 1; week <= 4; week++) {
        const weeklyItems = getGroceryListForWeek(week);
        weeklyHTML += `
            <div class="grocery-week">
                <h4>Week ${week}</h4>
                <ul class="grocery-list">
                    ${weeklyItems.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    weeklyContainer.innerHTML = weeklyHTML;

    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeGroceryList() {
    const modal = document.getElementById('grocery-modal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
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
                content += `<div class="meal-item lunch" onclick="showMealDetails('${dayData.lunch}')">${dayData.lunch}</div>`;
            }
            
            if (dayData.dinner !== '—') {
                content += `<div class="meal-item dinner" onclick="showMealDetails('${dayData.dinner}')">${dayData.dinner}</div>`;
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
        mealDetails,
        groceryData,
        days,
        getMealForDay,
        getCookDays,
        getAllMealsForWeek,
        getGroceryListForWeek,
        getAllGroceryCategories,
        isValidWeek,
        isValidDay,
        renderGrid,
        showMealDetails,
        closeMealDetails,
        showGroceryList,
        closeGroceryList
    };
}