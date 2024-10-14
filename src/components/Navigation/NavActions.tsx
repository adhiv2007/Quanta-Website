"use client";

import * as React from "react";
import { Button, LinkButton } from "../ui/Button";

export function NavActions() {
  return (
    <div className="hidden lg:block">
      <LinkButton size="lg" href="/apply">
        Join Us
      </LinkButton>
    </div>
  );
}
