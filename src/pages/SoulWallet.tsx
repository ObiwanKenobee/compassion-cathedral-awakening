
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Wallet, Star } from "lucide-react";

interface VirtueStat {
  name: string;
  value: number;
  description: string;
}

interface DeedRecord {
  id: number;
  deed: string;
  impact: string;
  karmaPoints: number;
  date: string;
}

const virtueStats: VirtueStat[] = [
  {
    name: "Compassion",
    value: 75,
    description: "Ability to understand and share others' feelings"
  },
  {
    name: "Wisdom",
    value: 60,
    description: "Depth of understanding and good judgment"
  },
  {
    name: "Courage",
    value: 85,
    description: "Strength in facing difficulty or danger"
  }
];

const recentDeeds: DeedRecord[] = [
  {
    id: 1,
    deed: "Mentored a newcomer",
    impact: "Provided guidance and support",
    karmaPoints: 50,
    date: "2025-04-18"
  },
  {
    id: 2,
    deed: "Shared resources",
    impact: "Helped someone in need",
    karmaPoints: 30,
    date: "2025-04-17"
  }
];

const SoulWallet = () => {
  return (
    <div className="page-container">
      <h1 className="section-title">Soul Wallet</h1>
      <p className="section-subtitle mb-12">Track your spiritual growth and impact</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              Virtue Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {virtueStats.map((virtue) => (
                <div key={virtue.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{virtue.name}</span>
                    <span className="text-muted-foreground">{virtue.value}%</span>
                  </div>
                  <Progress value={virtue.value} className="mb-2" />
                  <p className="text-sm text-muted-foreground">{virtue.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wallet className="w-5 h-5" />
              Recent Sacred Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentDeeds.map((deed) => (
                <div key={deed.id} className="p-4 bg-background/50 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">{deed.deed}</h4>
                    <span className="text-sm text-gold">+{deed.karmaPoints} karma</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{deed.impact}</p>
                  <time className="text-xs text-muted-foreground">{deed.date}</time>
                </div>
              ))}
              <Button className="w-full sacred-gradient">Record New Action</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SoulWallet;
