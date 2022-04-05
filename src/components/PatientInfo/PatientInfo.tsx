import React from "react";

import Allergies from "../Allergies/Allergies";
import Condition from "../Condition/Condition";
import Fishbone from "../Fishbone/Fishbone";
import Medications from "../Medications/Medications";
import Vitals from "../Vitals/Vitals";
import { PatientCard } from "@commure/components-core";
import { FhirDataQuery } from "@commure/components-data";

interface Props {
  patientId: string;
}

const PatientInfo: React.FC<Props> = ({ patientId }) => {
  const baseClass = "patient-info";
  const baseProps = {
    baseClass,
    patientId
  };

  return (
    <div className={baseClass}>
      <div>
        <br/>
        <FhirDataQuery queryString={"Patient/" + patientId}>
          {({ data }) => (
            <PatientCard resource={data} />
          )}
        </FhirDataQuery>
      </div>

      <Medications {...baseProps} />

      <div className="column">
          <Condition {...baseProps} />
          <Allergies {...baseProps} />
      </div>

      <Vitals {...baseProps} />

      <h1>Labs</h1>
      <Fishbone {...baseProps} fishboneType="BMP" />
      <Fishbone {...baseProps} fishboneType="CBC" />
    </div>
  );
};

export default PatientInfo;
