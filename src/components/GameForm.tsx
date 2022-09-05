import { useForm, useField } from "react-form";

function TeamField() {
  const {
    meta: { error, isTouched, isValidating },
    getInputProps,
  } = useField("name", {});

  return (
    <>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        {...getInputProps()}
      />{" "}
      {isValidating ? (
        <em>Validating...</em>
      ) : isTouched && error ? (
        <em>{error}</em>
      ) : null}
    </>
  );
}

function AddressStreetField() {
  const {
    meta: { error, isTouched, isValidating },
    getInputProps,
  } = useField("address.street", {});

  return (
    <>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        {...getInputProps()}
      />{" "}
      {isValidating ? (
        <em>Validating...</em>
      ) : isTouched && error ? (
        <em>{error}</em>
      ) : null}
    </>
  );
}

export function GameForm() {
  // Use the useForm hook to create a form instance
  const {
    Form,
    meta: { isSubmitting, canSubmit },
  } = useForm({
    onSubmit: async (values, instance) => {
      // onSubmit (and everything else in React Form)
      // has async support out-of-the-box
      console.log("Huzzah!");
    },
    debugForm: false,
  });

  return (
    <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Name: <TeamField />
        </label>
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Address Street: <AddressStreetField />
        </label>
      </div>

      <div>
        <button type="submit" disabled={!canSubmit}>
          Submit
        </button>
      </div>

      <div>
        <em>{isSubmitting ? "Submitting..." : null}</em>
      </div>
    </Form>
  );
}
