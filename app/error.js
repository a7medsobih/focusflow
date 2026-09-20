"use client";

import { Button } from "@/components/ui/button";

export default function Error({ reset }) {
    return (
        <div>
            <p>Something went wrong.</p>
            <Button type="button" onClick={() => reset()}>
                Try again
            </Button>
        </div>
    );
}
