// Mobile Navigation Setup
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.header-container');
  const nav = document.querySelector('nav[aria-label="Main Navigation"]');
  if (!header || !nav) return;

  // Inject hamburger button
  const toggle = document.createElement('button');
  toggle.className = 'nav-toggle';
  toggle.setAttribute('aria-label', 'Toggle navigation');
  toggle.innerHTML = '☰';
  header.appendChild(toggle);

  const navUl = nav.querySelector('ul');

  toggle.addEventListener('click', function(e) {
    e.stopPropagation();
    navUl.classList.toggle('nav-open');
    toggle.innerHTML = navUl.classList.contains('nav-open') ? '✕' : '☰';
  });

  // Handle dropdown taps on mobile
  const dropdowns = nav.querySelectorAll('.dropdown > a, .dropdown > .dropbtn');
  dropdowns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const parent = this.parentElement;
        parent.classList.toggle('dropdown-open');
      }
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      navUl.classList.remove('nav-open');
      toggle.innerHTML = '☰';
      nav.querySelectorAll('.dropdown-open').forEach(function(d) {
        d.classList.remove('dropdown-open');
      });
    }
  });
});

// Fact-Check Tooltip Auto-Wrapper
document.addEventListener('DOMContentLoaded', function() {
  // Auto-citations are applied only to precise bill names / roll calls so that a
  // tooltip never attaches the wrong source to a generic word like "cuts".
  // Pages can also add explicit <span class="fact-check" data-citation="..."> markup.
  var factCheckRules = [
    {
      patterns: [/H\.\s?J\.\s?Res\.\s?140/g],
      citation: 'H.J. Res. 140 (Stauber): CRA resolution overturning the BWCA-area mineral withdrawal. House passed Jan. 21, 2026; Senate 50-49 Apr. 16; signed Apr. 27, 2026.'
    },
    {
      patterns: [/One Big Beautiful Bill/g, /Big Beautiful Bill/g],
      citation: 'H.R. 1 (119th Congress). Stauber voted YEA: Roll Call 145 (May 22, 2025, 215-214) and Roll Call 190 (July 3, 2025, 218-214).'
    },
    {
      patterns: [/H\.R\.\s?1834/g],
      citation: 'H.R. 1834: 3-year extension of enhanced ACA premium tax credits. Passed 230-196 on Jan. 8, 2026 (Roll Call 11). Stauber: NAY.'
    },
    {
      patterns: [/H\.R\.\s?3967/g],
      citation: 'H.R. 3967 (PACT Act, first House version), Roll Call 57, Mar. 3, 2022: Stauber NAY. He voted YEA on the final version (S. 3373), Roll Call 309, July 13, 2022.'
    },
    {
      patterns: [/H\.\s?J\.\s?Res\.\s?72/g],
      citation: 'H.J. Res. 72: terminate the Canada tariff emergency. Passed 219-211 on Feb. 11, 2026 (Roll Call 65). Stauber: NAY.'
    }
  ];

  // Skip these elements and their children
  var skipTags = {A: 1, NAV: 1, SCRIPT: 1, STYLE: 1, SELECT: 1, OPTION: 1, BUTTON: 1, INPUT: 1, TEXTAREA: 1, LABEL: 1, IMG: 1};
  var skipClasses = ['fact-check', 'nav-toggle', 'logo'];

  function shouldSkip(node) {
    var el = node.nodeType === 3 ? node.parentElement : node;
    while (el && el !== document.body) {
      if (skipTags[el.tagName]) return true;
      if (el.className && typeof el.className === 'string') {
        for (var i = 0; i < skipClasses.length; i++) {
          if (el.className.indexOf(skipClasses[i]) !== -1) return true;
        }
      }
      // Skip if inside header nav or footer nav
      if (el.tagName === 'HEADER' || el.tagName === 'FOOTER') return true;
      el = el.parentElement;
    }
    return false;
  }

  function wrapTextNodes(root) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
    var textNodes = [];
    var node;
    while (node = walker.nextNode()) {
      if (node.textContent.trim() && !shouldSkip(node)) {
        textNodes.push(node);
      }
    }

    textNodes.forEach(function(textNode) {
      var text = textNode.textContent;
      var parent = textNode.parentElement;
      // Don't double-wrap
      if (parent && parent.classList && parent.classList.contains('fact-check')) return;

      var replaced = false;
      var html = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

      for (var r = 0; r < factCheckRules.length; r++) {
        var rule = factCheckRules[r];
        for (var p = 0; p < rule.patterns.length; p++) {
          var pattern = new RegExp(rule.patterns[p].source, rule.patterns[p].flags);
          if (pattern.test(html)) {
            html = html.replace(pattern, function(match) {
              replaced = true;
              return '<span class="fact-check" data-citation="' + rule.citation + '">' + match + '</span>';
            });
          }
        }
      }

      if (replaced) {
        var span = document.createElement('span');
        span.innerHTML = html;
        parent.replaceChild(span, textNode);
      }
    });
  }

  // Run on main content areas only
  var main = document.querySelector('main') || document.querySelector('.pr-container') || document.querySelector('.pr-body');
  if (main) {
    wrapTextNodes(main);
  }

  // Mobile: tap to show tooltip
  document.addEventListener('click', function(e) {
    // Close any open tooltips
    document.querySelectorAll('.fact-check.tooltip-active').forEach(function(el) {
      el.classList.remove('tooltip-active');
    });
    // If tapped on a fact-check span, toggle it
    var fc = e.target.closest('.fact-check');
    if (fc) {
      e.preventDefault();
      fc.classList.add('tooltip-active');
    }
  });
});

// Run setup after DOM is fully loaded
document.addEventListener('DOMContentLoaded', setupContactForm);

// Also try on window load as a fallback
window.addEventListener('load', setupContactForm);// New property-specific pop-ups for BWCA listing
function showMiningAlert() {
  alert("FOR SALE: Exclusive to multinational mining conglomerates only!");
}
function showMineTourAlert() {
  alert("Tour scheduled! Please bring your hard hat and disregard any strange water colors.");
}

// [Existing script content below unchanged]
function scheduleVisit() {
  alert("Your visit has been scheduled. We hope you love cardboard!");
}

// Pop-up for BUY NOW button on other listing pages
function showBillionaireAlert() {
  alert("FOR SALE - TO BILLIONAIRES ONLY");
}

// // Timed homepage pop-up (unchanged)
// window.addEventListener("load", () => {
//   setTimeout(() => {
//     alert("Psst... Looking to buy a country? Stay tuned - everything is for sale!");
//   }, 8000);
// });

// Pop-up for "Buy Now" buttons on featured listings (unchanged)
function showPurchaseAlert() {
  alert("Sorry! This sale is limited to hedge funds and campaign donors.");
}

// Pop-up for "Browse Listings" buttons in categories (unchanged)
function showPermissionAlert() {
  alert("Public ownership is no longer an option. Please contact your nearest billionaire for permission.");
}

// Carousel Script for Before/After images (unchanged)
const slides = document.querySelectorAll(".carousel-container img");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentSlide = 0;
if (slides.length > 0) {
  slides[currentSlide].classList.add("active");
}
function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}
if (prevBtn && nextBtn) {
  prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    showSlide(currentSlide);
  });
  nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    showSlide(currentSlide);
  });
}

