document.addEventListener("DOMContentLoaded", () => {
  const dropdownItems = document.querySelectorAll(
    "#navbarSubDropdown.dropdown-item"
  );

  dropdownItems.forEach((item) => {
    item.addEventListener("click", handleClickEvent);
  });

  function handleClickEvent(event) {
    event.preventDefault();
    event.stopPropagation();

    // Hide all currently shown submenus
    const allShownSubmenus = document.querySelectorAll(
      "ul.sub-menu.dropdown-menu.show"
    );
    allShownSubmenus.forEach((submenu) => submenu.classList.remove("show"));

    // Hide all currently shown dropdown items
    const allShownDropdownItems = document.querySelectorAll(
      "#navbarSubDropdown.dropdown-item.show"
    );
    allShownDropdownItems.forEach((dropdownItem) =>
      dropdownItem.classList.remove("show")
    );

    // Show the submenu of the clicked item
    this.classList.add("show");
    const clickedSubMenu = event.currentTarget.nextElementSibling;
    if (clickedSubMenu && clickedSubMenu.matches("ul.sub-menu.dropdown-menu")) {
      clickedSubMenu.classList.add("show");
    }
  }
});
