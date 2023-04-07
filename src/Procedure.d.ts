interface Procedure {
    resourceType: string;
    identifier?: Identifier[];
    instantiatesCanonical?: string[];
    instantiatesUri?: string[];
    basedOn?: Reference<CarePlan | ServiceRequest>[];
    partOf?: Reference<MedicationAdministration | Observation | Procedure>[];
    status: string;
    statusReason?: CodeableConcept;
    category?: CodeableConcept[];
    code: CodeableConcept;
    subject: Reference<Device | Group | Location | Organization | Patient | Practitioner>;
    focus?: Reference<CareTeam | Group | Organization | Patient | Practitioner | PractitionerRole | RelatedPerson | Specimen>;
    encounter?: Reference<Encounter>;
    occurrenceDateTime?: string;
    occurrencePeriod?: Period;
    occurrenceString?: string;
    occurrenceAge?: Age;
    occurrenceRange?: Range;
    occurrenceTiming?: Timing;
    recorded?: string;
    recorder?: Reference<Patient | Practitioner | PractitionerRole | RelatedPerson>;
    reportedBoolean?: boolean;
    reportedReference?: Reference<Organization | Patient | Practitioner | PractitionerRole | RelatedPerson>;
    performer?: {
        function?: CodeableConcept;
        actor: Reference<CareTeam | Device | HealthcareService | Organization | Patient | Practitioner | PractitionerRole | RelatedPerson>;
        onBehalfOf?: Reference<Organization>;
        period?: Period;
    }[];
    location?: Reference<Location>;
    reason?: CodeableReference<Condition | DiagnosticReport | DocumentReference | Observation | Procedure>[];
    bodySite?: CodeableConcept[];
    outcome?: CodeableConcept;
    report?: Reference<Composition | DiagnosticReport | DocumentReference>[];
    complication?: CodeableReference<Condition>[];
    followUp?: CodeableConcept[];
    note?: Annotation[];
    focalDevice?: {
        action?: CodeableConcept;
        manipulated: Reference<Device>;
    }[];
    used?: CodeableReference<BiologicallyDerivedProduct | Device | Medication | Substance>[];
    supportingInfo?: Reference<any>[];
}