// Comprehensive topic message templates
// Constituent message templates (2026). Plain-language letters with sourced facts; see each listing page for citations.
const messageTemplates = {
  'aca': `I'm writing about health insurance costs. The enhanced premium tax credits expired on December 31, 2025, and about 20,500 people in our district buy coverage on MNsure. On January 8, 2026, you voted against H.R. 1834, the bipartisan three-year extension that passed the House 230-196.

For many of your constituents, especially older, self-employed and rural Minnesotans, premiums have more than doubled. Please explain your vote, and support restoring the credits.`,

  'fuel': `I'm writing about heating and fuel costs this winter. Minnesota diesel hit a record $6.18 a gallon in September, and heating oil prices are up about 52% over the past year. Many households in our district heat with propane or fuel oil.

On September 15, 2026, you voted against H.Con.Res. 93, the war powers resolution on the Iran conflict, which CBO estimates is costing about $38 billion over six months. Please tell me what you are doing to bring energy costs down, and protect LIHEAP heating assistance.`,

  'property-tax': `I'm writing about property taxes. The law you voted for in 2025 shifts SNAP administrative costs to states and counties starting October 1, 2026. St. Louis County's preliminary 2027 levy is up 6.25%, and county leaders say federal cost shifts are part of the reason.

Please support restoring federal funding so counties aren't forced to raise property taxes or cut services.`,

  'economy': `I'm writing about tariffs and the border economy. The Port of Duluth-Superior had its lowest tonnage since 1938 in 2025, and Minnesota exports fell. In February 2026, the Supreme Court struck down the emergency tariffs; days earlier, you voted against H.J.Res. 72 to end the Canada tariff emergency.

Please stand up for Minnesota exporters, border businesses and the port.`,

  'snap': `I'm writing about food assistance. The 2025 reconciliation law you voted for cut SNAP by about $186 billion, extended work requirements to adults up to age 64, removed exemptions for veterans and others, and shifts costs to Minnesota and its counties starting October 1, 2026.

Please support restoring SNAP funding and the exemptions for veterans, former foster youth and people experiencing homelessness.`,

  'medicaid': `I'm writing about Medicaid and rural hospitals. Minnesota's Department of Human Services expects about 140,000 Minnesotans to lose Medicaid coverage starting in 2027 under the reconciliation law you voted for, and the Minnesota Hospital Association projects major revenue losses for hospitals.

Please explain how our district's hospitals and clinics will stay open, and support reversing these cuts.`,

  'ssa': `I'm writing about Social Security. About 197,000 people in our district receive benefits. The trustees now project the retirement trust fund will be depleted in 2032, with an automatic benefit cut of roughly 22% unless Congress acts, and Minnesota's Social Security offices have lost staff.

Please tell me your plan to protect full benefits and restore customer service.`,

  'veterans': `I'm writing about veterans' care. Our district is home to more than 44,000 veterans. The VA has cut tens of thousands of positions, the VA Inspector General found 130 severe staffing shortages at the Minneapolis VA, and the 2025 reconciliation law removed veterans' exemption from SNAP work requirements.

Please support restoring VA staffing and the SNAP exemption for veterans.`,

  'boundary-waters': `I'm writing about the Boundary Waters. H.J.Res. 140, which you authored, repealed the 20-year mineral withdrawal upstream of the Boundary Waters and was signed on April 27, 2026. Polling shows most Minnesotans oppose copper-nickel mining near the Boundary Waters, and about 675,000 public comments were submitted during the Forest Service review.

Please support permanent protection for the Boundary Waters watershed.`,

  'superior-watershed': `I'm writing about the NewRange (formerly PolyMet) copper-nickel mine in the St. Louis River watershed. Its wetlands permit was revoked in 2023 because it could not ensure compliance with the Fond du Lac Band's water-quality standards, and the company has applied again. You also voted for the PERMIT Act, which would narrow state and tribal Clean Water Act certifications.

Please support a full, science-based review and strong protections for Lake Superior.`,

  'national-forests': `I'm writing about the Superior and Chippewa National Forests. The USDA has proposed rescinding the Roadless Rule, which would affect about 62,000 acres in Minnesota, and the Superior National Forest has lost about 100 staff.

Please oppose the Roadless Rule rescission and support restoring Forest Service staffing.`,

  'federal': `I'm writing about federal cuts in our district, including the EPA's Duluth research lab, national park and forest staff, Social Security offices, and public broadcasting, which you voted to rescind.

Please support restoring these services, which northern Minnesota depends on.`,

  'town-hall': `I'm asking you to hold in-person, public town hall meetings in our district before the election. Telephone town halls are not a substitute for meeting constituents face to face and answering unscreened questions.

Please announce dates and locations.`,

  'blatnik': `I'm glad the Blatnik Bridge replacement is underway. The $1.06 billion federal grant came from the 2021 infrastructure law, which you voted against. Please be straightforward with constituents about where that money came from, and support continued infrastructure investment in our district.`,

  'labor': `I'm writing about workers' rights. As a former union local president, you know what collective bargaining means for working families. Please support the PRO Act and protect federal employees' bargaining rights.`,

  'epstein': `I'm writing about the Epstein files. The Justice Department is still withholding a large share of the records Congress required it to release. Please use your oversight authority to demand full compliance with the Epstein Files Transparency Act.`,

  'civilian-safety': `I'm writing about federal immigration enforcement in Minnesota. Renee Good and Alex Pretti, both U.S. citizens, were killed by federal agents in Minneapolis in January 2026. You said "a full investigation will ensue," but the Justice Department declined to investigate Ms. Good's death and the FBI refused to share evidence with Minnesota investigators.

Please support requiring body cameras, visible identification and judicial warrants for home entries, and independent investigations of shootings by federal agents.`,

  'voting-rights': `I'm writing about H.R. 7320, which you introduced. It would withhold federal election-security funding from Minnesota until the Secretary of State turns over records of same-day registrations and the votes of those voters. Minnesota has one of the highest voter turnout rates in the nation, and a federal judge dismissed the Justice Department's lawsuit for our voter rolls.

Please withdraw H.R. 7320 and support Minnesota's election system.`,

  'pardons': `I'm writing about the January 6 pardons. In January 2021 you said everyone who assaulted a police officer at the Capitol should be held accountable, with "no charges dropped." About 1,500 people were later pardoned, including people who pleaded guilty to assaulting police.

As a former police officer, will you publicly state your position on those pardons?`,

  'other': `I'm writing as your constituent about an issue that matters to me and my family.`
};

// Corresponding subject lines for each topic
const topicSubjects = {
  'aca': 'Health insurance premiums: restore the ACA tax credits',
  'fuel': 'Heating and fuel costs this winter',
  'property-tax': 'Federal cost shifts and our property taxes',
  'economy': 'Tariffs and the border economy',
  'snap': 'Restore SNAP funding and exemptions',
  'medicaid': 'Medicaid cuts and rural hospitals',
  'ssa': 'Protect Social Security benefits and service',
  'veterans': 'VA staffing and veterans’ benefits',
  'boundary-waters': 'Permanent protection for the Boundary Waters',
  'superior-watershed': 'NewRange mine and Lake Superior',
  'national-forests': 'Oppose the Roadless Rule rescission',
  'federal': 'Federal cuts in northern Minnesota',
  'town-hall': 'Request for in-person town halls',
  'blatnik': 'Blatnik Bridge and infrastructure funding',
  'labor': 'Workers’ rights and the PRO Act',
  'epstein': 'Full release of the Epstein files',
  'civilian-safety': 'Accountability for federal agents in Minnesota',
  'voting-rights': 'Withdraw H.R. 7320',
  'pardons': 'Your position on the January 6 pardons',
  'other': 'Message from a constituent'
};

