import * as yup from "yup";

export const todoDTO = yup.object({
    //description: yup.string().required('Description is required'),
    complete : yup.boolean().required('Complete is required')
});


