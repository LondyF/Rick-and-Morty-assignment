import { TextField, TextFieldProps as MuiTextFieldProps } from "@mui/material";

type TextFieldProps = Omit<MuiTextFieldProps, "onChange" | "value">;

type Props = TextFieldProps & {
  filterValue?: string;
  onFilterValueChange: (value: string) => void;
};

const SearchFilter = ({ filterValue, onFilterValueChange, ...rest }: Props) => {
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onFilterValueChange(event.target.value);
  };

  return (
    <TextField
      fullWidth
      {...rest}
      type="text"
      onChange={handleTextChange}
      defaultValue={filterValue}
    />
  );
};

export default SearchFilter;
