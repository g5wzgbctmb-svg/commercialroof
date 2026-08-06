import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function SubmittedPage() {
  return (
    <main className="confirmation-page">
      <div className="confirmation-card">
        <CheckCircle2 size={48} />
        <p className="eyebrow">Project received</p>
        <h1>Your commercial roof request has been submitted.</h1>
        <p>We will review the property information before scheduling documentation and matching the project with qualified Arizona commercial roofing contractors.</p>
        <Link className="button" href="/">Return to home</Link>
      </div>
    </main>
  );
}
