import { AppHeader, PatientCard, FhirHumanName } from "@commure/components-core";
import { CommureSmartApp, FhirDataQuery } from "@commure/components-data";
import { Bundle, Patient } from "@commure/fhir-types/r4/types";
import SMARTClient from "@commure/smart-core";
import { PatientList } from "./components/PatientList/PatientList";
import React from "react";
import { smartConfig } from "./config";
import "./styles/all.scss";


const smartClient = new SMARTClient(smartConfig);

function App() {
  return (
    <CommureSmartApp client={smartClient}>
      <AppHeader appName="Commure | Low-Code | SDKs" fixedToTop />
      <div className="app-container">
        <PatientList />
      </div>
    </CommureSmartApp>
  );
}

export default App;
