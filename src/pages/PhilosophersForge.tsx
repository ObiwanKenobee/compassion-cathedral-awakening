
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book } from "lucide-react";

interface Philosophy {
  id: number;
  name: string;
  description: string;
  keyPrinciples: string[];
  primaryText: string;
}

const philosophies: Philosophy[] = [
  {
    id: 1,
    name: "Stoicism",
    description: "Ancient Greek philosophy emphasizing personal ethics, rational thinking, and living in harmony with nature.",
    keyPrinciples: [
      "Focus on what you can control",
      "Practice self-discipline",
      "Accept what cannot be changed",
      "Live with virtue"
    ],
    primaryText: "Meditations by Marcus Aurelius"
  },
  {
    id: 2,
    name: "Ubuntu Philosophy",
    description: "'I am because we are.' African philosophy centered on our interconnectedness and shared humanity.",
    keyPrinciples: [
      "Collective solidarity",
      "Human dignity",
      "Compassionate action",
      "Community harmony"
    ],
    primaryText: "No Future Without Forgiveness by Desmond Tutu"
  },
  {
    id: 3,
    name: "Taoism",
    description: "Chinese philosophy and spirituality focusing on living in harmony with the Tao (the Way).",
    keyPrinciples: [
      "Flow with nature",
      "Find balance",
      "Practice non-action",
      "Embrace simplicity"
    ],
    primaryText: "Tao Te Ching by Lao Tzu"
  }
];

const PhilosophersForge = () => {
  return (
    <div className="page-container">
      <h1 className="section-title">Philosopher's Forge</h1>
      <p className="section-subtitle mb-12">
        Explore timeless wisdom traditions to forge your path
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {philosophies.map((philosophy) => (
          <Card key={philosophy.id} className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="w-5 h-5" />
                {philosophy.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                {philosophy.description}
              </p>
              <div className="space-y-2 mb-4">
                <h4 className="font-serif text-sm font-medium">Key Principles:</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  {philosophy.keyPrinciples.map((principle) => (
                    <li key={principle}>{principle}</li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 border-t">
                <p className="text-sm mb-4">
                  <span className="font-medium">Primary Text:</span> {philosophy.primaryText}
                </p>
                <Button className="w-full sacred-gradient">Begin Study</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PhilosophersForge;
