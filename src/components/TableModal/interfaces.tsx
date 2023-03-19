export interface TableModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (table: string) => void;
}
