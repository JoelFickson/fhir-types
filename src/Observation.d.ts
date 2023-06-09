interface Observation {
    resourceType: "Observation";
    identifier?: Identifier[];
    instantiatesCanonical?: string;
    instantiatesReference?: Reference<ObservationDefinition>;
    basedOn?: Reference<CarePlan | DeviceRequest | ImmunizationRecommendation | MedicationRequest | NutritionOrder | ServiceRequest>[];
    triggeredBy?: {
        observation: Reference<Observation>;
        type: string;
        reason?: string;
    }[];
    partOf?: Reference<GenomicStudy | ImagingStudy | Immunization | MedicationAdministration | MedicationDispense | MedicationStatement | Procedure>[];
    status: string;
    category?: CodeableConcept[];
    code: CodeableConcept;
    subject: Reference<BiologicallyDerivedProduct | Device | Group | Location | Medication | NutritionProduct | Organization | Patient | Practitioner | Procedure | Substance>;
    focus?: Reference<any>[];
    encounter?: Reference<Encounter>;
    effectiveDateTime?: string;
    effectivePeriod?: Period;
    effectiveTiming?: Timing;
    effectiveInstant?: string;
    issued?: string;
    performer?: Reference<CareTeam | Organization | Patient | Practitioner | PractitionerRole | RelatedPerson>[];
    valueQuantity?: Quantity;
    valueCodeableConcept?: CodeableConcept;
    valueString?: string;
    valueBoolean?: boolean;
    valueInteger?: number;
    valueRange?: Range;
    valueRatio?: Ratio;
    valueSampledData?: SampledData;
    valueTime?: string;
    valueDateTime?: string;
    valuePeriod?: Period;
    valueAttachment?: Attachment;
    valueReference?: Reference<MolecularSequence>;
    dataAbsentReason?: CodeableConcept;
    interpretation?: CodeableConcept[];
    note?: Annotation[];
    bodySite?: CodeableConcept;
    bodyStructure?: Reference<BodyStructure>;
    method?: CodeableConcept;
    specimen?: Reference<Group | Specimen>;
    device?: Reference<Device | DeviceMetric>;
    referenceRange?: {
        low?: Quantity;
        high?: Quantity;
        normalValue?: CodeableConcept;
        type?: CodeableConcept;
        appliesTo?: CodeableConcept[];
        age?: Range;
        text?: string;
    }[];
    hasMember?: Reference<MolecularSequence | Observation | QuestionnaireResponse>[];
    derivedFrom?: Reference<DocumentReference | GenomicStudy | ImagingSelection | ImagingStudy | MolecularSequence | Observation | QuestionnaireResponse>[];
    component?: {
        code: CodeableConcept;
        valueQuantity?: Quantity;
        valueCodeableConcept?: CodeableConcept;
        valueString?: string;
        valueBoolean?: boolean;
        valueInteger?: number;
        valueRange?: Range;
        valueRatio?: Ratio;
        valueSampledData?: SampledData;
        valueTime?: string;
        valueDateTime?: string;
        valuePeriod?: Period;
        valueAttachment?: Attachment;
        valueReference?: Reference<MolecularSequence>;
        dataAbsentReason?: CodeableConcept;
        interpretation?: CodeableConcept[];
        referenceRange?: {
            low?: Quantity;
            high?: Quantity;
            normalValue?: CodeableConcept;
            type?: CodeableConcept;
            appliesTo?: CodeableConcept[];
            age?: Range;
            text?: string;
        }[];
    }[];
}
