import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import VendorCard from "@/components/VendorCard";
import { Search, Filter } from "lucide-react";
import PageNavigation from "@/components/PageNavigation";
import Footer from "@/components/Footer";

const Vendors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedSpecialization, setSelectedSpecialization] = useState("All");
  const [sortBy, setSortBy] = useState("rating");

  const vendors = [
    {
      id: 1,
      name: "TechAfrica Academy",
      description: "Leading technology education provider specializing in web development, data science, and AI courses.",
      logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      rating: 4.8,
      totalStudents: 15420,
      totalCourses: 45,
      location: "Lagos, Nigeria",
      specializations: ["Technology", "Data Science", "AI"],
      verified: true,
      joinedDate: "January 2022"
    },
    {
      id: 2,
      name: "Business Leaders Institute",
      description: "Premium business education with focus on leadership, strategy, and entrepreneurship across Africa.",
      logo: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4",
      rating: 4.9,
      totalStudents: 8930,
      totalCourses: 28,
      location: "Cape Town, South Africa",
      specializations: ["Business", "Leadership", "Strategy"],
      verified: true,
      joinedDate: "March 2021"
    },
    {
      id: 3,
      name: "Creative Hub Kenya",
      description: "Design and creative arts education hub offering courses in graphic design, photography, and digital media.",
      logo: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      rating: 4.7,
      totalStudents: 6750,
      totalCourses: 32,
      location: "Nairobi, Kenya",
      specializations: ["Design", "Photography", "Digital Media"],
      verified: true,
      joinedDate: "August 2021"
    },
    {
      id: 4,
      name: "HealthCare Learning Center",
      description: "Specialized healthcare education provider offering medical training and public health courses.",
      logo: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
      rating: 4.6,
      totalStudents: 4320,
      totalCourses: 18,
      location: "Accra, Ghana",
      specializations: ["Health", "Medical Training", "Public Health"],
      verified: false,
      joinedDate: "June 2022"
    },
    {
      id: 5,
      name: "Digital Marketing Pro",
      description: "Expert digital marketing education with practical courses in SEO, social media, and e-commerce.",
      logo: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      rating: 4.5,
      totalStudents: 9840,
      totalCourses: 22,
      location: "Cairo, Egypt",
      specializations: ["Marketing", "SEO", "E-commerce"],
      verified: true,
      joinedDate: "November 2021"
    },
    {
      id: 6,
      name: "Education Innovation Hub",
      description: "Modern teaching methodologies and educational technology training for educators and administrators.",
      logo: "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a",
      rating: 4.8,
      totalStudents: 3210,
      totalCourses: 15,
      location: "Kigali, Rwanda",
      specializations: ["Education", "Teaching", "EdTech"],
      verified: true,
      joinedDate: "February 2022"
    }
  ];

  const locations = ["All", "Lagos, Nigeria", "Cape Town, South Africa", "Nairobi, Kenya", "Accra, Ghana", "Cairo, Egypt", "Kigali, Rwanda"];
  const specializations = ["All", "Technology", "Business", "Design", "Health", "Marketing", "Education"];

  const filteredVendors = vendors.filter(vendor => {
    const matchesSearch = vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vendor.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vendor.specializations.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesLocation = selectedLocation === "All" || vendor.location === selectedLocation;
    const matchesSpecialization = selectedSpecialization === "All" || 
                                 vendor.specializations.includes(selectedSpecialization);
    return matchesSearch && matchesLocation && matchesSpecialization;
  });

  const sortedVendors = [...filteredVendors].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating;
      case "students":
        return b.totalStudents - a.totalStudents;
      case "courses":
        return b.totalCourses - a.totalCourses;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-cyan-500">
      {/* Header */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Global Education Partners
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Connect with leading educational organizations and expert instructors from around the world
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="px-4 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Search */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search partners, specializations..."
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-300"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              {/* Location Filter */}
              <div>
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-gray-700">
                    {locations.map((location) => (
                      <SelectItem key={location} value={location} className="text-white hover:bg-gray-800">
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Specialization Filter */}
              <div>
                <Select value={selectedSpecialization} onValueChange={setSelectedSpecialization}>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Specialization" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-gray-700">
                    {specializations.map((spec) => (
                      <SelectItem key={spec} value={spec} className="text-white hover:bg-gray-800">
                        {spec}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Sort By */}
              <div>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-gray-700">
                    <SelectItem value="rating" className="text-white hover:bg-gray-800">Rating</SelectItem>
                    <SelectItem value="students" className="text-white hover:bg-gray-800">Students</SelectItem>
                    <SelectItem value="courses" className="text-white hover:bg-gray-800">Courses</SelectItem>
                    <SelectItem value="name" className="text-white hover:bg-gray-800">Name</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vendor Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 text-white">
            Showing {sortedVendors.length} education partners
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sortedVendors.map((vendor) => (
              <VendorCard key={vendor.id} vendor={vendor} />
            ))}
          </div>
          
          {sortedVendors.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-blue-100">No vendors found matching your criteria.</p>
              <Button 
                className="mt-4 bg-white text-purple-900 hover:bg-gray-100"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedLocation("All");
                  setSelectedSpecialization("All");
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>
      <PageNavigation />
      <Footer />
    </div>
  );
};

export default Vendors;