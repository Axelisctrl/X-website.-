// Smooth scroll for buttons

document.querySelectorAll("button").forEach(button => {

    button.addEventListener("click", function() {

        if (this.innerText.includes("Create") || 
            this.innerText.includes("Launch") ||
            this.innerText.includes("Get Started")) {

            alert(
            "Welcome to X Commerce Prototype 🚀\n\nYour AI-powered storefront is ready to be created."
            );

        }


        if (this.innerText.includes("Demo")) {

            alert(
            "Demo: A creator posts a product → AI creates a landing page → Customers buy inside X."
            );

        }


    });

});




// Add animation when sections appear

const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }


    });


},{

threshold:0.2

});



sections.forEach(section=>{


    section.style.opacity="0";
    section.style.transform="translateY(40px)";
    section.style.transition="0.8s ease";


    observer.observe(section);


});




// Simulated AI landing page generator


function generateStore(){


    console.log(
    "AI is generating your X Commerce landing page..."
    );


}
