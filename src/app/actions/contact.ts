"use server";

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface ContactState {
  status: "idle" | "success" | "error";
  errors?: {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
  };
}

export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const message = formData.get("message") as string;

  const errors: ContactState["errors"] = {};

  if (!name || name.trim().length < 2) {
    errors.name = "El nombre debe tener al menos 2 caracteres.";
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Por favor, ingresa un email válido.";
  }

  if (phone && !/^[\d\s()+-]{7,15}$/.test(phone)) {
    errors.phone = "Por favor, ingresa un número de teléfono válido.";
  }

  if (!message || message.trim().length < 10) {
    errors.message = "El mensaje debe tener al menos 10 caracteres.";
  }

  if (Object.keys(errors).length > 0) {
    return { status: "error", errors };
  }

  const contactData: ContactFormData = {
    name: name.trim(),
    email: email.trim(),
    phone: phone?.trim() || undefined,
    message: message.trim(),
  };

  // TODO: Integrar con servicio de email (Resend, SendGrid, etc.)
  console.log("Nuevo mensaje de contacto:", contactData);

  return { status: "success" };
}
