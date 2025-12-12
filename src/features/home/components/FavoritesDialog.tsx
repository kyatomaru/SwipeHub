import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface FavoritesDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function FavoritesDialog({
  open,
  onOpenChange,
}: FavoritesDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>お気に入り</DialogTitle>
        </DialogHeader>
        <p className="text-muted-foreground">お気に入りはまだありません</p>
      </DialogContent>
    </Dialog>
  );
}

