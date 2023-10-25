"use client";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
        Create, Organize, Achieve.<br/>Welcome to <span className="underline">Imprezion</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Versatile workspace where you can create,
        <br />
        organize, and achieve like never before.
      </h3>
      <Button>
        Enter Imprezion<ArrowRight size={16} className="ml-1"/>
      </Button>
    </div>
  );
};
