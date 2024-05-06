import { createLazyFileRoute } from "@tanstack/react-router";
import { FileUploadPage } from "../modules/fileUpload/pages/FileUploadPage";

export const Route = createLazyFileRoute("/")({
  component: FileUploadPage,
});
