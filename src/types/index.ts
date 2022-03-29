import React from "react";

export type HOFSmartApp = <P>(
  WrappedComponent: React.FC<P>
) => (props: P) => React.ReactElement;

export type DashboardContextType =
  | {
      selectMenuItem: (id: string) => void;
    }
  | undefined;
  