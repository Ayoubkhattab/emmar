export default function AboutPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 pt-24">
      <div className="flex flex-col lg:flex-row gap-12 ">
        {/* النصوص + القيم */}
        <div className="flex-1 space-y-10">
          {/* العنوان */}
          <h1 className="text-3xl font-extrabold text-[var(--foreground)]">
            عن المبادرة
          </h1>

          {/* الرؤية */}
          <div>
            <h2 className="text-xl font-bold mb-2 text-[var(--foreground)]">
              الرؤية
            </h2>
            <p className="text-sm leading-relaxed text-foreground">
              إعادة إحياء المساجد التاريخية في سوريا كمراكز للعبادة والثقافة
              والتراث، والحفاظ على الهوية المعمارية الإسلامية السورية للأجيال
              القادمة.
            </p>
          </div>

          {/* الرسالة */}
          <div>
            <h2 className="text-xl font-bold mb-2 text-[var(--foreground)]">
              الرسالة
            </h2>
            <p className="text-sm leading-relaxed text-foreground">
              توثيق إنجازات ترميم المساجد السورية، وعرض المشاريع المحتاجة
              للتمويل، واستقبال طلبات الداعمين، وتوفير منصة شفافة للتعاون بين
              الجهات المحلية والدولية المهتمة بالحفاظ على التراث الثقافي السوري.
            </p>
          </div>

          {/* القيم */}
          <div>
            <h2
              className="text-2xl font-bold mb-6"
              style={{ color: "var(--green-primary)" }}
            >
              القيم
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "الشفافية",
                  desc: "نلتزم بالشفافية الكاملة في جميع جوانب عملنا، من التخطيط إلى التنفيذ والتمويل.",
                },
                {
                  title: "الأصالة",
                  desc: "نحافظ على الأصالة المعمارية والتاريخية للمساجد أثناء عمليات الترميم.",
                },
                {
                  title: "التعاون",
                  desc: "نؤمن بقوة التعاون بين جميع الأطراف المعنية لتحقيق أهدافنا المشتركة.",
                },
                {
                  title: "الاستدامة",
                  desc: "نسعى لضمان استدامة مشاريعنا على المدى الطويل من خلال التخطيط الدقيق والصيانة المستمرة.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-card text-card-foreground border p-5 rounded-lg shadow-sm"
                >
                  <h3 className="text-lg font-semibold mb-2 text-[var(--foreground)]">
                    {item.title}
                  </h3>
                  <p className="text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* أثر المبادرة بالأرقام */}
        <div className="pt-20">
          <div className="w-full lg:w-[350px] bg-card text-card-foreground p-6 rounded-xl shadow-md border h-fit">
            <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">
              أثر المبادرة بالأرقام
            </h2>

            <div className="grid grid-cols-2 gap-4 text-center mb-8">
              {[
                { label: "إجمالي المساجد", value: "1" },
                { label: "قيد الدراسة", value: "0" },
                { label: "قيد التنفيذ", value: "1" },
                { label: "مكتمل", value: "0" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-3xl font-extrabold text-[var(--green-primary)]">
                    {item.value}
                  </p>
                  <p className="text-sm opacity-75">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-4 text-center">
              {[
                { label: "إجمالي التمويل المطلوب", value: "$50,000" },
                { label: "إجمالي التمويل المحصل", value: "$0" },
                { label: "نسبة التمويل", value: "0%" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xl font-bold">{item.value}</p>
                  <p className="text-sm opacity-75">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
