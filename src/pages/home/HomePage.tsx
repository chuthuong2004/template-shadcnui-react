import { AccordionDemo } from "@/pages/home/demo/AccordionDemo";
import { AlertDemo } from "@/pages/home/demo/AlertDemo";
import AlertDialogDemo from "@/pages/home/demo/AlertDialogDemo";
import { BreadcrumbDemo } from "@/pages/home/demo/BreadcrumbDemo";
import { CalendarDemo } from "@/pages/home/demo/CalendarDemo";
import { CardWithForm } from "@/pages/home/demo/CardDemo";
import { CarouselDemo } from "@/pages/home/demo/CarouselDemo";
import { CheckboxDemo } from "@/pages/home/demo/CheckboxDemo";
import { CollapsibleDemo } from "@/pages/home/demo/CollapsibleDemo";
import { ComboboxDemo } from "@/pages/home/demo/ComboboxDemo";
import { CommandDemo } from "@/pages/home/demo/CommandDemo";
import { ContextMenuDemo } from "@/pages/home/demo/ContextMenuDemo";
import { DataTableDemo } from "@/pages/home/demo/DataTableDemo";
import { DatePickerDemo } from "@/pages/home/demo/DatePickerDemo";
import { DialogDemo } from "@/pages/home/demo/DialogDemo";
import { DrawerDemo } from "@/pages/home/demo/DrawerDemo";
import { DropdownMenuDemo } from "@/pages/home/demo/DropdownMenuDemo";
import { HoverCardDemo } from "@/pages/home/demo/HoverCard";
import { InputDemo } from "@/pages/home/demo/InputDemo";
import { InputOTPDemo } from "@/pages/home/demo/InputOTPDemo";
import { MenubarDemo } from "@/pages/home/demo/MenuBarDemo";
import { NavigationMenuDemo } from "@/pages/home/demo/NavigationMenu";
import { PaginationDemo } from "@/pages/home/demo/PaginationDemo";
import { PopoverDemo } from "@/pages/home/demo/PopoverDemo";
import { ProgressDemo } from "@/pages/home/demo/ProgressDemo";
import { RadioGroupDemo } from "@/pages/home/demo/RadioGroup";
import { ResizableDemo } from "@/pages/home/demo/ResizableDemo";
import { ScrollAreaDemo } from "@/pages/home/demo/ScrollAreaDemo";
import { SelectDemo } from "@/pages/home/demo/SelectDemo";
import { SeparatorDemo } from "@/pages/home/demo/SeparatorDemo";
import { SheetDemo } from "@/pages/home/demo/SheetDemo";
import { SonnerDemo } from "@/pages/home/demo/SonnerDemo";
import { TabsDemo } from "@/pages/home/demo/TabDemo";
import { ToastDemo } from "@/pages/home/demo/ToastDemo";

const HomePage = () => {
  return (
    <div className="w-full mt-[50px]">
      <h1 className="text-4xl text-destructive font-bold capitalize italic">home page</h1>
      <p className="text-lg">This is the home page.</p>
      <div className="flex flex-col gap-4">
        <div className="flex">
          <AlertDialogDemo />
        </div>
        <div className="flex">
          <AlertDemo />
        </div>
        <div className="flex">
          <BreadcrumbDemo />
        </div>
        <div className="flex">
          <ToastDemo />
        </div>
        <div className="flex">
          <TabsDemo />
        </div>
        <div className="flex">
          <SonnerDemo />
        </div>
        <div className="flex">
          <SheetDemo />
        </div>
        <div className="flex">
          <SeparatorDemo />
        </div>
        <div className="flex">
          <SelectDemo />
        </div>
        <div className="flex">
          <ScrollAreaDemo />
        </div>
        <div className="flex">
          <ResizableDemo />
        </div>

        <div className="flex">
          <NavigationMenuDemo />
        </div>
        <div className="flex">
          <MenubarDemo />
        </div>

        <div className="flex">
          <PopoverDemo />
        </div>
        <div className="flex">
          <InputOTPDemo />
        </div>
        <div className="flex">
          <InputDemo />
        </div>
        <div className="flex">
          <HoverCardDemo />
        </div>
        <div className="flex">
          <DropdownMenuDemo />
        </div>
        <div className="flex">
          <DrawerDemo />
        </div>
        <div className="flex">
          <DialogDemo />
        </div>
        <div className="flex">
          <DatePickerDemo />
        </div>
        <div className="flex">
          <DataTableDemo />
        </div>
        <div className="flex">
          <ContextMenuDemo />
        </div>
        <div className="flex">
          <CommandDemo />
        </div>
        <div className="flex">
          <CollapsibleDemo />
        </div>
        <div className="flex">
          <CheckboxDemo />
        </div>
        <div className="flex">
          <ComboboxDemo />
        </div>
        <div className="flex">
          <CarouselDemo />
        </div>
        <div className="flex">
          <CardWithForm />
        </div>
        <div className="flex">
          <CalendarDemo />
        </div>
        <div className="flex">
          <AccordionDemo />
        </div>

        <div className="flex">
          <RadioGroupDemo />
        </div>
        <div className="flex">
          <ProgressDemo />
        </div>
        <div className="flex">
          <PaginationDemo />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
