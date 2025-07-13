"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import { mosques } from "@/lib/data";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"; // عدل المسار حسب مشروعك
import { ProjectRequestSheet } from "@/components/projectRequest/projectRequestSheet";
import { promises } from "dns";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default function ProjectDetails({ params }: Props) {
  const mosque = mosques.find(async (m) => m.id === Number((await params).id));
  if (!mosque) return notFound();

  const fundingPercent = Math.round(
    (mosque.currentFunding / mosque.totalFunding) * 100
  );

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8" dir="rtl">
      <h1 className="text-4xl font-bold text-[var(--green-primary)]">
        {mosque.name}
      </h1>

      {mosque.image && (
        <div className="w-full h-[80vh] relative rounded-lg overflow-hidden shadow-lg">
          <img
            src={mosque.image}
            alt={mosque.name}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-black/5 to-transparent" />

          <div className="absolute bottom-1  right-4 text-white text-xs px-3 py-2 rounded-tl-lg space-y-1 text-right">
            <div className="text-black/75 pr-4 pb-4">
              {" "}
              <p className="bg-[var(--gold-primary)]  p-1 px-4 w-1/2 text-center text-sm font-bold rounded-xl">
                {getStatusLabel(mosque.status)}
              </p>
              <p className="text-3xl ">{mosque.name}</p>
              <p className="text-xl ">{mosque.city}</p>
            </div>
          </div>
        </div>
      )}

      {/* flex container: Tabs on the right, Funding card on the left */}
      <div className="flex flex-col lg:flex-row gap-8 justify-between">
        {/* Tabs على اليمين */}
        <div className="flex flex-col w-full lg:w-2/3 items-end">
          <Tabs
            defaultValue="schedule"
            className="w-full h-full flex flex-col items-end"
          >
            <TabsList className="flex flex-row-reverse gap-2 mb-4">
              <TabsTrigger value="schedule">الجدول الزمني</TabsTrigger>
              <TabsTrigger value="photos">الصور</TabsTrigger>
              <TabsTrigger value="details">التفاصيل</TabsTrigger>
            </TabsList>

            <TabsContent
              value="schedule"
              className="mt-4 flex-grow w-full  text-right"
            >
              <div className="space-y-4">
                <div className=" p-4 rounded-md ">
                  <h4 className="text-xl mb-1 text-[var(--foreground)]">
                    مرحلة الدراسة
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    تم الانتهاء من مرحلة الدراسة والتخطيط. تم تقييم الأضرار
                    وإعداد خطة الترميم والميزانية.
                  </p>
                </div>

                <div className="pt-20 p-4 rounded-md ">
                  <h4 className="text-xl  mb-1 text-[var(--foreground)]">
                    مرحلة التنفيذ
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    المشروع حالياً في مرحلة التنفيذ. تم إنجاز 0% من أعمال
                    الترميم.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="photos" className="mt-4 flex-grow text-right">
              <p>معرض الصور ... (أضف صور المشروع هنا)</p>
            </TabsContent>

            <TabsContent
              value="details"
              className="mt-4 flex-grow text-right w-full "
            >
              <div className="space-y-6 text-sm leading-relaxed  ">
                <div>
                  <h4 className="text-lg   text-[var(--foreground)] mb-2">
                    نبذة عن المشروع
                  </h4>
                  <p>
                    هو مسجد أُسس في عهد ... (يمكنك إضافة التاريخ الدقيق أو
                    الخلفية التاريخية هنا)
                  </p>
                </div>

                <div>
                  <h4 className="text-lg   text-[var(--foreground)] mb-4">
                    تفاصيل المشروع
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-muted/45 p-4 rounded-lg shadow-sm flex flex-col">
                      <span className="text-muted-foreground mb-1">
                        سعة المصلين:
                      </span>
                      <strong className="text-lg text-[var(--muted-foreground)]">
                        1,500
                      </strong>
                    </div>

                    <div className="bg-muted/45 p-4 rounded-lg shadow-sm flex flex-col">
                      <span className="text-muted-foreground mb-1">
                        الحالة:
                      </span>
                      <strong className="text-lg text-[var(--muted-foreground)]">
                        {getStatusLabel(mosque.status)}
                      </strong>
                    </div>

                    <div className="bg-muted/45 p-4 rounded-lg shadow-sm flex flex-col">
                      <span className="text-muted-foreground mb-1">
                        نسبة الإنجاز:
                      </span>
                      <strong className="text-lg text-[var(--muted-foreground)]">
                        0%
                      </strong>
                    </div>

                    <div className="bg-muted/45 p-4 rounded-lg shadow-sm flex flex-col">
                      <span className="text-muted-foreground mb-1">
                        الرمز التعريفي:
                      </span>

                      <strong className="text-lg text-[var(--muted-foreground)]">
                        {mosque.id}
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* بطاقة التمويل   */}
        <aside className="w-full lg:w-96 bg-card text-card-foreground p-6 rounded-xl shadow-md border space-y-6 ">
          <h2
            className="text-xl font-bold"
            style={{ color: "var(--green-primary)" }}
          >
            تفاصيل التمويل
          </h2>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium">{fundingPercent}% تمويل</span>
              <span className="text-xs opacity-80">
                ${mosque.currentFunding.toLocaleString()} / $
                {mosque.totalFunding.toLocaleString()}
              </span>
            </div>
            <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-[var(--gold-primary)] transition-all duration-300"
                style={{ width: `${fundingPercent}%` }}
              />
            </div>
          </div>

          <div className="flex flex-col space-y-4 p-4 rounded-md bg-muted">
            <h3 className="text-lg  text-[var(--muted-foreground)] dark:text-foreground mb-2">
              تفاصيل الميزانية
            </h3>
            <ul className="text-sm space-y-2 text-[var(--muted-foreground)] dark:text-foreground">
              <li className="flex justify-between">
                <span>تكاليف المواد:</span>
                <strong>$30,000</strong>
              </li>
              <li className="flex justify-between">
                <span>تكاليف العمالة:</span>
                <strong>$15,000</strong>
              </li>
              <li className="flex justify-between">
                <span>تكاليف إدارية:</span>
                <strong>$5,000</strong>
              </li>
              <li className="flex justify-between mt-2 border-t border-muted pt-2 font-bold">
                <span>الإجمالي:</span>
                <span>$50,000</span>
              </li>
            </ul>
          </div>

          <div className="text-[var(--muted-foreground)] dark:text-foreground">
            <h3 className="text-lg font-semibold mb-2">كيف يمكنك المساعدة</h3>
            <p className="text-sm mb-4 leading-relaxed">
              يمكنك المساهمة في هذا المشروع من خلال طلب دراسة المشروع والتواصل
              مع فريقنا.
            </p>

            <ProjectRequestSheet
              mosque={{ id: mosque.id, name: mosque.name }}
            />
          </div>
        </aside>
      </div>

      <div className="pt-4">
        <a
          href="/projects"
          className="inline-block bg-[var(--green-primary)] text-white px-5 py-3 rounded-md hover:opacity-90 transition"
        >
          ← الرجوع إلى المشاريع
        </a>
      </div>
    </div>
  );
}

function getStatusLabel(status: string) {
  switch (status) {
    case "under_study":
      return "قيد الدراسة";
    case "in_execution":
      return "قيد التنفيذ";
    case "completed":
      return "مكتمل";
    default:
      return status;
  }
}
