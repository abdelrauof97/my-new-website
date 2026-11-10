(function () {
  var header = document.querySelector("[data-header]");
  var toggle = document.querySelector("[data-nav-toggle]");
  var panel = document.querySelector("[data-nav-panel]");

  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-stuck", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function setOpen(open) {
    if (!toggle || !panel) return;
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.querySelector(".sr-only").textContent = open ? "Close menu" : "Open menu";
    panel.hidden = !open;
    document.body.classList.toggle("nav-open", open);
    header.classList.toggle("is-open", open);
    if (open) {
      var first = panel.querySelector("a");
      if (first) first.focus();
    } else {
      toggle.focus();
    }
  }

  if (toggle && panel) {
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
      }
    });
    panel.addEventListener("click", function (event) {
      if (event.target.closest("a")) setOpen(false);
    });
  }

  var interest = new URLSearchParams(window.location.search).get("interest");
  var service = document.getElementById("service");
  if (interest && service) {
    Array.prototype.forEach.call(service.options, function (option) {
      if (option.value === interest) service.value = interest;
    });
  }

  var form = document.querySelector("[data-static-form]");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var status = document.getElementById("form-status");
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    var honeypot = form.querySelector("[name='company_website_confirm']");
    if (honeypot && honeypot.value) return;

    var lines = [];
    var data = new FormData(form);
    data.forEach(function (value, key) {
      if (key === "company_website_confirm") return;
      lines.push(key + ": " + value);
    });
    var mail = form.getAttribute("data-mail");
    var subject = form.getAttribute("data-subject") || "Strategy consultation inquiry";
    if (status) {
      status.hidden = false;
      status.textContent = "Your email app should open with this inquiry. If nothing opens, write to " + mail + " directly.";
    }
    window.location.href = "mailto:" + mail + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(lines.join("\n"));
  });
})();
