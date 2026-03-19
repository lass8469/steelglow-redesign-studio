const WEB3FORMS_ACCESS_KEY = "2a8d7c6c-8bdf-47bf-8a04-e171651dd101";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

interface Web3FormsData {
  name: string;
  email: string;
  message: string;
  company?: string;
  product?: string;
  size?: string;
  subject?: string;
}

export async function submitWeb3Form(data: Web3FormsData): Promise<{ success: boolean }> {
  const payload: Record<string, string> = {
    access_key: WEB3FORMS_ACCESS_KEY,
    name: data.name,
    email: data.email,
    message: data.message,
    subject: data.subject || "New Contact from Website",
  };

  if (data.company) payload.company = data.company;
  if (data.product) payload.product = data.product;
  if (data.size) payload.size = data.size;

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || "Form submission failed");
  }

  return { success: true };
}
