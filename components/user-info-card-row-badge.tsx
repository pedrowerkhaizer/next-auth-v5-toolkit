import { Badge } from "@/components/ui/badge";

interface UserInfoRowProps {
  label: string;
  value: string | undefined | null;
  enabled: boolean | undefined | null;
}
export const UserInfoRowBadge = ({
  label,
  value,
  enabled,
}: UserInfoRowProps) => {
  return (
    <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
      <p className="text-sm font-medium">{label}</p>
      <Badge variant={enabled ? "success" : "destructive"}>{value}</Badge>
    </div>
  );
};
