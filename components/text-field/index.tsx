import { TextField } from "@radix-ui/themes";

interface TextFieldProps {
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TextFieldComponent(
  { placeholder, onChange }: TextFieldProps = {
    placeholder: "",
    onChange: () => {},
  }
) {
  return (
    <div className="p-5">
      <TextField.Root>
        <TextField.Input placeholder={placeholder} onChange={onChange} />
      </TextField.Root>
    </div>
  );
}
