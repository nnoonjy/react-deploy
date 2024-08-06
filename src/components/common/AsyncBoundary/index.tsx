
import type { ComponentProps } from "react";
import { forwardRef, Suspense, useImperativeHandle, useRef } from "react";
import type { ErrorBoundaryProps } from "react-error-boundary";
import { ErrorBoundary } from "react-error-boundary";

type Props = {
  children: React.ReactNode;
  rejectedFallback?: ErrorBoundaryProps["fallback"];
  pendingFallback?: ComponentProps<typeof Suspense>["fallback"];
};

interface ResetRef {
  reset?(): void;
}

export const AsyncBoundary = forwardRef<ResetRef, Props>(
  ({ pendingFallback, rejectedFallback, children }, resetRef) => {

    const ref = useRef<ErrorBoundary | null>(null);

    useImperativeHandle(resetRef, () => ({
      reset: () => ref.current?.resetErrorBoundary(),
    }));

    return (
      <ErrorBoundary ref={ref} fallback={rejectedFallback ?? <></>}>
        <Suspense fallback={pendingFallback ?? <></>}>{children}</Suspense>
      </ErrorBoundary>
    );
  }

);
