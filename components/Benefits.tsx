type BenefitsProps = {
  items: string[];
};

export default function Benefits({ items }: BenefitsProps) {
  return (
    <section className="py-18 sm:py-24">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="section-label">Is This For You?</p>
          <h2 className="mt-4 section-heading">
            This checklist is for you if any of these sound familiar.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <article key={item} className="glass-panel rounded-[1.8rem] p-6 sm:p-7">
              <p className="text-base leading-8 text-[#e4dac8] sm:text-lg">{item}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
