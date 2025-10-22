"use client";

import {
    createDoctor,
    getAvailableDoctors,
    getDoctors,
    updateDoctor,
} from "@/lib/actions/doctors.action";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useGetDoctors() {
    const result = useQuery({
        queryKey: ["getDoctors"],
        queryFn: getDoctors,
    });

    return result;
}

export function useCreateDoctor() {
    const queryClient = useQueryClient();

    const result = useMutation({
        mutationFn: createDoctor,
        onSuccess: () => {
            // Invalidate the latest queries to refetch the data
            queryClient.invalidateQueries({ queryKey: ["getDoctors"] });
        },
        onError: (error) => {
            console.error("Error creating doctor:", error);
        },
    });

    return result;
}

export function useUpdateDoctor() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updateDoctor,
        onSuccess: () => {
            // Invalidate the latest queries to refetch the data
            queryClient.invalidateQueries({ queryKey: ["getDoctors"] });
            queryClient.invalidateQueries({ queryKey: ["getAvailableDoctors"] });
        },
        onError: (error) => {
            console.error("Error updating doctor:", error);
        },
    });
}

// Get available doctors for appointments
export function useAvailableDoctors() {
    const result = useQuery({
        queryKey: ["getAvailableDoctors"],
        queryFn: getAvailableDoctors,
    });

    return result;
}
