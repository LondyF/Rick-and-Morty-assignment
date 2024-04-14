import { TextField, TextFieldProps as MuiTextFieldProps } from "@mui/material";

import { useDebounce } from "../../hooks/use-debounce";
import { DEBOUNCE_DELAY } from "../../config";

type TextFieldProps = Omit<MuiTextFieldProps, "onChange" | "value">;

type Props = TextFieldProps & {
  filterValue?: string;
  onFilterValueChange: (value: string) => void;
};

const SearchFilter = ({ filterValue, onFilterValueChange, ...rest }: Props) => {
  const handleTextChange = useDebounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onFilterValueChange(event.target.value);
    },
    DEBOUNCE_DELAY
  );

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
