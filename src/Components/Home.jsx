import React from "react";
import { ShoppingCart, Heart } from "lucide-react";


const HomePage = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative w-full h-96 bg-blue-500 text-white flex items-center justify-center text-center">
        <div>
          <h2 className="text-4xl font-bold">Discover the Latest Trends</h2>
          <p className="mt-2">Shop the best products at unbeatable prices</p>
          <Button className="mt-4 bg-white text-blue-500">Shop Now</Button>
        </div>
      </div>

      {/* Featured Products */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4">Featured Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <Card key={item} className="bg-white p-4 shadow-md">
              <CardContent>
                <img src="/placeholder.jpg" alt="Product" className="w-full h-40 object-cover mb-2 rounded-md" />
                <h4 className="text-lg font-semibold">Product Name</h4>
                <p className="text-gray-500">$99.99</p>
                <Button className="mt-2 w-full">Add to Cart</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;