// Setup contact form functionality
function setupContactForm() {
  // Get DOM elements
  const topicSelect = document.getElementById('topic');
  const messageField = document.getElementById('message');
  const nameField = document.getElementById('name');
  const emailField = document.getElementById('email') || document.getElementById('city');
  const previewButton = document.getElementById('preview-button');
  const modal = document.getElementById('emailModal');
  const closeBtn = document.querySelector('.close');
  const emailSubject = document.getElementById('emailSubject');
  const emailBody = document.getElementById('emailBody');
  const modalButtons = document.getElementById('modalButtons');
  const deviceMessage = document.getElementById('deviceMessage');
  const helpText = document.getElementById('helpText');
  const copyDetailsBtn = document.getElementById('copyDetailsBtn');
  const successMessage = document.getElementById('success-message');
  
  // Check if we're on the contact page
  if (!previewButton) {
    return; // Not on contact page, exit function
  }
  
  let currentSubject = '';
  let currentBody = '';
  let fullEmailText = '';
  
  // Check if device is mobile
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
  // Update message template when topic changes
  if (topicSelect && messageField) {
    topicSelect.addEventListener('change', function() {
      const topic = this.value;
      if (topic && messageTemplates[topic] && messageField.value === "") {
        messageField.value = messageTemplates[topic];
      }
    });
  }
  
  // Show email modal when button is clicked
  if (previewButton) {
    previewButton.addEventListener('click', function() {
      // Form validation
      if (!nameField.value || !topicSelect.value || !messageField.value) {
        alert("Please add your name, a topic and a message before continuing.");
        return;
      }
      
      // Format subject line
      currentSubject = topicSubjects[topicSelect.value] || "Message from Constituent";
      emailSubject.textContent = currentSubject;
      
      // Format email body
      currentBody = `Dear Representative Stauber,

${messageField.value}

Sincerely,
${nameField.value}${emailField && emailField.value ? '\n' + emailField.value : ''}`;
      
      emailBody.textContent = currentBody;
      
      // Prepare full text for copying
      fullEmailText = `Subject: ${currentSubject}

${currentBody}`;

      // Clear previous buttons
      modalButtons.innerHTML = '';
      deviceMessage.textContent = "Rep. Stauber takes messages through his official contact form. Copy your message, then paste it there.";

      const formBtn = document.createElement('button');
      formBtn.className = 'modal-btn primary-btn';
      formBtn.innerHTML = '<i class="fas fa-copy"></i> Copy &amp; open his contact form';
      formBtn.addEventListener('click', function() {
        navigator.clipboard.writeText(fullEmailText).catch(function() {});
        window.open('https://stauber.house.gov/contact', '_blank', 'noopener');
        successMessage.style.display = "block";
        setTimeout(function() { successMessage.style.display = "none"; }, 4000);
        modal.style.display = "none";
        document.body.classList.remove('modal-open');
      });
      modalButtons.appendChild(formBtn);

      const callBtn = document.createElement('a');
      callBtn.className = 'modal-btn secondary-btn';
      callBtn.href = 'tel:+12022256211';
      callBtn.innerHTML = '<i class="fas fa-phone"></i> Call D.C.: (202) 225-6211';
      modalButtons.appendChild(callBtn);

      helpText.textContent = isMobile
        ? "Tip: calls are tallied by staff. Read your message aloud if you call."
        : "Tip: the form asks for your address to confirm you live in the district. Calls to the D.C. or Hermantown office are tallied too.";

      // Show modal and prevent background scrolling
      modal.style.display = "block";
      document.body.classList.add('modal-open');
    });
  }
  
  // Close modal when X is clicked
  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      modal.style.display = "none";
      document.body.classList.remove('modal-open');
    });
  }
  
  // Close modal when clicking outside of it
  window.addEventListener('click', function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      document.body.classList.remove('modal-open');
    }
  });
  
  // Copy to clipboard function
  function copyToClipboard() {
    navigator.clipboard.writeText(fullEmailText).then(function() {
      // Show success message on the form
      successMessage.style.display = "block";
      setTimeout(function() {
        successMessage.style.display = "none";
      }, 3000);
      
      // Close modal
      modal.style.display = "none";
      document.body.classList.remove('modal-open');
    }).catch(function(err) {
      console.error('Could not copy text: ', err);
      alert('Could not copy text. Please select all text and copy manually (Ctrl+C or Command+C).');
    });
  }
  
  // Smaller "Copy" button in email details
  if (copyDetailsBtn) {
    copyDetailsBtn.addEventListener('click', function() {
      navigator.clipboard.writeText(fullEmailText).then(function() {
        // Visual feedback
        copyDetailsBtn.classList.add('copy-flash');
        copyDetailsBtn.textContent = 'Copied!';
        
        setTimeout(function() {
          copyDetailsBtn.classList.remove('copy-flash');
          copyDetailsBtn.textContent = 'Copy';
        }, 1500);
      }).catch(function(err) {
        console.error('Could not copy text: ', err);
        alert('Could not copy text. Please select all text and copy manually.');
      });
    });
  }
}
// Listings search + portfolio filters (2026). Homepage search forwards to listings.html.
function setupSearchFunctionality() {
  var form = document.querySelector('.search-form');
  if (!form || form.dataset.bound) return;
  form.dataset.bound = '1';
  var input = form.querySelector('input[name="q"]');
  var select = form.querySelector('select[name="category"]');
  var items = document.querySelectorAll('.listing-item');
  var buttons = document.querySelectorAll('.filter-btn');

  if (!items.length) {
    // Not on the listings page: forward the query.
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var q = input ? input.value : '';
      var c = select ? select.value : 'all';
      window.location.href = 'listings.html?q=' + encodeURIComponent(q) + '&category=' + encodeURIComponent(c);
    });
    return;
  }

  function apply() {
    var term = (input && input.value || '').toLowerCase().trim();
    var cat = select ? select.value : 'all';
    var shown = 0;
    items.forEach(function (item) {
      var okCat = cat === 'all' || item.getAttribute('data-category') === cat;
      var okText = !term || item.textContent.toLowerCase().indexOf(term) !== -1;
      item.style.display = okCat && okText ? 'flex' : 'none';
      if (okCat && okText) shown++;
    });
    buttons.forEach(function (b) { b.classList.toggle('active', b.getAttribute('data-filter') === cat); });
    var msg = document.querySelector('.no-results-message');
    if (!shown) {
      if (!msg) {
        msg = document.createElement('div');
        msg.className = 'no-results-message';
        msg.innerHTML = '<h3>No Assets Match Your Search</h3><p>Don&rsquo;t worry! The agent is privatizing more public resources every day.</p>';
        document.querySelector('.listings-grid').appendChild(msg);
      }
      msg.style.display = 'block';
    } else if (msg) { msg.style.display = 'none'; }
  }

  form.addEventListener('submit', function (e) { e.preventDefault(); apply(); });
  if (input) input.addEventListener('input', function () { clearTimeout(input.timer); input.timer = setTimeout(apply, 250); });
  if (select) select.addEventListener('change', apply);
  buttons.forEach(function (b) {
    b.addEventListener('click', function () { if (select) select.value = b.getAttribute('data-filter'); apply(); });
  });

  var params = new URLSearchParams(window.location.search);
  if (params.get('q') && input) input.value = params.get('q');
  if (params.get('category') && select && select.querySelector('option[value="' + params.get('category') + '"]')) select.value = params.get('category');
  if (params.get('q') || params.get('category')) apply();
}

document.addEventListener('DOMContentLoaded', setupSearchFunctionality);

// Economy page specific functions
function showEconomyVisitAlert() {
  alert("ECONOMY CRASH SCHEDULED! Thanks for helping Pete Stauber destroy Minnesota businesses with 25% tariffs!");
}

// Medicaid page specific functions
function showMedicaidAlert() {
  alert("FOR SALE: Healthcare for 1.1 million Minnesotans to fund tax cuts for billionaires! Pete Stauber approves this message.");
}

function showMedicaidTourAlert() {
  alert("Tour scheduled! Please wear a suit and bring your lobbying checkbook. Vulnerable patients will be hidden from view during your visit.");
}

// Tax cut calculator function
function calculateTaxCut() {
  // Get the selected income
  const incomeSelect = document.getElementById('incomeSelect');
  const income = parseInt(incomeSelect.value);
  
  // Calculate tax cut (approximately 11% of income for billionaires)
  const taxCut = income * 1100000 / 1000;
  
  // Calculate number of families impacted (assuming $5,900 per family per year for Medicaid)
  const familiesImpacted = Math.round(taxCut / 5900);
  
  // Update the results
  document.getElementById('taxCutResult').textContent = '$' + taxCut.toLocaleString();
  document.getElementById('peopleImpactedResult').textContent = familiesImpacted.toLocaleString();
}

// Initialize calculator on page load
document.addEventListener('DOMContentLoaded', function() {
  // Only run if we're on the Medicaid page
  if (document.querySelector('.tax-calculator')) {
    calculateTaxCut();
  }
});
// Medicaid listing page specific functions
function showMedicaidAlert() {
  alert("EXCEPTIONAL INVESTMENT OPPORTUNITY: This healthcare portfolio is available exclusively to premium investors. Fund your tax cuts by acquiring this property currently serving 1.1 million Minnesotans.");
}

function showMedicaidTourAlert() {
  alert("PROPERTY VIEWING SCHEDULED! Our agent Pete Stauber will showcase the premium investment opportunities while discreetly minimizing current occupant concerns.");
}

// ROI calculator function
function calculateTaxCut() {
  // Get the selected income
  const incomeSelect = document.getElementById('incomeSelect');
  const income = parseInt(incomeSelect.value);
  
  // Calculate tax cut (approximately 11% of income for billionaires)
  const taxCut = income * 1100000 / 1000;
  
  // Calculate number of families impacted (assuming $5,900 per family per year for Medicaid)
  const familiesImpacted = Math.round(taxCut / 5900);
  
  // Update the results
  document.getElementById('taxCutResult').textContent = '$' + taxCut.toLocaleString();
  document.getElementById('peopleImpactedResult').textContent = familiesImpacted.toLocaleString();
}

