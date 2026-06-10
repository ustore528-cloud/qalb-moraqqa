import QuoteBlock from './QuoteBlock'
import SectionHeader from './SectionHeader'

export default function Meaning() {
  return (
    <section className="section" id="meaning">
      <div className="section__inner">
        <SectionHeader title="ماذا تعني هذه الرواية للقارئ؟" />

        <div className="section__body">
          <QuoteBlock>
            <p className="prose-quote">
              هذه الرواية لا تكتفي بسرد الحكاية، بل تضع القارئ أمام واقعٍ مؤلم
              ومسكوتٍ عنه. إنها رحلة داخل الجراح الخفية، داخل البيوت
              والمؤسسات والقلوب، حيث يتجاور <span className="hl">الصمت</span>{' '}
              والخوف والخذلان، ويظهر الإنسان وهو يحاول{' '}
              <span className="hl hl--gold">النجاة</span> وترميم نفسه رغم كل
              شيء.
            </p>
          </QuoteBlock>
        </div>
      </div>
    </section>
  )
}
