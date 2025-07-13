"use client";

import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ContactFormData {
  name: string;
  agency: string;
  phone: string;
  email: string;
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    alert("✅ تم إرسال طلبك بنجاح!");
    reset();
  };

  return (
    <div className="max-w-7xl mb-10 mx-auto p-6 pt-24 grid grid-cols-1 md:grid-cols-2 gap-10 text-right">
      <div>
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[var(--green-primary)] mb-4">
            تواصل معنا
          </h1>
          <p className="text-lg max-w-xl">
            كن شريكاً بالخير
            <br />
            نرحب بجميع الجهات والأفراد الراغبين بالمساهمة في إعادة إعمار المساجد
            التاريخية في سوريا. يمكنك التواصل معنا من خلال تعبئة النموذج التالي،
            وسيقوم فريقنا بالرد عليك في أقرب وقت ممكن.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-y-6">
          <div className="grid gap-2">
            <Label htmlFor="name">الاسم *</Label>
            <Input
              id="name"
              {...register("name", { required: "الاسم مطلوب" })}
              placeholder="أدخل اسمك الكامل"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="agency">الجهة</Label>
            <Controller
              control={control}
              name="agency"
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue=""
                >
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="text-right" dir="rtl">
                    <SelectGroup>
                      <SelectItem value="charity">خيرية</SelectItem>
                      <SelectItem value="government">حكومية</SelectItem>
                      <SelectItem value="private">خاصة</SelectItem>
                      <SelectItem value="other">أخرى</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="phone">رقم الهاتف</Label>
            <Input
              id="phone"
              {...register("phone", {
                pattern: {
                  value: /^[0-9+\-\s]{8,15}$/,
                  message: "رقم هاتف غير صالح",
                },
              })}
              placeholder="أدخل رقم هاتفك"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">البريد الإلكتروني *</Label>
            <Input
              id="email"
              type="email"
              {...register("email", {
                required: "البريد الإلكتروني مطلوب",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "البريد الإلكتروني غير صالح",
                },
              })}
              placeholder="example@email.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="bg-[var(--green-primary)] text-white"
          >
            إرسال الطلب
          </Button>
        </form>
      </div>

      <div className="flex flex-col gap-6 pt-20 px-10">
        <h1 className="text-2xl">معلومات الاتصال </h1>
        <div className=" p-6 h-40 rounded-md shadow-sm border   flex flex-col justify-between">
          <h2 className="text-xl font-semibold text-foreground mb-2">
            العنوان
          </h2>
          <p>وزارة الأوقاف، دمشق، سوريا</p>
        </div>

        <div className="p-6 h-40 rounded-md shadow-sm border   flex flex-col justify-between">
          <h2 className="text-xl font-semibold text-foreground mb-2">
            البريد الإلكتروني
          </h2>
          <p>
            <a
              href="mailto:eng-requests@awqaf.gov.sy"
              className="underline hover:text-[var(--green-primary)]"
            >
              eng-requests@awqaf.gov.sy
            </a>
          </p>
        </div>

        <div className=" p-6 h-40 rounded-md shadow-sm border   flex flex-col justify-between">
          <h2 className="text-xl font-semibold text-foreground mb-2">
            ساعات العمل
          </h2>
          <p>الأحد - الخميس: 9:00 صباحاً - 3:00 مساءً</p>
        </div>
      </div>
    </div>
  );
}
