
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Star } from "lucide-react";
import PrayerCandle from "@/components/PrayerCandle";

interface Mentor {
  id: number;
  name: string;
  tradition: string;
  rating: number;
  specialties: string[];
  description: string;
}

const mentors: Mentor[] = [
  {
    id: 1,
    name: "Sarah Chen",
    tradition: "Buddhist Psychology",
    rating: 4.9,
    specialties: ["Mindfulness", "Trauma Healing", "Compassion Practice"],
    description: "Integrating ancient wisdom with modern therapeutic approaches to foster healing and growth."
  },
  {
    id: 2,
    name: "David Miller",
    tradition: "Interfaith Counseling",
    rating: 4.8,
    specialties: ["Spiritual Direction", "Life Transitions", "Grief Support"],
    description: "Supporting individuals in their spiritual journey across different faith traditions."
  },
  {
    id: 3,
    name: "Amara Patel",
    tradition: "Vedantic Philosophy",
    rating: 4.7,
    specialties: ["Self-Inquiry", "Meditation", "Stress Relief"],
    description: "Guiding seekers through ancient wisdom traditions for modern life challenges."
  }
];

const CompassionMentor = () => {
  return (
    <div className="page-container">
      <h1 className="section-title">Find Your Compassion Mentor</h1>
      <p className="section-subtitle mb-12">Connect with guides who can support your journey to dignity</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {mentors.map((mentor) => (
          <Card key={mentor.id} className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {mentor.name}
                <span className="flex items-center text-sm">
                  <Star className="w-4 h-4 text-gold mr-1" />
                  {mentor.rating}
                </span>
              </CardTitle>
              <CardDescription>{mentor.tradition}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">{mentor.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {mentor.specialties.map((specialty) => (
                  <Badge key={specialty} variant="secondary">
                    {specialty}
                  </Badge>
                ))}
              </div>
              <Button className="w-full sacred-gradient">Schedule Session</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="glass-card p-8 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-serif mb-4">Light a Candle for Guidance</h2>
        <p className="text-muted-foreground mb-6">
          Set an intention for your mentorship journey
        </p>
        <PrayerCandle />
      </div>
    </div>
  );
};

export default CompassionMentor;
