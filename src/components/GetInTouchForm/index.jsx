/* eslint-disable react/prop-types */

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const GetInTouchForm = ({ open, setOpen }) => {
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent onOpenAutoFocus={(e) => e.preventDefault()}>
          <DialogHeader>
            <DialogTitle className="border-b pb-4 mb-4">
              <h2 className="text-2xl text-primary font-bold text-center">
                Get In Touch
              </h2>
            </DialogTitle>
            <DialogDescription>
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    className="w-full mt-1"
                    placeholder="Ex. John Doe"
                  />
                </div>
                <div className="col-span-12">
                  <Label htmlFor="name">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    className="w-full mt-1"
                    placeholder="Ex. john@example.com"
                  />
                </div>
                <div className="col-span-12">
                  <Label htmlFor="name">Mobile *</Label>
                  <Input
                    id="mobile"
                    className="w-full mt-1"
                    placeholder="Ex. +91 - 985 962 3695"
                  />
                </div>
                <div className="col-span-12">
                  <Button className="w-full">Get In Touch</Button>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GetInTouchForm;
