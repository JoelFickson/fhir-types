interface Organization {
    resourceType: "Organization";
    id?: string;
    implicitRules?: string;
    language?: string;
    identifier?: Identifier[];
    active?: boolean;
    type?: CodeableConcept[];
    name?: string;
    alias?: string[];
    description?: string;
    telecom?: ContactPoint[];
    address?: Address[];
    partOf?: Reference<Organization>;
    contact?: ExtendedContactDetail[];
    endpoint?: Reference<Endpoint>[];
    qualification?: {
        identifier?: Identifier[];
        code?: CodeableConcept;
        period?: Period;
        issuer?: Reference<Organization>;
    }[];
}

interface Endpoint {
    resourceType: string;
    id?: string;
    implicitRules?: string;
    language?: string;
    identifier?: Identifier[];
    status: string;
    connectionType: CodeableConcept[];
    name?: string;
    description?: string;
    purpose?: CodeableConcept;
    managingOrganization?: Reference<Organization>;
    contact?: ContactPoint[];
    period?: Period;
    payload?: {
        type: CodeableConcept[];
        mimeType?: string[];
    }[];
    address: string;
    header?: string[];
}
