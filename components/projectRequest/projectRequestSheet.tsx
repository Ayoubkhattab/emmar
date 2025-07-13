"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useForm, Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface ProjectRequestSheetProps {
  mosque: {
    id: number;
    name: string;
  };
}

type FormData = {
  name: string;
  email: string;
  phone: number;
  agency: string;
};

export function ProjectRequestSheet({ mosque }: ProjectRequestSheetProps) {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      agency: "",
    },
  });

  const onSubmit = (data: FormData) => {
    alert(
      `✅ تم إرسال طلب دراسة لمشروع "${mosque.name}" (رمز: ${mosque.id}) بنجاح\n\n` +
        `البيانات: ${JSON.stringify(data, null, 2)}`
    );
    reset();
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="w-full bg-[var(--gold-primary)] text-black font-semibold hover:opacity-90">
          طلب دراسة المشروع
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-full sm:w-[400px] px-4 pt-4 space-y-6"
      >
        <SheetHeader>
          <SheetTitle>طلب دراسة المشروع</SheetTitle>
          <SheetDescription>
            المشروع: <strong>{mosque.name}</strong> <br />
            الرمز التعريفي: <strong>{mosque.id}</strong>
          </SheetDescription>
        </SheetHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-4 px-1 text-right"
        >
          <div className="grid gap-2">
            <Label htmlFor="name">الاسم الكامل</Label>
            <Input
              id="name"
              {...register("name", { required: "الاسم مطلوب" })}
              placeholder="أدخل اسمك الكامل"
            />
            {errors.name && (
              <span className="text-red-500 text-xs">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="agency">الجهة</Label>
            <Controller
              control={control}
              name="agency"
              rules={{ required: "الجهة مطلوبة" }}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue=""
                >
                  <SelectTrigger className="w-full  text-end" dir="rtl">
                    <SelectValue
                      className="text-start"
                      placeholder="اختر الجهة الداعمة"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="charity">خيرية</SelectItem>
                      <SelectItem value="government">حكومية</SelectItem>
                      <SelectItem value="private">خاصة</SelectItem>
                      <SelectItem value="company">شركة</SelectItem>
                      <SelectItem value="other">أخرى</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.agency && (
              <span className="text-red-500 text-xs">
                {errors.agency.message}
              </span>
            )}
          </div>

          <div className="grid gap-2 text-right">
            <Label htmlFor="phone">رقم الهاتف</Label>
            <Input
              id="phone"
              type="tel"
              {...register("phone", {
                required: "رقم الهاتف مطلوب",
                pattern: {
                  value: /^[0-9+\-\s]{8,15}$/,
                  message: "رقم هاتف غير صالح",
                },
              })}
            />
            {errors.phone && (
              <span className="text-red-500 text-xs">
                {errors.phone.message}
              </span>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">البريد الإلكتروني</Label>
            <Input
              id="email"
              type="email"
              {...register("email", {
                required: "البريد الإلكتروني مطلوب",
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "بريد إلكتروني غير صالح",
                },
              })}
              placeholder="example@email.com"
            />
            {errors.email && (
              <span className="text-red-500 text-xs">
                {errors.email.message}
              </span>
            )}
          </div>

          <SheetFooter className="pt-4">
            <Button
              type="submit"
              className="bg-[var(--green-primary)] text-white"
            >
              إرسال
            </Button>
            <SheetClose asChild>
              <Button type="button" variant="outline">
                إغلاق
              </Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}
