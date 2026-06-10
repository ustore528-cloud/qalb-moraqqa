import { useState } from 'react'

export default function BookCover() {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className="book-cover-ring" aria-label="غلاف الرواية">
        <div className="book-cover book-cover--placeholder">
          <div className="book-cover__placeholder-inner">
            <span className="book-cover__ornament" aria-hidden="true">✦</span>
            <p>غلاف الرواية</p>
            <span className="book-cover__ornament" aria-hidden="true">✦</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="book-cover-ring">
      <div className="book-cover">
        <img
          src="/images/book-cover.jpg"
          alt="غلاف رواية قلب مرقّع للكاتبة بيان شراونة"
          onError={() => setFailed(true)}
        />
      </div>
    </div>
  )
}
