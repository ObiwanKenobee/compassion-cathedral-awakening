
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { History } from "lucide-react";

interface HistoricalFigure {
  id: number;
  name: string;
  years: string;
  achievement: string;
  quote: string;
  reflection: string;
}

const figures: HistoricalFigure[] = [
  {
    id: 1,
    name: "Frederick Douglass",
    years: "1818-1895",
    achievement: "Escaped slavery to become a leading abolitionist, author, and statesman",
    quote: "If there is no struggle, there is no progress.",
    reflection: "How do you maintain hope and dignity in the face of systemic injustice?"
  },
  {
    id: 2,
    name: "Nelson Mandela",
    years: "1918-2013",
    achievement: "Transformed from prisoner to president, healing a divided nation",
    quote: "It always seems impossible until it's done.",
    reflection: "What role does forgiveness play in your journey to dignity?"
  },
  {
    id: 3,
    name: "Malala Yousafzai",
    years: "1997-Present",
    achievement: "Survived an assassination attempt to become a global advocate for education",
    quote: "One child, one teacher, one book, one pen can change the world.",
    reflection: "How can education empower you to create positive change?"
  }
];

const HistoryLantern = () => {
  return (
    <div className="page-container">
      <h1 className="section-title">History's Lantern</h1>
      <p className="section-subtitle mb-12">
        Illuminate your path with stories of transformation
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {figures.map((figure) => (
          <Card key={figure.id} className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <History className="w-5 h-5" />
                {figure.name}
                <span className="text-sm font-normal text-muted-foreground ml-auto">
                  {figure.years}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                {figure.achievement}
              </p>
              <blockquote className="border-l-2 pl-4 italic mb-6">
                "{figure.quote}"
              </blockquote>
              <div className="bg-background/50 p-4 rounded-lg mb-4">
                <h4 className="font-serif text-sm font-medium mb-2">Reflect & Resonate:</h4>
                <p className="text-sm text-muted-foreground">{figure.reflection}</p>
              </div>
              <Button className="w-full sacred-gradient">Journal Response</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HistoryLantern;
