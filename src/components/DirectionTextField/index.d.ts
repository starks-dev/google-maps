import React from 'react';

export interface DirectionTextFieldProps {
  /**
   * ID
   */
  private id: string;

  /**
   * Label
   */
  private label: string;
}

export class DirectionTextField extends React.Component<
  DirectionTextFieldProps
> {}
