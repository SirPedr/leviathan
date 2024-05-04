import { Button, FileInput } from "@mantine/core";
import React from "react";
import { readSheetFile } from "../helpers/readSheetFile";

export const FileUploadPage = () => {
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const sheet = await readSheetFile(formData.get("sheet") as File);

    console.log(sheet);
  };

  return (
    <form onSubmit={onSubmit}>
      <FileInput label="Upload your character sheet" name="sheet" />
      <Button type="submit">Upload</Button>
    </form>
  );
};
