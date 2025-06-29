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
const messageTemplates = {
  'boundary-waters': `I am writing to express my strong opposition to sulfide-ore copper mining in the Boundary Waters Canoe Area Wilderness. Scientific evidence overwhelmingly demonstrates that this type of mining poses an unacceptable risk to one of America's most pristine wilderness areas.

Key concerns:
- The proposed mining would threaten 1,100+ lakes and streams
- Sulfide mining generates acid mine drainage that can persist for 500+ years
- 70% of Minnesotans oppose this mining project
- The project threatens a $900M annual tourism economy
- The mining would impact critical wildlife habitats for 67 species of conservation concern

The potential short-term mining profits do not justify the long-term environmental destruction of this irreplaceable ecosystem.`,

  'mining': `I am writing to oppose proposed mining operations that threaten Minnesota's critical ecosystems and natural resources. These projects pose severe environmental and economic risks.

Key concerns:
- Potential contamination of critical watersheds
- Long-term environmental damage
- Threats to wildlife habitats
- Disproportionate benefits to foreign mining corporations
- Risks to local tourism and recreation economies

Mining projects should not come at the expense of Minnesota's natural heritage and long-term environmental health.`,

  'medicaid': `I am writing to oppose any attempts to privatize Minnesota's Medicaid system. This critical healthcare program serves 1.1 million vulnerable residents, including:
- 420,000+ children
- 175,000+ people with disabilities
- Seniors in nursing homes
- Rural residents with limited healthcare access

Privatization would:
- Reduce coverage for those who need it most
- Increase costs for vulnerable populations
- Prioritize corporate profits over patient care
- Potentially remove healthcare from 187+ families per billionaire tax cut

Healthcare is a human right, not a commodity to be sold to the highest bidder.`,

  'faa': `I am deeply concerned about efforts to privatize the Federal Aviation Administration and our national air traffic control system. This proposed privatization threatens public safety and puts corporate profits ahead of passenger protection.

Key concerns:
- Privatization could reduce critical safety standards
- 2.9 million Minnesota air travelers would be at risk
- Potential job losses for 450+ air traffic controllers
- Increased fees and reduced service to rural airports
- Compromising a safety system that has made U.S. aviation the safest in the world

Public safety should never be a profit-making opportunity.`,

  'economy': `I am writing to express my strong opposition to the destructive 25% tariffs on Canadian goods that are devastating Minnesota's border economy. These tariffs:
- Increase costs for Minnesota consumers
- Harm small businesses along the border
- Disrupt long-standing trade relationships
- Raise prices on essential goods like lumber, dairy, and groceries
- Potentially cost thousands of jobs in border communities

Trade should build relationships, not create artificial barriers that harm local economies. These tariffs undermine economic cooperation and hurt Minnesota families and businesses.`,

  'pardons': `I am writing to express my deep concern about the inappropriate use of presidential pardons, particularly for those involved in serious legal violations.

Key concerns:
- Pardons should not be a mechanism for avoiding accountability
- Justice must be applied equally to all individuals
- Pardoning those who have committed serious offenses undermines the rule of law
- There should be transparent and ethical standards for pardon considerations

The justice system should protect the rights of all citizens, not provide special treatment for those with political connections or financial resources.`,

  'polymet': `I am writing to oppose the PolyMet mining project that threatens the Lake Superior watershed. This project is unacceptable because:
- It risks 10% of the world's fresh surface water
- Involves foreign ownership with questionable connections
- Would generate 500+ years of potential water pollution
- Poses catastrophic risks to the St. Louis River ecosystem
- Cleanup costs estimated at $3-8 billion would fall on Minnesota taxpayers

The potential short-term profits do not justify the permanent environmental destruction of our critical water resources.`,

  'ssa': `I am writing to strongly oppose any attempts to privatize Social Security. This crucial program:
- Serves 1.1 million Minnesota seniors
- Prevents 87% of seniors from falling into poverty
- Provides an average benefit of $1,848 per month
- Is a guaranteed benefit earned through decades of work

Privatization would:
- Expose retirement savings to market volatility
- Reduce guaranteed benefits
- Increase management fees
- Put seniors' financial security at risk

Social Security is a promise to working Americans. It should be protected, not sold off to Wall Street.`,

  'national-forests': `I am writing to oppose aggressive logging plans in Minnesota's national forests. These forests are critical public resources that provide:
- Carbon sequestration (4.5 million tons annually)
- Wildlife habitat for 1,700+ species
- Clean water for 300+ communities
- Recreation for 8 million annual visitors

Excessive logging would:
- Destroy old-growth forests
- Disrupt critical ecosystems
- Reduce carbon capture capabilities
- Harm local tourism and recreation economies

Our national forests are a public trust, not a commodity to be clear-cut for short-term profits.`,

  'usps': `I am writing to oppose efforts to close rural post offices and reduce postal services. These services are critical for:
- 350,000+ rural residents
- 68,500+ residents receiving medications by mail
- 1,250+ small businesses
- 142,000+ mail-in ballot voters
- Rural community connectivity

Closing post offices would:
- Increase shipping costs
- Reduce access to essential services
- Harm small businesses
- Potentially disenfranchise rural voters

Rural communities deserve reliable postal services.`,


// Add this to the messageTemplates object in script.js:

'veterans': `I am writing to express my deep disappointment in your vote against the Honoring Our PACT Act (H.R. 3967) on March 3, 2022 (House Roll Call #57).

This legislation would have expanded healthcare access for 3.5 million veterans exposed to toxic burn pits, Agent Orange, and Gulf War toxins. The bill had overwhelming bipartisan support from the American people:
- 93% of likely voters supported the PACT Act
- 91% of Republicans supported it
- 92% of independents supported it
- 94% of Democrats supported it

Key concerns about your vote:
- 300,000+ Minnesota veterans rely on VA healthcare
- Veterans exposed to burn pits suffer from 23+ types of cancer and respiratory diseases
- Many veterans are dying while waiting for care they earned through their service
- The PACT Act would have provided the largest expansion of VA healthcare in decades

Your vote against this legislation contradicts your campaign promises to support our veterans. These brave men and women served our country and deserve the healthcare they were promised. They should not have to fight for care after fighting for our freedom.

I urge you to support future veteran healthcare legislation and explain to your constituents why you voted against caring for those who served.`,

 'democracy': `I am writing to express my strong opposition to your consistent votes against voting rights protections and democratic reforms.

The Freedom to Vote: John R. Lewis Act had broad bipartisan support from the American people:
- 63% of likely voters nationwide supported the legislation
- 62% of independents supported voting rights protections  
- Even 42% of Republicans favored these democratic reforms

Key concerns about your anti-democracy voting record:
- You voted against the Freedom to Vote: John R. Lewis Act
- You opposed election security funding measures
- You voted against campaign finance transparency requirements
- You supported voter roll purging that disproportionately affects communities of color
- You opposed automatic voter registration that would increase participation

Your votes consistently prioritize corporate interests over democratic participation. Minnesota has a proud tradition of high voter turnout and accessible elections - your efforts to restrict voting rights threaten this legacy.

I urge you to:
- Support future voting rights legislation
- Vote for election security measures
- Support campaign finance transparency
- Oppose voter suppression tactics
- Protect Minnesota's tradition of accessible voting

Democracy works best when everyone can participate. Please represent the will of your constituents, not just your wealthy donors.`,
  'snap':`I am writing to express my strong opposition to your support for massive cuts to the Supplemental Nutrition Assistance Program (SNAP) through the "One Big Beautiful Bill."

Your proposed legislation would devastate food assistance in Minnesota:
- Cut $300 billion from SNAP over 10 years (30% reduction)
- Strip food assistance from 453,900 Minnesotans (7.8% of our state)
- Cost Minnesota over $250 million annually in lost food assistance
- Force our state to cover federal funding gaps or watch families starve

The expanded work requirements are particularly harmful:
- Extend requirements from ages 18-49 to 18-64, targeting older workers
- Eliminate exemptions for parents with children 7+ years old
- Require 80 hours of work monthly even when jobs aren't available
- Ignore caregiving responsibilities and seasonal employment realities

Key concerns about the impact on MN-08:
- Iron Range seasonal workers will lose food assistance during off-seasons
- Rural parents with limited job opportunities will be kicked off SNAP
- Families with school-age children will lose critical protections
- Older adults (50-64) caring for elderly parents will face impossible choices

This legislation takes food from children and working families to fund tax cuts for billionaires. Over 3 million adults caring for 4+ million children would be at risk of losing food assistance nationwide.

Minnesota families deserve better than having to choose between feeding their children and caring for elderly parents. I urge you to:
- Oppose cuts to SNAP funding
- Reject expanded work requirements that ignore caregiving realities
- Protect exemptions for parents with school-age children
- Support policies that reduce hunger, not increase it

Food security is a basic human right, not a luxury to be cut for tax breaks.`,
  'other': `I am deeply concerned about the ongoing efforts to privatize and sell off public resources and services in Minnesota. These assets are critical to our communities and should be preserved for the public good.

My specific concerns include:
- Protection of natural resources
- Maintaining essential public services
- Preserving community infrastructure
- Preventing corporate exploitation of public assets

These resources belong to all Minnesotans and should not be sacrificed for short-term financial gains.`
};


