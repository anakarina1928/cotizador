
const generatingOptions = (element) => {
    return `<option value="${element}"> ${element} </option> `;
};

const defaultOption = msj => `<option value="todos" selected="selected"> ${msj} </option>`;

const insertHtmArray = (id, data, msj) => id.innerHTML = msj + data;

const sortByYear = (a, b) => {
    if (a.age > b.age) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  };

export{
    generatingOptions,
    insertHtmArray,
    sortByYear,
    defaultOption,
}