// Initialize calculator on page load
document.addEventListener('DOMContentLoaded', function() {
  // Only run if we're on the Medicaid page with the calculator
  if (document.querySelector('.roi-calculator')) {
    calculateTaxCut();
  }
  
  // Handle "View Virtual Tour" button if present
  const tourButton = document.getElementById('viewTourBtn');
  if (tourButton) {
    tourButton.addEventListener('click', function() {
      // Scroll to the carousel section
      document.querySelector('.property-tour').scrollIntoView({ 
        behavior: 'smooth' 
      });
    });
  }
  
  // Add Zillow-like hover effects to property cards
  const propertyCards = document.querySelectorAll('.property');
  propertyCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
      this.style.transform = 'translateY(-5px)';
      this.style.transition = 'all 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
      this.style.transform = 'translateY(0)';
    });
  });
});
// FAA listing page specific functions
function showFaaAlert() {
  alert("EXCEPTIONAL INVESTMENT OPPORTUNITY: This premium regulatory property is available exclusively to pre-qualified investors. Control the skies and safety standards of 2.9 million Minnesota air travelers!");
}

function showFaaVisitAlert() {
  alert("PROPERTY VIEWING SCHEDULED! Our agent Pete Stauber will showcase the premium deregulation opportunities while our staff prepares a refreshed FAA org chart with your name at the top.");
}

// Adding hover effects to history timeline items
document.addEventListener('DOMContentLoaded', function() {
  // Check if we're on the FAA listing page
  if (document.querySelector('.property-history')) {
    const historyItems = document.querySelectorAll('.history-item');
    
    historyItems.forEach(item => {
      // Add hover effect
      item.addEventListener('mouseenter', function() {
        const content = this.querySelector('.history-content');
        content.style.transform = 'translateX(5px)';
        content.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
        content.style.transition = 'all 0.3s ease';
        
        const date = this.querySelector('.history-date');
        date.style.color = '#003366';
        date.style.fontWeight = 'bolder';
        date.style.transition = 'all 0.3s ease';
      });
      
      // Remove hover effect
      item.addEventListener('mouseleave', function() {
        const content = this.querySelector('.history-content');
        content.style.transform = 'translateX(0)';
        content.style.boxShadow = '0 3px 10px rgba(0,0,0,0.1)';
        
        const date = this.querySelector('.history-date');
        date.style.color = '#0074e4';
        date.style.fontWeight = 'bold';
      });
    });
  }
  
  // Add toggle for buyer eligibility details
  const buyerCards = document.querySelectorAll('.buyer-card');
  buyerCards.forEach(card => {
    card.addEventListener('click', function() {
      // Get all cards and reset any that might be expanded
      buyerCards.forEach(c => {
        if (c !== card && c.getAttribute('data-expanded') === 'true') {
          const hiddenContent = c.querySelector('.hidden-content');
          if (hiddenContent) {
            hiddenContent.style.maxHeight = '0';
            hiddenContent.style.opacity = '0';
          }
          c.setAttribute('data-expanded', 'false');
        }
      });
      
      // Toggle the current card
      const hiddenContent = this.querySelector('.hidden-content');
      if (hiddenContent) {
        if (this.getAttribute('data-expanded') === 'true') {
          hiddenContent.style.maxHeight = '0';
          hiddenContent.style.opacity = '0';
          this.setAttribute('data-expanded', 'false');
        } else {
          hiddenContent.style.maxHeight = hiddenContent.scrollHeight + 'px';
          hiddenContent.style.opacity = '1';
          this.setAttribute('data-expanded', 'true');
        }
      }
    });
  });
});

// Create interactive safety slider (if present on page)
document.addEventListener('DOMContentLoaded', function() {
  const safetySlider = document.getElementById('safetySlider');
  const profitDisplay = document.getElementById('profitDisplay');
  const safetyDisplay = document.getElementById('safetyDisplay');
  
  if (safetySlider && profitDisplay && safetyDisplay) {
    safetySlider.addEventListener('input', function() {
      const safetyValue = 100 - this.value;
      const profitValue = this.value;
      
      safetyDisplay.textContent = safetyValue + '%';
      profitDisplay.textContent = '$' + (profitValue * 10).toLocaleString() + 'M';
      
      // Change color based on safety level
      if (safetyValue < 30) {
        safetyDisplay.style.color = '#e74c3c'; // Red for danger
      } else if (safetyValue < 60) {
        safetyDisplay.style.color = '#f39c12'; // Orange for warning
      } else {
        safetyDisplay.style.color = '#27ae60'; // Green for safe
      }
      
      // Always show profit in green
      profitDisplay.style.color = '#27ae60';
    });
  }
});
// BWCA listing page specific functions
function showBwcaAlert() {
  alert("EXCLUSIVE OPPORTUNITY: This pristine wilderness is available to mining corporations thanks to Pete Stauber's efforts to bypass environmental protections. 1,000+ years of pollution rights included at no extra charge!");
}

function showBwcaVisitAlert() {
  alert("PROPERTY VIEWING SCHEDULED! Our agent will showcase the pristine wilderness before it's transformed into an industrial mining zone. Please bring your hard hat and disregard any concerns about water quality.");
}

// Water quality simulator functionality - synchronized version
document.addEventListener('DOMContentLoaded', function() {
  const waterSlider = document.getElementById('waterQualitySlider');
  const waterImage = document.getElementById('waterImage');
  const qualityLabel = document.getElementById('qualityLabel');
  const qualityMarker = document.getElementById('qualityMarker');
  const yearCounter = document.getElementById('yearCounter');
  
  // Only run if we're on the BWCA page with the water quality simulator
  if (waterSlider && waterImage && qualityLabel && qualityMarker && yearCounter) {
    // Function to update all UI elements based on slider value
    function updateWaterQuality(value) {
      // Update the marker position (ensure it actually moves visually)
      qualityMarker.style.transform = `translateX(${value}%)`;
      
      // Update water quality label based on slider position
      if (value < 20) {
        qualityLabel.textContent = "Pristine Water Quality";
        qualityLabel.style.color = "#27ae60";
      } else if (value < 40) {
        qualityLabel.textContent = "Slight Contamination";
        qualityLabel.style.color = "#2ecc71";
      } else if (value < 60) {
        qualityLabel.textContent = "Moderate Contamination";
        qualityLabel.style.color = "#f1c40f";
      } else if (value < 80) {
        qualityLabel.textContent = "Heavy Metal Pollution";
        qualityLabel.style.color = "#e67e22";
      } else {
        qualityLabel.textContent = "Acid Mine Drainage";
        qualityLabel.style.color = "#e74c3c";
      }
      
      // Apply filter effects to the water image based on pollution level
      const brightness = Math.max(100 - (value * 0.3), 70); 
      const saturation = Math.max(100 - (value * 0.5), 50);
      const sepia = Math.min(value * 0.3, 30);
      
      // Add some color shifting for polluted water
      let hueRotate = 0;
      let grayscale = 0;
      
      if (value > 50) {
        hueRotate = Math.min((value - 50) * 0.6, 30);
        
        if (value > 80) {
          grayscale = Math.min((value - 80) * 0.5, 10);
        }
      }
      
      // Apply all filters to the image
      waterImage.style.filter = `
        brightness(${brightness}%) 
        saturate(${saturation}%) 
        sepia(${sepia}%) 
        hue-rotate(${hueRotate}deg)
        grayscale(${grayscale}%)
      `;
      
      // Update the year counter (scale 0-100 to 0-500 years)
      const years = Math.round(value * 5);
      yearCounter.textContent = years;
    }
    
    // Add change event listener (fires when slider is released)
    waterSlider.addEventListener('change', function() {
      updateWaterQuality(this.value);
    });
    
    // Add input event listener (fires during sliding)
    waterSlider.addEventListener('input', function() {
      updateWaterQuality(this.value);
    });
    
    // Initialize the slider to ensure all elements are in sync at start
    updateWaterQuality(waterSlider.value);
    
    // Add a sanity check on window resize to ensure marker position updates correctly
    window.addEventListener('resize', function() {
      setTimeout(function() {
        updateWaterQuality(waterSlider.value);
      }, 100);
    });
  }
});

// Enhanced showMiningAlert function to provide more context
function showMiningAlert() {
  alert("EXCLUSIVE OPPORTUNITY: This pristine wilderness is available only to multinational mining conglomerates! Thanks to Pete Stauber's tireless efforts to bypass EPA protections, you can now mine copper-nickel in a water-rich environment despite all scientific evidence suggesting catastrophic pollution for the next 1,000+ years!");
}

// Enhanced showMineTourAlert function
function showMineTourAlert() {
  alert("PROPERTY VIEWING SCHEDULED! Please bring your hard hat and disregard any concerns about water quality. Our Pete Stauber-approved tour guide will show you the pristine wilderness before your company transforms it into a permanent pollution site. Note: local residents and environmental scientists have been excluded from the tour.");
}

