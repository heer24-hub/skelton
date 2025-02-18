   // Function to change the message when the button is clicked
  // document.getElementById("changeMessageButton").addEventListener("click", function() {
  //     const welcomeMessage = document.getElementById("welcomeMessage");
  //     welcomeMessage.textContent = "You clicked the button! Welcome to your interactive website!";
  // });


  // 1. Dynamically add styles to the page
  const style = document.createElement("style");
  style.innerHTML = `
      body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f4f4f4;
      }

      /* Navbar styles */
      nav {
          background-color: #333;
          color: white;
          padding: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
      }

      nav a {
          color: white;
          text-decoration: none;
          margin: 0 15px;
          font-size: 16px;
      }

      nav a:hover {
          color:rgb(76, 147, 175);
      }

      #logo {
          font-size: 24px;
          font-weight: bold;
      }

      /* Section styles */
      section {
          display: none;
          padding: 20px;
          text-align: center;
          margin: 20px;
      }

      /* Active section */
      .active {
          display: block;
      }

      footer {
          background-color: #333;
          color: white;
          text-align: center;
          padding: 10px;
          position: fixed;
          width: 100%;
          bottom: 0;
      }`;

  document.head.appendChild(style);

  // 2. Dynamically create HTML elements
  // Create Navbar
  const nav = document.createElement("nav");

  const logo = document.createElement("div");
  logo.id = "logo";
  logo.textContent = "My Logo";
  nav.appendChild(logo);

  const navLinks = document.createElement("div");
  navLinks.innerHTML = `
      <a href="#" id="homeLink">Home</a>
      <a href="#" id="productsLink">Products</a>
      <a href="#" id="aboutLink">About</a>
      <a href="#" id="contactLink">Contact Us</a>`;
  nav.appendChild(navLinks);

  document.body.appendChild(nav);

  // Create Content Sections
  const homeSection = document.createElement("section");
  homeSection.id = "homeSection";
  homeSection.classList.add("active");
  homeSection.innerHTML = "<h2>Home Page</h2><p>Welcome to the Home page!</p>";
  document.body.appendChild(homeSection);

  const productsSection = document.createElement("section");
  productsSection.id = "productsSection";
  productsSection.innerHTML = "<h2>Products Page</h2><p>Explore our amazing products here.</p>";
  document.body.appendChild(productsSection);

  const aboutSection = document.createElement("section");
  aboutSection.id = "aboutSection";
  aboutSection.innerHTML = "<h2>About Us</h2><p>Learn more about our company and mission.</p>";
  document.body.appendChild(aboutSection);

  const contactSection = document.createElement("section");
  contactSection.id = "contactSection";
  contactSection.innerHTML = "<h2>Contact Us</h2><p>Get in touch with us through this page.</p>";
  document.body.appendChild(contactSection);

  //Main content
  var header = `<h1 class="head">Three Types of Offers</h1>`;

  // Create Footer
  const footer = document.createElement("footer");
  footer.innerHTML = "&copy; 2025 My Dynamic Website";
  document.body.appendChild(footer);

  // 3. Add event listeners to Navbar Links for Navigation
  document.getElementById("homeLink").addEventListener("click", function(event) {
      event.preventDefault();
      setActiveSection('homeSection');
  });

  document.getElementById("productsLink").addEventListener("click", function(event) {
      event.preventDefault();
      setActiveSection('productsSection');
  });

  document.getElementById("aboutLink").addEventListener("click", function(event) {
      event.preventDefault();
      setActiveSection('aboutSection');
  });

  document.getElementById("contactLink").addEventListener("click", function(event) {
      event.preventDefault();
      setActiveSection('contactSection');
  });

  // Function to change active section
  function setActiveSection(sectionId) {
      // Hide all sections
      const sections = document.querySelectorAll("section");
      sections.forEach(section => section.classList.remove("active"));

      // Show the selected section
      const activeSection = document.getElementById(sectionId);
      activeSection.classList.add("active");
  }



let names = {}
names.firstName = "rahul";
names.lastName = "sumit";
names.fullName = "sunil prajapat";
names.friendName = "suresh";

console.log(names);

let object = {name : "heera",
    age: 34,
    height: "77cm", 
    fullName: function(){
        return this.name + ' ' + this.height
    }
 };
 console.log(object.name);


 const oBjECT = {
    model: 1919,
    car: "ferrari",
    color: "yellow",
 };
  oBjECT.color = "pink";
  oBjECT.car = "mustang"
  console.log(oBjECT.car);