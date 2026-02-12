import { useState } from "react";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import { productSizes } from "@/lib/product-sizes";
import { submitWeb3Form } from "@/lib/web3forms";
import { toast } from "sonner";

interface SpecSheetDialogProps {
  productKey: string;
  productName: string;
}

const SpecSheetDialog = ({ productKey, productName }: SpecSheetDialogProps) => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [variant, setVariant] = useState("");
  const [loading, setLoading] = useState(false);

  const sizes = productSizes[productKey] || [];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !variant) return;

    setLoading(true);
    try {
      await submitWeb3Form({
        name: name.trim(),
        email: email.trim(),
        product: productName,
        size: variant,
        message: `Spec sheet request for ${productName} – Variant: ${variant}`,
        subject: `Spec Sheet Request: ${productName} (${variant})`,
      });
      toast.success(t("specSheet.toast.success"), {
        description: t("specSheet.toast.successDesc"),
      });
      setOpen(false);
      setName("");
      setEmail("");
      setVariant("");
    } catch {
      toast.error(t("contact.toast.error"), {
        description: t("contact.toast.errorDesc"),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" variant="outline" className="border-border hover:bg-accent">
          <FileText className="mr-2 h-4 w-4" />
          {t("productPage.requestSpec")}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-card">
        <DialogHeader>
          <DialogTitle className="text-xl font-black">{t("specSheet.title")}</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {t("specSheet.description")}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <div className="space-y-2">
            <Label htmlFor="spec-variant">{t("specSheet.variant")}</Label>
            <Select value={variant} onValueChange={setVariant}>
              <SelectTrigger id="spec-variant" className="bg-background">
                <SelectValue placeholder={t("specSheet.selectVariant")} />
              </SelectTrigger>
              <SelectContent className="bg-card border-border z-[60]">
                {sizes.map((size) => (
                  <SelectItem key={size} value={size}>
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="spec-name">{t("contact.form.fullName")}</Label>
            <Input
              id="spec-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t("contact.form.placeholder.name")}
              required
              maxLength={100}
              className="bg-background"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="spec-email">{t("contact.form.email")}</Label>
            <Input
              id="spec-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("contact.form.placeholder.email")}
              required
              maxLength={255}
              className="bg-background"
            />
          </div>
          <Button
            type="submit"
            disabled={loading || !variant}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          >
            {loading ? t("contactPage.form.sending") : t("specSheet.submit")}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SpecSheetDialog;
