// Create products

// Retrieve products from localStorage or initialize if not present
let products = JSON.parse(localStorage.getItem("products")) || [
    {
      id: 1,
      artwork_Img:
        "https://imaraansheldon.github.io/allImages/ColorMyWorld/Impressionism/abandonedShip_GagikTadevosyan.jpg",
      artwork_Name: "Abandoned Ship",
      artwork_Artist: "Gagik Tadevosyan",
      artwork_Description:
        "'Abandoned Ship' by Gagik Tadevosyan is a captivating artwork that transports viewers to a desolate realm where time seems to have stopped. Through meticulous attention to detail and masterful use of light and shadow, Tadevosyan depicts a weathered vessel stranded in a barren landscape, evoking a sense of abandonment and mystery. The absence of life within the scene invites contemplation of the ship's hidden stories and histories, while the artist's skillful composition and texture add depth and dimension, drawing viewers into a world where reality and imagination merge. With its haunting beauty and thought-provoking themes, 'Abandoned Ship' stands as a testament to Tadevosyan's talent for evoking emotion and prompting reflection through his art.",
      artwork_Price: 4000,
      artwork_Theme: "Impressionism",
      button_View: "View Artwork",
      button_Add: "Add to Cart",
    },
    {
      id: 2,
      artwork_Img:
        "https://imaraansheldon.github.io/allImages/ColorMyWorld/Impressionism/frenchSiesta_YuriKortov.jpg",
      artwork_Name: "French Siesta",
      artwork_Artist: "Yuri Kortov",
      artwork_Description:
        "'French Siesta' by Yuri Kortov is a tranquil and charming portrayal of a quintessential French scene, encapsulating the essence of leisure and relaxation. With vibrant colors and playful brushstrokes, Kortov captures the idyllic atmosphere of a sun-drenched café, where patrons enjoy a moment of respite from the bustle of everyday life. The warm sunlight filters through the foliage, casting dappled shadows on the cobblestone streets and adding to the scene's inviting allure. Through his skillful composition and attention to detail, Kortov invites viewers to immerse themselves in the scene.",
      artwork_Price: 3200,
      artwork_Theme: "Impressionism",
      button_View: "View Artwork",
      button_Add: "Add to Cart",
    },
    {
      id: 3,
      artwork_Img:
        "https://imaraansheldon.github.io/allImages/ColorMyWorld/Impressionism/CatherineLaRose_YuriKortov.jpg",
      artwork_Name: "Catherine La Rose",
      artwork_Artist: "Yuri Kortov",
      artwork_Description:
        "'Catherine La Rose' by Yuri Kortov is a captivating art piece that transcends traditional boundaries with its unique blend of surrealism and romanticism. In this mesmerizing composition, Kortov skillfully intertwines elements of dreamlike landscapes with intricate floral motifs, creating a sense of enchantment and mystery. The central figure, Catherine, exudes an aura of elegance and grace, her presence accentuated by the delicate roses that envelop her form. Through masterful use of color and texture, Kortov imbues the piece with a sense of ethereal beauty, inviting viewers into a world where reality and fantasy converge. 'Catherine La Rose' stands as a testament to Kortov's artistic vision and his ability to evoke emotions and provoke contemplation through his evocative imagery.",
      artwork_Price: 3000,
      artwork_Theme: "Impressionism",
      button_View: "View Artwork",
      button_Add: "Add to Cart",
    },
    {
      id: 4,
      artwork_Img:
        "https://imaraansheldon.github.io/allImages/ColorMyWorld/Expressivism/nurAin.jpg",
      artwork_Name: "Nur Ain",
      artwork_Artist: "Illyna Samaai",
      artwork_Description:
        "In Illyna Samaai's expressive portrayal, a woman enveloped in a vibrant hijab emerges as a symbol of concealed resilience and profound emotion. With bold strokes and vivid hues characteristic of expressivism, Samaai captures the enigmatic allure of the veiled figure, whose obscured face hints at inner depths yet to be explored. The hijab, adorned with a riot of colors, becomes a dynamic expression of identity and defiance, shrouding the woman's features while imbuing her presence with an undeniable sense of strength and purpose. Through this striking composition, Samaai invites viewers to contemplate the complexities of cultural identity and the silent struggles faced by individuals navigating the intersection of tradition and personal agency.",
      artwork_Price: 2900,
      artwork_Theme: "Expressivism",
      button_View: "View Artwork",
      button_Add: "Add to Cart",
    },
  ];

  // Save products to localStorage
  localStorage.setItem("products", JSON.stringify(products));
//   Date on footer
  document.querySelector('[current-year]').textContent = new Date().getUTCFullYear()
  
  // Function to display recent products
 // Function to display recent products
function recentProducts() {
    try {
      let arrSize = products.length;
      let latestProducts = products.slice(0, arrSize >> 1); // Slice the array to get the latest 3 products
      let wrapper = document.querySelector('[data-info]');
  
      latestProducts.forEach(product => {
        wrapper.innerHTML += `
          <div class="col-3">
            <img src="${product.artwork_Img}" alt="${product.artwork_Name}">
            <div class="d-flex flex-column">
              <p>${product.artwork_Name}</p>
              <p>${product.artwork_Artist}</p>
              <p>$${product.artwork_Price}</p>
            </div>
          </div>
        `;
      });
    } catch (e) {
      let wrapper = document.querySelector('[data-info]');
      wrapper.innerHTML = "Please Contact Our Administrator";
      setTimeout(() =>{
        location.reload(), 2000
      })
    }
  }
  
  // Call the function to display recent products
  recentProducts();

