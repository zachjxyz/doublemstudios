document.addEventListener("DOMContentLoaded", function () {
  const footerContainer = document.getElementById("footer-container");

  const inlineStyles = `
      <style>
          .mil-light-soft {
              opacity: 1 !important;
              visibility: visible !important;
          }
          .mil-menu-list a {
              color: inherit !important;
          }
      </style>
  `;

  const footerStructure = {
    companyName: "Double M Studios",
    newsletterText: "Subscribe to Our Newsletter",
    newsletterScript:
      "https://cdn.jsdelivr.net/ghost/signup-form@~0.1/umd/signup-form.min.js",
    mainMenu: [
      { text: "Home", url: "/", active: true },
      { text: "Services", url: "services" },
      { text: "Contact", url: "contact" },
      {
        text: "Blog",
        url: "https://doublemstudios.com/blog",
      },
    ],
    legalMenu: [
      { text: "Privacy Policy", url: "legal" },
      { text: "Terms & Conditions", url: "legal" },
      { text: "Cookie Policy", url: "legal" },
    ],
    studioInfo: {
      hours: "Daily: 11am - 3am",
      address: "966 Hungerford Drive 19B, Rockville, MD 20850",
      phone: "+1 301 531 4315",
    },
    socialIcons: [
      {
        icon: "fab fa-instagram",
        url: "https://www.instagram.com/doublemstudios_",
      },
      {
        icon: "fab fa-youtube",
        url: "https://www.youtube.com/@doublemstudios_",
      },
      {
        icon: "fab fa-linkedin",
        url: "https://www.linkedin.com/company/double-m-studios",
      },
    ],
  };

  function createNewsletterScript() {
    const script = document.createElement("script");
    script.src = footerStructure.newsletterScript;
    script.dataset.buttonColor = "#F8C729";
    script.dataset.buttonTextColor = "#000000";
    script.dataset.site = "https://blog.doublemstudios.com/";
    script.async = true;
    return script;
  }

  function generateMenu(items) {
    return items
      .map(
        (item) => `
            <li class="mil-up${item.active ? " mil-active" : ""}">
                <a href="${item.url}"${item.target ? ` target="${item.target}"` : ""}>${item.text}</a>
            </li>
        `,
      )
      .join("");
  }

  function generateSocialIcons(icons) {
    return icons
      .map(
        (icon) => `
            <li><a href="${icon.url}" target="_blank" class="social-icon"> <i class="${icon.icon}"></i></a></li>
        `,
      )
      .join("");
  }

  const footerHTML = `
        <footer class="mil-dark-bg">
            <div class="mi-invert-fix">
                <div class="container mil-p-120-60">
                    <div class="row justify-content-between">
                        <div class="col-md-4 col-lg-4 mil-mb-60">
                            <div class="mil-muted mil-logo mil-up mil-mb-30">${footerStructure.companyName}</div>
                            <div class="mil-up mil-light-soft mil-mb-30">${footerStructure.newsletterText}</div>
                            <div id="newsletter-container" style="min-height: 58px; max-width: 440px;width: 100%;"></div>
                        </div>
                        <div class="col-md-7 col-lg-6">
                            <div class="row justify-content-end">
                                <div class="col-md-6 col-lg-7">
                                    <nav class="mil-footer-menu mil-mb-60">
                                        <ul>
                                            ${generateMenu(footerStructure.mainMenu)}
                                        </ul>
                                    </nav>
                                </div>
                                <div class="col-md-6 col-lg-5">
                                <h6 class="mil-muted mil-mb-30">Legal Stuff</h6>
                                <ul class="mil-menu-list">
                                    <li><a href="legal" class="mil-light-soft">Privacy Policy</a></li>
                                    <li><a href="legal" class="mil-light-soft">Terms & Conditions</a></li>
                                    <li><a href="legal" class="mil-light-soft">Cookie Policy</a></li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-between flex-sm-row-reverse">
                        <div class="col-md-7 col-lg-6">
                            <div class="row justify-content-between">
                                <div class="col-md-6 col-lg-5 mil-mb-60">
                                    <h6 class="mil-muted mil-up mil-mb-30">Studio Info</h6>
                                    <p class="mil-light-soft mil-up">${footerStructure.studioInfo.hours}</p>
                                    <br>
                                    <p class="mil-light-soft mil-up">${footerStructure.studioInfo.address}</p>
                                    <br>
                                    <p class="mil-light-soft mil-up">${footerStructure.studioInfo.phone}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-lg-6 mil-mb-60">
                            <div class="mil-vert-between">
                                <div class="mil-mb-30">
                                    <ul class="mil-social-icons mil-up">
                                        ${generateSocialIcons(footerStructure.socialIcons)}
                                    </ul>
                                </div>
                                <p class="mil-light-soft mil-up copyright">
                                    <span>${footerStructure.companyName} &copy; ${new Date().getFullYear()}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    `;

  footerContainer.innerHTML = footerHTML;

  // Append the newsletter script
  document
    .getElementById("newsletter-container")
    .appendChild(createNewsletterScript());
});
