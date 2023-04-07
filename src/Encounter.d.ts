interface Reference<T extends ResourceType> {
    reference?: string;
    type?: T;
    identifier?: Identifier;
    display?: string;
}
interface Encounter {
    resourceType: "Encounter";
    id?: string;
    meta?: Meta;
    implicitRules?: string;
    language?: string;
    text?: Narrative;
    contained?: Resource[];
    extension?: Extension[];
    modifierExtension?: Extension[];
    identifier?: Identifier[];
    status: string;
    class?: CodeableConcept[];
    priority?: CodeableConcept;
    type?: CodeableConcept[];
    serviceType?: CodeableReference<HealthcareService>[];
    subject: Reference<Group | Patient>;
    subjectStatus?: CodeableConcept;
    episodeOfCare?: Reference<EpisodeOfCare>[];
    basedOn?: Reference<CarePlan | DeviceRequest | MedicationRequest | ServiceRequest>[];
    careTeam?: Reference<CareTeam>[];
    partOf?: Reference<Encounter>;
    serviceProvider?: Reference<Organization>;
    participant?: {
        type?: CodeableConcept[];
        period?: Period;
        actor: Reference<Device | Group | HealthcareService | Patient | Practitioner | PractitionerRole | RelatedPerson>;
    }[];
    appointment?: Reference<Appointment>[];
    virtualService?: VirtualServiceDetail[];
    actualPeriod?: Period;
    plannedStartDate?: string;
    plannedEndDate?: string;
    length?: Duration;
    reason?: {
        use?: CodeableConcept[];
        value?: CodeableReference<Condition | DiagnosticReport | ImmunizationRecommendation | Observation | Procedure>[];
    }[];
    diagnosis?: {
        condition: CodeableReference<Condition>[];
        use?: CodeableConcept[];
    }[];
    account?: Reference<Account>[];
    dietPreference?: CodeableConcept[];
    specialArrangement?: CodeableConcept[];
    specialCourtesy?: CodeableConcept[];
    admission?: {
        preAdmissionIdentifier?: Identifier;
        origin?: Reference<Location | Organization>;
        admitSource?: CodeableConcept;
        reAdmission?: CodeableConcept;
        destination?: Reference<Location | Organization>;
        dischargeDisposition?: CodeableConcept;
    };
    location?: {
        location: Reference<Location>;
        status?: string;
        form?: CodeableConcept;
        period?: Period;
    }[];
}
