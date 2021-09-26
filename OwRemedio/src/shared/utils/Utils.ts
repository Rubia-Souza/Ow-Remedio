export const addLeftZeros = (num: number, finalSize: number) => {
    let numString = num.toString();
    
    while (numString.length < finalSize) {
        numString = "0" + numString;
    }

    return numString;
};

export const createDumbKey = (): string => {
    return `${new Date().toISOString()}_${Math.random()}`;
};
