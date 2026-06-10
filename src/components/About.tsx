import SectionHeader from './SectionHeader'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="section__inner">
        <SectionHeader title="عن الرواية" />

        <div className="section__body prose">
          <p>
            «قلب مرقّع» رواية واقعية مقدسية عربية للكاتبة بيان شراونة، تفتح
            للقارئ بابًا على عالمٍ خفيّ لا يُرى بسهولة؛ عالم يعيش خلف أسوار
            البيوت والمؤسسات والقلوب.
          </p>
          <p>
            هي ليست رواية عن الألم فقط، بل عن الإنسان حين يجد نفسه في مواجهة
            الخوف، الفقر، <span className="hl">الصمت</span>، القسوة، والخذلان.
            تكشف الرواية كيف يمكن للحياة أن تترك شقوقها داخل القلب، وكيف يحاول
            الإنسان أن <span className="hl hl--gold">يرمّم نفسه</span> رغم كل ما
            مرّ به.
          </p>
        </div>
      </div>
    </section>
  )
}
