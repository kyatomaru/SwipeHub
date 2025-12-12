import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface AboutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AboutDialog({
  open,
  onOpenChange,
}: AboutDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>サービス概要</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          <ul className="space-y-3 text-foreground list-disc list-inside text-sm">
            <li>
              成人向け作品の情報を、スワイプ操作で発見しやすくするWebサイトです。
            </li>
            <li>作品の詳細は外部（FANZA）へ遷移して確認します。</li>
            <li>
              本サイトは開発中のため、現在はコンテンツを表示していません。
            </li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}

