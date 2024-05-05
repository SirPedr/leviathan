import { Button, FileInput } from "@mantine/core";
import { useForm } from "@tanstack/react-form";
import React from "react";
import { useSheetUpload } from "../hooks/useSheetUpload";

type FormValues = {
  sheet: File | null;
};

export const FileUploadPage = () => {
  const { validateBasicSheetUpload, validateSheetContent } = useSheetUpload();
  const form = useForm<FormValues>({
    defaultValues: {
      sheet: null,
    },
    onSubmit: console.log,
  });

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    form.handleSubmit();
  };

  return (
    <form onSubmit={onSubmit}>
      <form.Field
        name="sheet"
        validators={{
          onSubmit: ({ value }) => validateBasicSheetUpload(value),
          onSubmitAsync: ({ value }) => validateSheetContent(value),
        }}
      >
        {(field) => (
          <FileInput
            name={field.name}
            value={field.state.value}
            onChange={field.handleChange}
            accept=".json"
            error={field.state.meta.errors[0]}
            label="Upload your character sheet"
            clearable
          />
        )}
      </form.Field>

      <Button type="submit">Upload</Button>
    </form>
  );
};
