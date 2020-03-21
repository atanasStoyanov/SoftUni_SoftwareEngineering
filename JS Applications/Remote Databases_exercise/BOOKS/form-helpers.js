export function extractFormData(formRef, formConfiguration) {
    return formConfiguration.reduce((agr, inputName) => {
        agr[inputName] = formRef.elements[inputName].value;
        return agr;
    }, {});
}

export function fillFormWithData(formRef, formInputsArr) {

    formInputsArr.map(([inputName, value]) => {
        formRef.querySelector(`#${inputName}`).value = value;
    });

}

export function clearForm(form) {
    form.reset();
}