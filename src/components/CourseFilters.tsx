import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, X } from "lucide-react";

interface CourseFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  difficulty: string;
  setDifficulty: (difficulty: string) => void;
  duration: string;
  setDuration: (duration: string) => void;
  onReset: () => void;
}

const CourseFilters = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  difficulty,
  setDifficulty,
  duration,
  setDuration,
  onReset
}: CourseFiltersProps) => {
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  const categories = ["All", "Technology", "Business", "Marketing", "Design", "Health", "Education"];
  const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];
  const durations = ["All", "0-2 hours", "3-10 hours", "11-20 hours", "20+ hours"];

  return (
    <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6">
      <div className="space-y-6">
        {/* Search and Basic Filters */}
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search courses, instructors, topics..."
                className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  size="sm"
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={
                    selectedCategory === category
                      ? "bg-white text-purple-900"
                      : "border-white/20 text-white hover:bg-white/10"
                  }
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
            
            <Button
              size="sm"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
              onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
            >
              <Filter className="h-4 w-4 mr-2" />
              Advanced
            </Button>
            
            <Button
              size="sm"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
              onClick={onReset}
            >
              <X className="h-4 w-4 mr-2" />
              Reset
            </Button>
          </div>
        </div>

        {/* Advanced Filters */}
        {showAdvancedFilters && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/20">
            {/* Price Range */}
            <div className="space-y-3">
              <Label className="text-white font-medium">Price Range</Label>
              <div className="px-3">
                <Slider
                  value={priceRange}
                  onValueChange={(value) => setPriceRange(value as [number, number])}
                  max={1000}
                  min={0}
                  step={50}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-blue-100 mt-2">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>

            {/* Difficulty Level */}
            <div className="space-y-3">
              <Label className="text-white font-medium">Difficulty Level</Label>
              <Select value={difficulty} onValueChange={setDifficulty}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Select difficulty" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-700">
                  {difficulties.map((level) => (
                    <SelectItem key={level} value={level} className="text-white hover:bg-gray-800">
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Duration */}
            <div className="space-y-3">
              <Label className="text-white font-medium">Duration</Label>
              <Select value={duration} onValueChange={setDuration}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-700">
                  {durations.map((dur) => (
                    <SelectItem key={dur} value={dur} className="text-white hover:bg-gray-800">
                      {dur}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default CourseFilters;