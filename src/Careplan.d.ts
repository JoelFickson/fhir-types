interface CarePlan {
    resourceType: "CarePlan";
    identifier?: Identifier[];
    instantiatesCanonical?: string[];
    instantiatesUri?: string[];
    basedOn?: Reference<CarePlan | NutritionOrder | RequestOrchestration | ServiceRequest>[];
    replaces?: Reference<CarePlan>[];
    partOf?: Reference<CarePlan>[];
    status: "draft" | "active" | "on-hold" | "revoked" | "completed" | "entered-in-error" | "unknown";
    intent: "proposal" | "plan" | "order" | "option" | "directive";
    category?: CodeableConcept[];
    title?: string;
    description?: string;
    subject: Reference<Group | Patient>;
    encounter?: Reference<Encounter>;
    period?: Period;
    created?: string;
    custodian?: Reference<CareTeam | Device | Organization | Patient | Practitioner | PractitionerRole | RelatedPerson>;
    contributor?: Reference<CareTeam | Device | Organization | Patient | Practitioner | PractitionerRole | RelatedPerson>[];
    careTeam?: Reference<CareTeam>[];
    addresses?: CodeableReference<Condition>[];
    supportingInfo?: Reference<any>[];
    goal?: Reference<Goal>[];
    activity?: {
        performedActivity?: CodeableReference<any>[];
        progress?: Annotation[];
        plannedActivityReference?: Reference<Appointment | CommunicationRequest | DeviceRequest | ImmunizationRecommendation | MedicationRequest | NutritionOrder | RequestOrchestration | ServiceRequest | SupplyRequest | Task | VisionPrescription>;
    }[];
    note?: Annotation[];
}
