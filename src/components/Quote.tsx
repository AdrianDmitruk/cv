import React from 'react'

import '../scss/section/quote.scss'
import { useTranslation } from 'react-i18next'
import qu from '../assets/svg/qu.svg'
import cub from '../assets/svg/cub1.svg'

export const Quote = () => {
  const { t } = useTranslation()

  return (
    <section className="quote">
      <img className="quote__cub" src={cub} alt="cub" />
      <div className="container quote__container">
        <h3 className="quote__title">
          <img className="quote__icon-first" src={qu} alt="qu" />
          {t('quote')}
          <img className="quote__icon-second" src={qu} alt="qu" />
        </h3>
        <p className="quote__subtitle">- Dr. Who</p>
      </div>
    </section>
  )
}
