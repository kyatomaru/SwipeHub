import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface FiltersDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function FiltersDialog({
  open,
  onOpenChange,
}: FiltersDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>絞り込み</DialogTitle>
        </DialogHeader>
        <div>
          <p className="text-muted-foreground mb-4">
            今後実装予定です
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

