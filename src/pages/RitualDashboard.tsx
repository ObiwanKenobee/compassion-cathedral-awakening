
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VirtueMeter, { Virtue } from "@/components/VirtueMeter";
import PrayerCandle from "@/components/PrayerCandle";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Heart } from "lucide-react";

interface Practice {
  id: string;
  title: string;
  description: string;
  duration: string;
  completed: boolean;
}

const RitualDashboard = () => {
  const [dailyPractices, setDailyPractices] = useState<Practice[]>([
    {
      id: "1",
      title: "Morning Reflection",
      description: "Begin your day with 5 minutes of silent reflection on gratitude.",
      duration: "5 min",
      completed: false,
    },
    {
      id: "2",
      title: "Midday Pause",
      description: "Take a mindful break to breathe and reset your intentions.",
      duration: "3 min",
      completed: false,
    },
    {
      id: "3",
      title: "Evening Compassion",
      description: "Reflect on your interactions and extend forgiveness to yourself and others.",
      duration: "7 min",
      completed: false,
    },
  ]);

  const virtues: Virtue[] = [
    { name: "Compassion", value: 65 },
    { name: "Patience", value: 40 },
    { name: "Humility", value: 75 },
    { name: "Courage", value: 50 },
    { name: "Generosity", value: 60 },
  ];

  const toggleComplete = (id: string) => {
    setDailyPractices(prev => 
      prev.map(practice => 
        practice.id === id ? { ...practice, completed: !practice.completed } : practice
      )
    );
  };

  return (
    <div className="page-container mb-16">
      <h1 className="section-title">Ritual Dashboard</h1>
      <p className="section-subtitle mb-8">Your daily spiritual practices and growth tracker</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Tabs defaultValue="daily" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="daily">Daily Practice</TabsTrigger>
              <TabsTrigger value="weekly">Weekly Rituals</TabsTrigger>
              <TabsTrigger value="wisdom">Wisdom Scrolls</TabsTrigger>
            </TabsList>
            
            <TabsContent value="daily" className="space-y-6">
              <div className="glass-card p-6 rounded-xl mb-6 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Calendar className="text-sacred" />
                  <h3 className="font-serif text-lg">Today's Practices</h3>
                </div>
                <div className="text-sm text-muted-foreground flex items-center gap-2">
                  <Clock size={16} />
                  <span>15 minutes total</span>
                </div>
              </div>
              
              {dailyPractices.map((practice) => (
                <Card key={practice.id} className={practice.completed ? "bg-muted" : ""}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-serif flex justify-between">
                      <span>{practice.title}</span>
                      <span className="text-sm font-normal flex items-center gap-1">
                        <Clock size={14} />
                        {practice.duration}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{practice.description}</p>
                    <Button 
                      variant={practice.completed ? "outline" : "default"} 
                      className={practice.completed ? "" : "sacred-gradient"}
                      onClick={() => toggleComplete(practice.id)}
                    >
                      {practice.completed ? "Completed ✓" : "Begin Practice"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="weekly">
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif">Weekly Contemplation Rituals</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Your weekly deeper practices will appear here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="wisdom">
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif">Wisdom Scrolls</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Explore sacred texts and wisdom teachings from various traditions.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="space-y-8">
          <VirtueMeter virtues={virtues} />
          
          <div className="glass-card p-6 rounded-xl text-center">
            <h3 className="font-serif text-xl mb-4">Light a Prayer Candle</h3>
            <PrayerCandle />
            <p className="text-sm text-muted-foreground mt-4">
              Set an intention for yourself or hold someone in your thoughts.
            </p>
          </div>
          
          <div className="glass-card p-6 rounded-xl flex flex-col items-center">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="text-sacred" />
              <h3 className="font-serif text-xl">Compassion Challenge</h3>
            </div>
            <p className="text-sm text-center mb-4">
              Perform one act of compassion today for a stranger.
            </p>
            <Button variant="outline" className="w-full">Accept Challenge</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RitualDashboard;