// Corresponding subject lines for each topic
const topicSubjects = {
  'boundary-waters': 'Protect the Boundary Waters from Sulfide-Ore Mining',
  'mining': 'Stop Destructive Mining Projects in Minnesota',
  'medicaid': 'Protect Medicaid and Healthcare for Vulnerable Minnesotans',
  'faa': 'Oppose Privatization of Air Traffic Control and Aviation Safety',
  'economy': 'Stop Harmful Tariffs Destroying Minnesota\'s Border Economy',
  'pardons': 'Concerns About Presidential Pardons and Accountability',
  'polymet': 'Stop PolyMet Mining and Protect Lake Superior\'s Watershed',
  'ssa': 'Protect Social Security for Current and Future Retirees',
  'national-forests': 'Protect Minnesota\'s National Forests from Excessive Logging',
  'usps': 'Protect Rural Postal Services in Minnesota',
  'veterans': 'Support Healthcare for Veterans Exposed to Burn Pits - Reverse Your PACT Act Vote',
  'democracy': 'Protect Democracy and Voting Rights in Minnesota',
  'snap': 'Oppose SNAP Cuts That Would Harm 453,900 Minnesotans',
  'other': 'Preserve Minnesota\'s Public Resources and Services'
};

// Setup contact form functionality
function setupContactForm() {
  // Get DOM elements
  const topicSelect = document.getElementById('topic');
  const messageField = document.getElementById('message');
  const nameField = document.getElementById('name');
  const emailField = document.getElementById('email');
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
      if (!nameField.value || !emailField.value || !topicSelect.value || !messageField.value) {
        alert("Please fill out all fields before continuing.");
        return;
      }
      
      // Format subject line
      currentSubject = topicSubjects[topicSelect.value] || "Message from Constituent";
      emailSubject.textContent = currentSubject;
      
      // Format email body
      currentBody = `Dear Representative Stauber,

${messageField.value}

Sincerely,
${nameField.value}
${emailField.value}`;
      
      emailBody.textContent = currentBody;
      
      // Prepare full email text for copying
      fullEmailText = `To: stauber@mail.house.gov
Subject: ${currentSubject}

${currentBody}`;
      
      // Clear previous buttons
      modalButtons.innerHTML = '';
      
      // Set up for mobile or desktop
      if (isMobile) {
        deviceMessage.textContent = "We've detected you're on a mobile device.";
        
        // Create "Copy to Clipboard" button for mobile
        const copyBtn = document.createElement('button');
        copyBtn.className = 'modal-btn primary-btn';
        copyBtn.textContent = 'Copy Message';
        copyBtn.addEventListener('click', copyToClipboard);
        modalButtons.appendChild(copyBtn);
        
        // Create "Email App" button for mobile
        const emailAppBtn = document.createElement('button');
        emailAppBtn.className = 'modal-btn secondary-btn';
        emailAppBtn.textContent = 'Open Email App';
        emailAppBtn.addEventListener('click', function() {
          // Try to open the native email app
          window.location.href = `mailto:stauber@mail.house.gov?subject=${encodeURIComponent(currentSubject)}&body=${encodeURIComponent(currentBody)}`;
          
          // Close modal after a short delay to let the app open
          setTimeout(function() {
            modal.style.display = "none";
            document.body.classList.remove('modal-open');
          }, 500);
        });
        modalButtons.appendChild(emailAppBtn);
        
        helpText.textContent = "Tip: The 'Copy Message' button will copy everything you need, then you can paste it into your preferred email app.";
      } else {
        deviceMessage.textContent = "Send your message with your preferred email method:";
        
        // Create "Copy to Clipboard" button for desktop
        const copyBtn = document.createElement('button');
        copyBtn.className = 'modal-btn secondary-btn';
        copyBtn.textContent = 'Copy to Clipboard';
        copyBtn.addEventListener('click', copyToClipboard);
        modalButtons.appendChild(copyBtn);
        
        // Create Gmail button for desktop
        const gmailBtn = document.createElement('button');
        gmailBtn.className = 'modal-btn primary-btn';
        gmailBtn.innerHTML = '<i class="fab fa-google"></i> Use Gmail';
        gmailBtn.addEventListener('click', function() {
          const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=stauber@mail.house.gov&su=${encodeURIComponent(currentSubject)}&body=${encodeURIComponent(currentBody)}`;
          window.open(gmailUrl, '_blank');
          modal.style.display = "none";
          document.body.classList.remove('modal-open');
        });
        modalButtons.appendChild(gmailBtn);
        
        helpText.textContent = "Tip: If you use an email client like Outlook, click 'Copy to Clipboard' and paste into a new message.";
      }
      
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
// Listings page search functionality
function setupSearchFunctionality() {
  const searchForm = document.querySelector('.search-form');
  const searchInput = document.querySelector('.search-form input[name="q"]');
  const categorySelect = document.querySelector('.search-form select[name="category"]');
  const listingItems = document.querySelectorAll('.listing-item');
  
  // Only run if we're on a page with the search form and listings
  if (!searchForm || !listingItems.length) {
    return;
  }
  
  // Prevent the form from submitting and going to the error page
  searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedCategory = categorySelect.value;
    
    // If search is empty, show all listings
    if (!searchTerm && selectedCategory === 'all') {
      listingItems.forEach(item => {
        item.style.display = 'flex';
      });
      return;
    }
    
    // Filter listings based on search term and selected category
    listingItems.forEach(item => {
      const itemText = item.textContent.toLowerCase();
      const itemCategory = item.getAttribute('data-category');
      
      const matchesSearch = !searchTerm || itemText.includes(searchTerm);
      const matchesCategory = selectedCategory === 'all' || 
                             (selectedCategory === 'public' && (itemCategory === 'healthcare' || itemCategory === 'infrastructure')) ||
                             (selectedCategory === 'parks' && itemCategory === 'environment') ||
                             (selectedCategory === 'education' && itemText.includes('school')) ||
                             (selectedCategory === 'healthcare' && itemCategory === 'healthcare') ||
                             (selectedCategory === 'infrastructure' && itemCategory === 'infrastructure') ||
                             (selectedCategory === 'government' && itemText.includes('government'));
      
      if (matchesSearch && matchesCategory) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
    
    // Show a "no results" message if nothing matches
    const visibleListings = document.querySelectorAll('.listing-item[style="display: flex;"]');
    const noResultsMsg = document.querySelector('.no-results-message');
    
    if (visibleListings.length === 0) {
      // Create message if it doesn't exist
      if (!noResultsMsg) {
        const message = document.createElement('div');
        message.className = 'no-results-message';
        message.innerHTML = `
          <h3>No Assets Match Your Search</h3>
          <p>Don't worry! We're working on privatizing more public resources every day.</p>
          <p>Contact your local billionaire for custom asset acquisition.</p>
        `;
        document.querySelector('.listings-grid').appendChild(message);
      } else {
        noResultsMsg.style.display = 'block';
      }
    } else if (noResultsMsg) {
      noResultsMsg.style.display = 'none';
    }
  });
  
  // Real-time search as user types (optional)
  searchInput.addEventListener('input', function() {
    // Simulate a form submission as the user types
    // Add a small delay to prevent excessive filtering
    clearTimeout(searchInput.timer);
    searchInput.timer = setTimeout(function() {
      const event = new Event('submit');
      searchForm.dispatchEvent(event);
    }, 300);
  });
  
  // Real-time filtering when category changes
  categorySelect.addEventListener('change', function() {
    const event = new Event('submit');
    searchForm.dispatchEvent(event);
  });
}

// Add this to the event listeners at the top of the file
document.addEventListener('DOMContentLoaded', setupSearchFunctionality);
window.addEventListener('load', setupSearchFunctionality);

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

// SNAP Food Assistance listing page specific functions
function showSnapAlert() {
  alert("PREMIUM HUNGER INVESTMENT OPPORTUNITY: This massive food assistance liquidation is available exclusively to billionaires seeking tax cuts! Pete Stauber's plan cuts $300 billion from SNAP to fund tax breaks - literally taking food from 453,900 Minnesotans including children!");
}

function showSnapTourAlert() {
  alert("HUNGER ZONE TOUR SCHEDULED! Our agent Pete Stauber will showcase how to maximize childhood hunger while claiming to support working families. Please bring your tax cut calculator and ignore the crying children!");
}

// SNAP Impact calculator
function calculateSnapImpact() {
  // Get the selected billionaire income and cut severity
  const billionaireIncomeSelect = document.getElementById('billionaireIncomeSelect');
  const cutSeveritySelect = document.getElementById('cutSeveritySelect');
  
  if (!billionaireIncomeSelect || !cutSeveritySelect) return;
  
  const billionaireIncome = parseInt(billionaireIncomeSelect.value);
  const cutSeverity = parseInt(cutSeveritySelect.value);
  
  // Calculate typical tax cut for billionaire (roughly 3-5% of net worth annually)
  const taxCutPercentage = 0.04; // 4% average
  const annualTaxCut = billionaireIncome * taxCutPercentage;
  
  // Calculate how many families lose food assistance
  // Average SNAP benefit is about $1,800 per family per year
  const averageSnapBenefit = 1800;
  const familiesAffected = Math.round(annualTaxCut / averageSnapBenefit);
  
  // Adjust based on cut severity
  const adjustedFamilies = Math.round(familiesAffected * (cutSeverity / 30)); // Base on 30% cut
  
  // Update the results
  const taxCutResult = document.getElementById('taxCutResult');
  const familiesResult = document.getElementById('familiesResult');
  
  if (taxCutResult) {
    if (annualTaxCut >= 1000000000) {
      taxCutResult.textContent = '$' + (annualTaxCut / 1000000000).toFixed(1) + ' Billion';
    } else if (annualTaxCut >= 1000000) {
      taxCutResult.textContent = '$' + (annualTaxCut / 1000000).toFixed(1) + ' Million';
    } else {
      taxCutResult.textContent = '$' + annualTaxCut.toLocaleString();
    }
  }
  
  if (familiesResult) {
    familiesResult.textContent = adjustedFamilies.toLocaleString();
  }
}

// Initialize calculator on page load
document.addEventListener('DOMContentLoaded', function() {
  // Only run if we're on the SNAP page with the calculator
  if (document.querySelector('.roi-calculator') && 
      document.getElementById('billionaireIncomeSelect') && 
      document.getElementById('cutSeveritySelect')) {
    calculateSnapImpact();
  }
});


