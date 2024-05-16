import { Button, FileInput, Flex } from "@mantine/core";
import { useForm } from "@tanstack/react-form";
import React from "react";
import { useSheetUpload } from "../../hooks/useSheetUpload";
import classes from "./index.module.css";

type FormValues = {
  sheet: File | null;
};

export const FileUploadPage = () => {
  const {
    validateBasicSheetUpload,
    validateSheetContent,
    submitCharacterSheet,
  } = useSheetUpload();
  const form = useForm<FormValues>({
    defaultValues: {
      sheet: null,
    },
    onSubmit: ({ value }) => submitCharacterSheet(value.sheet!),
  });

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    form.handleSubmit();
  };

  return (
    <Flex
      component="main"
      align="center"
      justify="center"
      className={classes.sheetUpload}
    >
      <form onSubmit={onSubmit} className={classes.sheetUploadForm}>
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
              classNames={{
                label: classes.sheetUploadInputLabel,
              }}
            />
          )}
        </form.Field>

        <Button
          type="submit"
          fullWidth
          className={classes.sheetUploadSubmitButton}
        >
          Upload
        </Button>
      </form>
    </Flex>
  );
};
