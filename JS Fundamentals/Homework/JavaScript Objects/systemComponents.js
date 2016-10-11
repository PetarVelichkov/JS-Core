function systemComponents(input) {
    let systemData = new Map();
    for (let line of input) {
        let currentData = line.split(/\s*\|\s*/);
        let [system, component, subcomp] = [currentData[0], currentData[1], currentData[2]];
        if (!systemData.has(system)) {
            systemData.set(system, new Map())
        }
        if (!systemData.get(system).has(component)) {
            systemData.get(system).set(component, [])
        }
        systemData.get(system).get(component).push(subcomp);
    }
    function sortSystemComparator(sysA, sysB, catalogue) {
        let aComponents = catalogue.get(sysA).size;
        let bComponents = catalogue.get(sysB).size;
        if (aComponents > bComponents) return -1;
        if (aComponents < bComponents) return 1;

        return sysA.toLowerCase().localeCompare(sysB.toLocaleLowerCase());
    }

    let sortedKeys = Array.from(systemData.keys()).sort((a, b) => sortSystemComparator(a, b, systemData));
    for (let key of sortedKeys) {
        console.log(key);
        let sortedInnerKeys = Array.from(systemData.get(key).keys()).sort((p1,p2) => systemData.get(key).get(p2).length - systemData.get(key).get(p1).length);
        for (let inner of sortedInnerKeys) {
            console.log(`|||${inner}`);
            for (let subcomp of systemData.get(key).get(inner)) {
                console.log(`||||||${subcomp}`);
            }
        }
    }
}

systemComponents([
    "SULS | Main Site | Home Page",
    "SULS | Main Site | Login Page",
    "SULS | Main Site | Register Page",
    "SULS | Judge Site | Login Page",
    "SULS | Judge Site | Submittion Page",
    "Lambda | CoreA | A23",
    "SULS | Digital Site | Login Page",
    "Lambda | CoreB | B24",
    "Lambda | CoreA | A24",
    "Lambda | CoreA | A25",
    "Lambda | CoreC | C4",
    "Indice | Session | Default Storage",
    "Indice | Session | Default Security"]);
