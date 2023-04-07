interface Practitioner {
    resourceType: "Practitioner";
    identifier?: Identifier[];
    active?: boolean;
    name?: HumanName[];
    telecom?: ContactPoint[];
    gender?: "male" | "female" | "other" | "unknown";
    birthDate?: Date;
    deceasedBoolean?: boolean;
    deceasedDateTime?: Date;
    address?: Address[];
    photo?: Attachment[];
    qualification?: {
        identifier?: Identifier[];
        code: CodeableConcept;
        period?: Period;
        issuer?: {
            reference: string;
            display?: string;
        };
    }[];
    communication?: {
        language: CodeableConcept;
        preferred?: boolean;
    }[];
}