// Presidential Pardon listing page specific functions
function showPardonAlert() {
  alert("EXCLUSIVE OPPORTUNITY: This premium legal immunity property is available only to qualified donors! Your contribution of $100,000+ to Republican PACs ensures you'll never face consequences for your actions!");
}

function showPardonTourAlert() {
  alert("LEGAL CONSULTATION SCHEDULED! Our representative Pete Stauber will silently endorse your pardon while publicly claiming to support police officers. Note: This consultation includes strategic advice on maximizing your donation's pardon potential.");
}

// Pardon detail alerts for similar properties
function showPardonDetailAlert(type) {
  if (type === 'white-collar') {
    alert("WHITE-COLLAR CRIME PACKAGE: Immunity from prosecution for fraud, embezzlement, tax evasion, and other financial crimes. Minimum donation: $2,000,000 to approved PACs. Pete Stauber's silence on white-collar pardons is your guarantee of political support!");
  } else if (type === 'environmental') {
    alert("ENVIRONMENTAL CRIMES PACKAGE: Freedom to pollute without consequences! All EPA violations forgiven with a simple $1,500,000 contribution. Pete Stauber already supports environmental deregulation - this is the logical next step!");
  } else if (type === 'corruption') {
    alert("POLITICAL CORRUPTION FREEDOM PLAN: Our most comprehensive legal immunity package. Perfect for politicians facing corruption charges. Contribution of $3,000,000+ recommended for complete immunity. Used by insiders at the highest levels!");
  }
}

// ROI calculator for pardons
function calculatePardonROI() {
  // Get the selected charge and donation
  const chargeSelect = document.getElementById('chargeSelect');
  const donationSelect = document.getElementById('donationSelect');
  
  if (!chargeSelect || !donationSelect) return;
  
  const charge = chargeSelect.value;
  const donation = parseInt(donationSelect.value);
  
  // Set prison time based on typical sentences for Jan 6 defendants
  let prisonMonths = 0;
  let legalFees = 0;
  
  switch(charge) {
    case 'assault':
      prisonMonths = 41; // Average for Capitol Police assault
      legalFees = 75000;
      break;
    case 'trespass':
      prisonMonths = 14; // Average for trespassing
      legalFees = 35000;
      break;
    case 'obstruction':
      prisonMonths = 36; // Average for obstruction
      legalFees = 60000;
      break;
    case 'sedition':
      prisonMonths = 120; // Average for seditious conspiracy
      legalFees = 150000;
      break;
    case 'other':
      prisonMonths = 24; // Default
      legalFees = 50000;
      break;
  }
  
  // Calculate ROI based on prison time and legal fees avoided
  const timeValue = prisonMonths * 1500; // Value freedom at $1,500 per month
  const totalValue = timeValue + legalFees;
  const roi = Math.round((totalValue / donation) * 100);
  
  // Update the results
  const timeResult = document.getElementById('timeResult');
  const roiResult = document.getElementById('roiResult');
  
  if (timeResult) timeResult.textContent = prisonMonths + ' Months';
  if (roiResult) roiResult.textContent = roi + '%';
}

// Initialize calculator on page load
document.addEventListener('DOMContentLoaded', function() {
  // Only run if we're on the Pardons page with the calculator
  if (document.querySelector('.roi-calculator') && 
      document.getElementById('chargeSelect') && 
      document.getElementById('donationSelect')) {
    calculatePardonROI();
    
    // Add event listeners for dropdown changes
    document.getElementById('chargeSelect').addEventListener('change', calculatePardonROI);
    document.getElementById('donationSelect').addEventListener('change', calculatePardonROI);
  }
});

// PolyMet listing page specific functions
function showPolyMetAlert() {
  alert("EXCLUSIVE OPPORTUNITY: This premium watershed destruction property is available to multinational mining corporations with Russian oligarch connections! Control 10% of the world's fresh water while transferring pollution costs to Minnesota taxpayers!");
}

function showPolyMetTourAlert() {
  alert("WATERSHED TOUR SCHEDULED! Our representative Pete Stauber will highlight how environmental protections can be bypassed to maximize foreign profits. Note: Tour guests will not be informed about the 500+ years of acid mine drainage or Russian ownership connections.");
}

// PolyMet profit flow calculator
function calculatePolyMetProfit() {
  // Get the selected profit scenario
  const profitSelect = document.getElementById('profitSelect');
  if (!profitSelect) return;
  
  const scenario = profitSelect.value;
  
  // Set total profit based on scenario
  let totalProfit = 1500000000; // Default to moderate scenario
  
  switch(scenario) {
    case 'conservative':
      totalProfit = 1000000000;
      break;
    case 'moderate':
      totalProfit = 1500000000;
      break;
    case 'optimistic':
      totalProfit = 2000000000;
      break;
  }
  
  // Calculate shares based on ownership percentages
  const russianPercentage = 17;
  const swissPercentage = 72;
  const minnesotaPercentage = 11;
  
  const russianProfit = totalProfit * (russianPercentage / 100);
  const swissProfit = totalProfit * (swissPercentage / 100);
  const minnesotaProfit = totalProfit * (minnesotaPercentage / 100);
  
  // Update the bar chart segments
  const russianSegment = document.getElementById('russianSegment');
  const swissSegment = document.getElementById('swissSegment');
  const minnesotaSegment = document.getElementById('minnesotaSegment');
  
  if (russianSegment) russianSegment.style.width = russianPercentage + '%';
  if (swissSegment) swissSegment.style.width = swissPercentage + '%';
  if (minnesotaSegment) minnesotaSegment.style.width = minnesotaPercentage + '%';
  
  // Update the result values with formatted currency
  const russianResult = document.getElementById('russianResult');
  const minnesotaResult = document.getElementById('minnesotaResult');
  
  if (russianResult) {
    russianResult.textContent = '$' + (russianProfit).toLocaleString();
  }
  
  if (minnesotaResult) {
    minnesotaResult.textContent = '$' + (minnesotaProfit).toLocaleString();
  }
}

// Initialize calculator on page load
document.addEventListener('DOMContentLoaded', function() {
  // Only run if we're on the PolyMet page with the calculator
  if (document.querySelector('.roi-calculator') && 
      document.getElementById('profitSelect')) {
    calculatePolyMetProfit();
    
    // Add event listener for dropdown change
    document.getElementById('profitSelect').addEventListener('change', calculatePolyMetProfit);
  }
  
  // Add hover effects to ownership structure
  const structureEntities = document.querySelectorAll('.structure-entity');
  structureEntities.forEach(entity => {
    entity.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = '0 8px 15px rgba(0,0,0,0.2)';
    });
    
    entity.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 3px 10px rgba(0,0,0,0.1)';
    });
  });
});

// Social Security Administration listing page specific functions
function showSsaAlert() {
  alert("EXCLUSIVE OPPORTUNITY: This premium retirement portfolio is available to Wall Street firms ready to transform guaranteed benefits into profit-generating private accounts! Capture 2-5% annual management fees from $2.9 trillion in retirement savings!");
}

function showSsaTourAlert() {
  alert("PORTFOLIO VIEWING SCHEDULED! Our agent Pete Stauber will demonstrate how to support privatization while publicly claiming to 'protect' Social Security. Note: Current seniors who rely on these benefits will be excluded from the tour.");
}

// SSA Profit calculator
function calculateSsaProfit() {
  // Get the selected portfolio size and management fee
  const portfolioSizeSelect = document.getElementById('portfolioSizeSelect');
  const managementFeeSelect = document.getElementById('managementFeeSelect');
  
  if (!portfolioSizeSelect || !managementFeeSelect) return;
  
  const portfolioSizePercent = parseFloat(portfolioSizeSelect.value);
  const managementFeePercent = parseFloat(managementFeeSelect.value);
  
  // Total SSA Trust Fund value is approximately $2.9 trillion
  const totalTrustFund = 2900000000000;
  
  // Calculate the portfolio value based on the selected percentage
  const portfolioValue = totalTrustFund * (portfolioSizePercent / 100);
  
  // Calculate annual profit based on management fee
  const annualProfit = portfolioValue * (managementFeePercent / 100);
  
  // Estimate the number of seniors affected
  // There are approximately 65 million SS recipients
  // We'll base this on the portfolio size percentage and assume fee extraction reduces benefits
  const totalRecipients = 65000000;
  const affectedSeniors = Math.round(totalRecipients * (portfolioSizePercent / 100));
  
  // Update the result values
  const profitResult = document.getElementById('profitResult');
  const seniorResult = document.getElementById('seniorResult');
  
  if (profitResult) {
    // Format as currency with proper billions/millions notation
    if (annualProfit >= 1000000000) {
      profitResult.textContent = '$' + (annualProfit / 1000000000).toFixed(1) + ' Billion';
    } else {
      profitResult.textContent = '$' + (annualProfit / 1000000).toFixed(1) + ' Million';
    }
  }
  
  if (seniorResult) {
    seniorResult.textContent = affectedSeniors.toLocaleString();
  }
}

