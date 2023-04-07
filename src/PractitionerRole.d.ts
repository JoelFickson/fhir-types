interface Reference<T> {
    reference: string;
    type: string;
    identifier?: Identifier;
    display?: string;
}

interface ExtendedContactDetail {
    purpose: CodeableConcept;
    name?: HumanName[];
    telecom?: ContactPoint[];
    address?: Address;
    organization?: Reference<Organization>;
    period?: Period;

}

interface Availability {
    availableTime: {
        daysOfWeek: string[],
        allDay: boolean,
        availableStartTime: string,
        availableEndTime: string
    }[],
    notAvailableTime: {
        description: string,
        during: {
            start: string,
            end: string
        }
    }[]

}

interface PractitionerRole {
    resourceType: "PractitionerRole";
    identifier?: Identifier[];
    active?: boolean;
    period?: Period;
    practitioner?: {
        reference: string;
        display?: string;
    };
    organization?: {
        reference: string;
        display?: string;
    };
    code?: CodeableConcept[];
    specialty?: CodeableConcept[];
    location?: {
        reference: string;
        display?: string;
    }[];
    healthcareService?: {
        reference: string;
        display?: string;
    }[];
    contact?: ExtendedContactDetail[];
    characteristic?: CodeableConcept[];
    communication?: CodeableConcept[];
    availability?: Availability[];
    endpoint?: {
        reference: string;
        display?: string;
    }[];
}
