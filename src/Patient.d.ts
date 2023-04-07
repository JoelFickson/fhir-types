interface Identifier {
    use: "usual" | "official" | "temp" | "secondary" | "old";
    type: CodeableConcept;
    system: string;
    value: string;
    period?: Period;
    assigner?: {
        reference: string;
        display?: string;
    };
}

interface HumanName {
    use?: "usual" | "official" | "temp" | "nickname" | "anonymous" | "old" | "maiden";
    text?: string;
    family?: string;
    given?: string[];
    prefix?: string[];
    suffix?: string[];
    period?: Period;
}


interface ContactPoint {
    system?: "phone" | "fax" | "email" | "pager" | "url" | "sms" | "other";
    value?: string;
    use?: "home" | "work" | "temp" | "old" | "mobile";
    rank?: number;
    period?: Period;
}


interface Address {
    use?: "home" | "work" | "temp" | "old" | "billing";
    type?: "postal" | "physical" | "both";
    text?: string;
    line?: string[];
    city?: string;
    district?: string;
    state?: string;
    postalCode?: string;
    country?: string;
    period?: Period;
}


interface CodeableConcept {
    coding: Coding[];
    text?: string;
}

interface Coding {
    system?: string;
    version?: string;
    code?: string;
    display?: string;
    userSelected?: boolean;
}


interface Attachment {
    contentType?: string;
    language?: string;
    data?: string;
    url?: string;
    size?: number;
    hash?: string;
    title?: string;
    creation?: Date;
    height?: number;
    width?: number;
    frames?: number;
    duration?: number;
    pages?: number;
}

interface Period {
    start: Date;
    end?: Date;
}


interface PatientContact {
    relationship: CodeableConcept[];
    name: HumanName;
    telecom: ContactPoint[];
    address: Address;
    gender: "male" | "female" | "other" | "unknown";
    organization: {
        reference: string;
        display?: string;
    };
    period: Period;
}

interface PatientCommunication {
    language: CodeableConcept;
    preferred?: boolean;
}

interface PatientLink {
    other: {
        reference: string;
        display?: string;
    };
    type: "replaced-by" | "replaces" | "refer" | "seealso";
}

interface Patient {
    resourceType: "Patient";
    identifier: Identifier[];
    active: boolean;
    name: HumanName[];
    telecom: ContactPoint[];
    gender: "male" | "female" | "other" | "unknown";
    birthDate: string;
    deceasedBoolean?: boolean;
    deceasedDateTime?: string;
    address: Address[];
    maritalStatus?: CodeableConcept;
    multipleBirthBoolean?: boolean;
    multipleBirthInteger?: number;
    photo: Attachment[];
    contact?: PatientContact[];
    communication?: PatientCommunication[];
    generalPractitioner?: {
        reference: string;
        display?: string;
    }[];
    managingOrganization?: {
        reference: string;
        display?: string;
    };
    link?: PatientLink[];
}