// Initialize calculator on page load
document.addEventListener('DOMContentLoaded', function() {
  // Only run if we're on the SSA page with the calculator
  if (document.querySelector('.roi-calculator') && 
      document.getElementById('portfolioSizeSelect') && 
      document.getElementById('managementFeeSelect')) {
    calculateSsaProfit();
    
    // Add event listeners for dropdown changes
    document.getElementById('portfolioSizeSelect').addEventListener('change', calculateSsaProfit);
    document.getElementById('managementFeeSelect').addEventListener('change', calculateSsaProfit);
  }
  
  // Add hover effects to comparison items
  const comparisonItems = document.querySelectorAll('.comparison-item');
  comparisonItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = '0 8px 15px rgba(0,0,0,0.2)';
      this.style.transition = 'all 0.3s ease';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 3px 10px rgba(0,0,0,0.1)';
    });
  });
});
// National Forests listing page specific functions
function showForestAlert() {
  alert("PREMIUM TIMBER OPPORTUNITY: These 4.5 million acres of pristine forest are available for aggressive logging operations thanks to Pete Stauber's tireless efforts to reduce environmental protections! Transform centuries-old ecosystems into quarterly profits!");
}

function showForestTourAlert() {
  alert("LOGGING ASSESSMENT SCHEDULED! Our agent Pete Stauber will showcase the premium timber extraction opportunities while strategically avoiding mentions of wildlife habitat, carbon storage, and public recreation value. Please bring your chainsaw for a hands-on demonstration!");
}

// Forest profit calculator
function calculateTimberProfit() {
  // Get the selected forest area and extraction method
  const forestAreaSelect = document.getElementById('forestAreaSelect');
  const extractionMethodSelect = document.getElementById('extractionMethodSelect');
  
  if (!forestAreaSelect || !extractionMethodSelect) return;
  
  const forestArea = forestAreaSelect.value;
  const extractionMethod = extractionMethodSelect.value;
  
  // Set base values for each forest area in billions
  let timberValue = 0;
  let environmentalValue = 0;
  let speciesCount = 0;
  
  switch(forestArea) {
    case 'chippewa':
      timberValue = 3.8;
      environmentalValue = 21.4;
      speciesCount = 510;
      break;
    case 'superior':
      timberValue = 7.2;
      environmentalValue = 39.5;
      speciesCount = 742;
      break;
    case 'both':
      timberValue = 12.3;
      environmentalValue = 68.7;
      speciesCount = 1125;
      break;
  }
  
  // Modify values based on extraction method
  switch(extractionMethod) {
    case 'selective':
      timberValue *= 0.7; // 70% of potential value
      environmentalValue *= 0.4; // 40% environmental damage
      speciesCount *= 0.5; // 50% species affected
      break;
    case 'commercial':
      timberValue *= 1.0; // 100% of base value
      environmentalValue *= 0.7; // 70% environmental damage
      speciesCount *= 0.8; // 80% species affected
      break;
    case 'clearcut':
      timberValue *= 1.4; // 140% of potential value
      environmentalValue *= 1.0; // 100% environmental damage
      speciesCount *= 1.0; // 100% species affected
      break;
  }
  
  // Update result displays
  const profitResult = document.getElementById('profitResult');
  const environmentResult = document.getElementById('environmentResult');
  const speciesResult = document.getElementById('speciesResult');
  
  if (profitResult) {
    profitResult.textContent = '$' + timberValue.toFixed(1) + ' Billion';
  }
  
  if (environmentResult) {
    environmentResult.textContent = '$' + environmentalValue.toFixed(1) + ' Billion';
  }
  
  if (speciesResult) {
    speciesResult.textContent = Math.round(speciesCount).toLocaleString();
  }
}

// Initialize calculator on page load
document.addEventListener('DOMContentLoaded', function() {
  // Only run if we're on the National Forests page with the calculator
  if (document.querySelector('.roi-calculator') && 
      document.getElementById('forestAreaSelect') && 
      document.getElementById('extractionMethodSelect')) {
    calculateTimberProfit();
    
    // Add event listeners for dropdown changes
    document.getElementById('forestAreaSelect').addEventListener('change', calculateTimberProfit);
    document.getElementById('extractionMethodSelect').addEventListener('change', calculateTimberProfit);
  }
  
  // Add hover effects to comparison and solution items
  const comparisonItems = document.querySelectorAll('.comparison-item');
  comparisonItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = '0 8px 15px rgba(0,0,0,0.2)';
      this.style.transition = 'all 0.3s ease';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 3px 10px rgba(0,0,0,0.1)';
    });
  });
  
  const solutionItems = document.querySelectorAll('.solution-item');
  solutionItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = '0 8px 15px rgba(0,0,0,0.2)';
      this.style.transition = 'all 0.3s ease';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 3px 10px rgba(0,0,0,0.1)';
    });
  });
  
  // Add hover effects to carbon metric items
  const metricItems = document.querySelectorAll('.carbon-metric-item');
  metricItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)'; 
      this.style.boxShadow = '0 8px 15px rgba(0,0,0,0.1)';
      this.style.transition = 'all 0.3s ease';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
      this.style.boxShadow = 'none';
    });
  });
});

// Postal Service listing page specific functions
function showPostalAlert() {
  alert("PREMIUM EFFICIENCY OPPORTUNITY: These 102 rural post offices are available for immediate closure to maximize shareholder returns! Pete Stauber fully endorses removing these 'inefficient' public services from rural Minnesota communities!");
}

function showPostalTourAlert() {
  alert("EFFICIENCY ASSESSMENT SCHEDULED! Our agent Pete Stauber will showcase the premium closure opportunities while strategically avoiding mentions of medication delivery, rural business impacts, and community needs. Please bring your calculator to count potential profits!");
}

// Postal profit calculator
function calculatePostalProfit() {
  // Get the selected closure target and fee increase
  const closureTargetSelect = document.getElementById('closureTargetSelect');
  const feeIncreaseSelect = document.getElementById('feeIncreaseSelect');
  
  if (!closureTargetSelect || !feeIncreaseSelect) return;
  
  const closureTarget = closureTargetSelect.value;
  const feeIncrease = feeIncreaseSelect.value;
  
  // Set base values for different closure targets
  let profit = 0;
  let communityCost = 0;
  let communitiesAffected = 0;
  
  // Base number of rural post offices in MN-8: 102
  const totalOffices = 102;
  
  switch(closureTarget) {
    case 'conservative':
      communitiesAffected = Math.round(totalOffices * 0.3); // 30%
      profit = 210;  // millions
      communityCost = 450; // millions
      break;
    case 'moderate':
      communitiesAffected = Math.round(totalOffices * 0.6); // 60%
      profit = 378;  // millions
      communityCost = 842; // millions
      break;
    case 'aggressive':
      communitiesAffected = Math.round(totalOffices * 0.9); // 90%
      profit = 565;  // millions
      communityCost = 1230; // millions
      break;
  }
  
  // Adjust based on fee increases
  switch(feeIncrease) {
    case 'minimal':
      profit *= 0.7; // 70% of base profit
      break;
    case 'moderate':
      profit *= 1.0; // 100% of base profit
      break;
    case 'premium':
      profit *= 1.5; // 150% of base profit
      communityCost *= 1.3; // 130% of base community cost due to higher fees
      break;
  }
  
  // Update the results
  const profitResult = document.getElementById('profitResult');
  const communityResult = document.getElementById('communityResult');
  const communitiesResult = document.getElementById('communitiesResult');
  
  if (profitResult) {
    profitResult.textContent = '$' + Math.round(profit).toLocaleString() + ' Million';
  }
  
  if (communityResult) {
    communityResult.textContent = '$' + Math.round(communityCost).toLocaleString() + ' Million';
  }
  
  if (communitiesResult) {
    communitiesResult.textContent = communitiesAffected;
  }
}

