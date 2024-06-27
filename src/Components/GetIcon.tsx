import * as Icons from '@/Icons';
import React from 'react';

interface GetIconProps extends React.SVGProps<SVGSVGElement> {
  icon: string;
}

export const GetIcon: React.FC<GetIconProps> = ({ icon, ...props }) => {
  const IconComponent = Icons[icon];

  if (!IconComponent) return null;

  return <IconComponent {...props} />;
};
