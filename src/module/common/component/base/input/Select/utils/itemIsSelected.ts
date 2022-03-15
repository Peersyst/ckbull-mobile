export function itemIsSelected(value: unknown, selected: unknown | unknown[], multiple: boolean): boolean {
    if (!selected) return false;
    if (multiple) return !!(selected as unknown[]).find((v) => v === value);
    else return selected === value;
}