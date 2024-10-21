import { ExtendedUser } from "@/next-auth";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { UserInfoRow } from "@/components/user-info-card-row";
import { UserInfoRowBadge } from "@/components/user-info-card-row-badge";

interface UserInfoProps {
  user?: ExtendedUser;
  label: string;
}

export const UserInfo = ({ user, label }: UserInfoProps) => {
  return (
    <Card className="w-[600px] shadow-md">
      <CardHeader className="text-2xl font-semibold text-center">
        <h3>{label}</h3>
      </CardHeader>
      <CardContent className="space-y-4">
        <UserInfoRow label="ID" value={user?.id} />
        <UserInfoRow label="Name" value={user?.name} />
        <UserInfoRow label="Email" value={user?.email} />
        <UserInfoRow label="Image" value={user?.image} />
        <UserInfoRow label="Role" value={user?.role} />
        <UserInfoRowBadge
          label="Is Two Factor Enabled"
          enabled={user?.isTwoFactorEnabled}
          value={user?.isTwoFactorEnabled ? "ON" : "OFF"}
        />
      </CardContent>
    </Card>
  );
};
