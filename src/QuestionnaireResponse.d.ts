interface QuestionnaireResponse {
    resourceType: "QuestionnaireResponse";
    identifier?: Identifier[];
    basedOn?: Reference<CarePlan | ServiceRequest>[];
    partOf?: Reference<Observation | Procedure>[];
    questionnaire: string;
    status: "in-progress" | "completed" | "amended" | "entered-in-error" | "stopped";
    subject?: Reference<any>;
    encounter?: Reference<Encounter>;
    authored?: string;
    author?: Reference<Device | Organization | Patient | Practitioner | PractitionerRole | RelatedPerson>;
    source?: Reference<Device | Organization | Patient | Practitioner | PractitionerRole | RelatedPerson>;
    item: QuestionnaireResponseItem[];
}

interface QuestionnaireResponseItem {
    linkId: string;
    definition?: string;
    text?: string;
    answer?: QuestionnaireResponseAnswer[];
    item?: QuestionnaireResponseItem[];
}

interface QuestionnaireResponseAnswer {
    valueBoolean?: boolean;
    valueDecimal?: number;
    valueInteger?: number;
    valueDate?: string;
    valueDateTime?: string;
    valueTime?: string;
    valueString?: string;
    valueUri?: string;
    valueAttachment?: Attachment;
    valueCoding?: Coding;
    valueQuantity?: Quantity;
    valueReference?: Reference<any>;
    item?: QuestionnaireResponseItem[];
}
