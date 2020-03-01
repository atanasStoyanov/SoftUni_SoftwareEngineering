function solve() {

    return {
        extend: function (template) {
            Object.keys(template)
                .forEach(prop => {
                    typeof template[prop] === 'function' ?
                        Object.getPrototypeOf(this)[prop] = template[prop] :
                        this[prop] = template[prop];
                });
        }
    }

}