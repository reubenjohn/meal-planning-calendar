// Extract JavaScript functions for testing

// Detailed meal information for popups - Updated with actual recipes from docs
const mealDetails = {
    // Week 1 Recipes
    "🍗 Spiced Roasted Chicken": {
        ingredients: ["~2 lbs chicken (thigh or breast, diced)", "Salt", "Turmeric", "Chili powder", "Cumin powder", "Soy sauce", "Sriracha", "Oil"],
        cookTime: "20 minutes + marinating",
        instructions: "1. Marinate chicken for 30+ minutes. 2. Roast or air fry at 375°F for 15-20 min until golden. 3. Store for wraps, bowls, or salad.",
        notes: "Used in Sat Lunch & Sun Dinner, Mon Lunch, Fri Salad Bowl",
        prepNotes: "Marinate chicken for roasting on Saturday (morning or previous night)"
    },
    "🍲 Basic Indian Dal": {
        ingredients: ["¾ cup toor or moong dal", "1 small onion (chopped)", "1 medium tomato (chopped or pureed)", "2 cloves garlic (minced)", "1 tsp ginger (grated or paste)", "Mustard seeds, cumin, turmeric, chili powder, salt", "Ghee or oil"],
        cookTime: "25 minutes",
        instructions: "1. Pressure cook dal with turmeric, salt, and water (2-3 whistles). 2. In a separate pan, heat ghee/oil. 3. Temper mustard seeds → add garlic, ginger → then onion → tomato + spices. 4. Mix tadka into cooked dal and simmer 5 min.",
        notes: "Used in Sat Dinner, Sun Lunch, Mon Dinner",
        prepNotes: "Boil eggs on Saturday or Sunday for use through the week"
    },
    "🧀 Paneer Tikka Masala": {
        ingredients: ["200-250g paneer (frozen or refrigerated, cubed)", "1 medium onion (chopped)", "1-2 tomatoes or ½ cup tomato puree", "1 tsp ginger-garlic paste", "2 tbsp yogurt", "Turmeric, chili powder, coriander powder, garam masala", "Optional: kasuri methi, cream"],
        cookTime: "25 minutes + marinating",
        instructions: "1. Optional: marinate paneer in yogurt + spices for 15-30 min. 2. Sauté onion until golden → add ginger-garlic → tomato puree + spices → cook down. 3. Add paneer, simmer for 5-10 min. 4. Optional: finish with cream or crushed kasuri methi.",
        notes: "Used in Tue Dinner, Wed Dinner",
        prepNotes: "Optional marinade enhances flavor"
    },
    "🫓 Paneer Wrap": {
        ingredients: ["Leftover paneer tikka masala", "Whole wheat tortilla", "Salad mix or onions"],
        cookTime: "5 minutes",
        instructions: "Use leftover paneer tikka masala as filling. Wrap with salad mix or onions in whole wheat tortilla.",
        notes: "Used in Wed Dinner (if not repeating curry)",
        prepNotes: "Uses leftover paneer from Tuesday"
    },
    "🥚 Boiled Egg + Avocado Bowl": {
        ingredients: ["Pre-boiled eggs, sliced", "Avocado", "Salad mix", "Olive oil, lemon juice, pepper"],
        cookTime: "5 minutes",
        instructions: "Use pre-boiled eggs, sliced. Slice avocado. Serve over salad mix with olive oil, lemon juice, pepper",
        notes: "Used in Thu Dinner",
        prepNotes: "Use pre-boiled eggs from weekend prep"
    },
    "🥗 Chicken or Paneer Salad Bowl": {
        ingredients: ["Salad mix", "Leftover roasted chicken or paneer", "Optional: sliced egg, yogurt or bottled dressing"],
        cookTime: "5 minutes",
        instructions: "Salad mix + leftover roasted chicken or paneer. Optional: Add sliced egg, yogurt or bottled dressing",
        notes: "Used in Fri Dinner",
        prepNotes: "Uses leftovers from earlier in week"
    },

    // Week 2 Recipes  
    "🧈 Paneer Butter Masala": {
        ingredients: ["~250g paneer (cubed)", "1 onion (chopped)", "1-2 tomatoes (pureed or chopped fine)", "1 tsp ginger-garlic paste", "2 tbsp butter or ghee", "2 tbsp cream or yogurt (optional)", "Turmeric, chili powder, garam masala, salt", "Optional: kasuri methi"],
        cookTime: "30 minutes",
        instructions: "1. Sauté onion in butter → add ginger-garlic paste → tomatoes + spices → cook till thick. 2. Add paneer and a splash of water. Simmer 5-7 min. 3. Finish with cream/yogurt and kasuri methi.",
        notes: "Used in Sat Lunch & Sun Dinner, Mon Lunch",
        prepNotes: "No advance prep mandatory this week"
    },
    "🥥 Simple Coconut Veg Curry": {
        ingredients: ["Zucchini, bell pepper, and spinach/frozen greens", "1 onion, 1 tomato", "1 can coconut milk", "Ginger-garlic paste", "Turmeric, garam masala, chili powder, salt"],
        cookTime: "20 minutes",
        instructions: "1. Sauté onion → add garlic/ginger → tomato → spices. 2. Add chopped veggies, sauté 2-3 min. 3. Pour in coconut milk, simmer 8-10 min till veggies are soft.",
        notes: "Used in Sat Dinner, Sun Lunch, Mon Dinner",
        prepNotes: "Optional: thaw paneer or fish in fridge the night before cooking"
    },
    "🐟 Air-Fried Fish": {
        ingredients: ["~1 lb fish (tilapia, cod, etc.)", "Turmeric, chili powder, salt, pepper, lime juice, a bit of oil", "Optional: garlic paste or mustard"],
        cookTime: "15 minutes + marinating",
        instructions: "1. Marinate 20+ min (while prepping sides). 2. Air fry at 375°F for ~10-12 min until golden.",
        notes: "Used in Tue Dinner, Wed Wrap",
        prepNotes: "Marinate while prepping other ingredients"
    },
    "🫓 Fish Wrap": {
        ingredients: ["Leftover air-fried fish", "Tortilla", "Salad mix", "Yogurt/lemon drizzle"],
        cookTime: "5 minutes",
        instructions: "Reheat air-fried fish. Wrap in tortilla with salad mix and yogurt/lemon drizzle",
        notes: "Used in Wed Dinner",
        prepNotes: "Uses leftover fish from Tuesday"
    },
    "🍓 Yogurt + Fruit Bowl": {
        ingredients: ["Plain yogurt", "Sliced banana or berries", "Optional: honey, granola"],
        cookTime: "5 minutes",
        instructions: "Add sliced banana or berries to plain yogurt. Optional: drizzle honey, sprinkle granola",
        notes: "Used in Thu Dinner",
        prepNotes: "Quick assembly meal"
    },
    "🥚 Boiled Eggs": {
        ingredients: ["Pre-boiled eggs", "Salt, pepper", "Optional: toast or fruit"],
        cookTime: "5 minutes",
        instructions: "Slice pre-boiled eggs. Serve with salt, pepper, optional toast or fruit",
        notes: "Used in Fri Dinner",
        prepNotes: "Use eggs boiled earlier in week"
    },

    // Week 3 Recipes
    "🫘 Kadala Curry": {
        ingredients: ["¾ cup black chickpeas (kadala), soaked overnight", "1 onion, 1 tomato", "Ginger-garlic paste", "Coconut milk or shredded coconut (optional)", "Turmeric, chili powder, coriander, garam masala, mustard seeds, curry leaves"],
        cookTime: "45 minutes",
        instructions: "1. Pressure cook soaked kadala (3-4 whistles). 2. In oil, temper mustard seeds, curry leaves → sauté onion, garlic, ginger → add tomato + spices. 3. Add cooked chickpeas and a bit of the cooking water. Simmer. 4. Optional: Stir in coconut milk for richness.",
        notes: "Used in Sat Lunch & Sun Dinner, Mon Dinner",
        prepNotes: "Soak black chickpeas (kadala) the night before Saturday cooking"
    },
    "🍗 Roasted Chicken": {
        ingredients: ["~2 lbs chicken (thigh or breast, diced)", "Salt", "Turmeric", "Chili powder", "Cumin powder", "Soy sauce", "Sriracha", "Oil"],
        cookTime: "20 minutes + marinating",
        instructions: "Same as Week 1 Spiced Roasted Chicken recipe.",
        notes: "Used in Sat Dinner, Sun Lunch, Mon Lunch",
        prepNotes: "Marinate chicken (if roasting for lunch)"
    },
    "🥗 Chicken Salad Bowl": {
        ingredients: ["Roasted chicken", "Salad mix", "Optional toppings: boiled egg, avocado, lemon/olive oil dressing"],
        cookTime: "5 minutes",
        instructions: "Use roasted chicken + salad mix. Optional toppings: boiled egg, avocado, lemon/olive oil dressing",
        notes: "Used in Sun Lunch, Fri Dinner",
        prepNotes: "Uses roasted chicken from Saturday"
    },
    "🥙 Chicken Wrap": {
        ingredients: ["Roasted chicken", "Salad mix", "Tortilla", "Yogurt drizzle or leftover dal curry"],
        cookTime: "5 minutes",
        instructions: "Use roasted chicken. Wrap with salad mix in tortilla + yogurt drizzle or leftover dal curry as a base",
        notes: "Used in Mon Lunch",
        prepNotes: "Uses roasted chicken from Saturday"
    },
    "🥚 Egg Bowl": {
        ingredients: ["Pre-boiled eggs", "Avocado", "Salad mix", "Yogurt dressing or hummus"],
        cookTime: "5 minutes",
        instructions: "Use pre-boiled eggs. Combine with avocado, salad mix, yogurt dressing or hummus",
        notes: "Used in Thu Dinner",
        prepNotes: "Boil eggs in a batch for the week (optional)"
    },

    // Week 4 Recipes
    "🍗 Air-Fried Chicken": {
        ingredients: ["~2 lbs chicken (diced or fillets)", "Salt, pepper, chili powder, garlic powder/paste, paprika (optional), oil", "Optional: yogurt or lemon juice"],
        cookTime: "20 minutes + marinating",
        instructions: "1. Marinate 30+ minutes. 2. Air fry at 375°F for 15-20 min until golden. 3. Serve with mashed potatoes or in wraps.",
        notes: "Used in Sat Lunch, Sun Dinner, Mon Lunch",
        prepNotes: "Marinate chicken for air frying (Saturday)"
    },
    "🥚 Egg Bowl": {
        ingredients: ["Boiled eggs", "Salad mix or sautéed veggies", "Avocado or yogurt-based dressing", "Optional: toast or wrap"],
        cookTime: "10 minutes",
        instructions: "Use boiled eggs + salad mix or sautéed veggies. Add avocado or yogurt-based dressing. Optional: pair with toast or wrap",
        notes: "Used in Sat Dinner, Sun Lunch, Mon Dinner",
        prepNotes: "Boil eggs on Sat/Sun for use through the week"
    },
    "🥔 Mashed Potatoes": {
        ingredients: ["2-3 medium potatoes", "Salt, pepper, butter/ghee, milk (or yogurt)"],
        cookTime: "25 minutes",
        instructions: "1. Boil potatoes until soft. 2. Mash with butter, salt, pepper, splash of milk or yogurt. 3. Store and reheat throughout the week.",
        notes: "Used in Sat Lunch, Sun Dinner",
        prepNotes: "Optional: prep mashed potatoes in bulk"
    },
    "🍤 Coconut Shrimp Curry": {
        ingredients: ["1-1.5 lbs shrimp or fish (tilapia works well)", "1 onion, 1 tomato", "1 can coconut milk", "Ginger-garlic paste", "Turmeric, chili powder, garam masala, mustard seeds"],
        cookTime: "20 minutes",
        instructions: "1. Sauté mustard seeds → garlic, ginger → onion → tomato → spices. 2. Add shrimp/fish, sauté until opaque. 3. Add coconut milk, simmer 5-10 min. Serve with rice or wrap.",
        notes: "Used in Tue Dinner, Wed Dinner",
        prepNotes: "Thaw shrimp/fish in fridge Tuesday morning if using frozen"
    },
    "🍛 Shrimp Rice Bowl": {
        ingredients: ["Leftover shrimp curry", "Rice or salad mix", "Optional: boiled egg or yogurt drizzle"],
        cookTime: "5 minutes",
        instructions: "Use leftover shrimp curry. Serve over rice or salad mix. Optional: top with boiled egg or yogurt drizzle",
        notes: "Used in Wed Dinner",
        prepNotes: "Uses leftover curry from Tuesday"
    },

    // Shared backup meals across weeks
    "🥗 Salad Bowl": {
        ingredients: ["Salad mix", "Leftover chicken or egg", "Yogurt, lemon or bottled dressing", "Optional: nuts, seeds, sliced fruit"],
        cookTime: "5 minutes",
        instructions: "Salad mix + leftover chicken or egg. Yogurt, lemon or bottled dressing. Optional: nuts, seeds, sliced fruit",
        notes: "Light and refreshing option",
        prepNotes: "Always available as backup"
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
        "Saturday": { lunch: "🍗 Spiced Roasted Chicken", dinner: "🍲 Basic Indian Dal", cook: true },
        "Sunday": { lunch: "🍲 Basic Indian Dal", dinner: "🍗 Spiced Roasted Chicken", cook: false },
        "Monday": { lunch: "🍗 Spiced Roasted Chicken", dinner: "🍲 Basic Indian Dal", cook: false },
        "Tuesday": { lunch: "—", dinner: "🧀 Paneer Tikka Masala", cook: true },
        "Wednesday": { lunch: "—", dinner: "🫓 Paneer Wrap", cook: false },
        "Thursday": { lunch: "—", dinner: "🥚 Boiled Egg + Avocado Bowl", cook: false },
        "Friday": { lunch: "—", dinner: "🥗 Chicken or Paneer Salad Bowl", cook: false }
    },
    2: {
        "Saturday": { lunch: "🧈 Paneer Butter Masala", dinner: "🥥 Simple Coconut Veg Curry", cook: true },
        "Sunday": { lunch: "🥥 Simple Coconut Veg Curry", dinner: "🧈 Paneer Butter Masala", cook: false },
        "Monday": { lunch: "🧈 Paneer Butter Masala", dinner: "🥥 Simple Coconut Veg Curry", cook: false },
        "Tuesday": { lunch: "—", dinner: "🐟 Air-Fried Fish", cook: true },
        "Wednesday": { lunch: "—", dinner: "🫓 Fish Wrap", cook: false },
        "Thursday": { lunch: "—", dinner: "🍓 Yogurt + Fruit Bowl", cook: false },
        "Friday": { lunch: "—", dinner: "🥚 Boiled Eggs", cook: false }
    },
    3: {
        "Saturday": { lunch: "🫘 Kadala Curry", dinner: "🍗 Roasted Chicken", cook: true },
        "Sunday": { lunch: "🥗 Chicken Salad Bowl", dinner: "🫘 Kadala Curry", cook: false },
        "Monday": { lunch: "🥙 Chicken Wrap", dinner: "🫘 Kadala Curry", cook: false },
        "Tuesday": { lunch: "—", dinner: "🧀 Paneer Tikka Masala", cook: true },
        "Wednesday": { lunch: "—", dinner: "🫓 Paneer Wrap", cook: false },
        "Thursday": { lunch: "—", dinner: "🥚 Egg Bowl", cook: false },
        "Friday": { lunch: "—", dinner: "🥗 Chicken Salad Bowl", cook: false }
    },
    4: {
        "Saturday": { lunch: "🍗 Air-Fried Chicken", dinner: "🥚 Egg Bowl", cook: true },
        "Sunday": { lunch: "🥚 Egg Bowl", dinner: "🍗 Air-Fried Chicken", cook: false },
        "Monday": { lunch: "🍗 Air-Fried Chicken", dinner: "🥚 Egg Bowl", cook: false },
        "Tuesday": { lunch: "—", dinner: "🍤 Coconut Shrimp Curry", cook: true },
        "Wednesday": { lunch: "—", dinner: "🍛 Shrimp Rice Bowl", cook: false },
        "Thursday": { lunch: "—", dinner: "🥚 Boiled Eggs", cook: false },
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
    const prepNotes = document.getElementById('modal-prep-notes');

    if (!modal) {
        console.error('Modal not found in DOM');
        return;
    }

    title.textContent = mealName;
    cookTime.textContent = details.cookTime;
    ingredients.innerHTML = details.ingredients.map(ing => `<li>${ing}</li>`).join('');
    instructions.textContent = details.instructions;
    notes.textContent = details.notes;
    
    // Handle prep notes (may not exist for all recipes)
    if (prepNotes && details.prepNotes) {
        prepNotes.textContent = details.prepNotes;
        prepNotes.parentElement.style.display = 'block';
    } else if (prepNotes) {
        prepNotes.parentElement.style.display = 'none';
    }

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

function populateGroceryTab() {
    const alwaysStockedContainer = document.getElementById('always-stocked-tab');
    const weeklyContainer = document.getElementById('weekly-addons-tab');
    
    if (!alwaysStockedContainer || !weeklyContainer) {
        console.error('Grocery tab containers not found in DOM');
        return;
    }

    // Always stocked items (only populate if empty)
    if (!alwaysStockedContainer.innerHTML) {
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
    }

    // Weekly add-ons (only populate if empty)
    if (!weeklyContainer.innerHTML) {
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
        populateGroceryTab
    };
}