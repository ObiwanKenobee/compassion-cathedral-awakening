
import { cn } from '@/lib/utils';
import { CircleUser } from 'lucide-react';

interface SoulAvatarProps {
  level?: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const SoulAvatar = ({ level = 1, className, size = 'md' }: SoulAvatarProps) => {
  // Calculate aura size and other properties based on level
  const getAuraColor = () => {
    if (level < 3) return 'bg-blue-400/20';
    if (level < 5) return 'bg-sacred/30';
    if (level < 7) return 'bg-purple-500/30';
    return 'bg-gold/30';
  };

  const sizes = {
    sm: { avatar: 'w-8 h-8', ring: 'w-10 h-10', outer: 'w-12 h-12' },
    md: { avatar: 'w-12 h-12', ring: 'w-16 h-16', outer: 'w-20 h-20' },
    lg: { avatar: 'w-20 h-20', ring: 'w-24 h-24', outer: 'w-28 h-28' },
  };

  return (
    <div className={cn('relative flex items-center justify-center', className)}>
      {/* Outer aura */}
      <div className={cn(
        'absolute rounded-full animate-pulse-glow',
        getAuraColor(),
        sizes[size].outer
      )} />
      
      {/* Inner aura/ring */}
      <div className={cn(
        'absolute rounded-full border-2',
        level > 4 ? 'border-gold' : 'border-sacred',
        sizes[size].ring
      )} />
      
      {/* Avatar */}
      <div className={cn('relative z-10', sizes[size].avatar)}>
        <CircleUser className="w-full h-full text-foreground" />
      </div>
      
      {/* Level indicator */}
      <div className="absolute bottom-0 right-0 bg-sacred text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center z-20">
        {level}
      </div>
    </div>
  );
};

export default SoulAvatar;
