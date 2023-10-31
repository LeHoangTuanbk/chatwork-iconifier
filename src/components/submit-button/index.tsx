import { experimental_useFormStatus as useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={pending ? "button button--disabled" : "button"}
    >
      {pending ? "Iconify..." : "Iconify ✨"}
    </button>
  );
}

export default SubmitButton;
