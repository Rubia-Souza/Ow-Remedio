export interface DropDownItem<T> {
    text: string;
    value: T;
}

export const EmptyDropDownItem: DropDownItem<any> = {
    text: "",
    value: null,
}
