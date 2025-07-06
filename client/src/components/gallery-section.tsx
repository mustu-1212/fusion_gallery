export function GallerySection() {
  const products = [
    {
      id: 1,
      name: "LED Photo Frame",
      price: "₹1,999",
      image: "/images/WhatsApp Image 2025-07-06 at 15.58.28_567e755e_1751810786389.jpg",
      alt: "Beautiful LED illuminated photo frame with resin art",
    },
    {
      id: 2,
      name: "Golden Circle Photo Frame",
      price: "₹1,599",
      image: "/images/WhatsApp Image 2025-07-06 at 15.58.29_2a118f04_1751810786389.jpg",
      alt: "Golden circular resin photo frame with LED lights",
    },
    {
      id: 3,
      name: "Heart Photo Display",
      price: "₹1,799",
      image: "/images/WhatsApp Image 2025-07-06 at 15.58.29_83fe94c3_1751810786390.jpg",
      alt: "Heart-shaped resin photo display with golden accents",
    },
    {
      id: 4,
      name: "Floral Resin Art",
      price: "₹1,499",
      image: "/images/WhatsApp Image 2025-07-06 at 15.58.30_8aa0b1fb_1751810786390.jpg",
      alt: "Circular resin art with dried flowers and photo",
    },
    {
      id: 5,
      name: "Ocean Blue Resin Clock",
      price: "₹2,299",
      image: "/images/WhatsApp Image 2025-07-06 at 15.58.30_41f1edcb_1751810786390.jpg",
      alt: "Ocean blue resin clock with custom design",
    },
    {
      id: 6,
      name: "Golden Geode Clock",
      price: "₹2,999",
      image: "/images/WhatsApp Image 2025-07-06 at 15.58.30_c2101291_1751810786391.jpg",
      alt: "Luxury golden geode-style resin clock",
    },
    {
      id: 7,
      name: "Marble Style Clock",
      price: "₹2,199",
      image: "/images/WhatsApp Image 2025-07-06 at 15.58.32_4d3c8bab_1751810786391.jpg",
      alt: "Elegant marble-effect resin clock",
    },
    {
      id: 8,
      name: "Baby Memory Clock",
      price: "₹2,499",
      image: "/images/WhatsApp Image 2025-07-06 at 15.58.32_9c5adcef_1751810786391.jpg",
      alt: "Special baby memory clock with multiple photos",
    },
    {
      id: 9,
      name: "Dark Crystal Clock",
      price: "₹2,799",
      image: "/images/WhatsApp Image 2025-07-06 at 15.58.33_4065f99f_1751810786391.jpg",
      alt: "Dark crystal resin clock with gold accents",
    },
    {
      id: 10,
      name: "Multi-Photo Collage",
      price: "₹1,899",
      image: "/images/WhatsApp Image 2025-07-06 at 15.58.33_87143a90_1751810786392.jpg",
      alt: "Beautiful multi-photo resin collage frame",
    },
    {
      id: 11,
      name: "Clear Photo Display",
      price: "₹1,399",
      image: "/images/WhatsApp Image 2025-07-06 at 15.58.33_c43953ef_1751810786392.jpg",
      alt: "Clear resin photo display with dried flowers",
    },
    {
      id: 12,
      name: "Resin Photo Keychain",
      price: "₹299",
      image: "/images/WhatsApp Image 2025-07-06 at 15.58.34_558836d5_1751810786392.jpg",
      alt: "Small resin photo keychain with floral design",
    },
    {
      id: 13,
      name: "Custom Photo Stand",
      price: "₹899",
      image: "/images/WhatsApp Image 2025-07-06 at 15.58.34_c56f88c5_1751810786393.jpg",
      alt: "Custom resin photo stand with decorative elements",
    },
    {
      id: 14,
      name: "Miniature Photo Frame",
      price: "₹599",
      image: "/images/WhatsApp Image 2025-07-06 at 15.58.34_c62344c5_1751810786393.jpg",
      alt: "Miniature resin photo frame with elegant design",
    },
  ];

  return (
    <section id="gallery" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">Our Gallery</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our collection of handcrafted resin art pieces, each designed to capture life's most precious moments.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="gallery-card group">
              <img
                src={product.image}
                alt={product.alt}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-foreground">{product.name}</h3>
                <p className="text-2xl font-bold text-foreground">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
