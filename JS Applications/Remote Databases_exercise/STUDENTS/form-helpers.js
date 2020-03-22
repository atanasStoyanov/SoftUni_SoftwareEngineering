export function extractFormData(formRef, formConfiguration) {
    return formConfiguration.reduce((agr, inputName) => {
        agr[inputName] = formRef.elements[inputName].value;
        return agr;
    }, {});
}

export function clearForm(form) {
    form.reset();
}