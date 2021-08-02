 // function to set a given theme/color-scheme
 function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-light');
  } else {
      setTheme('theme-dark');
  }
}

// Immediately invoked function to set the theme on initial load
(function () {
  if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-dark');
      document.getElementById('slider').checked = false;
  } else {
      setTheme('theme-light');
    document.getElementById('slider').checked = true;
  }
})();


// Wait for document to load
document.addEventListener("DOMContentLoaded", function(event) {
  document.documentElement.setAttribute("data-theme", "light");      
  // Get our button switcher
  var themeSwitcher = document.getElementById("slider");      
  // When our button gets clicked
  themeSwitcher.onclick = function() {
  // Get the current selected theme, on the first run
  // it should be `light`
      var currentTheme = document.documentElement.getAttribute("data-theme");      
      // Switch between `dark` and `light`
      var switchToTheme = currentTheme === "dark" ? "light" : "dark"      
      // Set our currenet theme to the new one
      document.documentElement.setAttribute("data-theme", switchToTheme);
  }
});        

