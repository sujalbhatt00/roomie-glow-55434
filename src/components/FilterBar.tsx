import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

const FilterBar = () => {
  return (
    <section id="search" className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-xl shadow-medium p-6 border border-border">
          <h3 className="text-lg font-semibold mb-6">Refine Your Search</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <Label className="mb-2 block">Room Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Any type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="private">Private Room</SelectItem>
                  <SelectItem value="shared">Shared Room</SelectItem>
                  <SelectItem value="entire">Entire Place</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="mb-2 block">Move-in Date</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Anytime" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asap">ASAP</SelectItem>
                  <SelectItem value="month">Within a month</SelectItem>
                  <SelectItem value="3months">1-3 months</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="mb-2 block">Budget Range</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="500">$0 - $500</SelectItem>
                  <SelectItem value="1000">$500 - $1000</SelectItem>
                  <SelectItem value="1500">$1000 - $1500</SelectItem>
                  <SelectItem value="2000">$1500+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterBar;
