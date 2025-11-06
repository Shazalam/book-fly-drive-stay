// src/app/(hooks)/useApiToast.ts
import { useEffect } from "react";
import toast from "react-hot-toast";

export function useApiToast({
  loading,
  success,
  error,
  loadingMsg = "Processing...",
  showToast = true,
}: {
  loading: boolean;
  success: string | null;
  error: string | null;
  loadingMsg?: string;
  successMsg?: string;
  errorMsg?: string;
  showToast?: boolean;
}) {
  useEffect(() => {
    if (!showToast) return;
    let toastId: string | undefined;

    if (loading) {
      toastId = toast.loading(loadingMsg, { id: toastId });
    } else if (success) {
      toast.dismiss();
      toast.success(success, { id: toastId });
    } else if (error) {
      toast.dismiss();
      toast.error(error, { id: toastId });
    }
    // Optionally dismiss loading on unmount
    return () => {
      toast.dismiss(toastId);
    };
  }, [loading, success, error, showToast, loadingMsg]);
}
