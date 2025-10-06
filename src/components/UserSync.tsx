"use client";

import { syncUser } from "@/lib/actions/user.actions";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

const UserSync = () => {
    const { isSignedIn, isLoaded } = useUser();

    useEffect(() => {
        const handleSyncUser = async () => {
            if (isLoaded && isSignedIn) {
                try {
                    await syncUser();
                } catch (error) {
                    console.error("Failed to sync user:", error);
                }
            }
        };

        handleSyncUser();
    }, [isLoaded, isSignedIn]);

    return null;
};

export default UserSync;
