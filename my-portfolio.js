document.addEventListener('DOMContentLoaded', function () {
    const panels = document.querySelectorAll('.panel');

    for (let p of panels) {
        p.addEventListener('click', function () {
            console.log('clicked');
            this.classList.toggle('open');

            // Check if the clicked panel is panel3
            if (this.classList.contains('panel3')) {
                const panel3 = document.querySelector('.panel3'); // Retrieve panel3 dynamically
                const list = document.createElement('div');
                list.classList.add('list'); // Optional: Add a class for styling

                // Array of list items
                const items = ["Email address: alvin.shivere@grandview.edu", "LinkedIn Profile"];

				if (this.classList.contains('open')) {
                    // Iterate over the items and create list item elements
                    items.forEach(itemText => {
                        const listItem = document.createElement('div');

                        // Create a hyperlink for the second item
                        if (itemText.startsWith("LinkedIn")) {
                            const link = document.createElement('a');
                            link.href = "https://www.linkedin.com/in/alvin-shivere-8b5042185";
                            link.target = "_blank";
                            link.textContent = itemText;
                            listItem.appendChild(link);
                        } else {
                            listItem.textContent = itemText;
                        }
					 list.appendChild(listItem);
                    });

                    // Append the list to the element
                    panel3.appendChild(list);
                }
            }
        });
    }
});


