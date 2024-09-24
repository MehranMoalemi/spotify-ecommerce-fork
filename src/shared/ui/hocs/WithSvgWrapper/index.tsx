import React, { ComponentType, SVGAttributes } from 'react';

interface WithSVGWrapperProps extends SVGAttributes<SVGElement> {
  additionalStyles?: React.CSSProperties;
  additionalAttributes?: SVGAttributes<SVGElement>;
}

export function withSVGWrapper<P extends object>(
  WrappedComponent: ComponentType<P>
): React.FC<P & WithSVGWrapperProps> {
  return ({ additionalStyles, additionalAttributes, ...props }: WithSVGWrapperProps) => {
    const combinedStyles = { ...additionalStyles, ...props.style };
    const combinedAttributes = { ...additionalAttributes, ...props };

    return <WrappedComponent {...(combinedAttributes as P)} style={combinedStyles} />;
  };
}
