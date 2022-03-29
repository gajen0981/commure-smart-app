import { AppHeader, PatientCard } from "@commure/components-core";
import { CommureSmartApp, FhirDataQuery } from "@commure/components-data";
import { Bundle, Patient } from "@commure/fhir-types/r4/types";
import SMARTClient from "@commure/smart-core";
import React from "react";
import "./App.css";
import { smartConfig } from "./config";

const smartClient = new SMARTClient(smartConfig);

function App() {
  return (
    <CommureSmartApp client={smartClient}>
      <AppHeader appName="Commure | Low-Code | SDKs" fixedToTop />
      <div className="hello-world-container">

        <FhirDataQuery queryString="Patient">
          {({ data, loading }) => {
            if (loading) {
              return "Loading...";
            }
            if (!data) {
              return "Error loading data!";
            }
            const entries = (data as Bundle).entry!;
            if (!entries) {
              return "Data is empty! (Forgot to import?)";
            }
            /* Rendering each of the patients below here */
            const patients: Patient[] = entries.map(
              (value) => value.resource as Patient
            );
            return (
              <div>
                {patients.map((patient, index) => (
                  <PatientCard key={index} resource={patient} />
                ))}
              </div>
            );
          }}
        </FhirDataQuery>

      </div>
    </CommureSmartApp>
  );
}

export default App;
