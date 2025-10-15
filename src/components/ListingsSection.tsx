import RoommateCard from "./RoommateCard";

const ListingsSection = () => {
  const sampleListings = [
    {
      name: "Sarah Johnson",
      age: 26,
      occupation: "Software Engineer",
      location: "Downtown, San Francisco",
      budget: "$1,200",
      moveInDate: "Feb 1, 2025",
      tags: ["Non-smoker", "Pet-friendly", "Clean", "Working Professional"],
    },
    {
      name: "Mike Chen",
      age: 24,
      occupation: "Graphic Designer",
      location: "Mission District, SF",
      budget: "$950",
      moveInDate: "Jan 15, 2025",
      tags: ["Creative", "Quiet", "Vegetarian", "Gym Enthusiast"],
    },
    {
      name: "Emily Davis",
      age: 28,
      occupation: "Marketing Manager",
      location: "Marina District, SF",
      budget: "$1,500",
      moveInDate: "March 1, 2025",
      tags: ["Organized", "Social", "Non-smoker", "Foodie"],
    },
    {
      name: "Alex Kumar",
      age: 25,
      occupation: "Data Analyst",
      location: "SOMA, San Francisco",
      budget: "$1,100",
      moveInDate: "Feb 15, 2025",
      tags: ["Tech", "Gamer", "Night Owl", "Cook"],
    },
    {
      name: "Jessica Lee",
      age: 27,
      occupation: "Teacher",
      location: "Sunset District, SF",
      budget: "$900",
      moveInDate: "Jan 20, 2025",
      tags: ["Early Bird", "Yoga", "Plant Lover", "Reader"],
    },
    {
      name: "David Martinez",
      age: 29,
      occupation: "Financial Analyst",
      location: "Financial District, SF",
      budget: "$1,400",
      moveInDate: "ASAP",
      tags: ["Professional", "Clean", "Fitness", "Travel"],
    },
  ];

  return (
    <section id="listings" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Roommates</h2>
          <p className="text-muted-foreground">
            Browse verified profiles and find your perfect match
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {sampleListings.map((listing, index) => (
            <RoommateCard key={index} {...listing} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListingsSection;
