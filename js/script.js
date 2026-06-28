window.addEventListener("load", function () {

    const form = document.getElementById("contactForm");

    if (!form) return;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Clear previous errors
        document.getElementById("nameError").textContent = "";
        document.getElementById("emailError").textContent = "";
        document.getElementById("subjectError").textContent = "";
        document.getElementById("messageError").textContent = "";

        let isValid = true;

        const name = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim().toLowerCase();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        // NAME validation
        if (name === "") {
            document.getElementById("nameError").textContent =
               "Full name is required.";
             isValid = false;
        }else if (name.length < 3) {
            document.getElementById("nameError").textContent =
             "Name must contain at least 3 characters.";
            isValid = false;
        }

        // EMAIL validation
        if (email === "") {
           document.getElementById("emailError").textContent =
             "Email is required.";
             isValid = false;
        }else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            document.getElementById("emailError").textContent =
              "Please enter a valid email address.";
               isValid = false;
        }

        // SUBJECT validation
        if (subject === "") {
            document.getElementById("subjectError").textContent =
               "Subject is required.";
                isValid = false;
        }else if (subject.length < 5) {
            document.getElementById("subjectError").textContent =
               "Subject must contain at least 5 characters.";
                isValid = false;
        }

        // MESSAGE validation
        if (message === "") {
            document.getElementById("messageError").textContent =
              "Message is required.";
               isValid = false;
        }else if (message.length < 20) {
            document.getElementById("messageError").textContent =
               "Message must contain at least 20 characters.";
                isValid = false;
        }

       if (isValid) {

       document.getElementById("successMessage").classList.remove("d-none");

       form.reset();

     setTimeout(function () {
        document.getElementById("successMessage").classList.add("d-none");
    }, 5000);

        
}

});

}); 
   
   


// ===============================
// BOOK CATEGORIES
// ===============================

const categories = {

    fiction: [
        {
            title: "The Alchemist",
            image: "images/alchemist.jpg",
            price: "KES 1,200",
            details: "book-details.html?book=alchemist"
        },
        {
            title: "A Thousand Splendid Suns",
            image: "images/a-thousand-splendid-suns.jpg",
            price: "KES 1,350",
            details: "book-details.html?book=thousand-splendid-suns"
        },
        {
            title: "Of Jade and Dragons",
            image: "images/of-jade-and-dragons.jpg",
            price: "KES 1,250",
            details: "book-details.html?book=of-jade-and-dragons"
        }
    ],

    nonfiction: [
        {
            title: "The Ultimate Guide to Rebuilding Civilization",
            image: "images/the-ultimate-guide-to-rebuilding-civilization.jpg",
            price: "KES 1,800",
            details: "book-details.html?book=the-ultimate-guide-to-rebuilding-civilization"
        }
    ],

    selfdevelopment: [
        {
            title: "Atomic Habits",
            image: "images/atomic-habits.jpg",
            price: "KES 1,500",
            details: "book-details.html?book=atomic-habits"
        },
        {
            title: "Rich Dad Poor Dad",
            image: "images/rich-dad-poor-dad.jpg",
            price: "KES 1,100",
            details: "book-details.html?book=rich-dad-poor-dad"
        }
    ],

    academic: [
        {
            title: "The Ultimate Guide to Rebuilding Civilization",
            image: "images/the-ultimate-guide-to-rebuilding-civilization.jpg",
            price: "KES 1,800",
            details: "book-details.html?book=the-ultimate-guide-to-rebuilding-civilization"
        }
    ],

    classics: [
        {
            title: "Pride and Prejudice",
            image: "images/pride-and-prejudice.jpg",
            price: "KES 1,100",
            details: "book-details.html?book=pride-and-prejudice"
        },
        {
            title: "Crime and Punishment",
            image: "images/crime-and-punishment.jpg",
            price: "KES 1,300",
            details: "book-details.html?book=crime-and-punishment"
        },
        {
            title: "To Kill a Mockingbird",
            image: "images/to-kill-a-mockingbird.jpg",
            price: "KES 1,300",
            details: "book-details.html?book=to-kill-a-mockingbird"
        },
        {
            title: "As Long as the Lemon Trees Grow",
            image: "images/as-long-as-the-lemon-trees-grow.jpg",
            price: "KES 1,400",
            details: "book-details.html?book=as-long-as-the-lemon-trees-grow"
        }
    ]
};
function showCategory(category) {

    const container = document.getElementById("categoryBooks");

    let html = "";

    categories[category].forEach(function(book) {

        html += `
            <div class="col-md-4 mb-4">
                <div class="card h-100">

                    <img src="${book.image}"
                         class="card-img-top"
                         alt="${book.title}">

                    <div class="card-body">

                        <h5 class="card-title">${book.title}</h5>

                        <p><strong>Price:</strong> ${book.price}</p>

                        <a href="${book.details}"
                           class="btn btn-primary">
                           View Details
                        </a>

                    </div>

                </div>
            </div>
        `;

    });

    container.innerHTML = html;

}
// ===============================
// SEARCH BOOKS
// ===============================

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const searchValue = searchInput.value.toLowerCase();

        const books = document.querySelectorAll(".book-card");

        books.forEach(function (book) {

            const title = book.querySelector(".card-title")
                              .textContent
                              .toLowerCase();

            if (title.includes(searchValue)) {
                book.style.display = "";
            } else {
                book.style.display = "none";
            }

        });

    });

}
