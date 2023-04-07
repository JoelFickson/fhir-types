interface RelatedPerson {
    resourceType: "RelatedPerson";
    id?: string;

    identifier?: Identifier[];
    active?: boolean;
    patient: Reference<Patient>;
    relationship?: CodeableConcept[];
    name?: HumanName[];
    telecom?: ContactPoint[];
    gender?: "male" | "female" | "other" | "unknown";
    birthDate?: Date;
    address?: Address[];
    photo?: Attachment[];
    period?: Period;
    communication?: {
        language: CodeableConcept;
        preferred?: boolean;
    }[];
}
