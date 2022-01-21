export interface IDropdown {
  opts: {
    label: string;
    value: string;
  }[];
  onChange: (v: string) => void;
  placeholder?: string;
}
