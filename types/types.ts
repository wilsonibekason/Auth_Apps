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

export type { TypedAnimationProps, ClassType, FormField, Field, OtherFormTypes, InitialValuesType }