# Meal Planning Calendar - Development Instructions

## Project Overview
Interactive web-based meal planning calendar displaying a 4-week rotating meal schedule with cook day indicators, meal categorization, and comprehensive testing.

## Core Requirements
- **Visual Design**: Soft, eye-friendly color palette using CSS custom properties
- **Layout**: 4-week grid display (NOT tabs) showing all weeks simultaneously
- **Technology**: Vanilla HTML/CSS/JavaScript (NO frameworks)
- **Testing**: Comprehensive Jest test suite with jsdom for DOM testing
- **Code Organization**: External JavaScript files for testability

## File Structure & Purpose

### Core Files
- `index.html` - Main application with soft styling and grid layout
- `meal-planner.js` - All JavaScript logic, data, and DOM manipulation
- `meal-planner.test.js` - Unit tests for data functions (25 tests)
- `layout.test.js` - DOM/layout tests with jsdom (9 tests)
- `package.json` - Jest configuration with jsdom environment

### Documentation
- `docs/About.md` - 4-week meal plan overview
- `docs/Summary.md` - Meal rotation table
- `docs/Meal Calendar.md` - Daily meal calendar
- `docs/Grocery List.md` - Shopping list structure

## Critical Implementation Rules

### 1. Layout Structure
```
Grid: 8 columns × 5 rows
- Column 1: Week labels (Week 1-4)
- Columns 2-8: Days (Saturday through Friday)
- Row 1: Day headers with cook indicators
- Rows 2-5: Week data rows
```

### 2. Cook Day Implementation
- Cook days: Saturday (index 0) and Tuesday (index 3)
- Display in headers as: "🧑‍🍳 Saturday", "🧑‍🍳 Tuesday"
- Cook day cards get `cook-day` CSS class
- Cook property in data must be `true` for cook days, `false` otherwise

### 3. Meal Data Format
```javascript
mealData = {
    1: {
        "Saturday": { lunch: "🍗 Chicken", dinner: "🍲 Dal", cook: true }
    }
}
```
- Emojis MUST prefix meal names (e.g., "🍗 Chicken", NOT "Chicken 🍗")
- Use "—" for no lunch on Tuesday-Friday
- All dinners must have values (never "—")

### 4. Visual Design Standards
- CSS custom properties for consistent theming
- Soft color palette: `--bg-primary: #faf9f7`, `--accent-green: #c6f6d5`, etc.
- Hover effects with subtle transforms and shadows
- Mobile responsive with single column on <768px

### 5. Testing Requirements
- Run `npm test` - ALL 34 tests must pass before any commit
- Test data structure integrity (4 weeks × 7 days)
- Test DOM rendering and layout structure
- Test cook day patterns and meal consistency
- Test validation functions

### 6. Code Organization Rules
- NO JavaScript code in HTML files (all in meal-planner.js)
- Export functions for Node.js testing with proper module checks
- Initialize DOM rendering with readyState checks
- Use semantic HTML with proper accessibility

## Development Workflow

### Before Making Changes
1. Read existing code to understand current implementation
2. Run `npm test` to ensure all tests pass
3. Use TodoWrite tool to plan multi-step changes

### Making Changes
1. Implement changes in external JS files (never inline HTML)
2. Update tests to match new functionality
3. Verify all 34 tests pass
4. Test visual appearance in browser

### Before Committing
1. Run `npm test` - ensure ALL tests pass
2. Check that grid displays properly (40 elements total)
3. Verify cook indicators appear in headers only
4. Confirm emojis prefix meal names correctly
5. Validate legend appears below grid

## Common Pitfalls to Avoid
- Never put JavaScript code inside HTML files
- Never use "Chicken 🍗" format - emojis must be prefixes
- Never use tabs instead of grid layout
- Never put cook indicators in individual cards
- Never skip running tests before commits
- Never create new files without explicit user request

## Testing Commands
```bash
npm test                    # Run all tests
npm test meal-planner      # Run function tests only
npm test layout            # Run DOM tests only
```

## Pending Features (DO NOT implement unless requested)
- Meal details popup/panel functionality
- Grocery list view integration

## Emergency Recovery
If tests fail after changes:
1. Check emoji formatting in meal data (must be prefixes)
2. Verify cook day boolean values (Saturday/Tuesday = true)
3. Confirm grid structure (8×5 = 40 total elements)
4. Check day header cook indicators format
5. Validate meal data structure (4 weeks, 7 days each)

## User Interaction History
- Requested "almost instant turnaround time" - use vanilla JS
- Requested "not harsh on the eyes" - soft color palette implemented
- Specifically requested grid over tabs: "make it a grid with 4 rows for the 4 weeks"
- Requested cook indicators in headers: "move the cook day symbol before the Day at the top"
- Requested emoji prefixes: "make the emojis prefix the meal name"
- Emphasized testing importance throughout development