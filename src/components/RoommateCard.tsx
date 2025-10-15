import { MapPin, Calendar, DollarSign } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface RoommateCardProps {
  name: string;
  age: number;
  occupation: string;
  location: string;
  budget: string;
  moveInDate: string;
  tags: string[];
  image?: string;
}

const RoommateCard = ({ 
  name, 
  age, 
  occupation, 
  location, 
  budget, 
  moveInDate, 
  tags,
  image 
}: RoommateCardProps) => {
  const initials = name.split(' ').map(n => n[0]).join('');

  return (
    <Card className="group hover:shadow-large transition-all duration-300 hover:-translate-y-1 border-border">
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <Avatar className="h-16 w-16 ring-2 ring-primary/10">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
              {initials}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-1">{name}, {age}</h3>
            <p className="text-sm text-muted-foreground">{occupation}</p>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <DollarSign className="h-4 w-4" />
            <span>{budget}/month</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{moveInDate}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Button className="w-full">View Profile</Button>
      </CardFooter>
    </Card>
  );
};

export default RoommateCard;