// Initialize calculator on page load
document.addEventListener('DOMContentLoaded', function() {
  // Only run if we're on the Postal Service page with the calculator
  if (document.querySelector('.roi-calculator') && 
      document.getElementById('closureTargetSelect') && 
      document.getElementById('feeIncreaseSelect')) {
    calculatePostalProfit();
    
    // Add event listeners for dropdown changes
    document.getElementById('closureTargetSelect').addEventListener('change', calculatePostalProfit);
    document.getElementById('feeIncreaseSelect').addEventListener('change', calculatePostalProfit);
  }
  
  // Add hover effects to impact solution items
  const solutionItems = document.querySelectorAll('.solution-item');
  solutionItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = '0 8px 15px rgba(0,0,0,0.2)';
      this.style.transition = 'all 0.3s ease';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 3px 10px rgba(0,0,0,0.1)';
    });
  });
  
  // Add hover effects to economic metric items
  const metricItems = document.querySelectorAll('.economic-metric-item');
  metricItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)'; 
      this.style.boxShadow = '0 8px 15px rgba(0,0,0,0.1)';
      this.style.transition = 'all 0.3s ease';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
      this.style.boxShadow = 'none';
    });
  });
});
// Defense Department listing page specific functions
function showDoDAlert() {
  alert("FOR SALE: The entire Department of Defense (2.1 million troops plus nuclear arsenal). Pete Stauber eagerly awaits your bid – no military experience required!");
}

function showDoDTourAlert() {
  alert("SECURITY CLEARANCE SCHEDULED! Pete Stauber will bypass all background checks to give you a personal tour of top-secret facilities. Enjoy your preview of command!");
}

// National Security Risk Calculator logic for DoD listing
function calculateSecurityRisk() {
  // Get selected qualification and security levels
  const qualLevel = document.getElementById('qualificationSelect').value;
  const secLevel = document.getElementById('securitySelect').value;
  let qualScore = 0;
  let secScore = 0;
  // Assign a numeric score for qualification level
  switch (qualLevel) {
    case 'none': qualScore = 0; break;
    case 'minimal': qualScore = 25; break;
    case 'some': qualScore = 50; break;
    case 'actual': qualScore = 100; break;
  }
  // Assign a numeric score for info security handling
  switch (secLevel) {
    case 'compromised': secScore = 0; break;
    case 'careless': secScore = 30; break;
    case 'basic': secScore = 70; break;
    case 'secure': secScore = 100; break;
  }
  // Calculate a risk percentage (0 = highest risk, 100 = lowest risk)
  const riskScore = (qualScore + secScore) / 2;
  let riskText, riskColor;
  if (riskScore < 34) {
    riskText = "CRITICAL";
    riskColor = "#8B0000";  // dark red
  } else if (riskScore < 67) {
    riskText = "MODERATE";
    riskColor = "#E67E22";  // orange
  } else {
    riskText = "LOW";
    riskColor = "#2e7d32";  // green
  }
  // Update the Risk result display
  const riskResultEl = document.getElementById('riskResult');
  if (riskResultEl) {
    riskResultEl.textContent = riskText;
    riskResultEl.style.color = riskColor;
  }
  // Pete Stauber's concern level remains "NONE" regardless of risk
  const concernResultEl = document.getElementById('concernResult');
  if (concernResultEl) {
    concernResultEl.textContent = "NONE";
    concernResultEl.style.color = "#2e7d32";
  }
}

// Add these functions to script.js

// Education-specific alert functions
function showEducationAlert() {
  alert("Congratulations! You're about to acquire Minnesota's entire public education system. Only billionaires and hedge funds qualify for this premium listing. Please verify your net worth is at least $500 million to proceed.");
}

function showEducationTourAlert() {
  alert("Virtual tour of the education system scheduled! Our team will show you how to maximize profit by cutting teacher salaries, eliminating arts programs, and replacing classroom instruction with low-cost digital alternatives.");
}

// Education ROI Calculator function
function calculateEducationProfit() {
  // Get selected values
  const privatizationModel = document.getElementById('privatizationModelSelect').value;
  const costCuttingStrategy = document.getElementById('costCuttingSelect').value;
  
  // Calculate profit based on model and strategy
  let profit = 0;
  let teachersReplaced = 0;
  let achievementDrop = 0;
  
  if (privatizationModel === 'voucher') {
    profit = 2.9; // billion
    teachersReplaced = 12500;
    achievementDrop = 28;
  } else if (privatizationModel === 'charter') {
    profit = 3.8; // billion
    teachersReplaced = 18500;
    achievementDrop = 42;
  } else if (privatizationModel === 'forprofit') {
    profit = 4.2; // billion
    teachersReplaced = 25600;
    achievementDrop = 61;
  }
  
  // Adjust based on cost-cutting strategy
  if (costCuttingStrategy === 'minimal') {
    profit *= 0.7;
    teachersReplaced *= 0.6;
    achievementDrop *= 0.8;
  } else if (costCuttingStrategy === 'aggressive') {
    profit *= 1.3;
    teachersReplaced *= 1.4;
    achievementDrop *= 1.5;
  }
  
  // Update results
  document.getElementById('profitResult').textContent = '$' + profit.toFixed(1) + ' Billion';
  document.getElementById('teacherResult').textContent = Math.round(teachersReplaced).toLocaleString();
  document.getElementById('achievementResult').textContent = '-' + Math.round(achievementDrop) + '%';
}

// Add the education page to carousel functions if they exist
if (typeof updateCarousel === 'function') {
  // This assumes there's already a carousel function in your script.js
  // Just ensuring it works with the education page carousel
}

// VA Burn-Pit listing page specific functions
function showVaAlert() {
  alert("EXCLUSIVE HEALTHCARE DENIAL OPPORTUNITY: This premium veteran betrayal property is available exclusively to corporations that profit from veteran suffering. Pete Stauber's NAY vote on the PACT Act (Roll Call #57) ensures maximum denial of care for burn pit victims!");
}

function showVaTourAlert() {
  alert("FACILITY VIEWING SCHEDULED! Our agent Pete Stauber will showcase the premium veteran denial opportunities while strategically avoiding any mentions of the 93% of Americans who support veteran healthcare. Please bring your campaign donation checkbook for the full betrayal experience!");
}

// Democracy listing page specific functions
function showDemocracyAlert() {
  alert("EXCLUSIVE POLITICAL CONTROL OPPORTUNITY: This premium democracy system is available only to qualified oligarchs and corporations! Pete Stauber's consistent votes against voting rights ensure maximum control with minimum accountability!");
}

function showDemocracyTourAlert() {
  alert("DEMOCRACY AUCTION SCHEDULED! Our agent Pete Stauber will showcase how to purchase political control while maintaining the appearance of democratic legitimacy. Bring your dark money checkbook!");
}

// Democracy ROI calculator
function calculateDemocracyROI() {
  // Get the selected investment and control method
  const investmentSelect = document.getElementById('investmentSelect');
  const controlMethodSelect = document.getElementById('controlMethodSelect');
  
  if (!investmentSelect || !controlMethodSelect) return;
  
  const investment = parseInt(investmentSelect.value);
  const controlMethod = controlMethodSelect.value;
  
  // Set multipliers based on control method
  let controlMultiplier = 1;
  let voterMultiplier = 1;
  
  switch(controlMethod) {
    case 'lobbying':
      controlMultiplier = 50; // $1 in lobbying = $50 in benefits
      voterMultiplier = 0.1; // Less direct voter impact
      break;
    case 'gerrymandering':
      controlMultiplier = 25; // District control
      voterMultiplier = 0.5; // Medium voter impact
      break;
    case 'suppression':
      controlMultiplier = 30; // Voter suppression
      voterMultiplier = 1.0; // High voter impact
      break;
    case 'darkmoney':
      controlMultiplier = 75; // Highest ROI
      voterMultiplier = 0.3; // Indirect voter impact
      break;
  }
  
  // Calculate control value and voters affected
  const controlValue = investment * controlMultiplier;
  const votersAffected = (investment / 1000) * voterMultiplier;
  
  // Update the results
  const controlResult = document.getElementById('controlResult');
  const votersResult = document.getElementById('votersResult');
  
  if (controlResult) {
    if (controlValue >= 1000000000) {
      controlResult.textContent = '$' + (controlValue / 1000000000).toFixed(1) + ' Billion';
    } else if (controlValue >= 1000000) {
      controlResult.textContent = '$' + (controlValue / 1000000).toFixed(1) + ' Million';
    } else {
      controlResult.textContent = '$' + controlValue.toLocaleString();
    }
  }
  
  if (votersResult) {
    votersResult.textContent = Math.round(votersAffected).toLocaleString();
  }
}

