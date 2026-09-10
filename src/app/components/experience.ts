// First professional day of work — used to auto-increment the "years of
// experience" stat shown on the site as each anniversary passes.
export const CAREER_START_DATE = new Date(2023, 10, 1); // November 2023

export function getYearsOfExperience(): number {
    const now = new Date();
    let years = now.getFullYear() - CAREER_START_DATE.getFullYear();
    const monthDiff = now.getMonth() - CAREER_START_DATE.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < CAREER_START_DATE.getDate())) {
        years -= 1;
    }
    return Math.max(years, 0);
}
