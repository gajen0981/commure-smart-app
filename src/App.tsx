import { AppHeader, PatientCard, FhirHumanName } from "@commure/components-core";
import { CommureSmartApp, FhirDataQuery } from "@commure/components-data";
import { Bundle, Patient } from "@commure/fhir-types/r4/types";
import SMARTClient from "@commure/smart-core";
import { PatientList } from "./components/PatientList/PatientList";
import Dashboard from "./components/Dashboard/Dashboard";
import React from "react";
import { smartConfig } from "./config";
import { HOFSmartApp } from "./types";
import "./styles/all.scss";


const smartClient = new SMARTClient(smartConfig);

function App() {
  return <Dashboard />;
  // return (
  //   <>
  //     <AppHeader appName="Commure | Low-Code | SDKs" fixedToTop />
  //     <div className="app-container">
  //       <PatientList />
  //     </div>
  //   </>
  // );
}

const asSMARTApp: HOFSmartApp = WrappedComponent => props => (
  <CommureSmartApp client={smartClient}>
    <WrappedComponent {...props} />
  </CommureSmartApp>
);

export default asSMARTApp(App);
