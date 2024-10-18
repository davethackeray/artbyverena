"use client";
import React from "react";

function MainComponent() {
  return (
    <div className="font-sans">
      <header className="bg-black text-white p-4">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold">ArtByVerena</div>
          <div className="space-x-4">
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
            <a href="#" className="hover:text-gray-300">
              Commissions
            </a>
            <a href="#" className="hover:text-gray-300">
              Artwork
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <select className="bg-black text-white">
              <option>🇬🇧 English</option>
            </select>
            <button className="hover:text-gray-300">
              <i className="fas fa-shopping-cart"></i>
            </button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4">
        <section className="my-8">
          <h1 className="text-4xl font-bold mb-4">Good art changes lives</h1>
          <p className="text-xl mb-8">
            Art is a lot like love: hard to describe but easy to recognize. It's
            a language that speaks to our souls, conveying emotions and ideas in
            ways words often can't.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <img
              src="/portrait.jpg"
              alt="Intense portrait of a person with piercing eyes"
              className="w-full h-64 object-cover"
            />
            <img
              src="/landscape.jpg"
              alt="Serene landscape painting"
              className="w-full h-64 object-cover"
            />
            <img
              src="/abstract.jpg"
              alt="Vibrant abstract artwork"
              className="w-full h-64 object-cover"
            />
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">ARABELART CUSTOM</h2>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 mr-2">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </span>
            <span>(217 reviews)</span>
          </div>
          <p className="mb-4">
            Transform your cherished photos into stunning custom oil paintings!
            Our talented artists can recreate any image as a beautiful,
            hand-painted masterpiece.
          </p>
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
            View full details →
          </button>
        </section>

        <section className="my-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <i className="fas fa-clock text-3xl mb-2"></i>
            <p>Possible 24/7 progress preview</p>
          </div>
          <div className="text-center">
            <i className="fas fa-paint-brush text-3xl mb-2"></i>
            <p>Masterfully hand-painted canvas</p>
          </div>
          <div className="text-center">
            <i className="fas fa-truck text-3xl mb-2"></i>
            <p>Express painting when you need it</p>
          </div>
          <div className="text-center">
            <i className="fas fa-leaf text-3xl mb-2"></i>
            <p>Environmentally friendly materials used</p>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">ABOUT US</h2>
          <div className="flex flex-col md:flex-row items-center">
            <img
              src="/gallery.jpg"
              alt="Art gallery with paintings on display"
              className="w-full md:w-1/2 h-64 object-cover mb-4 md:mb-0 md:mr-4"
            />
            <p className="md:w-1/2">
              Welcome to Arabelart, where passion for art meets exceptional
              craftsmanship. We take pride in our ability to transform your
              cherished memories into stunning works of art. Our team of skilled
              artists is dedicated to capturing the essence of your photos,
              turning them into timeless masterpieces that you'll treasure for
              years to come.
            </p>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">NEWSLETTER</h2>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow border p-2"
              name="email"
            />
            <button type="submit" className="bg-black text-white px-6 py-2">
              Subscribe
            </button>
          </form>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">FAQs</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">ARTWORK</h3>
              <button className="w-full text-left py-2 border-b flex justify-between items-center">
                <span>Creating time</span>
                <i className="fas fa-plus"></i>
              </button>
            </div>
            <div>
              <h3 className="font-bold">RETURNS AND EXCHANGES</h3>
              <button className="w-full text-left py-2 border-b flex justify-between items-center">
                <span>Can I cancel my order?</span>
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-2">CUSTOMER SERVICE</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    FRAME DESCRIPTION
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    SHIPPING INFORMATION
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">SUPPORT & HELP</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    ABOUT US
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    CONTACT US
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">GET IN TOUCH</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    <i className="fab fa-facebook"></i> Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    <i className="fab fa-instagram"></i> Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-black text-white text-center py-2">
        <p>&copy; 2024 Arabelart</p>
      </div>
    </div>
  );
}

export default MainComponent;