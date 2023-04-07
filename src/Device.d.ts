interface CodeableReference<T> {
    concept?: CodeableConcept;
    reference?: Reference;
}

interface Device {
    resourceType: "Device";
    id?: string;
    implicitRules?: string;
    language?: string;
    identifier?: Identifier[];
    displayName?: string;
    definition?: CodeableReference<DeviceDefinition>;
    udiCarrier?: DeviceUDICarrier[];
    status?: "active" | "inactive" | "entered-in-error";
    availabilityStatus?: CodeableConcept;
    biologicalSourceEvent?: Identifier;
    manufacturer?: string;
    manufactureDate?: string;
    expirationDate?: string;
    lotNumber?: string;
    serialNumber?: string;
    name?: DeviceName[];
    modelNumber?: string;
    partNumber?: string;
    category?: CodeableConcept[];
    type?: CodeableConcept[];
    version?: DeviceVersion[];
    conformsTo?: DeviceConformsTo[];
    property?: DeviceProperty[];
    mode?: CodeableConcept;
    cycle?: Count;
    duration?: Duration;
    owner?: Reference<Organization>;
    contact?: ContactPoint[];
    location?: Reference<Location>;
    url?: string;
    endpoint?: Reference<Endpoint>[];
    gateway?: CodeableReference<Device>[];
    note?: Annotation[];
    safety?: CodeableConcept[];
    parent?: Reference<Device>;
}

interface DeviceUDICarrier {
    deviceIdentifier: string;
    issuer: string;
    jurisdiction?: string;
    carrierAIDC?: string;
    carrierHRF?: string;
    entryType?: string;
}

interface DeviceName {
    value: string;
    type?: "registered-name" | "user-friendly-name" | "patient-reported-name";
    preferred?: boolean;
}

interface DeviceVersion {
    type?: CodeableConcept;
    component?: Identifier;
    installDate?: string;
    value: string;
}

interface DeviceConformsTo {
    category?: CodeableConcept;
    specification: CodeableConcept;
    version?: string;
}

interface DeviceProperty {
    type: CodeableConcept;
    valueQuantity?: Quantity;
    valueCodeableConcept?: CodeableConcept;
    valueString?: string;
    valueBoolean?: boolean;
    valueInteger?: number;
    valueRange?: Range;
    valueAttachment?: Attachment;
}
