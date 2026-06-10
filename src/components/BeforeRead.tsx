import QuoteBlock from './QuoteBlock'
import SectionHeader from './SectionHeader'

const questions = [
  'كم سرًّا يختبئ خلف الأبواب التي نمرّ بجانبها كل يوم؟',
  'كم طفلًا بكى في صمت ولم يسمعه أحد؟',
  'كم امرأة ابتلعت وجعها لأن المجتمع كان يخشى الفضيحة أكثر من خوفه على الضحية؟',
  <>
    كم جريمة دُفنت، وكم حقيقة اختنقت، وكم إنسان طُلب منه{' '}
    <span className="hl">الصمت</span> حفاظًا على صورة الآخرين؟
  </>,
]

export default function BeforeRead() {
  return (
    <section className="section section--alt" id="before-read">
      <div className="section__inner">
        <SectionHeader title="قبل أن تقتني هذه الرواية" />

        <div className="section__body">
          <div className="questions-list">
            {questions.map((q, i) => (
              <QuoteBlock key={i} className="quote-block--question">
                <p>{q}</p>
              </QuoteBlock>
            ))}
          </div>
          <p className="section__closing">
            هذه الرواية ليست حكاية عابرة، بل شهادة على واقعٍ مؤلم ومسكوتٍ
            عنه، تضع القارئ أمام أسئلة إنسانية لا يمكن تجاهلها.
          </p>
        </div>
      </div>
    </section>
  )
}
