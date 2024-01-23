import { Button } from "@radix-ui/themes";
import TextFieldComponent from "../text-field";

interface FormComponentProps {
  action: () => void;
  placeholderField1: string;
  placeholderField2: string;
  onChangeField1?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeField2?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormComponent(
  {
    action,
    placeholderField1,
    placeholderField2,
    onChangeField1,
    onChangeField2,
  }: FormComponentProps = {
    action: () => {},
    placeholderField1: "",
    placeholderField2: "",
    onChangeField1: () => {},
    onChangeField2: () => {},
  }
) {
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    action();
  }
  return (
    <form
      className="flex flex-row items-center justify-between p-10 z-10"
      onSubmit={submit}
    >
      <TextFieldComponent
        placeholder={placeholderField1}
        onChange={onChangeField1}
      />
      <TextFieldComponent
        placeholder={placeholderField2}
        onChange={onChangeField2}
      />
      <Button
        type="submit"
        variant="classic"
        color="indigo"
        // className="bg-black text-white p-2 w-96 rounded-lg mt-4"
      >
        Submit
      </Button>
    </form>
  );
}
