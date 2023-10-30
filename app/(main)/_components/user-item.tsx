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
    // <DropdownMenuContent
    //   className="w-80 relative z-[99]"
    //   align="start"
    //   alignOffset={11}
    //   forceMount
    // >
    //   <div className="flex flex-col space-y-4 p-2">
    //     <p className="text-xs font-medium leading-none text-muted-foreground">
    //       {user?.emailAddresses[0].emailAddress}
    //     </p>
    //     <div className="flex items-center gap-x-2">
    //       <div className="rounded-md bg-secondary p-1">
    //         <Avatar className="h-8 w-8">
    //           <AvatarImage src={user?.imageUrl} />
    //         </Avatar>
    //       </div>
    //       <div className="space-y-1">
    //         <p className="text-sm line-clamp-1">
    //           {user?.fullName}&apos;s Imprezion
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    //   <DropdownMenuSeparator />
    //   <DropdownMenuItem
    //     asChild
    //     className="w-full cursor-pointer text-muted-foreground"
    //   >
    //     <SignOutButton>Log out</SignOutButton>
    //   </DropdownMenuItem>
    // </DropdownMenuContent>
  );
};

export default UserItem;
