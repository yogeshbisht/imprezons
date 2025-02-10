import { Id } from "@/convex/_generated/dataModel";
import DocumentEditor from "@/components/document/document-editor";

interface DocumentIdPageProps {
  params: Promise<{
    documentId: Id<"documents">;
  }>;
}

const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
  const { documentId } = await params;

  return <DocumentEditor documentId={documentId} />;
};

export default DocumentIdPage;
