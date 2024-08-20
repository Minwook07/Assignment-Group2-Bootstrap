function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }

  if (systemSettingDark.matches) {
    return "dark";
  }

  return "light";
}

/*
 * Utility function to update the button text and aria-label.
 */
function updateButton({ buttonEl, isDark }) {
  const newCta = isDark 
    ? "<i class='bi bi-sun-fill my-1 theme-icon-active fs-4 text-my-primary'></i>" 
    : "<i class='bi bi-moon-stars-fill fs-4 text-my-primary'></i>";

  buttonEl.setAttribute("aria-label", newCta);
  buttonEl.innerHTML = newCta;
}

/*
 * Utility function to update the theme setting on the HTML tag.
 */
function updateThemeOnHtmlEl({ theme }) {
  document.querySelector("html").setAttribute("data-theme", theme);
}

/*
 * On page load:
 */

/*
 * 1. Grab what we need from the DOM and system settings on page load.
 */
const buttons = document.querySelectorAll("[data-theme-toggle]");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

/*
 * 2. Work out the current site settings.
 */
let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });

/*
 * 3. Update the theme setting and button text according to current settings.
 */
buttons.forEach(button => {
  updateButton({ buttonEl: button, isDark: currentThemeSetting === "dark" });
});

/*
 * 4. Add event listeners to toggle the theme on all buttons.
 */
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const newTheme = currentThemeSetting === "dark" ? "light" : "dark";
  
    localStorage.setItem("theme", newTheme);
    buttons.forEach(btn => updateButton({ buttonEl: btn, isDark: newTheme === "dark" }));
    updateThemeOnHtmlEl({ theme: newTheme });
  
    currentThemeSetting = newTheme;
  });
});
