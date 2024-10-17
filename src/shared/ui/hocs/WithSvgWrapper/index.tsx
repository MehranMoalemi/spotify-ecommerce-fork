import React, { ComponentType, SVGAttributes } from 'react';

interface WithSVGWrapperProps extends SVGAttributes<SVGElement> {
  additionalStyles?: React.CSSProperties;
  additionalAttributes?: SVGAttributes<SVGElement>;
}

export function withSVGWrapper<P extends object>(
  WrappedComponent: ComponentType<P>
): React.FC<P & WithSVGWrapperProps> {
  const WithSVGWrapper: React.FC<P & WithSVGWrapperProps> = ({ additionalStyles, additionalAttributes, ...props }) => {
    const combinedStyles = { ...additionalStyles, ...props.style };
    const combinedAttributes = { ...additionalAttributes, ...props };

    return <WrappedComponent {...(combinedAttributes as P)} style={combinedStyles} />;
  };

  WithSVGWrapper.displayName = `withSVGWrapper(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WithSVGWrapper;
}
