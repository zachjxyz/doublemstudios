document.addEventListener("DOMContentLoaded", function () {
  const navContainer = document.getElementById("nav-container");

  const navStructure = {
    logo: "DMS",
    mainMenu: [
      {
        text: "Home",
        url: "/",
        active: true,
      },
      {
        text: "Services",
        url: "#.",
        children: [
          {
            text: "Book A Recording Session",
            url: "https://doublemstudios.as.me/",
            target: "_blank",
          },
          {
            text: "Become a Member",
            url: "https://app.acuityscheduling.com/catalog.php?owner=22352524&action=addCart&clear=1&id=1663395",
            target: "_blank",
          },
          {
            text: "Get Your Songs Mixed",
            url: "https://doublemstudios.as.me/?appointmentType=category:Mixes",
            target: "_blank",
          },
          {
            text: "Book A Private Event",
            url: "https://doublemstudios.as.me/private-events",
          },
        ],
      },
      {
        text: "Community",
        url: "#.",
        children: [
          {
            text: "Join Our Discord",
            url: "https://discord.gg/sx43dbus3x",
            target: "_blank",
          },
          { text: "Meet Our Team", url: "team" },
          {
            text: "Read Our Blog",
            url: "https://doublemstudios.com/blog",
          },
        ],
      },
      {
        text: "Studio Info",
        url: "#.",
        children: [
          {
            text: "Contact Us",
            url: "contact",
            target: "_blank",
            class: "mil-light-soft",
          },
          {
            text: "Tour The Space",
            url: "https://cal.com/doublemstudios/studio-walkthrough",
            target: "_blank",
            class: "mil-light-soft",
          },
          {
            text: "Come to an Event",
            url: "https://www.eventbrite.com/o/double-m-studios-59359567573",
            target: "_blank",
            class: "mil-light-soft",
          },
          {
            text: "Follow Our Instagram",
            url: "https://www.instagram.com/doublemstudios_",
            target: "_blank",
            class: "mil-light-soft",
          },
        ],
      },
      {
        text: "Login",
        url: "#.",
        children: [
          { text: "Login", url: "#" },
          { text: "Sign-up", url: "#" },
        ],
      },
    ],
    initiatives: [
      { text: "Community Activations", url: "#" },
      { text: "Omega Recording Studios", url: "#" },
      { text: "Twin Valley Distillers", url: "#" },
      { text: "Montgomery County Public Schools", url: "yea" },
    ],
    legal: [
      { text: "Privacy Policy", url: "legal" },
      { text: "Terms & Conditions", url: "legal" },
      { text: "Cookie Policy", url: "legal" },
    ],
    studioInfo: {
      hours: "Daily: 11am - 3am",
      address: "966 Hungerford Drive 19B, Rockville, MD 20850",
      phone: "+1 301 531 4315",
    },
  };

  function generateMainMenu(items) {
    return items
      .map(
        (item) => `
            <li class="mil-has-children${item.active ? " mil-active" : ""}">
                <a href="${item.url}">${item.text}</a>
                ${
                  item.children
                    ? `
                    <ul>
                        ${item.children
                          .map(
                            (child) => `
                            <li><a href="${child.url}"${child.target ? ` target="${child.target}"` : ""}${child.class ? ` class="${child.class}"` : ""}>${child.text}</a></li>
                        `,
                          )
                          .join("")}
                    </ul>
                `
                    : ""
                }
            </li>
        `,
      )
      .join("");
  }

  function generateMenuList(items) {
    return items
      .map(
        (item) => `
            <li><a href="${item.url}" class="mil-light-soft">${item.text}</a></li>
        `,
      )
      .join("");
  }

  const navHTML = `
        <div class="mil-menu-frame">
            <div class="mil-frame-top">
                <a href="/" class="mil-logo">${navStructure.logo}</a>
                <div class="mil-menu-btn">
                    <span></span>
                </div>
            </div>
            <div class="container">
                <div class="mil-menu-content">
                    <div class="row">
                        <div class="col-xl-5">
                            <nav class="mil-main-menu" id="swupMenu">
                                <ul>
                                    ${generateMainMenu(navStructure.mainMenu)}
                                </ul>
                            </nav>
                        </div>
                        <div class="col-xl-7">
                            <div class="mil-menu-right-frame">
                                <div class="mil-animation-in">
                                    <div class="mil-animation-frame">
                                        <div class="mil-animation mil-position-1 mil-scale" data-value-1="2" data-value-2="2"></div>
                                    </div>
                                </div>
                                <div class="mil-menu-right">
                                    <div class="row">
                                        <div class="col-lg-8 mil-mb-60">
                                            <h6 class="mil-muted mil-mb-30">Studio Initiatives</h6>
                                            <ul class="mil-menu-list">
                                                ${generateMenuList(navStructure.initiatives)}
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="mil-divider mil-mb-60"></div>
                                    <div class="row justify-content-between">
                                        <div class="col-lg-4 mil-mb-60">
                                            <h6 class="mil-muted mil-mb-30">Legal Stuff</h6>
                                            <ul class="mil-menu-list">
                                                ${generateMenuList(navStructure.legal)}
                                            </ul>
                                        </div>
                                        <div class="col-lg-4 mil-mb-60">
                                            <h6 class="mil-muted mil-mb-30">Studio Info</h6>
                                            <p class="mil-light-soft mil-up">${navStructure.studioInfo.hours}</p>
                                            <br>
                                            <p class="mil-light-soft mil-up">${navStructure.studioInfo.address}</p>
                                            <br>
                                            <p class="mil-light-soft mil-up">${navStructure.studioInfo.phone}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

  navContainer.innerHTML = navHTML;
});
