import * as React from 'react';

export interface GoogleMapsProps {
  /**
   * Element Id to inject Google Map
   */
  private elementId: string;

  /**
   * Color
   */
  private color?: string;

  /**
   * Render destinations Textfields
   */
  private destinations?: boolean;
}

export class GoogleMaps extends React.Component<GoogleMapsProps> {}
