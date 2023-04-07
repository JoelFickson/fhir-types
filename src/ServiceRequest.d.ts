interface ServiceRequest {
    resourceType: "ServiceRequest";
    identifier?: Identifier[];
    instantiatesCanonical?: string[];
    instantiatesUri?: string[];
    basedOn?: Reference[];
    replaces?: Reference[];
    requisition?: Identifier;
    status: "draft" | "active" | "on-hold" | "revoked" | "completed" | "entered-in-error" | "unknown";
    intent: "proposal" | "plan" | "directive" | "order";
    category?: CodeableConcept[];
    priority?: "routine" | "urgent" | "asap" | "stat";
    doNotPerform?: boolean;
    code: CodeableReference<ActivityDefinition | PlanDefinition>;
    orderDetail?: {
        parameterFocus: CodeableReference<BiologicallyDerivedProduct | Device | DeviceDefinition | DeviceRequest | Medication | MedicationRequest | Substance | SupplyRequest>;
        parameter: {
            code: CodeableConcept;
            valueQuantity?: Quantity;
            valueRatio?: Ratio;
            valueRange?: Range;
            valueBoolean?: boolean;
            valueCodeableConcept?: CodeableConcept;
            valueString?: string;
            valuePeriod?: Period;
        }[];
    }[];
    quantityQuantity?: Quantity;
    quantityRatio?: Ratio;
    quantityRange?: Range;
    subject: Reference<Device | Group | Location | Patient>;
    focus?: Reference[];
    encounter?: Reference<Encounter>;
    occurrenceDateTime?: string;
    occurrencePeriod?: Period;
    occurrenceTiming?: Timing;
    asNeededBoolean?: boolean;
    asNeededCodeableConcept?: CodeableConcept;
    authoredOn?: string;
    requester?: Reference<Device | Organization | Patient | Practitioner | PractitionerRole | RelatedPerson>;
    performerType?: CodeableConcept;
    performer?: Reference<CareTeam | Device | HealthcareService | Organization | Patient | Practitioner | PractitionerRole | RelatedPerson>[];
    location?: CodeableReference<Location>[];
    reason?: CodeableReference<Condition | DetectedIssue | DiagnosticReport | DocumentReference | Observation>[];
    insurance?: Reference<ClaimResponse | Coverage>[];
    supportingInfo?: CodeableReference<any>[];
    specimen?: Reference<Specimen>[];
    bodySite?: CodeableConcept[];
    bodyStructure?: Reference<BodyStructure>;
    note?: Annotation[];
    patientInstruction?: Array<{
        instructionMarkdown?: string;
        instructionReference?: Reference<DocumentReference>;
    }>;
    relevantHistory?: Reference<Provenance>[];
}
