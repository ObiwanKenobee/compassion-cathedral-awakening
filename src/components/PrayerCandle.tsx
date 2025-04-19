
import { useState } from 'react';
import { Flame } from 'lucide-react';  // Changed from 'Candle' to 'Flame'
import { Button } from '@/components/ui/button';
import { 
  Dialog, 
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

interface PrayerCandleProps {
  className?: string;
}

const PrayerCandle = ({ className }: PrayerCandleProps) => {
  const [isLit, setIsLit] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [intention, setIntention] = useState('');

  const handleLightCandle = () => {
    if (!isLit) {
      setDialogOpen(true);
    } else {
      setIsLit(false);
      toast('Your candle has been extinguished');
    }
  };

  const handleSetIntention = () => {
    if (intention.trim()) {
      setIsLit(true);
      setDialogOpen(false);
      toast('Your candle has been lit with your intention');
    }
  };

  return (
    <>
      <div className={`flex flex-col items-center ${className}`}>
        <Button
          variant="ghost"
          size="lg"
          className="flex flex-col items-center gap-2 h-auto p-4"
          onClick={handleLightCandle}
        >
          <div className={`relative ${isLit ? 'animate-candle-flicker' : ''}`}>
            <Flame size={42} className={isLit ? 'text-gold' : 'text-muted-foreground'} />
            {isLit && (
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-8 bg-gradient-to-t from-gold-light to-transparent rounded-full animate-pulse-glow"></div>
            )}
          </div>
          <span className="text-sm font-serif">
            {isLit ? 'Extinguish Candle' : 'Light a Candle'}
          </span>
        </Button>
        {isLit && (
          <p className="text-sm text-muted-foreground mt-2 max-w-[220px] text-center">
            {intention}
          </p>
        )}
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="font-serif">Set Your Intention</DialogTitle>
            <DialogDescription>
              Write your prayer, wish, or intention as you light this candle.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Textarea
              placeholder="I light this candle for..."
              value={intention}
              onChange={(e) => setIntention(e.target.value)}
              className="resize-none"
              rows={5}
            />
          </div>
          <DialogFooter>
            <Button
              onClick={handleSetIntention}
              className="sacred-gradient"
              disabled={!intention.trim()}
            >
              Light Candle
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PrayerCandle;