// Initialize calculator on page load
document.addEventListener('DOMContentLoaded', function() {
  // Only run if we're on the Democracy page with the calculator
  if (document.querySelector('.roi-calculator') && 
      document.getElementById('investmentSelect') && 
      document.getElementById('controlMethodSelect')) {
    calculateDemocracyROI();
  }
});

// Add this to the messageTemplates object in your existing script.js:

// Labor Rights listing page specific functions
function showLaborAlert() {
  alert("PREMIUM UNION BUSTING OPPORTUNITY: This exclusive worker exploitation package is available only to corporations ready to crush collective bargaining! Pete Stauber's NAY vote on the PRO Act ensures maximum profit extraction from powerless workers!");
}

function showLaborTourAlert() {
  alert("EMPTY UNION HALL TOUR SCHEDULED! Our agent Pete Stauber will showcase the abandoned union facilities after his anti-worker votes drove members away. Please bring your corporate checkbook to fund more union busting!");
}

// Labor ROI Calculator
function calculateUnionBustingROI() {
  // Get selected values
  const companySize = document.getElementById('companySize').value;
  const unionStrategy = document.getElementById('unionStrategy').value;
  
  // Base calculations
  let baseSavings = 0;
  let workersAffected = 0;
  
  // Company size impacts
  switch(companySize) {
    case 'small':
      baseSavings = 500000; // $500k
      workersAffected = 50;
      break;
    case 'medium':
      baseSavings = 2500000; // $2.5M
      workersAffected = 250;
      break;
    case 'large':
      baseSavings = 15000000; // $15M
      workersAffected = 1500;
      break;
    case 'mega':
      baseSavings = 50000000; // $50M
      workersAffected = 5000;
      break;
  }
  
  // Strategy multipliers
  let savingsMultiplier = 1;
  let workerMultiplier = 1;
  
  switch(unionStrategy) {
    case 'intimidation':
      savingsMultiplier = 0.8;
      workerMultiplier = 0.7;
      break;
    case 'righttowork':
      savingsMultiplier = 1.2;
      workerMultiplier = 1.0;
      break;
    case 'outsourcing':
      savingsMultiplier = 1.5;
      workerMultiplier = 0.9;
      break;
    case 'automation':
      savingsMultiplier = 2.0;
      workerMultiplier = 0.8;
      break;
  }
  
  // Calculate final values
  const totalSavings = baseSavings * savingsMultiplier;
  const totalWorkers = Math.round(workersAffected * workerMultiplier);
  
  // Update display
  const savingsResult = document.getElementById('savingsResult');
  const workersResult = document.getElementById('workersResult');
  
  if (savingsResult) {
    if (totalSavings >= 1000000) {
      savingsResult.textContent = '$' + (totalSavings / 1000000).toFixed(1) + ' Million';
    } else {
      savingsResult.textContent = '$' + (totalSavings / 1000).toFixed(0) + 'K';
    }
  }
  
  if (workersResult) {
    workersResult.textContent = totalWorkers.toLocaleString();
  }
}

// Initialize calculator on page load
document.addEventListener('DOMContentLoaded', function() {
  // Only run if we're on the Labor page with the calculator
  if (document.querySelector('.roi-calculator') && 
      document.getElementById('companySize') && 
      document.getElementById('unionStrategy')) {
    calculateUnionBustingROI();
  }
});

// Veterans PACT Act listing page specific functions
function showVetsPactAlert() {
  alert("COVERAGE DENIED! This distressed asset portfolio of 3.5 million toxic-exposed veterans has been successfully shelved thanks to Agent Stauber's NAY vote on H.R. 3967. No presumptive care, no problem — for the budget, anyway!");
}

function showVetsPactTourAlert() {
  alert("BURN PIT TOUR SCHEDULED! Please bring your own respirator — Agent Stauber certainly didn't vote to provide one. Tour includes: open-air waste incineration sites, Agent Orange spray zones, and the Camp Lejeune water fountain.");
}

// Veterans Liability Avoidance Calculator
function calculateVetsDenial() {
  var years = parseInt(document.getElementById('serviceYearsSelect').value);
  var exposure = document.getElementById('exposureTypeSelect').value;

  var baseCost = 0;
  var waitYears = 0;

  switch (exposure) {
    case 'burnpit':
      baseCost = 185000;
      waitYears = 3.8;
      break;
    case 'agentorange':
      baseCost = 245000;
      waitYears = 5.2;
      break;
    case 'radiation':
      baseCost = 320000;
      waitYears = 6.1;
      break;
    case 'lejeune':
      baseCost = 210000;
      waitYears = 4.5;
      break;
  }

  var totalSaved = baseCost + (years * 42000);
  var totalWait = waitYears + (years * 0.15);

  var savedResult = document.getElementById('vetsSavedResult');
  var waitResult = document.getElementById('vetsWaitResult');

  if (savedResult) {
    if (totalSaved >= 1000000) {
      savedResult.textContent = '$' + (totalSaved / 1000000).toFixed(2) + ' Million';
    } else {
      savedResult.textContent = '$' + totalSaved.toLocaleString();
    }
  }

  if (waitResult) {
    waitResult.textContent = totalWait.toFixed(1) + ' Years';
  }
}

// Initialize veterans calculator on page load
document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('serviceYearsSelect') &&
      document.getElementById('exposureTypeSelect')) {
    calculateVetsDenial();
  }
});

// ── Voting Rights page alerts ──
function showVotingRightsAlert() {
  alert("ACCESS RESTRICTED! Your application to participate in democracy has been flagged by Agent Stauber's HOA board. Please submit your birth certificate, passport, Social Security number, and a sworn oath of loyalty to proceed. Processing time: indefinite.");
}

function showVotingRightsGateAlert() {
  alert("HOA APPROVAL PENDING! Unfortunately, your request to exercise your constitutional rights must first be reviewed by the DOJ, approved by Attorney General Bondi, and funded by HAVA grants that Agent Stauber has already frozen. Please try again after democracy is restored.");
}



// ---------------------------------------------------------------------------
// 2026: Lease-renewal bar (Nov 3 election countdown) + share helpers
// ---------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
  var ELECTION = new Date('2026-11-03T20:00:00-06:00'); // polls close 8 p.m. CT
  var now = new Date();
  var dismissed = false;
  try { dismissed = sessionStorage.getItem('leaseBarClosed') === '1'; } catch (e) {}
  if (!dismissed && now < ELECTION && !document.querySelector('.lease-bar')) {
    var msPerDay = 86400000;
    var days = Math.max(0, Math.ceil((ELECTION - now) / msPerDay));
    var bar = document.createElement('div');
    bar.className = 'lease-bar';
    var when = days <= 1 ? '<span class="lb-days">TODAY</span>' : '<span class="lb-days">' + days + ' days</span>';
    bar.innerHTML = '&#128499;&#65039; <strong>Lease renewal vote: Tuesday, Nov. 3.</strong> ' + when +
      ' left &middot; Early and mail voting are open now. <a href="lease-renewal.html">How to vote in Minnesota &rarr;</a>' +
      '<button class="lb-close" aria-label="Dismiss">&times;</button>';
    document.body.insertBefore(bar, document.body.firstChild);
    bar.querySelector('.lb-close').addEventListener('click', function () {
      bar.remove();
      try { sessionStorage.setItem('leaseBarClosed', '1'); } catch (e) {}
    });
  }

  document.querySelectorAll('.copy-link').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var url = btn.getAttribute('data-url') || window.location.href;
      var done = function () { var t = btn.textContent; btn.textContent = 'Copied!'; setTimeout(function () { btn.textContent = t; }, 1600); };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(done, function () { window.prompt('Copy this link:', url); });
      } else { window.prompt('Copy this link:', url); }
    });
  });

  // Live countdown on the lease-renewal page
  var cd = document.getElementById('lease-countdown');
  if (cd) {
    var tick = function () {
      var d = ELECTION - new Date();
      if (d <= 0) { cd.innerHTML = '<div><b>0</b><span>Polls closed</span></div>'; return; }
      var dd = Math.floor(d / 86400000), hh = Math.floor(d / 3600000) % 24, mm = Math.floor(d / 60000) % 60;
      cd.innerHTML = '<div><b>' + dd + '</b><span>Days</span></div><div><b>' + hh + '</b><span>Hours</span></div><div><b>' + mm + '</b><span>Minutes</span></div>';
    };
    tick(); setInterval(tick, 30000);
  }
});
