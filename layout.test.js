/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

describe('Layout Tests', () => {
    beforeEach(() => {
        // Read the HTML file
        const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
        
        // Set up jsdom
        document.body.innerHTML = html.match(/<body[^>]*>([\s\S]*?)<\/body>/)[1];
        
        // Execute the JavaScript from the HTML
        eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);
    });

    test('should create main grid container', () => {
        const mainGrid = document.getElementById('main-grid');
        expect(mainGrid).toBeTruthy();
        expect(mainGrid.className).toBe('main-grid');
    });

    test('should render 8 columns (1 empty + 7 days) in header row', () => {
        const mainGrid = document.getElementById('main-grid');
        const children = Array.from(mainGrid.children);
        
        // First 8 elements: empty cell + 7 day headers
        const headerElements = children.slice(0, 8);
        expect(headerElements).toHaveLength(8);
        
        // First should be empty
        expect(headerElements[0].textContent).toBe('');
        
        // Next 7 should be day headers
        const dayHeaders = headerElements.slice(1);
        const expectedDays = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
        
        dayHeaders.forEach((header, index) => {
            expect(header.className).toBe('day-header');
            expect(header.textContent).toBe(expectedDays[index]);
        });
    });

    test('should render 4 week rows with 8 elements each', () => {
        const mainGrid = document.getElementById('main-grid');
        const children = Array.from(mainGrid.children);
        
        // Should have header row (8) + 4 week rows (8 each) = 40 total
        expect(children).toHaveLength(40);
        
        // Check each week row
        for (let week = 1; week <= 4; week++) {
            const weekRowStart = 8 + (week - 1) * 8; // Skip header row
            const weekElements = children.slice(weekRowStart, weekRowStart + 8);
            
            // First element should be week header
            expect(weekElements[0].className).toBe('week-header');
            expect(weekElements[0].textContent).toBe(`Week ${week}`);
            
            // Next 7 should be day cards
            const dayCards = weekElements.slice(1);
            dayCards.forEach(card => {
                expect(card.className).toMatch(/day-card/);
            });
        }
    });

    test('should mark cook days with cook-day class', () => {
        const mainGrid = document.getElementById('main-grid');
        const dayCards = Array.from(mainGrid.children).filter(el => 
            el.className.includes('day-card')
        );
        
        // Should have 28 day cards total (4 weeks × 7 days)
        expect(dayCards).toHaveLength(28);
        
        // Check cook days for each week (Saturday=0, Tuesday=3 in 0-indexed days)
        for (let week = 0; week < 4; week++) {
            const weekCards = dayCards.slice(week * 7, (week + 1) * 7);
            
            // Saturday (index 0) and Tuesday (index 3) should have cook-day class
            expect(weekCards[0].className).toMatch(/cook-day/);
            expect(weekCards[3].className).toMatch(/cook-day/);
            
            // Other days should not have cook-day class
            [1, 2, 4, 5, 6].forEach(dayIndex => {
                expect(weekCards[dayIndex].className).not.toMatch(/cook-day/);
            });
        }
    });

    test('should display cook indicators on cook days', () => {
        const mainGrid = document.getElementById('main-grid');
        const cookDayCards = Array.from(mainGrid.children).filter(el => 
            el.className.includes('cook-day')
        );
        
        // Should have 8 cook day cards (2 per week × 4 weeks)
        expect(cookDayCards).toHaveLength(8);
        
        // Each cook day should have a cook indicator
        cookDayCards.forEach(card => {
            const cookIndicator = card.querySelector('.cook-indicator');
            expect(cookIndicator).toBeTruthy();
            expect(cookIndicator.textContent).toBe('🧑‍🍳');
        });
    });

    test('should display meals with proper abbreviations', () => {
        const mainGrid = document.getElementById('main-grid');
        const mealItems = Array.from(mainGrid.querySelectorAll('.meal-item'));
        
        // Should have meal items
        expect(mealItems.length).toBeGreaterThan(0);
        
        // Check lunch items start with "L:"
        const lunchItems = mealItems.filter(item => item.className.includes('lunch'));
        lunchItems.forEach(item => {
            expect(item.textContent).toMatch(/^L:/);
        });
        
        // Check dinner items start with "D:"
        const dinnerItems = mealItems.filter(item => item.className.includes('dinner'));
        dinnerItems.forEach(item => {
            expect(item.textContent).toMatch(/^D:/);
        });
    });

    test('should have responsive CSS classes', () => {
        const mainGrid = document.getElementById('main-grid');
        expect(mainGrid.className).toBe('main-grid');
        
        const weekHeaders = Array.from(document.querySelectorAll('.week-header'));
        expect(weekHeaders).toHaveLength(4);
        
        const dayHeaders = Array.from(document.querySelectorAll('.day-header'));
        expect(dayHeaders).toHaveLength(7);
    });

    test('should not have week selector buttons (removed in grid layout)', () => {
        const weekButtons = Array.from(document.querySelectorAll('.week-btn'));
        expect(weekButtons).toHaveLength(0);
        
        const weekSelector = document.querySelector('.week-selector');
        expect(weekSelector).toBeFalsy();
    });
});