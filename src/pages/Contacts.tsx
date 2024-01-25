import React from 'react'

import '../scss/section/contactpage.scss'

import { ContactBlock } from '../components'

const Contacts = () => {
  return (
    <section className="contects-page">
      <div className="container">
        <h3 className="contects-page__title page-title">
          <span>/</span>contacts
        </h3>
        <ContactBlock />
      </div>
    </section>
  )
}

export default Contacts
