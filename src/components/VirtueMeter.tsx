
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

export interface Virtue {
  name: string;
  value: number;
  color?: string;
}

interface VirtueMeterProps {
  virtues: Virtue[];
  className?: string;
}

const VirtueMeter = ({ virtues, className }: VirtueMeterProps) => {
  // Default colors if not provided
  const defaultColors = [
    'bg-sacred',
    'bg-gold',
    'bg-blue-400',
    'bg-green-400',
    'bg-purple-400',
  ];

  return (
    <div className={cn("glass-card p-6 rounded-xl", className)}>
      <h3 className="font-serif text-xl mb-4">Virtue Tracker</h3>
      <div className="space-y-4">
        {virtues.map((virtue, index) => (
          <div key={virtue.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-serif">{virtue.name}</span>
              <span className="text-sm font-medium">{virtue.value}%</span>
            </div>
            <Progress 
              value={virtue.value} 
              className={cn("h-2", virtue.color || defaultColors[index % defaultColors.length])}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtueMeter;
