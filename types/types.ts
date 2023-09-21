import { ObjectSchema } from "yup";
import { FormikHelpers } from "formik";

type UniqueId = string

interface TypedAnimationProps {
    text: string;
    typingSpeed: number;
}

type ClassType = { className?: string }

interface Field {
    id?: number;
    name: string;
    type: string;
    label: string;
    // validation?: (value: never) => string | undefined;
    placeholder?: string
}

interface FormField {
    data: Field[];
    validation?: ObjectSchema<any>;
    InputStyles?: string;
    ButtonStyles?: string;
    FormStyles?: string
    radioStyles?: string
}

interface OtherFormTypes<Values> {
    OnSubmit: (values: Values, formikHelpers: FormikHelpers<Values>) => void | Promise<void>
}


type InitialValuesType = {
    [key: string]: string
}

interface User {
    name?: string;
    given_name?: string;
    family_name?: string;
    middle_name?: string;
    nickname?: string;
    preferred_username?: string;
    profile?: string;
    picture?: string;
    website?: string;
    email?: string;
    email_verified?: boolean;
    gender?: string;
    birthdate?: string;
    zoneinfo?: string;
    locale?: string;
    phone_number?: string;
    phone_number_verified?: boolean;
    address?: string;
    updated_at?: string;
    sub?: string;
    [key: string]: any;
}

export type { TypedAnimationProps, ClassType, FormField, Field, OtherFormTypes, InitialValuesType, User }