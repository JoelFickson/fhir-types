interface Person {
    resourceType: "Person";
    identifier?: Identifier[];
    active?: boolean;
    name?: HumanName[];
    telecom?: ContactPoint[];
    gender?: "male" | "female" | "other" | "unknown";
    birthDate?: Date;
    deceasedBoolean?: boolean;
    deceasedDateTime?: Date;
    address?: Address[];
    maritalStatus?: CodeableConcept;
    photo?: Attachment[];
    communication?: {
        language: CodeableConcept;
        preferred?: boolean;
    }[];
    managingOrganization?: {
        reference: string;
        display?: string;
    };
    link?: {
        target: {
            reference: string;
            display?: string;
        };
        assurance?: "level1" | "level2" | "level3" | "level4";
    }[];
}
