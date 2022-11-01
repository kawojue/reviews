import reviews from './data'
import { useState } from 'react'

function App() {
  const [review, setReview] = useState(reviews[0])
  const { image, name, job, text } = review

  return (
    <main>
      <header className="md:mb-14">
        <h1 className="md:text-4xl">
          our reviews
        </h1>
        <div></div>
      </header>

      <section className="card md:h-[420px]">
        <div className="img-container">
          <img src={image} alt={name} />
          <span>
            <i className="fa-solid fa-quote-right"></i>
          </span>
        </div>

        <div className="text-[0.85rem]">
          <h3 className="md:text-[1rem]">
            {name}
          </h3>
          <h6 className="md:text-[1rem]">
            {job}
          </h6>
        </div>

        <p className="info md:text-[1rem]">{text}</p>

        <div className="btn-container">
          <button className="btn">
            <i class="fa-solid fa-angle-left"></i>
          </button>
          <button className="btn">
            <i class="fa-solid fa-angle-right"></i>
          </button>
        </div>

        <button className="rand-btn hover:bg-pry-clr-2 hover:text-pry-clr-4">
          suprise me
        </button>
      </section>
    </main>
  )
}

export default App