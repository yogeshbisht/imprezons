"use client";

import { useUser } from "@clerk/clerk-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const UserItem = () => {
  const { user } = useUser();

  return (
    <div className="flex flex-col items-center p-3 w-full">
      <Avatar className="h-32 w-32">
        <AvatarImage src={user?.imageUrl} />
      </Avatar>
      <div className="text-start font-medium line-clamp-1 mt-4">
        {user?.fullName}&apos;s Imprezion
      </div>
      <div className="text-xs text-muted-foreground">
        ({user?.emailAddresses[0].emailAddress})
      </div>
    </div>
  );
};

export default UserItem;
