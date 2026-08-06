import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  const formData = await request.formData();
  const project = {
    contact_email: String(formData.get("email") ?? "").trim(),
    property_address: String(formData.get("address") ?? "").trim(),
    property_type: String(formData.get("propertyType") ?? "").trim(),
    primary_need: String(formData.get("need") ?? "").trim(),
    notes: String(formData.get("notes") ?? "").trim(),
    status: "new",
  };

  if (!project.contact_email || !project.property_address) {
    return NextResponse.json({ error: "Email and property address are required." }, { status: 400 });
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    return NextResponse.json(
      { error: "Supabase is not configured yet. Add NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in Vercel." },
      { status: 503 },
    );
  }

  const supabase = createClient(url, serviceKey, { auth: { persistSession: false } });
  const { data, error } = await supabase.from("commercial_projects").insert(project).select("id").single();

  if (error) {
    console.error("Commercial project intake failed", error);
    return NextResponse.json({ error: "Unable to submit the project." }, { status: 500 });
  }

  return NextResponse.redirect(new URL(`/submitted?project=${data.id}`, request.url), 303);
}
