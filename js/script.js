/**
 * @copyright codewithsadee 2023
 * @author Sadee <codewithsadee24@gmail.com>
 */

"use strict";

/**
 *light and dark mode
*/
// Selecciona el botón de cambio de tema
const /**{nodeElement} */ $themeBtn = document.querySelector("[data-theme-btn]");

// Selecciona el elemento HTML
const /**{nodeElement} */ $HTML = document.documentElement;

// Si ya hay un tema guardado, úsalo; si no, forzar dark como predeterminado
if (sessionStorage.getItem("theme")) {
  $HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
  $HTML.dataset.theme = "dark";
  sessionStorage.setItem("theme", "dark");
}


// Función para cambiar el tema
const changeTheme = () => {
    // Cambia el tema entre 'light' y 'dark'
    $HTML.dataset.theme = sessionStorage.getItem("theme") === "light" ? "dark" : "light";
    // Guarda el tema nuevo en sessionStorage
    sessionStorage.setItem("theme", $HTML.dataset.theme);
}

// Añade un evento 'click' al botón de cambio de tema
$themeBtn.addEventListener("click", changeTheme);


/**
 * TABS
 */

// Selecciona todos los botones de las pestañas
const /**{NodeList} */ $tabBtn = document.querySelectorAll("[data-tab-btn]");
// Selecciona el contenido de la primera pestaña activa inicialmente
let /**{NodeElement} */ lastActiveTab = document.querySelector("[data-tab-content].active");
// Selecciona el botón de la primera pestaña activa inicialmente
let /**{NodeElement} */ lastActiveTabBtn = document.querySelector("[data-tab-btn].active");

// Itera sobre todos los botones de las pestañas
$tabBtn.forEach(item => {
    item.addEventListener("click", function () {
        // Remueve la clase 'active' de la última pestaña y botón activos
        if (lastActiveTab) lastActiveTab.classList.remove("active");
        if (lastActiveTabBtn) lastActiveTabBtn.classList.remove("active");

        // Selecciona el contenido de la pestaña correspondiente al botón clicado
        const /**{NodeElement} */ $tabContent = document.querySelector(`[data-tab-content="${item.dataset.tabBtn}"]`);
        // Añade la clase 'active' al nuevo contenido de la pestaña y al botón clicado
        $tabContent.classList.add("active");
        this.classList.add("active");

        // Actualiza las referencias a la última pestaña y botón activos
        lastActiveTab = $tabContent;
        lastActiveTabBtn = this;
    });
});




