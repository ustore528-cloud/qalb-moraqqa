import SectionHeader from './SectionHeader'

const reasons = [
  {
    title: 'واقع إنساني حقيقي',
    text: 'مستوحاة من وجعٍ قريب من الحياة، لا من خيالٍ بعيد عنها.',
  },
  {
    title: 'خلف الأبواب المغلقة',
    text: 'تكشف ما يُخفى داخل البيوت والمؤسسات والقلوب.',
  },
  {
    title: 'صوت من الصمت',
    text: 'تمنح مساحة لمن أُجبروا طويلًا على السكوت.',
  },
  {
    title: 'مواجهة الحقيقة',
    text: 'لا تبيع الألم، بل تفتح بابًا لفهمه ومواجهته.',
  },
  {
    title: 'أثر يبقى',
    text: 'رواية تُقرأ بالقلب، وتترك سؤالًا لا يغادر بسهولة.',
  },
]

export default function WhyRead() {
  return (
    <section className="section section--alt" id="why-read">
      <div className="section__inner">
        <SectionHeader title="لماذا تقرأ «قلب مرقّع»؟" />

        <div className="reasons-grid">
          {reasons.map((reason) => (
            <article key={reason.title} className="reason-card">
              <span className="reason-card__dot" aria-hidden="true" />
              <h3 className="reason-card__title">{reason.title}</h3>
              <p className="reason-card__text">{reason.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
