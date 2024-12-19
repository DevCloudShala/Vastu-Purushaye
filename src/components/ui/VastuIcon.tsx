import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface VastuIconProps {
  Icon: LucideIcon;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  animate?: boolean;
}

const sizeMap = {
  sm: 'h-6 w-6',
  md: 'h-8 w-8',
  lg: 'h-10 w-10',
  xl: 'h-12 w-12'
};

const VastuIcon: React.FC<VastuIconProps> = ({ 
  Icon, 
  size = 'md',
  className = '',
  animate = false 
}) => {
  const iconClass = `${sizeMap[size]} ${className}`;
  
  return animate ? (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className={`text-amber-600 ${iconClass}`}
    >
      <Icon />
    </motion.div>
  ) : (
    <div className={`text-amber-600 ${iconClass}`}>
      <Icon />
    </div>
  );
};

export default VastuIcon;